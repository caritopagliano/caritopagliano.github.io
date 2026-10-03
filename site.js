(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Case study pages always open at the top (unless the link points to a section)
  if (document.body.dataset.page === 'case' && !location.hash) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }

  // Header border once the page scrolls
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
    if (toTop) toTop.classList.toggle('is-visible', window.scrollY > 600);
  }

  // Back to top button
  var toTop = document.createElement('button');
  toTop.type = 'button';
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.title = 'Back to top';
  toTop.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    var target = document.querySelector('.brand');
    if (target) target.focus({ preventScroll: true });
  });
  document.body.appendChild(toTop);

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Fade-in on scroll. Only elements below the fold at load are hidden, so nothing is missing from the first view.
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove('is-pending'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add('is-pending'); io.observe(el); }
    });
  }

  // Brief teal highlight on whatever just changed
  window.flash = function (el) {
    if (!el) return;
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
    el.addEventListener('animationend', function done() { el.classList.remove('flash'); el.removeEventListener('animationend', done); });
  };

  // Copy helper, shared by the contact section and the demos
  window.copyText = function (text, btn, okLabel) {
    var copiedText = okLabel || 'Copied ✓';
    var label = btn.dataset.label || btn.textContent;
    btn.dataset.label = label;
    function done(msg) {
      btn.textContent = msg;
      clearTimeout(btn._t);
      btn._t = setTimeout(function () { btn.textContent = label; }, 2000);
    }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) {}
      ta.remove();
      done(ok ? copiedText : 'Select and press Ctrl+C');
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(copiedText); }, fallback);
    } else {
      fallback();
    }
  };

  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () { window.copyText(b.dataset.copy, b); });
  });

  // Tables: show a soft fade on the right edge while there is more to scroll
  function updateFade(wrap) {
    var shell = wrap.parentElement;
    if (!shell || !shell.classList.contains('table-shell')) return;
    var more = wrap.scrollWidth - wrap.clientWidth - wrap.scrollLeft > 4;
    shell.classList.toggle('has-more', more);
  }
  document.querySelectorAll('.table-shell > .table-wrap').forEach(function (wrap) {
    updateFade(wrap);
    wrap.addEventListener('scroll', function () { updateFade(wrap); }, { passive: true });
    if ('MutationObserver' in window) new MutationObserver(function () { updateFade(wrap); }).observe(wrap, { childList: true, subtree: true });
    window.addEventListener('resize', function () { updateFade(wrap); });
  });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
