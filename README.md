# Auvra website (Option B)

The new goauvra.com: a static Astro site built from the *Option B · Build Spec* and Brand Guidelines v1.0.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
```

Deploys as plain static files (Vercel, Netlify, Cloudflare Pages or any CDN). No server is needed.

## Where things live

| Path | What |
|---|---|
| `src/pages/index.astro` | Homepage, all 15 sections in order |
| `src/pages/*.astro` | Contact, FAQs, Download, About, Blog, Institutional Access, the 8 policy pages, 404 |
| `src/pages/sitemap.xml.js` | Generates `sitemap.xml` from the pages |
| `src/data/site.js` | **Edit content here:** store links, FAQs, footer links, photo sets and captions |
| `src/components/` | Nav, Footer, store buttons, 3D icon sprite |
| `src/styles/global.css` | Brand tokens (colours, type scale, spacing) and all section styles |
| `src/scripts/main.js` | Menu, FAQ, photo deck, scroll reveals, forms (one small script, no framework) |
| `public/brand/` | Logo and mark SVGs (carbon and linen), traced from the official logo PNG |
| `public/images/photos/` | WebP photos at 480 and 960px, made by `npm run images` |

## Before launch (open items)

1. **Clash Display font.** Add the licensed `ClashDisplay-Variable.woff2` to `public/fonts/` and uncomment its `@font-face` at the top of `global.css`. Bricolage Grotesque stands in until then.
2. **Store links.** Set `STORE.appStore`, `STORE.googlePlay` and `STORE.live = true` in `src/data/site.js`. Until then every store button opens `/download` ("coming soon" with an email sign-up).
3. **Forms.** Set `PUBLIC_FORM_ENDPOINT` (e.g. a Formspree or serverless URL) at build time. Contact, Institutional Access and the updates sign-up then post JSON to it. Without it they open the visitor's email app addressed to hello@goauvra.com.
4. **Photos.** Confirm consent and photographer credit for every photo (captions currently say "Photographer credit pending"). The spec's Durbar procession, saxophone player, boy reading and carved doorway shots are not in the current photo library.
5. **Partners.** Paystack, Dojah, ElevenLabs and NVIDIA Inception show in the marquee. Remove any partner who has not agreed in writing, and swap in official SVGs (NVIDIA's badge rules apply).
6. **3D icons.** The icons are SVG stand-ins in the clay style. Replace the symbols in `src/components/IconSprite.astro` with the final 2× WebP/PNG renders when ready.
7. **App screens.** The phone and feature-row screens are HTML mock-ups; replace them with real screenshots once the app is final.
8. **Company address** on `/contact`.
9. **Legal review.** Policy pages were ported from the current site with crypto/collectible wording rephrased; have counsel review those edits.

## Content rules

Never show: collectible(s), collectors, claim, blockchain, NFT, token, USDC, wallet address, prices or fees (cost is answered only in the FAQ), invented stats, "bank-grade security", or Polygon / Crossmint / OpenAI / Breet / Fonbnk logos. Check with:

```bash
npm run build && grep -rniE "collectible|collector|blockchain|nft|token|usdc|wallet address|bank-grade|polygon|crossmint|openai|breet|fonbnk" dist --include=*.html
```
