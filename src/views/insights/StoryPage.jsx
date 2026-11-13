import { FinalCta } from '../editorial.jsx';
import { STORIES } from '../../data/stories.js';
import { StoryCard } from './CulturalStories.jsx';
import { Body, formatDate, InsHero } from './shared.jsx';

// Template for one Cultural Story. Routes are generated per entry in src/data/stories.js.
export default function StoryPage({ story }) {
  const others = STORIES.filter((s) => s.slug !== story.slug);
  const related = [...others.filter((s) => s.category === story.category), ...others.filter((s) => s.category !== story.category)].slice(0, 3);
  const place = [story.community, story.location].filter(Boolean).join(' · ');

  return (
    <>
      <InsHero small kicker={story.category} title={story.title} lead={story.summary}
        crumbs={[{ label: 'Insights', href: '/blog' }, { label: 'Cultural Stories', href: '/cultural-stories' }, { label: story.title }]}>
        <dl className="ins-facts">
          {story.contributor && <div><dt>Shared by</dt><dd>{story.contributor.name}{story.contributor.role ? `, ${story.contributor.role}` : ''}</dd></div>}
          {story.author && <div><dt>Written by</dt><dd>{story.author.name}{story.author.role ? `, ${story.author.role}` : ''}</dd></div>}
          {place && <div><dt>Community &amp; place</dt><dd>{place}</dd></div>}
          {story.date && <div><dt>Published</dt><dd><time dateTime={story.date}>{formatDate(story.date)}</time></dd></div>}
        </dl>
      </InsHero>

      {story.cover && (
        <figure className="wrap ins-cover reveal">
          <img src={story.cover.src} alt={story.cover.alt} width="960" height="640" />
          {story.cover.credit && <figcaption>Photo: {story.cover.credit}</figcaption>}
        </figure>
      )}

      <div className="wrap ins-article">
        {story.culturalContext && (
          <aside className="ins-context reveal" aria-labelledby="ctx-title">
            <h2 id="ctx-title">Cultural context</h2>
            <p>{story.culturalContext}</p>
          </aside>
        )}
        <div className="prose ins-prose reveal"><Body blocks={story.body} /></div>
      </div>

      {story.gallery?.length > 0 && (
        <section className="wrap ins-block reveal" aria-labelledby="gal-title">
          <h2 id="gal-title" className="ins-h2">Gallery</h2>
          <div className="ins-gallery">
            {story.gallery.map((g, i) => (
              <figure key={i}>
                <img src={g.src} alt={g.alt} width="480" height="360" loading="lazy" decoding="async" />
                {(g.caption || g.credit) && <figcaption>{g.caption}{g.caption && g.credit ? ' · ' : ''}{g.credit && `Photo: ${g.credit}`}</figcaption>}
              </figure>
            ))}
          </div>
        </section>
      )}

      {story.sources?.length > 0 && (
        <section className="wrap ins-block reveal" aria-labelledby="src-title">
          <h2 id="src-title" className="ins-h2">Sources and references</h2>
          <ol className="ins-refs">
            {story.sources.map((s, i) => <li key={i}>{s.href ? <a href={s.href} rel="noopener">{s.label}</a> : s.label}</li>)}
          </ol>
        </section>
      )}

      {related.length > 0 && (
        <section className="wrap ins-block reveal" aria-labelledby="rel-title">
          <h2 id="rel-title" className="ins-h2">Related stories</h2>
          <div className="ins-grid">{related.map((s) => <StoryCard key={s.slug} story={s} />)}</div>
        </section>
      )}

      <FinalCta id="story-cta" title="Preserve your story." text="Record the stories, languages and traditions your family carries, and keep them credited to you for generations." secondary={{ href: '/cultural-stories', label: 'More stories' }} tone="espresso" />
    </>
  );
}
