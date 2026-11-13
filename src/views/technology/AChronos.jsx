import Icon3D from '../../components/Icon3D.jsx';
import { Status } from '../../components/Page.jsx';
import { DEFINITIONS } from '../../data/definitions.js';
import { H1, H2_SM, LEAD, Crumbs, Photo, Kicker, QA, FaqList, FinalCta, nb } from '../editorial.jsx';

// A-Chronos identity: Dark Teal #024B50 (Tailwind `teal`). Status: Research.
// Never describe A-Chronos as a finished or production model, and never add benchmarks,
// parameter counts or datasets unless they have been published.

export const CHRONOS_FAQS = [
  { q: 'What is A-Chronos?', a: DEFINITIONS.aChronos.long },
  { q: 'Is A-Chronos available to use?', a: 'No. A-Chronos is a research and development initiative, not a released product or a finished model. We will share what we learn through Auvra Research as work is published.' },
  { q: 'How is A-Chronos different from Lens AI?', a: 'Lens AI is the set of AI tools being built into the Auvra app today, such as transcription, translation and tagging. A-Chronos is longer-term research into AI that understands cultural knowledge, context and the relationships between records, which may inform future Lens AI capabilities.' },
  { q: 'Why does cultural heritage need specialised AI?', a: 'Cultural meaning depends on context: who shared something, in which language, where, for which occasion, and who is allowed to know it. General-purpose AI is mostly built from widely published text and tends to lose that context, especially for oral, local and underrepresented traditions.' },
  { q: 'Will my private content be used for A-Chronos research?', a: 'Auvra does not use personal content, including private Vault content, to train its AI by default. Any contribution to AI improvement would be opt-in, through a separate consent flow, as described in our AI Policy.' },
];

const WHY = [
  ['Meaning depends on context', 'The same song can be a lullaby in one home and a ceremonial piece in another. Without knowing who sang it, where and when, the meaning changes.'],
  ['Much of it is spoken, not written', 'Oral histories, proverbs and praise poetry rarely appear in the written sources most AI systems learn from.'],
  ['Knowledge has custodians', 'Some knowledge is sacred or restricted. Who may see it is part of the knowledge itself, and must be respected.'],
  ['Accounts can differ and both matter', 'Two families may remember the same event differently. Heritage needs both voices kept, not averaged into one.'],
];

const DIRECTION = [
  ['How can a record carry its context with it?', 'Representing who shared something, in which language, where and for what occasion, as part of the record rather than as an afterthought.'],
  ['How are records related?', 'Modelling how a recording, a photograph and a later memory can describe the same person, place or event, and how one adds to another.'],
  ['How can several perspectives be kept?', 'Holding different accounts side by side, each attributed, instead of collapsing them into a single answer.'],
  ['How can AI respect boundaries?', 'Treating consent, attribution and community access decisions as rules a system must follow, not preferences it may ignore.'],
  ['How can AI serve low-resource languages?', 'Learning from small, carefully consented collections, where every recording matters and its speakers are credited.'],
];

const ECOSYSTEM = [
  ['/cultural-preservation', 'Cultural Preservation', 'The records people preserve, with their context, are what A-Chronos research is about understanding.'],
  ['/badges#contribution', 'Contribution Badges', 'Contributions add knowledge to a record without replacing it: exactly the kind of relationship A-Chronos studies.'],
  ['/auvra-passport', 'Auvra Passport', 'Attribution links people to their records, so understanding never comes at the cost of credit.'],
  ['/my-vault', 'My Vault', 'Private by default. Vault content is not used for AI training unless its owner explicitly consents.'],
];

const FUTURE = [
  'Publishing research notes and findings openly through Auvra Research as the work matures.',
  'Working with communities, linguists, archivists and institutions on how cultural context should be represented.',
  'Informing future Lens AI capabilities, such as search that understands relationships between records.',
  'Keeping consent, attribution and community authority at the centre of every step.',
];

