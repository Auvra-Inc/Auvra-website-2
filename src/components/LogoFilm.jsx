// Animated brand scene: soft dunes at dusk drifting behind the Auvra mark, which gathers, spins and settles on a loop.
// The dunes are drawn by src/scripts/logo-film.js (WebGL); the mark animates in CSS (see "Logo film" in global.css). Decorative: the whole scene is one labelled image.
import { MARK, WORD } from '../data/logoPaths.js';

// Short lines about culture that fade in and out, one at a time, in the lower part of the scene.
const QUOTES = [
  ['When an elder dies, a library burns to the ground.', 'Amadou Hampâté Bâ · Mali'],
  ['It is not wrong to go back for what you have forgotten.', 'Akan proverb (Sankofa) · Ghana'],
  ['A river that forgets its source will dry up.', 'Yoruba proverb · Nigeria'],
  ['A person is a person through other people.', 'Zulu proverb · South Africa'],
  ['One who abandons their culture is a slave.', 'Swahili proverb · East Africa'],
  ['A people without the knowledge of their past history, origin and culture is like a tree without roots.', 'Marcus Garvey · Jamaica'],
  ['A nation’s culture resides in the hearts and in the soul of its people.', 'Mahatma Gandhi · India'],
  ['When you drink the water, remember the spring.', 'Chinese proverb · China'],
  ['Study the old to understand the new.', 'Japanese proverb · Japan'],
  ['A country without a language is a country without a soul.', 'Irish proverb · Ireland'],
  ['We walk backwards into the future, our eyes fixed on the past.', 'Māori proverb · Aotearoa New Zealand'],
  ['In language there is life.', 'Hawaiian proverb · Hawaiʻi'],
  ['Until the lion learns to write, every story will glorify the hunter.', 'African proverb'],
  ['What we keep today, tomorrow remembers.', 'Auvra'],
];

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
      <div className="logo-film__quotes" aria-hidden="true" style={{ '--n': QUOTES.length }}>
        {QUOTES.map(([q, by], i) => (
          <figure key={by} className="logo-film__quote" style={{ '--i': i }}>
            <blockquote>“{q}”</blockquote>
            <figcaption>{by}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
