# Bellerose Roofing & Siding — Content Brief
**QuickFlip Sites | Build Log**
Date: May 2026
Prospect: https://belleroseroofingsiding.com/
Template: PipeMonkey-Redesign (Next.js App Router)
Reference site: https://ae-nyc-plumbing.vercel.app/contact-us (contact page layout only)

---

## Source Material Summary

- **Business name:** Bellerose Roofing & Siding
- **Primary phone:** (516) 355-0977
- **Secondary phone:** (718) 343-0620
- **Address:** 92 Chestnut Ave, Floral Park, NY 11001
- **Hours:** Mon–Fri: 8am–6pm | Sat & Sun: By appointment
- **Years in business:** 35+ (About page states 35; homepage stated 25 — 35 used as more credible/detailed source)
- **Business type:** Family-owned and operated
- **Service area:** NYC 5 boroughs, Nassau County, Suffolk County
- **Licensing:** NYC Lic# 1259922 | Nassau Lic# H18B8620000 | Floral Park Lic# 119
- **Key differentiators extracted from site:**
  - Family-owned, passionate about quality
  - Fair and honest pricing
  - Expert estimates, no surprises at billing
  - Client kept involved every step of the way
  - Free anti-mold and anti-moss strips on every roofing job
  - Free estimates
- **Testimonials:** None found on prospect site — all testimonials are generated placeholders and must be replaced with real reviews before launch
- **Social media:** None found on prospect site

---

## Service Inventory

1. Roofing Repairs (asphalt, ceramic tile, synthetic slate, rubber)
2. Siding Repairs (rotten wood siding, vinyl panels)
3. Roofing Tear-Offs & New Installs
4. Windows & Skylights

All 4 services appear in `crafts.ts` and `service-pages.tsx`.

---

## Services Consolidated

None. All 4 services are distinct and kept separate.

---

## Pages Built & Content Decisions

### Homepage Components
- **Hero.tsx** — H1 rewritten: "Queens & Long Island Roofing, Siding & Windows". Subhead uses extracted copy (family-owned, 35 years, licensed & insured, free estimates). CTA updated to `(516) 355-0977`.
- **Topnav.tsx** — Phone updated to `(516) 355-0977 — Free Estimates Available`.
- **Footer.tsx** — Contact info, address, hours, service areas all updated. Social links removed (none found — TODO added). Copyright updated.
- **Announcements.tsx** — "How It Works" rewritten for roofing process (Inspect → Estimate → Install → Cleanup). Extracted copy used for all 3 steps.
- **Difference.tsx** — Stats updated: 35+ Years | Free Estimates | 100% Licensed & Insured NYC/Nassau/Suffolk. Headline: "Family-Owned. Fair Pricing. Done Right."
- **AccordionItems.tsx** — All 4 accordion entries rewritten for the 4 roofing/siding/window services.
- **Insights.tsx** — Sub-heading updated: "Our Roofing & Exterior Services".
- **HomeCTA.tsx** — CTA rewritten for free estimates, roofing trade. Phone updated.
- **Testimonial.tsx** — 3 placeholder reviews written (all flagged with TODO — must be replaced with real reviews).

### Data Files
- **belle-rose-roofing.tsx** — Full channel data written from extracted copy. All fields populated.
- **crafts.ts** — Replaced with 4 roofing/siding/window services.
- **service-pages.tsx** — 4 full service detail pages written with extracted/trade-library copy.
- **programs.tsx** — 4 service cards written. `partners: []` (no partners for trade client).

