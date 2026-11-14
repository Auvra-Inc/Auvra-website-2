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
