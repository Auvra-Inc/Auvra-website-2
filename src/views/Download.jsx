import { PageHero } from '../components/Page.jsx';
import StoreButtons from '../components/StoreButtons.jsx';
import { SubscribeForm } from '../components/Forms.jsx';
import { STORE } from '../data/site.js';

export default function Download() {
  return (
    <PageHero kicker="Explore Auvra" title={STORE.live ? 'Get Auvra on your phone' : 'Auvra is coming to your phone'}
      lead={STORE.live ? 'Download Auvra for iPhone or Android, create your free account and start preserving.' : 'The Auvra app is launching soon on the App Store and Google Play. Leave your email and we will tell you the moment it is live.'}>
      <div className="dl">
        <StoreButtons />
        <SubscribeForm light id="dl-email" />
      </div>
    </PageHero>
  );
}
