/* ==========================================================================
   Agricultural Mechatronics & Robotics — animation engine
   A very small runtime shared by every chapter so that each lesson can show
   a mechanism moving instead of describing it. Copyright (c) 2026 Jedsada Saijai.

   Markup contract
   ---------------
     <figure class="anim" data-anim="ch02-loop">
       <div class="anim__head">…<span class="anim__tag">Animation 2.1</span></div>
       <div class="anim__stage"> …svg / canvas… </div>
       <div class="anim__controls">
         <button class="anim__btn" data-anim-play></button>
         <button class="anim__btn" data-anim-reset></button>
         <button class="anim__btn" data-anim-toggle="cloud">…</button>
         <label class="anim__param">…<input type="range" data-anim-param="kp"
                min="0" max="4" step="0.1" value="1.2"><output></output></label>
         <div class="anim__readout" data-anim-readout></div>
       </div>
       <figcaption>…</figcaption>
     </figure>

   Script
   ------
     AMRAnim.create('ch02-loop', {
       autoplay: true,
       setup:  function (c) { … },            // once, after DOM is ready
       update: function (dt, c) { … },        // dt in seconds, scaled by speed
       reset:  function (c) { … }             // restore the initial frame
     });

   Inside the callbacks `c` carries:
     c.root      the <figure>
     c.el(id)    getElementById shorthand, scoped to the figure
     c.p         parameter values from the range inputs (numbers)
     c.flag      toggle-button states (booleans)
     c.t         elapsed animation time in seconds
     c.say(k,v)  write a value into the readout area
   ========================================================================== */
