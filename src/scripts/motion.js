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


// The About page logo film loads its renderer only when the scene exists.
const film = document.querySelector('canvas[data-film]');
if (film) import('./logo-film.js').then((m) => m.default(film, reduce));

// Sharp images everywhere: an image cropped to fill its box (object-fit: cover) shows only part of the file,
// so it needs a wider file than its box. Tell the browser the real width needed and it picks the right size.
const fitSizes = () => {
  document.querySelectorAll('img[srcset]').forEach((img) => {
    // Leave moving galleries alone: swapping their files mid-animation makes them stutter.
    if (img.closest('.wall, .hero-slides, .aud-marquee, .moods, .partners, .carousel, .logo-film')) return;
    const w = img.offsetWidth, h = img.offsetHeight;
    if (!w || !h || !img.naturalWidth) return;
    const ratio = img.naturalWidth / img.naturalHeight;
    const cover = getComputedStyle(img).objectFit === 'cover';
    const need = Math.ceil(cover ? Math.max(w, h * ratio) : w);
    const cur = parseInt(img.dataset.fitw || '0', 10);
    if (need > cur) { img.dataset.fitw = need; img.sizes = need + 'px'; }
  });
};
document.querySelectorAll('img[srcset]').forEach((img) => { if (!img.complete) img.addEventListener('load', fitSizes, { once: true }); });
window.addEventListener('load', fitSizes);
let fitT; window.addEventListener('resize', () => { clearTimeout(fitT); fitT = setTimeout(fitSizes, 200); });
fitSizes();

// Mission film: step through the scenes while the section is on screen.
const mission = document.querySelector('[data-mission]');
if (mission && !reduce) {
  const bgs = mission.querySelectorAll('.mission__bg');
  const slides = mission.querySelectorAll('.mission__slide');
  const STEP = 4500; let i = 0, timer = 0, visible = false;
  const show = (n) => {
    bgs[i].classList.remove('is-on'); slides[i].classList.remove('is-on'); slides[i].setAttribute('aria-hidden', 'true');
    i = n % slides.length;
    bgs[i].classList.add('is-on'); slides[i].classList.add('is-on'); slides[i].removeAttribute('aria-hidden');
    mission.classList.remove('is-playing'); void mission.offsetWidth; mission.classList.add('is-playing');
    // warm the next pair so it is ready when its turn comes
    const nx = (i + 1) % slides.length; [bgs[nx], slides[nx].querySelector('img')].forEach((im) => { if (im.loading === 'lazy') im.loading = 'eager'; });
  };
  const tick = () => { if (visible && !document.hidden) show(i + 1); timer = setTimeout(tick, STEP); };
  mission.style.setProperty('--mission-step', STEP + 'ms');
  new IntersectionObserver((es) => {
    visible = es[0].isIntersecting;
    if (visible && !timer) { show(0); [bgs[0], slides[0].querySelector('img')].forEach((im) => { im.loading = 'eager'; }); timer = setTimeout(tick, STEP); }
  }, { threshold: 0.25 }).observe(mission);
}
