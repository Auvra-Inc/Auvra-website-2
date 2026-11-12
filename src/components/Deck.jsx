import { useEffect, useRef, useState } from 'react';

// "Touch to change photo" stack. Click, tap, Enter or Space sends the front card to the back.
export default function Deck({ photos }) {
  const [order, setOrder] = useState(() => photos.map((_, i) => i));
  const [leaving, setLeaving] = useState(null);
  const busy = useRef(false);
  const timers = useRef([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const next = () => {
    if (busy.current) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const rotate = () => setOrder((o) => [...o.slice(1), o[0]]);
    if (reduce) return rotate();
    busy.current = true;
    setLeaving(order[0]);
    timers.current.push(setTimeout(rotate, 180));
    timers.current.push(setTimeout(() => { setLeaving(null); busy.current = false; }, 450));
  };

  const front = photos[order[0]];
  return (
    <>
      <button className="deck" type="button" onClick={next} aria-label={`Show next photo, ${order[0] + 1} of ${photos.length}`} aria-describedby="deck-caption">
        {photos.map((ph, i) => {
          const pos = Math.min(order.indexOf(i), 3);
          return (
            <figure key={ph.src} className={`deck__card${leaving === i ? ' is-leaving' : ''}`} data-pos={pos} style={{ '--pos': pos }}>
              <img src={ph.src} srcSet={`${ph.thumb} 480w, ${ph.src} 960w`} sizes="(max-width: 760px) 80vw, 420px" alt={ph.alt} width="960" height="1280" loading="lazy" />
            </figure>
          );
        })}
      </button>
      <p className="deck__caption" id="deck-caption" aria-live="polite">
        <b>{front.caption}</b> · {front.place} · <span>{front.credit}</span>
      </p>
    </>
  );
}
