# Template Map: PipeMonkey Template (v1)
**Framework**: Next.js 16 App Router  
**Styling**: Tailwind CSS v4 + custom CSS (`styles/`)  
**Package Manager**: pnpm  
**Architecture**: Hybrid — primary client content lives in `/data/` files (data-driven); homepage sections, FAQs, contact, gallery, service areas, and blog are hardcoded inline in page/component files  
**Last Mapped**: May 2026 (v2 — updated after full Pipe Monkeys redesign)  
**First Client Built**: Pipe Monkeys (drain & sewer — Brooklyn, Queens, Nassau County)

---

## Quick Reference

This is a purpose-built template for **local skilled trade businesses** — no conceptual remapping required. It ships with 10 pages, a service detail dynamic route, a testimonial slider, a redesigned contact page with stacked service areas + form + map, and a before/after gallery. The most data-driven page is `/explore/[slug]` (About Us), which pulls entirely from `data/channel/[slug].tsx`. Service catalog, service detail pages, and the service overview list are also fully data-driven. Homepage sections (Hero, Announcements, Difference, Testimonial) and the FAQs, Contact, Gallery, Service Areas, and Blog pages contain hardcoded inline content that requires direct editing.

**The key insight for repositioning:** Edit data files first — lowest risk, highest leverage. Then work through the hardcoded component list. The service detail pages are driven by `data/craft-catalog/service-pages.tsx` — one entry per service slug. Register every new client in `data/channel/index.ts` or the About Us page will 404.

**Critical difference from NCCER Clone template:** This template already has the full trade page set built in (gallery, service areas, blog, privacy policy). There is nothing to remove — only content to swap. All pages are trade-appropriate out of the box.

**Homepage section order (v2):** Hero → HomeSectionWithLine (How It Works) → Insights (Services accordion) → Testimonial → HomeCTA (Call CTA strip). All five sections are active — edit each component directly.

---

## Pages & Routes

| Route | Purpose | Data File | Inline Content? |
|-------|---------|-----------|----------------|
| `/` | Homepage | `lib/constants/AccordionItems.tsx` (Insights data) | Yes — Hero, Announcements, Difference, Insights, Testimonial, HomeCTA all hardcoded |
| `/explore/[slug]` | About Us | `data/channel/[slug].tsx` | No — fully data-driven |
| `/craft-catalog` | Services catalog with filter | `data/craft-catalog/crafts.ts` | Minimal |
| `/craft-catalog/[slug]` | Individual service detail | `data/craft-catalog/service-pages.tsx` | No — data-driven |
| `/programs-crafts/programs` | Service overview list (cards) | `data/programs.tsx` | No — fully data-driven |
| `/general-faqs` | FAQs accordion | None | Yes — all FAQ items inline in page file |
| `/contact-us` | Contact form + service areas + map | None | Yes — all content inline |
| `/gallery` | Before/After job photo grid | None | Yes — gallery items array inline |
| `/service-areas` | Regional landing sections | None | Yes — area data inline |
| `/blog` | Blog post index | None | Yes — post array inline |
| `/privacy-policy` | Privacy Policy | None | Yes — all sections inline in page file |

**Dynamic route — `/explore/[slug]`:** slug must match a key in `data/channel/index.ts`. Missing registration = 404.

**Dynamic route — `/craft-catalog/[slug]`:** slug must match a key in the `servicePages` record in `data/craft-catalog/service-pages.tsx`. The route uses `generateStaticParams` to pre-render all registered slugs at build time. Missing key = 404.

---

## Data Files — Content Slots

