// Website forms: newsletter sign-ups and enquiries, handled on the server so visitors never leave the page.
// Needs RESEND_API_KEY in the Vercel project. Optional: RESEND_SEGMENT_ID (where sign-ups are saved),
// FORM_FROM (a sender on a verified Resend domain) and FORM_TO (where enquiries are delivered).
const KEY = process.env.RESEND_API_KEY;
const SEGMENT = process.env.RESEND_SEGMENT_ID || 'ab55b801-d5a9-45b0-9c40-2bc76b32fd07';
const FROM = process.env.FORM_FROM || 'Auvra Website <forms@info.goauvra.com>';
const TO = process.env.FORM_TO || 'info@goauvra.com';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resend = (path, body) => fetch('https://api.resend.com' + path, {
  method: 'POST',
  headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});
const clean = (v) => String(v ?? '').replace(/[<>]/g, '').slice(0, 4000);

async function saveContact(email) {
  let r = await resend('/contacts', { email, unsubscribed: false, segments: [{ id: SEGMENT }] });
  if (r.ok || r.status === 409) return true;
  r = await resend(`/audiences/${SEGMENT}/contacts`, { email, unsubscribed: false });
  return r.ok || r.status === 409;
}

async function notify(subject, lines, replyTo) {
  const text = lines.join('\n');
  const r = await resend('/emails', { from: FROM, to: [TO], subject, text, ...(replyTo ? { reply_to: replyTo } : {}) });
  return r.ok;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return res.status(405).json({ ok: false }); }
  if (!KEY) return res.status(503).json({ ok: false, error: 'not_configured' });
  const data = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  if (data.website) return res.status(200).json({ ok: true }); // spam trap filled in: pretend success
  const type = clean(data.type);
  const email = clean(data.email).trim().toLowerCase();
  if (!EMAIL_RE.test(email)) return res.status(400).json({ ok: false, error: 'invalid_email' });
  try {
    if (type === 'updates') {
      const saved = await saveContact(email);
      notify('New Auvra updates sign-up', [`Email: ${email}`, `Source: ${clean(req.headers.referer)}`]).catch(() => {});
      return saved ? res.status(200).json({ ok: true }) : res.status(502).json({ ok: false });
    }
    const lines = Object.entries(data).filter(([k]) => k !== 'website').map(([k, v]) => `${k}: ${clean(v)}`);
    const sent = await notify(`Website enquiry (${type || 'general'})`, lines, email);
    return sent ? res.status(200).json({ ok: true }) : res.status(502).json({ ok: false });
  } catch {
    return res.status(502).json({ ok: false });
  }
}
