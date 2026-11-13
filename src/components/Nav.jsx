import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { STORE, NAV, EXPLORE_HREF } from '../data/site.js';
import { AppleGlyph, PlayGlyph } from './Glyphs.jsx';

// Floating pill navigation (as on the current goauvra.com) holding the PRD menu groups.
export default function Nav({ pathname = '/' }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Like the previous goauvra.com: the pill stays fixed and turns frosted once you scroll.
  useEffect(() => {
    // Hides while scrolling down so it never covers the content; any scroll up brings it back.
    let ticking = false;
    let lastY = window.scrollY;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 50);
        if (Math.abs(y - lastY) > 6) { setHidden(y > lastY && y > 80); lastY = y; }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = (returnFocus = false) => { setOpen(false); if (returnFocus) toggleRef.current?.focus(); };

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector('a, button')?.focus();
    const onKey = (e) => { if (e.key === 'Escape') close(true); };
    const onDown = (e) => { if (navRef.current && !navRef.current.contains(e.target)) close(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown); };
  }, [open]);

  const isActive = (href) => href !== '/' && !href.includes('#') && pathname.startsWith(href);
  const ext = STORE.live ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <header className="nav" ref={navRef} data-open={open ? '' : undefined} data-scrolled={scrolled || open ? '' : undefined} data-hidden={hidden && !open ? '' : undefined}>
      <div className="nav__pill">
        <a href="/" className="nav__logo" aria-label="Auvra home">
          <img src="/brand/auvra-horizontal-carbon.svg" alt="Auvra" width="120" height="30" />
        </a>
        <div className="nav__actions">
          <a href={EXPLORE_HREF} className="btn btn--dark nav__cta">Explore Auvra</a>
          <button ref={toggleRef} className="nav__btn nav__menu" type="button" aria-expanded={open} aria-controls="nav-panel" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__panel" id="nav-panel" ref={panelRef}
            initial={reduce ? false : { opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <nav aria-label="Main">
              <ul className="nav__list">
                {NAV.map((g) => {
                  const isOpen = expanded === g.title;
                  const id = `nav-${g.title.toLowerCase().replace(/\W+/g, '-')}`;
                  const active = g.links.some((l) => isActive(l.href));
                  return (
                    <li key={g.title}>
                      <button type="button" className={`nav__expand${active ? ' is-active' : ''}`} aria-expanded={isOpen} aria-controls={id} onClick={() => setExpanded(isOpen ? null : g.title)}>
                        {g.title}
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ display: 'grid' }}><ChevronDown size={20} aria-hidden="true" /></motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul className="nav__sub" id={id} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} style={{ overflow: 'hidden' }}>
                            {g.links.map((l) => (
                              <li key={l.href}><a href={l.href} aria-current={isActive(l.href) ? 'page' : undefined} onClick={() => close()}>{l.label}</a></li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
              <div className="nav__panel-row">
                <a href={EXPLORE_HREF} className="btn btn--dark nav__panel-cta" onClick={() => close()}>Explore Auvra</a>
                <a className="nav__btn" href={STORE.appStore} {...ext} aria-label="Download on the App Store"><AppleGlyph /></a>
                <a className="nav__btn" href={STORE.googlePlay} {...ext} aria-label="Get it on Google Play"><PlayGlyph /></a>
              </div>
            </nav>
            <a className="nav__inst" href="/institutional-access" onClick={() => close()}>
              <img src="/images/photos/museum-480.webp" alt="" width="480" height="360" loading="lazy" />
              <span className="nav__inst-text"><b>Apply for Institutional Access</b><small>For Institutions &amp; Government Bodies</small></span>
              <span className="nav__inst-arrow" aria-hidden="true"><ChevronRight size={20} /></span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
