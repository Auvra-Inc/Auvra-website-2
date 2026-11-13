import { useMemo, useState } from 'react';

// Fixed locale and time zone so prerendered HTML and the hydrated page agree.
export function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export const byDateDesc = (a, b) => String(b.date || '').localeCompare(String(a.date || ''));

// Search and category filtering for the listing pages.
export function useListing(items, fields) {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    return items
      .filter((it) => cat === 'All' || it.category === cat)
      .filter((it) => !term || fields(it).join(' ').toLowerCase().includes(term))
      .sort(byDateDesc);
  }, [items, cat, q, fields]);
  return { cat, setCat, q, setQ, results };
}

export function ListingTools({ id, label, placeholder, categories, cat, setCat, q, setQ, count, noun }) {
  return (
    <div className="ins-tools">
      <div className="ins-tools__row">
        <label className="field ins-search" htmlFor={`${id}-search`}>
          <span className="sr-only">{label}</span>
          <input id={`${id}-search`} type="search" placeholder={placeholder} value={q} onChange={(e) => setQ(e.target.value)} />
        </label>
        <p className="ins-count" aria-live="polite">{count} {count === 1 ? noun : `${noun}s`}</p>
      </div>
      <div className="filters" role="group" aria-label="Filter by category">
        {['All', ...categories.map((c) => c.name)].map((t) => (
          <button key={t} type="button" className="filter" aria-pressed={cat === t} onClick={() => setCat(t)}>{t}</button>
        ))}
      </div>
    </div>
  );
}

// Long-form body: an ordered list of { type: 'p' | 'h2' | 'quote', text, cite? } blocks.
export function Body({ blocks = [] }) {
  return blocks.map((b, i) => {
    if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
    if (b.type === 'quote') return (
      <blockquote key={i} className="ins-quote">
        <p>{b.text}</p>
        {b.cite && <cite>{b.cite}</cite>}
      </blockquote>
    );
    return <p key={i}>{b.text}</p>;
  });
}

export const names = (people = []) => people.map((p) => p.name).join(', ');
