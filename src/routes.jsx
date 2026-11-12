import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Faqs from './pages/Faqs.jsx';
import Download from './pages/Download.jsx';
import InstitutionalAccess from './pages/InstitutionalAccess.jsx';
import NotFound from './pages/NotFound.jsx';
import HtmlPage from './components/HtmlPage.jsx';
import { HOME_FAQS } from './data/site.js';
import { FAQ_GROUPS } from './data/faqs.js';
import productRoutes from './routes/products.jsx';
import technologyRoutes from './routes/technology.jsx';
import insightRoutes from './routes/insights.jsx';

export const SITE = 'https://goauvra.com';
const DEFAULT = {
  title: 'Auvra · AI-powered cultural preservation platform',
  description: 'Auvra is an AI-powered platform for preserving human culture. Record stories, languages and oral histories as permanent records, with Lens AI transcription.',
};
const faqLd = (items) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
const html = (name) => function Page() { return <HtmlPage name={name} />; };

export const POSTS = [
  { slug: 'introducing-auvra', title: 'Introducing Auvra: The Permanent Home for Human Culture', description: 'Why we are building Auvra: a permanent home where families, creators and communities can preserve stories, languages and traditions.', date: '2026-05-22', image: '/images/blog/introducing-auvra.webp' },
  { slug: 'auvra-joins-nvidia-inception-program-to-accelerate-ai-for-cultural-preservation', title: 'Auvra Joins NVIDIA Inception Program to Accelerate AI for Cultural Preservation', description: 'Auvra has joined the NVIDIA Inception program to accelerate Lens AI for cultural preservation.', date: '2026-06-01', image: '/images/blog/nvidia-inception.webp' },
];

export const routes = [
  { path: '/', Component: Home, ...DEFAULT, jsonld: [faqLd(HOME_FAQS)] },
  { path: '/contact', Component: Contact, title: 'Contact · Auvra', description: 'Contact the Auvra team about Auvra, partnerships, institutional collaboration, the press or support.' },
  { path: '/faqs', Component: Faqs, title: 'FAQs · Auvra', description: 'Answers about Auvra, cultural preservation, Contribution Badges, Collectible Badges, My Vault, Lens AI, A-Chronos and institutions.', jsonld: [faqLd(FAQ_GROUPS.flatMap((g) => g.items))] },
  { path: '/download', Component: Download, title: 'Explore Auvra · Download the app', description: 'Get Auvra for iPhone and Android and start preserving your family\'s stories, languages and traditions.' },
  { path: '/institutional-access', Component: InstitutionalAccess, title: 'Institutional Access · Auvra', description: 'Museums, archives, universities and government bodies can apply to work with Auvra on cultural preservation.' },
  { path: '/about', Component: html('about'), title: 'About Auvra', description: 'Auvra is a cultural technology company building the permanent home for human culture.' },
  { path: '/blog', Component: html('blog'), title: 'Blog · Auvra', description: 'Company updates, product developments, announcements and perspectives from Auvra.' },
  ...POSTS.map((p) => ({
    path: `/blog/${p.slug}`, Component: html(`blog__${p.slug}`), title: `${p.title} · Auvra`, description: p.description, image: p.image,
    jsonld: [{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.description, datePublished: p.date, image: SITE + p.image, author: { '@type': 'Organization', name: 'Auvra' }, publisher: { '@type': 'Organization', name: 'Auvra' } }],
  })),
  ...productRoutes,
  ...technologyRoutes,
  ...insightRoutes,
  { path: '/community', Component: html('community'), title: 'Community Guidelines · Auvra', description: 'How to take part respectfully on Auvra, including cultural sensitivity, boundaries and reporting concerns.' },
  { path: '/governance', Component: html('governance'), title: 'Content Governance · Auvra', description: 'How Auvra handles content, attribution, preservation integrity, contributions, corrections and disputes.' },
  { path: '/copyright', Component: html('copyright'), title: 'Copyright Policy · Auvra', description: 'Copyright ownership, creator rights, permissions and how to report infringement on Auvra.' },
  { path: '/ai-policy', Component: html('ai-policy'), title: 'AI Policy · Auvra', description: 'How Auvra uses AI, including Lens AI, human oversight, consent, privacy and attribution.' },
  { path: '/terms', Component: html('terms'), title: 'Terms of Service · Auvra', description: 'The terms that govern your use of Auvra.' },
  { path: '/privacy', Component: html('privacy'), title: 'Privacy Policy · Auvra', description: 'How Auvra collects, uses and protects your personal information.' },
  { path: '/aml', Component: html('aml'), title: 'AML / CFT Policy · Auvra', description: 'Auvra\'s anti-money laundering and counter-terrorist financing policy.' },
  { path: '/collab', Component: html('collab'), title: 'Collaboration Terms · Auvra', description: 'Terms for collaboration and partnership on Auvra.' },
];

export const notFound = { path: '*', Component: NotFound, title: 'Page not found · Auvra', description: 'This page could not be found.' };

export function metaFor(pathname) {
  const p = pathname.replace(/\/+$/, '') || '/';
  return routes.find((r) => r.path === p) || notFound;
}
