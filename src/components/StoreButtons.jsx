import { STORE } from '../data/site.js';
import { AppleGlyph, PlayGlyph } from './Glyphs.jsx';

export default function StoreButtons({ variant = 'dark' }) {
  const ext = STORE.live ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <div className={`stores stores--${variant}`}>
      <a className="store" href={STORE.appStore} {...ext} aria-label="Download Auvra on the App Store">
        <AppleGlyph size={24} />
        <span><small>Download on the</small><b>App Store</b></span>
      </a>
      <a className="store" href={STORE.googlePlay} {...ext} aria-label="Get Auvra on Google Play">
        <PlayGlyph size={22} color />
        <span><small>Get it on</small><b>Google Play</b></span>
      </a>
    </div>
  );
}
