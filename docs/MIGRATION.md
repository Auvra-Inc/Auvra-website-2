# Auvra website migration

The old goauvra.com site (Auvra-Inc/Auvra-Website) is being replaced by this site (Auvra-Inc/Auvra-website-2). This is a replacement, not a redesign. The domain stays the same, so the work is: keep every important URL working, preserve search rankings, and switch over without downtime.

## 1. URL map

Every route of the old site and every URL in its sitemap (`public/sitemap.txt`) is listed below. Redirects are server-side 301s in `vercel.json`. No URL is sent to the homepage as a catch-all, and there are no chains or loops (each redirect lands on a live 200 page in one hop).

| Old URL | New URL | How |
| --- | --- | --- |
| `/` | `/` | Same path |
| `/about` | `/about` | Same path |
| `/blog` | `/blog` | Same path |
| `/blog/Introducing Auvra` (and `%20` form) | `/blog/introducing-auvra` | 301 |
| `/blog/auvra-joins-nvidia-inception-program-to-accelerate-ai-for-cultural-preservation` | same | Same path |
| `/contact` | `/contact` | Same path |
| `/faqs` | `/faqs` | Same path |
| `/terms` | `/terms` | Same path |
| `/terms-of-service` | `/terms` | 301 |
| `/privacy` | `/privacy` | Same path |
| `/privacy-policy` | `/privacy` | 301 |
| `/ai-policy`, `/aml`, `/community`, `/copyright`, `/governance` | same | Same path |
| `/institutional-access` | `/institutional-access` | Same path |
| `/institutions` | `/institutional-access` | 301 |
| `/waitlist` | `/download` | 301 |
| `/collab` | `/terms` | 301 (the old page was the collaboration terms) |
| `/sitemap.txt` | `/sitemap.xml` | 301 |
| `/contribution-badges` | `/badges#contribution` | 301 |
| `/collectible-badges`, `/creator-badges` | `/badges#collectible` | 301 |

Any other unknown URL returns the site's 404 page with a real 404 status.

## 2. Technical SEO on the new site

- **Canonical:** every page has a self-referencing `https://www.goauvra.com/...` canonical tag with no trailing slash (`trailingSlash: false`, `cleanUrls: true`).
- **Sitemap:** `/sitemap.xml` lists every indexable page with `lastmod` and priority. Redirected and 404 URLs are not listed.
- **Robots:** `/robots.txt` allows search and AI crawlers, blocks `/admin`, and points to `/sitemap.xml`.
- **Metadata:** page titles, descriptions, Open Graph and Twitter tags, hreflang, and JSON-LD for Organization (with RC Number 8895504), WebSite, WebPage, BreadcrumbList and FAQPage.
- **AI search:** `/llms.txt` and `/llms-full.txt` summarise the company and its products.
- **Security headers:** HSTS, nosniff, frame options, referrer policy.

## 3. Launch checklist

Do not shut down or change the old deployment until every step in "Before switching" passes.

### Before switching
- [ ] Production deployment of this repo on Vercel is green.
- [ ] Every row of the URL map is checked on the preview URL (200 for same paths, a single 301 for redirects).
- [ ] `/sitemap.xml`, `/robots.txt`, `/llms.txt` load.
- [ ] Forms (contact, download email, institutional access) submit correctly.
- [ ] Vercel Web Analytics and Speed Insights are enabled in the project dashboard (the code is already installed). Remove any other tracking from the old site so visits are not counted twice.
- [ ] Mobile check at 390px: no horizontal scroll, no console errors.

### Switching (owner steps)
- [ ] In Vercel, add `goauvra.com` and `www.goauvra.com` to this project and set the apex `goauvra.com` to redirect (301) to `www.goauvra.com`, which is the canonical host.
- [ ] Update DNS at the registrar to the records Vercel shows. Keep TTL low (300s) during the switch.
- [ ] Confirm HTTPS certificate is issued and `http://` redirects to `https://`.
- [ ] Keep the old project deployed (not deleted) for at least 30 days as a rollback.

### After switching
- [ ] Google Search Console: submit `https://www.goauvra.com/sitemap.xml`, remove the old `sitemap.txt`, and use URL Inspection on the homepage and key pages. Change of Address is only needed if the domain changes; it does not here.
- [ ] Bing Webmaster Tools: submit the same sitemap.
- [ ] Re-test all redirects on the live domain.

## 4. 30-day monitoring

- Weekly: Search Console coverage and "Page with redirect" / "Not found (404)" reports; fix any new 404 that had traffic with a 301 to the closest page.
- Weekly: impressions and clicks compared with the 4 weeks before launch.
- Vercel Analytics: top pages and 404s; Speed Insights: Core Web Vitals stay green.

## 5. Acceptance criteria

- Every URL in section 1 resolves to the right page in one hop.
- No indexable page has a missing or wrong canonical.
- Sitemap and robots are valid and submitted.
- Analytics records visits once.
- No drop in indexed pages after 30 days beyond the removed duplicates.
