import { useState, useId } from 'react';

// Accordion. The first item starts open; several can be open at once.
export default function Faq({ items, headingLevel = 3, firstOpen = true }) {
  const [open, setOpen] = useState(() => new Set(firstOpen ? [0] : []));
  const base = useId();
  const H = `h${headingLevel}`;
  const toggle = (i) => setOpen((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });
  return (
    <div className="faq">
      {items.map((f, i) => {
        const isOpen = open.has(i);
        return (
          <div className="faq__item" key={f.q}>
            <H className="faq__h">
              <button type="button" className="faq__q" aria-expanded={isOpen} aria-controls={`${base}-a${i}`} id={`${base}-q${i}`} onClick={() => toggle(i)}>
                {f.q}<span className="faq__icon" aria-hidden="true"></span>
              </button>
            </H>
            <div className="faq__a" id={`${base}-a${i}`} role="region" aria-labelledby={`${base}-q${i}`} data-open={isOpen}>
              <div><p>{f.a}</p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
