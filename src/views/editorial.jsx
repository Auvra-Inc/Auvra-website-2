// Shared editorial pieces for the About, Lens AI, A-Chronos and Research pages.
// They follow the homepage's visual language: big uppercase Clash Display headings,
// centred text on phones, dark carbon bands and `reveal` scroll-ins. Everything here is
// static (no hooks), so it prerenders to plain HTML.

export const H1 = 'font-semibold uppercase tracking-[-0.045em] leading-[0.88] text-[clamp(44px,10.5vw,118px)] text-balance';
export const H2 = 'font-semibold uppercase tracking-[-0.04em] leading-[0.92] text-[clamp(38px,5.4vw,70px)] text-balance';
export const H2_SM = 'font-semibold uppercase tracking-[-0.04em] leading-[0.95] text-[clamp(32px,4.2vw,54px)] text-balance';
export const LEAD = 'text-[17px] md:text-lg leading-relaxed';

export function Crumbs({ items, light = false }) {
  return (
    <nav className={`crumbs ${light ? '[&_a]:!text-white/75 [&_[aria-current]]:!text-white [&_ol]:!text-white/75' : ''}`} aria-label="Breadcrumb">
      <ol className="max-md:justify-center">
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
      srcSet={`/images/photos/${name}-480.webp 480w, /images/photos/${name}-960.webp 960w`}
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

// A question heading followed by a direct, factual answer (for answer engines), then any detail.
export function QA({ id, kicker, q, answer, light = false, center = false, children, className = '' }) {
  return (
    <div className={`reveal min-w-0 max-md:text-center ${center ? 'md:text-center md:mx-auto' : ''} ${className}`}>
      {kicker && <Kicker light={light}>{kicker}</Kicker>}
      <h2 id={id} className={`${H2} ${center ? 'mx-auto' : ''} max-w-[18ch]`}>{q}</h2>
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

// Closing call to action in the homepage's final-CTA style (soft gradient into a cream card).
export function FinalCta({ id = 'cta-title', title, text, primary = { href: '/download', label: 'Explore Auvra' }, secondary, from = '#DBC9F5', via = '#FF8F77' }) {
  return (
    <section
      className="relative isolate overflow-hidden px-3 md:px-16 pt-10 md:pt-20"
      style={{ background: `linear-gradient(180deg, ${from} 0%, ${via} 40%, #FBF8F1 78%, #fff 100%)` }}
      aria-labelledby={id}
    >
      <div className="relative overflow-hidden rounded-t-[40px] bg-cream px-5 pt-20 md:pt-28 pb-20 md:pb-28 text-center">
        <div className="relative z-10 mx-auto flex max-w-[960px] flex-col items-center gap-7">
          <h2 id={id} className="reveal font-semibold uppercase tracking-[-0.045em] leading-[0.9] text-[clamp(40px,7.4vw,100px)] text-balance">{title}</h2>
          {text && <p className="reveal max-w-[480px] text-[17px] md:text-lg text-[#3A3631]">{text}</p>}
          <div className="flex flex-wrap justify-center gap-3">
            <a href={primary.href} className="btn btn--dark !px-10 !min-h-[60px]">{primary.label}</a>
            {secondary && <a href={secondary.href} className="btn btn--ghost !min-h-[60px]">{secondary.label}</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
