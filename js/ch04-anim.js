/* ==========================================================================
   Chapter 4 — animations
   4.1  an SFC running the seed-bagging machine beside it
   4.2  the three beats of a PLC scan, and the latency they create
   4.3  a latched start-stop rung with live power flow
   4.4  TON and TOF on a timing diagram, plus a CTU filling a crate
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var LIT = 'dg-fill-green dg-stroke-green';
  var DIM = 'dg-fill-soft dg-stroke';

  /* ------------------------------------------------------ Animation 4.1 */
  AMRAnim.create('ch04-sfc', {
    setup: function (c) {
      c.steps = [c.el('#s4-step0'), c.el('#s4-step1'), c.el('#s4-step2'), c.el('#s4-step3')];
      c.valve = c.el('#s4-valve');
      c.stream = c.el('#s4-stream');
      c.bag = c.el('#s4-bag');
      c.fill = c.el('#s4-fill');
      c.cap = c.el('#s4-cap');
      c.sealer = c.el('#s4-sealer');
      // step durations in seconds: S1 wait, S2 fill, S3 seal, S4 run out
      c.dur = [1.3, 1.9, 1.2, 1.5];
      c.names = ['S1', 'S2', 'S3', 'S4'];
    },

    reset: function (c) {
      c.step = 0;
      c.ts = 0;
      c.bags = 0;
      c.level = 0;
      c.bagX = 470;
      c.held = false;          // true while the jam holds the sequence at S4
    },

    update: function (dt, c) {
      var d = dt * (c.p.speed || 1);
      c.ts += d;
      var frac = Math.min(1, c.ts / c.dur[c.step]);

      if (c.step === 0) {                       // S1 — a bag arrives
        c.bagX = 470 + (620 - 470) * frac;
        c.level = 0;
        c.cap.setAttribute('opacity', '0');
        c.stream.setAttribute('opacity', '0');
        c.valve.setAttribute('class', DIM);
        c.sealer.setAttribute('transform', 'translate(0,0)');
      } else if (c.step === 1) {                // S2 — fill
        c.bagX = 620;
        c.level = frac;
        c.stream.setAttribute('opacity', '1');
        c.valve.setAttribute('class', LIT);
      } else if (c.step === 2) {                // S3 — seal
        c.stream.setAttribute('opacity', '0');
        c.valve.setAttribute('class', DIM);
        var squeeze = Math.sin(Math.min(1, frac * 1.2) * Math.PI) * 16;
        c.sealer.setAttribute('transform', 'translate(' + squeeze + ',0)');
        c.cap.setAttribute('opacity', frac > 0.4 ? '1' : '0');
      } else {                                  // S4 — run out of the machine
        c.sealer.setAttribute('transform', 'translate(0,0)');
        // The jam holds t4 false, so the step can never complete.
        if (c.flag.jam) {
          c.bagX = 620 + (700 - 620) * Math.min(1, c.ts / c.dur[3]);
          c.held = true;
        } else {
          c.held = false;
          c.bagX = 620 + (800 - 620) * frac;
        }
      }

      var advance = frac >= 1 && !(c.step === 3 && c.flag.jam);
      if (advance) {
        if (c.step === 3) { c.bags++; c.bagX = 470; }
        c.step = (c.step + 1) % 4;
        c.ts = 0;
      }

      c.steps.forEach(function (el, i) {
        el.setAttribute('class', i === c.step ? LIT : DIM);
      });
      c.bag.setAttribute('transform', 'translate(' + c.bagX + ',238)');
      var h = 46 * c.level;
      c.fill.setAttribute('y', -4 - h);
      c.fill.setAttribute('height', h);

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say(thai ? 'ขั้นที่แอ็กทีฟ' : 'active step', c.names[c.step]);
      c.say(thai ? 'ถุงเสร็จ' : 'bags done', c.bags);
      if (c.held) {
        c.say(thai ? 'สถานะ' : 'status', thai ? 'ค้างที่ S4 — t4 ไม่เป็นจริง' : 'stuck at S4 — t4 never true');
      } else {
        c.say(thai ? 'สถานะ' : 'status', thai ? 'เดินปกติ' : 'running');
      }
    }
  });

  /* ------------------------------------------------------ Animation 4.2
     The scan is drawn as a rolling timing diagram. Time is compressed so
     one scan of a few milliseconds is visible to the eye.               */
  AMRAnim.create('ch04-scan', {
    setup: function (c) {
      c.beats = [c.el('#s5-beat0'), c.el('#s5-beat1'), c.el('#s5-beat2')];
      c.btn = c.el('#s5-btn');
      c.bounds = c.el('#s5-bounds');
      c.tIn = c.el('#s5-trace-in');
      c.tImg = c.el('#s5-trace-img');
      c.tOut = c.el('#s5-trace-out');
      c.X0 = 330; c.X1 = 836;
      c.ROWS = { in: 110, img: 190, out: 258 };   // baseline y of each trace
      c.HIGH = 42;                                 // pixels for a logic 1
      c.WINDOW = 6;                                // scans shown across the plot
    },

    reset: function (c) {
      c.hist = [];        // samples of {t, input, image, output}
      c.image = 0;
      c.output = 0;
      c.scanT = 0;
      c.beat = 0;
      c.marks = [];       // scan start times, for the boundary lines
      c.firstPress = null;
      c.respond = null;
    },

    update: function (dt, c) {
      var tscan = c.p.tscan / 1000;              // seconds per scan
      var beatLen = tscan / 3;
      var realIn = c.flag.press ? 1 : 0;

      c.scanT += dt * 0.08;                      // slow the clock for the eye
      while (c.scanT >= beatLen) {
        c.scanT -= beatLen;
        c.beat = (c.beat + 1) % 3;
        if (c.beat === 0) {
          c.image = realIn;                      // beat 1 — read inputs
          c.marks.push(c.t);
          if (c.marks.length > c.WINDOW + 2) { c.marks.shift(); }
        } else if (c.beat === 2) {
          c.output = c.image;                    // beat 3 — write outputs
        }
      }
      // beat 2 computes the program; here the program is simply out = in

      c.hist.push([c.t, realIn, c.image, c.output]);
      var span = c.WINDOW * tscan * 12.5;        // seconds of history to keep
      while (c.hist.length && c.t - c.hist[0][0] > span) { c.hist.shift(); }

      /* measure the latency of the first edge we see */
      if (realIn && c.firstPress === null) { c.firstPress = c.t; c.respond = null; }
      if (!realIn && !c.output) { c.firstPress = null; }
      if (c.firstPress !== null && c.respond === null && c.output) { c.respond = c.t - c.firstPress; }

      /* --- draw the three traces as square waves ------------------------ */
      var t0 = c.t - span, t1 = c.t;
      function X(t) { return c.X0 + ((t - t0) / (t1 - t0)) * (c.X1 - c.X0); }
      function path(idx, base) {
        var d = '', prev = null;
        c.hist.forEach(function (s, k) {
          var y = base - (s[idx] ? c.HIGH : 0);
          var x = X(s[0]);
          if (k === 0) { d = 'M ' + x.toFixed(1) + ' ' + y.toFixed(1); }
          else {
            if (s[idx] !== prev) { d += ' L ' + x.toFixed(1) + ' ' + (base - (prev ? c.HIGH : 0)).toFixed(1); }
            d += ' L ' + x.toFixed(1) + ' ' + y.toFixed(1);
          }
          prev = s[idx];
        });
        return d;
      }
      c.tIn.setAttribute('d', path(1, c.ROWS.in));
      c.tImg.setAttribute('d', path(2, c.ROWS.img));
      c.tOut.setAttribute('d', path(3, c.ROWS.out));

      /* --- scan boundaries --------------------------------------------- */
      var lines = '';
      c.marks.forEach(function (m) {
        if (m < t0) { return; }
        var x = X(m).toFixed(1);
        lines += '<line x1="' + x + '" y1="60" x2="' + x + '" y2="268" class="dg-stroke" ' +
                 'stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/>';
      });
      c.bounds.innerHTML = lines;

      /* --- highlight the current beat and the button -------------------- */
      c.beats.forEach(function (el, i) {
        el.setAttribute('class', i === c.beat ? LIT : DIM);
      });
      c.btn.setAttribute('class', realIn ? 'dg-fill-gold dg-stroke' : DIM);

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say(thai ? 'จังหวะ' : 'beat', (c.beat + 1) + '/3');
      c.say('t scan', c.p.tscan + ' ms');
      c.say(thai ? 'ความหน่วงที่วัดได้' : 'measured delay',
            c.respond === null ? '—' : c.fmt(c.respond / 0.08 * 1000, 1) + ' ms');
    }
  });

  /* ------------------------------------------------------ Animation 4.3 */
  AMRAnim.create('ch04-ladder', {
    autoplay: true,

    setup: function (c) {
      c.wires = ['#s6-w1', '#s6-w2', '#s6-w3', '#s6-w4', '#s6-w5', '#s6-w6', '#s6-w7', '#s6-w8']
        .map(function (s) { return c.el(s); });
      c.gStart = c.el('#s6-start');
      c.gStop = c.el('#s6-stop');
      c.gEstop = c.el('#s6-estop');
      c.gSeal = c.el('#s6-seal');
      c.coil = c.el('#s6-coil');
      c.rotor = c.el('#s6-rotor');
      c.angle = 0;
    },

    reset: function (c) { c.Y = 0; c.angle = 0; },

    update: function (dt, c) {
      /* one evaluation of equation (4.7), once per animation frame */
      var start = !!c.flag.start, stop = !!c.flag.stop, estop = !!c.flag.estop;
      c.Y = (start || c.Y) && !stop && !estop ? 1 : 0;

      /* which wire segments are carrying power this cycle */
      var hotLeft = !stop && !estop;                       // reaches the stop contact
      var viaStart = start;
      var viaSeal = !!c.Y;
      var live = {
        '#s6-w1': true,
        '#s6-w2': viaStart,
        '#s6-w3': (viaStart || viaSeal) && !stop,
        '#s6-w4': (viaStart || viaSeal) && !stop && !estop,
        '#s6-w5': !!c.Y,
        '#s6-w6': true,
        '#s6-w7': true,
        '#s6-w8': viaSeal
      };
      var green = c.cssVar('--green-500', '#2f8f5b');
      var grey = c.cssVar('--steel-500', '#7c8a9d');
      c.wires.forEach(function (w, i) {
        var key = ['#s6-w1', '#s6-w2', '#s6-w3', '#s6-w4', '#s6-w5', '#s6-w6', '#s6-w7', '#s6-w8'][i];
        w.style.stroke = (live[key] && hotLeft) || key === '#s6-w1' || key === '#s6-w6' || key === '#s6-w7'
          ? (live[key] ? green : grey) : grey;
        w.style.strokeWidth = live[key] ? 4 : 2.5;
      });

      function contact(g, conducting) {
        g.style.stroke = conducting ? green : grey;
        Array.prototype.forEach.call(g.children, function (ch) {
          ch.style.stroke = conducting ? green : grey;
        });
      }
      contact(c.gStart, start);
      contact(c.gStop, !stop);
      contact(c.gEstop, !estop);
      contact(c.gSeal, viaSeal);
      Array.prototype.forEach.call(c.coil.children, function (ch) {
        ch.style.stroke = c.Y ? green : grey;
        ch.style.strokeWidth = c.Y ? 4 : 3;
      });

      /* the conveyor turns while the coil is energised */
      if (c.Y) { c.angle += 260 * dt; }
      c.rotor.setAttribute('transform', 'translate(680,222) rotate(' + (c.angle % 360) + ')');

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say('Y', c.Y ? '1' : '0');
      c.say(thai ? 'สายพาน' : 'conveyor',
            c.Y ? (thai ? 'เดิน' : 'running') : (thai ? 'หยุด' : 'stopped'));
      c.say('seal-in', viaSeal ? (thai ? 'จับไว้' : 'holding') : '—');
    }
  });

  /* ------------------------------------------------------ Animation 4.4 */
  AMRAnim.create('ch04-timer', {
    setup: function (c) {
      c.canvas = document.getElementById('tmr-scope');
      c.scope = new c.Scope(c.canvas, {
        tSpan: 14, yMin: -0.2, yMax: 3.4, yDigits: 0, xLabel: 't (s)',
        series: [
          { key: 'in', color: '--gold-500', width: 2.4 },
          { key: 'ton', color: '--green-500', width: 2.6 },
          { key: 'tof', color: '--sky-500', width: 2.4 }
        ]
      });
      c.fruitG = c.el('#s7-fruit');
      c.eye = c.el('#s7-eye');
      c.level = c.el('#s7-level');
      c.label = c.el('#s7-count');
    },

    onResize: function (c) { if (c.scope) { c.scope.resize(); } },

    reset: function (c) {
      c.scope.clear();
      c.in = 0;
      c.tonAcc = 0; c.tonQ = 0;
      c.tofAcc = 0; c.tofQ = 0;
      c.count = 0;
      c.cyc = 0;
      c.fruit = [];
      c.spawn = 0;
      c.wasBlocked = false;
      c.fruitG.innerHTML = '';
    },

    update: function (dt, c) {
      var PT = c.p.pt;
      var PV = Math.round(c.p.pv);

      /* ---- the input pulses: 2.5 s on, 2 s off -------------------------- */
      c.cyc += dt;
      if (c.cyc > 4.5) { c.cyc = 0; }
      c.in = c.cyc < 2.5 ? 1 : 0;

      /* ---- TON: output after the input has been on for PT -------------- */
      if (c.in) {
        c.tonAcc = Math.min(c.tonAcc + dt, PT);
        c.tonQ = c.tonAcc >= PT ? 1 : 0;
      } else {
        c.tonAcc = 0; c.tonQ = 0;
      }

      /* ---- TOF: follows on at once, lingers PT after the input drops --- */
      if (c.in) {
        c.tofQ = 1; c.tofAcc = 0;
      } else if (c.tofQ) {
        c.tofAcc += dt;
        if (c.tofAcc >= PT) { c.tofQ = 0; }
      }

      c.scope.push(c.t, { in: c.in * 0.8 + 2.3, ton: c.tonQ * 0.8 + 1.2, tof: c.tofQ * 0.8 + 0.1 });
      c.scope.draw(c.t);

      /* ---- the conveyor, the sensor and the CTU ------------------------ */
      c.spawn -= dt;
      if (c.spawn <= 0) {
        c.spawn = 1.1;
        var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        dot.setAttribute('r', '11');
        dot.setAttribute('cy', '84');
        dot.setAttribute('class', 'dg-fill-gold dg-stroke');
        dot.setAttribute('stroke-width', '1.5');
        c.fruitG.appendChild(dot);
        c.fruit.push({ el: dot, x: 50 });
      }

      var blocked = false;
      c.fruit.forEach(function (f) {
        f.x += 80 * dt;
        f.el.setAttribute('cx', f.x);
        if (Math.abs(f.x - 470) < 11) { blocked = true; }
      });
      /* count the rising edge of the beam being broken */
      if (blocked && !c.wasBlocked) {
        c.count++;
        if (c.count >= PV) { c.count = 0; }      // the counter resets itself
      }
      c.wasBlocked = blocked;
      c.eye.setAttribute('class', blocked ? 'dg-fill-gold dg-stroke' : 'dg-fill-sky dg-stroke');

      /* retire fruit that has left the belt */
      c.fruit = c.fruit.filter(function (f) {
        if (f.x > 600) { f.el.remove(); return false; }
        return true;
      });

      var h = 66 * (c.count / PV);
      c.level.setAttribute('y', 126 - h);
      c.level.setAttribute('height', h);
      c.label.textContent = c.count + ' / ' + PV;

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say(thai ? 'อินพุต' : 'input', c.in);
      c.say('TON', c.tonQ);
      c.say('TOF', c.tofQ);
      c.say('CV', c.count + '/' + PV);
    }
  });
});
