import { CtaBlock } from '../../components/Page.jsx';
import Icon3D from '../../components/Icon3D.jsx';
import { DEFINITIONS } from '../../data/definitions.js';
import { FAQ_GROUPS } from '../../data/faqs.js';
import { Photo, PRODUCT_INFO, PRODUCTS_CRUMB } from './shared.jsx';

const H1 = 'font-semibold uppercase tracking-[-0.022em] [word-spacing:0.08em] leading-[0.9] text-[clamp(40px,7.2vw,96px)] text-balance';
const H2 = 'font-semibold uppercase tracking-[-0.02em] [word-spacing:0.08em] leading-[0.92] text-[clamp(38px,5.4vw,70px)] text-balance';
const ANSWER = 'mt-6 text-[17px] md:text-lg leading-relaxed text-grey';

// FAQ answers reused verbatim from src/data/faqs.js: What is My Vault, Who can own, Separate subscription.
const group = FAQ_GROUPS.find((g) => g.title === 'My Vault').items;
export const FAQS = group.slice(0, 4);

const TYPES = [
  { icon: 'mic', name: 'Voice recordings', text: 'Stories, songs and conversations, kept in the voice of the person who told them.', bg: 'bg-[#FFE9E3]' },
  { icon: 'house', name: 'Photographs', text: 'Family albums, events and portraits, with the names of the people in them.', bg: 'bg-[#E8F1E4]' },
  { icon: 'vault', name: 'Documents', text: 'Letters, certificates, recipes and handwritten notes you do not want to lose.', bg: 'bg-[#ECE8FF]' },
  { icon: 'globe', name: 'Cultural materials', text: 'Records of traditions, languages and customs that belong to your family.', bg: 'bg-[#E0EEEF]' },
];

const INVITE = [
  ['Create your Vault', 'You set up a Vault for yourself or your family and choose the subscription that applies to it.'],
  ['Share an invitation code', 'Send the code to the people you want inside: parents, siblings, cousins, wherever they live.'],
  ['They join with the code', 'Family members download Auvra, enter the code and join your Vault.'],
];

const TINTS = { gold: 'bg-[#FFF4D6]', lime: 'bg-[#E8F1E4]', salmon: 'bg-[#FFE9E3]', blue: 'bg-[#ECE8FF]', carbon: 'bg-linen' };

function Phone({ label, children, className = '' }) {
  return (
    <div className={`phone-frame ${className}`} role="img" aria-label={label}>
      <div className="phone-frame__screen">{children}</div>
      <img className="phone-frame__img" src="/images/phone-frame.webp" alt="" width="604" height="1227" loading="lazy" />
    </div>
  );
}

function VaultScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-[#FBF8F1] px-4 pt-[16%] text-carbon">
      <div className="flex items-center justify-between">
        <div><p className="text-[17px] font-semibold">Ndiaye Family Vault</p><p className="text-[11px] text-grey">Private · shared by invitation</p></div>
        <span className="rounded-full bg-carbon px-3 py-1.5 text-[11px] font-semibold text-white">+ Invite</span>
      </div>
      <div className="flex gap-1.5 text-[11px] font-semibold">
        <span className="rounded-full bg-carbon px-2.5 py-1 text-white">All</span>
        <span className="rounded-full bg-white px-2.5 py-1">Voices</span>
        <span className="rounded-full bg-white px-2.5 py-1">Photos</span>
        <span className="rounded-full bg-white px-2.5 py-1">Docs</span>
      </div>
      {[
        ['🎙', 'How our family began', 'Voice memory · Grandma Awa', 'bg-[#FFE2DB]'],
        ['img', 'Wedding photos, 1974', '24 photos · Uncle Emeka', ''],
        ['📜', 'Mama’s handwritten recipes', 'Documents · Ada', 'bg-[#ECE8FF]'],
        ['🎵', 'Songs from the village wedding', 'Recording · Moussa', 'bg-[#E8F1E4]'],
      ].map(([i, t, s, bg]) => (
        <div key={t} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 shadow-sm">
          {i === 'img'
            ? <img src="/images/photos/red-cap-480.webp" alt="" className="h-10 w-10 rounded-xl object-cover" loading="lazy" />
            : <span className={`grid h-10 w-10 place-items-center rounded-xl ${bg}`}>{i}</span>}
          <span><b className="block text-[13px] font-semibold">{t}</b><small className="text-[11px] text-grey">{s}</small></span>
        </div>
      ))}
    </div>
  );
}

