import { PageHero } from '../components/Page.jsx';
import StoreButtons from '../components/StoreButtons.jsx';
import { SubscribeForm } from '../components/Forms.jsx';
import { STORE } from '../data/site.js';

export default function Download() {
  return (
    <PageHero kicker="Explore Auvra" title="Get Auvra on your phone"
      lead={STORE.appStoreLive
        ? 'Download Auvra for iPhone or Android, create your free account and start preserving.'
        : 'Auvra is on Google Play now. The iPhone app is coming soon: leave your email and we will send you the App Store link.'}>
      <div className="dl">
        <StoreButtons />
        <SubscribeForm light id="dl-email" />
      </div>
    </PageHero>
  );
}
