import Icon3D from '../../components/Icon3D.jsx';
import { RESEARCH, RESEARCH_CATEGORIES } from '../../data/research.js';
import { FinalCta } from '../editorial.jsx';
import { useListing, ListingTools, formatDate, byDateDesc, names, InsHero } from './shared.jsx';

// /research. Mirrors /cultural-stories: a static page with the interactive listing
// (<ResearchListing>) passed in from the route as the `listing` slot.
// Publications come only from src/data/research.js. Never add placeholder papers.

const searchFields = (r) => [r.title, r.summary, r.abstract, r.category, r.type, r.team, ...(r.authors || []).map((a) => a.name)];
export const researchHref = (r) => `/research/${r.slug}`;

export function ResearchCard({ item }) {
  return (
    <article className="ins-card">
      {item.cover && (
        <div className="ins-card__img"><img src={item.cover.src} alt={item.cover.alt} width="480" height="360" loading="lazy" decoding="async" /></div>
      )}
      <p className="ins-card__meta">
        <span>{item.category}</span>
        {item.type && <span>{item.type}</span>}
        {item.date && <time dateTime={item.date}>{formatDate(item.date)}</time>}
      </p>
      <h3 className="ins-card__title"><a href={researchHref(item)}>{item.title}</a></h3>
      <p className="ins-card__sum">{item.summary}</p>
      {item.authors?.length > 0 && <p className="ins-card__by">By {names(item.authors)}{item.team ? ` · ${item.team}` : ''}</p>}
      <div className="ins-card__actions">
        <a className="btn btn--dark" href={researchHref(item)} aria-label={`Read: ${item.title}`}>Read</a>
        {item.pdf && <a className="btn btn--ghost" href={item.pdf} download aria-label={`Download PDF: ${item.title}`}>Download PDF</a>}
      </div>
    </article>
  );
}

function Featured({ item }) {
  return (
    <article className="ins-featured">
      {item.cover && <div className="ins-featured__img"><img src={item.cover.src} alt={item.cover.alt} width="960" height="720" /></div>}
      <div className="ins-featured__text">
        <p className="kicker">Featured research · {item.category}</p>
        <h2 className="ins-featured__title"><a href={researchHref(item)}>{item.title}</a></h2>
        <p>{item.summary}</p>
        <p className="ins-card__by">
          {item.authors?.length > 0 && <>By {names(item.authors)}</>}
          {item.date && <> · <time dateTime={item.date}>{formatDate(item.date)}</time></>}
        </p>
        <div className="btn-row">
          <a className="btn btn--dark" href={researchHref(item)}>Read the publication</a>
          {item.pdf && <a className="btn btn--ghost" href={item.pdf} download>Download PDF</a>}
        </div>
      </div>
    </article>
  );
}

function InPreparation() {
  return (
    <div className="ins-empty-hero ins-empty-hero--teal">
      <div className="ins-empty-hero__img">
        <img src="/images/photos/hands-archive-960.webp" srcSet="/images/photos/hands-archive-480.webp 480w, /images/photos/hands-archive-960.webp 960w" sizes="(max-width: 900px) 100vw, 50vw" alt="Hands turning the pages of an archive" width="960" height="720" />
      </div>
      <div className="ins-empty-hero__text">
        <p className="kicker">Featured research</p>
        <h2 className="ins-featured__title">Our first publications are in preparation.</h2>
        <p>We will publish our work on language technology, oral documentation and cultural knowledge representation here, with the people and communities who contributed to it credited by name.</p>
        <p>Researchers, linguists, archivists and institutions who would like to collaborate are welcome to get in touch.</p>
        <div className="btn-row">
          <a className="btn btn--light" href="/contact">Contact us</a>
          <a className="btn btn--ghost !border-white !text-white" href="/a-chronos">About A-Chronos</a>
        </div>
      </div>
    </div>
  );
}

