import Icon3D from '../../components/Icon3D.jsx';
import { Status } from '../../components/Page.jsx';
import { DEFINITIONS } from '../../data/definitions.js';
import { H1, H2, LEAD, Crumbs, Photo, Kicker, QA, FaqList, FinalCta } from '../editorial.jsx';

export const LENS_FAQS = [
  { q: 'What is Lens AI?', a: DEFINITIONS.lensAI.long },
  { q: 'Is Lens AI available yet?', a: 'Not yet. Lens AI is in development. Transcription and translation of voice notes and cultural tagging are being built now, and archive search is planned.' },
  { q: 'Which languages will Lens AI support?', a: 'Lens AI starts with African languages, English and French, with a focus on indigenous and underrepresented languages. The list is expected to grow as communities contribute recordings with their consent.' },
  { q: 'Can I edit what Lens AI produces?', a: 'Yes. Every transcript, translation and tag is a draft that the person who shared the memory can review and correct. Lens AI supports people; it does not replace their knowledge or authority.' },
  { q: 'Does Auvra use my content to train Lens AI?', a: 'By default, no. Auvra does not use your personal content, including private Vault content, to train or improve Lens AI. Any programme to improve Lens AI would be opt-in, through a separate consent flow. See the AI Policy for details.' },
];

// Current development status. Keep this table honest: only move a row to "Available now" once it has shipped.
const CAPABILITIES = [
  // TODO(Emmanuel): confirm
  { name: 'Transcription and translation of voice notes', text: 'Turn a recorded memory into written text in its original language, with a translation alongside.', status: 'developing' },
  // TODO(Emmanuel): confirm
  { name: 'Cultural tagging', text: 'Suggested tags for people, places, languages and practices, which you can accept, edit or remove.', status: 'developing' },
  // TODO(Emmanuel): confirm
  { name: 'Review and editing of AI drafts', text: 'Every transcript, translation and tag can be checked and corrected by the person who shared it.', status: 'developing' },
  // TODO(Emmanuel): confirm
  { name: 'Archive search', text: 'Find a story, a voice or a place across your preserved records using everyday words.', status: 'planned' },
];
const GROUPS = [
  { kind: 'live', title: 'Available now', empty: 'No Lens AI capabilities are publicly available yet. We will list them here as they launch.' },
  { kind: 'developing', title: 'In development' },
  { kind: 'planned', title: 'Planned' },
];

const STEPS = [
  ['mic', 'Record', 'An elder tells a story in their own language, as a voice note or a longer recording.'],
  ['speech', 'Transcribe', 'Lens AI drafts a written transcript of what was said, kept next to the original audio.'],
  ['globe', 'Translate', 'A translation is drafted for relatives who speak another language.'],
  ['shield', 'Review', 'The family checks names, places and meanings, and corrects anything Lens AI got wrong.'],
];

const RESPONSIBLE = [
  ['Consent', 'Recordings are processed only by people who choose to use Lens AI. Nothing is made public without permission.'],
  ['Attribution', 'Every transcript and translation stays linked to the person who shared the original memory.'],
  ['Privacy', 'Private Vault content is not used to train Lens AI by default. Any training programme would be opt-in.'],
  ['Cultural context', 'Some knowledge is sacred or restricted. Communities decide who can see it, and AI suggestions never override that.'],
  ['Human oversight', 'AI outputs are drafts, not authorities. People review them, correct them and have the final word.'],
];

