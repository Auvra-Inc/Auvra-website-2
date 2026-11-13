import { CtaBlock } from '../../components/Page.jsx';
import Icon3D from '../../components/Icon3D.jsx';
import { DEFINITIONS } from '../../data/definitions.js';
import { FAQ_GROUPS } from '../../data/faqs.js';
import { Photo, PRODUCT_INFO, PRODUCTS_CRUMB } from './shared.jsx';

const H1 = 'font-semibold uppercase tracking-[-0.045em] leading-[0.9] text-[clamp(40px,7.2vw,96px)] text-balance';
const H2 = 'font-semibold uppercase tracking-[-0.04em] leading-[0.92] text-[clamp(38px,5.4vw,70px)] text-balance';
const ANSWER = 'mt-6 text-[17px] md:text-lg leading-relaxed text-grey';

// src/data/faqs.js has no Auvra Passport group yet. The first and second answers below are new and
// should be added there (TODO(Emmanuel): confirm wording); the last two are reused verbatim.
const contribution = FAQ_GROUPS.find((g) => g.title === 'Contribution Badges').items;
const vault = FAQ_GROUPS.find((g) => g.title === 'My Vault').items;
export const FAQS = [
  { q: 'What is Auvra Passport?', a: DEFINITIONS.auvraPassport.long },
  { q: 'Is Auvra Passport an identity document?', a: 'No. Auvra Passport is not a government ID, a legal identity document, a financial account or a certificate. It is a record of how you take part in culture on Auvra: what you preserve, contribute and create.' },
  contribution[0],
  vault[0],
];

const PARTICIPATION = [
  { icon: 'globe', name: 'Preserving', text: 'The stories, recordings and records you have documented.', bg: 'bg-[#FFF4D6]' },
  { icon: 'shield', name: 'Contributing', text: 'The context, memories and care you have added to existing records.', bg: 'bg-[#E8F1E4]' },
  { icon: 'gift', name: 'Creating', text: 'The cultural expressions you have shared as a creator.', bg: 'bg-[#FFE9E3]' },
  { icon: 'house', name: 'Belonging', text: 'The family Vaults and communities you are part of.', bg: 'bg-[#ECE8FF]' },
];

const TINTS = { gold: 'bg-[#FFF4D6]', lime: 'bg-[#E8F1E4]', salmon: 'bg-[#FFE9E3]', blue: 'bg-[#ECE8FF]', carbon: 'bg-linen' };

// The three product relationships (sections 4–6).
const LINKS = [
  {
    id: 'contribution', href: '/contribution-badges', icon: 'shield', label: 'Contribution Badges', bg: 'bg-espresso', sub: 'text-[#E6D3CA]', accent: 'text-salmon',
    q: 'How does Auvra Passport relate to Contribution Badges?',
    a: 'When you add context, a memory or care to a cultural record, a Contribution Badge is designed to record that contribution. Auvra Passport is designed to connect those badges back to you, so your contributions across many records sit together under your name.',
    points: ['Your contributions, gathered in one place', 'Attribution that stays with the record', 'A history of how you have helped keep culture complete'],
    photo: 'elder', alt: 'An elder in traditional dress, the kind of knowledge holder whose memories contributions preserve',
  },
  {
    id: 'collectible', href: '/collectible-badges', icon: 'gift', label: 'Collectible Badges', bg: 'bg-blue', sub: 'text-[#DCD5FF]', accent: 'text-[#DCD5FF]',
    q: 'How does Auvra Passport relate to Collectible Badges?',
    a: 'For creators, Auvra Passport is designed to connect you to the cultural expressions you share as Collectible Badges, so your authorship stays clear. For audiences, it can show the badges you have claimed, each with its creator credited.',
    points: ['Creators linked to the work they share', 'Claimed badges kept with their story', 'Credit that travels with every badge'],
    photo: 'drummer-blue', alt: 'A man in blue adire playing a talking drum, the kind of creator whose work a Collectible Badge credits',
  },
  {
    id: 'vault', href: '/my-vault', icon: 'vault', label: 'My Vault', bg: 'bg-teal', sub: 'text-[#BFE0E1]', accent: 'text-lime',
    q: 'How does Auvra Passport relate to My Vault?',
    a: 'My Vault is where your private memories and records are kept. Auvra Passport is designed to connect you to the Vaults you own or have been invited into. It does not make anything in a Vault public: your Vault stays private and shared only with the people you invite.',
    points: ['Links you to the Vaults you belong to', 'Vault contents stay private', 'Owners still decide who is invited'],
    photo: 'hands-braid', alt: 'An older hand braiding a child’s hair, a family moment of the kind kept in a Vault',
  },
];

