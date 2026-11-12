import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Server build bundles every page body; the browser loads each one only when it is visited.
// (entry-server.jsx puts the bundled bodies on globalThis.__AUVRA_HTML__ for prerendering.)
const lazy = import.meta.glob('../content/html/*.html', { query: '?raw', import: 'default' });
const cache = {};

// Renders a pre-written page body (policy pages, blog posts) and routes its internal links client-side.
export default function HtmlPage({ name }) {
  const key = `../content/html/${name}.html`;
  const navigate = useNavigate();
  const [html, setHtml] = useState(() => {
    if (typeof document === 'undefined') return globalThis.__AUVRA_HTML__?.[key] || '';
    if (cache[key]) return cache[key];
    // On first load the prerendered markup is already in the page: reuse it while hydrating.
    const el = document.querySelector(`.html-page[data-page="${name}"]`);
    return el ? el.innerHTML : '';
  });
  useEffect(() => {
    if (cache[key]) { setHtml(cache[key]); return; }
    let live = true;
    lazy[key]?.().then((s) => { cache[key] = s; if (live) setHtml(s); });
    return () => { live = false; };
  }, [key]);
  const onClick = (e) => {
    const a = e.target.closest('a');
    if (!a || a.target || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    const href = a.getAttribute('href') || '';
    if (href.startsWith('/') && !href.startsWith('//')) { e.preventDefault(); navigate(href); }
  };
  return <div className="html-page" data-page={name} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />;
}
