// Animated brand scene: soft dunes at dusk drifting behind the Auvra mark, which gathers, spins and settles on a loop.
// The dunes are drawn by src/scripts/logo-film.js (WebGL); the mark animates in CSS (see "Logo film" in global.css). Decorative: the whole scene is one labelled image.
import { MARK, WORD } from '../data/logoPaths.js';

export default function LogoFilm({ className = '' }) {
  const half = 100;
  return (
    <div className={`logo-film ${className}`} role="img" aria-label="The Auvra logo over softly moving dunes at dusk, with the words: The Permanent Home for Human Culture" data-pause-offscreen>
      <canvas className="logo-film__canvas" data-film aria-hidden="true" />
      <div className="logo-film__row" aria-hidden="true">
        <svg className="logo-film__word" viewBox={WORD.box}><path d={WORD.d} fill="currentColor" /></svg>
        <svg className="logo-film__mark" viewBox={`${MARK.cx - half} ${MARK.cy - half} ${half * 2} ${half * 2}`}>
          <g className="logo-film__spin" style={{ transformOrigin: `${MARK.cx}px ${MARK.cy}px` }}>
            {MARK.pieces.map((p, i) => (
              <path key={i} d={p.d} fill="currentColor" className="logo-film__piece"
                style={{ '--px': Math.cos((p.a * Math.PI) / 180).toFixed(3), '--py': Math.sin((p.a * Math.PI) / 180).toFixed(3), '--i': i }} />
            ))}
          </g>
        </svg>
        <p className="logo-film__tag">The Permanent Home<br />for Human Culture</p>
      </div>
    </div>
  );
}
