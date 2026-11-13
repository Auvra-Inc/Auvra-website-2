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
  { n: '02', name: 'Contribution Badges', href: '/contribution-badges', chip: '#4A281C', text: DEFINITIONS.contributionBadges.short },
  { n: '03', name: 'Collectible Badges', href: '/collectible-badges', chip: '#3310BE', text: DEFINITIONS.collectibleBadges.short },
  { n: '04', name: 'My Vault', href: '/my-vault', chip: '#1C1A18', text: DEFINITIONS.myVault.short },
  { n: '05', name: 'Auvra Passport', href: '/auvra-passport', chip: '#C2563F', text: DEFINITIONS.auvraPassport.short },
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
      <section className="relative overflow-hidden bg-cream -mt-[88px] pt-[130px] md:pt-[160px]" aria-labelledby="about-title">
        <div className="wrap pb-14 md:pb-20 text-center">
          <Crumbs items={[{ label: 'About Auvra' }]} />
          <p className="kicker">Company</p>
          <h1 id="about-title" className={`${H1} mx-auto`}>About Auvra</h1>
          <p className="mx-auto mt-8 max-w-[40rem] text-[18px] md:text-[22px] leading-relaxed text-[#3A3631]">
            Auvra is a cultural technology company building the permanent home for human culture. We are developing the infrastructure that helps individuals, families, creators and communities preserve, own and pass down their cultural heritage and traditions across generations.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#mission" className="btn btn--dark">Our mission</a>
            <a href="#building" className="btn btn--ghost">What we are building</a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-2 md:gap-3 px-2 md:px-3">
          <Photo name="hands-braid" eager alt="An older hand braiding a child’s hair, a skill passed from one generation to the next" className="col-span-2 md:col-span-1 h-[360px] md:h-[560px] w-full rounded-[24px] object-cover" sizes="(max-width: 760px) 100vw, 45vw" />
          <Photo name="elder-drummer" eager alt="An elder in white robes holding a drumstick at a festival" className="h-[240px] md:h-[560px] w-full rounded-[24px] object-cover" sizes="(max-width: 760px) 50vw, 28vw" />
          <Photo name="singers" eager alt="Women in patterned cloth singing together" className="h-[240px] md:h-[560px] w-full rounded-[24px] object-cover" sizes="(max-width: 760px) 50vw, 28vw" />
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

      <section className="bg-carbon text-white" aria-label="Why Auvra exists">
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
                ? <Photo name="hands-archive" alt="Hands turning the pages of an archive of old documents" className="h-[420px] md:h-[600px] w-full rounded-[28px] object-cover" />
                : <Photo name="elder" alt="An elder in a feathered cap at a ceremony" className="h-[420px] md:h-[600px] w-full rounded-[28px] object-cover" />}
            </figure>
          </article>
        ))}
      </section>

      <section className="wrap py-20 md:py-32" aria-labelledby="serve-title">
        <QA
          id="serve-title"
          kicker="Who we serve"
          q="Who does Auvra serve?"
          answer="Auvra serves everyone who keeps culture alive: individuals and families, diaspora families, creators, communities, and the museums and institutions that care for shared heritage."
          center
        />
        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {SERVES.map(([name, text, href]) => (
            <li key={name} className="reveal">
              <a href={href} className="flex h-full flex-col gap-3 rounded-[24px] bg-linen p-7 no-underline transition-transform hover:-translate-y-1 max-md:items-center max-md:text-center">
                <h3 className="text-[22px] font-semibold leading-tight">{name}</h3>
                <p className="text-[16px] text-grey">{text}</p>
                <span className="mt-auto pt-2 font-semibold text-blue">Learn more <span aria-hidden="true">→</span></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="reveal mt-20 grid gap-10 lg:grid-cols-2 lg:gap-16">
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
      <section id="mission" className="scroll-mt-24 bg-carbon text-white py-24 md:py-36 overflow-hidden" aria-labelledby="mission-title">
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
            <p className="reveal mt-2 font-semibold uppercase tracking-[-0.04em] leading-[0.95] text-[clamp(30px,4.4vw,58px)] text-balance">
              A world where no culture, story, language, tradition or contribution is lost simply because the people who carry it are no longer present.
            </p>
            <p className={`reveal ${LEAD} mt-8 max-w-[560px] text-[#E9D9CF] max-md:mx-auto`}>
              A future where every generation can access, understand and continue the cultural knowledge inherited from those before them.
            </p>
          </div>
          <Photo name="young-man" alt="A young man in a traditional wrapper and coral beads" className="reveal h-[440px] md:h-[600px] w-full rounded-[28px] object-cover" />
        </div>
      </section>

      {/* 5 · What We Are Building */}
      <section id="building" className="scroll-mt-24 bg-linen py-20 md:py-32" aria-labelledby="building-title">
        <div className="wrap">
          <QA
            id="building-title"
            kicker="What we are building"
            q="What is Auvra building?"
            answer="One connected ecosystem: five products for preserving, attributing, sharing and keeping cultural knowledge, supported by two technology initiatives that help it be understood."
          />
          <ul className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <li key={p.href} className="reveal">
                <a href={p.href} className="group flex h-full flex-col gap-4 rounded-[24px] bg-white p-7 md:p-8 no-underline transition-transform hover:-translate-y-1 max-md:items-center max-md:text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl text-lg font-bold text-white" style={{ background: p.chip }}>{p.n}</span>
                  <h3 className="text-[24px] font-semibold leading-tight">{p.name}</h3>
                  <p className="text-[16px] text-grey">{p.text}</p>
                  <span className="mt-auto pt-2 font-semibold text-carbon underline underline-offset-4">Explore {p.name}</span>
                </a>
              </li>
            ))}
            <li className="reveal md:col-span-2 lg:col-span-1">
              <a href={EXPLORE_HREF} className="flex h-full flex-col justify-between gap-6 rounded-[24px] bg-carbon p-7 md:p-8 text-white no-underline max-md:items-center max-md:text-center">
                <Icon3D name="phone" size={64} />
                <p className="text-[24px] font-semibold leading-tight">All of it comes together in the Auvra app.</p>
                <span className="btn btn--light self-start max-md:self-center">Explore Auvra</span>
              </a>
            </li>
          </ul>

          <h3 className="reveal mt-20 text-center text-sm font-semibold uppercase tracking-[0.1em] text-olive">Technology</h3>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <a href="/lens-ai" className="reveal flex flex-col gap-5 rounded-[32px] bg-blue p-8 md:p-12 text-white no-underline min-h-[360px] max-md:items-center max-md:text-center">
              <div className="flex w-full items-center justify-between max-md:flex-col max-md:gap-4"><Icon3D name="speech" size={64} /><Status kind="developing" /></div>
              <h4 className="mt-auto text-4xl md:text-5xl font-semibold tracking-tight">Lens AI</h4>
              <p className="text-lg text-[#DCD5FF]">{DEFINITIONS.lensAI.short}</p>
              <span className="font-semibold underline underline-offset-4">Explore Lens AI</span>
            </a>
            <a href="/a-chronos" className="reveal flex flex-col gap-5 rounded-[32px] bg-teal p-8 md:p-12 text-white no-underline min-h-[360px] max-md:items-center max-md:text-center">
              <div className="flex w-full items-center justify-between max-md:flex-col max-md:gap-4"><Icon3D name="globe" size={64} /><Status kind="research" /></div>
              <h4 className="mt-auto text-4xl md:text-5xl font-semibold tracking-tight">A-Chronos</h4>
              <p className="text-lg text-[#BFE0E1]">{DEFINITIONS.aChronos.short}</p>
              <span className="font-semibold underline underline-offset-4">Explore A-Chronos</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6 · Our Principles */}
      <section className="wrap py-20 md:py-32" aria-labelledby="principles-title">
        <div className="max-md:text-center">
          <Kicker>Our principles</Kicker>
          <h2 id="principles-title" className={`reveal ${H2} max-w-[16ch] max-md:mx-auto`}>What principles guide Auvra?</h2>
          <p className={`reveal ${LEAD} mt-7 max-w-[620px] text-[#3A3631] max-md:mx-auto`}>Five principles shape every product decision we make: permanence, ownership, integrity, participation and continuity.</p>
        </div>
        <ol className="mt-14 border-t border-line">
          {PRINCIPLES.map(([name, line, detail], i) => (
            <li key={name} className="reveal grid gap-3 border-b border-line py-9 md:grid-cols-[90px_1fr_1fr] md:gap-10 md:py-12 max-md:text-center">
              <span className="text-sm font-semibold text-olive md:pt-3">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-semibold uppercase tracking-[-0.035em] leading-[0.95] text-[clamp(34px,4.6vw,60px)]">{name}</h3>
              <div className="md:pt-2">
                <p className="text-[20px] md:text-[22px] font-medium leading-snug text-carbon">{line}</p>
                <p className="mt-3 text-[17px] text-grey">{detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="reveal mt-10 text-center text-[17px] text-grey">
          Read how these principles apply to AI in our <a className="text-blue underline" href="/ai-policy">AI Policy</a>, and to shared records in our <a className="text-blue underline" href="/governance">Content Governance</a> policy.
        </p>
      </section>

      <FaqList items={ABOUT_FAQS} title="About Auvra, answered" />

      {/* 7 · Closing CTA */}
      <FinalCta
        title="The future of culture begins with what we preserve today."
        text="Discover how Auvra brings preservation, attribution and technology together, so what matters to you can be passed down."
        secondary={{ href: '/contact', label: 'Contact us' }}
      />
    </>
  );
}