### `data/channel/[client-slug].tsx`
_Primary About Us and homepage channel data. One file per client._  
_Type: `ChannelPageData` (defined in `components/custom/channel/types.ts`)_

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `slug` | string | ✅ | URL key — must match registration in `index.ts` |
| `navItems[]` | `{href, label}[]` | ✅ | In-page anchor nav for About Us sidebar |
| `hero.title` | string | ✅ | Page H1 |
| `hero.breadcrumbLabel` | string | ✅ | Breadcrumb text |
| `hero.imageBg` | string | ✅ | Full CSS background string e.g. `url(...) no-repeat center/cover` |
| `hero.description` | ReactNode | ✅ | 1–2 sentence intro `<p>` |
| `learnMore.title` | string | ✅ | About section headline |
| `learnMore.content` | ReactNode | ✅ | 3–5 paragraphs; can include `<h5>` subheads |
| `resources.title` | string | ✅ | Quick links section heading |
| `resources.resources[]` | array | ✅ | Each: `{title, href, icon}` — icon is icomoon class string |
| `crafts.description` | ReactNode | ✅ | Intro above service links |
| `crafts.craftLinks[]` | array | ✅ | Each: `{label, href}` — links to `/craft-catalog/[slug]` pages |
| `testimonials.videos[]` | array | ⬜ | Use `[]` if no videos |
| `testimonials.quote` | object | ✅ | `{text, name, position}` |
| `flexFeature.imageSrc` | string | ✅ | Emergency CTA photo URL |
| `flexFeature.title` | string | ✅ | Emergency CTA headline |
| `flexFeature.body` | ReactNode | ✅ | 1–2 sentence body |
| `flexFeature.buttonLabel` | string | ✅ | CTA button text |
| `flexFeature.buttonHref` | string | ✅ | CTA link — typically `tel:` |
| `getInTouch.body` | ReactNode | ✅ | Contact CTA paragraph |
| `getInTouch.buttonLabel` | string | ✅ | Button text |
| `getInTouch.buttonHref` | string | ✅ | Button link |

**Register in**: `data/channel/index.ts` — add import and add key to `channelDataMap`

---

### `lib/constants/AccordionItems.tsx`
_Drives the Insights services accordion section on the homepage._  
_Used by `components/custom/Insights.tsx`, `InsightAccordionTabItem.tsx`, and `InsightAccordionDataItem.tsx`._

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | Unique accordion ID e.g. `"accordion-0"` |
| `title` | string | Service name shown as the clickable tab label |
| `image` | string | Path to placeholder/real image shown in the right panel |
| `description` | string | Short overview shown in the left panel when expanded |
| `learnHref` | string | Link to the full service detail page e.g. `/craft-catalog/[slug]` |
| `steps[]` | `{ label: string; body: string }[]` | 3–4 condensed how-it-works steps shown in the right panel |

**How many items:** Template ships with 4. Sidebar arrow indicator slides to the active item — 3–5 items work cleanly. More than 5 may cause layout issues on mobile.

**Right panel image:** Each item's `image` field is displayed as a background-cover div above the steps. Replace with real job photos before launch.

---

### `data/craft-catalog/crafts.ts`
_Drives the services catalog page (`/craft-catalog`). Filter bar has been removed — list is now a clean sortable table._

| Field | Type | Notes |
|-------|------|-------|
| `crafts[]` | `CraftItem[]` | Each: `slug, title` — categories/disciplines/assessment/translation fields are unused and can be omitted |

**⚠️ Filter bar removed (v2):** `CraftCatalogClient.tsx` no longer imports or renders `CraftFilterBar`. The `CATEGORIES` and `DISCIPLINES` constants in `crafts.ts` are no longer used — you can remove them when setting up a new client, or simply leave them and they'll be ignored.

**Important:** Every `slug` in `crafts[]` must have a matching key in `service-pages.tsx` or the detail page will 404.

---

### `data/craft-catalog/service-pages.tsx`
_Drives all individual service detail pages at `/craft-catalog/[slug]`._  
_Type: `ServicePageData` (defined at top of same file)_  
_Record key = URL slug — must match `crafts.ts` slugs_

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | ✅ | Service name — used in page H1 and `<title>` meta |
| `bgColor` | string | ✅ | Fallback CSS color while TODO image is pending e.g. `#101d2b` |
| `navItems[]` | `{href, label}[]` | ✅ | Sidebar anchor nav — always include `#overview`, `#when_you_need_it`, `#our_process`, `#related_services` |
| `overviewContent` | ReactNode | ✅ | 1–2 paragraphs in CraftOverview left column |
| `overviewQuickLinks[]` | `{label, href}[]` | ✅ | Right column quick links — always include phone + contact |
| `sections[]` | `{id, heading, content ReactNode}[]` | ✅ | Middle page sections — typically "When You Need It" + "Our Process" |
| `relatedServices[]` | `{label, href}[]` | ✅ | 3–4 links to other service slugs shown at page bottom |

**Note:** The page uses a shared `PLACEHOLDER_BG` constant (`/images/IMG_9688-1024x682.jpg`) for all service hero backgrounds. Replace per-service before launch.

---

### `data/programs.tsx`
_Drives the service overview list at `/programs-crafts/programs`._  
_Type: `ProgramsPageData`_

