document.addEventListener('DOMContentLoaded', function () {
  /* ───── THREE-STATE THEME SWITCHER (system / light / dark) ─────
     Order of states when clicking: system → light → dark → system → ...
     The inline script in <head> applies the theme BEFORE paint.
     We only manage state here + react to system changes while in "system". */
  var root = document.documentElement;
  var toggle = document.getElementById('themeToggle');
  var ORDER = ['system', 'light', 'dark'];

  function applyTheme(mode) {
    if (mode === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', mode);
    }
  }

  // Listen to OS theme changes — only react if user is on "system"
  var mql = window.matchMedia('(prefers-color-scheme: dark)');
  if (mql.addEventListener) {
    mql.addEventListener('change', function () {
      // no action needed: CSS @media handles it when [data-theme] is absent
    });
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = localStorage.getItem('theme') || 'system';
      var idx = ORDER.indexOf(current);
      var next = ORDER[(idx + 1) % ORDER.length];
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }

  /* ───── MOBILE MENU ───── */
  var menuBtn = document.getElementById('menuBtn');
  var closeMenu = document.getElementById('closeMenu');
  var mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu && closeMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.add('open');
    });
    closeMenu.addEventListener('click', function () {
      mobileMenu.classList.remove('open');
    });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ───── FOOTER YEAR ───── */
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
