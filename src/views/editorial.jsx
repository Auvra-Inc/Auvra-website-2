import { photoSrcset } from '../data/hires.js';
// Shared editorial pieces for the About, Lens AI, A-Chronos and Research pages.
// They follow the homepage's visual language: big uppercase Clash Display headings,
// centred text on phones, dark carbon bands and `reveal` scroll-ins. Everything here is
// static (no hooks), so it prerenders to plain HTML.

export const H1 = 'ws-h font-bold uppercase tracking-[-0.045em] !leading-[0.88] text-[clamp(44px,11vw,120px)] text-balance';
export const H2 = 'ws-h font-bold uppercase tracking-[-0.045em] !leading-[0.92] text-[clamp(38px,5.4vw,70px)] text-balance';
export const H2_SM = 'ws-h font-bold uppercase tracking-[-0.045em] !leading-[0.95] text-[clamp(32px,4.2vw,54px)] text-balance';
export const LEAD = 'text-[17px] md:text-lg leading-relaxed';

export function Crumbs({ items, light = false }) {
  return (
    <nav className={`crumbs ${light ? '[&_a]:!text-white/75 [&_[aria-current]]:!text-white [&_ol]:!text-white/75' : ''}`} aria-label="Breadcrumb">
      <ol className="justify-center">
        <li><a href="/">Home</a></li>
        {items.map((c, i) => (
          <li key={i}>{c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}</li>
        ))}
      </ol>
    </nav>
  );
}

export function Photo({ name, alt, className = '', eager = false, sizes = '(max-width: 760px) 100vw, 50vw' }) {
  return (
    <img
      className={className}
      src={`/images/photos/${name}-960.webp`}
      srcSet={photoSrcset(name)}
      sizes={sizes}
      alt={alt}
      width="960"
      height="1200"
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

export function Kicker({ children, light = false }) {
  return <p className={`kicker ${light ? '!text-white/80' : ''}`}>{children}</p>;
}

// Keeps hyphenated names such as "A-Chronos" from breaking across lines in big headings.
export function nb(text) {
  if (typeof text !== 'string' || !text.includes('A-Chronos')) return text;
  return text.split('A-Chronos').flatMap((part, i) => (i ? [<span key={i} className="whitespace-nowrap">A-Chronos</span>, part] : [part]));
}

// A question heading followed by a direct, factual answer (for answer engines), then any detail.
export function QA({ id, kicker, q, answer, light = false, center = false, children, className = '' }) {
  return (
    <div className={`reveal min-w-0 max-md:text-center ${center ? 'md:text-center md:mx-auto' : ''} ${className}`}>
      {kicker && <Kicker light={light}>{kicker}</Kicker>}
      <h2 id={id} className={`${H2} ${center ? 'mx-auto' : ''} max-w-[18ch]`}>{nb(q)}</h2>
      {answer && (
        <p className={`${LEAD} mt-7 max-w-[640px] max-md:mx-auto ${center ? 'md:mx-auto' : ''} ${light ? 'text-white/85' : 'text-[#3A3631]'}`}>{answer}</p>
      )}
      {children}
    </div>
  );
}

// Static FAQ list built on <details>, so it works without JavaScript and every answer is in the HTML.
export function FaqList({ id = 'faq-title', title = 'Questions and answers', items, kicker = 'Questions' }) {
  return (
    <section className="wrap py-20 md:py-28" aria-labelledby={id}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-md:text-center">
          <Kicker>{kicker}</Kicker>
          <h2 id={id} className={`${H2_SM} max-w-[14ch] max-md:mx-auto`}>{title}</h2>
          <a className="btn btn--ghost mt-8" href="/faqs">See all FAQs</a>
        </div>
        <div className="border-t border-line">
          {items.map((f, i) => (
            <details key={f.q} className="group border-b border-line" open={i === 0}>
              <summary className="flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-5 py-5 text-left text-[clamp(18px,1.7vw,22px)] font-medium tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                <h3 className="font-medium">{f.q}</h3>
                <span aria-hidden="true" className="relative grid h-10 w-10 flex-none place-items-center rounded-full bg-linen text-xl transition-colors group-open:bg-carbon group-open:text-white">
                  <span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span>
                </span>
              </summary>
              <p className="pb-6 pr-2 md:pr-14 text-[17px] text-grey">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export const faqJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

// Closing call to action for a page. The site footer already ends every page with the gradient
// "Explore Auvra" card, so this is a solid colour band in the page's own identity colour.
const CTA_TONES = {
  carbon: { bg: '#191717', text: '#FBF8F1', sub: '#A8A29A', btn: 'btn--light', ghost: '!border-[#FBF8F1] !text-[#FBF8F1]' },
  blue: { bg: '#0B6A70', text: '#FFFFFF', sub: '#BFE0E1', btn: 'btn--light', ghost: '!border-white !text-white' },
  teal: { bg: '#024B50', text: '#FFFFFF', sub: '#BFE0E1', btn: 'btn--light', ghost: '!border-white !text-white' },
  espresso: { bg: '#4A281C', text: '#FFFFFF', sub: '#E9D9CF', btn: 'btn--light', ghost: '!border-white !text-white' },
  linen: { bg: '#F4F0E8', text: '#1C1A18', sub: '#5F5B55', btn: 'btn--dark', ghost: '' },
};

export function FinalCta({ id = 'cta-title', title, text, primary = { href: '#get-app', label: 'Explore Auvra' }, secondary, tone = 'carbon', icon }) {
  const t = CTA_TONES[tone] || CTA_TONES.carbon;
  return (
    <section className="px-3 md:px-6 pb-3 md:pb-6" aria-labelledby={id}>
      <div className="relative overflow-hidden rounded-[32px] md:rounded-[40px] px-6 py-20 md:py-32 text-center" style={{ background: t.bg, color: t.text }}>
        <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center gap-7">
          {icon}
          <h2 id={id} className="reveal ws-h font-bold uppercase tracking-[-0.045em] !leading-[0.9] text-[clamp(40px,7.4vw,100px)] text-balance">{nb(title)}</h2>
          {text && <p className="reveal max-w-[480px] text-[17px] md:text-lg" style={{ color: t.sub }}>{text}</p>}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={primary.href} className={`poster-cta shimmer ${t.btn === 'btn--dark' ? 'poster-cta--dark' : ''}`}>{primary.label}<span className="poster-cta__icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg></span></a>
            {secondary && <a href={secondary.href} className={`ghost-cta ${t.btn === 'btn--dark' ? 'ghost-cta--dark' : ''}`}>{secondary.label}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
