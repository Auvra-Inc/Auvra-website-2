import Icon3D from '../components/Icon3D.jsx';
import { Status } from '../components/Page.jsx';
import { COMPANY, DEFINITIONS } from '../data/definitions.js';
import { EXPLORE_HREF } from '../data/site.js';
import { H1, H2, H2_SM, LEAD, Crumbs, Photo, Kicker, QA, FaqList, FinalCta } from './editorial.jsx';

export const ABOUT_FAQS = [
  { q: 'What is Auvra?', a: COMPANY.long },
  { q: 'Why was Auvra established?', a: 'Auvra was established because so much cultural knowledge lives in memories, voices and scattered files that were never made to last. The tools people rely on were built for attention and engagement, not for permanence, and Auvra exists to build a home designed for culture to endure.' },
  { q: 'Who is Auvra for?', a: 'Individuals, families, diaspora families, creators, communities, and museums and institutions. Each plays a different part in keeping culture alive, and Auvra is designed to support all of them.' },
  { q: 'Is Auvra only focused on African culture?', a: 'No. Auvra is building for human culture everywhere. Our work began in Africa, where many languages and oral traditions are underrepresented in existing technology, but Auvra is open to every culture and community.' },
  { q: 'What is Auvra’s mission?', a: 'To make it possible for human cultural knowledge, memories, traditions and creative expressions to be preserved, attributed, understood and passed down across generations.' },
];

const STORY = [
  {
    id: 'why',
    q: 'Why was Auvra established?',
    a: 'Auvra began with a simple belief: the voices we record now will speak to generations not yet born.',
    body: [
      'Yet most of what families and communities know has never been written down. It lives in the memory of elders, in voice notes and videos on phones, in albums, drawers and boxes of letters. The platforms people trusted with these things were built for engagement and fleeting attention, not for permanence. When a device is lost or a service closes, what was kept there can go with it.',
      'We refused to accept that. Auvra was established to build a home designed for culture to endure: not as a relic, not as a file, but as something that lives.',
    ],
  },
  {
    id: 'problem',
    q: 'What problem does Auvra address?',
    a: 'Cultural knowledge is fragile because it is scattered, unattributed and easily separated from its context.',
    body: [
      'When the people who carry a language, a song, a ritual or a technique are no longer present, that knowledge can become very hard to recover. Even when something is recorded, it is often shared without the name of the person who gave it, or stripped of the story of where it came from and what it means.',
      'Human culture needs more than temporary storage. It needs systems that keep records together with their origins, credit the people who contributed them, and let later generations add what they know without erasing what came before.',
    ],
  },
];

const SERVES = [
  ['Individuals & families', 'Keep the stories, recordings and photographs that hold a family together.', '/#families'],
  ['Diaspora', 'Stay connected to languages and origins across distance and generations.', '/#diaspora'],
  ['Creators', 'Document, attribute and share cultural expressions with their context.', '/#creators'],
  ['Communities', 'Preserve collective knowledge, identity and traditions together.', '/#communities'],
  ['Museums & institutions', 'Support documentation, attribution and long-term preservation.', '/institutional-access'],
];

const PRODUCTS = [
  { n: '01', name: 'Cultural Preservation', href: '/cultural-preservation', chip: '#024B50', text: DEFINITIONS.culturalPreservation.short },
  { n: '02', name: 'Contribution Badges', href: '/badges#contribution', chip: '#4A281C', text: DEFINITIONS.contributionBadges.short },
  { n: '03', name: 'Creator Badges', href: '/badges#creator', chip: '#0B6A70', text: DEFINITIONS.creatorBadges.short },
  { n: '04', name: 'My Vault', href: '/my-vault', chip: '#1C1A18', text: DEFINITIONS.myVault.short },
  { n: '05', name: 'Auvra Passport', href: '/auvra-passport', chip: '#C2563F', text: DEFINITIONS.auvraPassport.short },
];

const VALUES = [
  ['Cultural Integrity', 'We treat cultural heritage with the utmost respect and reverence. We prioritise authentic storytelling, verifiable provenance and ethical representation in everything we do.'],
  ['Universal Access', 'We believe the tools to preserve and celebrate culture should be available to all. We break down technological and financial barriers through seamless design, affordable plans and local payment options.'],
  ['Lasting Stewardship', 'We are builders for the long term. We create sustainable models for creators and design digital records meant to be cherished and preserved for generations to come.'],
  ['Trust Through Transparency', 'We operate with honesty and clarity. From onboarding to how records are kept and credited, we build trust by being open about our processes and holding ourselves to the highest ethical standards.'],
  ['User Empowerment', 'We design with deep empathy for our users. We empower creators to own their narrative and earn from their work, and we help audiences discover, connect and offer meaningful support.'],
  ['Respectful Collaboration', 'We believe in the power of community. We foster meaningful connections between creators, families and communities, and work together to build an ecosystem that benefits everyone.'],
  ['Excellence in Craft', 'We honour culture through excellence. We pursue beautiful, immersive and museum-quality design in every detail of our product, from the narrative to the interface.'],
];

