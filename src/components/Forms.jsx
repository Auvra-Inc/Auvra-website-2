import { useState } from 'react';
import { CONTACT_EMAIL } from '../data/site.js';

// Set VITE_FORM_ENDPOINT (e.g. a Formspree or serverless URL) at build time to post forms as JSON.
// Without it, forms open the visitor's email app addressed to hello@goauvra.com, so they always work.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function send(payload, subject, body) {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
    if (!res.ok) throw new Error('Request failed');
    return 'sent';
  }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return 'mail';
}

const failText = `Something went wrong. Please try again, or email ${CONTACT_EMAIL}.`;

export function SubscribeForm({ light = false, id = 'sub-email' }) {
  const [state, setState] = useState({ s: 'idle', msg: '' });
  const [invalid, setInvalid] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value.trim();
    if (!EMAIL_RE.test(email)) { setInvalid(true); setState({ s: 'error', msg: 'Please enter a valid email address.' }); form.email.focus(); return; }
    setInvalid(false); setState({ s: 'sending', msg: 'Sending…' });
    try {
      const how = await send({ type: 'updates', email }, 'Please send me Auvra updates', `Please add ${email} to Auvra updates.`);
      setState({ s: 'success', msg: how === 'sent' ? "You're on the list. We'll be in touch." : 'Your email app has opened. Press send to confirm.' });
      if (how === 'sent') form.reset();
    } catch { setState({ s: 'error', msg: failText }); }
  };
  return (
    <form className={`subscribe${light ? ' subscribe--light' : ''}`} onSubmit={onSubmit} noValidate>
      <label htmlFor={id} className="sr-only">Your email for updates</label>
      <input id={id} name="email" type="email" autoComplete="email" placeholder="Your email for updates" required aria-invalid={invalid || undefined} />
      <button type="submit" className={`btn ${light ? 'btn--dark' : 'btn--lemon'}`} disabled={state.s === 'sending'}>{state.s === 'sending' ? 'Sending…' : 'Get updates'}</button>
      <p className="subscribe__msg" role="status" aria-live="polite" data-state={state.s}>{state.msg}</p>
    </form>
  );
}

// Generic enquiry form. `fields` describe inputs; required fields are validated before sending.
export function EnquiryForm({ kind, fields, submitLabel = 'Send message', subjectFor }) {
  const [state, setState] = useState({ s: 'idle', msg: '' });
  const [bad, setBad] = useState({});
  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const errors = {};
    fields.forEach((f) => {
      const v = f.type === 'checkbox' ? (form[f.name].checked ? 'yes' : '') : String(data[f.name] || '').trim();
      if (f.required && !v) errors[f.name] = true;
      if (f.type === 'email' && v && !EMAIL_RE.test(v)) errors[f.name] = true;
    });
    setBad(errors);
    const first = Object.keys(errors)[0];
    if (first) { setState({ s: 'error', msg: 'Please fill in the highlighted fields.' }); form[first].focus(); return; }
    setState({ s: 'sending', msg: 'Sending…' });
    const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n');
    try {
      const how = await send({ type: kind, ...data }, subjectFor(data), body);
      setState({ s: 'success', msg: how === 'sent' ? 'Thank you. Your message has been sent and we will reply soon.' : 'Your email app has opened with your message. Press send to finish.' });
      if (how === 'sent') form.reset();
    } catch { setState({ s: 'error', msg: failText }); }
  };
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {fields.map((f) => {
        const common = { name: f.name, id: `${kind}-${f.name}`, required: f.required, 'aria-invalid': bad[f.name] || undefined, autoComplete: f.autoComplete };
        if (f.type === 'checkbox') return (
          <label className="field field--check" key={f.name}><input type="checkbox" {...common} /> <span>{f.label}{f.required && <span className="req" aria-hidden="true"> *</span>}</span></label>
        );
        return (
          <label className="field" key={f.name} htmlFor={common.id}>
            <span>{f.label}{f.required ? <span className="req" aria-hidden="true"> *</span> : <span className="opt"> (optional)</span>}</span>
            {f.type === 'textarea' ? <textarea {...common} /> : f.type === 'select' ? (
              <select {...common} defaultValue={f.options[0]}>{f.options.map((o) => <option key={o}>{o}</option>)}</select>
            ) : <input type={f.type || 'text'} {...common} />}
          </label>
        );
      })}
      <p className="form__note"><span aria-hidden="true">*</span> Required</p>
      <div><button type="submit" className="btn btn--dark" disabled={state.s === 'sending'}>{state.s === 'sending' ? 'Sending…' : submitLabel}</button></div>
      <p className="form__msg" role="status" aria-live="polite" data-state={state.s}>{state.msg}</p>
    </form>
  );
}
