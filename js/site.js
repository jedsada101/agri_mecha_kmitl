/* ==========================================================================
   Agricultural Mechatronics & Robotics — site behaviour
   Language switch, theme, mobile nav, table of contents, reading progress.
   Copyright (c) 2026 Jedsada Saijai.
   ========================================================================== */
(function () {
  'use strict';

  var LANG_KEY = 'amr-lang';
  var THEME_KEY = 'amr-theme';
  var root = document.documentElement;

  /* ---------------------------------------------------------------- language */
  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode */ }
  }
  function recall(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function setLang(lang) {
    lang = (lang === 'en') ? 'en' : 'th';
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang === 'th' ? 'th' : 'en');
    store(LANG_KEY, lang);
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-set-lang') === lang));
    });
    // Swap the document title if a translated one was supplied.
    var titleEl = document.querySelector('title');
    if (titleEl) {
      var alt = titleEl.getAttribute('data-title-' + lang);
      if (alt) { document.title = alt; }
    }
    document.dispatchEvent(new CustomEvent('amr:langchange', { detail: { lang: lang } }));
  }

  function setTheme(theme) {
    theme = (theme === 'dark') ? 'dark' : 'light';
    root.setAttribute('data-theme', theme);
    store(THEME_KEY, theme);
    document.querySelectorAll('[data-toggle-theme] i').forEach(function (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
  }

  // Expose for the inline no-flash bootstrap in each page <head>.
  window.AMR = window.AMR || {};
  window.AMR.setLang = setLang;
  window.AMR.setTheme = setTheme;
  window.AMR.getLang = function () { return root.getAttribute('data-lang') || 'th'; };

  document.addEventListener('DOMContentLoaded', function () {
    setLang(recall(LANG_KEY) || root.getAttribute('data-lang') || 'th');
    setTheme(recall(THEME_KEY) || 'light');

    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.getAttribute('data-set-lang')); });
    });
    document.querySelectorAll('[data-toggle-theme]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
      });
    });

    /* ------------------------------------------------------------ mobile nav */
    var toggle = document.querySelector('.nav__toggle');
    var links = document.querySelector('.nav__links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.querySelector('i').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
      });
      links.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && links.classList.contains('is-open')) {
          links.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          toggle.querySelector('i').className = 'fa-solid fa-bars';
        }
      });
    }

    /* ------------------------------------------------- reveal on scroll */
    var revealables = document.querySelectorAll('.reveal');
    if (revealables.length) {
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-in');
              io.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });
        revealables.forEach(function (el) { io.observe(el); });
      } else {
        revealables.forEach(function (el) { el.classList.add('is-in'); });
      }
    }

    /* ------------------------------------------- TOC highlight + progress */
    var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
    var sections = tocLinks
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);
    var bar = document.querySelector('.reading-bar');
    var toTop = document.querySelector('.to-top');
    var article = document.querySelector('.article');

    function onScroll() {
      // Reading progress across the article body.
      if (bar && article) {
        var start = article.offsetTop;
        var span = article.offsetHeight - window.innerHeight * 0.65;
        var pct = span > 0 ? ((window.scrollY - start) / span) * 100 : 0;
        bar.style.width = Math.max(0, Math.min(100, pct)) + '%';
      }
      if (toTop) { toTop.classList.toggle('is-show', window.scrollY > 600); }

      if (!sections.length) { return; }
      var probe = window.scrollY + 140;
      var current = sections[0];
      sections.forEach(function (sec) { if (sec.offsetTop <= probe) { current = sec; } });
      tocLinks.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + current.id);
      });
    }

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () { onScroll(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
    onScroll();

    if (toTop) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ------------------------------------------------------- current year */
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  });
})();