(function (global) {
  'use strict';

  var reduced = false;
  try {
    reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {}

  /* ------------------------------------------------------------- helpers */
  function cssVar(name, fallback) {
    var v = getComputedStyle(document.documentElement).getPropertyValue(name);
    return (v && v.trim()) || fallback || '#888';
  }

  function clamp(v, lo, hi) { return v < lo ? lo : (v > hi ? hi : v); }

  function fmt(v, digits) {
    return (Math.round(v * Math.pow(10, digits)) / Math.pow(10, digits)).toFixed(digits);
  }

  /* --------------------------------------------------------------- Scope
     A minimal time-series plotter used for step responses, temperature
     traces and controller outputs. Colours follow the active theme.       */
  function Scope(canvas, opt) {
    this.c = canvas;
    this.ctx = canvas.getContext('2d');
    this.opt = opt || {};
    this.tSpan = this.opt.tSpan || 60;
    this.yMin = this.opt.yMin != null ? this.opt.yMin : 0;
    this.yMax = this.opt.yMax != null ? this.opt.yMax : 1;
    this.series = this.opt.series || [];
    this.data = this.series.map(function () { return []; });
    this.marks = [];
    this.resize();
  }

  Scope.prototype.resize = function () {
    var dpr = global.devicePixelRatio || 1;
    var r = this.c.getBoundingClientRect();
    var w = Math.max(240, r.width || this.c.clientWidth || 600);
    var h = r.height || this.c.clientHeight || 190;
    this.c.width = Math.round(w * dpr);
    this.c.height = Math.round(h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.w = w;
    this.h = h;
  };

  Scope.prototype.clear = function () {
    this.data = this.series.map(function () { return []; });
    this.marks = [];
  };

  Scope.prototype.push = function (t, values) {
    var self = this;
    this.series.forEach(function (s, i) {
      var v = values[s.key];
      if (v == null) { return; }
      self.data[i].push([t, v]);
      while (self.data[i].length && t - self.data[i][0][0] > self.tSpan) {
        self.data[i].shift();
      }
    });
  };

  /* A vertical annotation, e.g. the instant a disturbance was applied. */
  Scope.prototype.mark = function (t, label) { this.marks.push([t, label]); };

  Scope.prototype.draw = function (tNow) {
    var ctx = this.ctx, w = this.w, h = this.h;
    var padL = 42, padR = 10, padT = 10, padB = 22;
    var ink = cssVar('--ink-mute', '#777');
    var grid = cssVar('--border', '#e2e8e4');
    var t0 = Math.max(0, (tNow || 0) - this.tSpan);
    var t1 = t0 + this.tSpan;
    var self = this;

    function X(t) { return padL + (t - t0) / (t1 - t0) * (w - padL - padR); }
    function Y(v) { return padT + (1 - (v - self.yMin) / (self.yMax - self.yMin)) * (h - padT - padB); }

    ctx.clearRect(0, 0, w, h);

    // grid + y labels
    ctx.strokeStyle = grid; ctx.lineWidth = 1;
    ctx.fillStyle = ink; ctx.font = '11px Inter, system-ui, sans-serif';
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    var rows = 4;
    for (var i = 0; i <= rows; i++) {
      var v = this.yMin + (this.yMax - this.yMin) * i / rows;
      var y = Y(v);
      ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke();
      ctx.fillText(fmt(v, this.opt.yDigits != null ? this.opt.yDigits : 0), padL - 6, y);
    }
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    ctx.fillText(this.opt.xLabel || 't (s)', (padL + w - padR) / 2, h - 14);

    // setpoint
    if (this.opt.setpoint != null) {
      ctx.save();
      ctx.strokeStyle = cssVar('--ink-mute', '#888');
      ctx.setLineDash([6, 4]); ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(padL, Y(this.opt.setpoint)); ctx.lineTo(w - padR, Y(this.opt.setpoint));
      ctx.stroke(); ctx.restore();
    }

    // disturbance marks
    ctx.save();
    ctx.strokeStyle = cssVar('--gold-500', '#e3a010');
    ctx.setLineDash([3, 3]); ctx.lineWidth = 1.5;
    this.marks.forEach(function (m) {
      if (m[0] < t0) { return; }
      ctx.beginPath(); ctx.moveTo(X(m[0]), padT); ctx.lineTo(X(m[0]), h - padB); ctx.stroke();
    });
    ctx.restore();

    // series
    this.series.forEach(function (s, i) {
      var pts = self.data[i];
      if (pts.length < 2) { return; }
      ctx.strokeStyle = cssVar(s.color, '#2f8f5b');
      ctx.lineWidth = s.width || 2.2;
      if (s.dash) { ctx.setLineDash(s.dash); } else { ctx.setLineDash([]); }
      ctx.beginPath();
      pts.forEach(function (p, k) {
        var x = X(p[0]), y = clamp(Y(p[1]), padT - 4, h - padB + 4);
        if (k === 0) { ctx.moveTo(x, y); } else { ctx.lineTo(x, y); }
      });
      ctx.stroke();
      ctx.setLineDash([]);
    });
  };

  /* --------------------------------------------------------------- engine */
  var registry = {};

  function create(id, spec) {
    var root = document.querySelector('[data-anim="' + id + '"]');
    if (!root) { return null; }

    var readoutBox = root.querySelector('[data-anim-readout]');
    var readouts = {};

    var c = {
      id: id,
      root: root,
      t: 0,
      playing: false,
      p: {},
      flag: {},
      el: function (sel) { return root.querySelector(sel); },
      all: function (sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); },
      cssVar: cssVar,
      clamp: clamp,
      fmt: fmt,
      Scope: Scope,
      say: function (key, value) {
        if (!readoutBox) { return; }
        if (!readouts[key]) {
          var span = document.createElement('span');
          span.innerHTML = key + ' <b></b>';
          readoutBox.appendChild(span);
          readouts[key] = span.querySelector('b');
        }
        readouts[key].textContent = value;
      }
    };

    /* range parameters */
    c.all('[data-anim-param]').forEach(function (input) {
      var name = input.getAttribute('data-anim-param');
      var out = input.parentNode.querySelector('output');
      var unit = input.getAttribute('data-unit') || '';
      function sync() {
        c.p[name] = parseFloat(input.value);
        if (out) { out.textContent = input.value + (unit ? ' ' + unit : ''); }
      }
      input.addEventListener('input', function () {
        sync();
        if (spec.onParam) { spec.onParam(name, c.p[name], c); }
      });
      sync();
    });

    /* toggle buttons */
    c.all('[data-anim-toggle]').forEach(function (btn) {
      var name = btn.getAttribute('data-anim-toggle');
      c.flag[name] = btn.classList.contains('is-on');
      btn.addEventListener('click', function () {
        c.flag[name] = !c.flag[name];
        btn.classList.toggle('is-on', c.flag[name]);
        btn.setAttribute('aria-pressed', String(c.flag[name]));
        if (spec.onToggle) { spec.onToggle(name, c.flag[name], c); }
      });
    });

    /* play / pause / reset */
    var btnPlay = root.querySelector('[data-anim-play]');
    var btnReset = root.querySelector('[data-anim-reset]');

    function paint() {
      if (btnPlay) {
        var icon = btnPlay.querySelector('i');
        if (icon) { icon.className = c.playing ? 'fa-solid fa-pause' : 'fa-solid fa-play'; }
        btnPlay.querySelectorAll('[data-lang-th]').forEach(function (s) {
          s.textContent = c.playing ? 'หยุดชั่วคราว' : 'เล่น';
        });
        btnPlay.querySelectorAll('[data-lang-en]').forEach(function (s) {
          s.textContent = c.playing ? 'Pause' : 'Play';
        });
      }
    }

    var last = 0, raf = 0;
    function frame(now) {
      if (!c.playing) { return; }
      var dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
      last = now;
      c.t += dt;
      try { spec.update(dt, c); } catch (e) { c.playing = false; throw e; }
      raf = global.requestAnimationFrame(frame);
    }

    function play() {
      if (c.playing) { return; }
      c.playing = true; last = 0; paint();
      raf = global.requestAnimationFrame(frame);
    }
    function pause() {
      c.playing = false; paint();
      if (raf) { global.cancelAnimationFrame(raf); raf = 0; }
    }
    function reset() {
      c.t = 0;
      if (spec.reset) { spec.reset(c); }
      spec.update(0, c);
    }

    c.play = play; c.pause = pause; c.reset = reset;

    if (btnPlay) { btnPlay.addEventListener('click', function () { c.playing ? pause() : play(); }); }
    if (btnReset) {
      btnReset.addEventListener('click', function () {
        var wasPlaying = c.playing;
        pause(); reset();
        if (wasPlaying) { play(); }
      });
    }

    if (spec.setup) { spec.setup(c); }
    reset();
    paint();

    /* Only run while on screen, and never autoplay for reduced-motion users. */
    if ('IntersectionObserver' in global) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (!c.everSeen) {
              c.everSeen = true;
              if (spec.autoplay !== false && !reduced) { play(); }
            } else if (c.wasPlaying) { play(); }
          } else if (c.playing) {
            c.wasPlaying = true; pause();
          }
        });
      }, { threshold: 0.25 });
      io.observe(root);
    } else if (spec.autoplay !== false && !reduced) {
      play();
    }

    /* Redraw on resize and when the theme changes, so canvases stay sharp. */
    var redraw = function () {
      if (spec.onResize) { spec.onResize(c); }
      if (!c.playing) { spec.update(0, c); }
    };
    global.addEventListener('resize', redraw);
    document.querySelectorAll('[data-toggle-theme]').forEach(function (b) {
      b.addEventListener('click', function () { setTimeout(redraw, 30); });
    });

    registry[id] = c;
    return c;
  }

  global.AMRAnim = {
    create: create,
    Scope: Scope,
    cssVar: cssVar,
    clamp: clamp,
    fmt: fmt,
    get: function (id) { return registry[id]; },
    reducedMotion: reduced
  };
})(window);
