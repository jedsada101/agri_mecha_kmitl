/* ==========================================================================
   Chapter 5 — animations
   5.1  PNP and NPN sensors against sinking and sourcing inputs: only two of
        the four combinations carry current
   5.2  a 4-20 mA signal through raw count to engineering units, with the
        multiply-first and divide-first instruction orders side by side
   5.3  threshold switching with and without a deadband, counting the chatter
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* ------------------------------------------------------ Animation 5.1 */
  AMRAnim.create('ch05-wiring', {
    autoplay: true,

    setup: function (c) {
      c.type = c.el('#w5-type');
      c.brown = c.el('#w5-brown');
      c.blue = c.el('#w5-blue');
      c.signal = c.el('#w5-signal');
      c.inwire = c.el('#w5-inwire');
      c.outwire = c.el('#w5-outwire');
      c.common = c.el('#w5-common');
      c.lamp = c.el('#w5-lamp');
      c.flow = c.el('#w5-flow');
      c.verdict = c.el('#w5-verdict');
      c.march = 0;
    },

    reset: function (c) { c.march = 0; },

    update: function (dt, c) {
      var npn = !!c.flag.npn;             // false = PNP sensor
      var high = !!c.flag.commonHigh;     // false = common tied to 0 V
      var target = !!c.flag.target;

      /* A PNP sensor sources current and needs a 0 V common; an NPN sinks it
         and needs a +24 V common. Any other pairing leaves no loop at all. */
      var compatible = (npn === high);
      var conducting = compatible && target;

      var green = c.cssVar('--green-500', '#2f8f5b');
      var gold = c.cssVar('--gold-500', '#e3a010');
      var grey = c.cssVar('--steel-500', '#7c8a9d');

      c.type.textContent = npn ? 'NPN' : 'PNP';

      /* the common leg moves between the two rails */
      c.common.setAttribute('d', high ? 'M 700 163 L 700 52' : 'M 700 179 L 700 288');
      c.common.style.stroke = high ? gold : grey;

      [c.signal, c.inwire, c.outwire].forEach(function (w) {
        w.style.stroke = conducting ? green : grey;
        w.style.strokeWidth = conducting ? 4.5 : 3;
      });
      c.lamp.setAttribute('class', conducting ? 'dg-fill-gold dg-stroke' : 'dg-fill-soft dg-stroke');

      /* a dot marching along the signal wire shows the direction of flow */
      if (conducting) {
        c.march = (c.march + dt * 0.55) % 1;
        var p = npn ? (1 - c.march) : c.march;       // NPN pulls current the other way
        c.flow.setAttribute('cx', 270 + p * 200);
        c.flow.setAttribute('cy', 171);
        c.flow.setAttribute('opacity', '1');
      } else {
        c.flow.setAttribute('opacity', '0');
      }

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      if (!compatible) {
        c.verdict.style.fill = c.cssVar('--red-500', '#d94848');
        c.verdict.textContent = thai
          ? 'ต่อผิดขั้ว — ไม่มีวงจรให้กระแสไหล ไฟอินพุตจึงไม่ติดแม้เซนเซอร์ทำงาน'
          : 'mismatched — no loop exists, so the input stays dark even when the sensor triggers';
      } else if (!target) {
        c.verdict.style.fill = c.cssVar('--ink-mute', '#777');
        c.verdict.textContent = thai
          ? 'ต่อถูกขั้วแล้ว รอวัตถุเข้ามาในระยะตรวจจับ'
          : 'correctly wired — waiting for a target to come into range';
      } else {
        c.verdict.style.fill = green;
        c.verdict.textContent = thai
          ? 'ถูกต้อง — กระแสไหลครบวงจร ไฟอินพุต X0 ติด'
          : 'correct — the loop is complete and input X0 is on';
      }

      c.say(thai ? 'เซนเซอร์' : 'sensor', npn ? 'NPN' : 'PNP');
      c.say(thai ? 'คอมมอน' : 'common', high ? '+24 V' : '0 V');
      c.say('X0', conducting ? '1' : '0');
    }
  });

  /* ------------------------------------------------------ Animation 5.2 */
  AMRAnim.create('ch05-scale', {
    autoplay: true,

    setup: function (c) {
      c.tempT = c.el('#s8-temp');
      c.maT = c.el('#s8-ma');
      c.rawT = c.el('#s8-raw');
      c.outT = c.el('#s8-out');
      c.good1 = c.el('#s8-good1');
      c.good2 = c.el('#s8-good2');
      c.bad1 = c.el('#s8-bad1');
      c.bad2 = c.el('#s8-bad2');
      c.RAW_FS = 4000;            // the module reads 0..4000 over 4..20 mA
      c.SPAN = 50;                // the transmitter covers 0..50 degrees C
    },

    reset: function (c) {},

    update: function (dt, c) {
      var T = c.p.temp;
      var mA = 4 + (T / c.SPAN) * 16;
      var raw = Math.round((T / c.SPAN) * c.RAW_FS);

      /* units of 0.1 degree, so the span is multiplied by 500 not 50 */
      var good = Math.floor((raw * 500) / c.RAW_FS);
      var bad = Math.floor(raw / c.RAW_FS) * 500;

      c.tempT.textContent = c.fmt(T, 1);
      c.maT.textContent = c.fmt(mA, 2);
      c.rawT.textContent = raw;
      c.outT.textContent = good;

      c.good1.textContent = 'MUL D10 500 → ' + (raw * 500);
      c.good2.textContent = 'DIV ' + (raw * 500) + ' 4000 → ' + good;
      c.bad1.textContent = 'DIV D10 4000 → ' + Math.floor(raw / c.RAW_FS);
      c.bad2.textContent = 'MUL ' + Math.floor(raw / c.RAW_FS) + ' 500 → ' + bad;

      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say(thai ? 'ถูกต้อง' : 'correct', c.fmt(good / 10, 1) + ' °C');
      c.say(thai ? 'หารก่อน' : 'divide-first', c.fmt(bad / 10, 1) + ' °C');
      c.say(thai ? 'คลาดเคลื่อน' : 'error', c.fmt(Math.abs(good - bad) / 10, 1) + ' °C');
    }
  });

  /* ------------------------------------------------------ Animation 5.3 */
  AMRAnim.create('ch05-deadband', {
    setup: function (c) {
      c.canvas = document.getElementById('db-scope');
      c.scope = new c.Scope(c.canvas, {
        tSpan: 50, yMin: 26, yMax: 36, yDigits: 0, xLabel: 't (s)',
        series: [
          { key: 'temp', color: '--sky-500', width: 2.4 },
          { key: 'fan', color: '--green-500', width: 2.6 },
          { key: 'on', color: '--ink-mute', width: 1.2, dash: [5, 4] },
          { key: 'off', color: '--ink-mute', width: 1.2, dash: [5, 4] }
        ]
      });
      c.T_ON = 32;                 // the fan starts here
    },

    onResize: function (c) { if (c.scope) { c.scope.resize(); } },

    reset: function (c) {
      c.scope.clear();
      c.temp = 30.5;
      c.fan = 0;
      c.switches = 0;
      c.lastSwitch = 0;
    },

    update: function (dt, c) {
      var db = c.p.db;
      var tOn = c.T_ON;
      var tOff = c.T_ON - db;

      /* the house warms from the sun and cools when the fan runs */
      var solar = 1.15 + 0.35 * Math.sin(c.t * 0.22);
      c.temp += (solar - (c.fan ? 2.6 : 0)) * dt;

      var was = c.fan;
      if (!c.fan && c.temp >= tOn) { c.fan = 1; }
      else if (c.fan && c.temp <= tOff) { c.fan = 0; }
      if (c.fan !== was) { c.switches++; c.lastSwitch = c.t; }

      c.scope.push(c.t, {
        temp: c.temp,
        fan: 26.6 + c.fan * 1.1,   // drawn as a low square wave under the trace
        on: tOn,
        off: tOff
      });
      c.scope.draw(c.t);

      var perMin = c.t > 1 ? c.switches / (c.t / 60) : 0;
      var thai = !(window.AMR && window.AMR.getLang() === 'en');
      c.say(thai ? 'อุณหภูมิ' : 'temperature', c.fmt(c.temp, 1) + ' °C');
      c.say(thai ? 'เกณฑ์ปิด' : 'off at', c.fmt(tOff, 2) + ' °C');
      c.say(thai ? 'สลับไปแล้ว' : 'switches', c.switches);
      c.say(thai ? 'ครั้ง/นาที' : 'per minute', c.fmt(perMin, 1));
    }
  });
});
