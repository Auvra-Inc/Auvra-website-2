// Builds sitemap.xml from the pages in src/pages, including dynamic blog posts.
const SITE = 'https://goauvra.com';
const pages = import.meta.glob('./**/*.astro');

export async function GET() {
  const urls = [];
  for (const [file, load] of Object.entries(pages)) {
    const route = file.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '/').replace(/^\/index$/, '/');
    if (route.includes('404')) continue;
    if (route.includes('[')) {
      const mod = await load();
      if (typeof mod.getStaticPaths !== 'function') continue;
      const paths = await mod.getStaticPaths({ paginate: () => [] });
      for (const p of paths) {
        let r = route;
        for (const [k, v] of Object.entries(p.params || {})) r = r.replace(`[${k}]`, v);
        urls.push(r);
      }
      continue;
    }
    urls.push(route === '' ? '/' : route);
  }
  urls.sort();
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${SITE}${u}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
