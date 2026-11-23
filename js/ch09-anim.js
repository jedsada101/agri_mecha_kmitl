/* ==========================================================================
   Chapter 9 — animations
   9.1  one point, two frames: the coordinates change although the point
        does not, and the transformation matrix says by how much
   9.2  the chain of transformations from the base frame to the tool
   9.3  both inverse-kinematics solutions, and the singularity where they merge
   9.4  a delta robot, whose three motor angles are solved independently
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var DEG = Math.PI / 180;

  function thaiNow() {
    return !(window.AMR && window.AMR.getLang() === 'en');
  }

  function segment(el, a, b) {
    el.setAttribute('x1', a[0].toFixed(1)); el.setAttribute('y1', a[1].toFixed(1));
    el.setAttribute('x2', b[0].toFixed(1)); el.setAttribute('y2', b[1].toFixed(1));
  }

  function dot(el, p) {
    el.setAttribute('cx', p[0].toFixed(1));
    el.setAttribute('cy', p[1].toFixed(1));
  }

  function polyline(el, pts) {
    el.setAttribute('points', pts.map(function (p) {
      return p[0].toFixed(1) + ',' + p[1].toFixed(1);
    }).join(' '));
  }

  /* SVG's y points down, so a mathematically positive angle is a negative
     rotation on screen. Every frame in this file is placed through here. */
  function place(el, p, angleDeg) {
    el.setAttribute('transform',
      'translate(' + p[0].toFixed(1) + ',' + p[1].toFixed(1) + ') ' +
      'rotate(' + (-angleDeg).toFixed(2) + ')');
  }

  function pad(v, digits, width) {
    var s = v.toFixed(digits);
    while (s.length < width) { s = ' ' + s; }
    return s;
  }

  /* ------------------------------------------------------ Animation 9.1 */
  var F = { OX: 90, OY: 320, PXMM: 0.5 };   // frame A's origin, px per mm
  var PT = [420, 340];                       // the point, in frame A, mm

  AMRAnim.create('ch09-frames', {
    setup: function (c) {
      c.B = c.el('#a91-B');
      c.blabel = c.el('#a91-blabel');
      c.ptEl = c.el('#a91-pt');
      c.ray = c.el('#a91-ray');
      c.rayb = c.el('#a91-rayb');
      c.pa = c.el('#a91-pa');
      c.pb = c.el('#a91-pb');
      c.m1 = c.el('#a91-m1');
      c.m2 = c.el('#a91-m2');
      c.m3 = c.el('#a91-m3');
      c.detEl = c.el('#a91-det');
      /* the point never moves, so it is positioned once */
      dot(c.ptEl, [F.OX + PT[0] * F.PXMM, F.OY - PT[1] * F.PXMM]);
    },

    reset: function (c) { c.sweepT = 0; },

    update: function (dt, c) {
      if (c.flag.sweep) { c.sweepT += dt; }
      var th = c.flag.sweep ? (((c.sweepT * 40 + 180) % 360) - 180) : c.p.th;
      var dx = c.p.dx, dy = c.p.dy;                 // mm
      var ct = Math.cos(th * DEG), st = Math.sin(th * DEG);

      var bPx = [F.OX + dx * F.PXMM, F.OY - dy * F.PXMM];
      place(c.B, bPx, th);
      c.blabel.setAttribute('x', (bPx[0] - 22).toFixed(1));
      c.blabel.setAttribute('y', (bPx[1] + 20).toFixed(1));

      var ptPx = [F.OX + PT[0] * F.PXMM, F.OY - PT[1] * F.PXMM];
      segment(c.ray, [F.OX, F.OY], ptPx);
      segment(c.rayb, bPx, ptPx);

      /* equation (9.4), rearranged: pB = R^T (pA - d) */
      var ux = PT[0] - dx, uy = PT[1] - dy;
      var bx = ct * ux + st * uy;
      var by = -st * ux + ct * uy;

      c.pa.textContent = '( ' + PT[0].toFixed(0) + ', ' + PT[1].toFixed(0) + ' ) mm';
      c.pb.textContent = '( ' + bx.toFixed(0) + ', ' + by.toFixed(0) + ' ) mm';

      /* the planar form of equation (9.5) */
      c.m1.textContent = '[' + pad(ct, 3, 7) + pad(-st, 3, 8) + pad(dx, 0, 6) + ' ]';
      c.m2.textContent = '[' + pad(st, 3, 7) + pad(ct, 3, 8) + pad(dy, 0, 6) + ' ]';
      c.m3.textContent = '[' + pad(0, 3, 7) + pad(0, 3, 8) + pad(1, 0, 6) + ' ]';

      /* equation (9.2): this must read +1 at every angle */
      c.detEl.textContent = (ct * ct + st * st).toFixed(4);

      var thai = thaiNow();
      c.say(thai ? 'มุม' : 'angle', c.fmt(th, 0) + '°');
      c.say(thai ? 'การเลื่อน' : 'translation',
            '(' + c.fmt(dx, 0) + ', ' + c.fmt(dy, 0) + ') mm');
      c.say(thai ? 'ระยะจากจุดถึง B' : 'point to B',
            c.fmt(Math.sqrt(bx * bx + by * by), 0) + ' mm');
    }
  });

  /* ------------------------------------------------------ Animation 9.2 */
  var K = { BX: 270, BY: 330, L: [105, 80, 55], MMPX: 4 };

  AMRAnim.create('ch09-fk', {
    setup: function (c) {
      c.links = [c.el('#a92-l1'), c.el('#a92-l2'), c.el('#a92-l3')];
      c.joints = [c.el('#a92-j1'), c.el('#a92-j2'), c.el('#a92-j3')];
      c.frames = [c.el('#a92-f0'), c.el('#a92-f1'), c.el('#a92-f2'), c.el('#a92-f3')];
      c.toolEl = c.el('#a92-tool');
      c.trailEl = c.el('#a92-trail');
      c.poseEl = c.el('#a92-pose');
      c.m1 = c.el('#a92-m1');
      c.m2 = c.el('#a92-m2');
      c.m3 = c.el('#a92-m3');
      c.rEl = c.el('#a92-r');
      c.phiEl = c.el('#a92-phi');
      place(c.frames[0], [K.BX, K.BY], 0);
    },

    reset: function (c) {
      c.trail = [];
      c.sweepT = 0;
    },

    update: function (dt, c) {
      if (c.flag.sweep) { c.sweepT += dt; }
      var q;
      if (c.flag.sweep) {
        q = [70 + 60 * Math.sin(0.5 * c.sweepT),
             -60 + 70 * Math.sin(0.37 * c.sweepT + 1.0),
             -30 + 80 * Math.sin(0.61 * c.sweepT + 2.2)];
      } else {
        q = [c.p.q1, c.p.q2, c.p.q3];
      }

      /* equation (9.11), accumulated one joint at a time */
      var at = [K.BX, K.BY], ang = 0;
      for (var i = 0; i < 3; i++) {
        ang += q[i];
        var next = [at[0] + K.L[i] * Math.cos(ang * DEG),
                    at[1] - K.L[i] * Math.sin(ang * DEG)];
        segment(c.links[i], at, next);
        dot(c.joints[i], at);
        place(c.frames[i + 1], next, ang);
        at = next;
      }
      dot(c.toolEl, at);

      c.trail.push(at.slice());
      if (c.trail.length > 700) { c.trail.shift(); }
      polyline(c.trailEl, c.trail);

      /* back into millimetres, measured from the base with y upwards */
      var x = (at[0] - K.BX) * K.MMPX;
      var y = (K.BY - at[1]) * K.MMPX;
      var phi = q[0] + q[1] + q[2];
      var cp = Math.cos(phi * DEG), sp = Math.sin(phi * DEG);

      c.poseEl.textContent = '( ' + x.toFixed(0) + ', ' + y.toFixed(0) + ' ) mm, ' +
                             phi.toFixed(0) + '°';
      c.m1.textContent = '[' + pad(cp, 3, 7) + pad(-sp, 3, 8) + pad(x, 0, 6) + ' ]';
      c.m2.textContent = '[' + pad(sp, 3, 7) + pad(cp, 3, 8) + pad(y, 0, 6) + ' ]';
      c.m3.textContent = '[' + pad(0, 3, 7) + pad(0, 3, 8) + pad(1, 0, 6) + ' ]';
      c.rEl.textContent = Math.sqrt(x * x + y * y).toFixed(0) + ' mm';
      c.phiEl.textContent = phi.toFixed(0) + '°';

      var thai = thaiNow();
      c.say('θ₁', c.fmt(q[0], 0) + '°');
      c.say('θ₂', c.fmt(q[1], 0) + '°');
      c.say('θ₃', c.fmt(q[2], 0) + '°');
      c.say(thai ? 'ความยาวลิงก์' : 'link lengths',
            K.L.map(function (L) { return (L * K.MMPX).toFixed(0); }).join(' / ') + ' mm');
    }
  });

  /* ------------------------------------------------------ Animation 9.3 */
  var I = { BX: 240, BY: 330, L1: 400, L2: 250, S: 0.36 };   // mm, px per mm

  /* equations (9.18) to (9.20) */
  function ik2(x, y, elbowUp) {
    var r2 = x * x + y * y;
    var c2 = (r2 - I.L1 * I.L1 - I.L2 * I.L2) / (2 * I.L1 * I.L2);
    c2 = AMRAnim.clamp(c2, -1, 1);
    var q2 = (elbowUp ? -1 : 1) * Math.acos(c2);
    var q1 = Math.atan2(y, x) -
             Math.atan2(I.L2 * Math.sin(q2), I.L1 + I.L2 * Math.cos(q2));
    return [q1, q2];
  }

  function fk2(q) {
    var ex = I.BX + I.L1 * I.S * Math.cos(q[0]);
    var ey = I.BY - I.L1 * I.S * Math.sin(q[0]);
    return {
      elbow: [ex, ey],
      tool: [ex + I.L2 * I.S * Math.cos(q[0] + q[1]),
             ey - I.L2 * I.S * Math.sin(q[0] + q[1])]
    };
  }

  AMRAnim.create('ch09-ik', {
    setup: function (c) {
      c.ws = c.el('#a93-ws');
      c.b1 = c.el('#a93-b1'); c.b2 = c.el('#a93-b2'); c.bj = c.el('#a93-bj');
      c.l1 = c.el('#a93-l1'); c.l2 = c.el('#a93-l2');
      c.j1 = c.el('#a93-j1'); c.j2 = c.el('#a93-j2');
      c.tgt = c.el('#a93-tgt');
      c.txEl = c.el('#a93-tx');
      c.solEl = c.el('#a93-sol');
      c.altEl = c.el('#a93-alt');
      c.detEl = c.el('#a93-det');
      c.ampEl = c.el('#a93-amp');
      c.ws.setAttribute('r', ((I.L1 + I.L2) * I.S).toFixed(1));
      dot(c.j1, [I.BX, I.BY]);
    },

    /* It must autoplay: the runtime does not call update on a slider
       change, so a paused figure would ignore the controls entirely. */
    reset: function (c) { return; },

    update: function (dt, c) {
      var a = c.p.ang * DEG, r = c.p.r;
      var x = r * Math.cos(a), y = r * Math.sin(a);          // mm, y up
      var tgtPx = [I.BX + x * I.S, I.BY - y * I.S];
      dot(c.tgt, tgtPx);

      var up = !!c.flag.up;
      var qa = ik2(x, y, up);
      var qb = ik2(x, y, !up);
      var pa = fk2(qa), pb = fk2(qb);

      segment(c.l1, [I.BX, I.BY], pa.elbow);
      segment(c.l2, pa.elbow, pa.tool);
      dot(c.j2, pa.elbow);

      segment(c.b1, [I.BX, I.BY], pb.elbow);
      segment(c.b2, pb.elbow, pb.tool);
      dot(c.bj, pb.elbow);

      function show(q) {
        return '(' + (q[0] / DEG).toFixed(1) + '°, ' + (q[1] / DEG).toFixed(1) + '°)';
      }
      c.txEl.textContent = '( ' + x.toFixed(0) + ', ' + y.toFixed(0) + ' ) mm';
      c.solEl.textContent = show(qa);
      c.altEl.textContent = show(qb);

      /* equation (9.25), and the amplification of equation (9.26) */
      var s2 = Math.abs(Math.sin(qa[1]));
      var det = I.L1 * I.L2 * s2;
      c.detEl.textContent = (det / 1000).toFixed(1) + ' ×10³ mm²';
      c.ampEl.textContent = s2 < 1e-3 ? '∞' : ('×' + (1 / s2).toFixed(1));

      var thai = thaiNow();
      c.say(thai ? 'ระยะเป้าหมาย' : 'target radius', c.fmt(r, 0) + ' mm');
      c.say(thai ? 'เอื้อมสูงสุด' : 'max reach', (I.L1 + I.L2) + ' mm');
      c.say(thai ? 'ข้อศอก' : 'elbow',
            up ? (thai ? 'ขึ้น' : 'up') : (thai ? 'ลง' : 'down'));
      c.say(thai ? 'สภาพ' : 'state',
            s2 < 0.09 ? (thai ? 'ใกล้จุดเอกฐานมาก' : 'very near a singularity')
                      : (s2 < 0.26 ? (thai ? 'เริ่มเข้าใกล้จุดเอกฐาน' : 'approaching a singularity')
                                   : (thai ? 'ปลอดภัย' : 'well conditioned')));
    }
  });

  /* ------------------------------------------------------ Animation 9.4 */
  var D = {
    S1: [300, 62], S2: [560, 62], S3: [430, 62],   // the three shoulders
    L: 130, ELL: 230, E: 48,                        // upper arm, lower arm, platform half-width
    PICK: [320, 304], PLACE: [540, 282], TOP: 208,
    MMPX: 2
  };

  /* The knee of one arm: the point at distance L from the shoulder and ELL
     from the platform attachment. This is equation (9.27) for a single arm,
     which is why each one solves on its own. `side` picks which root. */
  function knee(shoulder, attach, side) {
    var dx = attach[0] - shoulder[0], dy = attach[1] - shoulder[1];
    var d = Math.sqrt(dx * dx + dy * dy);
    d = AMRAnim.clamp(d, Math.abs(D.L - D.ELL) + 0.01, D.L + D.ELL - 0.01);
    var a = (D.L * D.L - D.ELL * D.ELL + d * d) / (2 * d);
    var h = Math.sqrt(Math.max(0, D.L * D.L - a * a));
    var ux = dx / d, uy = dy / d;
    var mx = shoulder[0] + a * ux, my = shoulder[1] + a * uy;
    return [mx + side * h * uy, my - side * h * ux];
  }

  function angleOf(shoulder, kneePt) {
    return Math.atan2(-(kneePt[1] - shoulder[1]), kneePt[0] - shoulder[0]) / DEG;
  }

  AMRAnim.create('ch09-delta', {
    setup: function (c) {
      c.u = [c.el('#a94-u1'), c.el('#a94-u2'), c.el('#a94-u3')];
      c.d1a = c.el('#a94-d1a'); c.d1b = c.el('#a94-d1b');
      c.d2a = c.el('#a94-d2a'); c.d2b = c.el('#a94-d2b');
      c.d3 = c.el('#a94-d3');
      c.e1 = c.el('#a94-e1'); c.e2 = c.el('#a94-e2');
      c.plat = c.el('#a94-plat');
      c.fruit = c.el('#a94-fruit');
      c.trailEl = c.el('#a94-trail');
    },

    onToggle: function (name, on, c) {
      if (name === 'gate') { c.trail = []; }
    },

    reset: function (c) { c.trail = []; },

    update: function (dt, c) {
      var phase = (c.t * 0.22 * c.p.speed) % 2;
      var s = phase < 1 ? phase : 2 - phase;         // out and back
      var going = phase < 1;

      var p;
      if (c.flag.gate) {
        /* lift clear, cross, descend — the standard packing-line move */
        var A = D.PICK, B = [D.PICK[0], D.TOP], C = [D.PLACE[0], D.TOP], E = D.PLACE;
        if (s < 0.25) {
          var t0 = s / 0.25;
          p = [A[0] + (B[0] - A[0]) * t0, A[1] + (B[1] - A[1]) * t0];
        } else if (s < 0.75) {
          var t1 = (s - 0.25) / 0.5;
          p = [B[0] + (C[0] - B[0]) * t1, B[1] + (C[1] - B[1]) * t1];
        } else {
          var t2 = (s - 0.75) / 0.25;
          p = [C[0] + (E[0] - C[0]) * t2, C[1] + (E[1] - C[1]) * t2];
        }
      } else {
        p = [D.PICK[0] + (D.PLACE[0] - D.PICK[0]) * s,
             D.PICK[1] + (D.PLACE[1] - D.PICK[1]) * s];
      }

      /* each arm solved on its own, from the platform position alone */
      var at1 = [p[0] - D.E, p[1]], at2 = [p[0] + D.E, p[1]], at3 = [p[0], p[1]];
      var k1 = knee(D.S1, at1, -1);
      var k2 = knee(D.S2, at2, +1);
      var k3 = knee(D.S3, at3, +1);

      segment(c.u[0], D.S1, k1);
      segment(c.u[1], D.S2, k2);
      segment(c.u[2], D.S3, k3);
      /* the parallelogram, drawn as two parallel rods 8 px apart */
      segment(c.d1a, [k1[0] - 4, k1[1] + 7], [at1[0] - 4, at1[1] + 7]);
      segment(c.d1b, [k1[0] + 4, k1[1] - 7], [at1[0] + 4, at1[1] - 7]);
      segment(c.d2a, [k2[0] + 4, k2[1] + 7], [at2[0] + 4, at2[1] + 7]);
      segment(c.d2b, [k2[0] - 4, k2[1] - 7], [at2[0] - 4, at2[1] - 7]);
      segment(c.d3, k3, at3);
      dot(c.e1, k1);
      dot(c.e2, k2);

      c.plat.setAttribute('x', (p[0] - D.E).toFixed(1));
      c.plat.setAttribute('y', (p[1] - 9).toFixed(1));
      dot(c.fruit, [p[0], p[1] + 29]);
      c.fruit.setAttribute('opacity', going ? 1 : 0);

      c.trail.push(p.slice());
      if (c.trail.length > 700) { c.trail.shift(); }
      polyline(c.trailEl, c.trail);

      var thai = thaiNow();
      c.say('θ₁', c.fmt(angleOf(D.S1, k1), 0) + '°');
      c.say('θ₂', c.fmt(angleOf(D.S2, k2), 0) + '°');
      c.say('θ₃', c.fmt(angleOf(D.S3, k3), 0) + '°');
      c.say(thai ? 'ตำแหน่งแพลตฟอร์ม' : 'platform',
            '(' + c.fmt((p[0] - D.S3[0]) * D.MMPX, 0) + ', ' +
            c.fmt((p[1] - D.S3[1]) * D.MMPX, 0) + ') mm');
      c.say(thai ? 'มุมเอียงของแพลตฟอร์ม' : 'platform tilt', '0°');
      c.say(thai ? 'เส้นทาง' : 'path',
            c.flag.gate ? (thai ? 'แบบประตู' : 'gate') : (thai ? 'ตรง' : 'direct'));
    }
  });
});
