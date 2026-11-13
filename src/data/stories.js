// Cultural Stories, rendered at /cultural-stories and /cultural-stories/<slug>.
//
// There are no published stories yet. Add a story only once it has been documented with
// its community, the contributor has given consent, and attribution has been confirmed.
// Every entry below becomes its own prerendered page (see src/routes/insights.jsx).
//
// Shape of one story:
// {
//   title:           string    Story title.
//   slug:            string    URL segment, lowercase-with-hyphens, unique. Page lives at /cultural-stories/<slug>.
//   category:        string    One of STORY_CATEGORIES[].name below.
//   summary:         string    One or two sentences for cards, search and the meta description.
//   culturalContext: string    Who this knowledge belongs to and why it matters, in the community's own framing.
//   location:        string?   Optional. Region, town or place, only where the community is comfortable sharing it.
//   community:       string?   Optional. Community, people or family the story comes from.
//   contributor:     { name: string, role?: string }   The person or group who shared the story (always credited).
//   author:          { name: string, role?: string }?  Optional. Who wrote it up, if different from the contributor.
//   date:            string    Publication date, ISO format 'YYYY-MM-DD'.
//   cover:           { src: string, alt: string, credit?: string }   Cover image. Use /images/... paths.
//   gallery:         Array<{ src: string, alt: string, caption?: string, credit?: string }>   May be empty.
//   sources:         Array<{ label: string, href?: string }>   References, recordings, archives, interviews.
//   body:            Array<{ type: 'p' | 'h2' | 'quote', text: string, cite?: string }>   Long-form content, in order.
//   featured:        boolean?  Optional. The first featured story is shown at the top of the listing.
// }
//
// Example (commented out on purpose; it is a template, not a real story):
//
// {
//   title: 'Example: The song sung at every naming ceremony',
//   slug: 'example-naming-ceremony-song',
//   category: 'Ceremonies',
//   summary: 'One or two sentences describing the story for cards and search.',
//   culturalContext: 'Where this practice comes from, who keeps it, and what it means to them.',
//   location: 'Region or town (optional)',
//   community: 'Community name (optional)',
//   contributor: { name: 'Contributor name', role: 'Family elder' },
//   author: { name: 'Auvra Stories team' },
//   date: '2027-01-15',
//   cover: { src: '/images/photos/singers-960.webp', alt: 'Describe what the image shows', credit: 'Photographer name' },
//   gallery: [{ src: '/images/photos/drums-960.webp', alt: 'Describe what the image shows', caption: 'Caption', credit: 'Photographer name' }],
//   sources: [{ label: 'Recorded conversation with the contributor, January 2027' }],
//   body: [
//     { type: 'p', text: 'Opening paragraph.' },
//     { type: 'h2', text: 'A subheading' },
//     { type: 'quote', text: 'A passage in the contributor’s own words.', cite: 'Contributor name' },
//   ],
//   featured: true,
// },

export const STORY_CATEGORIES = [
  { name: 'Oral histories', blurb: 'Memories and accounts passed on by voice, in the words of the people who lived or inherited them.' },
  { name: 'Ancestral stories', blurb: 'Origin stories, lineages and the tales families tell about where they come from.' },
  { name: 'Indigenous languages', blurb: 'Words, sayings and ways of speaking that carry a people’s understanding of the world.' },
  { name: 'Traditional craftsmanship', blurb: 'Weaving, carving, beadwork, dyeing and the knowledge held in skilled hands.' },
  { name: 'Ceremonies', blurb: 'Rites of passage, festivals and gatherings, shared only as their custodians allow.' },
  { name: 'Music & performance', blurb: 'Songs, drumming, dance and masquerade, and the meanings that travel with them.' },
  { name: 'Family & community histories', blurb: 'How families, towns and communities came to be, and what they want remembered.' },
];

export const STORIES = [];
