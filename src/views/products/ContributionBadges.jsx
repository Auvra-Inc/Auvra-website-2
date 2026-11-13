import { CtaBlock } from '../../components/Page.jsx';
import Icon3D from '../../components/Icon3D.jsx';
import { DEFINITIONS } from '../../data/definitions.js';
import { FAQ_GROUPS } from '../../data/faqs.js';
import { Photo, PRODUCT_INFO, PRODUCTS_CRUMB } from './shared.jsx';

// Typography shared with the homepage.
const H1 = 'font-semibold uppercase tracking-[-0.045em] leading-[0.9] text-[clamp(40px,7.2vw,96px)] text-balance';
const H2 = 'font-semibold uppercase tracking-[-0.04em] leading-[0.92] text-[clamp(38px,5.4vw,70px)] text-balance';
const ANSWER = 'mt-6 text-[17px] md:text-lg leading-relaxed text-grey';

// FAQ answers reused verbatim from src/data/faqs.js. Also used for the FAQPage JSON-LD in the route.
const group = FAQ_GROUPS.find((g) => g.title === 'Contribution Badges').items;
export const FAQS = [group[0], group[1], group[2], group[3]];

const PATHS = [
  {
    icon: 'shield', name: 'Contextual Validation', bg: 'bg-teal', text: 'text-white', accent: 'text-lime', sub: 'text-[#BFE0E1]',
    represents: 'Context, clarification or supporting information about an existing cultural record.',
    how: 'Add what you know to a record that already exists: who is in a photograph, where a song was first sung, or what a word means in a particular town.',
    why: 'A record without context is easy to misread. Context from people who know helps every later reader understand what they are looking at.',
  },
  {
    icon: 'mic', name: 'Memory & Oral Documentation', bg: 'bg-espresso', text: 'text-white', accent: 'text-salmon', sub: 'text-[#E6D3CA]',
    represents: 'Personal memories, oral histories, stories, expressions and knowledge.',
    how: 'Record yourself or someone you know telling a story, describing a custom or explaining a saying, in the language it is usually spoken in.',
    why: 'Much cultural knowledge has never been written down. A recorded memory keeps the voice, the language and the detail.',
  },
  {
    icon: 'vault', name: 'Physical & Digital Stewardship', bg: 'bg-blue', text: 'text-white', accent: 'text-[#DCD5FF]', sub: 'text-[#DCD5FF]',
    represents: 'The care, preservation or stewardship of cultural materials and records.',
    how: 'Photograph fading letters, digitise old cassette recordings, or document the objects you look after and how they have been kept.',
    why: 'Materials wear out, scatter between relatives or disappear with a lost phone. Stewardship is the work that keeps them available.',
  },
  {
    icon: 'gift', name: 'Cultural Continuation', bg: 'bg-salmon', text: 'text-carbon', accent: 'text-espresso', sub: 'text-[#4A281C]',
    represents: 'How practices, knowledge and traditions continue across generations.',
    how: 'Document how a practice is being taught, performed or adapted today, and how it connects to what came before.',
    why: 'Culture is living. Continuation shows how a tradition is carried forward, next to the record of where it came from.',
  },
];

const EXAMPLES = [
  { photo: 'gele', alt: 'A woman in a gele and orange cloth at a family celebration', path: 'Contextual Validation', title: 'Naming the people in a wedding photograph', text: 'A niece adds the names of the guests in her aunt’s wedding photo, and the town where it was taken, while an older relative can still confirm them.' },
  { photo: 'elder', alt: 'An elder in a wide-brimmed hat and robes among a festival crowd', path: 'Memory & Oral Documentation', title: 'A grandfather explains a proverb', text: 'A grandson records his grandfather explaining a proverb in Yoruba: when it is used, what it means and the story behind it.' },
  { photo: 'hands-archive', alt: 'Hands searching through an archive of stored records', path: 'Physical & Digital Stewardship', title: 'Letters kept safe before the paper fails', text: 'A family photographs a box of letters sent home in the 1960s and notes who wrote each one, so the originals and their story are not lost.' },
  { photo: 'drummers-row', alt: 'Men playing large drums in a street procession', path: 'Cultural Continuation', title: 'Teaching the festival rhythms', text: 'A drummer documents how he now teaches young players the rhythms for the annual festival, linking it to an older recording of his teacher.' },
];