export default function MyVault() {
  return (
    <div className="overflow-x-clip">
      {/* Hero, with the Vault in the phone frame */}
      <section className="bg-cream" aria-labelledby="page-title">
        <div className="wrap pt-[108px] md:pt-[130px] pb-16 md:pb-24 grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div className="max-md:text-center">
            <nav className="crumbs max-md:[&_ol]:justify-center" aria-label="Breadcrumb">
              <ol><li><a href="/">Home</a></li><li><a href={PRODUCTS_CRUMB.href}>{PRODUCTS_CRUMB.label}</a></li><li><span aria-current="page">My Vault</span></li></ol>
            </nav>
            <p className="kicker">My Vault</p>
            <h1 id="page-title" className={`${H1} max-w-[15ch] max-md:mx-auto`}>A personal home for the things you never want to lose.</h1>
            <p className="mt-8 max-w-[42rem] text-[18px] md:text-xl leading-relaxed text-[#3A3631] max-md:mx-auto">{DEFINITIONS.myVault.long}</p>
            <div className="mt-8 flex flex-wrap gap-3 max-md:justify-center">
              <a className="btn btn--dark" href="#access">Owners and members</a>
              <a className="btn btn--ghost" href="#privacy">Privacy and control</a>
            </div>
          </div>
          <Phone label="My Vault in the Auvra app: a private family Vault holding a voice memory, wedding photos, handwritten recipes and a song recording">
            <VaultScreen />
          </Phone>
        </div>
      </section>

      {/* 1 · What My Vault is */}
      <section className="wrap py-20 md:py-32" aria-labelledby="what-title">
        <div className="reveal max-w-[900px] max-md:text-center max-md:mx-auto">
          <p className="kicker">What it is</p>
          <h2 id="what-title" className={H2}>What is My Vault?</h2>
          <p className={ANSWER}>My Vault is your private space on Auvra. It holds the recordings, photographs, documents and cultural materials that matter to you, organised with the context that makes them meaningful, so they are kept together instead of scattered across phones, chats and drawers.</p>
        </div>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TYPES.map((t) => (
            <li key={t.name} className={`reveal flex flex-col gap-3 rounded-[28px] ${t.bg} p-7 max-md:items-center max-md:text-center`}>
              <Icon3D name={t.icon} size={60} />
              <h3 className="mt-2 text-[22px] font-semibold leading-tight">{t.name}</h3>
              <p className="text-[16px] text-grey">{t.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 2 · Personal preservation (full-bleed photo) */}
      <section aria-labelledby="personal-title">
        <Photo name="young-man" alt="A young man in a wrapper and coral beads standing outdoors" sizes="100vw" className="h-[420px] md:h-[620px] w-full object-cover object-[50%_30%]" />
        <div className="wrap py-20 md:py-28 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="reveal max-md:text-center">
            <p className="kicker">Personal preservation</p>
            <h2 id="personal-title" className={H2}>Why keep your own Vault?</h2>
          </div>
          <div className="reveal max-md:text-center">
            <p className="text-[17px] md:text-lg leading-relaxed text-grey">Because the things that matter most are usually the easiest to lose. A voice note from a parent, a photo of a grandparent’s house, a scanned certificate: My Vault gives them a lasting place, separate from the phone they happen to be on today.</p>
            <ul className="ticks mt-8 text-left max-md:inline-flex">
              <li>One place for memories that are spread across devices</li>
              <li>Notes on who, where and when, kept with each item</li>
              <li>Built for keeping, not for scrolling past</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3 · Family preservation */}
      <section className="bg-teal text-white py-20 md:py-32" aria-labelledby="family-title">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal max-md:text-center">
            <p className="kicker !text-[#BFE0E1]">Family preservation</p>
            <h2 id="family-title" className={H2}>Can a whole family preserve together?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#BFE0E1]">Yes. A family Vault brings relatives into one shared space, wherever they live. Grandparents can record stories, parents can add photos and documents, and children abroad can listen to voices and languages they might otherwise never hear.</p>
            <p className="mt-4 text-[17px] md:text-lg leading-relaxed text-[#BFE0E1]">Each person’s additions stay credited to them, so the family record shows who remembered what.</p>
          </div>
          <div className="reveal grid grid-cols-2 gap-3">
            <Photo name="hands-braid" alt="An older hand braiding a child’s hair" sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-[3/4] w-full rounded-[24px] object-cover" />
            <Photo name="elder" alt="An elder in a wide-brimmed hat and robes among family and friends" sizes="(max-width: 1024px) 50vw, 25vw" className="aspect-[3/4] w-full rounded-[24px] object-cover translate-y-8" />
          </div>
        </div>
      </section>

      {/* 4 · Organising */}
      <section className="wrap py-20 md:py-32" aria-labelledby="organise-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal max-md:text-center">
            <p className="kicker">Organising memories and records</p>
            <h2 id="organise-title" className={H2}>How are memories organised in a Vault?</h2>
            <p className={ANSWER}>Around the context that gives them meaning. Each item can carry who is in it or speaking, where and when it comes from, and a short story of why it matters, so a photo is never just a file name.</p>
          </div>
          <figure className="reveal mx-auto w-full max-w-[440px]">
            <div className="rounded-[28px] bg-linen p-3">
              <div className="rounded-[22px] bg-white p-5 shadow-xl">
                <Photo name="gele" alt="" sizes="440px" className="h-[180px] w-full rounded-2xl object-cover" />
                <p className="mt-4 text-[19px] font-semibold leading-tight">Aunty Ngozi’s wedding, 1974</p>
                <dl className="mt-4 grid gap-2 text-[14px]">
                  {[['Who', 'Ngozi, Emeka and their parents'], ['Where', 'Onitsha'], ['Added by', 'Ada'], ['Story', 'The gele was tied by her grandmother']].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 rounded-xl bg-linen px-3 py-2.5"><dt className="font-semibold">{k}</dt><dd className="text-right text-grey">{v}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
            <figcaption className="mt-3 text-center text-[14px] text-grey">Illustrative example of an item kept with its context.</figcaption>
          </figure>
        </div>
      </section>

      {/* 5 · Sharing and invitations */}
      <section className="bg-linen py-20 md:py-32" aria-labelledby="invite-title">
        <div className="wrap">
          <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
            <p className="kicker">Sharing and invitations</p>
            <h2 id="invite-title" className={H2}>How do family members join a Vault?</h2>
            <p className={ANSWER}>With an invitation code. The Vault owner shares the code, and family members download Auvra, enter it and join the Vault. Nobody gets in without an invitation.</p>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-3">
            {INVITE.map(([t, d], i) => (
              <li key={t} className="reveal flex flex-col gap-3 rounded-[28px] bg-white p-7 md:p-9 max-md:items-center max-md:text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-carbon text-[17px] font-semibold text-white">{i + 1}</span>
                <h3 className="mt-2 text-[24px] font-semibold leading-tight">{t}</h3>
                <p className="text-[16px] text-grey">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6 · Ownership and access */}
      <section id="access" className="wrap py-20 md:py-32 scroll-mt-24" aria-labelledby="access-title">
        <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
          <p className="kicker">Vault ownership and access</p>
          <h2 id="access-title" className={H2}>Who owns a Vault, and who can join?</h2>
          <p className={ANSWER}>Any Auvra user can create and own a Vault. The owner selects and pays for the subscription that applies to it. Invited members join with an invitation code and do not need a separate subscription to join that Vault.</p>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <article className="reveal flex flex-col rounded-[32px] bg-carbon p-8 md:p-12 text-white" aria-labelledby="owner-title">
            <div className="flex items-center gap-4 max-md:flex-col max-md:text-center">
              <Icon3D name="vault" size={64} />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-lime">The owner</p>
                <h3 id="owner-title" className="text-[30px] md:text-[36px] font-semibold uppercase tracking-[-0.03em] leading-[0.95]">Vault owner</h3>
              </div>
            </div>
            <dl className="mt-8 grid gap-5">
              <div><dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#BDB6AA]">How they get access</dt><dd className="mt-1 text-[17px]">Creates the Vault</dd></div>
              <div><dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#BDB6AA]">Subscription</dt><dd className="mt-1 text-[17px]">Selects and pays for the applicable subscription</dd></div>
              <div><dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#BDB6AA]">Invitations</dt><dd className="mt-1 text-[17px]">Decides who to invite and shares the invitation code</dd></div>
            </dl>
          </article>
          <article className="reveal flex flex-col rounded-[32px] bg-[#E8F1E4] p-8 md:p-12" aria-labelledby="member-title">
            <div className="flex items-center gap-4 max-md:flex-col max-md:text-center">
              <Icon3D name="group" size={64} />
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-teal">Family and friends</p>
                <h3 id="member-title" className="text-[30px] md:text-[36px] font-semibold uppercase tracking-[-0.03em] leading-[0.95]">Invited member</h3>
              </div>
            </div>
            <dl className="mt-8 grid gap-5">
              <div><dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-olive">How they get access</dt><dd className="mt-1 text-[17px]">Joins with the owner’s invitation code</dd></div>
              <div><dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-olive">Subscription</dt><dd className="mt-1 text-[17px]">No separate subscription needed to join that Vault</dd></div>
              <div><dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-olive">Invitations</dt><dd className="mt-1 text-[17px]">Is part of the Vault because the owner invited them</dd></div>
            </dl>
          </article>
        </div>
      </section>

      {/* 8 · Privacy and control */}
      <section id="privacy" className="bg-carbon text-white py-20 md:py-32 scroll-mt-24" aria-labelledby="privacy-title">
        <div className="wrap">
          <div className="reveal mx-auto max-w-[900px] text-center">
            <Icon3D name="shield" size={80} className="mx-auto" />
            <p className="kicker mt-6 !text-[#BDB6AA]">Privacy and user control</p>
            <h2 id="privacy-title" className={`${H2} mx-auto max-w-[16ch]`}>Is my Vault private?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#A8A29A]">Yes. My Vault is private by default and shared only with people you invite. You decide what goes in, who can join, and what stays yours alone.</p>
          </div>
          <ul className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ['Private by default', 'Nothing in your Vault is public. It is a space for you and the people you choose.'],
              ['Shared by invitation only', 'People join only with an invitation code from the Vault owner.'],
              ['Your information, your say', 'AI features use only the information you have authorised.'],
            ].map(([t, d]) => (
              <li key={t} className="reveal rounded-[28px] bg-[#2A2724] p-7 md:p-9 max-md:text-center">
                <h3 className="text-[22px] font-semibold leading-tight">{t}</h3>
                <p className="mt-3 text-[16px] text-[#BDB6AA]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-20 md:pt-32">
        <Related current="/my-vault" notes={{
          '/cultural-preservation': 'My Vault is where individuals and families keep the materials they are preserving.',
          '/badges#contribution': 'Materials in your Vault can become the start of contributions to a shared cultural record.',
          '/badges#creator': 'Creators can keep the recordings and documents behind their work in a Vault.',
          '/auvra-passport': 'Auvra Passport is designed to connect you to the Vaults and records you are part of.',
        }} />
      </div>

      <FaqBlock items={FAQS} title="My Vault questions" />

      <CtaBlock title="Start with what matters most" text="One recording, one photo, one letter. Give the things you never want to lose a home that lasts." />
    </div>
  );
}

function Related({ current, notes }) {
  const items = PRODUCT_INFO.filter((p) => p.href !== current);
  return (
    <section className="wrap pb-20 md:pb-32" aria-labelledby="related-title">
      <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
        <p className="kicker">Across Auvra</p>
        <h2 id="related-title" className={H2}>How does My Vault connect to the rest of Auvra?</h2>
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
