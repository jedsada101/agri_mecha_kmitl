/* ==========================================================================
   Agricultural Mechatronics & Robotics — LaTeX equation rendering
   MathJax 3 (SVG output) is vendored under js/vendor/mathjax/ so that every
   equation renders identically online and offline. If the local copy is ever
   missing, the CDN is used as a fallback.

   Write equations in plain LaTeX:
       inline   \( e(t) = r(t) - y(t) \)
       display  <div class="math">$$ G(s) = \frac{K}{\tau s + 1} $$</div>

   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
(function () {
  'use strict';

  // MathJax must be configured before its script is loaded.
  window.MathJax = {
    tex: {
      inlineMath: [['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      tags: 'none',
      macros: {
        // Shorthands used throughout the course notes.
        deg: ['^{\\circ}', 0],
        T: ['{}^{#1}\\!\\mathbf{T}_{#2}', 2],   // \T{A}{B}  → homogeneous transform
        vect: ['\\mathbf{#1}', 1],
        dd: ['\\mathrm{d}', 0]
      }
    },
    svg: {
      fontCache: 'global',
      displayAlign: 'center',
      scale: 1.02
    },
    options: {
      skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
      ignoreHtmlClass: 'no-math'
    },
    startup: {
      typeset: true
    }
  };

  /* Typeset anything added to the page after load. */
  window.AMRMath = {
    typeset: function (root) {
      if (window.MathJax && window.MathJax.typesetPromise) {
        return window.MathJax.typesetPromise(root ? [root] : undefined);
      }
    }
  };

  // Resolve js/vendor/... relative to this script, so the path works from
  // both index.html and chapters/*.html.
  var here = document.currentScript && document.currentScript.src;
  var base = here ? here.replace(/[^/]*$/, '') : 'js/';

  var local = document.createElement('script');
  local.id = 'MathJax-script';
  local.async = true;
  local.src = base + 'vendor/mathjax/tex-svg.js';
  local.onerror = function () {
    var cdn = document.createElement('script');
    cdn.id = 'MathJax-script-cdn';
    cdn.async = true;
    cdn.src = 'https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js';
    document.head.appendChild(cdn);
  };
  document.head.appendChild(local);
})();
