import { PageHero, CtaBlock } from '../../components/Page.jsx';
import Icon3D from '../../components/Icon3D.jsx';
import { STORIES, STORY_CATEGORIES } from '../../data/stories.js';
import { useListing, ListingTools, formatDate, byDateDesc } from './shared.jsx';

const searchFields = (s) => [s.title, s.summary, s.category, s.community, s.location, s.contributor?.name, s.culturalContext];
const storyHref = (s) => `/cultural-stories/${s.slug}`;

export function StoryCard({ story }) {
  return (
    <article className="ins-card">
      {story.cover && (
        <div className="ins-card__img"><img src={story.cover.src} alt={story.cover.alt} width="480" height="360" loading="lazy" decoding="async" /></div>
      )}
      <p className="ins-card__meta"><span>{story.category}</span>{story.date && <time dateTime={story.date}>{formatDate(story.date)}</time>}</p>
      <h3 className="ins-card__title"><a href={storyHref(story)}>{story.title}</a></h3>
      <p className="ins-card__sum">{story.summary}</p>
      {story.contributor && <p className="ins-card__by">Shared by {story.contributor.name}{story.community ? ` · ${story.community}` : ''}</p>}
    </article>
  );
}

function Featured({ story }) {
  return (
    <article className="ins-featured">
      {story.cover && <div className="ins-featured__img"><img src={story.cover.src} alt={story.cover.alt} width="960" height="720" /></div>}
      <div className="ins-featured__text">
        <p className="kicker">Featured story · {story.category}</p>
        <h2 className="h3"><a href={storyHref(story)}>{story.title}</a></h2>
        <p>{story.summary}</p>
        <p className="ins-card__by">
          {story.contributor && <>Shared by {story.contributor.name}</>}
          {story.date && <> · <time dateTime={story.date}>{formatDate(story.date)}</time></>}
        </p>
        <a className="btn btn--dark" href={storyHref(story)}>Read the story</a>
      </div>
    </article>
  );
}

function FirstStories() {
  return (
    <div className="ins-empty-hero">
      <div className="ins-empty-hero__text">
        <p className="kicker">Featured story</p>
        <h2 className="h3">The first Cultural Stories are being documented with their communities.</h2>
        <p>We are taking our time. Each story is recorded with the people it belongs to, credited to them, and published only when they are comfortable with how it is told. Until then, this space stays open.</p>
        <p>If your family or community has a story you would like to document with us, we would love to hear from you.</p>
        <div className="btn-row">
          <a className="btn btn--dark" href="/contact">Tell us about a story</a>
          <a className="btn btn--ghost" href="/cultural-preservation">How preservation works</a>
        </div>
      </div>
      <div className="ins-empty-hero__img">
        <img src="/images/photos/hands-braid-960.webp" alt="An older hand braiding a child's hair" width="960" height="720" />
      </div>
    </div>
  );
}

export default function CulturalStories() {
  const published = [...STORIES].sort(byDateDesc);
  const featured = published.find((s) => s.featured) || published[0];
  const { cat, setCat, q, setQ, results } = useListing(STORIES, searchFields);
  const hasStories = STORIES.length > 0;

  return (
    <>
      <PageHero
        kicker="Insights"
        title="Cultural Stories"
        lead="Oral histories, ancestral stories, languages, crafts and ceremonies, documented with the families and communities who carry them, and always credited to them."
        crumbs={[{ label: 'Insights', href: '/blog' }, { label: 'Cultural Stories' }]}
      />

      <section className="wrap ins-block reveal" aria-label="Featured story">
        {featured ? <Featured story={featured} /> : <FirstStories />}
      </section>

      <section className="wrap ins-block reveal" aria-labelledby="cats-title">
        <h2 id="cats-title" className="h3">What we document</h2>
        <ul className="ins-cats">
          {STORY_CATEGORIES.map((c) => {
            const n = STORIES.filter((s) => s.category === c.name).length;
            return (
              <li key={c.name}>
                <button type="button" className="ins-cat" aria-pressed={cat === c.name} onClick={() => { setCat(c.name); document.getElementById('stories-title')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <b>{c.name}</b>
                  <span>{c.blurb}</span>
                  <small>{n ? `${n} ${n === 1 ? 'story' : 'stories'}` : 'Coming soon'}</small>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="wrap ins-block reveal" aria-labelledby="stories-title">
        <h2 id="stories-title" className="h3">All stories</h2>
        <ListingTools id="stories" label="Search stories" placeholder="Search by title, place, community or contributor"
          categories={STORY_CATEGORIES} cat={cat} setCat={setCat} q={q} setQ={setQ} count={results.length} noun="story" />
        {results.length > 0 ? (
          <div className="ins-grid">{results.map((s) => <StoryCard key={s.slug} story={s} />)}</div>
        ) : (
          <div className="ins-none">
            <Icon3D name="speech" size={64} />
            {hasStories ? (
              <p>No stories match{q.trim() ? <> “{q.trim()}”</> : null}{cat !== 'All' ? <> in {cat}</> : null}. Try another word or category.</p>
            ) : (
              <p>No stories have been published yet{cat !== 'All' ? <> in {cat}</> : null}. The first ones are being documented now. <a href="/contact">Share a story with us</a>.</p>
            )}
            {(q || cat !== 'All') && <button type="button" className="btn btn--ghost" onClick={() => { setQ(''); setCat('All'); }}>Clear search and filters</button>}
          </div>
        )}
      </section>

      <section className="wrap ins-block reveal" aria-labelledby="pub-title">
        <div className="ins-pub">
          <h2 id="pub-title" className="h3">How stories are published</h2>
          <ul className="ins-pub__list">
            <li><b>Consent first.</b> A story is published only with the agreement of the person who shared it and, where it applies, their community.</li>
            <li><b>Always credited.</b> Every story names its contributor, and its sources are listed at the end.</li>
            <li><b>Context kept.</b> Stories carry their cultural context and, where people are comfortable sharing it, their place and community.</li>
            <li><b>Open to correction.</b> If something is wrong or should not be public, tell us and we will review it. See our <a href="/governance">Content Governance</a> policy.</li>
          </ul>
        </div>
      </section>

      <CtaBlock title="Preserve your story" text="Your family’s stories, languages and traditions deserve a permanent home, credited to you." />
    </>
  );
}