const PRINCIPLES = [
  ['Permanence', 'Cultural knowledge should endure.', 'We design for decades, not product cycles, so what is preserved today is still there for the people who need it later.'],
  ['Ownership', 'Contributions should maintain attribution and meaningful ownership.', 'The people who share a story, a song or a piece of knowledge stay credited to it, wherever it goes.'],
  ['Integrity', 'Cultural records should retain their original context.', 'Who said it, where, when and why travels with the record. New context is added alongside, never silently replacing what came before.'],
  ['Participation', 'Cultural preservation is a shared responsibility.', 'Families, creators, communities and institutions each hold part of the picture. Auvra is built to be shaped with them, not only for them.'],
  ['Continuity', 'Every generation should have the opportunity to learn from and contribute to cultural heritage.', 'Heritage is not finished. Each generation should be able to receive it, understand it and add to it.'],
];

export default function About() {
  return (
    <>
      {/* 1 · Introduction */}
      <section className="relative overflow-hidden bg-cream pt-36 md:pt-44" aria-labelledby="about-title">
        <div className="wrap pb-14 md:pb-20 text-center">
          <Crumbs items={[{ label: 'About Auvra' }]} />
          <p className="kicker">Company</p>
          <h1 id="about-title" className={`${H1} mx-auto !text-[clamp(64px,17.5vw,200px)]`}>About Auvra</h1>
          <p className="mx-auto mt-8 max-w-[40rem] text-[18px] md:text-[22px] leading-relaxed text-[#3A3631]">
            Auvra is a cultural technology company building the permanent home for human culture. We are developing the infrastructure that helps individuals, families, creators and communities preserve, own and pass down their cultural heritage and traditions across generations.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#mission" className="btn btn--dark">Our mission</a>
            <a href="#values" className="btn btn--ghost">What guides us</a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-2 md:gap-3 px-2 md:px-3">
          <Photo name="reading-mum" eager alt="A mother reading a picture book with her young son on the grass" className="col-span-2 md:col-span-1 h-[360px] md:h-[560px] w-full rounded-[24px] object-cover object-[55%_30%]" sizes="(max-width: 760px) 100vw, 45vw" />
          <Photo name="warrior-dance" eager alt="A line of dancers in red and white performing a traditional dance" className="h-[240px] md:h-[560px] w-full rounded-[24px] object-cover" sizes="(max-width: 760px) 50vw, 28vw" />
          <Photo name="emir" eager alt="A man in white royal robes and turban, holding a staff" className="h-[240px] md:h-[560px] w-full rounded-[24px] object-cover" sizes="(max-width: 760px) 50vw, 28vw" />
        </div>
      </section>

      {/* 2 · About the company */}
      <section className="wrap py-20 md:py-32" aria-labelledby="what-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <QA id="what-title" kicker="The company" q="What is Auvra?" />
          <div className="reveal space-y-5 max-md:text-center">
            <p className={`${LEAD} text-carbon`}>{COMPANY.long}</p>
            <p className={`${LEAD} text-grey`}>We think of Auvra less as an app and more as cultural infrastructure: the tools, records and technology that let knowledge stay connected to the people, places and generations that give it meaning.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#191717] text-white" aria-label="Why Auvra exists">
        {STORY.map((s, i) => (
          <article key={s.id} className={`wrap grid gap-10 py-20 md:py-28 lg:grid-cols-2 lg:gap-16 lg:items-center ${i ? 'border-t border-[#2B2B2B]' : ''}`} aria-labelledby={`${s.id}-title`}>
            <div className={`max-md:text-center ${i % 2 ? 'lg:order-2' : ''}`}>
              <h2 id={`${s.id}-title`} className={`reveal ${H2_SM} max-w-[16ch] max-md:mx-auto`}>{s.q}</h2>
              <p className={`reveal ${LEAD} mt-7 text-white`}>{s.a}</p>
              <div className="reveal mt-5 space-y-4 text-[17px] leading-relaxed text-[#A8A29A]">
                {s.body.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
              </div>
            </div>
            <figure className={`reveal ${i % 2 ? 'lg:order-1' : ''}`}>
              {i === 0
                ? <Photo name="photo-archive" alt="A pile of old family photographs, postcards and letters" className="h-[420px] md:h-[600px] w-full rounded-[28px] object-cover" />
                : <Photo name="africa-book" alt="Hands holding an open book titled Black Africa" className="h-[420px] md:h-[600px] w-full rounded-[28px] object-cover" />}
            </figure>
          </article>
        ))}
      </section>

      <section className="wrap py-20 md:py-32" aria-labelledby="role-title">
        <div className="reveal grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-md:text-center">
            <h2 id="role-title" className={`${H2_SM} max-w-[16ch] max-md:mx-auto`}>What is Auvra’s long-term role?</h2>
          </div>
          <div className="space-y-5 max-md:text-center">
            <p className={`${LEAD} text-carbon`}>Auvra aims to become lasting infrastructure for human culture: a place where cultural knowledge is preserved, understood through responsible technology, and handed from one generation to the next with its origins intact.</p>
            <p className={`${LEAD} text-grey`}>Our work began in Africa, where many languages and oral traditions are underrepresented in existing technology. It is open to every culture and community. Our measure of success is simple: that a grandchild, decades from now, can still hear the voice, read the context and know the name of the person who passed something down.</p>
          </div>
        </div>
      </section>

      {/* 3 · Our Mission */}
      <section id="mission" className="scroll-mt-24 bg-[#191717] text-white py-24 md:py-36 overflow-hidden" aria-labelledby="mission-title">
        <div className="wrap text-center">
          <h2 id="mission-title" className="kicker !text-[#FFB4A3] justify-center">Our Mission</h2>
          <p className="reveal mx-auto mt-4 max-w-[22ch] font-serif text-[clamp(32px,5.6vw,76px)] leading-[1.06]">
            To make it possible for human cultural knowledge, memories, traditions and creative expressions to be <span className="text-[#FFB4A3]">preserved, attributed, understood and passed down</span> across generations.
          </p>
          <ul className="reveal mt-14 flex flex-wrap justify-center gap-2">
            {['Preserved', 'Attributed', 'Understood', 'Passed down'].map((t) => (
              <li key={t} className="rounded-full border border-[#3A3632] px-5 py-2.5 text-[15px] font-medium text-[#D9D3C8]">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 · Our Vision */}
      <section id="vision" className="scroll-mt-24 bg-espresso text-white" aria-labelledby="vision-title">
        <div className="wrap grid items-center gap-12 py-20 md:py-32 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-md:text-center">
            <h2 id="vision-title" className="kicker !text-[#FFB4A3]">Our Vision</h2>
            <p className="reveal mt-2 ws-h font-bold uppercase tracking-[-0.045em] !leading-[0.95] text-[clamp(30px,4.4vw,58px)] text-balance">
              A world where no culture, story, language, tradition or contribution is lost simply because the people who carry it are no longer present.
            </p>
            <p className={`reveal ${LEAD} mt-8 max-w-[560px] text-[#E9D9CF] max-md:mx-auto`}>
              A future where every generation can access, understand and continue the cultural knowledge inherited from those before them.
            </p>
          </div>
          <Photo name="kids-running" alt="Children running and laughing together outdoors" className="reveal h-[440px] md:h-[600px] w-full rounded-[28px] object-cover" />
        </div>
      </section>

      {/* 6 · What Guides Us: C.U.L.T.U.R.E. values */}
      <section id="values" className="wrap scroll-mt-24 py-20 md:py-32" aria-labelledby="values-title">
        <div className="max-md:text-center">
          <Kicker>Our values</Kicker>
          <h2 id="values-title" className={`reveal ${H2} max-w-[16ch] max-md:mx-auto`}>What Guides Us</h2>
          <p className={`reveal ${LEAD} mt-7 max-w-[640px] text-[#3A3631] max-md:mx-auto`}>At Auvra, our mission is powered by our C.U.L.T.U.R.E. values. These principles are the foundation of our product, our community, and our vision for a digitally-preserved heritage.</p>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(([title, text], i) => (
            <li key={title} className={`reveal value-card ${i === VALUES.length - 1 ? 'lg:col-start-2' : ''}`}>
              <span className="value-card__letter" aria-hidden="true">{title[0]}</span>
              <h3 className="mt-5 text-[21px] md:text-[23px] font-semibold leading-tight text-carbon">{title}</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-grey">{text}</p>
            </li>
          ))}
        </ul>
      </section>


      {/* 7 · Closing CTA */}
      <FinalCta
        title="The future of culture begins with what we preserve today."
        text="Discover how Auvra brings preservation, attribution and technology together, so what matters to you can be passed down."
        secondary={{ href: '/contact', label: 'Contact us' }}
      />
    </>
  );
}
