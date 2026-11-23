/* ==========================================================================
   Chapter 8 — animations
   8.1  the same two link lengths give very different workspaces, depending
        only on whether each joint slides or rotates
   8.2  a target returned to repeatedly: the cluster's spread is repeatability,
        its offset from the commanded point is accuracy
   8.3  joint-interpolated and linear moves between the same two points
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var DEG = Math.PI / 180;

  function thaiNow() {
    return !(window.AMR && window.AMR.getLang() === 'en');
  }

  /* Radio behaviour for a group of toggle buttons: exactly one stays on. */
  function radio(c, group, name, on) {
    function setBtn(key, state) {
      var btn = c.el('[data-anim-toggle="' + key + '"]');
      if (!btn) { return; }
      btn.classList.toggle('is-on', state);
      btn.setAttribute('aria-pressed', String(state));
    }
    if (!on) {                       // refuse to let the group go empty
      c.flag[name] = true;
      setBtn(name, true);
      return false;
    }
    group.forEach(function (key) {
      if (key !== name) { c.flag[key] = false; setBtn(key, false); }
    });
    return true;
  }

  function polyline(el, pts) {
    el.setAttribute('points', pts.map(function (pt) {
      return pt[0].toFixed(1) + ',' + pt[1].toFixed(1);
    }).join(' '));
  }

  function segment(el, a, b) {
    el.setAttribute('x1', a[0].toFixed(1)); el.setAttribute('y1', a[1].toFixed(1));
    el.setAttribute('x2', b[0].toFixed(1)); el.setAttribute('y2', b[1].toFixed(1));
  }

  function dot(el, p) {
    el.setAttribute('cx', p[0].toFixed(1));
    el.setAttribute('cy', p[1].toFixed(1));
  }

  /* ------------------------------------------------------ Animation 8.1 */
  var W = { BX: 430, BY: 210, S: 0.125 };       // centre, and px per mm

  /* The boundary of the workspace, as one or two closed subpaths. An inner
     subpath is punched out by fill-rule="evenodd", which is how the RR
     configuration gets its unreachable hole. */
  function envelope(mode, l1, l2) {
    var subs = [], BX = W.BX, BY = W.BY, i;
    if (mode === 'cart') {
      subs.push([[BX - l1 / 2, BY - l2 / 2], [BX + l1 / 2, BY - l2 / 2],
                 [BX + l1 / 2, BY + l2 / 2], [BX - l1 / 2, BY + l2 / 2]]);
    } else if (mode === 'polar') {
      var r0 = 0.25 * l1, r1 = r0 + l2, ring = [];
      for (i = 0; i <= 54; i++) {
        var a = (-135 + 270 * i / 54) * DEG;
        ring.push([BX + r1 * Math.cos(a), BY - r1 * Math.sin(a)]);
      }
      for (i = 54; i >= 0; i--) {
        var b = (-135 + 270 * i / 54) * DEG;
        ring.push([BX + r0 * Math.cos(b), BY - r0 * Math.sin(b)]);
      }
      subs.push(ring);
    } else {
      var Ro = l1 + l2, Ri = Math.abs(l1 - l2), out = [], inn = [];
      for (i = 0; i <= 80; i++) {
        var t = 360 * i / 80 * DEG;
        out.push([BX + Ro * Math.cos(t), BY - Ro * Math.sin(t)]);
      }
      subs.push(out);
      if (Ri > 2) {
        for (i = 0; i <= 60; i++) {
          var u = 360 * i / 60 * DEG;
          inn.push([BX + Ri * Math.cos(u), BY - Ri * Math.sin(u)]);
        }
        subs.push(inn);
      }
    }
    return subs.map(function (pts) {
      return 'M' + pts.map(function (pt) {
        return pt[0].toFixed(1) + ' ' + pt[1].toFixed(1);
      }).join(' L') + ' Z';
    }).join(' ');
  }

  AMRAnim.create('ch08-work', {
    setup: function (c) {
      c.env = c.el('#a81-env');
      c.envline = c.el('#a81-envline');
      c.trailEl = c.el('#a81-trail');
      c.L1 = c.el('#a81-l1');
      c.L2 = c.el('#a81-l2');
      c.J2 = c.el('#a81-j2');
      c.TOOL = c.el('#a81-tool');
    },

    onToggle: function (name, on, c) {
      if (['cart', 'polar', 'artic'].indexOf(name) < 0) { return; }
      if (radio(c, ['cart', 'polar', 'artic'], name, on)) {
        c.trail = [];
        c.dirty = true;
      }
    },

    onParam: function (name, value, c) { c.dirty = true; },

    reset: function (c) {
      c.trail = [];
      c.dirty = true;
    },

    update: function (dt, c) {
      var mode = c.flag.cart ? 'cart' : (c.flag.polar ? 'polar' : 'artic');
      var l1 = c.p.l1 * W.S, l2 = c.p.l2 * W.S;        // px
      var BX = W.BX, BY = W.BY;

      if (c.dirty) {
        var d = envelope(mode, l1, l2);
        c.env.setAttribute('d', d);
        c.envline.setAttribute('d', d);
        c.dirty = false;
      }

      /* Two sweeps at incommensurate rates, so the pair fills the space. */
      var u = 0.5 + 0.5 * Math.sin(0.62 * c.t);
      var v = 0.5 + 0.5 * Math.sin(0.39 * c.t + 1.1);
      var elbow, tool, q1, q2, Rmax, Rmin, area, unit;

      if (mode === 'cart') {
        var d1 = (u - 0.5) * l1, d2 = (v - 0.5) * l2;
        elbow = [BX + d1, BY];
        tool = [BX + d1, BY - d2];
        q1 = (u - 0.5) * c.p.l1; q2 = (v - 0.5) * c.p.l2; unit = ' mm';
        area = c.p.l1 * c.p.l2;
        Rmax = Math.sqrt(Math.pow(c.p.l1 / 2, 2) + Math.pow(c.p.l2 / 2, 2));
        Rmin = 0;
      } else if (mode === 'polar') {
        var ang = (-135 + 270 * u) * DEG;
        var ra = 0.25 * l1, rb = ra + v * l2;
        elbow = [BX + ra * Math.cos(ang), BY - ra * Math.sin(ang)];
        tool = [BX + rb * Math.cos(ang), BY - rb * Math.sin(ang)];
        Rmin = 0.25 * c.p.l1; Rmax = Rmin + c.p.l2;
        q1 = -135 + 270 * u; q2 = Rmin + v * c.p.l2; unit = ' mm';
        /* a 270° ring sector */
        area = 2.3562 * (Rmax * Rmax - Rmin * Rmin);
      } else {
        var t1 = 360 * u * DEG, t2 = (-180 + 360 * v) * DEG;
        elbow = [BX + l1 * Math.cos(t1), BY - l1 * Math.sin(t1)];
        tool = [elbow[0] + l2 * Math.cos(t1 + t2),
                elbow[1] - l2 * Math.sin(t1 + t2)];
        q1 = 360 * u; q2 = -180 + 360 * v; unit = '°';
        /* equation (8.2), then (8.3) */
        Rmax = c.p.l1 + c.p.l2; Rmin = Math.abs(c.p.l1 - c.p.l2);
        area = Math.PI * (Rmax * Rmax - Rmin * Rmin);
      }

      segment(c.L1, [BX, BY], elbow);
      segment(c.L2, elbow, tool);
      dot(c.J2, elbow);
      dot(c.TOOL, tool);

      c.trail.push(tool);
      if (c.trail.length > 900) { c.trail.shift(); }
      polyline(c.trailEl, c.trail);

      var thai = thaiNow();
      var names = { cart: 'PP', polar: 'RP', artic: 'RR' };
      c.say(thai ? 'ข้อต่อ' : 'joints', names[mode]);
      c.say(thai ? 'พื้นที่ทำงาน' : 'workspace area', c.fmt(area / 1e6, 2) + ' m²');
      c.say(thai ? 'เอื้อมไกลสุด' : 'max reach', c.fmt(Rmax, 0) + ' mm');
      c.say(thai ? 'รูที่เอื้อมไม่ถึง' : 'unreachable hole',
            Rmin < 1 ? (thai ? 'ไม่มี' : 'none') : c.fmt(Rmin, 0) + ' mm');
      c.say(thai ? 'ตัวแปรข้อต่อ' : 'joint variables',
            c.fmt(q1, 0) + (mode === 'cart' ? ' mm' : '°') + ', ' +
            c.fmt(q2, 0) + unit);
    }
  });

  /* ------------------------------------------------------ Animation 8.2 */
  var T = { CX: 430, CY: 170, PPM: 400 };       // target centre, px per mm
  var BIAS_DIR = [Math.cos(35 * DEG), -Math.sin(35 * DEG)];

  /* A fresh batch of landings, so two different states are never mixed. */
  function clearLandings(c) {
    c.pts = [];
    c.next = 0;
    while (c.dots.firstChild) { c.dots.removeChild(c.dots.firstChild); }
  }

  AMRAnim.create('ch08-acc', {
    setup: function (c) {
      c.dots = c.el('#a82-dots');
      c.repEl = c.el('#a82-rep');
      c.accEl = c.el('#a82-acc');
      c.m1 = c.el('#a82-m1');
      c.m2 = c.el('#a82-m2');
    },

    onToggle: function (name, on, c) {
      if (name === 'calib') { clearLandings(c); }
    },

    onParam: function (name, value, c) { clearLandings(c); },

    reset: function (c) { clearLandings(c); },

    update: function (dt, c) {
      /* one landing every 0.3 s of animation time, up to sixty */
      if (c.t >= c.next && c.pts.length < 60) {
        c.next = c.t + 0.3;

        /* Box-Muller, so the scatter really is Gaussian */
        var u1 = Math.max(1e-9, Math.random()), u2 = Math.random();
        var g = Math.sqrt(-2 * Math.log(u1));
        var nx = g * Math.cos(2 * Math.PI * u2);
        var ny = g * Math.sin(2 * Math.PI * u2);

        var bias = c.flag.calib ? 0 : c.p.bias;
        var p = [T.CX + (bias * BIAS_DIR[0] + c.p.sd * nx) * T.PPM,
                 T.CY + (bias * BIAS_DIR[1] + c.p.sd * ny) * T.PPM];
        c.pts.push(p);

        var mark = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        mark.setAttribute('cx', p[0].toFixed(1));
        mark.setAttribute('cy', p[1].toFixed(1));
        mark.setAttribute('r', '3.4');
        mark.setAttribute('class', 'dg-fill-steel dg-stroke');
        mark.setAttribute('stroke-width', '0.9');
        c.dots.appendChild(mark);
      }

      var n = c.pts.length, mx = T.CX, my = T.CY, sd = 0;
      if (n > 0) {
        mx = 0; my = 0;
        c.pts.forEach(function (p) { mx += p[0]; my += p[1]; });
        mx /= n; my /= n;
      }
      if (n > 1) {
        var ss = 0;
        c.pts.forEach(function (p) {
          ss += Math.pow(p[0] - mx, 2) + Math.pow(p[1] - my, 2);
        });
        sd = Math.sqrt(ss / (n - 1));
      }

      /* equation (8.6): the spread about the cluster's own mean */
      dot(c.repEl, [mx, my]);
      c.repEl.setAttribute('r', (3 * sd).toFixed(1));

      /* equation (8.7): from the commanded point to that mean */
      segment(c.accEl, [T.CX, T.CY], [mx, my]);
      segment(c.m1, [mx - 7, my - 7], [mx + 7, my + 7]);
      segment(c.m2, [mx - 7, my + 7], [mx + 7, my - 7]);

      var ac = Math.sqrt(Math.pow(mx - T.CX, 2) + Math.pow(my - T.CY, 2)) / T.PPM;
      var rp = 3 * sd / T.PPM;
      var thai = thaiNow();
      c.say(thai ? 'จำนวนครั้ง' : 'landings', String(n));
      c.say(thai ? 'ความแม่นยำ' : 'accuracy', c.fmt(ac, 3) + ' mm');
      c.say(thai ? 'ความเที่ยงตรง' : 'repeatability', '±' + c.fmt(rp, 3) + ' mm');
      c.say(thai ? 'สอบเทียบ' : 'calibration',
            c.flag.calib ? (thai ? 'แล้ว' : 'applied') : (thai ? 'ยังไม่' : 'none'));
    }
  });

  /* ------------------------------------------------------ Animation 8.3 */
  var J = {
    BX: 430, BY: 296, l1: 150, l2: 110,
    MMPX: 4,                                   // mm per px, for the readout
    A: [286, 118], B: [610, 196],
    box: { x0: 382, y0: 8, x1: 512, y1: 88 }
  };

  /* Closed-form inverse kinematics for a planar two-link arm, elbow-up. */
  function ik(pt) {
    var x = pt[0] - J.BX, y = J.BY - pt[1];    // into a y-up frame
    var r = Math.sqrt(x * x + y * y);
    r = Math.min(J.l1 + J.l2 - 1e-6, Math.max(Math.abs(J.l1 - J.l2) + 1e-6, r));
    var c2 = (r * r - J.l1 * J.l1 - J.l2 * J.l2) / (2 * J.l1 * J.l2);
    var q2 = Math.acos(AMRAnim.clamp(c2, -1, 1));
    var q1 = Math.atan2(y, x) -
             Math.atan2(J.l2 * Math.sin(q2), J.l1 + J.l2 * Math.cos(q2));
    return [q1, q2];
  }

  function fk(q) {
    var ex = J.BX + J.l1 * Math.cos(q[0]);
    var ey = J.BY - J.l1 * Math.sin(q[0]);
    return {
      elbow: [ex, ey],
      tool: [ex + J.l2 * Math.cos(q[0] + q[1]), ey - J.l2 * Math.sin(q[0] + q[1])]
    };
  }

  var Q_A = ik(J.A), Q_B = ik(J.B);

  AMRAnim.create('ch08-jog', {
    setup: function (c) {
      c.L1 = c.el('#a83-l1');
      c.L2 = c.el('#a83-l2');
      c.J2 = c.el('#a83-j2');
      c.TOOL = c.el('#a83-tool');
      c.trailEl = c.el('#a83-trail');
    },

    onToggle: function (name, on, c) {
      if (name === 'linear') { c.trail = []; c.worst = 0; c.hit = false; }
    },

    reset: function (c) {
      c.trail = [];
      c.worst = 0;
      c.hit = false;
    },

    update: function (dt, c) {
      /* back and forth between A and B */
      var phase = (c.t * 0.28 * c.p.speed) % 2;
      var s = phase < 1 ? phase : 2 - phase;

      var q;
      if (c.flag.linear) {
        /* interpolate the TCP, then solve the joints at every instant */
        q = ik([J.A[0] + (J.B[0] - J.A[0]) * s,
                J.A[1] + (J.B[1] - J.A[1]) * s]);
      } else {
        /* interpolate the joint angles, and let the tool go where it will */
        q = [Q_A[0] + (Q_B[0] - Q_A[0]) * s,
             Q_A[1] + (Q_B[1] - Q_A[1]) * s];
      }

      var pose = fk(q);
      var tool = pose.tool;

      segment(c.L1, [J.BX, J.BY], pose.elbow);
      segment(c.L2, pose.elbow, tool);
      dot(c.J2, pose.elbow);
      dot(c.TOOL, tool);

      c.trail.push(tool);
      if (c.trail.length > 600) { c.trail.shift(); }
      polyline(c.trailEl, c.trail);

      /* how far the tool strays from the straight line joining A and B */
      var dx = J.B[0] - J.A[0], dy = J.B[1] - J.A[1];
      var len = Math.sqrt(dx * dx + dy * dy);
      var off = Math.abs((tool[0] - J.A[0]) * dy - (tool[1] - J.A[1]) * dx) / len;
      if (off > c.worst) { c.worst = off; }

      if (tool[0] > J.box.x0 && tool[0] < J.box.x1 &&
          tool[1] > J.box.y0 && tool[1] < J.box.y1) { c.hit = true; }

      var thai = thaiNow();
      c.say(thai ? 'โหมด' : 'mode',
            c.flag.linear ? (thai ? 'เชิงเส้น' : 'linear')
                          : (thai ? 'ข้อต่อ' : 'joint'));
      c.say('q1', c.fmt(q[0] / DEG, 1) + '°');
      c.say('q2', c.fmt(q[1] / DEG, 1) + '°');
      c.say(thai ? 'เบี่ยงจากเส้นตรงสูงสุด' : 'peak deviation',
            c.fmt(c.worst * J.MMPX, 0) + ' mm');
      c.say(thai ? 'ชนคาน' : 'beam',
            c.hit ? (thai ? 'ชนแล้ว' : 'struck') : (thai ? 'ยังไม่ชน' : 'clear'));
    }
  });
});
