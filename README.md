# Auvra website

The new goauvra.com: **Astro + React + JavaScript + Tailwind CSS**, with **Motion**, **GSAP**, **Lenis** and **Lucide React**. Every page is pre-rendered to static HTML (no "Loading Auvra…" screen), with React islands only where a page needs interaction.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
```

## Where things live

| Path | What |
|---|---|
| `src/pages/` | One `.astro` file per route (homepage, products, technology, insights, contact, FAQs, policies, 404, sitemap) |
| `src/layouts/Base.astro` | Head and SEO for every page: title, description, canonical, Open Graph, X card, Organization/WebSite/Breadcrumb JSON-LD |
| `src/views/` | React page bodies used by the routes |
| `src/components/` | Nav (Motion + Lucide), footer, phone frame, carousel, FAQ, forms, 3D icons |
| `src/scripts/motion.js` | Lenis smooth scrolling and GSAP scroll reveals (off for reduced motion) |
| `src/data/definitions.js` | The one shared definition of each product (keep wording consistent site-wide) |
| `src/data/site.js` | Store links, navigation, footer, photos |
| `src/data/faqs.js` | FAQ page content |
| `src/content/blog/` | Blog posts in Markdown (editable at `/admin`) |
| `src/content/legal/` | Policy texts, exactly as written by Auvra |
| `public/images/` | Photos (WebP), partner logos, phone frame |

## Before launch

1. **Store links:** set `STORE.appStore`, `STORE.googlePlay` and `STORE.live = true` in `src/data/site.js`. Until then store buttons and "Explore Auvra" open `/download`.
2. **Forms:** set `VITE_FORM_ENDPOINT` (e.g. Formspree) so Contact, Institutional Access and updates post directly. Without it they open an email to hello@goauvra.com.
3. **Clash Display** loads from Fontshare. To self-host, add the font files to `public/fonts/` and swap the `<link>` in `Base.astro` for an `@font-face`.
4. **Photos:** confirm consent and credits (captions say "credit pending").
5. **Partners:** only show partners who have agreed in writing.
6. **Product status labels** marked `TODO(Emmanuel)` in the code.
7. **Company address** on `/contact`.
