/* ==========================================================================
   Chapter 2 — animations
   2.1  sequence control (discrete steps) beside process control (continuous)
   2.2  open loop vs closed loop meeting the same disturbance, with a scope
   2.3  a signal travelling around the closed loop, renamed at every block
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var ACTIVE = 'dg-fill-green dg-stroke-green';
  var IDLE = 'dg-fill-soft dg-stroke';

  /* ------------------------------------------------------ Animation 2.1 */
  AMRAnim.create('ch02-seqproc', {
    setup: function (c) {
      c.valve = c.el('#s1-valve');
      c.stream = c.el('#s1-stream');
      c.bag = c.el('#s1-bag');
      c.fill = c.el('#s1-fill');
      c.cap = c.el('#s1-cap');
      c.chips = [c.el('#s1-c0'), c.el('#s1-c1'), c.el('#s1-c2'), c.el('#s1-c3')];
      c.vent = c.el('#s2-vent');
      c.merc = c.el('#s2-merc');
      c.sun = c.el('#s2-sun');
      // step name, duration in seconds
      c.plan = [['S1', 1.5], ['S2', 1.8], ['S3', 1.1], ['S4', 1.3]];
    },

    reset: function (c) {
      c.step = 0;
      c.ts = 0;
      c.bags = 0;
      c.level = 0;
      c.temp = 26;          // greenhouse air temperature, degrees C
      c.bagX = 90;
    },

    update: function (dt, c) {
      var k = c.p.speed || 1;
      var d = dt * k;

      /* ---------- left: a four-step discrete sequence ------------------ */
      c.ts += d;
      var dur = c.plan[c.step][1];
      var frac = Math.min(1, c.ts / dur);

      if (c.step === 0) {                    // S1 convey the bag into place
        c.bagX = 90 + (206 - 90) * frac;
        c.level = 0;
        c.cap.setAttribute('opacity', '0');
        c.stream.setAttribute('opacity', '0');
      } else if (c.step === 1) {             // S2 fill
        c.bagX = 206;
        c.level = frac;
        c.stream.setAttribute('opacity', '1');
        c.valve.setAttribute('class', ACTIVE);
      } else if (c.step === 2) {             // S3 seal
        c.stream.setAttribute('opacity', '0');
        c.valve.setAttribute('class', IDLE);
        c.cap.setAttribute('opacity', frac > 0.35 ? '1' : '0');
      } else {                               // S4 eject
        c.bagX = 206 + (392 - 206) * frac;
      }

      if (frac >= 1) {
        if (c.step === 3) { c.bags++; c.bagX = 90; }
        c.step = (c.step + 1) % 4;
        c.ts = 0;
      }

      c.chips.forEach(function (chip, i) {
        chip.setAttribute('class', i === c.step ? ACTIVE : IDLE);
      });
      c.bag.setAttribute('transform', 'translate(' + c.bagX + ',200)');
      var h = 40 * c.level;
      c.fill.setAttribute('y', -3 - h);
      c.fill.setAttribute('height', h);

      /* ---------- right: one continuous regulated variable -------------- */
      // Sunlight wanders, the vent opens in proportion to the error.
      var sun = 5 + 4 * Math.sin(c.t * 0.35);
      var sp = 28;
      var err = c.temp - sp;
      var vent = c.clamp(err * 0.45, 0, 1);            // manipulated variable
      c.temp += ((26 + sun - 9 * vent) - c.temp) / 2.2 * d;

      c.vent.setAttribute('transform', 'rotate(' + (-38 * vent) + ' 700 86)');
      c.sun.setAttribute('r', 13 + sun * 0.7);
      var col = c.clamp((c.temp - 24) / 10, 0, 1);      // 0 .. 1 of the column
      var hh = 10 + 72 * col;
      c.merc.setAttribute('y', 181 - hh);
      c.merc.setAttribute('height', hh);

      c.say('step', c.plan[c.step][0]);
      c.say('bags', c.bags);
      c.say('T', c.fmt(c.temp, 1) + ' °C');
      c.say('vent', c.fmt(vent * 100, 0) + '%');
    }
  });

  /* ------------------------------------------------------ Animation 2.2 */
  AMRAnim.create('ch02-openclosed', {
    setup: function (c) {
      c.canvas = document.getElementById('oc-scope');
      c.scope = new c.Scope(c.canvas, {
        tSpan: 70, yMin: 20, yMax: 36, yDigits: 0,
        xLabel: 't (s)',
        series: [
          { key: 'ol', color: '--sky-500', width: 2.2 },
          { key: 'cl', color: '--green-500', width: 2.4 }
        ]
      });
      c.barOL = c.el('#o1-bar');
      c.barCL = c.el('#c1-bar');
      c.heater = c.el('#c1-heater');
      c.cloud = c.el('#d1-cloud');
      c.sun = c.el('#d1-sun');
      c.winOL = c.el('#o1-win');
      c.winCL = c.el('#c1-win');
      c.AMB = 22;          // ambient temperature with no heating, degrees C
      c.K = 1;             // process gain, degrees C per command unit
    },

    onResize: function (c) { if (c.scope) { c.scope.resize(); } },

    onToggle: function (name, on, c) {
      if (name === 'dist') { c.scope.mark(c.t); }
    },

    reset: function (c) {
      c.tOL = c.AMB;
      c.tCL = c.AMB;
      c.scope.clear();
      c.scope.opt.setpoint = c.p.sp;
    },

    update: function (dt, c) {
      var sp = c.p.sp;                       // setpoint, degrees C
      var kp = c.p.kp;                       // proportional gain
      var d = c.flag.dist ? -6 : 0;          // disturbance, degrees C
      var tau = 4.5;                         // first-order time constant, s
      c.scope.opt.setpoint = sp;

      // Open loop: the command was calibrated once, for d = 0, and never moves.
      var uOL = (sp - c.AMB) / c.K;
      // Closed loop: the command follows the measured error.
      var uCL = c.clamp(kp * (sp - c.tCL) / c.K, 0, 22);

      c.tOL += ((c.AMB + c.K * uOL + d) - c.tOL) / tau * dt;
      c.tCL += ((c.AMB + c.K * uCL + d) - c.tCL) / tau * dt;

      c.scope.push(c.t, { ol: c.tOL, cl: c.tCL });
      c.scope.draw(c.t);

      // thermometer columns
      function column(el, temp) {
        var f = c.clamp((temp - 18) / 20, 0, 1);
        var h = 8 + 70 * f;
        el.setAttribute('y', 154 - h);
        el.setAttribute('height', h);
      }
      column(c.barOL, c.tOL);
      column(c.barCL, c.tCL);

      // the closed-loop heater visibly works harder
      c.heater.setAttribute('opacity', String(0.35 + 0.65 * c.clamp(uCL / 12, 0, 1)));

      // weather and open windows appear together with the disturbance
      c.cloud.setAttribute('opacity', c.flag.dist ? '1' : '0');
      c.sun.setAttribute('opacity', c.flag.dist ? '0.25' : '1');
      var open = c.flag.dist ? -32 : 0;
      c.winOL.setAttribute('transform', 'rotate(' + open + ' 306 70)');
      c.winCL.setAttribute('transform', 'rotate(' + open + ' 746 70)');

      c.say('e open', c.fmt(Math.abs(sp - c.tOL), 2) + ' °C');
      c.say('e closed', c.fmt(Math.abs(sp - c.tCL), 2) + ' °C');
      c.say('1+KKp', c.fmt(1 + c.K * kp, 1));
    }
  });

  /* ------------------------------------------------------ Animation 2.3 */
  AMRAnim.create('ch02-flow', {
    autoplay: true,

    setup: function (c) {
      c.route = c.el('#f1-route');
      c.dot = c.el('#f1-dot');
      c.len = c.route.getTotalLength();
      c.blocks = [c.el('#f1-ctl'), c.el('#f1-act'), c.el('#f1-pla'), c.el('#f1-sen')];
      c.sum = c.el('#f1-sum');
      c.labels = {
        r: c.el('#f1-lr'), e: c.el('#f1-le'), u: c.el('#f1-lu'),
        d: c.el('#f1-ld'), y: c.el('#f1-ly'), m: c.el('#f1-lm')
      };
      // fraction of the route at which each name takes over
      c.zones = [
        { upto: 0.07, name: 'r', block: -1 },
        { upto: 0.22, name: 'e', block: 0 },
        { upto: 0.42, name: 'u', block: 1 },
        { upto: 0.62, name: 'u', block: 2 },
        { upto: 0.80, name: 'y', block: -1 },
        { upto: 0.92, name: 'm', block: 3 },
        { upto: 1.01, name: 'm', block: -1 }
      ];
    },

    reset: function (c) { c.s = 0; },

    update: function (dt, c) {
      c.s += (dt * (c.p.speed || 1)) / 9;
      if (c.s > 1) { c.s -= 1; }

      var pt = c.route.getPointAtLength(c.s * c.len);
      c.dot.setAttribute('cx', pt.x);
      c.dot.setAttribute('cy', pt.y);

      var zone = c.zones[0];
      for (var i = 0; i < c.zones.length; i++) {
        if (c.s <= c.zones[i].upto) { zone = c.zones[i]; break; }
      }

      c.blocks.forEach(function (b, i) {
        b.setAttribute('class', i === zone.block ? ACTIVE : IDLE);
      });
      c.sum.setAttribute('class', (c.s > 0.05 && c.s < 0.12) || c.s > 0.97
        ? 'dg-fill-green dg-stroke-green' : 'dg-fill-surface dg-stroke');

      var lit = c.cssVar('--green-600', '#1f7a4d');
      Object.keys(c.labels).forEach(function (key) {
        var on = (key === zone.name);
        var el = c.labels[key];
        el.style.color = on ? lit : '';
        el.style.fontWeight = on ? '700' : '';
        el.style.opacity = on ? '1' : '0.45';
      });

      c.say('now carrying', zone.name === 'm' ? 'y_m' : zone.name);
    }
  });
});
