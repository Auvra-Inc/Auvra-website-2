// Site behaviour: navigation menu, FAQ accordion, photo deck, scroll reveals, off-screen animation pausing, forms.
const doc = document.documentElement;
doc.classList.add('js');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Navigation ---------- */
const nav = document.querySelector('[data-nav]');
if (nav) {
  const toggle = nav.querySelector('[data-nav-toggle]');
  const panel = nav.querySelector('[data-nav-panel]');
  const products = nav.querySelector('[data-nav-products]');
  const sub = products && document.getElementById(products.getAttribute('aria-controls'));

  const open = () => {
    panel.hidden = false;
    nav.setAttribute('data-open', '');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    const first = panel.querySelector('a, button');
    first && first.focus();
  };
  const close = (returnFocus = true) => {
    if (panel.hidden) return;
    panel.hidden = true;
    nav.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => (panel.hidden ? open() : close()));
  products && products.addEventListener('click', () => {
    const expanded = products.getAttribute('aria-expanded') === 'true';
    products.setAttribute('aria-expanded', String(!expanded));
    sub.hidden = expanded;
  });
  panel.querySelectorAll('[data-nav-link]').forEach((a) => a.addEventListener('click', () => close(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  document.addEventListener('pointerdown', (e) => { if (!panel.hidden && !nav.contains(e.target)) close(false); });
}

/* ---------- FAQ accordion ---------- */
document.querySelectorAll('[data-faq]').forEach((faq) => {
  faq.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq__q');
    if (!btn) return;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    document.getElementById(btn.getAttribute('aria-controls')).dataset.open = String(!expanded);
  });
});

/* ---------- Photo deck (tap to change) ---------- */
const deck = document.querySelector('[data-deck]');
if (deck) {
  const cards = [...deck.querySelectorAll('.deck__card')];
  const data = JSON.parse(document.querySelector('[data-deck-data]').textContent);
  const caption = document.querySelector('[data-deck-caption]');
  let order = cards.map((_, i) => i); // order[0] is the front card
  let busy = false;
  const layout = () => order.forEach((cardIndex, pos) => {
    const p = Math.min(pos, 3);
    cards[cardIndex].style.setProperty('--pos', p);
    cards[cardIndex].dataset.pos = p;
  });
  const next = () => {
    if (busy) return;
    const front = cards[order[0]];
    order = [...order.slice(1), order[0]];
    const apply = () => {
      layout();
      const d = data[order[0]];
      caption.innerHTML = `<b>${d.caption}</b> · ${d.place} · <span>${d.credit}</span>`;
      deck.setAttribute('aria-label', `Show next photo, ${order[0] + 1} of ${cards.length}`);
    };
    if (reduceMotion) return apply();
    busy = true;
    front.classList.add('is-leaving');
    setTimeout(apply, 180);
    setTimeout(() => { front.classList.remove('is-leaving'); busy = false; }, 450);
  };
  deck.addEventListener('click', next); // buttons fire click on Enter and Space too
}

/* ---------- Scroll reveals ---------- */
const revealEls = document.querySelectorAll('.reveal, .slide-in');
if ('IntersectionObserver' in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

/* ---------- Pause looping animations while off-screen ---------- */
if ('IntersectionObserver' in window) {
  const po = new IntersectionObserver((entries) => entries.forEach((en) => en.target.classList.toggle('is-paused', !en.isIntersecting)));
  document.querySelectorAll('[data-pause-offscreen]').forEach((el) => po.observe(el));
}

/* ---------- Forms ----------
   Set PUBLIC_FORM_ENDPOINT (e.g. a Formspree or serverless URL) at build time to post forms as JSON.
   Without it, the form opens the visitor's email app addressed to hello@goauvra.com, so it always works. */
const ENDPOINT = import.meta.env.PUBLIC_FORM_ENDPOINT || '';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function send(payload, mailSubject, mailBody) {
  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) });
    if (!res.ok) throw new Error('Request failed');
    return 'sent';
  }
  window.location.href = `mailto:hello@goauvra.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  return 'mail';
}

document.querySelectorAll('[data-subscribe]').forEach((form) => {
  const input = form.querySelector('input[type=email]');
  const msg = form.querySelector('[data-subscribe-msg]');
  const btn = form.querySelector('button');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!EMAIL_RE.test(email)) {
      input.setAttribute('aria-invalid', 'true');
      msg.dataset.state = 'error';
      msg.textContent = 'Please enter a valid email address.';
      input.focus();
      return;
    }
    input.removeAttribute('aria-invalid');
    msg.dataset.state = 'sending';
    msg.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const how = await send({ type: 'updates', email }, 'Please send me Auvra updates', `Please add ${email} to Auvra updates.`);
      msg.dataset.state = 'success';
      msg.textContent = how === 'sent' ? "You're on the list. We'll be in touch." : 'Your email app has opened. Press send to confirm.';
      if (how === 'sent') form.reset();
    } catch {
      msg.dataset.state = 'error';
      msg.textContent = 'Something went wrong. Please try again, or email hello@goauvra.com.';
    } finally {
      btn.disabled = false;
    }
  });
});

document.querySelectorAll('[data-form]').forEach((form) => {
  const msg = form.querySelector('[data-form-msg]');
  const btn = form.querySelector('button[type=submit]');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let firstBad = null;
    form.querySelectorAll('[required]').forEach((f) => {
      const bad = !f.value.trim() || (f.type === 'email' && !EMAIL_RE.test(f.value.trim()));
      f.toggleAttribute('aria-invalid', bad);
      if (bad) f.setAttribute('aria-invalid', 'true');
      if (bad && !firstBad) firstBad = f;
    });
    if (firstBad) {
      msg.dataset.state = 'error';
      msg.textContent = 'Please fill in the highlighted fields.';
      firstBad.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    const subject = form.dataset.form === 'institution' ? `Institutional access: ${data.organisation || ''}` : `Website enquiry from ${data.name || ''}`;
    const body = Object.entries(data).map(([k, v]) => `${k}: ${v}`).join('\n');
    msg.dataset.state = 'sending';
    msg.textContent = 'Sending…';
    btn.disabled = true;
    try {
      const how = await send({ type: form.dataset.form, ...data }, subject, body);
      msg.dataset.state = 'success';
      msg.textContent = how === 'sent' ? 'Thank you. Your message has been sent and we will reply soon.' : 'Your email app has opened with your message. Press send to finish.';
      if (how === 'sent') form.reset();
    } catch {
      msg.dataset.state = 'error';
      msg.textContent = 'Something went wrong. Please try again, or email hello@goauvra.com.';
    } finally {
      btn.disabled = false;
    }
  });
});