export default function LensAI({ demo }) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#ECE8FF] -mt-[88px] pt-[130px] md:pt-[160px] pb-16 md:pb-24" aria-labelledby="lens-title">
        <div className="wrap text-center">
          <Crumbs items={[{ label: 'Technology' }, { label: 'Lens AI' }]} />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <p className="kicker !mb-0">Lens AI</p>
            <Status kind="developing" />
          </div>
          <h1 id="lens-title" className={`${H1} mx-auto mt-6 max-w-[15ch] text-carbon`}>Technology that helps cultural knowledge become more accessible.</h1>
          <p className="mx-auto mt-8 max-w-[36rem] text-[18px] md:text-xl leading-relaxed text-[#3A3631]">Speech and language tools that help families and communities document what they know, in the languages they speak, and keep it readable for the generations after them.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="#status" className="btn btn--dark">See what is available</a>
            <a href="#responsible" className="btn btn--ghost">How we build it responsibly</a>
          </div>
        </div>
      </section>

      {/* 1 · Introduction */}
      <section className="bg-blue text-white py-20 md:py-28 overflow-hidden" aria-labelledby="what-title">
        <div className="wrap grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div className="max-md:text-center">
            <Kicker light>Introduction</Kicker>
            <h2 id="what-title" className={`reveal ${H2} max-w-[14ch] max-md:mx-auto`}>What is Lens AI?</h2>
            <p className={`reveal ${LEAD} mt-7 max-w-[600px] text-white max-md:mx-auto`}>{DEFINITIONS.lensAI.long}</p>
            <p className={`reveal ${LEAD} mt-5 max-w-[600px] text-[#DCD5FF] max-md:mx-auto`}>It works inside the Auvra app, alongside <a className="underline" href="/cultural-preservation">Cultural Preservation</a> and <a className="underline" href="/my-vault">My Vault</a>. Its job is simple: make what people preserve easier to read, understand and find, without taking the record away from the person who shared it.</p>
            <p className="reveal mt-6 text-[15px] text-[#BFB3FF]">Shown here: an illustrative example of a Lens AI conversation in the app.</p>
          </div>
          <div className="reveal">{demo}</div>
        </div>
      </section>

      {/* 2 · Language understanding */}
      <section className="wrap py-20 md:py-32" aria-labelledby="lang-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <QA
            id="lang-title"
            kicker="Language understanding"
            q="Which languages does Lens AI focus on?"
            answer="Lens AI focuses on indigenous and underrepresented languages, starting with African languages, English and French. Most speech and language technology is built for a few widely written languages, while much of the world’s cultural knowledge is spoken in languages that technology barely hears."
          >
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-grey max-w-[600px] max-md:mx-auto">
              <p>Lens AI is being developed with speech and language technology for these languages, so that a story told in a language that is rarely written down can be as easy to keep and read as one told in English.</p>
              <p>Many of these languages are mostly spoken rather than written, mix with other languages mid-sentence, and carry words that have no direct translation. Lens AI is designed to keep the original words visible next to any translation, so meaning is not quietly flattened.</p>
            </div>
          </QA>
          <figure className="reveal relative">
            <Photo name="drummer-blue" alt="A man in blue adire playing a talking drum, an instrument that mirrors the tones of spoken Yoruba" className="h-[440px] md:h-[600px] w-full rounded-[28px] object-cover" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/92 p-4 text-left text-[15px] text-carbon backdrop-blur-sm">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-blue">Language carries culture</span>
              Some meaning lives in tone, rhythm and sound, which is why the original recording is always kept.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 3 · Oral documentation */}
      <section className="bg-carbon text-white py-20 md:py-32" aria-labelledby="oral-title">
        <div className="wrap">
          <QA
            id="oral-title"
            kicker="Oral documentation"
            q="How does AI help preserve oral histories?"
            answer="AI can turn a spoken recording into a written transcript and a translation, so a story told once in one language can be read, searched and understood by people who were not in the room, while the original voice is kept."
            light
          />
          <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([icon, name, text], i) => (
              <li key={name} className="reveal flex flex-col gap-4 rounded-[24px] bg-[#252321] p-7 max-md:items-center max-md:text-center">
                <div className="flex w-full items-center justify-between max-md:justify-center max-md:gap-4">
                  <Icon3D name={icon} size={56} />
                  <span className="text-sm font-semibold text-[#BFB3FF]">Step {i + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="text-[16px] text-[#A8A29A]">{text}</p>
              </li>
            ))}
          </ol>
          <p className="reveal mt-10 text-center text-[16px] text-[#A8A29A]">Transcription and translation of voice notes are <span className="text-white">in development</span>. AI-assisted drafts always sit beside the original recording, never in place of it.</p>
        </div>
      </section>

      {/* 4 · Cultural organisation */}
      <section className="wrap py-20 md:py-32" aria-labelledby="org-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal order-2 lg:order-1 mx-auto w-full max-w-[460px] rounded-[28px] bg-linen p-5 md:p-7" aria-hidden="true">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-3">
              <Photo name="coral-beads" alt="" className="h-14 w-14 rounded-xl object-cover" sizes="56px" />
              <div className="text-left"><p className="text-[16px] font-semibold leading-tight">Festival dancers</p><p className="text-[13px] text-grey">Photo · added by a family member</p></div>
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-blue">Suggested tags · review before saving</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {['Festival', 'Dance', 'Coral beads', 'Red caps', 'South-East Nigeria', 'Ceremony'].map((t) => (
                <li key={t} className="rounded-full border border-[#CFC6FF] bg-white px-3 py-1.5 text-[14px] font-medium text-blue">{t} <span className="text-grey">✕</span></li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] text-grey">Illustrative example. Tags are suggestions until a person accepts them.</p>
          </div>
          <QA
            id="org-title"
            kicker="Cultural organisation"
            q="How does Lens AI organise cultural knowledge?"
            answer="Lens AI suggests tags for the people, places, languages, practices and occasions in a record, so a family’s or community’s archive can be organised without hours of manual labelling."
            className="order-1 lg:order-2"
          >
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-grey max-w-[600px] max-md:mx-auto">
              <p>Good organisation is what lets someone find a grandmother’s recipe or a village festival recording years later. Tags are suggestions: you accept, edit or remove them, and you can always add the context only you know.</p>
              <p>Over time, this organisation is what will make archive search possible across everything a family or community has preserved. Archive search is planned.</p>
            </div>
          </QA>
        </div>
      </section>

      {/* 5 · Human context */}
      <section className="bg-[#ECE8FF] py-20 md:py-32" aria-labelledby="human-title">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <figure className="reveal">
            <Photo name="elder" alt="An elder in a feathered cap at a ceremony" className="h-[440px] md:h-[580px] w-full rounded-[28px] object-cover" />
          </figure>
          <QA
            id="human-title"
            kicker="Human context"
            q="Does Lens AI replace human knowledge?"
            answer="No. Lens AI supports people; it does not replace their knowledge or authority. The elders, families and communities who hold cultural knowledge remain its authorities, and everything Lens AI produces can be reviewed and edited by them."
          >
            <ul className="ticks mt-8 text-left max-md:mx-auto max-md:inline-flex">
              <li>Transcripts, translations and tags are drafts until a person accepts them</li>
              <li>Corrections by the contributor take priority over anything the AI suggested</li>
              <li>AI never decides whether a cultural record is authentic</li>
            </ul>
          </QA>
        </div>
      </section>

      {/* 6 · Responsible AI */}
      <section id="responsible" className="wrap scroll-mt-24 py-20 md:py-32" aria-labelledby="resp-title">
        <QA
          id="resp-title"
          kicker="Responsible AI"
          q="How is Lens AI built responsibly?"
          answer="Lens AI is built on five commitments: consent, attribution, privacy, cultural context and human oversight. Together they mean that people stay in control of their culture, and the AI works for them."
          center
        />
        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {RESPONSIBLE.map(([name, text]) => (
            <li key={name} className="reveal flex flex-col gap-3 rounded-[24px] border border-line bg-white p-7 max-md:items-center max-md:text-center">
              <h3 className="text-[22px] font-semibold">{name}</h3>
              <p className="text-[16px] text-grey">{text}</p>
            </li>
          ))}
        </ul>
        <div className="reveal mt-10 text-center">
          <a className="btn btn--dark" href="/ai-policy">Read our AI Policy</a>
        </div>
      </section>

      {/* 7 · Current development status */}
      <section id="status" className="scroll-mt-24 bg-linen py-20 md:py-32" aria-labelledby="status-title">
        <div className="wrap">
          <QA
            id="status-title"
            kicker="Current development status"
            q="What can Lens AI do today?"
            answer="Lens AI is in development and is not yet publicly available. This table shows, honestly, what is being built now and what is planned. We update it as capabilities ship."
          />
          <div className="reveal mt-12 overflow-hidden rounded-[24px] bg-white">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Lens AI capabilities and their development status</caption>
              <thead>
                <tr className="border-b border-line text-[13px] uppercase tracking-[0.08em] text-olive">
                  <th scope="col" className="px-5 md:px-8 py-4 font-semibold">Capability</th>
                  <th scope="col" className="px-5 md:px-8 py-4 font-semibold text-right md:text-left md:w-[200px]">Status</th>
                </tr>
              </thead>
              {GROUPS.map((g) => {
                const rows = CAPABILITIES.filter((c) => c.status === g.kind);
                return (
                  <tbody key={g.kind}>
                    <tr className="bg-[#FBF8F1]">
                      <th scope="rowgroup" colSpan={2} className="px-5 md:px-8 py-3 text-[15px] font-semibold">{g.title}</th>
                    </tr>
                    {rows.length ? rows.map((c) => (
                      <tr key={c.name} className="border-t border-line align-top">
                        <th scope="row" className="px-5 md:px-8 py-5 font-normal">
                          <span className="block text-[17px] md:text-[19px] font-semibold">{c.name}</span>
                          <span className="mt-1 block text-[15px] text-grey">{c.text}</span>
                        </th>
                        <td className="px-5 md:px-8 py-5 text-right md:text-left"><Status kind={c.status} /></td>
                      </tr>
                    )) : (
                      <tr className="border-t border-line">
                        <td colSpan={2} className="px-5 md:px-8 py-5 text-[15px] text-grey">{g.empty}</td>
                      </tr>
                    )}
                  </tbody>
                );
              })}
            </table>
          </div>
          <p className="reveal mt-8 text-center text-[16px] text-grey">Looking further ahead? Read about <a className="text-blue underline" href="/a-chronos">A-Chronos</a>, our foundational model research, and follow published work on <a className="text-blue underline" href="/research">Research</a>.</p>
        </div>
      </section>

      <FaqList items={LENS_FAQS} title="Lens AI, answered" />

      {/* 8 · Final CTA */}
      <FinalCta
        title="Give every voice a lasting record."
        text="Start preserving the stories and languages your family carries today, and be among the first to use Lens AI as it arrives."
        secondary={{ href: '/institutional-access', label: 'Institutional access' }}
        from="#ECE8FF"
        via="#BFB3FF"
      />
    </>
  );
}

