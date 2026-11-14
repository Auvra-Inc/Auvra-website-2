// llms.txt: a plain-text summary for AI answer engines (AEO / GEO). Not linked from the visible site.
import { SITE, CONTACT_EMAIL, SUPPORT_EMAIL, SOCIAL } from '../data/site.js';
import { COMPANY, DEFINITIONS } from '../data/definitions.js';
import { POSTS } from '../data/posts.js';

const pages = [
  ['/', 'Home: what Auvra is and how it works'],
  ['/about', 'About Auvra: story, mission, vision and C.U.L.T.U.R.E. values'],
  ['/cultural-preservation', 'Cultural Preservation'],
  ['/badges', 'Cultural Badges: Contribution Badges and Collectible Badges'],
  ['/my-vault', 'My Vault'],
  ['/auvra-passport', 'Auvra Passport'],
  ['/lens-ai', 'Lens AI, including Scan'],
  ['/a-chronos', 'A-Chronos foundational model research'],
  ['/institutional-access', 'Institutional Access for museums, archives and government bodies'],
  ['/faqs', 'Frequently asked questions'],
  ['/blog', 'Blog'],
  ['/contact', 'Contact'],
];

export function GET() {
  const defs = Object.values(DEFINITIONS).map((d) => `- **${d.name}**: ${d.short}`).join('\n');
  const body = `# Auvra

> ${COMPANY.long}

Auvra Tech Ltd, operating under the brand name Auvra, is a registered Nigerian company (RC Number: 8895504). It helps families, creators, communities, diaspora audiences and institutions preserve stories, languages and traditions as credited records and pass them down. The Auvra app is built for iPhone and Android.

## Products and technology
${defs}

## Key pages
${pages.map(([u, t]) => `- [${t}](${SITE}${u === '/' ? '/' : u})`).join('\n')}

## Articles
${POSTS.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.description || ''}`).join('\n')}

## Policies
- [Terms of Service](${SITE}/terms)
- [Privacy Policy](${SITE}/privacy)
- [AI Policy](${SITE}/ai-policy)
- [Community Guidelines](${SITE}/community)

## Contact
- General enquiries: ${CONTACT_EMAIL}
- Support: ${SUPPORT_EMAIL}
${SOCIAL.map((s) => `- ${s.label}: ${s.href}`).join('\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
