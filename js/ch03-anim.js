/* ==========================================================================
   Chapter 3 — animations
   3.2  the ideal calibration line against a real sensor with offset,
        sensitivity error, hysteresis and noise
   3.3  quantisation and aliasing: what digitising throws away
   3.5  PWM duty, the torque-speed line and the load line
   3.1  the hysteresis loop, and the backlash that causes it
   3.4  DC, stepper and servo driven to one angle, with and without overload
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ------------------------------------------------------ Animation 3.2
     Plot geometry follows the SVG in the page: x from 90 to 700 px,
     v from 255 (zero) up to 45 (full scale).                            */
  AMRAnim.create('ch03-sensor', {
    setup: function (c) {
      c.up = c.el('#a31-up');
      c.down = c.el('#a31-down');
      c.dot = c.el('#a31-dot');
      c.vline = c.el('#a31-vline');
      c.hline = c.el('#a31-hline');
      c.ideal = c.el('#a31-ideal');

      c.X0 = 90; c.X1 = 700;          // pixel span of the x axis
      c.Y0 = 255; c.Y1 = 45;          // pixel span of the v axis
      c.px = function (frac) { return c.X0 + frac * (c.X1 - c.X0); };
      c.py = function (frac) { return c.Y0 + c.clamp(frac, -0.05, 1.08) * (c.Y1 - c.Y0); };

      // A deterministic wobble, so the "noise" looks random but replays the same.
      c.wobble = function (u) {
        return Math.sin(u * 37.1) * 0.6 + Math.sin(u * 91.7) * 0.4;
      };
    },

    reset: function (c) {
      c.x = 0;            // operating point, 0 .. 1 of full scale
      c.dir = 1;          // +1 while rising, -1 while falling
    },

    update: function (dt, c) {
      var S = c.p.s, b = c.p.b / 100, H = c.p.h / 100, N = c.p.n / 100;

      /* sweep the operating point back and forth across the range */
      c.x += c.dir * dt * 0.28;
      if (c.x > 1) { c.x = 1; c.dir = -1; }
      if (c.x < 0) { c.x = 0; c.dir = 1; }

      /* the sensor's reading: gain and offset error, plus half the hysteresis
         band applied in whichever direction the point is currently moving   */
      function reading(x, dir) {
        return S * x + b + dir * H * 0.5;
      }

      /* redraw both branches of the characteristic */
      var upPts = [], downPts = [];
      for (var i = 0; i <= 60; i++) {
        var f = i / 60;
        upPts.push(c.px(f).toFixed(1) + ',' + c.py(reading(f, 1)).toFixed(1));
        downPts.push(c.px(f).toFixed(1) + ',' + c.py(reading(f, -1)).toFixed(1));
      }
      c.up.setAttribute('d', 'M ' + upPts.join(' L '));
      c.down.setAttribute('d', 'M ' + downPts.join(' L '));
      c.down.setAttribute('opacity', H > 0.001 ? '1' : '0');

      /* the live operating point, with noise added on top */
      var noisy = reading(c.x, c.dir) + N * c.wobble(c.t * 6);
      var X = c.px(c.x), Y = c.py(noisy);
      c.dot.setAttribute('cx', X); c.dot.setAttribute('cy', Y);
      c.vline.setAttribute('x1', X); c.vline.setAttribute('x2', X);
      c.vline.setAttribute('y2', Y);
      c.hline.setAttribute('x2', X); c.hline.setAttribute('y1', Y);
      c.hline.setAttribute('y2', Y);

      /* error of this single reading, as a percentage of full scale */
      var err = (noisy - c.x) * 100;
      c.say('x', c.fmt(c.x * 100, 0) + '%FS');
      c.say('v', c.fmt(noisy * 100, 1) + '%FS');
      c.say('error', (err >= 0 ? '+' : '') + c.fmt(err, 1) + '%FS');
    }
  });

  /* ------------------------------------------------------ Animation 3.3 */
  AMRAnim.create('ch03-adc', {
    setup: function (c) {
      c.canvas = document.getElementById('adc-scope');
      c.ctx = c.canvas.getContext('2d');
      c.sizeCanvas = function () {
        var dpr = window.devicePixelRatio || 1;
        var r = c.canvas.getBoundingClientRect();
        c.w = Math.max(280, r.width || 600);
        c.h = r.height || 230;
        c.canvas.width = Math.round(c.w * dpr);
        c.canvas.height = Math.round(c.h * dpr);
        c.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      c.sizeCanvas();
    },

    onResize: function (c) { c.sizeCanvas(); },

    reset: function (c) { c.phase = 0; },

    update: function (dt, c) {
      var bits = Math.round(c.p.bits);
      var fs = c.p.fs;                    // sample rate, Hz
      var f = c.p.f;                      // signal frequency, Hz
      var levels = Math.pow(2, bits);
      var step = 1 / levels;              // one LSB as a fraction of full scale
      var win = 2.0;                      // seconds of signal shown

      c.phase += dt * 0.35;               // slow scroll, so the eye can follow

      var ctx = c.ctx, w = c.w, h = c.h;
      var padL = 46, padR = 12, padT = 12, padB = 40;
      var plotH = h - padT - padB;

      function X(t) { return padL + (t / win) * (w - padL - padR); }
      function Y(v) { return padT + (1 - v) * plotH; }          // v in 0 .. 1
      function sig(t) { return 0.5 + 0.42 * Math.sin(2 * Math.PI * f * (t + c.phase)); }
      function quant(v) { return Math.min(1 - step, Math.floor(v / step) * step); }

      ctx.clearRect(0, 0, w, h);

      /* quantisation levels as faint horizontal rules, while they stay legible */
      ctx.strokeStyle = c.cssVar('--border', '#e2e8e4');
      ctx.lineWidth = 1;
      if (levels <= 64) {
        for (var q = 0; q <= levels; q++) {
          var y = Y(q * step);
          ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(w - padR, y); ctx.stroke();
        }
      }

      /* axis labels */
      ctx.fillStyle = c.cssVar('--ink-mute', '#777');
      ctx.font = '11px Inter, system-ui, sans-serif';
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText('FS', padL - 6, Y(1));
      ctx.fillText('0', padL - 6, Y(0));
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillText('t (s)', (padL + w - padR) / 2, h - 26);

      /* the true analogue signal */
      ctx.strokeStyle = c.cssVar('--sky-500', '#2a7fc1');
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (var i = 0; i <= 400; i++) {
        var t = (i / 400) * win;
        var x = X(t), y = Y(sig(t));
        if (i === 0) { ctx.moveTo(x, y); } else { ctx.lineTo(x, y); }
      }
      ctx.stroke();

      /* sampled and quantised: a zero-order hold staircase */
      var n = Math.max(2, Math.floor(win * fs));
      var pts = [];
      for (var k = 0; k <= n; k++) {
        var ts = (k / fs);
        if (ts > win) { break; }
        pts.push([ts, quant(sig(ts))]);
      }

      ctx.strokeStyle = c.cssVar('--green-500', '#2f8f5b');
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      pts.forEach(function (p, k) {
        var x = X(p[0]), y = Y(p[1]);
        if (k === 0) { ctx.moveTo(x, y); } else { ctx.lineTo(x, y); }
        var next = pts[k + 1];
        var xEnd = next ? X(next[0]) : (w - padR);
        ctx.lineTo(xEnd, y);
      });
      ctx.stroke();

      /* the quantisation error, drawn as a band under the traces */
      ctx.strokeStyle = c.cssVar('--gold-500', '#e3a010');
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      pts.forEach(function (p, k) {
        var e = sig(p[0]) - p[1];                     // 0 .. one LSB
        var x = X(p[0]);
        var yb = h - padB + 6;
        var y = yb - (e / Math.max(step, 1e-6)) * 14;
        if (k === 0) { ctx.moveTo(x, y); } else { ctx.lineTo(x, y); }
      });
      ctx.stroke();

      /* sample instants */
      ctx.fillStyle = c.cssVar('--green-500', '#2f8f5b');
      pts.forEach(function (p) {
        ctx.beginPath();
        ctx.arc(X(p[0]), Y(p[1]), 2.6, 0, Math.PI * 2);
        ctx.fill();
      });

      c.say('levels', levels);
      c.say('LSB', c.fmt(step * 100, 2) + '%FS');
      c.say('fs/2f', c.fmt(fs / (2 * f), 2));
      c.say('aliasing', fs > 2 * f ? 'no' : 'YES');
    }
  });

  /* ------------------------------------------------------ Animation 3.5 */
  AMRAnim.create('ch03-motor', {
    setup: function (c) {
      c.pwm = c.el('#a33-pwm');
      c.avg = c.el('#a33-avg');
      c.rotor = c.el('#a33-rotor');
      c.tsline = c.el('#a33-tsline');
      c.loadline = c.el('#a33-loadline');
      c.op = c.el('#a33-op');
      c.angle = 0;
    },

    reset: function (c) { c.angle = 0; },

    update: function (dt, c) {
      var D = c.p.duty / 100;
      var L = c.p.load / 100;

      /* ---- PWM waveform: four periods across the plot -------------------- */
      var x0 = 40, x1 = 380, yHi = 60, yLo = 120;
      var periods = 4, per = (x1 - x0) / periods;
      var d = 'M ' + x0 + ' ' + yLo;
      for (var k = 0; k < periods; k++) {
        var a = x0 + k * per;
        var bx = a + per * D;
        d += ' L ' + a.toFixed(1) + ' ' + yHi + ' L ' + bx.toFixed(1) + ' ' + yHi +
             ' L ' + bx.toFixed(1) + ' ' + yLo + ' L ' + (a + per).toFixed(1) + ' ' + yLo;
      }
      c.pwm.setAttribute('d', d);
      var yAvg = yLo - (yLo - yHi) * D;
      c.avg.setAttribute('y1', yAvg);
      c.avg.setAttribute('y2', yAvg);

      /* ---- torque-speed line, lifted by duty ----------------------------- */
      // Plot frame: omega along x from 500 to 820 px, torque up from 240 to 50.
      var xA = 500, xB = 820, yBase = 240, yTop = 50;
      var stallY = yBase - (yBase - yTop) * D;          // stall torque at x = xA
      var noLoadX = xA + (xB - xA) * D;                 // no-load speed on x
      c.tsline.setAttribute('x1', xA);
      c.tsline.setAttribute('y1', stallY);
      c.tsline.setAttribute('x2', noLoadX);
      c.tsline.setAttribute('y2', yBase);

      /* ---- load line: torque demand rises with speed --------------------- */
      var loadTopY = yBase - (yBase - yTop) * (0.15 + 0.85 * L);
      c.loadline.setAttribute('x1', xA);
      c.loadline.setAttribute('y1', yBase);
      c.loadline.setAttribute('x2', xB);
      c.loadline.setAttribute('y2', loadTopY);

      /* ---- intersection of the two lines = operating point --------------- */
      // motor:  T = D*(1 - w/D)   load: T = kL * w      (both normalised 0..1)
      var kL = 0.15 + 0.85 * L;
      var wOp = 0, tOp = 0;
      if (D > 0.001) {
        wOp = D / (1 + kL / 1);          // solve D*(1 - w/D) = kL*w  →  w = D/(1+kL)
        tOp = kL * wOp;
      }
      var opX = xA + (xB - xA) * wOp;
      var opY = yBase - (yBase - yTop) * tOp;
      c.op.setAttribute('cx', opX);
      c.op.setAttribute('cy', opY);

      /* ---- the shaft turns at the operating speed ------------------------ */
      c.angle += wOp * 720 * dt;
      c.rotor.setAttribute('transform', 'translate(168,205) rotate(' + (c.angle % 360) + ')');

      /* Near stall the back-EMF is small, so current runs away. */
      var current = D > 0.001 ? (D - wOp) / Math.max(D, 0.001) : 0;

      c.say('D', c.fmt(D * 100, 0) + '%');
      c.say('V avg', c.fmt(D * 12, 1) + ' V');
      c.say('speed', c.fmt(wOp * 100, 0) + '%');
      c.say('torque', c.fmt(tOp * 100, 0) + '%');
      c.say('current', c.fmt(current * 100, 0) + '%');
    }
  });

  /* ------------------------------------------------------ Animation 3.1
     The hysteresis loop. Plot geometry from the SVG: x runs 80 → 450 px,
     the reading runs 268 px (zero) up to 60 px (full scale).            */
  AMRAnim.create('ch03-hyst', {
    setup: function (c) {
      c.up = c.el('#a3h-up');
      c.down = c.el('#a3h-down');
      c.dot = c.el('#a3h-dot');
      c.gap = c.el('#a3h-gap');
      c.tooth = c.el('#a3h-tooth');
      c.gapArrow = c.el('#a3h-gaparrow');

      c.PX = function (f) { return 80 + f * 370; };
      c.PY = function (v) { return 268 - c.clamp(v, -0.08, 1.08) * 208; };
      c.toothX = 676;
    },

    reset: function (c) {
      c.x = 0;
      c.dir = 1;
      c.toothX = 676;
    },

    update: function (dt, c) {
      var H = c.p.h / 100;

      /* sweep the true quantity up, then back down */
      c.x += c.dir * dt * 0.22;
      if (c.x > 1) { c.x = 1; c.dir = -1; }
      if (c.x < 0) { c.x = 0; c.dir = 1; }

      /* rising readings lag low, falling readings lag high */
      function branch(x, dir) { return x - dir * H * 0.5; }

      var upPts = [], downPts = [];
      for (var i = 0; i <= 50; i++) {
        var f = i / 50;
        upPts.push(c.PX(f).toFixed(1) + ',' + c.PY(branch(f, 1)).toFixed(1));
        downPts.push(c.PX(f).toFixed(1) + ',' + c.PY(branch(f, -1)).toFixed(1));
      }
      c.up.setAttribute('d', 'M ' + upPts.join(' L '));
      c.down.setAttribute('d', 'M ' + downPts.join(' L '));

      /* the measured gap, drawn at mid-range */
      var gx = c.PX(0.5);
      c.gap.setAttribute('x1', gx); c.gap.setAttribute('x2', gx);
      c.gap.setAttribute('y1', c.PY(branch(0.5, 1)));
      c.gap.setAttribute('y2', c.PY(branch(0.5, -1)));
      c.gap.setAttribute('opacity', H > 0.005 ? '1' : '0');

      /* the live operating point rides whichever branch it is on */
      var v = branch(c.x, c.dir);
      c.dot.setAttribute('cx', c.PX(c.x));
      c.dot.setAttribute('cy', c.PY(v));

      /* the gear tooth crosses its free play whenever the direction reverses */
      var want = 676 - (c.dir > 0 ? 0 : 1) * (14 + H * 90);
      c.toothX += (want - c.toothX) * Math.min(1, dt * 4);
      c.tooth.setAttribute('x', c.toothX);
      c.gapArrow.setAttribute('x1', 652 - (H * 60));
      c.gapArrow.setAttribute('opacity', H > 0.005 ? '1' : '0.15');

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say(thai ? 'ทิศทาง' : 'direction', c.dir > 0 ? (thai ? 'ขาขึ้น ↑' : 'rising ↑')
                                                     : (thai ? 'ขาลง ↓' : 'falling ↓'));
      c.say('x', c.fmt(c.x * 100, 0) + '%FS');
      c.say('v', c.fmt(v * 100, 1) + '%FS');
      c.say('H', c.fmt(H * 100, 0) + '%FS');
    }
  });

  /* ------------------------------------------------------ Animation 3.4
     One commanded angle, three motors. Only the servo ever checks whether
     it actually arrived.                                                 */
  AMRAnim.create('ch03-motors3', {
    setup: function (c) {
      c.dc = c.el('#m3-dc');
      c.st = c.el('#m3-st');
      c.sv = c.el('#m3-sv');
      c.tgt = [c.el('#m3-dc-target'), c.el('#m3-st-target'), c.el('#m3-sv-target')];
      c.lost = c.el('#m3-lost');
      c.centres = [[142, 150], [430, 150], [718, 150]];

      /* the stepper dial gets tick marks, to show that it moves in jumps */
      var g = c.el('#m3-ticks');
      g.innerHTML = '';
      for (var i = 0; i < 24; i++) {
        var a = (i / 24) * Math.PI * 2;
        var ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ln.setAttribute('x1', 430 + Math.sin(a) * 68);
        ln.setAttribute('y1', 150 - Math.cos(a) * 68);
        ln.setAttribute('x2', 430 + Math.sin(a) * 76);
        ln.setAttribute('y2', 150 - Math.cos(a) * 76);
        ln.setAttribute('class', 'dg-stroke');
        ln.setAttribute('stroke-width', '2');
        ln.setAttribute('opacity', '0.45');
        g.appendChild(ln);
      }
      c.STEP = 15;            // degrees per commanded step, matching the ticks
    },

    reset: function (c) {
      c.restart = function () {
        c.aDC = 0;            // real shaft angle of the DC motor
        c.aST = 0;            // real shaft angle of the stepper
        c.cmdST = 0;          // what the stepper's controller believes
        c.aSV = 0;            // real shaft angle of the servo
        c.phase = 'run';
        c.hold = 0;
        c.lostDeg = 0;
      };
      c.restart();
    },

    update: function (dt, c) {
      var target = c.p.target;
      var over = !!c.flag.load;

      if (c.phase === 'run') {
        /* ---- DC: open loop. It is told to run for a fixed time, so a
                  heavier load simply means it travels less far. --------- */
        // It runs for a fixed time, so a heavier load simply leaves it short.
        var wDC = 150 * (over ? 0.55 : 1.0);            // deg/s under this load
        var reachDC = target * (over ? 0.55 : 1.0);     // where it will end up
        if (c.aDC < reachDC) {
          c.aDC = Math.min(c.aDC + wDC * dt, reachDC);
        }

        /* ---- stepper: pulses are counted, but under overload only part of
                  them actually move the shaft, and nothing notices. ------ */
        if (c.cmdST < target - 0.5) {
          var dstep = Math.min(120 * dt, target - c.cmdST);
          c.cmdST += dstep;
          c.aST += over ? dstep * 0.45 : dstep;          // the lost fraction
        }
        c.lostDeg = c.cmdST - c.aST;

        /* ---- servo: closed loop. The load slows it, but the encoder keeps
                  reporting, so it still arrives. ------------------------- */
        var eSv = target - c.aSV;
        var rate = 160 * (over ? 0.5 : 1.0);
        c.aSV += c.clamp(eSv * 3, -rate, rate) * dt;

        var settled = Math.abs(target - c.aSV) < 0.6 && c.cmdST >= target - 0.6;
        if (settled) { c.phase = 'hold'; c.hold = 0; }
      } else {
        c.hold += dt;
        if (c.hold > 2.2) { c.restart(); }
      }

      /* ---- draw ------------------------------------------------------- */
      function point(el, cx, cy, deg) {
        el.setAttribute('transform', 'translate(' + cx + ',' + cy + ') rotate(' + deg + ')');
      }
      point(c.dc, 142, 150, c.aDC);
      point(c.st, 430, 150, c.aST);
      point(c.sv, 718, 150, c.aSV);

      var rad = target * Math.PI / 180;
      c.centres.forEach(function (p, i) {
        c.tgt[i].setAttribute('x1', p[0]);
        c.tgt[i].setAttribute('y1', p[1]);
        c.tgt[i].setAttribute('x2', p[0] + Math.sin(rad) * 70);
        c.tgt[i].setAttribute('y2', p[1] - Math.cos(rad) * 70);
      });

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      if (c.lostDeg > 1) {
        c.lost.setAttribute('opacity', '1');
        c.lost.textContent = thai ? ('ตกขั้นไป ' + c.fmt(c.lostDeg, 0) + '° โดยไม่รู้ตัว')
                                  : ('lost ' + c.fmt(c.lostDeg, 0) + '°, unnoticed');
      } else {
        c.lost.setAttribute('opacity', '0');
      }

      c.say(thai ? 'สั่ง' : 'commanded', c.fmt(target, 0) + '°');
      c.say('DC', c.fmt(c.aDC, 0) + '°');
      c.say(thai ? 'สเต็ปเปอร์' : 'stepper', c.fmt(c.aST, 0) + '°');
      c.say(thai ? 'เซอร์โว' : 'servo', c.fmt(c.aSV, 0) + '°');
      c.say('e', c.fmt(Math.abs(target - c.aSV), 1) + '°');
    }
  });

});