export default function AuvraPassport() {
  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="bg-[#FFE9E3]" aria-labelledby="page-title">
        <div className="wrap pt-[108px] md:pt-[130px] pb-16 md:pb-24 grid items-center gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div className="max-md:text-center">
            <nav className="crumbs max-md:[&_ol]:justify-center" aria-label="Breadcrumb">
              <ol><li><a href="/">Home</a></li><li><a href={PRODUCTS_CRUMB.href}>{PRODUCTS_CRUMB.label}</a></li><li><span aria-current="page">Auvra Passport</span></li></ol>
            </nav>
            <p className="kicker">Auvra Passport</p>
            <h1 id="page-title" className={`${H1} max-w-[15ch] max-md:mx-auto`}>A connected record of your participation in culture.</h1>
            <p className="mt-8 max-w-[42rem] text-[18px] md:text-xl leading-relaxed text-[#5A4A44] max-md:mx-auto">{DEFINITIONS.auvraPassport.long}</p>
            <div className="mt-8 flex flex-wrap gap-3 max-md:justify-center">
              <a className="btn btn--dark" href="#connections">How it connects</a>
              <a className="btn btn--ghost" href="#what-title">What it is, and is not</a>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-[380px]">
            <div className="rounded-[28px] bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <Photo name="beaded-hair" alt="" sizes="56px" className="h-14 w-14 rounded-full object-cover" eager />
                <div><p className="font-semibold">Your Auvra Passport</p><p className="text-[13px] text-grey">Participation across Auvra</p></div>
                <Icon3D name="passport" size={44} className="ml-auto" />
              </div>
              <ul className="mt-5 space-y-2 text-[14px]">
                <li className="flex justify-between gap-3 rounded-xl bg-linen px-3 py-2.5"><span>Grandmother’s oral history</span><span className="text-grey">Preserved</span></li>
                <li className="flex justify-between gap-3 rounded-xl bg-linen px-3 py-2.5"><span>Durbar photograph, context</span><span className="text-grey">Contributed</span></li>
                <li className="flex justify-between gap-3 rounded-xl bg-linen px-3 py-2.5"><span>Adire pattern badge</span><span className="text-grey">Created</span></li>
                <li className="flex justify-between gap-3 rounded-xl bg-linen px-3 py-2.5"><span>Family Vault</span><span className="text-grey">Invited</span></li>
              </ul>
            </div>
            <figcaption className="mt-3 text-center text-[14px] text-[#5A4A44]">Illustrative example of the records a Passport connects.</figcaption>
          </figure>
        </div>
        <Photo name="crowd" alt="A crowd gathered together at a cultural festival" sizes="100vw" className="h-[360px] md:h-[560px] w-full object-cover" />
      </section>

      {/* 1 · What it is */}
      <section className="wrap py-20 md:py-32" aria-labelledby="what-title">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:items-start">
          <div className="reveal max-md:text-center">
            <p className="kicker">What it is</p>
            <h2 id="what-title" className={`${H2} scroll-mt-28`}>What is Auvra Passport?</h2>
            <p className={ANSWER}>Auvra Passport is the thread that ties your activity on Auvra together. Instead of your preserved stories, contributions and creations sitting in separate places, Passport is designed to connect them to you, so anyone looking at a record can see who took part in it.</p>
          </div>
          <aside className="reveal rounded-[28px] border border-line bg-white p-7 md:p-9 max-md:text-center" aria-labelledby="not-title">
            <h3 id="not-title" className="text-[22px] font-semibold leading-tight">What Auvra Passport is not</h3>
            <p className="mt-3 text-[16px] text-grey">Despite the name, it is not a travel or identity document. It is a record of cultural participation only.</p>
            <ul className="mt-5 grid gap-2 text-[16px] text-left max-md:inline-grid">
              {['Not a government ID', 'Not a legal identity document', 'Not a financial account', 'Not a certificate or qualification'].map((t) => (
                <li key={t} className="flex items-center gap-3"><span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-[#FFE9E3] text-[13px] font-semibold text-espresso" aria-hidden="true">✕</span>{t}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* 2 · Connection to participation */}
      <section className="bg-linen py-20 md:py-32" aria-labelledby="participation-title">
        <div className="wrap">
          <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
            <p className="kicker">Participation</p>
            <h2 id="participation-title" className={H2}>What counts as participation on Auvra?</h2>
            <p className={ANSWER}>Anything you do to keep culture alive on Auvra: preserving a record, contributing to one, creating a cultural work or belonging to a family Vault. Passport is designed to connect all four to you.</p>
          </div>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PARTICIPATION.map((p) => (
              <li key={p.name} className={`reveal flex flex-col gap-3 rounded-[28px] ${p.bg} p-7 max-md:items-center max-md:text-center`}>
                <Icon3D name={p.icon} size={60} />
                <h3 className="mt-2 text-[24px] font-semibold uppercase tracking-[-0.02em]">{p.name}</h3>
                <p className="text-[16px] text-grey">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Attribution and contribution */}
      <section className="wrap py-20 md:py-32" aria-labelledby="attribution-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal max-md:text-center">
            <p className="kicker">Attribution and contribution</p>
            <h2 id="attribution-title" className={H2}>How does Passport keep your contributions attributed?</h2>
            <p className={ANSWER}>By linking each record you take part in back to you. Your name stays attached to what you preserved or added, even as others build on it later, so the credit for cultural knowledge stays with the people who shared it.</p>
            <ul className="ticks mt-8 text-left max-md:inline-flex">
              <li>Your contributions stay connected to you</li>
              <li>Others can see who documented what</li>
              <li>Later additions never erase earlier credit</li>
            </ul>
          </div>
          <Photo name="singers" alt="Women in patterned cloth singing together" sizes="(max-width: 1024px) 100vw, 50vw" className="reveal aspect-[4/5] md:aspect-square w-full rounded-[32px] object-cover" />
        </div>
      </section>

      {/* 4–6 · Relationships with the other products */}
      <div id="connections" className="scroll-mt-24">
        {LINKS.map((l, i) => (
          <section key={l.id} className={`${l.bg} text-white py-20 md:py-28`} aria-labelledby={`${l.id}-title`}>
            <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <div className={`reveal max-md:text-center ${i % 2 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 max-md:justify-center">
                  <Icon3D name={l.icon} size={56} />
                  <p className={`text-[13px] font-semibold uppercase tracking-[0.1em] ${l.accent}`}>Passport + {l.label}</p>
                </div>
                <h2 id={`${l.id}-title`} className="mt-5 font-semibold uppercase tracking-[-0.04em] leading-[0.92] text-[clamp(34px,4.6vw,60px)] text-balance">{l.q}</h2>
                <p className={`mt-6 text-[17px] md:text-lg leading-relaxed ${l.sub}`}>{l.a}</p>
                <ul className="ticks mt-8 text-left max-md:inline-flex">
                  {l.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="mt-8"><a href={l.href} className="btn btn--light">Explore {l.label}</a></div>
              </div>
              <Photo name={l.photo} alt={l.alt} sizes="(max-width: 1024px) 100vw, 50vw" className={`reveal aspect-[4/3] lg:aspect-[4/4.2] w-full rounded-[32px] object-cover ${i % 2 ? 'lg:order-1' : ''}`} />
            </div>
          </section>
        ))}
      </div>

      <div className="pt-20 md:pt-32">
        <Related current="/auvra-passport" />
      </div>

      <FaqBlock items={FAQS} title="Auvra Passport questions" />

      <CtaBlock title="Take part, and stay credited" text="Discover how Auvra connects the people who keep culture alive to the records they help create." />
    </div>
  );
}

function Related({ current }) {
  const items = PRODUCT_INFO.filter((p) => p.href !== current);
  return (
    <section className="wrap pb-20 md:pb-32" aria-labelledby="related-title">
      <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
        <p className="kicker">Across Auvra</p>
        <h2 id="related-title" className={H2}>Where does Auvra Passport fit?</h2>
        <p className={ANSWER}>Passport connects the other parts of Auvra to the people who take part in them.</p>
      </div>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((p) => (
          <li key={p.href} className="reveal">
            <a href={p.href} className={`flex h-full flex-col gap-3 rounded-[28px] ${TINTS[p.tint]} p-7 no-underline transition-transform hover:-translate-y-1 max-md:items-center max-md:text-center`}>
              <Icon3D name={p.icon} size={60} />
              <span className="mt-2 text-[22px] font-semibold leading-tight">{p.label}</span>
              <span className="text-[16px] text-grey">{p.text}</span>
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
