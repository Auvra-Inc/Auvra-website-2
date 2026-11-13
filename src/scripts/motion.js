// Site-wide motion: Lenis smooth scrolling, GSAP scroll-triggered reveals, and pausing loops off-screen.
// Everything is skipped when the visitor prefers reduced motion; content is always visible without JS.
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal, .slide-in');

if (reduce) {
  reveals.forEach((el) => el.classList.add('is-in'));
} else {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  window.__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  // In-page anchor links scroll smoothly through Lenis.
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || !url.hash || url.hash === "#get-app") return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -100 }); history.pushState(null, '', url.hash); }
  });
  reveals.forEach((el) => ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => el.classList.add('is-in') }));
  // Cinematic pieces on the homepage: staggered hero lines and parallax photos.
  gsap.from('.hero-word', { yPercent: 40, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 });
  document.querySelectorAll('[data-parallax]').forEach((el) => {
    gsap.to(el, { yPercent: Number(el.dataset.parallax) || -10, ease: 'none', scrollTrigger: { trigger: el.parentElement, scrub: true } });
  });
}

if ('IntersectionObserver' in window) {
  const po = new IntersectionObserver((entries) => entries.forEach((en) => en.target.classList.toggle('is-paused', !en.isIntersecting)));
  document.querySelectorAll('[data-pause-offscreen]').forEach((el) => po.observe(el));
}