const STEPS = [
  { n: '01', name: 'Submit', kind: 'developing', label: 'In development', text: 'Choose the record you are adding to, pick the contribution path that fits, and share your contribution with its context: who, where, when and how you know.' },
  { n: '02', name: 'Assessment', kind: 'planned', label: 'Planned', text: 'Contributions are reviewed before any badge is issued. How assessment works is still being finalised, and we will publish it before badges are issued.' },
  { n: '03', name: 'Badge issued', kind: 'planned', label: 'Planned', text: 'After assessment, a Contribution Badge would be issued as a permanent record attributed to the contributor. Badge issuance is not available yet.' },
];

const TINTS = { gold: 'bg-[#FFF4D6]', lime: 'bg-[#E8F1E4]', salmon: 'bg-[#FFE9E3]', blue: 'bg-[#ECE8FF]', carbon: 'bg-linen' };

function StatusPill({ kind, label }) {
  return <span className={`status status--${kind} whitespace-nowrap`}>{label}</span>;
}

export default function ContributionBadges() {
  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="bg-cream" aria-labelledby="page-title">
        <div className="wrap pt-[108px] md:pt-[130px] pb-12 md:pb-20 max-md:text-center">
          <nav className="crumbs max-md:[&_ol]:justify-center" aria-label="Breadcrumb">
            <ol><li><a href="/">Home</a></li><li><a href={PRODUCTS_CRUMB.href}>{PRODUCTS_CRUMB.label}</a></li><li><span aria-current="page">Contribution Badges</span></li></ol>
          </nav>
          <p className="kicker">Contribution Badges</p>
          <h1 id="page-title" className={`${H1} max-w-[15ch] max-md:mx-auto`}>Every contribution becomes part of the cultural record.</h1>
          <p className="mt-8 max-w-[46rem] text-[18px] md:text-xl leading-relaxed text-[#3A3631] max-md:mx-auto">{DEFINITIONS.contributionBadges.long}</p>
          <div className="mt-8 flex flex-wrap gap-3 max-md:justify-center">
            <a className="btn btn--dark" href="#paths">The four paths</a>
            <a className="btn btn--ghost" href="#experience">How contributing works</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr]">
          <Photo name="singers" alt="Women in patterned cloth singing together at a community gathering" eager sizes="(max-width: 760px) 100vw, 60vw" className="h-[420px] md:h-[600px] w-full object-cover" />
          <Photo name="hands-archive" alt="Hands searching through an archive of stored records" eager sizes="40vw" className="hidden md:block h-[600px] w-full object-cover" />
        </div>
      </section>

      {/* 1 · What they are */}
      <section className="wrap py-20 md:py-32" aria-labelledby="what-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal max-md:text-center">
            <p className="kicker">What they are</p>
            <h2 id="what-title" className={H2}>What is a Contribution Badge?</h2>
            <p className={ANSWER}>A Contribution Badge is a record that says who added something to Auvra’s cultural record, what they added and when. It is attached to the contribution itself, so the credit travels with the knowledge.</p>
            <p className="mt-4 text-[17px] md:text-lg leading-relaxed text-grey">Contributions are not only new uploads. Naming the people in an old photo, recording an elder’s memory, caring for a box of letters or teaching a tradition to the next generation are all contributions worth recording.</p>
          </div>
          {/* Illustrative record card */}
          <figure className="reveal mx-auto w-full max-w-[440px]">
            <div className="rounded-[28px] bg-linen p-3">
              <div className="rounded-[22px] bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <Photo name="durbar" alt="" className="h-14 w-14 rounded-2xl object-cover" sizes="56px" />
                  <div><p className="text-[17px] font-semibold leading-tight">Durbar procession, Zaria</p><p className="text-[13px] text-grey">Original record · Photograph</p></div>
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-olive">Contributions</p>
                <ul className="mt-2 space-y-2 text-[14px]">
                  <li className="flex items-start gap-3 rounded-xl bg-[#E0EEEF] p-3"><Icon3D name="shield" size={30} /><span><b className="block font-semibold">Context added</b><span className="text-grey">The horsemen’s regalia and the year of the festival</span></span></li>
                  <li className="flex items-start gap-3 rounded-xl bg-[#FFE9E3] p-3"><Icon3D name="mic" size={30} /><span><b className="block font-semibold">Memory recorded</b><span className="text-grey">A participant describes the day, in Hausa</span></span></li>
                </ul>
                <p className="mt-4 flex items-center gap-2 text-[13px] font-semibold text-teal">✓ Original record kept unchanged</p>
              </div>
            </div>
            <figcaption className="mt-3 text-center text-[14px] text-grey">Illustrative example of a record with two contributions added alongside it.</figcaption>
          </figure>
        </div>
      </section>

      {/* 2 · Why attribution */}
      <section className="bg-carbon text-white py-20 md:py-32" aria-labelledby="why-title">
        <div className="wrap">
          <div className="reveal mx-auto max-w-[860px] text-center">
            <p className="kicker !text-[#BDB6AA]">Attribution</p>
            <h2 id="why-title" className={`${H2} mx-auto max-w-[18ch]`}>Why do cultural contributions need attribution?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#A8A29A]">Because cultural knowledge comes from people. When a memory, a translation or a correction loses its name, later readers cannot tell where it came from, how much to trust it, or whom to thank.</p>
          </div>
          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ['Credit stays with people', 'Elders, families and community members who hold knowledge are named as its source, not erased by the platform that stores it.'],
              ['Context stays readable', 'Knowing who said something, and when, helps the next generation understand it the way it was meant.'],
              ['Trust builds over time', 'A record that shows its sources and every later addition is easier to rely on than one that changes without a trace.'],
            ].map(([t, d]) => (
              <li key={t} className="reveal rounded-[28px] bg-[#2A2724] p-7 md:p-9 max-md:text-center">
                <h3 className="text-[22px] font-semibold leading-tight">{t}</h3>
                <p className="mt-3 text-[16px] text-[#BDB6AA]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Preservation and additional contributions */}
      <section className="wrap py-20 md:py-32" aria-labelledby="layers-title">
        <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
          <p className="kicker">Preservation and contribution</p>
          <h2 id="layers-title" className={H2}>How do preservation and new contributions relate?</h2>
          <p className={ANSWER}>The original record is kept. Added context never silently replaces it. Every later contribution sits alongside the original with its own name and date, so you can always see what was first documented and what was added since.</p>
        </div>
        <ol className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            ['Original record', 'A recording, photo or account is preserved with its origin: who shared it, where and when.', 'bg-linen', 'Kept as it was'],
            ['Contribution added', 'Someone adds context, a memory or care. It is attached to the record with its own attribution.', 'bg-[#E8F1E4]', 'Added alongside'],
            ['Correction added', 'If something needs correcting, the correction is a new contribution too. The earlier version stays visible.', 'bg-[#FFE9E3]', 'Never overwritten'],
          ].map(([t, d, bg, tag], i) => (
            <li key={t} className={`reveal relative flex flex-col gap-3 rounded-[28px] ${bg} p-7 md:p-9 max-md:text-center max-md:items-center`}>
              <span className="text-sm font-semibold text-olive">Layer {i + 1}</span>
              <h3 className="text-[24px] font-semibold leading-tight">{t}</h3>
              <p className="text-[16px] text-grey">{d}</p>
              <span className="mt-auto pt-3 text-[13px] font-semibold uppercase tracking-wider text-teal">{tag}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* 4 · Four contribution paths */}
      <section id="paths" className="bg-linen py-20 md:py-32 scroll-mt-24" aria-labelledby="paths-title">
        <div className="wrap">
          <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
            <p className="kicker">Four contribution paths</p>
            <h2 id="paths-title" className={H2}>What are the four contribution paths?</h2>
            <p className={ANSWER}>Contextual Validation, Memory & Oral Documentation, Physical & Digital Stewardship and Cultural Continuation. Each describes a different way people help keep a cultural record complete and alive.</p>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-2">
            {PATHS.map((p, i) => (
              <li key={p.name} className={`reveal flex flex-col rounded-[32px] ${p.bg} ${p.text} p-7 md:p-10`}>
                <div className="flex items-start justify-between gap-4 max-md:flex-col max-md:items-center max-md:text-center">
                  <div>
                    <span className={`text-sm font-semibold ${p.accent}`}>Path {i + 1}</span>
                    <h3 className="mt-2 text-[28px] md:text-[34px] font-semibold uppercase tracking-[-0.03em] leading-[0.95]">{p.name}</h3>
                  </div>
                  <Icon3D name={p.icon} size={72} />
                </div>
                <dl className="mt-8 grid gap-5 max-md:text-center">
                  <div><dt className={`text-[12px] font-semibold uppercase tracking-[0.1em] ${p.accent}`}>What it represents</dt><dd className="mt-1 text-[17px] leading-snug">{p.represents}</dd></div>
                  <div><dt className={`text-[12px] font-semibold uppercase tracking-[0.1em] ${p.accent}`}>How someone contributes</dt><dd className={`mt-1 text-[16px] ${p.sub}`}>{p.how}</dd></div>
                  <div><dt className={`text-[12px] font-semibold uppercase tracking-[0.1em] ${p.accent}`}>Why it matters</dt><dd className={`mt-1 text-[16px] ${p.sub}`}>{p.why}</dd></div>
                </dl>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 · Examples */}
      <section className="wrap py-20 md:py-32" aria-labelledby="examples-title">
        <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
          <p className="kicker">Contribution examples</p>
          <h2 id="examples-title" className={H2}>What does a contribution look like?</h2>
          <p className={ANSWER}>Usually something small and personal: a name, a memory, a scanned letter, a lesson passed on. Here is one illustrative example for each path.</p>
        </div>
        <ul className="mt-14 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {EXAMPLES.map((e) => (
            <li key={e.title} className="reveal flex flex-col max-md:text-center max-md:items-center">
              <Photo name={e.photo} alt={e.alt} sizes="(max-width: 640px) 100vw, 25vw" className="aspect-[4/5] w-full rounded-[24px] object-cover" />
              <p className="mt-5 text-[13px] font-semibold uppercase tracking-wider text-blue">{e.path}</p>
              <h3 className="mt-2 text-[22px] font-semibold leading-tight">{e.title}</h3>
              <p className="mt-2 text-[16px] text-grey">{e.text}</p>
            </li>
          ))}
        </ul>
        <p className="reveal mt-10 text-[14px] text-grey max-md:text-center">Illustrative examples. They describe the kinds of contributions the paths are designed for.</p>
      </section>

      {/* 6 · Record integrity */}
      <section className="bg-teal text-white py-20 md:py-32" aria-labelledby="integrity-title">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal max-md:text-center">
            <p className="kicker !text-[#BFE0E1]">Record integrity</p>
            <h2 id="integrity-title" className={H2}>How is the history of a record protected?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#BFE0E1]">By adding, never overwriting. Each record keeps its original version and a visible history of every contribution made to it, so the story of how knowledge grew is part of the record itself.</p>
            <ul className="ticks mt-8 text-left max-md:inline-flex">
              <li>The original record is preserved as it was first documented</li>
              <li>Each contribution carries its own attribution and date</li>
              <li>Corrections are added as new contributions, not silent edits</li>
              <li>Later generations can see what was known, and when</li>
            </ul>
          </div>
          <div className="reveal">
            <Photo name="elder-drummer" alt="An elder in white robes holding a drumstick at a festival" sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/5] md:aspect-[4/4.4] w-full rounded-[32px] object-cover" />
          </div>
        </div>
      </section>

      {/* 7 · Contribution experience */}
      <section id="experience" className="wrap py-20 md:py-32 scroll-mt-24" aria-labelledby="experience-title">
        <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
          <p className="kicker">Contribution experience</p>
          <h2 id="experience-title" className={H2}>How does contributing work?</h2>
          <p className={ANSWER}>In three separate steps: you submit a contribution, it is assessed, and then a badge is issued. Each step is a distinct stage, and they are at different points of development.</p>
        </div>
        <ol className="mt-14 grid gap-4 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.name} className="reveal relative flex flex-col gap-4 rounded-[28px] border border-line bg-white p-7 md:p-9 max-md:text-center max-md:items-center">
              <div className="flex w-full items-center justify-between max-md:flex-col max-md:gap-4">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-carbon text-lg font-semibold text-white">{s.n}</span>
                {/* TODO(Emmanuel): confirm status */}
                <StatusPill kind={s.kind} label={s.label} />
              </div>
              <h3 className="text-[28px] font-semibold uppercase tracking-[-0.03em]">{s.name}</h3>
              <p className="text-[16px] text-grey">{s.text}</p>
              {i < STEPS.length - 1 && <span className="hidden lg:grid absolute -right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-carbon text-white text-sm" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </section>

      {/* 8 · Current status */}
      <section className="wrap pb-20 md:pb-32" aria-labelledby="status-title">
        <div className="reveal grid gap-10 rounded-[36px] bg-[#FFE9E3] p-8 md:p-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="max-md:text-center">
            <p className="kicker">Current product status</p>
            <h2 id="status-title" className="font-semibold uppercase tracking-[-0.04em] leading-[0.92] text-[clamp(34px,4.6vw,60px)] text-balance">Can I receive a Contribution Badge today?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#5A4A44]">Not yet. Contribution Badges are being built. Submitting contributions is in development; assessment and badge issuance are planned and are not live. We will publish how assessment works before any badge is issued, and update this page when that changes.</p>
          </div>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4"><span className="text-[17px] font-semibold">Submission</span>{/* TODO(Emmanuel): confirm status */}<StatusPill kind="developing" label="In development" /></li>
            <li className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4"><span className="text-[17px] font-semibold">Assessment</span>{/* TODO(Emmanuel): confirm status */}<StatusPill kind="planned" label="Planned" /></li>
            <li className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4"><span className="text-[17px] font-semibold">Badge issuance</span>{/* TODO(Emmanuel): confirm status */}<StatusPill kind="planned" label="Planned" /></li>
          </ul>
        </div>
      </section>

      <Related current="/contribution-badges" notes={{
        '/cultural-preservation': 'Contributions add to records that have already been preserved, keeping their origin and context intact.',
        '/collectible-badges': 'Collectible Badges carry a creator’s work and attribution; Contribution Badges record what people add to existing records.',
        '/my-vault': 'Keep the recordings, photos and documents behind your contributions in your own private Vault.',
        '/auvra-passport': 'Auvra Passport is designed to connect you to the contributions you have made, so they stay attributed to you.',
      }} />

      <FaqBlock items={FAQS} title="Contribution Badge questions" />

      <CtaBlock title="Add to the record" text="Every name, memory and lesson you document helps keep a culture complete. Explore how Auvra is building for it." />
    </div>
  );
}

