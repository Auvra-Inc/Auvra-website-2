import { useState } from 'react';
import { POSTS, formatDate } from '../../data/posts.js';
import { SITE } from '../../data/site.js';

export default function BlogPost({ slug }) {
  const p = POSTS.find((x) => x.slug === slug);
  const [copied, setCopied] = useState(false);
  const related = POSTS.filter((x) => x.slug !== slug).slice(0, 3);
  const url = `${SITE}/blog/${slug}`;
  const share = [
    ['X', `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(p.title)}`],
    ['LinkedIn', `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`],
    ['WhatsApp', `https://wa.me/?text=${encodeURIComponent(`${p.title} ${url}`)}`],
  ];
  const copy = async () => { try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* clipboard unavailable */ } };
  return (
    <article className="post">
      <header className="wrap page-hero post__head">
        <nav className="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li><a href="/blog">Blog</a></li><li><span aria-current="page">{p.category}</span></li></ol></nav>
        <h1 className="h2 post__title">{p.title}</h1>
        <p className="lead">{p.description}</p>
        <p className="post-meta post__meta">By {p.author} · <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readingTime} min read</p>
      </header>
      <div className="wrap post__wrap">
        <figure className="post__figure"><img src={p.image} alt={p.imageAlt} fetchPriority="high" /></figure>
        <div className="prose post__body" dangerouslySetInnerHTML={{ __html: p.html }} />
        <div className="post__share">
          <span>Share this article</span>
          {share.map(([n, href]) => <a key={n} className="share-btn" href={href} target="_blank" rel="noopener noreferrer">{n}</a>)}
          <button type="button" className="share-btn" onClick={copy}>{copied ? 'Link copied' : 'Copy link'}</button>
          <span className="sr-only" aria-live="polite">{copied ? 'Link copied to clipboard' : ''}</span>
        </div>
        <a className="text-link" href="/blog">← Back to the blog</a>
      </div>
      {related.length > 0 && (
        <section className="wrap post__related" aria-labelledby="related-title">
          <h2 id="related-title" className="h3">Related articles</h2>
          <div className="post-grid">
            {related.map((r) => (
              <article className="post-card" key={r.slug}>
                <a className="post-card__img" href={`/blog/${r.slug}`} tabIndex={-1} aria-hidden="true"><img src={r.thumb} alt="" loading="lazy" /></a>
                <p className="post-meta"><time dateTime={r.date}>{formatDate(r.date)}</time></p>
                <h3 className="post-card__title"><a href={`/blog/${r.slug}`}>{r.title}</a></h3>
              </article>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
