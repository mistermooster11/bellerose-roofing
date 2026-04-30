# Pipe Monkeys — Content Brief
**QuickFlip Sites | Build Log**
Date: April 2026
Prospect: pipemonkeys.com (Brooklyn, Queens & Nassau County drain/sewer)
Template: NCCER clone (Next.js 14 App Router)
Reference site: apexroofingpro.com

---

## Source Material Summary

Pipe Monkeys' existing site is a **single-page WordPress build** — no subpages, no blog, no gallery. All content was pulled from that one page and distributed across the template's 7-page structure. Key details extracted:

- **Phone:** (718) 749-1830
- **Service area:** Brooklyn, Queens, Nassau County
- **Services:** Main sewer line, kitchen sink, tub/shower, toilet, hydro jetting, drain snaking, camera inspection, multi-unit/commercial
- **Differentiators from site copy:** Upfront pricing, local NYC techs, cleanup guarantee, same-day scheduling
- **Key testimonial:** Daniel Pipitone, Brooklyn homeowner — Google review

---

## Pages Built & Content Decisions

### 1. Homepage (`app/page.tsx`)
**Structure:** Hero → How It Works → Why Pipe Monkeys (stats) → Testimonial

**Kept from source:** Business headline concept, service area list, tech credentials, upfront pricing promise, cleanup guarantee, testimonial

**Cut from template:** Insights tabbed section (NCCER org-specific), Donation widget, Research section, News section — all irrelevant to a trade service business

**Generated:** "How It Works" 3-step process (Diagnose → Approve & Clear → Confirm & Clean Up) — written to match PM's stated process; short and concrete, no fluff

**Stats block:** "Same-Day", "4.9★", "100%" — drawn from real review signals. Note: Verify exact review count and rating with client before launch.

---

### 2. About Us (`app/explore/[slug]/page.tsx` → `/explore/pipemonkeys`)
**Data file:** `data/channel/pipemonkeys.tsx`

**Kept:** All copy about the business ethos, local knowledge angle, upfront pricing, cleanup guarantee, Daniel Pipitone testimonial

**Restructured:** Split into 4 headed subsections (Upfront Pricing, Local NYC Technicians, Clean Every Time, Real Results Guaranteed) — matches how Apex Roofing Pro handled their About section: scannable, value-point driven

**Generated:** Intro paragraph ("When drains back up, homeowners need someone fast, honest, and effective…") — 1 tight paragraph, no fluff

---

### 3. Services Catalog (`app/craft-catalog/page.tsx`)
**Data file:** `data/craft-catalog/crafts.ts`

**Replaced:** 67 NCCER craft items → 8 PM services
- Main Sewer Lines | Kitchen Sinks | Tubs & Showers | Toilets | Hydro Jetting | Drain Snaking & Augering | Camera Inspection | Multi-Unit & Commercial Buildings

**Category taxonomy:** Drain Cleaning / Advanced Services / Commercial — mirrors the filterable nav pattern from the template

---

### 4. Service Detail Pages (`app/programs-crafts/programs/page.tsx`)
**Data file:** `data/programs.tsx`

**Kept:** PM's actual service descriptions, rewritten for clarity and scannability

**Generated:** Service descriptions for each of the 7 services — written from PM's existing single-page copy, expanded slightly to fill the card format. Each is 1 focused paragraph, no padding.

**Cut:** Partner logos section (no external partners applicable)

---

### 5. FAQs (`app/general-faqs/page.tsx`)

**Kept:** All 7 FAQs are grounded in PM's real positioning and services — pulled directly from what the site communicated

**Generated:** Q&A format copy — none of it contradicts PM's actual service model. All answers directly mirror their stated approach (upfront pricing, cleanup, same-day scheduling)

**CTA:** Changed from NCCER donation to phone call CTA

---

### 6. Contact Us (`app/contact-us/page.tsx`)

**Kept:** Phone number, service area info, form embed (HubSpot iframe — left in place)

**Replaced:** NCCER staff directory → 3 service area cards (Brooklyn, Queens, Nassau) with full neighborhood lists

