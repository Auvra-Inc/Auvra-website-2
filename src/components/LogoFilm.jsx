// Animated brand scene: soft dunes at dusk drifting behind the Auvra mark, which gathers, spins and settles on a loop.
// Pure CSS motion on GPU layers (see "Logo film" in global.css). Decorative: the whole scene is one labelled image.
import { MARK, WORD } from '../data/logoPaths.js';

const WAVE = 'M0 60 C180 60 320 0 500 0 S820 60 1000 60 S1320 0 1500 0 S1820 60 2000 60 V700 H0Z';
// top = where the crest sits, speed = seconds per loop (negative runs the other way), bob = seconds per rise and fall
const WAVES = [
  { c: '#F9D8C2', top: 26, speed: 34, bob: 9, amp: 5, blur: 16, s: -4 },
  { c: '#F2957A', top: 33, speed: -27, bob: 11, amp: 6, blur: 14, s: -9 },
  { c: '#5B3F86', top: 40, speed: 22, bob: 8, amp: 7, blur: 12, s: -2 },
  { c: '#221A14', top: 46, speed: -18, bob: 10, amp: 8, blur: 10, s: -6 },
  { c: '#D9A7C7', top: 92, speed: 25, bob: 12, amp: 14, blur: 22, s: -11 },
];

export default function LogoFilm({ className = '' }) {
  const half = 100;
  return (
    <div className={`logo-film ${className}`} role="img" aria-label="The Auvra logo over softly moving dunes at dusk, with the words: The Permanent Home for Human Culture" data-pause-offscreen>
      <div className="logo-film__sun" />
      {WAVES.map((w, i) => (
        <div key={i} className="logo-film__bob" style={{ top: w.top + '%', '--bob': w.bob + 's', '--amp': w.amp + '%', '--s': w.s + 's' }}>
          <svg className="logo-film__wave" viewBox="0 0 2000 700" preserveAspectRatio="none" aria-hidden="true"
            style={{ '--speed': Math.abs(w.speed) + 's', '--dir': w.speed < 0 ? 'reverse' : 'normal', '--blur': w.blur + 'px', '--s': w.s + 's' }}>
            <path d={WAVE} fill={w.c} />
          </svg>
        </div>
      ))}
      <div className="logo-film__grain" />
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
