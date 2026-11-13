import { PageHero } from '../components/Page.jsx';
import { EnquiryForm } from '../components/Forms.jsx';
import { CONTACT_EMAIL, SOCIAL } from '../data/site.js';

const fields = [
  { name: 'name', label: 'Full name', required: true, autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', required: true, autoComplete: 'email' },
  { name: 'organisation', label: 'Organisation', autoComplete: 'organization' },
  { name: 'category', label: 'Enquiry category', type: 'select', required: true, options: ['General enquiry', 'Product enquiry', 'Partnership', 'Institutional collaboration', 'Media and press', 'Technical support', 'Other'] },
  { name: 'subject', label: 'Subject', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
  { name: 'consent', label: 'I agree that Auvra may use these details to respond to my enquiry, as described in the Privacy Policy.', type: 'checkbox', required: true },
];

export default function Contact() {
  return (
    <>
      <PageHero kicker="Contact" title="Let's build the future of cultural preservation together" lead="For general enquiries, partnerships, institutional collaboration or questions about Auvra, get in touch with our team." />
      <section className="wrap contact">
        <EnquiryForm kind="contact" fields={fields} subjectFor={(d) => `${d.category || 'Enquiry'}: ${d.subject || ''}`} />
        <aside className="card contact__info">
          <h2 className="contact__h">Email</h2>
          <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          <h2 className="contact__h">Company</h2>
          {/* TODO(Emmanuel): add the verified registered address. */}
          <p>Auvra Tech Ltd<br />Lagos, Nigeria</p>
          <h2 className="contact__h">Follow us</h2>
          <p>{SOCIAL.map((s, i) => <span key={s.href}>{i > 0 && ' · '}<a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></span>)}</p>
          <p className="contact__inst">Representing a museum, archive or government body? <a href="/institutional-access">Apply for Institutional Access</a>.</p>
          <p className="contact__inst">Many questions are answered in our <a href="/faqs">FAQs</a>.</p>
        </aside>
      </section>
    </>
  );
}