function Related({ current, notes }) {
  const items = PRODUCT_INFO.filter((p) => p.href !== current);
  return (
    <section className="wrap pb-20 md:pb-32" aria-labelledby="related-title">
      <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
        <p className="kicker">Across Auvra</p>
        <h2 id="related-title" className={H2}>How do Contribution Badges connect to the rest of Auvra?</h2>
      </div>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <li key={p.href} className="reveal">
            <a href={p.href} className={`flex h-full flex-col gap-3 rounded-[28px] ${TINTS[p.tint]} p-7 no-underline transition-transform hover:-translate-y-1 max-md:items-center max-md:text-center`}>
              <Icon3D name={p.icon} size={60} />
              <span className="mt-2 text-[22px] font-semibold leading-tight">{p.label}</span>
              <span className="text-[16px] text-grey">{notes[p.href] || p.text}</span>
              <span className="mt-auto pt-2 font-semibold text-blue">Explore {p.label} <span aria-hidden="true">→</span></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FaqBlock({ items, title }) {
  return (
    <section className="wrap pb-20 md:pb-32 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16" aria-labelledby="faq-title">
      <div className="max-md:text-center">
        <p className="kicker">Questions</p>
        <h2 id="faq-title" className={`${H2} max-w-[12ch] max-md:mx-auto`}>{title}</h2>
        <a className="btn btn--dark mt-8" href="/faqs">See all FAQs →</a>
      </div>
      <div className="border-t border-line">
        {items.map((f, i) => (
          <details key={f.q} className="group border-b border-line" open={i === 0}>
            <summary className="flex min-h-[76px] cursor-pointer list-none items-center justify-between gap-5 py-5 [&::-webkit-details-marker]:hidden">
              <h3 className="text-[19px] md:text-[22px] font-medium leading-snug">{f.q}</h3>
              <span className="grid h-10 w-10 flex-none place-items-center rounded-full bg-linen text-xl transition-transform group-open:rotate-45 group-open:bg-carbon group-open:text-white" aria-hidden="true">+</span>
            </summary>
            <p className="pb-6 pr-0 md:pr-14 text-[17px] text-grey">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
