/* ==========================================================================
   Agricultural Mechatronics & Robotics — bilingual quiz engine
   Renders pre-test / post-test multiple-choice quizzes from a data object.
   Copyright (c) 2026 Jedsada Saijai.

   Usage inside a chapter page:

     <div class="quiz quiz--pre" data-quiz="ch01-pre"></div>
     <script>
       AMRQuiz.mount('ch01-pre', {
         type: 'pre',                       // 'pre' | 'post'
         chapter: 'ch01',
         title:   { th: '...', en: '...' },
         intro:   { th: '...', en: '...' },
         questions: [{
           q:       { th: '...', en: '...' },
           options: [{ th: '...', en: '...' }, ...],
           answer:  0,                      // index of the correct option
           explain: { th: '...', en: '...' }
         }]
       });
     </script>
   ========================================================================== */
(function (global) {
  'use strict';

  var STORE_PREFIX = 'amr-score-';

  var UI = {
    pre: {
      badge:  { th: 'ก่อนเรียน', en: 'Pre-test' },
      icon:   'fa-solid fa-clipboard-question'
    },
    post: {
      badge:  { th: 'หลังเรียน', en: 'Post-test' },
      icon:   'fa-solid fa-clipboard-check'
    },
    submit:  { th: 'ตรวจคำตอบ', en: 'Check answers' },
    retry:   { th: 'ทำใหม่', en: 'Try again' },
    unanswered: {
      th: 'กรุณาตอบให้ครบทุกข้อก่อนตรวจคำตอบ (เหลืออีก {n} ข้อ)',
      en: 'Please answer every question first ({n} remaining).'
    },
    correctWord: { th: 'เฉลย', en: 'Answer' },
    scoreOf:     { th: 'คะแนน', en: 'Score' },
    previous:    { th: 'ผลครั้งล่าสุด', en: 'Last attempt' },
    gain:        { th: 'พัฒนาการจากก่อนเรียน: {g} ข้อ', en: 'Improvement over the pre-test: {g} items' },
    bands: [
      { min: 0.85, th: 'ยอดเยี่ยม! คุณเข้าใจเนื้อหาบทนี้เป็นอย่างดี', en: 'Excellent — you have a solid command of this chapter.' },
      { min: 0.70, th: 'ดีมาก ทบทวนข้อที่ผิดอีกครั้งเพื่อความมั่นใจ', en: 'Good work — review the missed items to consolidate.' },
      { min: 0.50, th: 'พอใช้ ควรอ่านทบทวนหัวข้อที่ตอบผิด', en: 'Fair — revisit the sections behind the missed items.' },
      { min: 0.00, th: 'ควรทบทวนเนื้อหาบทนี้อีกครั้งก่อนไปบทถัดไป', en: 'Please review this chapter before moving on.' }
    ],
    preNote: {
      th: 'แบบทดสอบนี้ใช้สำรวจความรู้เดิม ไม่มีผลต่อคะแนนเก็บ ตอบตามที่คิดว่าถูกต้อง',
      en: 'This diagnostic does not count toward your grade. Answer as best you can.'
    }
  };

  function t(obj, lang) {
    if (obj == null) { return ''; }
    if (typeof obj === 'string') { return obj; }
    return obj[lang] || obj.en || obj.th || '';
  }


  /* Bilingual fragment: both languages present, CSS shows the active one. */
  function bi(obj, tag) {
    tag = tag || 'span';
    var th = (obj && obj.th) ? obj.th : '';
    var en = (obj && obj.en) ? obj.en : '';
    if (!th && !en) { return ''; }
    if (!th) { return '<' + tag + '>' + en + '</' + tag + '>'; }
    if (!en) { return '<' + tag + '>' + th + '</' + tag + '>'; }
    return '<' + tag + ' data-lang-th>' + th + '</' + tag + '>' +
           '<' + tag + ' data-lang-en>' + en + '</' + tag + '>';
  }

  function save(key, value) {
    try { localStorage.setItem(STORE_PREFIX + key, JSON.stringify(value)); } catch (e) {}
  }
  function load(key) {
    try {
      var raw = localStorage.getItem(STORE_PREFIX + key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function shuffleNone(arr) { return arr; }

  function mount(id, data) {
    var host = document.querySelector('[data-quiz="' + id + '"]');
    if (!host) { return; }

    var type = data.type === 'post' ? 'post' : 'pre';
    var meta = UI[type];
    var total = data.questions.length;
    var letters = ['A', 'B', 'C', 'D', 'E', 'F'];

    host.classList.add('quiz', 'quiz--' + type);

    /* ------------------------------------------------------------- markup */
    var html = '';
    html += '<div class="quiz__head">';
    html += '  <div class="quiz__head-icon"><i class="' + meta.icon + '"></i></div>';
    html += '  <div>';
    html += '    <h3>' + bi(data.title) + '</h3>';
    html += '    <p>' + bi(data.intro || (type === 'pre' ? UI.preNote : { th: '', en: '' })) + '</p>';
    html += '  </div>';
    html += '  <span class="badge">' + bi(meta.badge) + ' &middot; ' + total +
            '<span data-lang-th> ข้อ</span><span data-lang-en> items</span></span>';
    html += '</div>';

    html += '<form class="quiz__body" novalidate>';
    data.questions.forEach(function (item, qi) {
      html += '<div class="q" data-q="' + qi + '">';
      html += '  <div class="q__text"><span class="q__num">' + (qi + 1) + '</span>' +
              '<span>' + bi(item.q) + '</span></div>';
      html += '  <div class="q__opts">';
      shuffleNone(item.options).forEach(function (opt, oi) {
        html += '<label class="q__opt" data-opt="' + oi + '">' +
                '<input type="radio" name="' + id + '-q' + qi + '" value="' + oi + '">' +
                '<span><b>' + letters[oi] + '.</b> ' + bi(opt) + '</span></label>';
      });
      html += '  </div>';
      if (item.explain) {
        html += '  <div class="q__explain"><b>' + bi(UI.correctWord) + ' ' +
                letters[item.answer] + '.</b> ' + bi(item.explain) + '</div>';
      }
      html += '</div>';
    });
    html += '</form>';

    html += '<div class="quiz__foot">';
    html += '  <button type="button" class="btn btn--primary" data-action="submit">' +
            '<i class="fa-solid fa-circle-check"></i>' + bi(UI.submit) + '</button>';
    html += '  <button type="button" class="btn btn--ghost btn--sm" data-action="retry" hidden>' +
            '<i class="fa-solid fa-rotate-right"></i>' + bi(UI.retry) + '</button>';
    html += '  <div class="quiz__result">';
    html += '    <div class="quiz__score"><span data-role="score">0</span>/' + total +
            ' <small data-role="pct">0%</small></div>';
    html += '    <div class="quiz__bar"><i data-role="bar"></i></div>';
    html += '    <div class="quiz__msg" data-role="msg"></div>';
    html += '  </div>';
    html += '  <div class="quiz__msg" data-role="hint"></div>';
    html += '</div>';

    host.innerHTML = html;

    /* ------------------------------------------------------------ wiring */
    var form = host.querySelector('form');
    var btnSubmit = host.querySelector('[data-action="submit"]');
    var btnRetry = host.querySelector('[data-action="retry"]');
    var hint = host.querySelector('[data-role="hint"]');

    form.addEventListener('change', function (e) {
      if (host.classList.contains('is-done')) { return; }
      var input = e.target;
      if (input.type !== 'radio') { return; }
      var box = input.closest('.q__opts');
      box.querySelectorAll('.q__opt').forEach(function (l) { l.classList.remove('is-picked'); });
      input.closest('.q__opt').classList.add('is-picked');
      hint.textContent = '';
    });

    function lang() {
      return (global.AMR && global.AMR.getLang) ? global.AMR.getLang() :
        (document.documentElement.getAttribute('data-lang') || 'th');
    }

    function grade() {
      var answers = [];
      var missing = 0;
      data.questions.forEach(function (item, qi) {
        var picked = form.querySelector('input[name="' + id + '-q' + qi + '"]:checked');
        answers.push(picked ? parseInt(picked.value, 10) : -1);
        if (!picked) { missing++; }
      });
      if (missing > 0) {
        hint.textContent = t(UI.unanswered, lang()).replace('{n}', missing);
        var firstMissing = answers.indexOf(-1);
        var el = host.querySelector('.q[data-q="' + firstMissing + '"]');
        if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
        return;
      }

      var score = 0;
      data.questions.forEach(function (item, qi) {
        var qEl = host.querySelector('.q[data-q="' + qi + '"]');
        var correct = item.answer;
        var picked = answers[qi];
        if (picked === correct) { score++; }
        qEl.querySelectorAll('.q__opt').forEach(function (label) {
          var oi = parseInt(label.getAttribute('data-opt'), 10);
          label.classList.remove('is-picked');
          label.querySelector('input').disabled = true;
          if (oi === correct) { label.classList.add('is-correct'); }
          else if (oi === picked) { label.classList.add('is-wrong'); }
        });
      });

      host.classList.add('is-done');
      btnSubmit.hidden = true;
      btnRetry.hidden = false;
      hint.textContent = '';

      var ratio = score / total;
      host.querySelector('[data-role="score"]').textContent = score;
      host.querySelector('[data-role="pct"]').textContent = Math.round(ratio * 100) + '%';
      host.querySelector('[data-role="bar"]').style.width = (ratio * 100) + '%';

      var band = UI.bands.find(function (b) { return ratio >= b.min; }) || UI.bands[UI.bands.length - 1];
      var msgEl = host.querySelector('[data-role="msg"]');
      msgEl.innerHTML = bi({ th: band.th, en: band.en });

      // Persist and, for a post-test, report the gain over the pre-test.
      var key = (data.chapter || id) + '-' + type;
      save(key, { score: score, total: total, at: Date.now() });
      if (type === 'post' && data.chapter) {
        var pre = load(data.chapter + '-pre');
        if (pre && pre.total === total) {
          var gain = score - pre.score;
          var sign = gain > 0 ? '+' : '';
          msgEl.innerHTML += '<br><span data-lang-th>พัฒนาการจากก่อนเรียน: <b>' + sign + gain +
            '</b> ข้อ (ก่อนเรียน ' + pre.score + '/' + pre.total + ')</span>' +
            '<span data-lang-en>Improvement over the pre-test: <b>' + sign + gain +
            '</b> items (pre-test ' + pre.score + '/' + pre.total + ')</span>';
        }
      }
      host.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function reset() {
      host.classList.remove('is-done');
      btnSubmit.hidden = false;
      btnRetry.hidden = true;
      hint.textContent = '';
      host.querySelectorAll('.q__opt').forEach(function (label) {
        label.classList.remove('is-picked', 'is-correct', 'is-wrong');
        var input = label.querySelector('input');
        input.disabled = false;
        input.checked = false;
      });
      host.querySelector('[data-role="bar"]').style.width = '0%';
      host.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    btnSubmit.addEventListener('click', grade);
    btnRetry.addEventListener('click', reset);

    // Show the previous attempt, if any, next to the button.
    var prev = load((data.chapter || id) + '-' + type);
    if (prev) {
      var when = new Date(prev.at);
      var stamp = when.toLocaleDateString();
      hint.innerHTML = '<span data-lang-th>ผลครั้งล่าสุด: <b>' + prev.score + '/' + prev.total +
        '</b> (' + stamp + ')</span><span data-lang-en>Last attempt: <b>' + prev.score + '/' +
        prev.total + '</b> (' + stamp + ')</span>';
    }
  }

  global.AMRQuiz = { mount: mount };
})(window);
