import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Previous/next buttons for a horizontal snap row rendered in Astro markup (id = target). Buttons disable at the ends.
export default function Carousel({ label, target }) {
  const track = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const update = () => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };
  useEffect(() => { track.current = document.getElementById(target); update(); const el = track.current; el.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update); }; }, []);
  const go = (dir) => {
    const el = track.current;
    const card = el.querySelector(':scope > *');
    const step = card ? card.getBoundingClientRect().width + 14 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  return (
      <div className="carousel__btns">
        <button type="button" className="carousel__btn" onClick={() => go(-1)} disabled={atStart} aria-label={`Previous ${label}`}><ArrowLeft size={22} aria-hidden="true" /></button>
        <button type="button" className="carousel__btn" onClick={() => go(1)} disabled={atEnd} aria-label={`Next ${label}`}><ArrowRight size={22} aria-hidden="true" /></button>
      </div>
  );
}