**TODO flagged:** Contact form iframe — client needs to verify the HubSpot form ID or replace with their preferred form tool

---

### 7. Gallery (`app/gallery/page.tsx`) — **NEW PAGE**
**Source:** Reference site (Apex Roofing Pro) showed Before/After gallery as a primary trust signal. PM has no existing gallery.

**Decision:** Built full gallery page with 6 placeholder before/after cards across all service categories. Layout uses 2-column before/after image pairs per job card.

**All images flagged:** `[TODO: swap image]` throughout — client needs to provide real job photos

---

### 8. Service Areas (`app/service-areas/page.tsx`) — **NEW PAGE**
**Source:** Reference site had a dedicated service area section. PM serves 3 distinct regions with very different housing stock.

**Decision:** Built one page with 3 anchor-linked sections (Brooklyn, Queens, Nassau County). Each section has: a localized description, 3 specific callouts, full neighborhood list.

**Generated:** All copy — written to be locally specific (brownstones in Brooklyn, long sewer runs in Nassau, mixed housing types in Queens). All factual details are consistent with PM's actual service area.

---

### 9. Blog (`app/blog/page.tsx`) — **NEW PAGE**
**Source:** Reference site had a blog. PM has none.

**Decision:** Built a placeholder blog index with 6 sample posts. Post titles and excerpts are real content angles Pipe Monkeys could use — all relevant to their actual services and customer pain points.

**TODO flagged:** All posts are placeholders. Client needs to: (a) decide if they want a blog, (b) wire up CMS or create individual post pages if yes.

---

## Navigation Changes

**Template had:** 7-item mega-dropdown NCCER nav (CraftPro, Explore, Crafts, Credentials, Career Pathways, Research, Our Impact, About Us)

**PM nav:** Home | Services | FAQs | Contact — 4 flat items, no dropdowns. Matches Apex Roofing Pro's lean 4-item pattern.

**Topnav:** Replaced NCCER utility links (Find My NCCER Number, Take Module Test) with PM phone number bar: "(718) 749-1830 — Same-Day Service Available"

**Footer:** Replaced NCCER widgets (Donation, Mailing List) with PM Contact Info + Service Areas summary

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Hero image/video | `components/custom/Hero.tsx` | Replace placeholder with PM photo |
| Logo files | `Topnav.tsx`, `Footer.tsx` | Replace `/logos/logo-94.svg` and `/logos/logo-long.svg` |
| Gallery photos | `app/gallery/page.tsx` | All 6 before/after pairs need real job photos |
| Difference section photo | `components/custom/Difference.tsx` | Job site or team photo needed |
| Announcements photo | `components/custom/Announcements.tsx` | One team/job site photo |
| Contact form | `app/contact-us/page.tsx` | Verify HubSpot form ID or replace with preferred form |
| Social media links | `components/custom/Footer.tsx` | Verify actual Facebook/Instagram URLs |
| Business hours | `components/custom/Footer.tsx` | Mon–Sat 7am–8pm is a placeholder — confirm with client |
| Review count/rating | `components/custom/Difference.tsx` | "4.9★" — verify current rating |
| Blog decision | `app/blog/page.tsx` | Client to decide: live blog or remove page |
| Additional testimonials | `components/custom/Testimonial.tsx` | Currently 1 quote — request more from client |

---

## Copy Generation Log

All generated copy is marked below. Everything else is derived directly from pipemonkeys.com or is structural/navigational.

**Generated (short):**
- Homepage intro headline refinement
- "How It Works" 3-step process in `Announcements.tsx`
- Stats block labels in `Difference.tsx`
- Blog post titles and excerpts (6 items) — placeholders only
- Service area descriptions for Brooklyn, Queens, Nassau County in `service-areas/page.tsx`

**Generated (micro-copy):**
- CTA button labels throughout
- Breadcrumbs
- Sub-headings and section labels

**Not generated — pulled from source:**
- All service descriptions
- All FAQ answers
- Daniel Pipitone testimonial
- Neighborhood lists
- Phone number, pricing philosophy, cleanup guarantee language