// Interactive island: research areas, search, filters and publication cards.
export function ResearchListing() {
  const { cat, setCat, q, setQ, results } = useListing(RESEARCH, searchFields);
  const hasItems = RESEARCH.length > 0;
  return (
    <>
      <section className="wrap ins-block" aria-labelledby="areas-title">
        <div className="ins-head">
          <h2 id="areas-title" className="ins-h2">What does Auvra research?</h2>
          <p className="ins-sub">Auvra researches how technology can help preserve, understand and pass down cultural knowledge responsibly, across five areas. Choose one to filter the publications below.</p>
        </div>
        <ul className="ins-cats">
          {RESEARCH_CATEGORIES.map((c) => {
            const n = RESEARCH.filter((r) => r.category === c.name).length;
            return (
              <li key={c.name}>
                <button type="button" className="ins-cat" aria-pressed={cat === c.name} onClick={() => { setCat(cat === c.name ? 'All' : c.name); document.getElementById('pubs-title')?.scrollIntoView({ behavior: 'smooth' }); }}>
                  <b>{c.name}</b>
                  <span>{c.blurb}</span>
                  <small>{n ? `${n} ${n === 1 ? 'publication' : 'publications'}` : 'In preparation'}</small>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="wrap ins-block !pt-0" aria-labelledby="pubs-title">
        <div className="ins-head"><h2 id="pubs-title" className="ins-h2 scroll-mt-28">Publications</h2></div>
        <ListingTools id="research" label="Search research" placeholder="Search by title, topic or author"
          categories={RESEARCH_CATEGORIES} cat={cat} setCat={setCat} q={q} setQ={setQ} count={results.length} noun="publication" />
        {results.length > 0 ? (
          <div className="ins-grid">{results.map((r) => <ResearchCard key={r.slug} item={r} />)}</div>
        ) : (
          <div className="ins-none">
            <Icon3D name="globe" size={64} />
            {hasItems ? (
              <p>No publications match{q.trim() ? <> “{q.trim()}”</> : null}{cat !== 'All' ? <> in {cat}</> : null}. Try another word or area.</p>
            ) : (
              <p>Our first publications are in preparation{cat !== 'All' ? <> in {cat}</> : null}. <a href="/contact">Contact us</a> if you would like to hear when they are published or to collaborate.</p>
            )}
            {(q || cat !== 'All') && <button type="button" className="btn btn--ghost" onClick={() => { setQ(''); setCat('All'); }}>Clear search and filters</button>}
          </div>
        )}
      </section>
    </>
  );
}

export default function Research({ listing }) {
  const published = [...RESEARCH].sort(byDateDesc);
  const featured = published.find((r) => r.featured) || published[0];

  return (
    <>
      <InsHero
        kicker="Insights"
        title="Research"
        lead="Auvra’s research on language technology, oral documentation and AI that understands cultural context, published openly and credited to everyone who contributed."
        crumbs={[{ label: 'Insights', href: '/blog' }, { label: 'Research' }]}
      />

      <section className="wrap ins-block !pt-4 reveal" aria-label="Featured research">
        {featured ? <Featured item={featured} /> : <InPreparation />}
      </section>

      {listing}

      <section className="wrap ins-block reveal" aria-labelledby="prog-title">
        <div className="ins-head">
          <h2 id="prog-title" className="ins-h2">Where does the research go?</h2>
          <p className="ins-sub">Research at Auvra feeds two technology initiatives: one building tools people can use, and one asking longer-term questions.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <a href="/lens-ai" className="flex flex-col gap-4 rounded-[28px] bg-blue p-8 md:p-10 text-white no-underline max-md:items-center max-md:text-center">
            <Icon3D name="speech" size={56} />
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Lens AI</h3>
            <p className="text-[17px] text-[#DCD5FF]">Transcription, translation and tagging for cultural documentation, always reviewed by people.</p>
            <span className="font-semibold underline underline-offset-4">Explore Lens AI</span>
          </a>
          <a href="/a-chronos" className="flex flex-col gap-4 rounded-[28px] bg-teal p-8 md:p-10 text-white no-underline max-md:items-center max-md:text-center">
            <Icon3D name="globe" size={56} />
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">A-Chronos</h3>
            <p className="text-[17px] text-[#BFE0E1]">Foundational model research on cultural knowledge, context and the relationships between records.</p>
            <span className="font-semibold underline underline-offset-4">Explore A-Chronos</span>
          </a>
        </div>
      </section>

      <section className="wrap ins-block reveal" aria-labelledby="principles-title">
        <div className="ins-pub">
          <h2 id="principles-title" className="ins-h2">How does Auvra publish research?</h2>
          <ul className="ins-pub__list">
            <li><b>Real work only.</b> We publish research that has been carried out, with its methods and limits stated plainly.</li>
            <li><b>Contributors credited.</b> Communities, speakers and partners who contributed are named, with their consent.</li>
            <li><b>Consent and privacy.</b> Research follows our <a href="/ai-policy">AI Policy</a>: private content is never used without explicit consent.</li>
            <li><b>Open to scrutiny.</b> Every publication lists its references, and we welcome corrections through our <a href="/contact">Contact</a> page.</li>
          </ul>
        </div>
      </section>

      <FinalCta
        id="research-cta"
        title="Research culture with us."
        text="If you work on languages, archives or cultural heritage and would like to collaborate, we would like to hear from you."
        primary={{ href: '/contact', label: 'Contact us' }}
        secondary={{ href: '/institutional-access', label: 'Institutional access' }}
        tone="teal"
      />
    </>
  );
}
