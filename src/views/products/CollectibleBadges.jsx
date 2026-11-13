import { CtaBlock } from '../../components/Page.jsx';
import Icon3D from '../../components/Icon3D.jsx';
import { DEFINITIONS } from '../../data/definitions.js';
import { FAQ_GROUPS } from '../../data/faqs.js';
import { Photo, PRODUCT_INFO, PRODUCTS_CRUMB } from './shared.jsx';

// Note: by agreement the Collectible Badge fee is not shown anywhere on the public site.

const H1 = 'font-semibold uppercase tracking-[-0.045em] leading-[0.9] text-[clamp(40px,7.2vw,96px)] text-balance';
const H2 = 'font-semibold uppercase tracking-[-0.04em] leading-[0.92] text-[clamp(38px,5.4vw,70px)] text-balance';
const ANSWER = 'mt-6 text-[17px] md:text-lg leading-relaxed text-grey';

// FAQ answers reused verbatim from src/data/faqs.js.
export const FAQS = FAQ_GROUPS.find((g) => g.title === 'Collectible Badges').items.slice(0, 4);

const CREATORS = ['Musicians', 'Visual artists', 'Storytellers', 'Photographers', 'Craft practitioners', 'Performers'];

const JOURNEY = [
  { icon: 'globe', name: 'Discover', text: 'Find a Collectible Badge through a creator, a community or a story you come across on Auvra.' },
  { icon: 'speech', name: 'Read the story and context', text: 'See what the work is, where it comes from, what it means and who made it, before anything else.' },
  { icon: 'phone', name: 'Claim it in the app', text: 'Claim the badge through the Auvra app, and keep it with its story attached.' },
  { icon: 'shield', name: 'The creator stays credited', text: 'Wherever the badge goes, the creator’s name and the cultural context travel with it.' },
];

const EXAMPLES = [
  { photo: 'mask', alt: 'A person wearing a carved wooden mask and a patterned robe', kind: 'Traditional artwork', title: 'Carved ancestral mask', creator: 'A woodcarver from Benin City', context: 'Carved in a style used for masquerades that honour ancestors, with notes on the wood, tools and meaning of the markings.', format: 'Physical, with a digital record' },
  { photo: 'drummers-row', alt: 'Men playing large drums in a street procession', kind: 'Music', title: 'Dùndún praise rhythm', creator: 'A talking-drum ensemble from Oyo', context: 'A recorded praise rhythm with an explanation of who it honours and when it is traditionally played.', format: 'Digital' },
  { photo: 'durbar', alt: 'A horseman in colourful regalia riding in a festival procession', kind: 'Cultural photography', title: 'Durbar morning', creator: 'A documentary photographer from Kano', context: 'A photograph of the durbar procession, with the names of the regalia and the history of the festival.', format: 'Digital, with an optional print' },
  { photo: 'coral-beads', alt: 'Women wearing coral bead necklaces and red headwear at a festival', kind: 'Craftsmanship', title: 'Coral bead regalia', creator: 'A bead-maker and her apprentices', context: 'Beadwork made for ceremonial dress, with the stringing technique and the occasions it is worn for.', format: 'Physical, with a digital record' },
  { photo: 'dancers', alt: 'Dancers in raffia costumes performing outdoors', kind: 'Documented cultural expression', title: 'New yam festival dance', creator: 'A community dance troupe', context: 'A documented performance with the meaning of the movements and the role of the dance in the festival.', format: 'Digital' },
];

const TINTS = { gold: 'bg-[#FFF4D6]', lime: 'bg-[#E8F1E4]', salmon: 'bg-[#FFE9E3]', blue: 'bg-[#ECE8FF]', carbon: 'bg-linen' };

function Phone({ label, children, className = '' }) {
  return (
    <div className={`phone-frame ${className}`} role="img" aria-label={label}>
      <div className="phone-frame__screen">{children}</div>
      <img className="phone-frame__img" src="/images/phone-frame.png" alt="" width="604" height="1227" loading="lazy" />
    </div>
  );
}

