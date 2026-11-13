export const SITE = 'https://www.goauvra.com';

// Central content and link config. Change store links here once the apps are live.
export const STORE = {
  // TODO(Emmanuel): replace with the live App Store / Google Play listing URLs.
  // Until then both buttons open /download, which says the apps are coming soon.
  appStore: '/download',
  googlePlay: '/download',
  live: false,
};

export const CONTACT_EMAIL = 'hello@goauvra.com';
export const PARTNERSHIPS_EMAIL = 'partnerships@goauvra.com';

export const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/goauvra' },
  { label: 'X', href: 'https://x.com/goauvra' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/auvra/' },
];

// Explore Auvra is the primary call to action across the site.
export const EXPLORE_HREF = '/download';

// Main navigation (PRD section 5.1). Who We Serve items are homepage anchors, not separate pages.
export const NAV = [
  { title: 'Company', links: [{ label: 'About Auvra', href: '/about' }] },
  { title: 'Technology', links: [{ label: 'Lens AI', href: '/lens-ai' }, { label: 'A-Chronos', href: '/a-chronos' }] },
  { title: 'Insights', links: [{ label: 'Blog', href: '/blog' }, { label: 'Cultural Stories', href: '/cultural-stories' }, { label: 'Research', href: '/research' }] },
];

// Product pages, linked from the homepage ecosystem cards and contextual links (not a nav category).
export const PRODUCTS = [
  { label: 'Cultural Preservation', href: '/cultural-preservation' },
  { label: 'Contribution Badges', href: '/contribution-badges' },
  { label: 'Collectible Badges', href: '/collectible-badges' },
  { label: 'My Vault', href: '/my-vault' },
  { label: 'Auvra Passport', href: '/auvra-passport' },
];

export const FOOTER = [
  {
    title: 'Trust & Safety',
    links: [
      { label: 'Community Guidelines', href: '/community' },
      { label: 'Content Governance', href: '/governance' },
      { label: 'Copyright Policy', href: '/copyright' },
      { label: 'AI Policy', href: '/ai-policy' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'AML / CFT Policy', href: '/aml' },
      { label: 'Collaboration Terms', href: '/collab' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Contact us', href: '/contact' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
];

export const HOME_FAQS = [
  {
    q: 'What is Auvra?',
    a: 'Auvra is an AI-powered cultural preservation platform where families, creators and communities preserve stories, languages and traditions as permanent, credited records, and pass them down.',
  },
  {
    q: 'What does Lens AI do?',
    a: 'Lens AI transcribes and translates oral histories, tags cultural items and makes archives searchable. You can always review and edit what it produces.',
  },
  { q: 'Who is Auvra for?', a: 'Families, diaspora families, creators, communities, and museums and institutions.' },
  {
    q: 'How much does Auvra cost?',
    a: 'Auvra is free to start. Families and communities that need more can choose a plan inside the app, and invited family members always join free.',
  },
  {
    q: "Is my family's content private?",
    a: 'Yes. Your Vault is private by default, and only the people you invite can see it.',
  },
  { q: 'How do I contact you?', a: 'Email hello@goauvra.com or use the form on our Contact page.' },
];

export const MORE_FAQS = [
  {
    q: 'Which languages does Lens AI support?',
    a: 'Lens AI starts with African languages, English and French, and the list grows as communities contribute recordings. You can always review and correct a transcript or translation.',
  },
  {
    q: 'Can I edit what Lens AI writes?',
    a: 'Yes. Every transcript, translation and tag can be reviewed and edited by the person who shared the memory.',
  },
  {
    q: 'How do I invite my family?',
    a: 'Create a Vault in the app and share its invite code. Family members download Auvra, enter the code and join for free.',
  },
  {
    q: 'What happens to sacred or restricted knowledge?',
    a: 'Communities decide who can see their records. Sacred knowledge stays with its community and is never made public without their permission.',
  },
  {
    q: 'Can a museum or government body use Auvra?',
    a: 'Yes. Institutions can apply for Institutional Access to preserve and search their archives with Lens AI.',
  },
  {
    q: 'Who owns what I upload?',
    a: 'You do. Every memory stays credited to the person who shared it. See our Terms of Service and Copyright Policy for the details.',
  },
];

const p = (name) => ({ src: `/images/photos/${name}-960.webp`, thumb: `/images/photos/${name}-480.webp` });

// TODO(Emmanuel): confirm consent and photographer credit for each photo before launch.
export const GALLERY = [
  { ...p('emir'), alt: 'A man in a white turban and royal robes', caption: 'Royal regalia', place: 'Northern Nigeria', credit: 'Photographer credit pending' },
  { ...p('elder-drummer'), alt: 'An elder in white robes holds a drumstick at a festival', caption: 'Elder drummer', place: 'Nigeria', credit: 'Photographer credit pending' },
  { ...p('beadwork'), alt: 'A smiling woman wearing a red gele and coral beadwork', caption: 'Woman in beadwork', place: 'Nigeria', credit: 'Photographer credit pending' },
  { ...p('hands-braid'), alt: 'An older hand braiding a child\'s hair', caption: 'Hands that pass it down', place: 'Lagos', credit: 'Photographer credit pending' },
  { ...p('drummer-blue'), alt: 'A man in blue adire plays a talking drum', caption: 'Talking drum player', place: 'South-West Nigeria', credit: 'Photographer credit pending' },
  { ...p('mask'), alt: 'A person in a carved wooden mask and woven cloth', caption: 'Carved mask', place: 'West Africa', credit: 'Photographer credit pending' },
  { ...p('sculpture'), alt: 'A man shapes a carved wooden sculpture beside a lake', caption: 'Sculptor at work', place: 'West Africa', credit: 'Photographer credit pending' },
  { ...p('coral-beads'), alt: 'Dancers in red caps and coral beads at a festival', caption: 'Festival dancers', place: 'South-East Nigeria', credit: 'Photographer credit pending' },
];

export const RIBBON = ['coral-beads', 'drummer-blue', 'masquerade', 'gele', 'white-agbada', 'emir', 'singers', 'red-cap', 'mask', 'elder-drummer', 'young-man', 'beadwork'].map((n) => ({
  ...p(n),
}));

export const MOVEMENT = [
  { ...p('young-man'), alt: 'A young man in traditional wrapper and coral beads' },
  { ...p('singers'), alt: 'Women in patterned cloth singing together' },
  { ...p('elder'), alt: 'An elder in a feathered cap at a ceremony' },
  { ...p('beaded-hair'), alt: 'A woman wearing a beaded headdress' },
  { ...p('drums'), alt: 'Drummers playing at a festival' },
];

export const DRIFT = ['dancers', 'procession', 'singers', 'face-paint', 'drummers-row', 'crowd', 'shrine', 'coral-beads', 'gele', 'red-cap', 'drum-street', 'village'].map((n) => p(n).thumb);
