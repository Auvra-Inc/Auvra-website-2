import { CtaBlock } from '../../components/Page.jsx';
import Icon3D from '../../components/Icon3D.jsx';
import { DEFINITIONS } from '../../data/definitions.js';
import { FAQ_GROUPS } from '../../data/faqs.js';
import { Photo, PRODUCT_INFO, PRODUCTS_CRUMB } from './shared.jsx';

const H1 = 'font-semibold uppercase tracking-[-0.022em] [word-spacing:0.08em] leading-[0.9] text-[clamp(40px,7.2vw,96px)] text-balance';
const H2 = 'font-semibold uppercase tracking-[-0.02em] [word-spacing:0.08em] leading-[0.92] text-[clamp(38px,5.4vw,70px)] text-balance';
const ANSWER = 'mt-6 text-[17px] md:text-lg leading-relaxed text-grey';

// FAQ answers reused verbatim from src/data/faqs.js. Also used for the FAQPage JSON-LD in the route.
export const FAQS = FAQ_GROUPS.find((g) => g.title === 'Cultural Preservation').items.slice(0, 4);

const FRAGMENTS = [
  ['In the memory of elders', 'Much of what a family or community knows has never been written down. It lives in the people who were there.'],
  ['On phones and in group chats', 'Voice notes, videos and photos are recorded every day, then buried under newer messages or lost with a device.'],
  ['In boxes, albums and drawers', 'Letters, photographs and documents fade, scatter between relatives, or are thrown away by people who do not know their story.'],
  ['Across distance and borders', 'When families move, knowledge is split between places. Children abroad may never hear the language or stories their parents grew up with.'],
];

const MATERIALS = [
  ['Family histories and ancestral memories', 'Lineages, names, migrations and the stories of how a family came to be where it is.'],
  ['Oral histories and storytelling', 'Recorded accounts, folktales and the stories told at gatherings, in the voice of the person telling them.'],
  ['Indigenous and underrepresented languages', 'Words, sayings, pronunciations and everyday speech in languages that are rarely written or taught.'],
  ['Songs, music and performances', 'Praise songs, lullabies, drumming, dance and the performances that mark moments in a community’s life.'],
  ['Cultural practices and traditions', 'How things are done and why: dress, food, greetings, naming and the customs of everyday life.'],
  ['Rituals and ceremonies', 'Weddings, festivals, rites of passage and remembrance, documented with care and with the community’s consent.'],
  ['Traditional knowledge and craftsmanship', 'Weaving, carving, dyeing, building, healing and farming knowledge, and the skills passed from hand to hand.'],
  ['Historical accounts and community memories', 'How a town was founded, what happened in a particular year, and the shared memories that shape a place.'],
  ['Creative expressions and cultural works', 'Artworks, poetry, photographs and new work that carries a culture into the present.'],
];

const GENERATIONS = [
  ['An elder remembers', 'A grandmother records how her family celebrated the new yam festival when she was a girl, in her own language.'],
  ['The record is kept', 'The recording is preserved with her name, the date and the place it describes, so its origin is never lost.'],
  ['It becomes understandable', 'Lens AI can transcribe and translate the recording, so grandchildren who speak another language can follow it.'],
  ['The next generation continues it', 'Years later, a grandchild adds their own memory of the festival, alongside the original, not in place of it.'],
];

const SCALES = [
  {
    id: 'family', icon: 'house', label: 'Individual and family preservation', title: 'Start with the people closest to you.',
    text: 'Record a parent describing the house they grew up in. Photograph a grandmother’s recipes before the paper wears through. Add the names of everyone in an old wedding photo while someone still remembers them.',
    ticks: [<>Keep recordings, photos and documents together in <a href="/my-vault" className="text-blue underline underline-offset-4">My Vault</a></>, 'Note who is speaking, where and when, so the context stays with the memory', 'Invite relatives to add what they know'],
    photo: 'beadwork', alt: 'A smiling woman wearing a red gele and coral beadwork', bg: 'bg-[#FFE9E3]',
  },
  {
    id: 'community', icon: 'group', label: 'Community cultural documentation', title: 'Document what a community knows together.',
    text: 'Hometown unions, cultural associations and groups can gather the accounts of many people into one shared record of their history, festivals, language and craft.',
    ticks: ['Many voices contribute to one shared history', 'Each contribution stays credited to the person who gave it', 'Communities decide who can see sensitive or sacred knowledge'],
    photo: 'procession', alt: 'Men in traditional robes, caps and coral beads walking together in a procession', bg: 'bg-[#E8F1E4]',
  },
];

const TINTS = { gold: 'bg-[#FFF4D6]', lime: 'bg-[#E8F1E4]', salmon: 'bg-[#FFE9E3]', blue: 'bg-[#ECE8FF]', carbon: 'bg-linen' };

