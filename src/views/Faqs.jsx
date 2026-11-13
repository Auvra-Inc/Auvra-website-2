import { useMemo, useState } from 'react';
import { PageHero } from '../components/Page.jsx';
import Faq from '../components/Faq.jsx';
import { FAQ_GROUPS } from '../data/faqs.js';

export default function Faqs() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const groups = useMemo(() => {
    const term = q.trim().toLowerCase();
    return FAQ_GROUPS.filter((g) => cat === 'All' || g.title === cat)
      .map((g) => ({ ...g, items: g.items.filter((f) => !term || (f.q + ' ' + f.a).toLowerCase().includes(term)) }))
      .filter((g) => g.items.length);
  }, [cat, q]);
  return (
    <>
      <PageHero kicker="FAQs" title="Frequently asked questions" lead={<>Can't find what you need? <a href="/contact">Contact us</a> and we'll help.</>} />
      <section className="wrap faqs-page">
        <div className="faqs-tools">
          <label className="field faqs-search"><span className="sr-only">Search questions</span>
            <input type="search" placeholder="Search questions" value={q} onChange={(e) => setQ(e.target.value)} />
          </label>
          <div className="filters" role="group" aria-label="Filter by category">
            {['All', ...FAQ_GROUPS.map((g) => g.title)].map((t) => (
              <button key={t} type="button" className="filter" aria-pressed={cat === t} onClick={() => setCat(t)}>{t}</button>
            ))}
          </div>
        </div>
        {groups.length === 0 && <p className="empty">No questions match "{q}". Try another word, or <a href="/contact">ask us directly</a>.</p>}
        {groups.map((g) => (
          <div className="faq-group" key={g.title}>
            <h2 className="faq-group__title">{g.title}</h2>
            <Faq items={g.items} firstOpen={false} />
          </div>
        ))}
      </section>
    </>
  );
}
