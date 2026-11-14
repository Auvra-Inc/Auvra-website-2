// Animated brand scene: soft dunes at dusk drifting behind the Auvra mark, which gathers, spins and settles on a loop.
// Pure CSS motion on GPU layers (see "Logo film" in global.css). Decorative: the whole scene is one labelled image.
import { MARK, WORD } from '../data/logoPaths.js';

const WAVE = 'M0 150 C180 150 320 0 500 0 S820 150 1000 150 S1320 0 1500 0 S1820 150 2000 150 V900 H0Z';
// top = where the crest sits, speed = seconds per loop (negative runs the other way), bob = seconds per rise and fall
const WAVES = [
  { c: '#FBDCC8', top: 20, speed: 13, bob: 5, amp: 5, blur: 9, s: -4 },
  { c: '#F4917A', top: 28, speed: -10, bob: 6, amp: 6, blur: 8, s: -9 },
  { c: '#5E3F8E', top: 36, speed: 8.5, bob: 4.5, amp: 6, blur: 7, s: -2 },
  { c: '#1F1814', top: 44, speed: -7.5, bob: 5.5, amp: 7, blur: 6, s: -6 },
  { c: '#D9A7C7', top: 90, speed: 11, bob: 6.5, amp: 9, blur: 12, s: -11 },
];

export default function LogoFilm({ className = '' }) {
  const half = 100;
  return (
    <div className={`logo-film ${className}`} role="img" aria-label="The Auvra logo over softly moving dunes at dusk, with the words: The Permanent Home for Human Culture" data-pause-offscreen>
      <div className="logo-film__sun" />
      {WAVES.map((w, i) => (
        <div key={i} className="logo-film__bob" style={{ top: w.top + '%', '--bob': w.bob + 's', '--amp': w.amp + '%', '--s': w.s + 's' }}>
          <svg className="logo-film__wave" viewBox="0 0 2000 900" preserveAspectRatio="none" aria-hidden="true"
            style={{ '--speed': Math.abs(w.speed) + 's', '--dir': w.speed < 0 ? 'reverse' : 'normal', '--blur': w.blur, '--s': w.s + 's' }}>
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
