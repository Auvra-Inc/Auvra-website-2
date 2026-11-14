import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Compass, Menu, X } from 'lucide-react';
import { NAV, EXPLORE_HREF } from '../data/site.js';

// Floating pill navigation (as on the current goauvra.com) holding the PRD menu groups.
export default function Nav({ pathname = '/' }) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef(null);
  const [expanded, setExpanded] = useState(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const openedByKey = useRef(false);
  const panelRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Like the previous goauvra.com: the pill stays fixed and turns frosted once you scroll.
  useEffect(() => {
    // Hides while scrolling down so it never covers the content; any scroll up brings it back.
    // The nav stays while you scroll; it slips away only after you have been scrolling down for a while
    // (2.5s, past the hero). Any scroll up, or returning near the top, brings it straight back.
    let ticking = false;
    let lastY = window.scrollY;
    let hideTimer = null;
    const clear = () => { clearTimeout(hideTimer); hideTimer = null; };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const d = y - lastY;
        lastY = y;
        setScrolled(y > 50);
        if (y < 400) { clear(); setHidden(false); }
        else if (d < -4) { clear(); setHidden(false); }
        else if (d > 0 && !hideTimer) {
          hideTimer = setTimeout(() => { hideTimer = null; if (window.scrollY >= 400) setHidden(true); }, 2500);
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); clear(); };
  }, []);

  // The panel stays mounted for a moment after closing so it can ease out instead of vanishing.
  const close = (returnFocus = false) => {
    setOpen((o) => {
      if (o) { setClosing(true); clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setClosing(false), 200); }
      return false;
    });
    if (returnFocus) toggleRef.current?.focus();
  };
  const toggle = () => { if (open) close(); else { clearTimeout(closeTimer.current); setClosing(false); setOpen(true); } };
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return;
    // Move focus into the menu only when it was opened from the keyboard (no focus ring after a tap).
    if (openedByKey.current) panelRef.current?.querySelector('a, button')?.focus();
    const onKey = (e) => { if (e.key === 'Escape') close(true); };
    const onDown = (e) => { if (navRef.current && !navRef.current.contains(e.target)) close(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', onDown); };
  }, [open]);

  const isActive = (href) => href !== '/' && !href.includes('#') && pathname.startsWith(href);

  return (
    <header className="nav" ref={navRef} data-open={open ? '' : undefined} data-scrolled={scrolled || open ? '' : undefined} data-hidden={hidden && !open ? '' : undefined}>
      <div className="nav__pill">
        <a href="/" className="nav__logo" aria-label="Auvra home">
          <img src="/brand/auvra-lockup-carbon.svg" alt="Auvra" width="98" height="22" />
        </a>
        <div className="nav__actions">
          <a href={EXPLORE_HREF} className="btn btn--dark nav__cta shimmer">Explore Auvra</a>
          <a href={EXPLORE_HREF} className="nav__btn nav__cta-icon" aria-label="Explore Auvra" title="Explore Auvra"><Compass size={20} aria-hidden="true" /></a>
          <button ref={toggleRef} className="nav__btn nav__menu" type="button" aria-expanded={open} aria-controls="nav-panel" aria-label={open ? 'Close menu' : 'Open menu'} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openedByKey.current = true; }} onPointerDown={() => { openedByKey.current = false; }} onClick={toggle}>
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {(open || closing) && (
          <div className={`nav__panel ${open ? 'nav__panel--in' : 'nav__panel--out'}`} id="nav-panel" ref={panelRef} aria-hidden={open ? undefined : 'true'}>
            <nav aria-label="Main">
              <ul className="nav__list">
                {NAV.map((g) => {
                  if (!g.links) {
                    return (
                      <li key={g.title}><a href={g.href} className={`nav__expand${isActive(g.href) ? ' is-active' : ''}`} aria-current={isActive(g.href) ? 'page' : undefined} onClick={() => close()}>{g.title}</a></li>
                    );
                  }
                  const isOpen = expanded === g.title;
                  const id = `nav-${g.title.toLowerCase().replace(/\W+/g, '-')}`;
                  const active = g.links.some((l) => isActive(l.href));
                  return (
                    <li key={g.title}>
                      <button type="button" className={`nav__expand${active ? ' is-active' : ''}`} aria-expanded={isOpen} aria-controls={id} onClick={() => setExpanded(isOpen ? null : g.title)}>
                        {g.title}
                        <span className="nav__chev" style={{ display: 'grid', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}><ChevronDown size={20} aria-hidden="true" /></span>
                      </button>
                      {/* Always mounted so the group can ease open and shut (height via grid rows); hidden from focus and AT while shut. */}
                      <div className="nav__subwrap" data-open={isOpen ? '' : undefined}>
                        <div className="nav__subclip">
                          <ul className="nav__sub" id={id}>
                            {g.links.map((l) => (
                              <li key={l.href}><a href={l.href} aria-current={isActive(l.href) ? 'page' : undefined} onClick={() => close()}><span className="nav__sub-label">{l.label}</span>{l.note && <small className="nav__sub-note">{l.note}</small>}</a></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <a className="nav__inst" href="/institutional-access" onClick={() => close()}>
              <img src="/images/photos/museum-480.webp" alt="" width="480" height="360" loading="lazy" />
              <span className="nav__inst-text"><b>Apply for Institutional Access</b><small>For Institutions &amp; Government Bodies</small></span>
              <span className="nav__inst-arrow" aria-hidden="true"><ChevronRight size={18} /></span>
            </a>
          </div>
        )}
    </header>
  );
}
