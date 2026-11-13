// Research publications, rendered at /research and /research/<slug>.
//
// Nothing has been published yet. Add an entry only for real work that Auvra has released.
// Every entry below becomes its own prerendered page (see src/routes/insights.jsx).
//
// Shape of one publication:
// {
//   title:      string    Publication title.
//   slug:       string    URL segment, lowercase-with-hyphens, unique. Page lives at /research/<slug>.
//   category:   string    One of RESEARCH_CATEGORIES[].name below.
//   type:       string    e.g. 'Paper', 'Working paper', 'Technical report', 'Research note'.
//   summary:    string    One or two sentences for cards, search and the meta description.
//   abstract:   string    The abstract, shown at the top of the publication page.
//   authors:    Array<{ name: string, affiliation?: string }>   Listed in publication order.
//   team:       string?   Optional. Team or programme, e.g. 'Lens AI' or 'A-Chronos'.
//   date:       string    Publication date, ISO format 'YYYY-MM-DD'.
//   cover:      { src: string, alt: string }?   Optional cover image.
//   pdf:        string?   Optional. Path or URL of the downloadable file, e.g. '/research/<slug>.pdf'.
//   content:    Array<{ type: 'p' | 'h2' | 'quote', text: string, cite?: string }>   Body, in order.
//   figures:    Array<{ src: string, alt: string, caption: string }>   May be empty.
//   references: Array<{ text: string, href?: string }>   Full citations, in order.
//   featured:   boolean?  Optional. The first featured entry is shown at the top of the listing.
// }
//
// Example (commented out on purpose; it is a template, not a real publication):
//
// {
//   title: 'Example: Notes on documenting oral histories with communities',
//   slug: 'example-documenting-oral-histories',
//   category: 'Oral documentation',
//   type: 'Research note',
//   summary: 'One or two sentences describing the work.',
//   abstract: 'The abstract as published.',
//   authors: [{ name: 'Author name', affiliation: 'Auvra' }],
//   team: 'Lens AI',
//   date: '2027-03-01',
//   pdf: '/research/example-documenting-oral-histories.pdf',
//   content: [{ type: 'h2', text: 'Introduction' }, { type: 'p', text: 'Body text.' }],
//   figures: [{ src: '/images/research/example-figure.webp', alt: 'Describe the figure', caption: 'Figure 1. Caption.' }],
//   references: [{ text: 'Full citation.', href: 'https://example.org' }],
//   featured: true,
// },

export const RESEARCH_CATEGORIES = [
  { name: 'Language technology', blurb: 'Speech and language work for indigenous and underrepresented languages.' },
  { name: 'Oral documentation', blurb: 'Methods for recording, transcribing and translating spoken heritage with care.' },
  { name: 'Cultural knowledge representation', blurb: 'How records, context and the relationships between them can be modelled. Home of A-Chronos research.' },
  { name: 'Responsible AI', blurb: 'Consent, attribution, privacy and human oversight in cultural technology.' },
  { name: 'Preservation & archives', blurb: 'Long-term care of cultural records, and how people find them again.' },
];

export const RESEARCH = [];
