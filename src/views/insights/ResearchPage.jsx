import { RESEARCH } from '../../data/research.js';
import { FinalCta } from '../editorial.jsx';
import { ResearchCard } from './Research.jsx';
import { Body, formatDate, names, InsHero } from './shared.jsx';

// Template for one publication. Routes are generated per entry in src/data/research.js.
export default function ResearchPage({ item }) {
  const others = RESEARCH.filter((r) => r.slug !== item.slug);
  const related = [...others.filter((r) => r.category === item.category), ...others.filter((r) => r.category !== item.category)].slice(0, 3);
  const authors = item.authors || [];

  return (
    <>
      <InsHero small kicker={[item.category, item.type].filter(Boolean).join(' · ')} title={item.title} lead={item.summary}
        crumbs={[{ label: 'Insights', href: '/blog' }, { label: 'Research', href: '/research' }, { label: item.title }]}>
        <dl className="ins-facts">
          {authors.length > 0 && <div><dt>{authors.length === 1 ? 'Author' : 'Authors'}</dt><dd>{authors.map((a) => a.affiliation ? `${a.name} (${a.affiliation})` : a.name).join(', ')}</dd></div>}
          {item.date && <div><dt>Published</dt><dd><time dateTime={item.date}>{formatDate(item.date)}</time></dd></div>}
          {item.team && <div><dt>Programme</dt><dd>{item.team}</dd></div>}
          {item.category && <div><dt>Area</dt><dd>{item.category}</dd></div>}
        </dl>
        {item.pdf && <div className="btn-row"><a className="btn btn--dark" href={item.pdf} download>Download PDF</a></div>}
      </InsHero>

      {item.cover && (
        <figure className="wrap ins-cover reveal">
          <img src={item.cover.src} alt={item.cover.alt} width="960" height="640" />
        </figure>
      )}

      <div className="wrap ins-article">
        <aside className="ins-context reveal" aria-labelledby="abs-title">
          <h2 id="abs-title">Abstract</h2>
          <p>{item.abstract}</p>
          {item.pdf && <a className="btn btn--dark" href={item.pdf} download>Download PDF</a>}
        </aside>
        <div className="prose ins-prose reveal"><Body blocks={item.content} /></div>
      </div>

      {item.figures?.length > 0 && (
        <section className="wrap ins-block reveal" aria-labelledby="fig-title">
          <h2 id="fig-title" className="ins-h2">Figures</h2>
          <div className="ins-figures">
            {item.figures.map((f, i) => (
              <figure key={i}>
                <img src={f.src} alt={f.alt} loading="lazy" decoding="async" />
                {f.caption && <figcaption>{f.caption}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      {item.references?.length > 0 && (
        <section className="wrap ins-block reveal" aria-labelledby="ref-title">
          <h2 id="ref-title" className="ins-h2">References</h2>
          <ol className="ins-refs">
            {item.references.map((r, i) => <li key={i}>{r.href ? <a href={r.href} rel="noopener">{r.text}</a> : r.text}</li>)}
          </ol>
        </section>
      )}

      {authors.length > 0 && (
        <section className="wrap ins-block reveal" aria-labelledby="cite-title">
          <h2 id="cite-title" className="ins-h2">How to cite</h2>
          <p className="ins-sub !mb-0">{names(authors)} ({item.date?.slice(0, 4)}). {item.title}. Auvra. https://www.goauvra.com/research/{item.slug}</p>
        </section>
      )}

      {related.length > 0 && (
        <section className="wrap ins-block reveal" aria-labelledby="rel-title">
          <h2 id="rel-title" className="ins-h2">Related research</h2>
          <div className="ins-grid">{related.map((r) => <ResearchCard key={r.slug} item={r} />)}</div>
        </section>
      )}

      <FinalCta
        id="paper-cta"
        title="Research culture with us."
        text="Questions, corrections or collaboration ideas about this work are welcome."
        primary={{ href: '/contact', label: 'Contact us' }}
        secondary={{ href: '/research', label: 'All research' }}
        tone="teal"
      />
    </>
  );
}
