/* ==========================================================================
   Chapter 6 — animations
   6.1  reducing a control loop to one block, a step at a time
   6.2  the first-order step response, with the 63.2% point marked
   6.3  the second-order step response, measured overshoot against predicted
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ------------------------------------------------------ Animation 6.1 */
  AMRAnim.create('ch06-blocks', {
    setup: function (c) {
      c.blockC = c.el('#b6-c');
      c.blockG = c.el('#b6-g');
      c.blockCG = c.el('#b6-cg');
      c.blockH = c.el('#b6-h');
      c.blockFinal = c.el('#b6-final');
      c.sum = c.el('#b6-sum');
      c.w1 = c.el('#b6-w1');
      c.w2 = c.el('#b6-w2');
      c.caption = c.el('#b6-caption');
      c.result = c.el('#b6-result');

      c.stages = [
        {
          th: 'ขั้นที่ 0 — วงรอบเดิม มีตัวควบคุม กระบวนการ และเซนเซอร์แยกกัน',
          en: 'step 0 — the original loop: controller, process and sensor, separate',
          tex: ''
        },
        {
          th: 'ขั้นที่ 1 — บล็อกที่ต่ออนุกรมคูณรวมกันได้',
          en: 'step 1 — blocks in series multiply together',
          tex: '\\( C(s)G(s) \\)'
        },
        {
          th: 'ขั้นที่ 2 — ยุบวงรอบป้อนกลับด้วยกฎข้อที่สามของสมการ (6.1)',
          en: 'step 2 — collapse the feedback loop with the third rule of equation (6.1)',
          tex: '\\( \\dfrac{CG}{1 + CGH} \\)'
        }
      ];
    },

    reset: function (c) {
      c.stage = 0;
      c.hold = 0;
    },

    update: function (dt, c) {
      c.hold += dt;
      if (c.hold > (c.p.pace || 2.5)) {
        c.hold = 0;
        c.stage = (c.stage + 1) % 3;
      }

      var s = c.stage;
      /* stage 0 shows C and G apart; stage 1 merges them; stage 2 wraps the loop */
      c.blockC.setAttribute('opacity', s === 0 ? '1' : '0');
      c.blockG.setAttribute('opacity', s === 0 ? '1' : '0');
      c.blockCG.setAttribute('opacity', s === 1 ? '1' : '0');
      c.blockFinal.setAttribute('opacity', s === 2 ? '1' : '0');
      c.blockH.setAttribute('opacity', s === 2 ? '0.25' : '1');
      c.sum.setAttribute('opacity', s === 2 ? '0.25' : '1');
      c.w1.setAttribute('opacity', s === 2 ? '0.25' : '1');
      c.w2.setAttribute('opacity', s === 0 ? '1' : '0');

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.caption.textContent = thai ? c.stages[s].th : c.stages[s].en;

      /* The label carries LaTeX, so it is retypeset whenever the stage changes. */
      if (c.lastStage !== s) {
        c.lastStage = s;
        c.result.innerHTML = c.stages[s].tex;
        if (window.MathJax && window.MathJax.typesetPromise && c.stages[s].tex) {
          window.MathJax.typesetPromise([c.result]).catch(function () {});
        }
      }

      c.say(thai ? 'ขั้นที่' : 'step', s);
      c.say(thai ? 'บล็อกที่เหลือ' : 'blocks left', s === 0 ? 3 : (s === 1 ? 2 : 1));
    }
  });

  /* ------------------------------------------------------ Animation 6.2 */
  AMRAnim.create('ch06-first', {
    setup: function (c) {
      c.canvas = document.getElementById('fo-scope');
      c.scope = new c.Scope(c.canvas, {
        tSpan: 40, yMin: 0, yMax: 3.6, yDigits: 1, xLabel: 't (s)',
        series: [
          { key: 'u', color: '--gold-500', width: 2.0 },
          { key: 'y', color: '--green-500', width: 2.6 },
          { key: 'inf', color: '--ink-mute', width: 1.2, dash: [6, 4] },
          { key: 'p63', color: '--ink-mute', width: 1.2, dash: [3, 4] }
        ]
      });
      c.STEP = 1.0;            // the input step size, in arbitrary units
    },

    onResize: function (c) { if (c.scope) { c.scope.resize(); } },

    reset: function (c) {
      c.scope.clear();
      c.y = 0;
      c.t0 = null;             // the instant the step was applied
      c.crossed = null;        // the time at which y passed 63.2%
    },

    update: function (dt, c) {
      var tau = c.p.tau;
      var K = c.p.k;

      /* hold at rest briefly, then step, then repeat once the curve settles */
      var u = 0;
      if (c.t0 === null && c.t > 2) { c.t0 = c.t; }
      if (c.t0 !== null) { u = c.STEP; }
      if (c.t0 !== null && c.t - c.t0 > 6 * tau + 3) {
        c.t0 = null; c.y = 0; c.crossed = null;
      }

      /* integrate the first-order equation of (6.5) */
      c.y += ((K * u) - c.y) / tau * dt;

      var yInf = K * c.STEP;
      if (c.t0 !== null && c.crossed === null && c.y >= 0.632 * yInf) {
        c.crossed = c.t - c.t0;
      }

      c.scope.push(c.t, { u: u, y: c.y, inf: yInf, p63: 0.632 * yInf });
      c.scope.draw(c.t);

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say('K', c.fmt(K, 1));
      c.say('τ', c.fmt(tau, 1) + ' s');
      c.say(thai ? 'ค่าสุดท้าย' : 'final value', c.fmt(yInf, 2));
      c.say(thai ? 'ผ่าน 63.2% ที่' : '63.2% at',
            c.crossed === null ? '—' : c.fmt(c.crossed, 1) + ' s');
      c.say(thai ? 'เข้าที่ (5τ)' : 'settled (5τ)', c.fmt(5 * tau, 0) + ' s');
    }
  });

  /* ------------------------------------------------------ Animation 6.3 */
  AMRAnim.create('ch06-second', {
    setup: function (c) {
      c.canvas = document.getElementById('so-scope');
      c.scope = new c.Scope(c.canvas, {
        tSpan: 14, yMin: 0, yMax: 1.9, yDigits: 1, xLabel: 't (s)',
        series: [
          { key: 'y', color: '--green-500', width: 2.6 },
          { key: 'hi', color: '--sky-500', width: 1.2, dash: [5, 4] },
          { key: 'lo', color: '--sky-500', width: 1.2, dash: [5, 4] },
          { key: 'peak', color: '--gold-500', width: 1.4, dash: [2, 4] }
        ]
      });
    },

    onResize: function (c) { if (c.scope) { c.scope.resize(); } },

    reset: function (c) {
      c.scope.clear();
      c.y = 0;      // position
      c.v = 0;      // velocity
      c.t0 = null;
      c.peak = 0;
      c.settled = null;
    },

    update: function (dt, c) {
      var z = c.p.zeta;
      var wn = c.p.wn;

      var u = 0;
      if (c.t0 === null && c.t > 1) { c.t0 = c.t; }
      if (c.t0 !== null) { u = 1; }
      /* restart the run once it has clearly settled */
      if (c.t0 !== null && c.t - c.t0 > 12) {
        c.t0 = null; c.y = 0; c.v = 0; c.peak = 0; c.settled = null;
      }

      /* integrate equation (6.7) with a small fixed sub-step for stability */
      var steps = 8, h = dt / steps;
      for (var i = 0; i < steps; i++) {
        var a = wn * wn * (u - c.y) - 2 * z * wn * c.v;
        c.v += a * h;
        c.y += c.v * h;
      }

      if (c.t0 !== null) {
        if (c.y > c.peak) { c.peak = c.y; }
        if (c.settled === null && Math.abs(c.y - 1) > 0.02) { c.settledPending = c.t - c.t0; }
        if (c.settled === null && c.t - c.t0 > 0.5 && Math.abs(c.y - 1) <= 0.02 &&
            c.t - c.t0 - (c.settledPending || 0) > 0.6) {
          c.settled = c.settledPending;
        }
      }

      c.scope.push(c.t, { y: c.y, hi: 1.02, lo: 0.98, peak: c.peak > 1 ? c.peak : null });
      c.scope.draw(c.t);

      /* measured against predicted, equations (6.8) and (6.9) */
      var mpMeasured = Math.max(0, (c.peak - 1) * 100);
      var mpPredicted = z < 1 ? Math.exp(-Math.PI * z / Math.sqrt(1 - z * z)) * 100 : 0;
      var tsPredicted = 4 / (z * wn);

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say('ζ', c.fmt(z, 2));
      c.say('ωn', c.fmt(wn, 1));
      c.say(thai ? 'พุ่งเกินที่วัดได้' : 'Mp measured',
            c.fmt(mpMeasured, 1) + '% (' + c.fmt(mpPredicted, 1) + '%)');
      c.say(thai ? 'เข้าที่ (ทำนาย)' : 'ts predicted', c.fmt(tsPredicted, 2) + ' s');
      c.say(thai ? 'ลักษณะ' : 'character',
            z < 1 ? (thai ? 'หน่วงน้อย' : 'underdamped')
                  : (z > 1.001 ? (thai ? 'หน่วงมาก' : 'overdamped')
                               : (thai ? 'หน่วงวิกฤต' : 'critical')));
    }
  });
});
