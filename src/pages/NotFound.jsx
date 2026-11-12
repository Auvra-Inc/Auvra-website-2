import { Link } from 'react-router-dom';
import { PageHero } from '../components/Page.jsx';

export default function NotFound() {
  return (
    <PageHero kicker="404" title="This page has not been preserved" lead="The link may be old or mistyped. Try the homepage or our FAQs.">
      <div className="btn-row"><Link className="btn btn--dark" to="/">Go home</Link><Link className="btn btn--ghost" to="/faqs">Read FAQs</Link></div>
    </PageHero>
  );
}
