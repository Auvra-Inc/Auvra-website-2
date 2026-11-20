// FAQ page content, grouped by the PRD's categories (section 16).
// Answers marked `confirm: true` describe product status and must be checked by the Auvra team before launch.
// Per the agreed scope, any Heirloom Badge fee is not shown on the public site.
export const FAQ_GROUPS = [
  {
    title: 'About Auvra',
    items: [
      { q: 'What is Auvra?', a: 'Auvra is a cultural technology platform building the permanent home for human culture. We are developing the digital infrastructure that helps individuals, families, creators and communities preserve, own and pass down their cultural heritage and traditions across generations.' },
      { q: 'What problem is Auvra solving?', a: 'Much of the world\'s cultural knowledge lives in memories, conversations, family recordings, photographs and community practices, scattered across personal devices and informal channels. When the people holding it are no longer present, stories, languages and traditions can become difficult to recover. Auvra provides systems built for continuity, not temporary storage.' },
      { q: 'Who can use Auvra?', a: 'Anyone aged 12 or over. If you are under the age of majority in your country (18 in most countries), you need the consent of a parent or legal guardian. Every user has an Auvra wallet linked to their Auvra Passport, which keeps their activity attributed to them. Using the wallet for transactions, such as claiming Heirloom Badges, is optional and available only to adults who have completed identity verification (KYC).' },
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
    title: 'Cultural Badges',
    items: [
      { q: 'What is a Badge?', a: 'Auvra has two public badges. A Contribution Badge recognises cultural and communal contributions that belong to people and communities, such as languages, dance, artifacts, food, traditions and music. An Heirloom Badge represents a creator’s original creative work, published for Explorers to discover and claim.' },
      { q: 'What are Auvra’s three core experiences?', a: 'Contribution Badges (public) recognise cultural contributions that belong to people and communities. Heirloom Badges (public) represent creative works published by creators for Explorers to discover and claim. My Vault (private) is a personal space for preserving your own memories, collections, documents and recordings.' },
      { q: 'What is the difference between Contribution Badges and Heirloom Badges?', a: 'Contribution Badges recognise cultural heritage that belongs to people and communities; they cannot be bought or claimed, and people take part through the four contribution paths. Heirloom Badges are published by creators for their own works, which Explorers can discover and claim.' },
    ],
  },
  {
    title: 'Contribution Badges',
    items: [
      { q: 'What is a Contribution Badge?', a: 'A Contribution Badge recognises cultural and communal contributions that belong to people and communities, such as languages, dance, artifacts, food, traditions and music. It honours what communities have created, preserved and passed down, and gives those contributions a lasting record within Auvra. It cannot be bought or claimed.' },
      { q: 'What are the four contribution paths?', a: 'Contextual Validation (adding knowledge and context), Memory & Oral Documentation (sharing memories, oral histories and stories), Physical & Digital Stewardship (preserving cultural materials, artifacts and records) and Cultural Continuation (practising, teaching and continuing traditions). They are the ways people contribute, not separate badge types.' },
      { q: 'Can a Contribution Badge be bought or claimed?', a: 'No. Contribution Badges recognise heritage that belongs to people and communities, so they cannot be bought or claimed. People take part by contributing through the four paths.' },
      { q: 'Can a contribution be corrected?', a: 'Yes, but corrections are added as new contributions with their own attribution. The original record is never silently replaced, so the history of what was documented stays visible.' },
    ],
  },
  {
    title: 'Heirloom Badges',
    items: [
      { q: 'What is an Heirloom Badge?', a: 'An Heirloom Badge represents a creator’s original cultural or creative work made available within Auvra, such as music, photography, artwork, storytelling, crafts or literature. It is published by the creator and can be discovered and claimed by Explorers.' },
      { q: 'Who publishes Heirloom Badges?', a: 'Creators publish them for their own works: musicians, photographers, artists, storytellers, craft practitioners, writers and other cultural creators.' },
      { q: 'Who are Explorers?', a: 'Explorers are people on Auvra who discover creative and cultural works and claim the Heirloom Badges that hold meaning for them, building their own collections.' },
      { q: 'What can be represented?', a: 'Digital or physical cultural expressions, for example traditional artwork, music, cultural photography, craftsmanship and documented cultural practices, always presented with the creator\'s attribution and context.' },
      { q: 'How does claiming work?', a: 'Explorers discover an Heirloom Badge, read its story and context, and claim it through the Auvra app. The creator stays credited wherever the badge goes.', confirm: true },
    ],
  },
  {
    title: 'My Vault',
    items: [
      { q: 'What is My Vault?', a: 'My Vault is a personal environment for keeping and organising important memories, recordings, documents and cultural materials, so individuals and families keep access to the things they do not want to lose.' },
      { q: 'Who can own a Vault?', a: 'Any Auvra user can create a Vault. The Vault owner chooses the subscription that applies to it.' },
      { q: 'How can family members be invited?', a: 'The Vault owner shares an invitation code. Family members download Auvra, enter the code and join the Vault.' },
      { q: 'Do invited members need a separate subscription?', a: 'No. Invited members join the owner\'s Vault through the invitation code and do not need their own subscription to join it.' },
    ],
  },
  {
    title: 'Technology',
    items: [
      { q: 'What is Lens AI?', a: 'Lens AI is Auvra\'s AI initiative for cultural documentation. It supports transcription and translation of oral histories, language understanding, and the organisation of cultural knowledge. People can always review and edit what it produces.' },
      { q: 'What is A-Chronos?', a: 'A-Chronos is Auvra\'s foundational model research initiative focused on cultural heritage.' },
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
