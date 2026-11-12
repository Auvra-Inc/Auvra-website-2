import { STORE } from '../data/site.js';
import SmartLink from './SmartLink.jsx';
import { AppleGlyph, PlayGlyph } from './Glyphs.jsx';

export default function StoreButtons({ variant = 'dark' }) {
  return (
    <div className={`stores stores--${variant}`}>
      <SmartLink className="store" href={STORE.appStore} aria-label="Download Auvra on the App Store">
        <AppleGlyph size={24} />
        <span><small>{STORE.live ? 'Download on the' : 'Coming soon on the'}</small><b>App Store</b></span>
      </SmartLink>
      <SmartLink className="store" href={STORE.googlePlay} aria-label="Get Auvra on Google Play">
        <PlayGlyph size={22} color />
        <span><small>{STORE.live ? 'Get it on' : 'Coming soon on'}</small><b>Google Play</b></span>
      </SmartLink>
    </div>
  );
}