| Field | Type | Notes |
|-------|------|-------|
| `navItems[]` | `{href, label}[]` | In-page anchor nav |
| `hero.title` | string | Page H1 |
| `hero.bgImage` | string | Hero background image URL |
| `hero.description` | ReactNode | Intro paragraph |
| `hero.breadcrumbParentLabel` | string | Breadcrumb parent text |
| `hero.breadcrumbParentHref` | string | Breadcrumb parent link |
| `overview.content` | ReactNode | Copy above service cards |
| `overview.quickLinks[]` | array | Each: `{label, href, icon}` |
| `programs[]` | `ProgramItem[]` | Each: `{title, content ReactNode, learnMoreHref}` — one card per service |
| `partners[]` | `PartnerItem[]` | Logo grid — use `[]` for trade clients |

---

### `lib/constants/mainNavItems.ts`
_Controls desktop nav (Navbar.tsx) and mobile nav (MobileNav.tsx)._

Current trade nav — 4 flat items, no dropdowns:
```ts
export type MainNavItem = {
  label: string;
  href?: string | null;
  external?: boolean;
  dropdown?: NavDropdown | null;
};

export const mainNavItems: MainNavItem[] = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/craft-catalog" },
  { label: "FAQs",     href: "/general-faqs" },
  { label: "Contact",  href: "/contact-us" },
];
```

**⚠️ TypeScript Note:** Must export `mainNavItems` as `MainNavItem[]` with explicit type annotation. The `NavDropdown` type must include `description: string` (required, not optional) — `NavItem.tsx` expects it required. See TS Notes section below.

---

## Hardcoded Components (Require Direct Editing)

| Component | What to Change | Effort |
|-----------|---------------|--------|
| `components/custom/Hero.tsx` | H1 headline, subheading paragraph, CTA phone number + label, hero video `<source src>` | Medium |
| `components/custom/header/Topnav.tsx` | Phone number in centered top bar (`href="tel:..."` + display text) | Low |
| `components/custom/Footer.tsx` | Quick links, contact widget (phone, hours), service areas summary, social URLs, copyright name | Low |
| `components/custom/Announcements.tsx` | "How It Works" headline, 3-step process copy, feature image `backgroundImage` URL. Has two buttons: "Schedule Service" (tel:) and "See All Services" (/craft-catalog) | Medium |
| `components/custom/Difference.tsx` | Stats array (3 items: stat, label, linkText, href), section headline, trust photo `<VapeImage src>`. Third stat links to `/craft-catalog` — update if nav changes | Medium |
| `components/custom/Insights.tsx` | Sub-heading, H2 headline, intro paragraph above the accordion. Accordion items are in `lib/constants/AccordionItems.tsx` | Low |
| `lib/constants/AccordionItems.tsx` | All 4 accordion entries — title, image, description, learnHref, and 3–4 steps per service | Medium |
| `components/custom/HomeCTA.tsx` | Sub-heading, H2 headline, body copy, phone number (`href` + display text). This is the compact call-to-action strip above the footer. | Low |
| `components/custom/Testimonial.tsx` | `testimonials[]` array — quote, name, position, platform per reviewer. Slider auto-advances; add/remove entries freely | Medium |
| `app/page.tsx` | Homepage section order: Hero → HomeSectionWithLine → Insights → Testimonial → HomeCTA. All five active — import and render any new sections here | Low |
| `app/general-faqs/page.tsx` | `faqItems[]` array — all FAQs inline. CTA section at bottom uses `ia-bg-sky` (light blue) with standard dark text — do not add white text classes | Medium |
| `app/contact-us/page.tsx` | Hero uses `<CraftHero>` component (full-width image masthead). `serviceAreas[]` array (region, description, neighborhoods per area), phone number throughout, Google Maps iframe `src` | Medium |
| `app/gallery/page.tsx` | `galleryItems[]` array — 4 items, 2-column grid. Each: label, image URL (single image, aspect-ratio 4/3). No before/after split in this version | Medium |
| `app/service-areas/page.tsx` | `areas[]` array — slug, region, headline, description, callouts[], neighborhoods per region | Medium |
| `app/blog/page.tsx` | `posts[]` array — all post entries inline | Low |
| `app/privacy-policy/page.tsx` | All policy sections inline. Update company name, contact email, and any jurisdiction-specific details | Low |

---

## Navigation

