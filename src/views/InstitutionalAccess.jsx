import { PageHero } from '../components/Page.jsx';
import { EnquiryForm } from '../components/Forms.jsx';

const fields = [
  { name: 'name', label: 'Full name', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Work email', type: 'email', required: true, autoComplete: 'email' },
  { name: 'organisation', label: 'Organisation', required: true, autoComplete: 'organization' },
  { name: 'role', label: 'Your role', required: true, autoComplete: 'organization-title' },
  { name: 'country', label: 'Country', required: true, autoComplete: 'country-name' },
  { name: 'message', label: 'What would you like to preserve or work on with Auvra?', type: 'textarea', required: true },
];
const cards = [
  ['Documentation', 'Document collections, oral histories and cultural knowledge with their origins and context kept intact.'],
  ['Attribution', 'Keep every record connected to the communities and contributors it came from.'],
  ['Research', 'Make archives easier to search and understand with Lens AI transcription and translation.'],
  ['Long-term stewardship', 'Preserve cultural materials so future generations can access and continue them.'],
];

export default function InstitutionalAccess() {
  return (
    <>
      <PageHero kicker="Museums & Institutions" title="Apply for Institutional Access" lead="For museums, universities, archives, research organisations, cultural foundations and government bodies working to document and preserve cultural heritage." crumbs={[{ label: 'Institutional Access' }]} />
      <section className="wrap section-tight"><div className="card-grid">{cards.map(([t, d]) => <div className="card" key={t}><h2 className="card__title">{t}</h2><p>{d}</p></div>)}</div></section>
      <section className="wrap section-tight form-section">
        <h2 className="h3">Tell us about your organisation</h2>
        <EnquiryForm kind="institution" fields={fields} submitLabel="Submit application" subjectFor={(d) => `Institutional access: ${d.organisation || ''}`} />
      </section>
    </>
  );
}