export default function CollectibleBadges() {
  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="bg-[#ECE8FF]" aria-labelledby="page-title">
        <div className="wrap pt-[108px] md:pt-[130px] pb-12 md:pb-20 max-md:text-center">
          <nav className="crumbs max-md:[&_ol]:justify-center" aria-label="Breadcrumb">
            <ol><li><a href="/">Home</a></li><li><a href={PRODUCTS_CRUMB.href}>{PRODUCTS_CRUMB.label}</a></li><li><span aria-current="page">Collectible Badges</span></li></ol>
          </nav>
          <p className="kicker">Collectible Badges</p>
          <h1 id="page-title" className={`${H1} max-w-[16ch] max-md:mx-auto`}>Give cultural expressions a way to travel across generations.</h1>
          <p className="mt-8 max-w-[46rem] text-[18px] md:text-xl leading-relaxed text-[#3A3631] max-md:mx-auto">{DEFINITIONS.collectibleBadges.long}</p>
          <div className="mt-8 flex flex-wrap gap-3 max-md:justify-center">
            <a className="btn btn--dark" href="#claiming">How claiming works</a>
            <a className="btn btn--ghost" href="#examples">See examples</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr]">
          <Photo name="masquerade" alt="A performer with blue face paint and a horned headdress at a festival" eager sizes="40vw" className="hidden md:block h-[600px] w-full object-cover" />
          <Photo name="drummer-blue" alt="A man in blue adire cloth playing a talking drum" eager sizes="(max-width: 760px) 100vw, 60vw" className="h-[420px] md:h-[600px] w-full object-cover" />
        </div>
      </section>

      {/* 1 · What they are */}
      <section className="wrap py-20 md:py-32" aria-labelledby="what-title">
        <div className="reveal max-w-[900px] max-md:text-center max-md:mx-auto">
          <p className="kicker">What they are</p>
          <h2 id="what-title" className={H2}>What is a Collectible Badge?</h2>
          <p className={ANSWER}>A Collectible Badge is a cultural work presented together with its story. The creator documents the expression, explains where it comes from and what it means, and shares it as a digital or physical item that people can discover and claim, with the creator’s name attached.</p>
          <p className="mt-4 text-[17px] md:text-lg leading-relaxed text-grey">It is not a product listing. The context comes first: who made it, which community it belongs to, and why it matters.</p>
        </div>
        <ul className="reveal mt-10 flex flex-wrap gap-2 max-md:justify-center">
          {['Creator attribution', 'Cultural context', 'Digital & physical formats', 'Audience discovery', 'Claiming in the app'].map((t) => (
            <li key={t} className="rounded-full bg-[#ECE8FF] px-4 py-2 text-[15px] font-medium text-blue">{t}</li>
          ))}
        </ul>
      </section>

      {/* 2 · Role of creators */}
      <section className="bg-espresso text-white py-20 md:py-32" aria-labelledby="creators-title">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal order-2 lg:order-1">
            <Photo name="sculpture" alt="A sculptor at work on a carved wooden figure" sizes="(max-width: 1024px) 100vw, 50vw" className="aspect-[4/5] w-full rounded-[32px] object-cover" />
          </div>
          <div className="reveal order-1 lg:order-2 max-md:text-center">
            <p className="kicker !text-[#E6D3CA]">The role of creators</p>
            <h2 id="creators-title" className={H2}>Who creates Collectible Badges?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#E6D3CA]">Creators who document and share cultural expressions. They decide what to share, tell its story in their own words and remain its credited author.</p>
            <ul className="mt-8 flex flex-wrap gap-2 max-md:justify-center">
              {CREATORS.map((c) => <li key={c} className="rounded-full border border-white/25 px-4 py-2 text-[15px]">{c}</li>)}
            </ul>
            <p className="mt-8 text-[16px] text-[#E6D3CA]">A creator might be a master carver sharing a single piece, or a young musician recording the songs their grandmother taught them.</p>
          </div>
        </div>
      </section>

      {/* 3 · Cultural context and attribution */}
      <section className="wrap py-20 md:py-32" aria-labelledby="context-title">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal max-md:text-center">
            <p className="kicker">Context and attribution</p>
            <h2 id="context-title" className={H2}>Why does every badge carry its context?</h2>
            <p className={ANSWER}>Because a cultural expression separated from its story loses its meaning. Each Collectible Badge keeps the creator’s name, the community or tradition it comes from, and an explanation of what it is, so the work is understood the way its creator intended.</p>
          </div>
          <figure className="reveal mx-auto w-full max-w-[460px]">
            <dl className="overflow-hidden rounded-[28px] border border-line bg-white shadow-xl">
              <div className="relative">
                <Photo name="mask" alt="" sizes="460px" className="h-[200px] w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold">Illustrative example</span>
              </div>
              {[
                ['Creator', 'A woodcarver from Benin City'],
                ['Cultural context', 'Masquerade traditions that honour ancestors'],
                ['Story', 'Why the markings are carved the way they are'],
                ['Format', 'Physical, with a digital record'],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 border-t border-line px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-blue">{k}</dt>
                  <dd className="text-[15px] sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>
            <figcaption className="mt-3 text-center text-[14px] text-grey">What a Collectible Badge is designed to carry with it.</figcaption>
          </figure>
        </div>
      </section>

      {/* 4 · Formats */}
      <section className="bg-linen py-20 md:py-32" aria-labelledby="formats-title">
        <div className="wrap">
          <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
            <p className="kicker">Digital and physical formats</p>
            <h2 id="formats-title" className={H2}>Can a Collectible Badge be digital or physical?</h2>
            <p className={ANSWER}>Both. A Collectible Badge may represent a digital expression, such as a recording or a photograph, or a physical one, such as a carving or a piece of beadwork. Either way, it carries the same context and attribution.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <article className="reveal flex flex-col gap-4 rounded-[32px] bg-blue p-8 md:p-12 text-white max-md:text-center max-md:items-center">
              <Icon3D name="phone" size={72} />
              <h3 className="text-[30px] md:text-[38px] font-semibold uppercase tracking-[-0.03em] leading-[0.95]">Digital</h3>
              <p className="text-[17px] text-[#DCD5FF]">Music, recorded stories, cultural photography, artwork and documented performances, kept with their story in the Auvra app.</p>
            </article>
            <article className="reveal flex flex-col gap-4 rounded-[32px] bg-teal p-8 md:p-12 text-white max-md:text-center max-md:items-center">
              <Icon3D name="gift" size={72} />
              <h3 className="text-[30px] md:text-[38px] font-semibold uppercase tracking-[-0.03em] leading-[0.95]">Physical</h3>
              <p className="text-[17px] text-[#BFE0E1]">Crafted objects, textiles, carvings and prints, connected to a digital record that keeps the creator’s name and the context of the work.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 5 · Discovery and claiming */}
      <section id="claiming" className="wrap py-20 md:py-32 scroll-mt-24" aria-labelledby="claiming-title">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <div className="reveal max-md:text-center">
              <p className="kicker">Discovery and claiming</p>
              <h2 id="claiming-title" className={H2}>How does claiming work?</h2>
              <p className={ANSWER}>Audiences discover a Collectible Badge, read its story and context, and claim it through the Auvra app. The creator stays credited wherever the badge goes.</p>
            </div>
            <ol className="mt-10 flex flex-col gap-3">
              {JOURNEY.map((j, i) => (
                <li key={j.name} className="reveal flex items-start gap-4 rounded-[24px] bg-[#ECE8FF] p-5 md:p-6">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-blue text-[15px] font-semibold text-white">{i + 1}</span>
                  <div>
                    <h3 className="text-[20px] font-semibold leading-tight">{j.name}</h3>
                    <p className="mt-1 text-[16px] text-grey">{j.text}</p>
                  </div>
                  <Icon3D name={j.icon} size={44} className="ml-auto hidden sm:block" />
                </li>
              ))}
            </ol>
          </div>
          <Phone label="Illustrative Collectible Badge screen in the Auvra app: a talking-drum recording with its creator, cultural context and a claim button" className="reveal">
            <div className="h-full overflow-hidden bg-white text-carbon">
              <div className="relative h-[50%]">
                <img src="/images/photos/drummer-blue-480.webp" alt="" className="h-full w-full object-cover" loading="lazy" />
                <span className="absolute left-3 top-[13%] rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold">Illustrative example</span>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-blue">Collectible Badge · Digital</p>
                <p className="text-[19px] font-semibold leading-tight">Ìyá Ìlù, the mother drum</p>
                <p className="text-[12px] text-grey">Created by a talking-drum player · Ibadan</p>
                <p className="font-serif text-[13px] leading-snug">A recording of the lead drum that “speaks” praise names, with an explanation of how its tones follow spoken Yoruba.</p>
                <span className="mt-2 rounded-full bg-carbon py-2.5 text-center text-[13px] font-semibold text-white">Claim in the app</span>
              </div>
            </div>
          </Phone>
        </div>
      </section>

      {/* 6 · Creator and audience */}
      <section className="bg-carbon text-white py-20 md:py-32" aria-labelledby="relationship-title">
        <div className="wrap">
          <div className="reveal mx-auto max-w-[900px] text-center">
            <p className="kicker !text-[#BDB6AA]">Creators and audiences</p>
            <h2 id="relationship-title" className={`${H2} mx-auto max-w-[18ch]`}>What connects a creator to their audience?</h2>
            <p className="mt-6 text-[17px] md:text-lg leading-relaxed text-[#A8A29A]">The story behind the work. Audiences do not just receive an item; they learn where it comes from and who made it. Creators keep their name on their work and can see it carried by people who value it.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <article className="reveal rounded-[28px] bg-[#2A2724] p-7 md:p-10 max-md:text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-salmon">For creators</p>
              <ul className="ticks mt-5 text-left max-md:inline-flex">
                <li>Present your work in your own words</li>
                <li>Keep your name attached wherever it goes</li>
                <li>Share the tradition your work comes from</li>
              </ul>
            </article>
            <article className="reveal rounded-[28px] bg-[#2A2724] p-7 md:p-10 max-md:text-center">
              <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-lime">For audiences</p>
              <ul className="ticks mt-5 text-left max-md:inline-flex">
                <li>Discover cultural work with its story intact</li>
                <li>Learn who made it and what it means</li>
                <li>Carry a piece of culture forward, with credit</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* 7 · Examples */}
      <section id="examples" className="wrap py-20 md:py-32 scroll-mt-24" aria-labelledby="examples-title">
        <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
          <p className="kicker">Example badges</p>
          <h2 id="examples-title" className={H2}>What can a Collectible Badge represent?</h2>
          <p className={ANSWER}>Traditional artwork, music, cultural photography, craftsmanship and documented cultural expressions, always presented with the creator’s attribution and context.</p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map((e) => (
            <li key={e.title} className="reveal">
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-white">
                <div className="relative">
                  <Photo name={e.photo} alt={e.alt} sizes="(max-width: 640px) 100vw, 33vw" className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-semibold">Illustrative example</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-blue">{e.kind}</p>
                  <h3 className="mt-2 text-[24px] font-semibold leading-tight">{e.title}</h3>
                  <dl className="mt-4 grid gap-3 text-[15px]">
                    <div><dt className="font-semibold">Creator</dt><dd className="text-grey">{e.creator}</dd></div>
                    <div><dt className="font-semibold">Cultural context</dt><dd className="text-grey">{e.context}</dd></div>
                    <div><dt className="font-semibold">Format</dt><dd className="text-grey">{e.format}</dd></div>
                  </dl>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <Related current="/collectible-badges" notes={{
        '/cultural-preservation': 'The wider environment for documenting the traditions that creators draw on.',
        '/contribution-badges': 'Where Collectible Badges carry a creator’s own work, Contribution Badges record what people add to existing records.',
        '/my-vault': 'A private place to keep the recordings, photos and documents behind your work.',
        '/auvra-passport': 'Auvra Passport is designed to connect creators to the work they share, so it stays attributed to them.',
      }} />

      <FaqBlock items={FAQS} title="Collectible Badge questions" />

      <CtaBlock title="Share a tradition with its story" text="Discover how Auvra helps creators present cultural work with its context and their name attached." />
    </div>
  );
}

function Related({ current, notes }) {
  const items = PRODUCT_INFO.filter((p) => p.href !== current);
  return (
    <section className="wrap pb-20 md:pb-32" aria-labelledby="related-title">
      <div className="reveal max-w-[860px] max-md:text-center max-md:mx-auto">
        <p className="kicker">Across Auvra</p>
        <h2 id="related-title" className={H2}>How do Collectible Badges fit into Auvra?</h2>
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
