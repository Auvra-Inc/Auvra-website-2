import { PageHero } from '../components/Page.jsx';
import StoreButtons from '../components/StoreButtons.jsx';
import { SubscribeForm } from '../components/Forms.jsx';
import { STORE } from '../data/site.js';

export default function Download() {
  return (
    <PageHero kicker="Explore Auvra" title={STORE.live ? 'Get Auvra on your phone' : 'Auvra for iPhone and Android'}
      lead={STORE.live ? 'Download Auvra for iPhone or Android, create your free account and start preserving.' : 'Leave your email and we will send you the link to download Auvra on the App Store or Google Play.'}>
      <div className="dl">
        <StoreButtons />
        <SubscribeForm light id="dl-email" />
      </div>
    </PageHero>
  );
}
