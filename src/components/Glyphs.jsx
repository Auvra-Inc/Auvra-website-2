// Small UI glyphs shared by the nav and store buttons.
export const AppleGlyph = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true"><path fill="currentColor" d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8 2.3-1.3 3.1-2.5c1-1.4 1.4-2.8 1.4-2.9 0 0-2.7-1-2.7-4.1zM13.9 5c.7-.9 1.2-2 1-3.2-1 0-2.3.7-3 1.6-.7.8-1.2 2-1.1 3.1 1.2.1 2.3-.6 3.1-1.5z" /></svg>
);
export const PlayGlyph = ({ size = 20, color = false }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path fill={color ? '#00D7FE' : 'currentColor'} d="M3.6 1.8c-.3.3-.5.8-.5 1.4v17.6c0 .6.2 1.1.5 1.4l9.8-10.2z" />
    <path fill={color ? '#FFD400' : 'currentColor'} d="M16.7 15.3 13.4 12l3.3-3.3 3.9 2.2c1.1.6 1.1 1.6 0 2.2z" />
    <path fill={color ? '#FF3A44' : 'currentColor'} d="M16.7 15.3 13.4 12l-9.8 10.2c.4.4 1 .4 1.7 0z" />
    <path fill={color ? '#00F076' : 'currentColor'} d="M16.7 8.7 5.3 2c-.7-.4-1.3-.4-1.7 0L13.4 12z" />
  </svg>
);
export const Chevron = ({ dir = 'down', size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" style={{ transform: dir === 'right' ? 'rotate(-90deg)' : undefined }}>
    <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