export default function CulturalPreservation() {
  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="bg-cream" aria-labelledby="page-title">
        <div className="wrap pt-[108px] md:pt-[130px] pb-12 md:pb-20 max-md:text-center">
          <nav className="crumbs max-md:[&_ol]:justify-center" aria-label="Breadcrumb">
            <ol><li><a href="/">Home</a></li><li><a href={PRODUCTS_CRUMB.href}>{PRODUCTS_CRUMB.label}</a></li><li><span aria-current="page">Cultural Preservation</span></li></ol>
          </nav>
          <p className="kicker">Cultural Preservation</p>
          <h1 id="page-title" className={`${H1} max-w-[15ch] max-md:mx-auto`}>Preserve the knowledge that makes us who we are.</h1>
          <p className="mt-8 max-w-[46rem] text-[18px] md:text-xl leading-relaxed text-[#3A3631] max-md:mx-auto">{DEFINITIONS.culturalPreservation.long}</p>
          <div className="mt-8 flex flex-wrap gap-3 max-md:justify-center">
            <a className="btn btn--dark" href="#materials">What you can preserve</a>
            <a className="btn btn--ghost" href="#connections">How it connects</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr]">
          <Photo name="hands-braid" alt="An older hand braiding a child's hair, a skill passed from one generation to the next" eager sizes="(max-width: 760px) 100vw, 45vw" className="h-[420px] md:h-[600px] w-full object-cover" />
          <Photo name="elder-drummer" alt="An elder in white robes holding a drumstick at a festival" eager sizes="28vw" className="hidden md:block h-[600px] w-full object-cover" />
          <Photo name="singers" alt="Women in patterned cloth singing together" eager sizes="28vw" className="hidden md:block h-[600px] w-full object-cover" />
        </div>
      </section>

      {/* 1 · Introduction */}
      <section className="wrap py-20 md:py-32" aria-labelledby="intro-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal max-md:text-center">
            <p className="kicker">Introduction</p>
            <h2 id="intro-title" className={H2}>What does cultural preservation mean on Auvra?</h2>
            <p className={ANSWER}>It means giving the knowledge your family or community holds a lasting, organised home. You record or upload it, describe where it comes from and who it belongs to, and keep it in a form the people who come after you can find, understand and continue.</p>
            <p className="mt-4 text-[17px] md:text-lg leading-relaxed text-grey">Every family and community holds knowledge that cannot be found anywhere else: the way a story is told, the meaning of a pattern, the words for things that have no translation. Preservation is not about putting culture behind glass. It is about keeping it close to the people who live it, with their names attached.</p>
          </div>
          <figure className="reveal">
            <Photo name="sculpture" alt="A man shaping a carved wooden sculpture beside a lake" sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/5] w-full rounded-[32px] object-cover" />
            <figcaption className="mt-3 text-[14px] text-grey max-md:text-center">A sculptor at work. Craft knowledge like this is often learned by watching, and rarely written down.</figcaption>
          </figure>
        </div>
        <div className="reveal mt-14 flex flex-col gap-6 rounded-[32px] bg-blue p-8 md:flex-row md:items-center md:p-12 text-white max-md:items-center max-md:text-center">
          <Icon3D name="sparkle" size={80} />
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#BFE0E1]">Lens AI</p>
            <h3 className="mt-2 text-[24px] md:text-[30px] font-semibold leading-tight">Lens AI transcribes and translates oral histories, tags cultural items and makes archives searchable.</h3>
            <p className="mt-3 text-[17px] text-[#BFE0E1]">You stay in control: what <a href="/lens-ai" className="underline underline-offset-4">Lens AI</a> produces can be reviewed and corrected by the person who shared the memory.</p>
          </div>
        </div>
      </section>

      {/* 2 · The challenge */}
      <section className="bg-carbon text-white py-20 md:py-32" aria-labelledby="challenge-title">
        <div className="wrap">
          <div className="reveal mx-auto max-w-[900px] text-center">
            <p className="kicker !text-[#BDB6AA]">The challenge</p>
            <h2 id="challenge-title" className={`${H2} mx-auto max-w-[18ch]`}>Why is cultural knowledge so easy to lose?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#A8A29A]">Because it is spread across people, devices, places and generations. Each piece on its own is fragile. When an elder passes or a phone is lost, what was known can disappear with them.</p>
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FRAGMENTS.map(([t, d]) => (
              <li key={t} className="reveal rounded-[28px] bg-[#2A2724] p-7 md:p-8 max-md:text-center">
                <h3 className="text-[22px] font-semibold leading-tight">{t}</h3>
                <p className="mt-3 text-[16px] text-[#BDB6AA]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Types of materials */}
      <section id="materials" className="wrap py-20 md:py-32 scroll-mt-24" aria-labelledby="materials-title">
        <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
          <p className="kicker">What can be preserved</p>
          <h2 id="materials-title" className={H2}>What can be preserved on Auvra?</h2>
          <p className={ANSWER}>Nine kinds of cultural knowledge, from a single voice note to a lifetime of craft. Auvra is designed for the many forms culture takes.</p>
        </div>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map(([t, d], i) => (
            <li key={t} className="reveal flex flex-col gap-3 rounded-[28px] bg-linen p-7 md:p-8 max-md:items-center max-md:text-center">
              <span className="text-[15px] font-semibold text-teal">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-[22px] font-semibold leading-tight">{t}</h3>
              <p className="text-[16px] text-grey">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4–5 · Individual, family and community */}
      <section className="wrap pb-20 md:pb-32" aria-labelledby="scales-title">
        <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
          <p className="kicker">Who preserves</p>
          <h2 id="scales-title" className={H2}>Who can preserve culture on Auvra?</h2>
          <p className={ANSWER}>Anyone, from one person to a whole community. Individuals and families can preserve their own histories, and communities can document what they know together.</p>
        </div>
        {SCALES.map((s, i) => (
          <article key={s.id} className="mt-16 md:mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-20" aria-labelledby={`${s.id}-title`}>
            <div className={`reveal flex flex-col gap-4 max-md:items-center max-md:text-center ${i % 2 ? 'lg:order-2' : ''}`}>
              <Icon3D name={s.icon} size={64} />
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-blue">{s.label}</p>
              <h3 id={`${s.id}-title`} className="text-[30px] md:text-[40px] font-semibold leading-[1.05] tracking-[-0.03em]">{s.title}</h3>
              <p className="text-[17px] text-grey">{s.text}</p>
              <ul className="ticks mt-2 text-left max-md:inline-flex">
                {s.ticks.map((t, k) => <li key={k}>{t}</li>)}
              </ul>
            </div>
            <div className={`reveal rounded-[36px] ${s.bg} p-4 md:p-6 ${i % 2 ? 'lg:order-1' : ''}`}>
              <Photo name={s.photo} alt={s.alt} sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/5] md:aspect-[4/4.2] w-full rounded-[26px] object-cover" />
            </div>
          </article>
        ))}
      </section>

      {/* 6 · Intergenerational continuity */}
      <section className="bg-teal text-white py-20 md:py-32" aria-labelledby="gens-title">
        <div className="wrap">
          <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
            <p className="kicker !text-[#BFE0E1]">Intergenerational continuity</p>
            <h2 id="gens-title" className={H2}>How does knowledge reach the next generation?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#BFE0E1]">Preservation matters most when it reaches the next generation, and when they can add to it. Here is how one memory might travel.</p>
          </div>
          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GENERATIONS.map(([t, d], i) => (
              <li key={t} className="reveal flex flex-col gap-3 rounded-[28px] bg-[#0B5E63] p-7 md:p-8 max-md:items-center max-md:text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-lime text-[17px] font-semibold text-carbon" aria-hidden="true">{i + 1}</span>
                <h3 className="mt-2 text-[22px] font-semibold leading-tight">{t}</h3>
                <p className="text-[16px] text-[#BFE0E1]">{d}</p>
              </li>
            ))}
          </ol>
          <p className="reveal mt-10 text-[14px] text-[#BFE0E1] max-md:text-center">An illustrative example of how a record can pass between generations.</p>
        </div>
      </section>

      {/* 7 · Connections */}
      <div id="connections" className="pt-20 md:pt-32 scroll-mt-24">
        <Related current="/cultural-preservation" notes={{
          '/badges#contribution': 'When someone adds context, a memory or care to a preserved record, a Contribution Badge is designed to record that contribution.',
          '/badges#creator': 'Creators can document and share cultural expressions as badges, with their context and attribution kept intact.',
          '/my-vault': 'The private place where individuals and families keep the materials they are preserving.',
          '/auvra-passport': 'Connects you to the records you have preserved and the contributions you have made.',
        }} />
      </div>

      <FaqBlock items={FAQS} title="Cultural Preservation questions" />

      {/* 8 · CTA */}
      <CtaBlock title="Start with one story" text="A single recording of someone you love can be the beginning of a record your family keeps for generations." />
    </div>
  );
}

function Related({ current, notes }) {
  const items = PRODUCT_INFO.filter((p) => p.href !== current);
  return (
    <section className="wrap pb-20 md:pb-32" aria-labelledby="related-title">
      <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
        <p className="kicker">How it connects</p>
        <h2 id="related-title" className={H2}>How does preservation connect to the rest of Auvra?</h2>
        <p className={ANSWER}>Everything else on Auvra builds on preserved knowledge: keeping it, adding to it, sharing it and being credited for it.</p>
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
            <p className="pb-6 md:pr-14 text-[17px] text-grey">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