### Inline Pages
- **contact-us/page.tsx** — Redesigned to match A&E NYC Plumbing reference layout (form + map side-by-side). Key difference from reference: form column uses `align-items: stretch` + flex-grow on form and textarea so form fills same height as map on desktop. Address: 92 Chestnut Ave, Floral Park, NY 11001. Both phone numbers listed below map. Service dropdown updated to 6 roofing/siding options.
- **general-faqs/page.tsx** — 8 roofing-specific FAQs written. Topics: free estimates, years in business, roof types, repair vs. replace, licensing, service area, mid-project communication, commercial work.
- **gallery/page.tsx** — 4 placeholder gallery items: Roof Replacement (Queens), Siding (Nassau), Storm Repair (Floral Park), Windows (Suffolk). All flagged TODO for real job photos.
- **service-areas/page.tsx** — 4 area sections: Queens (home base), NYC 5 Boroughs, Nassau County, Suffolk County. All phone references updated.
- **blog/page.tsx** — 6 roofing-relevant placeholder posts. All flagged TODO.
- **privacy-policy/page.tsx** — Company name, phone, address updated.

### Dynamic Pages
- **craft-catalog/page.tsx** — Metadata updated.
- **craft-catalog/[slug]/page.tsx** — Metadata + CTA banner + Related Services description all updated.
- **CraftCatalogHero.tsx** — Intro copy rewritten for roofing trade.

---

## Navigation Changes

Template default (Home | Services | FAQs | Contact) kept unchanged. No Service Areas item added to nav — service areas are accessible from footer and internal links. Can add if client requests.

---

## Copy Generation Log

The following copy was generated (not extracted from prospect site) due to content gaps:

1. **All testimonials** — Prospect site has no testimonials. 3 placeholder reviews written to match the roofing trade and service area. Must be replaced with real Google/Yelp reviews before launch.
2. **FAQ answers** — Prospect site has no FAQ page. 8 FAQs written using extracted differentiators and trade content library patterns.
3. **Blog posts** — 6 placeholder article titles and excerpts written. All flagged TODO.
4. **Gallery captions** — 4 placeholder before/after job descriptions written. All flagged TODO.
5. **Service detail page body copy** — The prospect site has very thin service descriptions (1-3 bullets each). Full "When You Need It" and "Our Process" sections written using Trade Content Library roofing patterns + extracted differentiators.
6. **About Us learnMore sections** — Expanded from thin extracted copy using prospect's own stated differentiators (fair pricing, involvement, licensing).

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Replace hero video with real roofing photo/video | `components/custom/Hero.tsx` | Remove `<video>` tag or replace src |
| Replace feature section image | `components/custom/Announcements.tsx` | `backgroundImage` inline style |
| Replace trust photo | `components/custom/Difference.tsx` | `<VapeImage src>` prop |
| Replace 4 accordion images | `lib/constants/AccordionItems.tsx` | One per service |
| Replace About Us hero background | `data/channel/belle-rose-roofing.tsx → hero.imageBg` | Full CSS background string |
| Replace About Us flex feature photo | `data/channel/belle-rose-roofing.tsx → flexFeature.imageSrc` | Direct URL |
| Replace all service detail hero images | `app/craft-catalog/[slug]/page.tsx → PLACEHOLDER_BG` | Shared constant — swap per slug before launch |
| Replace 4 gallery before/after images | `app/gallery/page.tsx → galleryItems[]` | Real job photos from client |
| Replace logo files | `/public/logos/logo-94.svg` + `/public/logos/logo-long.svg` | Client logo needed |
| Replace all 3 testimonials | `components/custom/Testimonial.tsx` | Confirmed real Google/Yelp reviews |
| Add social media URLs | `components/custom/Footer.tsx → socials[]` | None found on prospect site — ask client |
| Verify/replace Google Maps embed | `app/contact-us/page.tsx` | Embed src uses placeholder coords — replace with verified embed for 92 Chestnut Ave, Floral Park |
| Replace contact page hero image | `app/contact-us/page.tsx → CraftHero bgImage` | Roofing-appropriate photo |
| Replace blog posts with real content | `app/blog/page.tsx` | All 6 posts are placeholders |
| Replace gallery with real job photos | `app/gallery/page.tsx` | All 4 items are placeholders |
| Add email address | `app/contact-us/page.tsx`, footer | None found on prospect site — ask client |
| Connect contact form backend | `app/contact-us/page.tsx` | JotForm, HubSpot, or Gravity Forms |
| Confirm Suffolk County coverage scope | `app/service-areas/page.tsx` | Note says "call to confirm" — update with actual towns served |
