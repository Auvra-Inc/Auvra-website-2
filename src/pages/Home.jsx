import { Link } from 'react-router-dom';
import StoreButtons from '../components/StoreButtons.jsx';
import Icon3D from '../components/Icon3D.jsx';
import Faq from '../components/Faq.jsx';
import Deck from '../components/Deck.jsx';
import { SubscribeForm } from '../components/Forms.jsx';
import { HOME_FAQS, GALLERY, RIBBON, MOVEMENT, DRIFT } from '../data/site.js';

const preserve = ['Oral histories', 'Languages', 'Recipes', 'Rituals', 'Crafts', 'Songs', 'Family memories'];
const partners = [
  { name: 'Paystack', src: '/images/partners/paystack.png', w: 600, h: 106 },
  { name: 'Dojah', src: '/images/partners/dojah.svg', w: 67, h: 30 },
  { name: 'ElevenLabs', src: '/images/partners/elevenlabs.svg', w: 694, h: 90 },
  { name: 'NVIDIA Inception Program', src: '/images/partners/nvidia.png', w: 267, h: 94 },
];
const driftRows = [0, 1, 2, 3, 4, 5].map((r) => [...DRIFT.slice(r * 2), ...DRIFT.slice(0, r * 2)]);

export default function Home() {
  return (
    <>
      {/* 2 · Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__glow" aria-hidden="true"></div>
        <div className="hero__halo" aria-hidden="true"></div>
        <div className="ribbon" aria-hidden="true" data-pause-offscreen="">
          <div className="ribbon__ring" style={{ '--n': `${RIBBON.length}` }}>
            {RIBBON.map((ph, i) => (
              <div key={i} className="ribbon__card" style={{ '--i': `${i}` }}><img src={ph.thumb} alt="" width="240" height="320" decoding="async" fetchPriority={i < 3 ? 'high' : 'low'} /></div>
            ))}
          </div>
        </div>
        <div className="hero__content wrap">
          <p className="kicker-pill"><span aria-hidden="true">✦</span> The permanent home for human culture</p>
          <h1 id="hero-title" className="mega">
            <span className="line">Your story.</span>
            <span className="line">Your culture.</span>
            <span className="line">Your <em className="hl">legacy.</em></span>
          </h1>
          <p className="hero__sub">Record the stories, languages and traditions that make you who you are. Lens AI transcribes and translates them, and your family keeps them for generations.</p>
          <StoreButtons />
        </div>
      </section>
    
      {/* 3 · App preview stage */}
      <section className="stage wrap" aria-label="A look inside the Auvra app">
        <div className="stage__inner">
          <div className="phone" role="img" aria-label="The Auvra app showing a family story transcribed by Lens AI">
            <div className="phone__notch"></div>
            <div className="phone__screen">
              <div className="app-top"><span>9:41</span><span className="app-top__icons">●●●</span></div>
              <div className="app-photo"><img src="/images/photos/hands-braid-480.webp" alt="" width="480" height="320" loading="lazy" /><span className="chip chip--blue">✦ Transcribed by Lens AI</span></div>
              <h3 className="app-title">How our family began</h3>
              <p className="app-meta">Told by Grandma Nneoma · Igbo · 2:14</p>
              <div className="player">
                <span className="player__btn" aria-hidden="true">▶</span>
                <span className="wave" aria-hidden="true">{Array.from({ length: 28 }).map((_, i) => <i key={i} style={{ '--h': `${20 + ((i * 37) % 70)}%` }}></i>)}</span>
                <span className="player__time">0:48</span>
              </div>
              <div className="transcript">
                <small>Transcript</small>
                <p>“Our great-grandfather came from Nnewi with nothing but a hoe and a song…”</p>
              </div>
              <div className="app-tabs" aria-hidden="true"><span className="on">Vault</span><span>Lens AI</span><span>Community</span></div>
            </div>
          </div>
    
          <div className="float-card fc1" aria-hidden="true">
            <div className="fc-row"><span className="dot dot--salmon">🎙</span><div><b>Voice note</b><small>Recorded today</small></div></div>
            <span className="wave wave--sm">{Array.from({ length: 22 }).map((_, i) => <i key={i} style={{ '--h': `${25 + ((i * 53) % 70)}%` }}></i>)}</span>
          </div>
          <div className="float-card fc2" aria-hidden="true">
            <div className="fc-row"><span className="dot dot--blue">✦</span><b>Lens AI · Translation</b></div>
            <p className="tr"><small>Igbo</small>Nna nna anyi si Nnewi bia</p>
            <p className="tr"><small>English</small>Our great-grandfather came from Nnewi</p>
          </div>
          <div className="float-card fc3" aria-hidden="true">
            <b>Okafor Family Vault</b>
            <small>Private · 4 members</small>
            <span className="avatars"><img src="/images/photos/elder-480.webp" alt="" loading="lazy" /><img src="/images/photos/beadwork-480.webp" alt="" loading="lazy" /><img src="/images/photos/young-man-480.webp" alt="" loading="lazy" /><img src="/images/photos/gele-480.webp" alt="" loading="lazy" /></span>
          </div>
          <div className="float-card fc4" aria-hidden="true">
            <div className="fc-row"><span className="dot dot--lime">✓</span><b>Preserved</b></div>
            <small>Credited to Grandma Nneoma</small>
            <small>A permanent family record</small>
          </div>
        </div>
      </section>
    
      {/* 4 · Partners */}
      <section className="partners" aria-labelledby="partners-title">
        <h2 id="partners-title" className="partners__title">Our partners in innovation</h2>
        <div className="marquee marquee--partners" data-pause-offscreen="">
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <ul key={copy} className="marquee__group" aria-hidden={copy === 1 ? true : undefined}>
                {partners.map((pt) => (
                  <li key={pt.name} className="partner"><img src={pt.src} alt={copy === 0 ? pt.name : ''} width={pt.w} height={pt.h} loading="lazy" /></li>
                ))}
                {partners.map((pt) => (
                  <li key={pt.name + 2} className="partner" aria-hidden="true"><img src={pt.src} alt="" width={pt.w} height={pt.h} loading="lazy" /></li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    
      {/* 5 · What we preserve */}
      <section className="preserve" aria-label="What we preserve">
        <div className="preserve__band">
          <p className="sr-only">We preserve {preserve.join(', ')}.</p>
          <div className="marquee marquee--preserve" aria-hidden="true" data-pause-offscreen="">
            <div className="marquee__track">
              {[0, 1].map((k) => (
                <div key={k} className="marquee__group">{[...preserve, ...preserve].map((w, i) => <span key={i} className="preserve__item">{w}<span className="star">✦</span></span>)}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
    
      {/* 6 · Intro + 3 steps */}
      <section className="intro wrap section" aria-labelledby="intro-title">
        <h2 id="intro-title" className="h2 reveal">The cultural preservation platform <span className="hl-bg">built for you</span></h2>
        <p className="lead reveal">Auvra is the AI-powered home where families, creators and communities preserve what matters, so it is never lost and always credited to the people who carry it.</p>
        <ol className="steps3 reveal">
          <li><Icon3D name="mic" size={44} /><span><b>1</b> Record a memory</span></li>
          <li><Icon3D name="sparkle" size={44} /><span><b>2</b> Lens AI understands it</span></li>
          <li><Icon3D name="gift" size={44} /><span><b>3</b> Pass it down forever</span></li>
        </ol>
      </section>
    
      {/* 7 · Bento */}
      <section className="wrap section bento-wrap" id="features" aria-labelledby="features-title">
        <p className="kicker reveal">Product features</p>
        <h2 id="features-title" className="h2 reveal">What you need to know about Auvra</h2>
        <div className="bento">
          <article className="tile tile--carbon t-vault reveal">
            <Icon3D name="vault" size={96} className="tile__icon" />
            <p className="tile__label">My Vault</p>
            <h3>A private home for your family's memories</h3>
            <p>Voice notes, photos, videos and documents, organised and shared only with the people you invite.</p>
            <ul className="chips"><li>Voice notes</li><li>Photos</li><li>Documents</li><li>Family invites</li></ul>
          </article>
          <article className="tile tile--blue t-lens reveal" id="lens-ai">
            <Icon3D name="sparkle" size={88} className="tile__icon" />
            <p className="tile__label">Lens AI</p>
            <h3>AI that understands culture</h3>
            <p>Transcribes and translates oral histories, tags cultural items and makes archives searchable.</p>
            <p className="tile__big">Igbo → English</p>
          </article>
          <article className="tile tile--gold reveal">
            <Icon3D name="shield" size={80} className="tile__icon" />
            <p className="tile__label">Contribution Badges</p>
            <h3>Shared knowledge, permanently credited</h3>
            <p>Communities add memories and context to a record without ever changing the original.</p>
          </article>
          <article className="tile tile--lime reveal">
            <Icon3D name="group" size={80} className="tile__icon" />
            <p className="tile__label">Communities</p>
            <h3>A home for your town or cultural group</h3>
            <p>Hometown unions, associations and cultural groups preserve their heritage together.</p>
          </article>
          <article className="tile tile--salmon reveal">
            <Icon3D name="passport" size={80} className="tile__icon" />
            <p className="tile__label">Auvra Passport</p>
            <h3>Your record of everything you preserve</h3>
            <p>Your profile links you to your records and contributions, so your credit always follows you.</p>
          </article>
        </div>
      </section>
    
      {/* 8 · Manifesto */}
      <section className="manifesto pattern-bg" aria-labelledby="manifesto-title">
        <div className="wrap manifesto__inner">
          <h2 id="manifesto-title" className="serif-xl reveal">Because culture is worth more than <span className="muted">a scroll on someone's feed.</span></h2>
          <p className="reveal">Every day, stories are told at family gatherings, in village squares and on voice notes, and then they disappear. When an elder passes, a library goes with them. Auvra gives that knowledge a calm, permanent home, owned by the people who carry it.</p>
          <a className="btn btn--linen reveal" href="#get-started">Start preserving</a>
        </div>
      </section>
    
      {/* 9 · Gallery */}
      <section className="gallery section" aria-labelledby="gallery-title">
        <div className="wrap gallery__inner">
          <div className="gallery__text">
            <h2 id="gallery-title" className="serif-xl">Not caged. <em className="blue">But lived.</em></h2>
            <p className="gallery__hint"><span aria-hidden="true">👆</span> Touch to change photo</p>
          </div>
          <div className="gallery__stage">
            <Deck photos={GALLERY} />
          </div>
        </div>
      </section>
    
      {/* 10 · Feature rows */}
      <section className="wrap section rows" aria-labelledby="rows-title">
        <p className="kicker reveal">Built for preservation</p>
        <h2 id="rows-title" className="h2 reveal">Everything you need to keep culture alive</h2>
    
        <article className="row">
          <div className="row__text reveal">
            <Icon3D name="speech" size={64} />
            <p className="tile__label">Lens AI</p>
            <h3>Speak in your language. Lens AI does the rest.</h3>
            <p>Lens AI transcribes and translates oral histories, tags cultural items and makes archives searchable, starting with African languages.</p>
            <ul className="ticks">
              <li>Transcription of elders' voice notes</li>
              <li>Translation between African languages, English and French</li>
              <li>Tags for people, places and traditions</li>
              <li>You can always review and edit what it writes</li>
            </ul>
          </div>
          <div className="row__panel slide-in" style={{ '--tint': '#ECE8FF' }}>
            <div className="screen chat" role="img" aria-label="Lens AI chat transcribing and translating a recording">
              <p className="screen__head"><span className="dot dot--blue">✦</span> Lens AI</p>
              <p className="bubble bubble--me">Transcribe Grandpa's recording and translate it to English.</p>
              <p className="bubble bubble--ai">Done. Here is the transcript and the English translation. I tagged it <b>Family history</b> and <b>Nnewi</b>, and found 2 related recordings.</p>
              <div className="chips chips--light"><span>View transcript</span><span>Translate to French</span><span>Open related</span></div>
            </div>
          </div>
        </article>
    
        <article className="row row--flip" id="my-vault">
          <div className="row__text reveal">
            <Icon3D name="vault" size={64} />
            <p className="tile__label">My Vault</p>
            <h3>Your family's memories, kept together.</h3>
            <p>Create a private Vault, invite your family with a code, and keep voices, photos and documents in one safe place.</p>
            <ul className="ticks">
              <li>Invite family with a code; they join free</li>
              <li>Private by default, shared only with people you invite</li>
              <li>Every memory credited to the person who shared it</li>
            </ul>
          </div>
          <div className="row__panel slide-in" style={{ '--tint': '#FFF4D6' }}>
            <div className="screen vault" role="img" aria-label="The Okafor Family Vault with a voice memory, wedding photos and handwritten recipes">
              <div className="screen__head screen__head--split"><span><b>Okafor Family Vault</b><small>Private · 4 members</small></span><span className="invite">+ Invite</span></div>
              <ul className="vault__list">
                <li><span className="vthumb vthumb--salmon">🎙</span><span><b>How our family began</b><small>Voice memory · Grandma Nneoma</small></span></li>
                <li><img className="vthumb" src="/images/photos/gele-480.webp" alt="" loading="lazy" /><span><b>Wedding photos, 1974</b><small>24 photos · Uncle Emeka</small></span></li>
                <li><span className="vthumb vthumb--gold">📜</span><span><b>Mama's handwritten recipes</b><small>Documents · Ada</small></span></li>
              </ul>
            </div>
          </div>
        </article>
    
        <article className="row" id="communities">
          <div className="row__text reveal">
            <Icon3D name="group" size={64} />
            <p className="tile__label">Communities</p>
            <h3>A permanent archive for your people.</h3>
            <p>Hometown unions, cultural associations and groups preserve their history together, with every contribution credited.</p>
            <ul className="ticks">
              <li>Register your town, union or group as a community</li>
              <li>Members add memories under the original record</li>
              <li>Sacred knowledge stays with its community</li>
            </ul>
          </div>
          <div className="row__panel slide-in" style={{ '--tint': '#E8F1E4' }}>
            <div className="screen community" role="img" aria-label="The Igbo-Ukwu Heritage Circle community page with a record on bronze casting">
              <div className="community__cover"><img src="/images/photos/sculpture-480.webp" alt="" loading="lazy" /></div>
              <p className="screen__head"><b>Igbo-Ukwu Heritage Circle</b></p>
              <div className="record">
                <b>Bronze casting</b>
                <small>Told by Chidi Okeke</small>
                <div className="record__tags"><span className="tag tag--dark">Original record</span><span className="tag">3 contributions added</span></div>
              </div>
            </div>
          </div>
        </article>
      </section>
    
      {/* 11 · How it works */}
      <section className="how section" aria-labelledby="how-title" id="get-started">
        <div className="wrap">
          <p className="kicker reveal">How it works</p>
          <h2 id="how-title" className="h2 reveal">Simple steps to get you started</h2>
          <ol className="how__grid">
            <li className="how__card reveal"><span className="how__n">01</span><Icon3D name="phone" size={88} /><h3>Download Auvra</h3><p>Create your free account in seconds on iPhone or Android.</p></li>
            <li className="how__card reveal"><span className="how__n">02</span><Icon3D name="house" size={88} /><h3>Start your Vault</h3><p>Make a family Vault or join your community, then invite the people who matter.</p></li>
            <li className="how__card reveal"><span className="how__n">03</span><Icon3D name="mic" size={88} /><h3>Record and upload</h3><p>Add voice notes, photos and documents. Lens AI transcribes and translates them.</p></li>
            <li className="how__card how__card--carbon reveal"><span className="how__n">04</span><Icon3D name="gift" size={88} /><h3>Pass it down</h3><p>Your culture is preserved, credited to you, and ready for the next generation.</p></li>
          </ol>
        </div>
      </section>
    
      {/* 12 · FAQs */}
      <section className="wrap section faq-sec" aria-labelledby="faq-title">
        <div className="faq-sec__head">
          <p className="kicker reveal">FAQs</p>
          <h2 id="faq-title" className="h2 reveal">Got questions? Here are some answers</h2>
          <div className="faq-sec__btns reveal">
            <Link className="btn btn--dark" to="/faqs">See all FAQs →</Link>
            <Link className="btn btn--ghost" to="/contact">Contact us</Link>
          </div>
        </div>
        <Faq items={HOME_FAQS} />
      </section>
    
      {/* 13 · Movement */}
      <section className="wrap section movement" aria-labelledby="movement-title">
        <h2 id="movement-title" className="h2 reveal">More than a platform. <span className="hl-bg">A movement.</span></h2>
        <p className="lead reveal">Auvra is building a community of families, storytellers, creators and cultural keepers who believe culture deserves a permanent home. Join early and help shape it.</p>
        <ul className="movement__strip">
          {MOVEMENT.map((ph) => <li key={ph.src} className="reveal"><img src={ph.src} srcSet={`${ph.thumb} 480w, ${ph.src} 960w`} sizes="(max-width: 760px) 45vw, 230px" alt={ph.alt} width="480" height="720" loading="lazy" /></li>)}
        </ul>
      </section>
    
      {/* 14 · Final CTA */}
      <section className="wrap cta-wrap" aria-labelledby="cta-title">
        <div className="cta">
          <div className="drift" aria-hidden="true" data-pause-offscreen="">
            <div className="drift__grid">
              {[0, 1].map((k) => driftRows.map((row, r) => (
                <div key={`${k}-${r}`} className="drift__row">{[...row, ...row].map((src, i) => <img key={i} src={src} alt="" width="200" height="260" loading="lazy" />)}</div>
              )))}
            </div>
          </div>
          <div className="cta__shade" aria-hidden="true"></div>
          <div className="cta__content">
            <h2 id="cta-title" className="h2">What we keep today, tomorrow remembers.</h2>
            <p>Start preserving your family's story today. It's free to begin.</p>
            <StoreButtons variant="light" />
            <SubscribeForm />
          </div>
        </div>
      </section>
    </>
  );
}
