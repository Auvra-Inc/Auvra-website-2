import { PageHero } from '../components/Page.jsx';

export default function NotFound() {
  return (
    <PageHero kicker="404" title="This page has not been preserved" lead="The link may be old or mistyped. Try the homepage or our FAQs.">
      <div className="btn-row"><a className="btn btn--dark" href="/">Go home</a><a className="btn btn--ghost" href="/faqs">Read FAQs</a></div>
    </PageHero>
  );
}
