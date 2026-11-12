// FAQ page content, grouped by the PRD's categories (section 16).
// Answers marked `confirm: true` describe product status and must be checked by the Auvra team before launch.
// Per the agreed scope, the Collectible Badge fee is not shown on the public site.
export const FAQ_GROUPS = [
  {
    title: 'About Auvra',
    items: [
      { q: 'What is Auvra?', a: 'Auvra is a cultural technology company building the permanent home for human culture. We are developing the digital infrastructure that helps individuals, families, creators and communities preserve, own and pass down their cultural heritage and traditions across generations.' },
      { q: 'What problem is Auvra solving?', a: 'Much of the world\'s cultural knowledge lives in memories, conversations, family recordings, photographs and community practices, scattered across personal devices and informal channels. When the people holding it are no longer present, stories, languages and traditions can become difficult to recover. Auvra provides systems built for continuity, not temporary storage.' },
      { q: 'Who is Auvra building for?', a: 'Families, creators, communities, diaspora audiences, and museums and institutions. Each plays a different role in keeping culture alive, and Auvra is designed to support all of them.' },
      { q: 'Is Auvra only focused on African culture?', a: 'No. Auvra is building for human culture everywhere. Our work began in Africa, where many languages and oral traditions are underrepresented in existing technology, but the platform is open to every culture and community.' },
    ],
  },
  {
    title: 'Cultural Preservation',
    items: [
      { q: 'What can be preserved on Auvra?', a: 'Family histories and ancestral memories, oral histories and stories, languages and expressions, songs and performances, rituals and ceremonies, traditional knowledge and craftsmanship, historical accounts, photographs, recordings and documents.' },
      { q: 'Can families preserve their histories?', a: 'Yes. Families can record stories from parents and grandparents, keep photographs, recordings and documents together, and invite relatives to take part.' },
      { q: 'Can communities document cultural knowledge?', a: 'Yes. Cultural associations, local communities, language communities and heritage groups can document shared knowledge together, with every contribution attributed to the person who made it.' },
      { q: 'How does Auvra support cultural continuity?', a: 'Preserved records keep their original context and attribution, and later generations can discover them, learn from them and add their own contributions without erasing what came before.' },
    ],
  },
  {
    title: 'Contribution Badges',
    items: [
      { q: 'What is a Contribution Badge?', a: 'A Contribution Badge is a permanent, attributable record of a cultural contribution. It preserves the original record and its context while allowing additional knowledge to be documented alongside it.' },
      { q: 'What are the four contribution paths?', a: 'Contextual Validation, Memory & Oral Documentation, Physical & Digital Stewardship, and Cultural Continuation. Each describes a different way people help keep a cultural record complete and alive.' },
      { q: 'Can a contribution be corrected?', a: 'Yes, but corrections are added as new contributions with their own attribution. The original record is never silently replaced, so the history of what was documented stays visible.' },
      { q: 'How are contributions assessed?', a: 'Submitting a contribution, assessing it and issuing a badge are separate steps. The assessment process is still being finalised, and we will publish how it works before badges are issued.', confirm: true },
      { q: 'When are badges issued?', a: 'Badge issuance is not yet available. We will announce when it opens and update this answer.', confirm: true },
    ],
  },
  {
    title: 'Collectible Badges',
    items: [
      { q: 'What is a Collectible Badge?', a: 'A Collectible Badge lets a creator document, attribute and share a cultural expression, such as an artwork, a song or a craft, with its cultural context, as a digital or physical item.' },
      { q: 'Who can create one?', a: 'Creators who document and share cultural expressions: musicians, artists, storytellers, photographers, craft practitioners, performers and other cultural creators.' },
      { q: 'What can be represented?', a: 'Digital or physical cultural expressions, for example traditional artwork, music, cultural photography, craftsmanship and documented cultural practices, always presented with the creator\'s attribution and context.' },
      { q: 'How does claiming work?', a: 'Audiences discover a Collectible Badge, read its story and context, and claim it through the Auvra app. The creator stays credited wherever the badge goes.', confirm: true },
    ],
  },
  {
    title: 'My Vault',
    items: [
      { q: 'What is My Vault?', a: 'My Vault is a personal environment for keeping and organising important memories, recordings, documents and cultural materials, so individuals and families keep access to the things they do not want to lose.' },
      { q: 'Who can own a Vault?', a: 'Any Auvra user can create a Vault. The Vault owner chooses the subscription that applies to it.' },
      { q: 'How can family members be invited?', a: 'The Vault owner shares an invitation code. Family members download Auvra, enter the code and join the Vault.' },
      { q: 'Do invited members need a separate subscription?', a: 'No. Invited members join the owner\'s Vault through the invitation code and do not need their own subscription to join it.' },
      { q: 'What is the planned Personal AI OS?', a: 'Personal AI OS is a planned capability, not yet released. It is intended to help you understand and interact with information in your Vault, using only the information you have authorised it to access.' },
    ],
  },
  {
    title: 'Technology',
    items: [
      { q: 'What is Lens AI?', a: 'Lens AI is Auvra\'s AI initiative for cultural documentation. It supports transcription and translation of oral histories, language understanding, and the organisation of cultural knowledge. People can always review and edit what it produces.' },
      { q: 'What is A-Chronos?', a: 'A-Chronos is Auvra\'s foundational model research initiative focused on cultural heritage. It is a research and development effort, not a released product.' },
      { q: 'How does Auvra approach responsible AI?', a: 'AI at Auvra supports the people documenting culture; it does not replace their knowledge or authority. We work from consent, attribution, privacy, cultural context and human oversight. Read our AI Policy for details.' },
    ],
  },
  {
    title: 'Institutions',
    items: [
      { q: 'Can museums and institutions work with Auvra?', a: 'Yes. Museums, universities, archives, research organisations and cultural foundations can work with Auvra on cultural documentation, attribution and long-term preservation.' },
      { q: 'How can an organisation enquire about collaboration?', a: 'Apply through the Institutional Access page, or choose "Institutional collaboration" on our Contact form and tell us about your organisation.' },
    ],
  },
];
