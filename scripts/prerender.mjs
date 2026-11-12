// Renders every route to static HTML after `vite build`, with its own title, meta tags and JSON-LD.
// Also writes sitemap.xml. Run via `npm run build`.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, routes, notFound, SITE } = await import(path.join(root, 'dist-server', 'entry-server.js'));
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const ORG = {
  '@context': 'https://schema.org', '@type': 'Organization', name: 'Auvra', legalName: 'Auvra Tech Ltd', url: SITE,
  logo: `${SITE}/brand/auvra-logo-carbon.svg`, email: 'hello@goauvra.com',
  sameAs: ['https://www.instagram.com/goauvra', 'https://x.com/goauvra', 'https://www.linkedin.com/company/auvra/'],
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
};

function head(r, url) {
  const canonical = SITE + (url === '/' ? '/' : url);
  const image = SITE + (r.image || '/og-image.jpg');
  const ld = [ORG, ...(r.jsonld || [])];
  return [
    `<title>${esc(r.title)}</title>`,
    `<meta name="description" content="${esc(r.description)}" />`,
    `<meta name="keywords" content="Auvra, cultural preservation, Lens AI, oral history, African languages, transcription, translation, heritage, family history, diaspora" />`,
    url === '/404' ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`, `<meta property="og:site_name" content="Auvra" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`, `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`, `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`, `<meta name="twitter:title" content="${esc(r.title)}" />`,
    `<meta name="twitter:description" content="${esc(r.description)}" />`, `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
}

const pages = [...routes.map((r) => [r.path, r]), ['/404', notFound]];
for (const [url, r] of pages) {
  const html = template.replace('<!--app-head-->', head(r, url)).replace('<!--app-html-->', render(url));
  const file = url === '/' ? path.join(dist, 'index.html') : url === '/404' ? path.join(dist, '404.html') : path.join(dist, url, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}
const urls = routes.map((r) => `  <url><loc>${SITE}${r.path === '/' ? '/' : r.path}</loc></url>`).join('\n');
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
fs.rmSync(path.join(root, 'dist-server'), { recursive: true, force: true });
console.log(`Prerendered ${pages.length} pages and sitemap.xml`);
