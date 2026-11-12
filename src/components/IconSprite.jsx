// Soft clay-style 3D icons drawn in SVG (stand-ins until the final rendered 3D set arrives).
// Rendered once in the layout; use <Icon3D name="mic" /> anywhere.
export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="g-blue" cx="32%" cy="26%" r="80%"><stop offset="0" stopColor="#8C78FF"/><stop offset=".45" stopColor="#4A29E0"/><stop offset="1" stopColor="#22088F"/></radialGradient>
        <radialGradient id="g-lemon" cx="32%" cy="26%" r="80%"><stop offset="0" stopColor="#FFF7B0"/><stop offset=".45" stopColor="#F6DF15"/><stop offset="1" stopColor="#C9A800"/></radialGradient>
        <radialGradient id="g-gold" cx="32%" cy="26%" r="80%"><stop offset="0" stopColor="#FFFBE0"/><stop offset=".5" stopColor="#FEEF9C"/><stop offset="1" stopColor="#E5C752"/></radialGradient>
        <radialGradient id="g-lime" cx="32%" cy="26%" r="80%"><stop offset="0" stopColor="#E9FBD2"/><stop offset=".45" stopColor="#BCE784"/><stop offset="1" stopColor="#7FB548"/></radialGradient>
        <radialGradient id="g-salmon" cx="32%" cy="26%" r="80%"><stop offset="0" stopColor="#FFD3C8"/><stop offset=".45" stopColor="#FF8F77"/><stop offset="1" stopColor="#D9573E"/></radialGradient>
        <radialGradient id="g-linen" cx="32%" cy="26%" r="80%"><stop offset="0" stopColor="#FFFFFF"/><stop offset=".5" stopColor="#F4F0E8"/><stop offset="1" stopColor="#CFC6B3"/></radialGradient>
        <radialGradient id="g-carbon" cx="32%" cy="26%" r="80%"><stop offset="0" stopColor="#5A5550"/><stop offset=".5" stopColor="#2C2926"/><stop offset="1" stopColor="#0E0D0C"/></radialGradient>
        <radialGradient id="g-shadow" cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#1C1A18" stopOpacity=".28"/><stop offset="1" stopColor="#1C1A18" stopOpacity="0"/></radialGradient>
        <linearGradient id="g-gloss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".75"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient>
    
        <symbol id="i-mic" viewBox="0 0 96 96">
          <ellipse cx="48" cy="86" rx="24" ry="5" fill="url(#g-shadow)"/>
          <path d="M26 44c0 13 10 22 22 22s22-9 22-22" fill="none" stroke="#1C1A18" strokeWidth="5" strokeLinecap="round"/>
          <rect x="44" y="64" width="8" height="14" rx="3" fill="url(#g-carbon)"/>
          <rect x="34" y="76" width="28" height="7" rx="3.5" fill="url(#g-carbon)"/>
          <rect x="33" y="10" width="30" height="48" rx="15" fill="url(#g-lemon)"/>
          <path d="M38 26h20M38 33h20M38 40h20" stroke="#1C1A18" strokeOpacity=".35" strokeWidth="2.5" strokeLinecap="round"/>
          <ellipse cx="42" cy="18" rx="5" ry="4" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-sparkle" viewBox="0 0 96 96">
          <ellipse cx="46" cy="86" rx="24" ry="5" fill="url(#g-shadow)"/>
          <path d="M44 10c3 20 8 25 28 30-20 5-25 10-28 30-3-20-8-25-28-30 20-5 25-10 28-30z" fill="url(#g-blue)"/>
          <path d="M74 56c1.5 8 3.5 10 11 12-7.5 2-9.5 4-11 12-1.5-8-3.5-10-11-12 7.5-2 9.5-4 11-12z" fill="url(#g-lemon)"/>
          <path d="M20 14c1 5 2.5 6.5 7 7.5-4.5 1-6 2.5-7 7.5-1-5-2.5-6.5-7-7.5 4.5-1 6-2.5 7-7.5z" fill="url(#g-salmon)"/>
          <ellipse cx="40" cy="30" rx="4" ry="6" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-gift" viewBox="0 0 96 96">
          <ellipse cx="48" cy="87" rx="30" ry="5" fill="url(#g-shadow)"/>
          <rect x="16" y="40" width="64" height="44" rx="9" fill="url(#g-salmon)"/>
          <rect x="11" y="30" width="74" height="16" rx="7" fill="url(#g-salmon)"/>
          <rect x="42" y="30" width="12" height="54" rx="3" fill="url(#g-lemon)"/>
          <path d="M48 30c-6-14-22-16-22-7 0 6 10 7 22 7zM48 30c6-14 22-16 22-7 0 6-10 7-22 7z" fill="url(#g-lemon)"/>
          <rect x="18" y="33" width="20" height="4" rx="2" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-vault" viewBox="0 0 96 96">
          <ellipse cx="48" cy="87" rx="30" ry="5" fill="url(#g-shadow)"/>
          <rect x="18" y="12" width="60" height="70" rx="10" fill="url(#g-linen)"/>
          <rect x="18" y="12" width="12" height="70" rx="6" fill="url(#g-blue)"/>
          <rect x="40" y="40" width="28" height="24" rx="6" fill="url(#g-blue)"/>
          <path d="M46 40v-6a8 8 0 0 1 16 0v6" fill="none" stroke="#1C1A18" strokeWidth="4.5" strokeLinecap="round"/>
          <circle cx="54" cy="51" r="3.5" fill="#F6DF15"/>
          <rect x="37" y="18" width="30" height="5" rx="2.5" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-speech" viewBox="0 0 96 96">
          <ellipse cx="50" cy="88" rx="28" ry="4.5" fill="url(#g-shadow)"/>
          <path d="M12 22a12 12 0 0 1 12-12h28a12 12 0 0 1 12 12v16a12 12 0 0 1-12 12H32l-12 10v-11a12 12 0 0 1-8-11z" fill="url(#g-blue)"/>
          <text x="38" y="38" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="22" fill="#F4F0E8">A</text>
          <path d="M36 50a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v14a12 12 0 0 1-8 11v10l-12-9H48a12 12 0 0 1-12-12z" fill="url(#g-lemon)"/>
          <text x="60" y="66" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="20" fill="#1C1A18">Ọ</text>
          <rect x="20" y="14" width="22" height="4" rx="2" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-shield" viewBox="0 0 96 96">
          <ellipse cx="48" cy="88" rx="24" ry="5" fill="url(#g-shadow)"/>
          <path d="M48 8l30 11v22c0 20-13 34-30 42C31 75 18 61 18 41V19z" fill="url(#g-gold)"/>
          <path d="M48 16l22 8v17c0 15-9 26-22 33-13-7-22-18-22-33V24z" fill="url(#g-lemon)"/>
          <path d="M48 28l5 10 11 1.5-8 7.5 2 11-10-5.5-10 5.5 2-11-8-7.5 11-1.5z" fill="#1C1A18"/>
          <ellipse cx="36" cy="22" rx="7" ry="3" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-group" viewBox="0 0 96 96">
          <ellipse cx="48" cy="86" rx="34" ry="5" fill="url(#g-shadow)"/>
          <circle cx="22" cy="36" r="10" fill="url(#g-salmon)"/>
          <path d="M6 76c0-14 7-24 16-24s16 10 16 24z" fill="url(#g-salmon)"/>
          <circle cx="74" cy="36" r="10" fill="url(#g-blue)"/>
          <path d="M58 76c0-14 7-24 16-24s16 10 16 24z" fill="url(#g-blue)"/>
          <circle cx="48" cy="30" r="12" fill="url(#g-lime)"/>
          <path d="M28 80c0-17 9-28 20-28s20 11 20 28z" fill="url(#g-lime)"/>
          <ellipse cx="44" cy="24" rx="4" ry="3" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-passport" viewBox="0 0 96 96">
          <ellipse cx="48" cy="88" rx="26" ry="5" fill="url(#g-shadow)"/>
          <rect x="22" y="10" width="54" height="72" rx="8" fill="url(#g-carbon)" transform="rotate(6 49 46)"/>
          <rect x="20" y="10" width="54" height="72" rx="8" fill="url(#g-blue)"/>
          <circle cx="47" cy="40" r="13" fill="none" stroke="#F6DF15" strokeWidth="3.5"/>
          <path d="M34 40h26M47 27c-6 8-6 18 0 26M47 27c6 8 6 18 0 26" fill="none" stroke="#F6DF15" strokeWidth="2.5"/>
          <rect x="32" y="62" width="30" height="4" rx="2" fill="#F6DF15"/>
          <rect x="26" y="15" width="24" height="4" rx="2" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-phone" viewBox="0 0 96 96">
          <ellipse cx="48" cy="88" rx="24" ry="5" fill="url(#g-shadow)"/>
          <rect x="24" y="6" width="48" height="78" rx="11" fill="url(#g-carbon)"/>
          <rect x="29" y="12" width="38" height="66" rx="7" fill="url(#g-linen)"/>
          <path d="M48 24v26" stroke="#1C1A18" strokeWidth="0" />
          <circle cx="48" cy="45" r="17" fill="url(#g-lime)"/>
          <path d="M48 35v16M41 45l7 7 7-7" fill="none" stroke="#1C1A18" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="40" y="67" width="16" height="4" rx="2" fill="#1C1A18" opacity=".25"/>
          <rect x="31" y="9" width="18" height="3" rx="1.5" fill="url(#g-gloss)"/>
        </symbol>
    
        <symbol id="i-house" viewBox="0 0 96 96">
          <ellipse cx="48" cy="88" rx="30" ry="5" fill="url(#g-shadow)"/>
          <rect x="20" y="40" width="56" height="44" rx="6" fill="url(#g-gold)"/>
          <path d="M10 44L48 12l38 32c2 2 0 6-3 6H13c-3 0-5-4-3-6z" fill="url(#g-salmon)"/>
          <rect x="40" y="58" width="16" height="26" rx="5" fill="url(#g-blue)"/>
          <circle cx="52" cy="72" r="1.8" fill="#F6DF15"/>
          <path d="M26 30l20-15" stroke="#fff" strokeOpacity=".6" strokeWidth="3.5" strokeLinecap="round"/>
        </symbol>
    
        <symbol id="i-globe" viewBox="0 0 96 96">
          <ellipse cx="46" cy="88" rx="28" ry="5" fill="url(#g-shadow)"/>
          <circle cx="44" cy="50" r="32" fill="url(#g-lime)"/>
          <path d="M22 40c8 2 12-4 18 0s2 12 10 14 8 10 4 16M48 20c-2 6 4 8 10 8s10 6 14 12" fill="none" stroke="#3E6B1E" strokeOpacity=".55" strokeWidth="3" strokeLinecap="round"/>
          <path d="M70 8a14 14 0 0 1 14 14c0 11-14 24-14 24S56 33 56 22A14 14 0 0 1 70 8z" fill="url(#g-salmon)"/>
          <circle cx="70" cy="22" r="5" fill="#F4F0E8"/>
          <ellipse cx="32" cy="32" rx="8" ry="4" fill="url(#g-gloss)" transform="rotate(-30 32 32)"/>
        </symbol>
      </defs>
    </svg>
  );
}
