import { Link } from 'react-router-dom';

// Shared building blocks for inner pages.
export function PageHero({ kicker, title, lead, crumbs, children }) {
  return (
    <section className="wrap page-hero">
      {crumbs && (
        <nav className="crumbs" aria-label="Breadcrumb">
          <ol>
            <li><Link to="/">Home</Link></li>
            {crumbs.map((c, i) => <li key={i}>{c.href ? <Link to={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>)}
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

export function CtaBlock({ title, text, href = '/download', label = 'Explore Auvra' }) {
  return (
    <section className="wrap cta-block-wrap">
      <div className="cta-block pattern-bg">
        <h2 className="h2">{title}</h2>
        {text && <p>{text}</p>}
        <Link className="btn btn--lemon" to={href}>{label}</Link>
      </div>
    </section>
  );
}

export function Status({ kind = 'planned', children }) {
  const label = { live: 'Available now', developing: 'In development', planned: 'Planned', research: 'Research' }[kind];
  return <span className={`status status--${kind}`}>{children || label}</span>;
}
