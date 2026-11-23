/* ==========================================================================
   Chapter 1 — animation
   1.1  a fixed delta robot beside a mobile field robot, each measuring its
        productivity in its own way
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
/* -------------------------------------------------- Animation 1.1 */
AMRAnim.create('ch01-compare', {
  setup: function (c) {
    c.armA = c.el('#a1-armA');
    c.armB = c.el('#a1-armB');
    c.eff  = c.el('#a1-eff');
    c.held = c.el('#a1-held');
    c.bot  = c.el('#a1-bot');
    c.done = c.el('#a1-done');
    c.cov  = c.el('#a1-cov');
    c.path = c.el('#a1-path');
    c.len  = c.path.getTotalLength();
    c.done.style.strokeDasharray = c.len;

    // Five pieces of produce spaced along the conveyor.
    var g = c.el('#a1-fruits');
    g.innerHTML = '';
    c.fruits = [];
    for (var i = 0; i < 5; i++) {
      var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('r', '8');
      dot.setAttribute('cy', '186');
      dot.setAttribute('class', 'dg-fill-gold dg-stroke');
      dot.setAttribute('stroke-width', '1.5');
      g.appendChild(dot);
      c.fruits.push({ el: dot, x: 30 - i * 78, alive: true });
    }
  },

  reset: function (c) {
    c.picks = 0;
    c.prog = 0;
    c.state = 'wait';
    c.ts = 0;
    c.target = null;
    c.eff.pos = { x: 205, y: 130 };
    c.fruits.forEach(function (f, i) { f.x = 30 - i * 78; f.alive = true; });
  },

  update: function (dt, c) {
    var k = c.p.speed || 1;
    var PICK_X = 205, HOME = { x: 205, y: 130 }, DROP = { x: 363, y: 168 };

    /* ---------------- fixed robot: conveyor + delta pick-and-place ------- */
    c.fruits.forEach(function (f) {
      if (f.alive) { f.x += 46 * k * dt; }
      if (f.x > 410) { f.x = -30; }
      f.el.setAttribute('cx', f.x);
      f.el.setAttribute('opacity', f.alive ? 1 : 0);
    });

    c.ts += dt * k;
    var e = c.eff.pos;
    function moveTo(tx, ty, secs) {
      var a = Math.min(1, c.ts / secs);
      e.x = e.x + (tx - e.x) * a;
      e.y = e.y + (ty - e.y) * a;
      return a >= 1;
    }

    if (c.state === 'wait') {
      moveTo(HOME.x, HOME.y, 0.25);
      var cand = null;
      c.fruits.forEach(function (f) {
        if (f.alive && f.x > PICK_X - 26 && f.x < PICK_X + 12) { cand = f; }
      });
      if (cand) { c.target = cand; c.state = 'grab'; c.ts = 0; }
    } else if (c.state === 'grab') {
      if (moveTo(c.target.x, 178, 0.45)) {
        c.target.alive = false;
        c.state = 'carry'; c.ts = 0;
      }
    } else if (c.state === 'carry') {
      c.held.setAttribute('opacity', '1');
      if (moveTo(DROP.x, DROP.y, 0.5)) {
        c.picks++;
        c.held.setAttribute('opacity', '0');
        c.state = 'home'; c.ts = 0;
      }
    } else if (c.state === 'home') {
      c.held.setAttribute('opacity', '0');
      if (moveTo(HOME.x, HOME.y, 0.4)) { c.state = 'wait'; c.ts = 0; }
    }

    c.armA.setAttribute('x2', e.x); c.armA.setAttribute('y2', e.y);
    c.armB.setAttribute('x2', e.x); c.armB.setAttribute('y2', e.y);
    c.eff.setAttribute('cx', e.x);  c.eff.setAttribute('cy', e.y);
    c.held.setAttribute('cx', e.x); c.held.setAttribute('cy', e.y + 14);

    /* ---------------- mobile robot: coverage along a boustrophedon path -- */
    c.prog = Math.min(1, c.prog + (26 * k * dt) / c.len);
    var pt = c.path.getPointAtLength(c.prog * c.len);
    var ahead = c.path.getPointAtLength(Math.min(c.len, c.prog * c.len + 4));
    var ang = Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180 / Math.PI;
    c.bot.setAttribute('transform', 'translate(' + pt.x + ',' + pt.y + ') rotate(' + ang + ')');
    c.done.style.strokeDashoffset = c.len * (1 - c.prog);
    c.cov.setAttribute('width', 296 * c.prog);

    /* ---------------- readouts ------------------------------------------ */
    var mins = Math.max(c.t / 60, 1e-6);
    c.say('picks', c.picks);
    c.say('picks/min', c.fmt(c.picks / mins, 0));
    c.say('coverage', c.fmt(c.prog * 100, 0) + '%');
  }
});
