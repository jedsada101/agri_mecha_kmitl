/* ==========================================================================
   Chapter 11 — animations
   11.1  fail one layer at a time, and see which functions survive
   11.2  whether the chosen network can carry the load asked of it
   11.3  cumulative cash flow, discounted and not, and when it breaks even
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var SVGNS = 'http://www.w3.org/2000/svg';

  function thaiNow() {
    return !(window.AMR && window.AMR.getLang() === 'en');
  }

  function polyline(el, pts) {
    el.setAttribute('points', pts.map(function (p) {
      return p[0].toFixed(1) + ',' + p[1].toFixed(1);
    }).join(' '));
  }

  /* Radio behaviour for a group of toggle buttons: exactly one stays on. */
  function radio(c, group, name, on) {
    function setBtn(key, state) {
      var btn = c.el('[data-anim-toggle="' + key + '"]');
      if (!btn) { return; }
      btn.classList.toggle('is-on', state);
      btn.setAttribute('aria-pressed', String(state));
    }
    if (!on) { c.flag[name] = true; setBtn(name, true); return false; }
    group.forEach(function (key) {
      if (key !== name) { c.flag[key] = false; setBtn(key, false); }
    });
    return true;
  }

  /* ------------------------------------------------------ Animation 11.1 */
  /* Three states a function can be in, and the colour that says which. */
  var OK = 0, DEGRADED = 1, STOPPED = 2;

  function stateText(st, thai) {
    if (st === OK) { return thai ? 'ทำงานปกติ' : 'working'; }
    if (st === DEGRADED) { return thai ? 'ทำงานแบบจำกัด' : 'degraded'; }
    return thai ? 'หยุดทำงาน' : 'stopped';
  }

  function stateFill(st) {
    if (st === OK) { return AMRAnim.cssVar('--green-500', '#3a9'); }
    if (st === DEGRADED) { return AMRAnim.cssVar('--gold-500', '#c93'); }
    return AMRAnim.cssVar('--ink-mute', '#888');
  }

  AMRAnim.create('ch11-layers', {
    setup: function (c) {
      c.cloud = c.el('#a111-cloud');
      c.wan = c.el('#a111-wan');
      c.scada = c.el('#a111-scada');
      c.lan = c.el('#a111-lan');
      c.plc = c.el('#a111-plc');
      c.sline = c.el('#a111-sline');
      c.sensor = c.el('#a111-sensor');
      c.fn = [c.el('#a111-f1'), c.el('#a111-f2'), c.el('#a111-f3'), c.el('#a111-f4')];
      c.verdict = c.el('#a111-verdict');
    },

    update: function (dt, c) {
      var down = {
        wan: !!c.flag.wan, pc: !!c.flag.pc,
        sensor: !!c.flag.sensor, plc: !!c.flag.plc
      };

      function dim(el, isDown) { el.setAttribute('opacity', isDown ? 0.25 : 1); }
      dim(c.cloud, down.wan);
      dim(c.wan, down.wan);
      dim(c.scada, down.pc);
      dim(c.lan, down.pc || down.plc);
      dim(c.plc, down.plc);
      dim(c.sensor, down.sensor);
      dim(c.sline, down.sensor || down.plc);

      /* Temperature control lives in the PLC, so only the PLC can stop it.
         A dead probe leaves it running on a safe fallback. */
      var st = [
        down.plc ? STOPPED : (down.sensor ? DEGRADED : OK),
        down.pc ? STOPPED : (down.plc ? DEGRADED : OK),
        down.pc ? STOPPED : (down.plc ? DEGRADED : OK),
        OK                                   /* hardwired past every layer */
      ];

      var thai = thaiNow();
      st.forEach(function (s, i) {
        c.fn[i].textContent = stateText(s, thai);
        c.fn[i].setAttribute('fill', stateFill(s));
      });

      var verdict;
      if (down.plc) {
        verdict = thai ? 'พืชเสี่ยง: ไม่มีการควบคุมแล้ว' : 'crop at risk: nothing is controlling';
      } else if (down.sensor) {
        verdict = thai ? 'พืชปลอดภัยชั่วคราว บนค่าสำรอง' : 'crop safe for now, on a fallback';
      } else if (down.pc || down.wan) {
        verdict = thai ? 'พืชปลอดภัย เสียแต่การมองเห็น' : 'crop safe; only visibility is lost';
      } else {
        verdict = thai ? 'ทุกอย่างปกติ' : 'everything nominal';
      }
      c.verdict.textContent = verdict;
      c.verdict.setAttribute('fill', stateFill(down.plc ? STOPPED
                                               : (down.sensor ? DEGRADED : OK)));

      var lost = [down.wan, down.pc, down.sensor, down.plc]
                 .filter(function (x) { return x; }).length;
      c.say(thai ? 'สิ่งที่เสียไป' : 'things failed', String(lost) + '/4');
      c.say(thai ? 'หน้าที่ที่ยังทำงานเต็มที่' : 'functions fully working',
            st.filter(function (s) { return s === OK; }).length + '/4');
      c.say(thai ? 'การหยุดฉุกเฉิน' : 'emergency stop',
            thai ? 'เดินสายตรง จึงไม่เคยเสีย' : 'hardwired, so never lost');
    }
  });

  /* ------------------------------------------------------ Animation 11.2 */
  var N2 = { X: 42, W: 478, BAUD: 19200, GAP: 0.010, WIFI: 2.0e6, DUTY: 0.01 };

  /* Each network, reduced to the one number that actually binds it. */
  function netModel(kind, nodes, rate, bytes) {
    var perMin = rate, need = 60 / rate;          // seconds between updates
    if (kind === 'modbus') {
      var regs = Math.ceil(bytes / 2);
      var tmsg = 11 * (13 + 2 * regs) / N2.BAUD + N2.GAP;   /* equation (11.2) */
      return {
        tmsg: tmsg, util: nodes * tmsg / need,
        maxRate: 60 / (nodes * tmsg),
        load: 8 * nodes * bytes * (rate / 60),
        bindTh: 'รอบการสำรวจของสายเส้นเดียว',
        bindEn: 'the poll cycle of a single line',
        layerTh: 'ชั้น 2–3 · จังหวะเวลาแน่นอน ใช้กับวงรอบได้',
        layerEn: 'layers 2–3 · predictable timing, usable for a loop'
      };
    }
    if (kind === 'wifi') {
      var t2 = (bytes + 120) * 8 / N2.WIFI;
      var load = nodes * (rate / 60) * (bytes + 120) * 8;
      return {
        tmsg: t2, util: load / N2.WIFI,
        maxRate: 60 * N2.WIFI / (nodes * (bytes + 120) * 8),
        load: load,
        bindTh: 'แบนด์วิดท์ ซึ่งแทบไม่เคยเต็ม',
        bindEn: 'bandwidth, which almost never fills',
        layerTh: 'ชั้น 4 เท่านั้น · จังหวะเวลาไม่แน่นอน',
        layerEn: 'layer 4 only · its timing is not predictable'
      };
    }
    /* LoRaWAN: airtime grows with payload, and the duty cycle is the law */
    var tair = 0.123 + bytes * 0.0205;
    var duty = tair * (rate / 60) / N2.DUTY;      /* equation (11.5), per device */
    var chan = nodes * tair * (rate / 60);        /* one shared channel */
    return {
      tmsg: tair, util: Math.max(duty, chan),
      maxRate: Math.min(60 * N2.DUTY / tair, 60 / (nodes * tair)),
      load: 8 * nodes * bytes * (rate / 60),
      bindTh: duty >= chan ? 'รอบหน้าที่ 1% ของแต่ละโหนด' : 'ช่องสัญญาณที่ใช้ร่วมกัน',
      bindEn: duty >= chan ? 'the 1% duty cycle of each node' : 'the shared channel',
      layerTh: 'ชั้น 2 · เฉพาะข้อมูลที่เปลี่ยนช้า',
      layerEn: 'layer 2 · only for slowly changing data'
    };
  }

  AMRAnim.create('ch11-net', {
    setup: function (c) {
      c.nodesEl = c.el('#a112-nodes');
      c.bar = c.el('#a112-bar');
      c.pct = c.el('#a112-pct');
      c.bind = c.el('#a112-bind');
      c.verdict = c.el('#a112-verdict');
      c.netEl = c.el('#a112-net');
      c.tmsg = c.el('#a112-tmsg');
      c.loadEl = c.el('#a112-load');
      c.maxEl = c.el('#a112-max');
      c.layerEl = c.el('#a112-layer');
      c.drawn = -1;
    },

    onToggle: function (name, on, c) {
      radio(c, ['modbus', 'wifi', 'lora'], name, on);
    },

    reset: function (c) { c.drawn = -1; },

    update: function (dt, c) {
      var kind = c.flag.wifi ? 'wifi' : (c.flag.lora ? 'lora' : 'modbus');
      var nodes = Math.round(c.p.nodes);
      var m = netModel(kind, nodes, c.p.rate, c.p.bytes);

      if (c.drawn !== nodes) {
        while (c.nodesEl.firstChild) { c.nodesEl.removeChild(c.nodesEl.firstChild); }
        for (var i = 0; i < nodes; i++) {
          var r = document.createElementNS(SVGNS, 'rect');
          r.setAttribute('x', 40 + (i % 20) * 24);
          r.setAttribute('y', 56 + Math.floor(i / 20) * 30);
          r.setAttribute('width', 18);
          r.setAttribute('height', 20);
          r.setAttribute('rx', 3);
          r.setAttribute('class', 'dg-fill-gold dg-stroke');
          r.setAttribute('stroke-width', '1.4');
          c.nodesEl.appendChild(r);
        }
        c.drawn = nodes;
      }

      var util = m.util;
      c.bar.setAttribute('width', (Math.min(util, 1.0) * N2.W).toFixed(1));
      c.bar.setAttribute('class', util > 0.8 ? 'dg-fill-gold' : 'dg-fill-green');

      var thai = thaiNow();
      c.pct.textContent = (util > 0 && util < 0.01) ? '< 1%'
                        : (util * 100).toFixed(0) + '%';
      c.bind.textContent = thai ? m.bindTh : m.bindEn;
      c.netEl.textContent = kind === 'modbus' ? 'Modbus RTU @ 19 200'
                          : (kind === 'wifi' ? 'Wi-Fi @ 2 Mbit/s' : 'LoRaWAN SF10');
      c.tmsg.textContent = (m.tmsg * 1000).toFixed(1) + ' ms';
      c.loadEl.textContent = m.load < 1000 ? m.load.toFixed(0) + ' bit/s'
                                           : (m.load / 1000).toFixed(1) + ' kbit/s';
      c.maxEl.textContent = m.maxRate > 600 ? '> 600 /min'
                                            : m.maxRate.toFixed(1) + ' /min';
      c.layerEl.textContent = thai ? m.layerTh : m.layerEn;

      var verdict, fill;
      if (util > 1) {
        verdict = thai ? 'เกินขีดจำกัด ทำไม่ได้' : 'over the limit; not possible';
        fill = AMRAnim.cssVar('--ink-mute', '#888');
      } else if (util > 0.8) {
        verdict = thai ? 'เกือบเต็ม ไม่เหลือเผื่อ' : 'nearly full; no headroom';
        fill = AMRAnim.cssVar('--gold-500', '#c93');
      } else {
        verdict = thai ? 'รับไหว มีที่เหลือพอ' : 'it carries, with room to spare';
        fill = AMRAnim.cssVar('--green-500', '#3a9');
      }
      c.verdict.textContent = verdict;
      c.verdict.setAttribute('fill', fill);
      c.pct.setAttribute('fill', fill);

      c.say(thai ? 'ที่เหลือเผื่อ' : 'headroom',
            util >= 1 ? (thai ? 'ไม่มี' : 'none')
                      : c.fmt((1 - util) * 100, 0) + '%');
      c.say(thai ? 'ความถี่ที่ขอ' : 'rate asked', c.fmt(c.p.rate, 1) + ' /min');
    }
  });

  /* ------------------------------------------------------ Animation 11.3 */
  var M3 = { X0: 64, X1: 548, Y0: 50, Y1: 330, N: 10 };

  /* The present value of B received every year for t years. */
  function annuity(t, r) {
    return r < 1e-9 ? t : (1 - Math.pow(1 + r, -t)) / r;
  }

  AMRAnim.create('ch11-money', {
    setup: function (c) {
      c.bars = c.el('#a113-bars');
      c.nom = c.el('#a113-nom');
      c.zero = c.el('#a113-zero');
      c.pb = c.el('#a113-pb');
      c.bEl = c.el('#a113-b');
      c.spEl = c.el('#a113-sp');
      c.dpEl = c.el('#a113-dp');
      c.npvEl = c.el('#a113-npv');
      c.verdict = c.el('#a113-verdict');
    },

    update: function (dt, c) {
      var I = c.p.inv, B = c.p.ben, r = c.p.rate / 100;

      /* equation (11.14), cumulative both ways */
      var nomc = [], disc = [];
      for (var t = 0; t <= M3.N; t++) {
        nomc.push(-I + B * t);
        disc.push(-I + B * annuity(t, r));
      }

      var all = nomc.concat(disc);
      var vmax = Math.max.apply(null, all), vmin = Math.min.apply(null, all);
      var pad = (vmax - vmin) * 0.1 || 1;
      vmax += pad; vmin -= pad;
      var y = function (v) {
        return M3.Y1 - (v - vmin) / (vmax - vmin) * (M3.Y1 - M3.Y0);
      };
      var x = function (t) { return M3.X0 + t / M3.N * (M3.X1 - M3.X0); };

      c.zero.setAttribute('y1', y(0).toFixed(1));
      c.zero.setAttribute('y2', y(0).toFixed(1));

      while (c.bars.firstChild) { c.bars.removeChild(c.bars.firstChild); }
      var w = (M3.X1 - M3.X0) / (M3.N + 1) * 0.68;
      for (var k = 0; k <= M3.N; k++) {
        var rect = document.createElementNS(SVGNS, 'rect');
        var top = Math.min(y(0), y(disc[k])), h = Math.abs(y(disc[k]) - y(0));
        rect.setAttribute('x', (x(k) - w / 2).toFixed(1));
        rect.setAttribute('y', top.toFixed(1));
        rect.setAttribute('width', w.toFixed(1));
        rect.setAttribute('height', Math.max(1, h).toFixed(1));
        rect.setAttribute('class', 'dg-fill-green');
        rect.setAttribute('opacity', disc[k] < 0 ? '0.35' : '0.65');
        c.bars.appendChild(rect);
      }

      polyline(c.nom, nomc.map(function (v, t) { return [x(t), y(v)]; }));

      /* where each cumulative line crosses zero */
      function crossing(series) {
        for (var t = 1; t <= M3.N; t++) {
          if (series[t] >= 0) {
            var a = series[t - 1], b = series[t];
            return (t - 1) + (0 - a) / (b - a);
          }
        }
        return null;
      }
      var sp = B > 0 ? I / B : null;
      var dp = crossing(disc);

      if (dp !== null) {
        c.pb.setAttribute('x1', x(dp).toFixed(1));
        c.pb.setAttribute('x2', x(dp).toFixed(1));
        c.pb.setAttribute('opacity', 1);
      } else {
        c.pb.setAttribute('opacity', 0);
      }

      var npv = disc[M3.N];
      var thai = thaiNow();
      c.bEl.textContent = B.toFixed(0) + ' k฿';
      c.spEl.textContent = (sp !== null && sp <= M3.N)
        ? sp.toFixed(1) + (thai ? ' ปี' : ' years')
        : (thai ? 'เกิน 10 ปี' : 'beyond 10 years');
      c.dpEl.textContent = dp !== null
        ? dp.toFixed(1) + (thai ? ' ปี' : ' years')
        : (thai ? 'ไม่คืนทุนใน 10 ปี' : 'not within 10 years');
      c.npvEl.textContent = (npv >= 0 ? '+' : '') + npv.toFixed(0) + ' k฿';

      var fill, verdict;
      if (npv < 0) {
        verdict = thai ? 'ไม่คุ้มค่าที่จะลงทุน' : 'not worth investing in';
        fill = AMRAnim.cssVar('--ink-mute', '#888');
      } else if (dp !== null && dp <= 5) {
        verdict = thai ? 'คุ้มค่าชัดเจน' : 'clearly worth doing';
        fill = AMRAnim.cssVar('--green-500', '#3a9');
      } else {
        verdict = thai ? 'คุ้มค่า แต่คืนทุนช้า' : 'it pays, but returns slowly';
        fill = AMRAnim.cssVar('--gold-500', '#c93');
      }
      c.verdict.textContent = verdict;
      c.verdict.setAttribute('fill', fill);

      c.say(thai ? 'ส่วนต่างของสองวิธี' : 'gap between the two',
            (dp !== null && sp !== null) ? c.fmt(dp - sp, 1) + (thai ? ' ปี' : ' y')
                                         : '—');
      c.say(thai ? 'ถ้าประโยชน์ลด 25%' : 'at 25% less benefit',
            (function () {
              var n2 = -I + 0.75 * B * annuity(M3.N, r);
              return (n2 >= 0 ? '+' : '') + c.fmt(n2, 0) + ' k฿';
            })());
    }
  });
});
