import { PageHero, CtaBlock } from '../../components/Page.jsx';
import Icon3D from '../../components/Icon3D.jsx';
import { Photo, SectionHead, RelatedProducts, PRODUCTS_CRUMB } from './shared.jsx';

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

export default function CulturalPreservation() {
  return (
    <div className="pd">
      <PageHero
        kicker="Cultural Preservation"
        title="Preserve the knowledge that makes us who we are."
        lead="Auvra provides an environment for documenting and preserving the stories, languages, memories, traditions and cultural knowledge that connect people to their heritage."
        crumbs={[PRODUCTS_CRUMB, { label: 'Cultural Preservation' }]}
      >
        <div className="btn-row">
          <a className="btn btn--dark" href="#materials">What you can preserve</a>
          <a className="btn btn--ghost" href="#connections">How it connects</a>
        </div>
        <div className="pd-hero-media">
          <Photo name="hands-braid" alt="An older hand braiding a child's hair, a skill passed from one generation to the next" eager sizes="(max-width: 760px) 100vw, 45vw" />
          <Photo name="elder-drummer" alt="An elder in white robes holding a drumstick at a festival" eager sizes="(max-width: 760px) 50vw, 25vw" />
          <Photo name="singers" alt="Women in patterned cloth singing together" eager sizes="(max-width: 760px) 50vw, 25vw" />
        </div>
      </PageHero>

      {/* 1 · Introduction */}
      <section className="wrap section" aria-labelledby="intro-title">
        <div className="pd-split">
          <div className="pd-split__text reveal">
            <p className="kicker">Introduction</p>
            <h2 id="intro-title" className="h2">Culture is carried by people</h2>
            <p className="lead">Every family and community holds knowledge that cannot be found anywhere else: the way a story is told, the meaning of a pattern, the words for things that have no translation.</p>
            <p>Cultural preservation on Auvra means giving that knowledge a lasting, organised home. You record or upload it, describe where it comes from and who it belongs to, and keep it in a form the people who come after you can find, understand and continue.</p>
            <p>It is not about putting culture behind glass. It is about keeping it close to the people who live it, with their names attached.</p>
          </div>
          <figure className="pd-figure slide-in">
            <Photo name="sculpture" alt="A man shaping a carved wooden sculpture beside a lake" />
            <figcaption>A sculptor at work. Craft knowledge like this is often learned by watching, and rarely written down.</figcaption>
          </figure>
        </div>
        <div className="pd-callout reveal">
          <Icon3D name="sparkle" size={72} />
          <div>
            <p className="tile__label">Lens AI</p>
            <p className="pd-callout__text">Lens AI transcribes and translates oral histories, tags cultural items and makes archives searchable.</p>
            <p className="pd-callout__sub">You stay in control: what Lens AI produces can be reviewed and corrected by the person who shared the memory.</p>
          </div>
        </div>
      </section>

      {/* 2 · The challenge */}
      <section className="pd-band pattern-bg" aria-labelledby="challenge-title">
        <div className="wrap">
          <p className="kicker reveal">The challenge</p>
          <h2 id="challenge-title" className="serif-xl reveal">Cultural knowledge is everywhere, and <span className="muted">almost nowhere it can last.</span></h2>
          <p className="pd-band__lead reveal">It is spread across people, devices, places and generations. Each piece on its own is fragile. When an elder passes or a phone is lost, what was known can disappear with them.</p>
          <ul className="pd-frags">
            {FRAGMENTS.map(([t, d]) => (
              <li key={t} className="reveal"><h3>{t}</h3><p>{d}</p></li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · Types of materials */}
      <section className="wrap section" id="materials" aria-labelledby="materials-title">
        <SectionHead id="materials-title" kicker="What can be preserved" title="Nine kinds of cultural knowledge" lead="Auvra is designed for the many forms culture takes, from a single voice note to a lifetime of craft." />
        <ol className="pd-mat">
          {MATERIALS.map(([t, d], i) => (
            <li key={t} className="reveal">
              <span className="pd-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 4–5 · Individual, family and community */}
      <section className="wrap section rows" aria-labelledby="scales-title">
        <SectionHead id="scales-title" kicker="Who preserves" title="From one person to a whole community" />

        <article className="row" aria-labelledby="family-title">
          <div className="row__text reveal">
            <Icon3D name="house" size={64} />
            <p className="tile__label">Individual and family preservation</p>
            <h3 id="family-title">Start with the people closest to you.</h3>
            <p>Record a parent describing the house they grew up in. Photograph a grandmother's recipes before the paper wears through. Add the names of everyone in an old wedding photo while someone still remembers them.</p>
            <ul className="ticks">
              <li>Keep recordings, photos and documents together in <a href="/my-vault">My Vault</a></li>
              <li>Note who is speaking, where and when, so the context stays with the memory</li>
              <li>Invite relatives to add what they know</li>
            </ul>
          </div>
          <div className="row__panel pd-photo-panel slide-in">
            <Photo name="beadwork" alt="A smiling woman wearing a red gele and coral beadwork" />
          </div>
        </article>

        <article className="row row--flip" aria-labelledby="community-title">
          <div className="row__text reveal">
            <Icon3D name="group" size={64} />
            <p className="tile__label">Community cultural documentation</p>
            <h3 id="community-title">Document what a community knows together.</h3>
            <p>Hometown unions, cultural associations and groups can gather the accounts of many people into one shared record of their history, festivals, language and craft.</p>
            <ul className="ticks">
              <li>Many voices contribute to one shared history</li>
              <li>Each contribution stays credited to the person who gave it</li>
              <li>Communities decide who can see sensitive or sacred knowledge</li>
            </ul>
          </div>
          <div className="row__panel pd-photo-panel slide-in">
            <Photo name="procession" alt="Men in traditional robes, caps and coral beads walking together in a procession" />
          </div>
        </article>
      </section>

      {/* 6 · Intergenerational continuity */}
      <section className="pd-tint section" aria-labelledby="gens-title">
        <div className="wrap">
          <SectionHead id="gens-title" kicker="Intergenerational continuity" title="Knowledge that keeps moving forward" lead="Preservation matters most when it reaches the next generation, and when they can add to it. Here is how one memory might travel." />
          <ol className="pd-gens">
            {GENERATIONS.map(([t, d], i) => (
              <li key={t} className="reveal">
                <span className="pd-gens__n" aria-hidden="true">{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
          <p className="pd-note reveal">An illustrative example of how a record can pass between generations.</p>
        </div>
      </section>

      {/* 7 · Connections */}
      <div id="connections">
        <RelatedProducts
          current="/cultural-preservation"
          kicker="How it connects"
          title="Preservation sits at the heart of Auvra"
          lead="Everything else on Auvra builds on preserved knowledge: keeping it, adding to it, sharing it and being credited for it."
          notes={{
            '/contribution-badges': 'When someone adds context, a memory or care to a preserved record, a Contribution Badge is designed to record that contribution.',
            '/collectible-badges': 'Creators can document and share cultural expressions as collectibles, with their context and attribution kept intact.',
            '/my-vault': 'The private place where individuals and families keep the materials they are preserving.',
            '/auvra-passport': 'Connects you to the records you have preserved and the contributions you have made.',
          }}
        />
      </div>

      {/* 8 · CTA */}
      <CtaBlock title="Start with one story" text="A single recording of someone you love can be the beginning of a record your family keeps for generations." />
    </div>
  );
}
