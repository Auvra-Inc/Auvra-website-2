import { marked } from 'marked';

// Blog posts are Markdown files in src/content/blog (editable through the CMS at /admin).
// Frontmatter: title, slug, date, image, thumb (optional), imageAlt, category, description, author, authorBio.
// Parsed at build time; no Markdown code ships to the browser.
const files = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true });

function parse(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const data = {};
  (m ? m[1] : '').split(/\r?\n/).forEach((line) => {
    const i = line.indexOf(':');
    if (i < 1) return;
    let v = line.slice(i + 1).trim();
    if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) v = v.slice(1, -1).replace(/''/g, "'");
    data[line.slice(0, i).trim()] = v;
  });
  return { data, body: m ? m[2] : raw };
}
const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const POSTS = Object.entries(files)
  .map(([file, raw]) => {
    const { data, body } = parse(raw);
    const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    return {
      slug: data.slug || slugify(file.split('/').pop().replace(/\.md$/, '')),
      title: data.title, date: data.date, image: data.image, thumb: data.thumb || data.image,
      imageAlt: data.imageAlt || '', category: data.category || 'Company news', description: data.description || '',
      author: data.author || 'The Auvra Team',
      authorBio: data.authorBio || 'The Auvra team builds the permanent home for human culture from Lagos, Nigeria.',
      readingTime: Math.max(1, Math.round(words / 220)),
      html: marked.parse(body),
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export const formatDate = (d) => new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
