/* ==========================================================================
   Chapter 7 — animations
   7.1  ON-OFF cycling: the swing exceeds the deadband once dead time appears
   7.2  P, PI and PID on one plant, with saturation and windup to play with
   7.3  raising the gain to the ultimate point, then applying the ZN rules
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* A shared first-order-plus-dead-time plant, the one modelled in Chapter 6.
     Input is heater demand 0..1; output is the rise above ambient in °C.     */
  function Plant(K, tau, theta) {
    this.K = K; this.tau = tau; this.theta = theta;
    this.y = 0;
    this.buf = [];        // transport delay line for the dead time
  }
  Plant.prototype.step = function (u, dt, dist) {
    this.buf.push(u);
    var need = Math.max(1, Math.round(this.theta / Math.max(dt, 1e-4)));
    while (this.buf.length > need) { this.buf.shift(); }
    var uDelayed = this.buf.length >= need ? this.buf[0] : 0;
    this.y += ((this.K * uDelayed + (dist || 0)) - this.y) / this.tau * dt;
    return this.y;
  };

  /* ------------------------------------------------------ Animation 7.1 */
  AMRAnim.create('ch07-onoff', {
    setup: function (c) {
      c.canvas = document.getElementById('oo-scope');
      c.scope = new c.Scope(c.canvas, {
        tSpan: 60, yMin: 24, yMax: 34, yDigits: 0, xLabel: 't (s)',
        series: [
          { key: 'y', color: '--sky-500', width: 2.4 },
          { key: 'u', color: '--green-500', width: 2.2 },
          { key: 'hi', color: '--ink-mute', width: 1.2, dash: [5, 4] },
          { key: 'lo', color: '--ink-mute', width: 1.2, dash: [5, 4] }
        ]
      });
      c.SP = 30;             // setpoint, °C
      c.AMB = 24;            // ambient, °C
    },

    onResize: function (c) { if (c.scope) { c.scope.resize(); } },

    reset: function (c) {
      c.scope.clear();
      c.plant = new Plant(9, 6, Math.max(0.01, c.p.theta || 1.5));
      c.temp = c.AMB + 2;
      c.on = 0;
      c.switches = 0;
      c.hiSeen = -Infinity;
      c.loSeen = Infinity;
    },

    update: function (dt, c) {
      var db = c.p.db;
      var theta = c.p.theta;
      if (c.plant.theta !== Math.max(0.01, theta)) { c.plant.theta = Math.max(0.01, theta); }

      var hi = c.SP + db / 2;
      var lo = c.SP - db / 2;

      /* equation (7.1): switch at the limits, hold in between */
      var was = c.on;
      if (c.temp <= lo) { c.on = 1; }
      else if (c.temp >= hi) { c.on = 0; }
      if (c.on !== was) { c.switches++; }

      c.temp = c.AMB + c.plant.step(c.on, dt, 0);

      /* track the extremes of one established cycle */
      if (c.t > 12) {
        if (c.temp > c.hiSeen) { c.hiSeen = c.temp; }
        if (c.temp < c.loSeen) { c.loSeen = c.temp; }
      }

      c.scope.push(c.t, {
        y: c.temp,
        u: 24.4 + c.on * 0.9,          // the heater state, drawn low on the plot
        hi: hi,
        lo: lo
      });
      c.scope.draw(c.t);

      var swing = (c.hiSeen > c.loSeen) ? c.hiSeen - c.loSeen : 0;
      var perMin = c.t > 5 ? c.switches / (c.t / 60) : 0;
      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say(thai ? 'แถบตาย' : 'deadband', c.fmt(db, 1) + ' °C');
      c.say(thai ? 'แกว่งจริง' : 'actual swing', c.fmt(swing, 2) + ' °C');
      c.say(thai ? 'ส่วนเกิน' : 'excess', c.fmt(Math.max(0, swing - db), 2) + ' °C');
      c.say(thai ? 'สลับ/นาที' : 'switches/min', c.fmt(perMin, 1));
    }
  });

  /* ------------------------------------------------------ Animation 7.2 */
  AMRAnim.create('ch07-pid', {
    setup: function (c) {
      c.canvas = document.getElementById('pid-scope');
      c.scope = new c.Scope(c.canvas, {
        tSpan: 90, yMin: 22, yMax: 36, yDigits: 0, xLabel: 't (s)',
        series: [
          { key: 'y', color: '--green-500', width: 2.6 },
          { key: 'sp', color: '--ink-mute', width: 1.4, dash: [6, 4] },
          { key: 'u', color: '--gold-500', width: 2.0 }
        ]
      });
      c.SP = 30;
      c.AMB = 24;
    },

    onResize: function (c) { if (c.scope) { c.scope.resize(); } },

    onToggle: function (name, on, c) {
      if (name === 'dist') { c.scope.mark(c.t); }
      if (name === 'useI') { c.integ = 0; }      // a fair restart for the I term
    },

    reset: function (c) {
      c.scope.clear();
      c.plant = new Plant(9, 6, 1.5);
      c.temp = c.AMB;
      c.integ = 0;
      c.tPrev = c.temp;
      c.u = 0;
    },

    update: function (dt, c) {
      var Kp = c.p.kp, Ti = c.p.ti, Td = c.p.td;
      var d = c.flag.dist ? -5 : 0;

      var e = c.SP - c.temp;

      /* the three terms of equation (7.11), D taken on the measurement (7.10) */
      var P = Kp * e;
      var D = c.flag.useD ? -Kp * Td * ((c.temp - c.tPrev) / Math.max(dt, 1e-4)) : 0;
      var I = c.flag.useI ? Kp * c.integ / Ti : 0;

      var uRaw = (P + I + D) / 9 + 0.0;        // scale into a 0..1 heater demand
      var u = c.clamp(uRaw, 0, 1);

      /* equation (7.8): stop integrating while the output is saturated */
      var saturated = (uRaw > 1) || (uRaw < 0);
      if (c.flag.useI && !(c.flag.antiwindup && saturated)) {
        c.integ += e * dt;
      }

      c.tPrev = c.temp;
      c.temp = c.AMB + c.plant.step(u, dt, d);
      c.u = u;

      c.scope.push(c.t, {
        y: c.temp,
        sp: c.SP,
        u: 22.4 + u * 1.4                      // the command, drawn low on the plot
      });
      c.scope.draw(c.t);

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say(thai ? 'ความคลาดเคลื่อน' : 'error', c.fmt(e, 2) + ' °C');
      c.say(thai ? 'เอาต์พุต' : 'output', c.fmt(u * 100, 0) + '%');
      c.say(thai ? 'ค่าสะสม I' : 'I store', c.fmt(c.flag.useI ? c.integ : 0, 1));
      c.say(thai ? 'โหมด' : 'mode',
            'P' + (c.flag.useI ? 'I' : '') + (c.flag.useD ? 'D' : ''));
      if (saturated && c.flag.useI && !c.flag.antiwindup) {
        c.say(thai ? 'สถานะ' : 'status', thai ? 'กำลังวินด์อัป' : 'winding up');
      } else {
        c.say(thai ? 'สถานะ' : 'status', saturated ? (thai ? 'เอาต์พุตอิ่มตัว' : 'saturated') : '—');
      }
    }
  });

  /* ------------------------------------------------------ Animation 7.3 */
  AMRAnim.create('ch07-zn', {
    setup: function (c) {
      c.canvas = document.getElementById('zn-scope');
      c.scope = new c.Scope(c.canvas, {
        tSpan: 70, yMin: 20, yMax: 40, yDigits: 0, xLabel: 't (s)',
        series: [
          { key: 'y', color: '--green-500', width: 2.6 },
          { key: 'sp', color: '--ink-mute', width: 1.4, dash: [6, 4] }
        ]
      });
      c.SP = 30;
      c.AMB = 24;
      /* For this plant the ultimate values are known analytically, so the
         readout can tell the student how close their gain is. */
      c.KU = 3.6;
      c.PU = 9.0;
    },

    onResize: function (c) { if (c.scope) { c.scope.resize(); } },

    onToggle: function (name, on, c) {
      if (name === 'applyZN') { c.integ = 0; c.scope.mark(c.t); }
    },

    reset: function (c) {
      c.scope.clear();
      c.plant = new Plant(9, 6, 2.2);
      c.temp = c.AMB;
      c.integ = 0;
      c.tPrev = c.AMB;
      c.peaks = [];
    },

    update: function (dt, c) {
      var zn = !!c.flag.applyZN;
      /* Table 7.2, the PID row */
      var Kp = zn ? 0.6 * c.KU : c.p.kp;
      var Ti = zn ? 0.5 * c.PU : Infinity;
      var Td = zn ? 0.125 * c.PU : 0;

      var e = c.SP - c.temp;
      var P = Kp * e;
      var I = isFinite(Ti) ? Kp * c.integ / Ti : 0;
      var D = Td > 0 ? -Kp * Td * ((c.temp - c.tPrev) / Math.max(dt, 1e-4)) : 0;

      var uRaw = (P + I + D) / 9;
      var u = c.clamp(uRaw, 0, 1);
      if (isFinite(Ti) && !(uRaw > 1 || uRaw < 0)) { c.integ += e * dt; }

      c.tPrev = c.temp;
      c.temp = c.AMB + c.plant.step(u, dt, 0);

      c.scope.push(c.t, { y: c.temp, sp: c.SP });
      c.scope.draw(c.t);

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      var ratio = c.p.kp / c.KU;
      c.say(thai ? 'โหมด' : 'mode', zn ? 'PID (ZN)' : 'P');
      c.say('Kp', c.fmt(Kp, 2));
      if (!zn) {
        c.say(thai ? 'เทียบกับ Ku' : 'fraction of Ku', c.fmt(ratio, 2));
        c.say(thai ? 'สถานะ' : 'state',
              ratio > 1.02 ? (thai ? 'แกว่งโตขึ้น' : 'growing')
                           : (ratio > 0.95 ? (thai ? 'แกว่งคงที่ — นี่คือ Ku' : 'sustained — this is Ku')
                                           : (thai ? 'แกว่งลดลง' : 'decaying')));
      } else {
        c.say('Ti', c.fmt(0.5 * c.PU, 1) + ' s');
        c.say('Td', c.fmt(0.125 * c.PU, 2) + ' s');
      }
    }
  });
});
