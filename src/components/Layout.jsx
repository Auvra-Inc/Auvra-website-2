import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import IconSprite from './IconSprite.jsx';
import { metaFor } from '../routes.jsx';

function useSiteEffects() {
  const { pathname, hash } = useLocation();

  // Title and description on client-side navigation (prerendered HTML already has them).
  useEffect(() => {
    const m = metaFor(pathname);
    document.title = m.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
  }, [pathname]);

  // Scroll to top, or to the #anchor, after navigation.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  // Scroll reveals, and pausing looping animations while off-screen.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal:not(.is-in), .slide-in:not(.is-in)');
    let io, po;
    if (reduce || !('IntersectionObserver' in window)) els.forEach((el) => el.classList.add('is-in'));
    else {
      io = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      els.forEach((el) => io.observe(el));
    }
    if ('IntersectionObserver' in window) {
      po = new IntersectionObserver((entries) => entries.forEach((en) => en.target.classList.toggle('is-paused', !en.isIntersecting)));
      document.querySelectorAll('[data-pause-offscreen]').forEach((el) => po.observe(el));
    }
    return () => { io?.disconnect(); po?.disconnect(); };
  }, [pathname]);
}

export default function Layout() {
  useSiteEffects();
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <IconSprite />
      <Nav />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  );
}
