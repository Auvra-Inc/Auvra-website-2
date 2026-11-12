import { Link } from 'react-router-dom';
import { FOOTER, CONTACT_EMAIL, SOCIAL } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div className="footer__brand">
          <Link to="/" aria-label="Auvra home"><img src="/brand/auvra-logo-carbon.svg" alt="Auvra" width="140" height="40" loading="lazy" /></Link>
          <p>Building the Permanent Home for Human Culture.</p>
          <a className="footer__mail" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <ul className="footer__social">
            {SOCIAL.map((s) => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}
          </ul>
        </div>
        {FOOTER.map((col) => (
          <nav className="footer__col" aria-label={col.title} key={col.title}>
            <h2>{col.title}</h2>
            <ul>{col.links.map((l) => <li key={l.href}><Link to={l.href}>{l.label}</Link></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="footer__word" aria-hidden="true">AUVRA</div>
      <div className="wrap footer__bottom">
        <span>© Auvra. All rights reserved.</span>
        <span>Lagos, Nigeria</span>
      </div>
    </footer>
  );
}
