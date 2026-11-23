/* ==========================================================================
   Chapter 10 — animations
   10.1  two wheel speeds, and the instantaneous centre they imply
   10.2  a robot driving a square by its own belief, while the truth drifts
   10.3  covering a field: boom width against overlap, and what each costs
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var DEG = Math.PI / 180;
  var SVGNS = 'http://www.w3.org/2000/svg';

  function thaiNow() {
    return !(window.AMR && window.AMR.getLang() === 'en');
  }

  function segment(el, a, b) {
    el.setAttribute('x1', a[0].toFixed(1)); el.setAttribute('y1', a[1].toFixed(1));
    el.setAttribute('x2', b[0].toFixed(1)); el.setAttribute('y2', b[1].toFixed(1));
  }

  function polyline(el, pts) {
    el.setAttribute('points', pts.map(function (p) {
      return p[0].toFixed(1) + ',' + p[1].toFixed(1);
    }).join(' '));
  }

  /* SVG's y points down, so a positive heading is a negative screen rotation. */
  function place(el, p, angleDeg) {
    el.setAttribute('transform',
      'translate(' + p[0].toFixed(1) + ',' + p[1].toFixed(1) + ') ' +
      'rotate(' + (-angleDeg).toFixed(2) + ')');
  }

  function gauss() {
    var u = Math.max(1e-9, Math.random());
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
  }

  /* Equation (10.9): advance a pose using the heading at the middle of the
     interval, which is markedly better than using the heading at its start. */
  function advance(pose, v, w, dt) {
    var mid = pose[2] + 0.5 * w * dt;
    return [pose[0] + v * dt * Math.cos(mid),
            pose[1] + v * dt * Math.sin(mid),
            pose[2] + w * dt];
  }

  /* ------------------------------------------------------ Animation 10.1 */
  var D1 = { X0: 274, Y0: 262, S: 70, B: 0.6,          // origin px, px per m, track
             L: 30, R: 518, T: 30, Bo: 350 };          // arena bounds in px

  AMRAnim.create('ch10-diff', {
    setup: function (c) {
      c.bot = c.el('#a101-bot');
      c.trailEl = c.el('#a101-trail');
      c.circ = c.el('#a101-circ');
      c.iccEl = c.el('#a101-icc');
      c.axle = c.el('#a101-axle');
      c.vEl = c.el('#a101-v');
      c.wEl = c.el('#a101-w');
      c.rEl = c.el('#a101-r');
      c.poseEl = c.el('#a101-pose');
      c.modeEl = c.el('#a101-mode');
    },

    reset: function (c) {
      c.pose = [0, 0, 0];
      c.trail = [];
      c.dist = 0;
    },

    update: function (dt, c) {
      var vL = c.p.vl, vR = c.p.vr;
      /* equation (10.2) */
      var v = (vR + vL) / 2;
      var w = (vR - vL) / D1.B;

      if (dt > 0) {
        c.pose = advance(c.pose, v, w, dt);
        c.dist += Math.abs(v) * dt;
      }

      var px = D1.X0 + c.pose[0] * D1.S;
      var py = D1.Y0 - c.pose[1] * D1.S;

      /* when it leaves the plot, put it back and start a fresh trail */
      if (px < D1.L || px > D1.R || py < D1.T || py > D1.Bo) {
        c.pose = [0, 0, c.pose[2]];
        c.trail = [];
        px = D1.X0; py = D1.Y0;
      }

      place(c.bot, [px, py], c.pose[2] / DEG);
      c.trail.push([px, py]);
      if (c.trail.length > 1400) { c.trail.shift(); }
      polyline(c.trailEl, c.trail);

      /* equation (10.3): the ICC sits at distance R to the left of the robot */
      var straight = Math.abs(w) < 1e-3;
      var R = straight ? Infinity : v / w;
      var show = c.flag.icc && !straight;
      if (show) {
        var ix = px - R * D1.S * Math.sin(c.pose[2]);
        var iy = py - R * D1.S * Math.cos(c.pose[2]);
        place(c.iccEl, [ix, iy], 0);
        c.iccEl.setAttribute('opacity', 1);
        c.circ.setAttribute('cx', ix.toFixed(1));
        c.circ.setAttribute('cy', iy.toFixed(1));
        c.circ.setAttribute('r', Math.abs(R * D1.S).toFixed(1));
        segment(c.axle, [px, py], [ix, iy]);
        c.axle.setAttribute('opacity', 1);
      } else {
        c.iccEl.setAttribute('opacity', 0);
        c.circ.setAttribute('r', 0);
        c.axle.setAttribute('opacity', 0);
      }

      var thai = thaiNow();
      c.vEl.textContent = v.toFixed(2) + ' m/s';
      c.wEl.textContent = w.toFixed(3) + ' rad/s  (' + (w / DEG).toFixed(1) + '°/s)';
      c.rEl.textContent = straight ? (thai ? 'อนันต์' : 'infinite')
                                   : (Math.abs(R) > 99 ? '>99 m' : R.toFixed(2) + ' m');
      c.poseEl.textContent = '( ' + c.pose[0].toFixed(2) + ', ' + c.pose[1].toFixed(2) +
                             ' ) m, ' + (c.pose[2] / DEG).toFixed(0) + '°';

      var mode;
      if (Math.abs(v) < 0.01 && !straight) { mode = thai ? 'หมุนอยู่กับที่' : 'spinning on the spot'; }
      else if (straight && Math.abs(v) < 0.01) { mode = thai ? 'หยุดนิ่ง' : 'stationary'; }
      else if (straight) { mode = thai ? 'วิ่งตรง ICC อยู่ที่อนันต์' : 'straight; the ICC is at infinity'; }
      else if (Math.abs(R) < D1.B / 2) { mode = thai ? 'ICC อยู่ระหว่างล้อทั้งสอง' : 'the ICC lies between the wheels'; }
      else { mode = thai ? 'วิ่งโค้ง' : 'following an arc'; }
      c.modeEl.textContent = mode;

      c.say(thai ? 'ระยะทางที่วิ่ง' : 'distance driven', c.fmt(c.dist, 1) + ' m');
      c.say(thai ? 'ผลต่างความเร็วล้อ' : 'wheel speed difference',
            c.fmt(vR - vL, 2) + ' m/s');
    }
  });

  /* ------------------------------------------------------ Animation 10.2 */
  var D2 = { X0: 130, Y0: 272, S: 55, B: 0.6, SIDE: 2.5, FIX: 4.0 };

  var SQUARE = [[0, 0], [D2.SIDE, 0], [D2.SIDE, D2.SIDE], [0, D2.SIDE]];

  function toPx(p) { return [D2.X0 + p[0] * D2.S, D2.Y0 - p[1] * D2.S]; }

  AMRAnim.create('ch10-odom', {
    setup: function (c) {
      c.planEl = c.el('#a102-plan');
      c.beliefEl = c.el('#a102-belief');
      c.trueEl = c.el('#a102-true');
      c.linkEl = c.el('#a102-link');
      c.ghost = c.el('#a102-ghost');
      c.bot = c.el('#a102-bot');
      c.dEl = c.el('#a102-d');
      c.heEl = c.el('#a102-he');
      c.peEl = c.el('#a102-pe');
      c.predEl = c.el('#a102-pred');
      c.srcEl = c.el('#a102-src');

      var a = toPx([0, D2.SIDE]);
      c.planEl.setAttribute('x', a[0].toFixed(1));
      c.planEl.setAttribute('y', a[1].toFixed(1));
      c.planEl.setAttribute('width', (D2.SIDE * D2.S).toFixed(1));
      c.planEl.setAttribute('height', (D2.SIDE * D2.S).toFixed(1));
    },

    onToggle: function (name, on, c) { c.restart = true; },
    onParam: function (name, value, c) { c.restart = true; },

    reset: function (c) {
      c.truth = [0, 0, 0];
      c.belief = [0, 0, 0];
      c.wp = 1;
      c.dist = 0;
      c.nextFix = D2.FIX;
      c.tTrail = [];
      c.bTrail = [];
      c.restart = false;
    },

    update: function (dt, c) {
      if (c.restart) { this.reset(c); }

      /* ---- steer towards the next corner, using the belief as the compass */
      var tgt = SQUARE[c.wp];
      var dx = tgt[0] - c.belief[0], dy = tgt[1] - c.belief[1];
      var range = Math.sqrt(dx * dx + dy * dy);
      var bearing = Math.atan2(dy, dx);
      var err = Math.atan2(Math.sin(bearing - c.belief[2]), Math.cos(bearing - c.belief[2]));

      var v, w;
      if (Math.abs(err) > 0.12) { v = 0.08; w = AMRAnim.clamp(2.2 * err, -1.4, 1.4); }
      else { v = 0.45; w = AMRAnim.clamp(1.8 * err, -0.8, 0.8); }
      if (range < 0.08) { c.wp = (c.wp + 1) % SQUARE.length; }

      /* equation (10.4): the two wheel speeds the controller actually sends */
      var vRc = v + w * D2.B / 2;
      var vLc = v - w * D2.B / 2;

      /* what the robot believes: the commanded speeds, taken at face value */
      var vb = (vRc + vLc) / 2, wb = (vRc - vLc) / D2.B;

      /* what really happens: the right wheel is larger, and both wheels slip */
      var eps = c.p.eps / 100, slip = c.p.slip / 100;
      var vRt = vRc * (1 + eps) * (1 - slip);
      var vLt = vLc * (1 - slip);
      var vt = (vRt + vLt) / 2, wt = (vRt - vLt) / D2.B;

      if (dt > 0) {
        c.belief = advance(c.belief, vb, wb, dt);
        c.truth = advance(c.truth, vt, wt, dt);
        c.dist += Math.abs(vt) * dt;

        /* a fix every few seconds pulls the belief back onto the truth */
        if (c.flag.gnss && c.t >= c.nextFix) {
          c.nextFix = c.t + D2.FIX;
          c.belief = [c.truth[0] + 0.03 * gauss(),
                      c.truth[1] + 0.03 * gauss(),
                      c.truth[2] + 1.5 * DEG * gauss()];
        }
      }

      var tp = toPx(c.truth), bp = toPx(c.belief);
      place(c.bot, tp, c.truth[2] / DEG);
      place(c.ghost, bp, c.belief[2] / DEG);
      segment(c.linkEl, bp, tp);

      c.tTrail.push(tp); c.bTrail.push(bp);
      if (c.tTrail.length > 2000) { c.tTrail.shift(); c.bTrail.shift(); }
      polyline(c.trueEl, c.tTrail);
      polyline(c.beliefEl, c.bTrail);

      var he = Math.atan2(Math.sin(c.belief[2] - c.truth[2]),
                          Math.cos(c.belief[2] - c.truth[2])) / DEG;
      var pe = Math.sqrt(Math.pow(c.belief[0] - c.truth[0], 2) +
                         Math.pow(c.belief[1] - c.truth[1], 2));
      /* equation (10.13) as an upper bound: the closed loop undoes part of it */
      var pred = c.dist * eps / D2.B / DEG;

      var thai = thaiNow();
      c.dEl.textContent = c.dist.toFixed(1) + ' m';
      c.heEl.textContent = he.toFixed(1) + '°';
      c.peEl.textContent = pe.toFixed(2) + ' m';
      c.predEl.textContent = pred.toFixed(1) + '°';
      c.srcEl.textContent = c.flag.gnss
        ? (thai ? 'นับรอบล้อ + GNSS' : 'wheel counts + GNSS')
        : (thai ? 'นับรอบล้ออย่างเดียว' : 'wheel counts alone');

      c.say(thai ? 'มุมที่เลี้ยวไปแล้ว' : 'total turning',
            c.fmt(Math.abs(c.truth[2]) / DEG, 0) + '°');
      c.say(thai ? 'มุมถัดไป' : 'next corner', String(c.wp + 1) + '/4');
      c.say(thai ? 'สภาพ' : 'status',
            pe < 0.15 ? (thai ? 'ยังเชื่อถือได้' : 'still trustworthy')
                      : (pe < 0.6 ? (thai ? 'เริ่มคลาดเคลื่อน' : 'drifting')
                                  : (thai ? 'หลงทางแล้ว' : 'lost')));
    }
  });

  /* ------------------------------------------------------ Animation 10.3 */
  var D3 = { X0: 24, Y0: 40, PX: 8, FL: 60, FW: 36, V: 1.5, VT: 1.0 };

  /* Lay out the passes and the turns between them, in metres, and measure the
     length of each so the machine can be placed by distance travelled. */
  function layout(w, ov, rmin) {
    var weff = w * (1 - ov / 100);
    var H = Math.min(2 * rmin, (D3.FL - 12) / 2);
    var xL = H, xR = D3.FL - H, Lpass = xR - xL;
    var N = Math.ceil(D3.FW / weff);
    var segs = [], total = 0;
    for (var i = 0; i < N; i++) {
      var y = i * weff + w / 2;
      var ltr = (i % 2 === 0);
      segs.push({ kind: 'pass', i: i, y: y, from: ltr ? xL : xR, to: ltr ? xR : xL,
                  len: Lpass, s0: total });
      total += Lpass;
      if (i < N - 1) {
        var y2 = (i + 1) * weff + w / 2;
        var r = Math.max(rmin, (y2 - y) / 2);
        var len = Math.PI * r;
        segs.push({ kind: 'turn', at: ltr ? xR : xL, y: y, y2: y2, r: r,
                    out: ltr ? 1 : -1, len: len, s0: total });
        total += len;
      }
    }
    return { weff: weff, H: H, xL: xL, xR: xR, Lpass: Lpass, N: N,
             segs: segs, total: total };
  }

  function pointAt(plan, s) {
    for (var k = 0; k < plan.segs.length; k++) {
      var g = plan.segs[k];
      if (s <= g.s0 + g.len || k === plan.segs.length - 1) {
        var u = AMRAnim.clamp((s - g.s0) / g.len, 0, 1);
        if (g.kind === 'pass') {
          return { x: g.from + (g.to - g.from) * u, y: g.y, seg: g, u: u };
        }
        var mid = (g.y + g.y2) / 2;
        var a = Math.PI * u - Math.PI / 2;
        return { x: g.at + g.out * g.r * Math.cos(a),
                 y: mid + (g.y2 > g.y ? 1 : -1) * g.r * Math.sin(a), seg: g, u: u };
      }
    }
    return { x: 0, y: 0, seg: plan.segs[0], u: 0 };
  }

  AMRAnim.create('ch10-cover', {
    setup: function (c) {
      c.bands = c.el('#a103-bands');
      c.h1 = c.el('#a103-head1');
      c.h2 = c.el('#a103-head2');
      c.pathEl = c.el('#a103-path');
      c.bot = c.el('#a103-bot');
      c.weffEl = c.el('#a103-weff');
      c.nEl = c.el('#a103-n');
      c.distEl = c.el('#a103-dist');
      c.ovlEl = c.el('#a103-ovl');
      c.timeEl = c.el('#a103-time');
    },

    onParam: function (name, value, c) { c.rebuild = true; },

    reset: function (c) {
      c.rebuild = true;
      c.s = 0;
      c.path = [];
    },

    update: function (dt, c) {
      if (c.rebuild) {
        c.plan = layout(c.p.w, c.p.ov, c.p.rmin);
        c.s = 0;
        c.path = [];
        while (c.bands.firstChild) { c.bands.removeChild(c.bands.firstChild); }
        c.rects = [];
        for (var i = 0; i < c.plan.N; i++) {
          var r = document.createElementNS(SVGNS, 'rect');
          var top = Math.max(0, i * c.plan.weff);
          var bot = Math.min(D3.FW, i * c.plan.weff + c.p.w);
          r.setAttribute('y', (D3.Y0 + top * D3.PX).toFixed(1));
          r.setAttribute('height', Math.max(0, (bot - top) * D3.PX).toFixed(1));
          r.setAttribute('width', '0');
          r.setAttribute('x', (D3.X0 + c.plan.xL * D3.PX).toFixed(1));
          r.setAttribute('class', 'dg-fill-green');
          r.setAttribute('opacity', '0.4');
          c.bands.appendChild(r);
          c.rects.push(r);
        }
        c.h1.setAttribute('width', (c.plan.H * D3.PX).toFixed(1));
        c.h2.setAttribute('x', (D3.X0 + c.plan.xR * D3.PX).toFixed(1));
        c.h2.setAttribute('width', (c.plan.H * D3.PX).toFixed(1));
        c.rebuild = false;
      }

      var plan = c.plan;
      if (dt > 0) { c.s = Math.min(plan.total, c.s + D3.V * dt * 3); }
      var at = pointAt(plan, c.s);

      /* paint the band behind the machine as it goes */
      if (at.seg.kind === 'pass') {
        var g = at.seg, r = c.rects[g.i];
        var x0 = Math.min(g.from, g.from + (g.to - g.from) * at.u);
        var x1 = Math.max(g.from, g.from + (g.to - g.from) * at.u);
        r.setAttribute('x', (D3.X0 + x0 * D3.PX).toFixed(1));
        r.setAttribute('width', ((x1 - x0) * D3.PX).toFixed(1));
      }

      var bx = D3.X0 + at.x * D3.PX, by = D3.Y0 + at.y * D3.PX;
      c.bot.setAttribute('x', (bx - 7).toFixed(1));
      c.bot.setAttribute('y', (by - 5).toFixed(1));
      c.path.push([bx, by]);
      if (c.path.length > 4000) { c.path.shift(); }
      polyline(c.pathEl, c.path);

      /* the figures of equations (10.18) and (10.20) */
      var turns = plan.N - 1;
      var turnLen = plan.segs.filter(function (g2) { return g2.kind === 'turn'; })
                             .reduce(function (a, g2) { return a + g2.len; }, 0);
      var dist = plan.N * plan.Lpass + turnLen;
      var T = plan.N * plan.Lpass / D3.V + turnLen / D3.VT;
      var over = turns * Math.max(0, c.p.w - plan.weff) * plan.Lpass;
      var worked = plan.N * c.p.w * plan.Lpass;

      var thai = thaiNow();
      c.weffEl.textContent = plan.weff.toFixed(2) + ' m  (' + thai_or(thai, 'บูม', 'boom') +
                             ' ' + c.p.w.toFixed(1) + ' m)';
      c.nEl.textContent = String(plan.N) + '  ' + thai_or(thai, 'แนว', 'passes') +
                          ',  ' + plan.Lpass.toFixed(0) + ' m ' + thai_or(thai, 'ต่อแนว', 'each');
      c.distEl.textContent = dist.toFixed(0) + ' m';
      c.ovlEl.textContent = over.toFixed(0) + ' m²  (' + (100 * over / worked).toFixed(1) + '%)';
      c.timeEl.textContent = (T / 60).toFixed(1) + ' ' + thai_or(thai, 'นาที', 'min') +
                             ',  ' + (0.216 / (T / 3600)).toFixed(2) + ' ha/h';

      c.say(thai ? 'หัวแปลงข้างละ' : 'headland each end', c.fmt(plan.H, 1) + ' m');
      c.say(thai ? 'เวลาที่เสียไปกับการกลับรถ' : 'time lost turning',
            c.fmt(100 * (turnLen / D3.VT) / T, 0) + '%');
      c.say(thai ? 'ความคืบหน้า' : 'progress',
            c.fmt(100 * c.s / plan.total, 0) + '%');
    }
  });

  function thai_or(thai, a, b) { return thai ? a : b; }
});
