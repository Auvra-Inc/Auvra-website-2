// Site-wide motion, kept tiny so it never delays the page: smooth in-page scrolling, the hero
// headline entrance (CSS), and pausing looping animations while they are off-screen.
// Reveal-on-scroll is handled by the inline script in Base.astro.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('a[href*="#"]');
  if (!a) return;
  const url = new URL(a.href, location.href);
  if (url.pathname !== location.pathname || !url.hash || url.hash === '#get-app') return;
  const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
  if (!target) return;
  e.preventDefault();
  const y = target.getBoundingClientRect().top + window.scrollY - 100;
  window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  history.pushState(null, '', url.hash);
});

if ('IntersectionObserver' in window) {
  const po = new IntersectionObserver((entries) => entries.forEach((en) => en.target.classList.toggle('is-paused', !en.isIntersecting)), { rootMargin: '10% 0px' });
  // Looping motion only runs while it is on screen, so it never competes with scrolling elsewhere on the page.
  document.querySelectorAll('[data-pause-offscreen], .hero-slides, .moods, .aud-marquee, .partners__track-wrap, .ceramics, .phone-frame, .artifact').forEach((el) => po.observe(el));
}

// Lazy images ease in once loaded. Images that already animate (marquees, slides, floating pieces) are left alone,
// and nothing can stay hidden: errors and a timeout both reveal the image.
if (!reduce) {
  document.querySelectorAll('main img[loading="lazy"]').forEach((img) => {
    if (img.complete || img.closest('.moods, .hero-slides, .ceramics, .wall, .partners, .aud-marquee, .marquee, .phone-frame')) return;
    if (getComputedStyle(img).animationName !== 'none') return;
    img.classList.add('img-wait');
    let done = false;
    const show = () => {
      if (done) return; done = true;
      img.classList.remove('img-wait'); img.classList.add('img-in');
      img.addEventListener('animationend', () => img.classList.remove('img-in'), { once: true });
    };
    img.addEventListener('load', show, { once: true });
    img.addEventListener('error', show, { once: true });
    setTimeout(show, 4000);
  });
}

// The About page logo film loads its renderer only when the scene exists.
const film = document.querySelector('canvas[data-film]');
if (film) import('./logo-film.js').then((m) => m.default(film, reduce));