- **Main nav file**: `lib/constants/mainNavItems.ts`
- **Template default**: 4-item flat nav — `Home | Services | FAQs | Contact` — already trade-ready
- **Mobile nav**: `components/custom/header/MobileNav.tsx` — reads from same `mainNavItems`
- **Desktop nav**: `components/custom/header/Navbar.tsx` — also reads from `mainNavItems`
- **To add Service Areas**: add `{ label: "Service Areas", href: "/service-areas" }` — recommended when regional coverage is a key selling point
- **TS requirement**: Export `mainNavItems` as `MainNavItem[]` — see TS Notes

---

## Image Slots

| Slot | File | Current Placeholder | Notes |
|------|------|---------------------|-------|
| Hero background video | `components/custom/Hero.tsx` | NCCER video URL | Replace `<source src>` with client video or swap to `<img>` |
| Feature section image | `components/custom/Announcements.tsx` | `/images/IMG_9688-1024x682.jpg` | `backgroundImage` inline style |
| Trust stats photo | `components/custom/Difference.tsx` | `/images/IMG_9750-1024x683.jpg` | `<VapeImage src>` prop |
| About Us hero | `data/channel/[client].tsx → hero.imageBg` | `/images/IMG_9688-1024x682.jpg` | Full CSS background string |
| About Us flex feature | `data/channel/[client].tsx → flexFeature.imageSrc` | `/images/iStock-1220765707-443x559-1.jpg` | Direct URL |
| Service detail hero | `app/craft-catalog/[slug]/page.tsx → PLACEHOLDER_BG` | `/images/IMG_9688-1024x682.jpg` | Shared across all service pages — swap per-service before launch |
| Gallery before/after | `app/gallery/page.tsx → galleryItems[].before/.after` | `/images/IMG_9688...` + `/images/IMG_9750...` (rotating) | Replace with real job photos |
| Logo (mobile header) | `components/custom/header/MobileNav.tsx` + `Topnav.tsx` | `/logos/logo-94.svg` | Replace SVG file in `/public/logos/` |
| Logo (footer) | `components/custom/Footer.tsx` | `/logos/logo-long.svg` | Replace SVG file in `/public/logos/` |

**Placeholder strategy:** All template images are from `/public/images/`. Replace with client-provided photos before launch. Use `[TODO: Replace with [description] photo]` comments and `backgroundColor: '#101d2b'` as fallback.

---

## Testimonial Slider

`components/custom/Testimonial.tsx` ships with a **3-review carousel** that auto-advances every 6 seconds with left/right arrow buttons and dot indicators.

To reposition for a new client:
- Edit the `testimonials[]` array at the top of the file
- Each entry: `{ id, quote, name, position, platform }`
- Minimum 1 review; slider controls only appear when 2+ entries exist
- Mark placeholder reviews clearly with `// TODO: Replace with real review`
- The `SLIDE_HEIGHT` constant (default `"28rem"`) may need adjustment if quotes are significantly longer or shorter than the template's

---

## Contact Page Structure

`app/contact-us/page.tsx` has four fixed sections in this order:

1. **Hero** — uses `<CraftHero>` component (full-width background image with breadcrumb overlay — same as service detail pages). Pass `title`, `bgImage`, and `breadcrumbs` props. Default image: `/images/IMG_9688-1024x682.jpg`.
2. **Contact Form** — 2-column grid form (name, phone, email, service dropdown, message) + `ia-btn` styled submit button
3. **Service Areas** — intro paragraph + stacked `AreaSection` components (one per region). Sections are plain divs with `paddingBottom` and `borderBottom` — do NOT wrap in `flex-module` or `content-block` (adds unwanted padding).
4. **Google Map** — iframe embed below all neighborhoods

To reposition: update `serviceAreas[]` array (region, description, neighborhoods), all phone number `href` and display values, and the Google Maps iframe `src` URL.

---

## TypeScript Notes (Known Build Issues)

1. **`mainNavItems` type** — must use explicit `MainNavItem[]` annotation. Using `dropdown: null` causes `MobileNav.tsx` to throw `Property 'titleHref' does not exist on type 'never'`. Solution: omit `dropdown` entirely on flat items and export with `MainNavItem[]` type.

2. **`NavDropdown.description`** — must be `description: string` (required), not `description?: string`. `NavItem.tsx` expects it required — making it optional causes TS error at `Navbar.tsx`.

