
// Shared building blocks for inner pages.
export function PageHero({ kicker, title, lead, crumbs, children }) {
  return (
    <section className="wrap page-hero">
      {crumbs && (
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li><a href="/">Home</a></li>
            {crumbs.map((c, i) => <li key={i}>{c.href ? <a href={c.href}>{c.label}</a> : <span aria-current="page">{c.label}</span>}</li>)}
          </ol>
        </nav>
      )}
      {kicker && <p className="kicker">{kicker}</p>}
      <h1 className="h2 page-hero__title">{title}</h1>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </section>
  );
}

export function CtaBlock({ title, text, href = '#get-app', label = 'Explore Auvra' }) {
  return (
    <section className="wrap cta-block-wrap">
      <div className="cta-block pattern-bg">
        <h2 className="h2">{title}</h2>
        {text && <p>{text}</p>}
        <a className="poster-cta shimmer" href={href}>{label}<span className="poster-cta__icon" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg></span></a>
      </div>
    </section>
  );
}

export function Status({ kind = 'planned', children }) {
  const label = { live: 'Available now', developing: 'In development', planned: 'Planned', research: 'Research' }[kind];
  return <span className={`status status--${kind}`}>{children || label}</span>;
}
