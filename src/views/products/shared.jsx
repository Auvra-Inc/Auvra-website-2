import Icon3D from '../../components/Icon3D.jsx';

// Shared pieces for the five product pages.

export const PRODUCTS_CRUMB = { label: 'Products', href: '/#ecosystem' };

export const PRODUCT_INFO = [
  {
    href: '/cultural-preservation', label: 'Cultural Preservation', icon: 'globe', tint: 'gold',
    text: 'The foundation: documenting stories, languages, memories and traditions so they can be carried forward.',
  },
  {
    href: '/contribution-badges', label: 'Contribution Badges', icon: 'shield', tint: 'lime',
    text: 'Attributable records of the context, memories and care people add to what has already been preserved.',
  },
  {
    href: '/collectible-badges', label: 'Collectible Badges', icon: 'gift', tint: 'salmon',
    text: 'A way for creators to document, attribute and share cultural expressions as collectible items.',
  },
  {
    href: '/my-vault', label: 'My Vault', icon: 'vault', tint: 'blue',
    text: 'A private home for the recordings, photos and documents you and your family never want to lose.',
  },
  {
    href: '/auvra-passport', label: 'Auvra Passport', icon: 'passport', tint: 'carbon',
    text: 'A connected record of your participation, linking you to the records and contributions you are part of.',
  },
];

export function Photo({ name, alt, className = '', eager = false, sizes = '(max-width: 760px) 100vw, 50vw' }) {
  return (
    <img
      className={className}
      src={`/images/photos/${name}-960.webp`}
      srcSet={`/images/photos/${name}-480.webp 480w, /images/photos/${name}-960.webp 960w`}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

export function SectionHead({ id, kicker, title, lead, center = false, children }) {
  return (
    <div className={`pd-head reveal${center ? ' pd-head--center' : ''}`}>
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 id={id} className="h2">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </div>
  );
}

// Cards linking to the other product pages.
export function RelatedProducts({ current, kicker = 'Across Auvra', title, lead, notes = {} }) {
  const items = PRODUCT_INFO.filter((p) => p.href !== current);
  return (
    <section className="wrap section" aria-labelledby="related-title">
      <SectionHead id="related-title" kicker={kicker} title={title} lead={lead} />
      <ul className="pd-links">
        {items.map((p) => (
          <li key={p.href} className="reveal">
            <a className={`pd-link pd-link--${p.tint}`} href={p.href}>
              <Icon3D name={p.icon} size={64} />
              <span className="pd-link__label">{p.label}</span>
              <span className="pd-link__text">{notes[p.href] || p.text}</span>
              <span className="pd-link__more">Explore {p.label} <span aria-hidden="true">→</span></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
