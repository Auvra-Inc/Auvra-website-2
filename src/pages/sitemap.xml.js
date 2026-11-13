// sitemap.xml built from every page in src/pages (dynamic routes expanded through their getStaticPaths).
import { SITE } from '../data/site.js';
const pages = import.meta.glob('./**/*.astro');

export async function GET() {
  const urls = [];
  for (const [file, load] of Object.entries(pages)) {
    const route = file.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '') || '/';
    if (route.includes('404')) continue;
    if (route.includes('[')) {
      const mod = await load();
      const paths = (await mod.getStaticPaths?.({ paginate: () => [] })) || [];
      for (const p of paths) {
        let r = route;
        for (const [k, v] of Object.entries(p.params || {})) r = r.replace(`[${k}]`, v);
        urls.push(r);
      }
    } else urls.push(route === '/index' ? '/' : route);
  }
  const unique = [...new Set(urls)].filter((u) => !u.startsWith('/admin')).sort();
  const today = new Date().toISOString().slice(0, 10);
  const pri = (u) => (u === '/' ? '1.0' : /^\/(about|lens-ai|a-chronos|badges|cultural-preservation|my-vault|auvra-passport|download)$/.test(u) ? '0.8' : u.startsWith('/blog') ? '0.7' : '0.5');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${unique.map((u) => `  <url><loc>${SITE}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod><priority>${pri(u)}</priority></url>`).join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