// Diagram: one record, its context, and its relationships to other records.
function ContextDiagram() {
  const context = [
    ['Who', 'Shared by Grandma Nneoma, family elder'],
    ['Language', 'Igbo, with an English translation'],
    ['Where & when', 'Nnewi · recorded at a family gathering'],
    ['Community', 'Okafor family · shared with family members'],
  ];
  const related = [
    ['adds context to', 'A cousin’s memory of the same journey', 'Later contribution, attributed to the cousin'],
    ['depicts', 'Photograph of the family compound', 'From the family album, 1970s'],
    ['translation of', 'English translation', 'Draft by Lens AI, corrected by a grandchild'],
  ];
  return (
    <figure className="reveal mt-14 rounded-[32px] bg-[#E0EEEF] p-4 md:p-10" aria-labelledby="diagram-cap">
      <div className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.1fr_auto_1.2fr] lg:gap-3">
        {/* Context */}
        <div className="rounded-[24px] bg-white p-5 md:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-teal">Context</p>
          <p className="mt-1 text-[14px] text-grey">Travels with the record</p>
          <dl className="mt-4 space-y-3">
            {context.map(([k, v]) => (
              <div key={k} className="rounded-xl bg-[#F2F8F8] px-3 py-2.5">
                <dt className="text-[12px] font-semibold uppercase tracking-wider text-teal">{k}</dt>
                <dd className="text-[15px] leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <Connector label="describes" />
        {/* Record */}
        <div className="flex flex-col justify-center rounded-[24px] bg-teal p-6 md:p-7 text-white shadow-xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-lime">Record</p>
          <p className="mt-3 text-[24px] md:text-[28px] font-semibold leading-tight">“How our family began”</p>
          <p className="mt-2 text-[15px] text-[#BFE0E1]">Voice recording · 2:14</p>
          <span className="wave mt-4 !h-8 !flex-none" aria-hidden="true">{Array.from({ length: 26 }).map((_, i) => <i key={i} style={{ '--h': `${22 + ((i * 37) % 70)}%`, background: '#BCE784' }} />)}</span>
          <p className="mt-4 text-[14px] text-[#BFE0E1]">The original is never replaced. Everything else is added around it.</p>
        </div>
        <Connector label="relates to" />
        {/* Relationships */}
        <div className="rounded-[24px] bg-white p-5 md:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-teal">Related records</p>
          <p className="mt-1 text-[14px] text-grey">Each keeps its own attribution</p>
          <ul className="mt-4 space-y-3">
            {related.map(([rel, title, note]) => (
              <li key={title} className="rounded-xl border border-[#CFE3E4] px-3 py-2.5">
                <span className="inline-block rounded-full bg-teal px-2.5 py-0.5 text-[11px] font-semibold text-white">{rel}</span>
                <p className="mt-1.5 text-[15px] font-semibold leading-snug">{title}</p>
                <p className="text-[13px] text-grey">{note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption id="diagram-cap" className="mt-6 text-center text-[15px] text-[#2D5254] max-w-[680px] mx-auto">
        An illustrative example. A-Chronos research explores how AI can understand a cultural record together with its context (who, what language, where, which community) and its relationships to other records, rather than as an isolated file.
      </figcaption>
    </figure>
  );
}

function Connector({ label }) {
  return (
    <div className="flex items-center justify-center gap-2 py-1 lg:flex-col lg:py-0" aria-hidden="true">
      <span className="h-6 w-0.5 bg-teal/40 lg:h-0.5 lg:w-8" />
      <span className="rounded-full bg-white px-3 py-1 text-[12px] font-semibold text-teal whitespace-nowrap">{label}</span>
      <span className="h-6 w-0.5 bg-teal/40 lg:h-0.5 lg:w-8" />
    </div>
  );
}

export default function AChronos() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal text-white pt-36 md:pt-44 pb-16 md:pb-24" aria-labelledby="chronos-title">
        <div className="wrap text-center">
          <Crumbs light items={[{ label: 'Technology' }, { label: 'A-Chronos' }]} />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="kicker !mb-0 !text-[#BFE0E1]">A-Chronos</p>
            <Status kind="research" />
          </div>
          <h1 id="chronos-title" className={`${H1} mx-auto mt-6 max-w-[14ch]`}>Building foundational AI for cultural heritage.</h1>
          <p className="mx-auto mt-8 max-w-[36rem] text-[18px] md:text-xl leading-relaxed text-[#D6ECEC]">A long-term research initiative asking how AI could understand cultural knowledge the way its custodians do: in context, in relationship, and with respect.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#direction" className="btn btn--light">Our research direction</a>
            <a href="#status" className="btn btn--ghost !border-white text-white">Where it stands today</a>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-2 md:gap-3 px-2 md:px-3">
          <Photo name="museum" eager alt="Columns of a national museum building" className="h-[200px] md:h-[440px] w-full rounded-[20px] object-cover" sizes="33vw" />
          <Photo name="mask" eager alt="A person in a carved wooden mask and woven cloth" className="h-[200px] md:h-[440px] w-full rounded-[20px] object-cover" sizes="33vw" />
          <Photo name="hands-archive" eager alt="Hands turning the pages of an archive" className="h-[200px] md:h-[440px] w-full rounded-[20px] object-cover" sizes="33vw" />
        </div>
      </section>

      {/* 1 · What it is */}
      <section className="wrap py-20 md:py-32" aria-labelledby="what-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <QA id="what-title" kicker="What it is" q="What is A-Chronos?" />
          <div className="reveal space-y-5 max-md:text-center">
            <p className={`${LEAD} text-carbon`}>{DEFINITIONS.aChronos.long}</p>
            <p className={`${LEAD} text-grey`}>It is research, not a product. A-Chronos is not a finished or production model, and it is not available to use. It is the long-term work behind Auvra’s technology: asking what it would take for AI to treat culture as living knowledge with owners, origins and meaning.</p>
          </div>
        </div>
      </section>

      {/* 2 · Why specialised */}
      <section className="bg-[#191717] text-white py-20 md:py-32" aria-labelledby="why-title">
        <div className="wrap">
          <QA
            id="why-title"
            kicker="Why it matters"
            q="Why does cultural heritage need specialised AI?"
            answer="Because cultural meaning depends on context that general-purpose AI tends to lose. Most AI is built from widely published text, while much of the world’s heritage is spoken, local, relational and held by people with the authority to explain it."
            light
          />
          <ul className="mt-14 grid gap-3 sm:grid-cols-2">
            {WHY.map(([name, text]) => (
              <li key={name} className="reveal rounded-[24px] bg-[#252321] p-7 md:p-9 max-md:text-center">
                <h3 className="text-[24px] font-semibold leading-tight text-[#9FD4D6]">{name}</h3>
                <p className="mt-3 text-[17px] text-[#A8A29A]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Research direction */}
      <section id="direction" className="wrap scroll-mt-24 py-20 md:py-32" aria-labelledby="dir-title">
        <QA
          id="dir-title"
          kicker="Research direction"
          q="What questions is A-Chronos exploring?"
          answer="A-Chronos research is organised around a few open questions about how AI could represent cultural knowledge faithfully. These are directions of inquiry, not finished results."
        />
        <ol className="mt-14 border-t border-line">
          {DIRECTION.map(([q, text], i) => (
            <li key={q} className="reveal grid gap-3 border-b border-line py-8 md:grid-cols-[80px_1fr_1fr] md:gap-10 md:py-10 max-md:text-center">
              <span className="text-sm font-semibold text-teal md:pt-2">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-[24px] md:text-[30px] font-semibold leading-tight tracking-[-0.02em]">{q}</h3>
              <p className="text-[17px] text-grey md:pt-1">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4 · Cultural context and knowledge representation */}
      <section className="bg-[#F2F8F8] py-20 md:py-32" aria-labelledby="repr-title">
        <div className="wrap">
          <QA
            id="repr-title"
            kicker="Knowledge representation"
            q="How can AI represent cultural context?"
            answer="By treating a cultural record as more than a file: as something connected to the people who shared it, the language and place it comes from, the community that holds it, and the other records that add to it."
            center
          />
          <ContextDiagram />
        </div>
      </section>

      {/* 5 · Relationship with Lens AI */}
      <section className="wrap py-20 md:py-32" aria-labelledby="lens-title">
        <QA
          id="lens-title"
          kicker="Relationship with Lens AI"
          q="How does A-Chronos relate to Lens AI?"
          answer="Lens AI is the applied side: AI tools being built into the Auvra app now. A-Chronos is the research side: longer-term work on how AI can understand cultural knowledge, which may shape what Lens AI becomes."
        />
        <div className="mt-14 grid gap-3 md:grid-cols-2">
          <a href="/lens-ai" className="reveal flex flex-col gap-4 rounded-[32px] bg-blue p-8 md:p-12 text-white no-underline min-h-[320px] max-md:items-center max-md:text-center">
            <div className="flex w-full items-center justify-between max-md:flex-col max-md:gap-4"><Icon3D name="speech" size={64} /><Status kind="developing" /></div>
            <h3 className="mt-auto text-4xl font-semibold tracking-tight">Lens AI</h3>
            <p className="text-lg text-[#DCD5FF]">Transcription, translation and tagging inside the app, reviewed by people. Built for use.</p>
            <span className="font-semibold underline underline-offset-4">Explore Lens AI</span>
          </a>
          <div className="reveal flex flex-col gap-4 rounded-[32px] bg-teal p-8 md:p-12 text-white min-h-[320px] max-md:items-center max-md:text-center">
            <div className="flex w-full items-center justify-between max-md:flex-col max-md:gap-4"><Icon3D name="globe" size={64} /><Status kind="research" /></div>
            <h3 className="mt-auto text-4xl font-semibold tracking-tight">A-Chronos</h3>
            <p className="text-lg text-[#BFE0E1]">Research into context, relationships and cultural knowledge representation. Built for understanding.</p>
            <span className="font-semibold text-lime">You are here</span>
          </div>
        </div>
      </section>

      {/* 6 · Relationship with the ecosystem */}
      <section className="bg-linen py-20 md:py-32" aria-labelledby="eco-title">
        <div className="wrap">
          <QA
            id="eco-title"
            kicker="Relationship with the ecosystem"
            q="How does A-Chronos fit into the Auvra ecosystem?"
            answer="A-Chronos sits underneath the Auvra ecosystem. The way Auvra keeps records, context and attribution together is what makes this research possible, and its findings are meant to serve those same products."
          />
          <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ECOSYSTEM.map(([href, name, text]) => (
              <li key={href} className="reveal">
                <a href={href} className="flex h-full flex-col gap-3 rounded-[24px] bg-white p-7 no-underline transition-transform hover:-translate-y-1 max-md:items-center max-md:text-center">
                  <h3 className="text-[22px] font-semibold leading-tight">{name}</h3>
                  <p className="text-[16px] text-grey">{text}</p>
                  <span className="mt-auto pt-2 font-semibold text-teal">Explore {name} <span aria-hidden="true">→</span></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 · Current status */}
      <section id="status" className="wrap scroll-mt-24 py-20 md:py-32" aria-labelledby="status-title">
        <div className="reveal grid gap-10 rounded-[36px] bg-teal p-8 md:p-16 text-white lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="max-md:text-center">
            <p className="kicker !text-[#BFE0E1]">Current research &amp; development status</p>
            <h2 id="status-title" className={`${H2_SM} max-w-[16ch] max-md:mx-auto`}>{nb('Where is A-Chronos today?')}</h2>
            <p className={`${LEAD} mt-7 text-[#D6ECEC]`}>A-Chronos is in the research stage. It is not a finished or production model, it is not available to use, and we have not published results yet. When we do, they will appear on <a className="underline text-white" href="/research">Auvra Research</a>.</p>
          </div>
          <dl className="grid gap-3 text-carbon">
            {[
              ['Stage', <Status key="s" kind="research" />],
              ['Availability', 'Not available to use'],
              ['Publications', 'In preparation'],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4">
                <dt className="text-[15px] font-semibold text-teal">{k}</dt>
                <dd className="text-right text-[16px]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 8 · Future direction */}
      <section className="wrap pb-20 md:pb-32" aria-labelledby="future-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <QA
            id="future-title"
            kicker="Future direction"
            q="What comes next for A-Chronos?"
            answer="The next steps are careful ones: sharing what we learn, working with the people who hold cultural knowledge, and letting the research inform tools that stay accountable to them."
          />
          <ul className="reveal ticks self-end max-md:mx-auto max-md:max-w-[520px]">
            {FUTURE.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </section>

      <FaqList items={CHRONOS_FAQS} title="A-Chronos, answered" />

      {/* 9 · Final CTA */}
      <FinalCta
        title="Help shape AI that understands culture."
        text="If you work with languages, archives or cultural knowledge and want to explore this research with us, we would like to hear from you."
        primary={{ href: '/contact', label: 'Talk to us' }}
        secondary={{ href: '/research', label: 'Follow our research' }}
        tone="teal"
      />
    </>
  );
}

