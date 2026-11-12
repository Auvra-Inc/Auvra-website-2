import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { STORE, NAV, EXPLORE_HREF } from '../data/site.js';
import SmartLink from './SmartLink.jsx';
import { AppleGlyph, PlayGlyph, Chevron } from './Glyphs.jsx';

// Floating pill navigation (as on the current goauvra.com) holding the PRD menu groups.
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const { pathname, hash } = useLocation();

  const close = (returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  };

  useEffect(() => { setOpen(false); }, [pathname, hash]);

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
  const groupActive = (g) => g.links.some((l) => isActive(l.href));

  return (
    <header className="nav" ref={navRef} data-open={open ? '' : undefined}>
      <div className="nav__pill">
        <Link to="/" className="nav__logo" aria-label="Auvra home">
          <img src="/brand/auvra-logo-carbon.svg" alt="Auvra" width="112" height="32" />
        </Link>
        <div className="nav__actions">
          <Link to={EXPLORE_HREF} className="btn btn--dark nav__cta">Explore Auvra</Link>
          <SmartLink className="nav__btn nav__store" href={STORE.appStore} aria-label="Download on the App Store"><AppleGlyph /></SmartLink>
          <SmartLink className="nav__btn nav__store" href={STORE.googlePlay} aria-label="Get it on Google Play"><PlayGlyph /></SmartLink>
          <button ref={toggleRef} className="nav__btn nav__menu" type="button" aria-expanded={open} aria-controls="nav-panel" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            <span className="burger" aria-hidden="true"><i></i><i></i></span>
          </button>
        </div>
      </div>

      <div className="nav__panel" id="nav-panel" hidden={!open} ref={panelRef}>
        <nav aria-label="Main">
          <ul className="nav__list">
            {NAV.map((g) => {
              const isOpen = expanded === g.title;
              const id = `nav-${g.title.toLowerCase().replace(/\W+/g, '-')}`;
              return (
                <li key={g.title}>
                  <button type="button" className={`nav__expand${groupActive(g) ? ' is-active' : ''}`} aria-expanded={isOpen} aria-controls={id} onClick={() => setExpanded(isOpen ? null : g.title)}>
                    {g.title}<Chevron />
                  </button>
                  <ul className="nav__sub" id={id} hidden={!isOpen}>
                    {g.links.map((l) => (
                      <li key={l.href}><Link to={l.href} aria-current={isActive(l.href) ? 'page' : undefined} onClick={() => close()}>{l.label}</Link></li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
          <Link to={EXPLORE_HREF} className="btn btn--dark nav__panel-cta" onClick={() => close()}>Explore Auvra</Link>
        </nav>
        <Link className="nav__inst" to="/institutional-access" onClick={() => close()}>
          <img src="/images/photos/museum-480.webp" alt="" width="480" height="360" loading="lazy" />
          <span className="nav__inst-text"><b>Apply for Institutional Access</b><small>For Institutions &amp; Government Bodies</small></span>
          <span className="nav__inst-arrow" aria-hidden="true"><Chevron dir="right" /></span>
        </Link>
      </div>
    </header>
  );
}