3. **`service-pages.tsx` slugs** — every slug key in `servicePages` must match a slug in `crafts.ts`, and vice versa. Mismatches don't throw at build time but produce 404s at runtime.

4. **`data/channel/index.ts` registration** — new clients must be imported and added to `channelDataMap`. Missing registration silently 404s the About Us page.

---

## Repositioning Checklist

Use for every new client build on the PipeMonkey template:

**Data files — start here:**
- [ ] Create `data/channel/[client-slug].tsx` using `ChannelPageData` type
- [ ] Register client in `data/channel/index.ts`
- [ ] Edit `data/craft-catalog/crafts.ts` — replace service list + CATEGORIES + DISCIPLINES
- [ ] Edit `data/craft-catalog/service-pages.tsx` — replace all service entries with client's services (one entry per slug)
- [ ] Edit `data/programs.tsx` — replace service cards + hero + overview

**Constants:**
- [ ] Edit `lib/constants/mainNavItems.ts` — update labels if needed (already 4-item flat; add Service Areas if applicable)

**Hardcoded components:**
- [ ] Edit `components/custom/Hero.tsx` — headline, subheading, CTA phone, hero video/image
- [ ] Edit `components/custom/header/Topnav.tsx` — phone number in top bar
- [ ] Edit `components/custom/Footer.tsx` — links, contact info, service areas summary, copyright
- [ ] Edit `components/custom/Announcements.tsx` — How It Works steps + feature image + button labels
- [ ] Edit `components/custom/Difference.tsx` — trust stats + photo
- [ ] Edit `lib/constants/AccordionItems.tsx` — 4 accordion service entries (title, image, description, learnHref, steps)
- [ ] Edit `components/custom/Insights.tsx` — sub-heading, H2, intro paragraph
- [ ] Edit `components/custom/HomeCTA.tsx` — sub-heading, H2, body copy, phone number
- [ ] Edit `components/custom/Testimonial.tsx` — replace reviews in `testimonials[]` array

**Inline pages:**
- [ ] Edit `app/general-faqs/page.tsx` — replace `faqItems[]` with trade-specific FAQs (6–8 items). CTA section uses `ia-bg-sky` (light blue) — use standard dark text, no white text classes
- [ ] Edit `app/contact-us/page.tsx` — update `<CraftHero>` bgImage, replace `serviceAreas[]`, all phone numbers, Maps embed URL
- [ ] Edit `app/gallery/page.tsx` — replace `galleryItems[]` (4 items, single image per job, aspect-ratio 4/3)
- [ ] Edit `app/service-areas/page.tsx` — replace `areas[]` with client's regions
- [ ] Edit `app/blog/page.tsx` — replace `posts[]` with relevant article placeholders
- [ ] Edit `app/privacy-policy/page.tsx` — update company name, contact email, jurisdiction details

**Images (before launch):**
- [ ] Hero video/image — `Hero.tsx` `<source src>`
- [ ] Feature section image — `Announcements.tsx` `backgroundImage`
- [ ] Trust photo — `Difference.tsx` `<VapeImage src>`
- [ ] Insights accordion images — `lib/constants/AccordionItems.tsx` → `image` field per service (4 images)
- [ ] Contact page hero — `app/contact-us/page.tsx` → `<CraftHero bgImage="...">` prop
- [ ] About Us hero — `data/channel/[client].tsx → hero.imageBg`
- [ ] About Us flex feature — `data/channel/[client].tsx → flexFeature.imageSrc`
- [ ] Service detail hero — `app/craft-catalog/[slug]/page.tsx → PLACEHOLDER_BG`
- [ ] Gallery images — `app/gallery/page.tsx → galleryItems[].image` (4 items)
- [ ] Logo files — `/public/logos/logo-94.svg` + `/public/logos/logo-long.svg`

**Before shipping:**
- [ ] All phone numbers match prospect's actual number (grep for `7187491830` — replace every instance)
- [ ] No Pipe Monkeys–specific content anywhere in the build (grep for "Pipe Monkeys", "pipe-monkey", "Brooklyn, Queens")
- [ ] All image slots have real images or `[TODO]` comments
- [ ] Testimonial placeholders flagged with `// TODO: Replace with real review`
- [ ] All `learnHref` values in `AccordionItems.tsx` point to valid service slugs
- [ ] TypeScript builds without errors (check TS Notes above)
- [ ] `CONTENT-BRIEF.md` is complete
