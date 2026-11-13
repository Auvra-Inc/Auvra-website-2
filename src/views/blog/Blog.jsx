import { useMemo, useState } from 'react';
import { PageHero } from '../../components/Page.jsx';
import { POSTS, formatDate } from '../../data/posts.js';

const PAGE = 9;

function PostCard({ p, featured = false }) {
  return (
    <article className={`post-card${featured ? ' post-card--featured' : ''}`}>
      <a className="post-card__img" href={`/blog/${p.slug}`} tabIndex={-1} aria-hidden="true">
        <img src={featured ? p.image : p.thumb} alt="" loading={featured ? 'eager' : 'lazy'} />
      </a>
      <div className="post-card__body">
        <p className="post-meta"><span className="post-cat">{p.category}</span> · <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readingTime} min read</p>
        <h2 className="post-card__title"><a href={`/blog/${p.slug}`}>{p.title}</a></h2>
        <p className="post-card__sum">{p.description}</p>
        <p className="post-meta">By {p.author}</p>
        <a className="text-link" href={`/blog/${p.slug}`} aria-label={`Read article: ${p.title}`}>Read article →</a>
      </div>
    </article>
  );
}

export default function Blog() {
  const cats = ['All', ...new Set(POSTS.map((p) => p.category))];
  const [cat, setCat] = useState('All');
  const [shown, setShown] = useState(PAGE);
  const list = useMemo(() => POSTS.filter((p) => cat === 'All' || p.category === cat), [cat]);
  const [featured, ...rest] = list;
  return (
    <>
      <PageHero kicker="Insights · Blog" title="News and perspectives from Auvra" lead="Company updates, product developments, announcements and perspectives on preserving human culture." crumbs={[{ label: 'Insights' }, { label: 'Blog' }]} />
      <section className="wrap blog">
        {cats.length > 2 && (
          <div className="filters" role="group" aria-label="Filter by category">
            {cats.map((c) => <button key={c} type="button" className="filter" aria-pressed={cat === c} onClick={() => { setCat(c); setShown(PAGE); }}>{c}</button>)}
          </div>
        )}
        {featured && <div className="blog__featured"><p className="kicker">Featured</p><PostCard p={featured} featured /></div>}
        {rest.length > 0 && (
          <>
            <h2 className="blog__latest">Latest articles</h2>
            <div className="post-grid">{rest.slice(0, shown).map((p) => <PostCard key={p.slug} p={p} />)}</div>
            {rest.length > shown && <div className="btn-row"><button type="button" className="btn btn--ghost" onClick={() => setShown((n) => n + PAGE)}>Load more articles</button></div>}
          </>
        )}
      </section>
    </>
  );
}
