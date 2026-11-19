import { useState } from 'react';
import { CONTACT_EMAIL } from '../data/site.js';

// Forms post to the site's own server function (api/forms.js), so visitors never leave the page.
// VITE_FORM_ENDPOINT can point somewhere else if needed.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || '/api/forms';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function send(payload) {
  const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
  if (res.ok) return 'sent';
  // If the server cannot deliver email right now, fall back to the visitor's email app so nothing is lost.
  if (res.status === 503) {
    const body = Object.entries(payload).filter(([k]) => k !== 'website').map(([k, v]) => `${k}: ${v}`).join('\n');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Auvra website: ' + payload.type)}&body=${encodeURIComponent(body)}`;
    return 'mail';
  }
  throw new Error('Request failed');
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
      const how = await send({ type: 'updates', email, website: form.website?.value || '' });
      if (how === 'sent') setState({ s: 'success', msg: '' });
      else setState({ s: 'info', msg: 'Your email app has opened. Press send to confirm.' });
    } catch { setState({ s: 'error', msg: failText }); }
  };
  if (state.s === 'success') {
    return (
      <div className={`subscribe subscribe--done${light ? ' subscribe--light' : ''}`} role="status" aria-live="polite">
        <span className="subscribe__check" aria-hidden="true"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg></span>
        <span className="subscribe__done-text"><b>You’re on the list.</b><span className="subscribe__done-more"> We’ll keep you posted.</span></span>
      </div>
    );
  }
  return (
    <div className="subscribe-wrap">
      <form className={`subscribe${light ? ' subscribe--light' : ''}`} onSubmit={onSubmit} noValidate>
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />
        <label htmlFor={id} className="sr-only">Your email for updates</label>
        <input id={id} name="email" type="email" autoComplete="email" placeholder="Your email" required aria-invalid={invalid || undefined} onInput={() => { if (state.s === 'error') { setInvalid(false); setState({ s: 'idle', msg: '' }); } }} />
        <button type="submit" className={`btn ${light ? 'btn--dark' : 'btn--lemon'}`} disabled={state.s === 'sending'}>{state.s === 'sending' ? <span className="subscribe__spin" aria-label="Sending" /> : 'Get updates'}</button>
      </form>
      <p className="subscribe__note" role="status" aria-live="polite" data-state={state.s}>{state.s === 'error' || state.s === 'info' ? state.msg : ''}</p>
    </div>
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
    try {
      const how = await send({ type: kind, ...data });
      setState({ s: 'success', msg: how === 'sent' ? 'Thank you. Your message has been sent and we will reply soon.' : 'Your email app has opened with your message. Press send to finish.' });
      if (how === 'sent') form.reset();
    } catch { setState({ s: 'error', msg: failText }); }
  };
  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />
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
