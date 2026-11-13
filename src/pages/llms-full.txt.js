// llms-full.txt: long-form definitions and every FAQ answer, for AI answer engines.
import { SITE } from '../data/site.js';
import { COMPANY, DEFINITIONS } from '../data/definitions.js';
import { FAQ_GROUPS } from '../data/faqs.js';

export function GET() {
  const defs = Object.values(DEFINITIONS).map((d) => `### ${d.name}\n${d.long}`).join('\n\n');
  const faqs = FAQ_GROUPS.map((g) => `## ${g.title}\n\n` + g.items.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')).join('\n\n');
  const body = `# Auvra: full reference\n\nSource: ${SITE}\n\n${COMPANY.long}\n\n## Definitions\n\n${defs}\n\n# Frequently asked questions\n\n${faqs}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
