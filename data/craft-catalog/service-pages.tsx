import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  /** Fallback background color while TODO image is pending */
  bgColor: string;
  navItems: ServiceNavItem[];
  /** Short intro paragraph shown in CraftOverview left column */
  overviewContent: ReactNode;
  /** Quick links shown in CraftOverview right column */
  overviewQuickLinks: { label: string; href: string }[];
  /** Middle content sections rendered between overview and related services */
  sections: { id: string; heading: string; content: ReactNode }[];
  /** "Related Services" links at page bottom */
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  /* ─── ROOFING REPAIRS ───────────────────────────────────────────────────── */
  "roofing-repairs": {
    title: "Roofing Repairs",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"          },
      { href: "#when_you_need_it",  label: "When You Need It"  },
      { href: "#our_process",       label: "Our Process"       },
      { href: "#related_services",  label: "Related Services"  },
    ],
    overviewContent: (
      <>
        <p>
          Bellerose Roofing &amp; Siding specializes in repairing roofs of many
          different styles, including asphalt shingle, ceramic tile, synthetic
          slate, and rubber. With over 35 years of experience in the NYC metro
          area, we know exactly how local weather, freeze-thaw cycles, and aging
          affect each roof type.
        </p>
        <p>
          Whether you have a few missing shingles after a storm or a persistent
          leak you can&rsquo;t find the source of, we diagnose the full roof —
          not just the obvious damage — and repair what&rsquo;s actually wrong.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 355-0977", href: "tel:5163550977" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need a Roof Repair?",
        content: (
          <>
            <p>
              Missing or curling shingles, flashing that has pulled away from
              chimneys or walls, water stains on interior ceilings, granules in
              gutters, and visible daylight in the attic are all signs that your
              roof needs professional attention. Small problems left unaddressed
              become major water damage quickly — especially during New York
              winters.
            </p>
            <p>
              We also repair roofs after storm damage. If you&rsquo;ve had a
              major wind or hail event, call us for an inspection before filing
              an insurance claim — we document all damage with photos and can
              advise on what qualifies.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Free Inspection.</strong> We assess the full
              roof, not just the visible damage, and document everything with
              photos. You know exactly what we found before any work begins.
            </p>
            <p>
              <strong>Step 2 — Honest Estimate.</strong> We provide a detailed
              written estimate with no hidden charges. Our decades of experience
              mean our quotes are accurate — no unpleasant surprises at billing.
            </p>
            <p>
              <strong>Step 3 — Repair.</strong> Our crew handles the repair
              with quality materials. If an issue comes up mid-job, we discuss it
              with you and explain your options before proceeding.
            </p>
            <p>
              <strong>Step 4 — Cleanup &amp; Walkthrough.</strong> We haul away
              all debris and do a final walkthrough with you so you can see the
              completed work. We also include free anti-mold and anti-moss strips
              as a thank-you for choosing Bellerose.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roofing Tear-Offs & New Installs", href: "/craft-catalog/roofing-tearoffs-and-installs" },
      { label: "Siding Repairs",                   href: "/craft-catalog/siding-repairs"               },
      { label: "Windows & Skylights",              href: "/craft-catalog/windows-and-skylights"        },
    ],
  },

  /* ─── SIDING REPAIRS ────────────────────────────────────────────────────── */
  "siding-repairs": {
    title: "Siding Repairs",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "When You Need It" },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          From repairing rotten wood siding to replacing cracked or missing
          vinyl panels, Bellerose Roofing &amp; Siding handles all types of
          exterior siding work across the 5 boroughs, Nassau, and Suffolk
          County. New siding not only protects your home from the elements —
          it can add thousands to resale value.
        </p>
        <p>
          We&rsquo;ve been doing siding work in New York for over 35 years and
          understand exactly what holds up in this climate and what doesn&rsquo;t.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 355-0977", href: "tel:5163550977" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Siding Repair?",
        content: (
          <>
            <p>
              Warping, cracking, or buckling panels, visible rot or soft spots,
              paint that keeps peeling no matter how often you repaint, and
              noticeably higher energy bills are all signs that your siding is
              failing. Damaged siding allows water to get behind the exterior
              wall, which leads to mold, rot, and structural damage over time.
            </p>
            <p>
              Even a few damaged panels should be addressed quickly — moisture
              infiltration spreads fast in New York&rsquo;s climate, especially
              during the freeze-thaw cycles of late fall and early spring.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Assess.</strong> We inspect the siding and the
              wall behind it for any signs of moisture damage before beginning
              repair. We don&rsquo;t just replace panels over a wet wall.
            </p>
            <p>
              <strong>Step 2 — Estimate.</strong> You get an honest, written
              estimate before any work starts — broken down by material and labor
              so there are no surprises.
            </p>
            <p>
              <strong>Step 3 — Repair or Replace.</strong> We match existing
              siding material as closely as possible when doing partial
              replacements. For full replacements, we help you select a material
              and profile that suits your home and budget.
            </p>
            <p>
              <strong>Step 4 — Inspect &amp; Clean Up.</strong> We do a final
              walkthrough with you and haul away all debris before leaving.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roofing Repairs",              href: "/craft-catalog/roofing-repairs"             },
      { label: "Roofing Tear-Offs & Installs", href: "/craft-catalog/roofing-tearoffs-and-installs" },
      { label: "Windows & Skylights",          href: "/craft-catalog/windows-and-skylights"       },
    ],
  },

  /* ─── ROOFING TEAR-OFFS & NEW INSTALLS ─────────────────────────────────── */
  "roofing-tearoffs-and-installs": {
    title: "Roofing Tear-Offs & New Installs",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "When You Need It" },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          When repair isn&rsquo;t cost-effective, Bellerose Roofing &amp; Siding
          tears off the old roof down to the deck and installs a fully new
          system — with a deck inspection included. A new roof is one of the
          best investments a homeowner can make, offering improved energy
          efficiency, lower insurance rates, and decades of protection.
        </p>
        <p>
          We install all major roofing types and can help you select the right
          material for your home, budget, and local climate. Fully licensed and
          insured across NYC, Nassau, and Suffolk.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 355-0977", href: "tel:5163550977" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Is a Full Replacement the Right Call?",
        content: (
          <>
            <p>
              If your roof is 20+ years old, has been repaired multiple times, or
              has sustained damage across a large portion of the surface, a full
              replacement is typically more cost-effective than continued repairs.
              We&rsquo;ll give you an honest assessment during the free inspection
              — including photos of every problem area — so you can make a fully
              informed decision.
            </p>
            <p>
              We also recommend replacement when an older roof is preventing a
              homeowner from qualifying for homeowners insurance, or when the
              existing roof is covering structural deck damage that needs to be
              addressed to prevent future failure.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Free Inspection &amp; Estimate.</strong> We
              inspect the full roof and deck, document all damage, and provide a
              detailed written estimate. We explain your material options and
              help you choose what makes the most sense for your home.
            </p>
            <p>
              <strong>Step 2 — Tear-Off.</strong> We strip the old roofing
              system completely, inspect the decking, and replace any damaged
              sections before anything new goes on. No covering over problems.
            </p>
            <p>
              <strong>Step 3 — Install.</strong> New underlayment, flashing, and
              roofing material installed to manufacturer spec. We work clean and
              protect your property throughout the job.
            </p>
            <p>
              <strong>Step 4 — Final Walkthrough &amp; Cleanup.</strong> We haul
              away all tear-off debris, do a final inspection, and walk the
              project with you. Free anti-mold and anti-moss strips included.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roofing Repairs",   href: "/craft-catalog/roofing-repairs"       },
      { label: "Siding Repairs",    href: "/craft-catalog/siding-repairs"        },
      { label: "Windows & Skylights", href: "/craft-catalog/windows-and-skylights" },
    ],
  },

  /* ─── WINDOWS & SKYLIGHTS ───────────────────────────────────────────────── */
  "windows-and-skylights": {
    title: "Windows & Skylights",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",          label: "Overview"         },
      { href: "#when_you_need_it",  label: "When You Need It" },
      { href: "#our_process",       label: "Our Process"      },
      { href: "#related_services",  label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Want more natural light in your home? Looking to replace drafty,
          single-pane windows that spike your energy bill every winter?
          Bellerose Roofing &amp; Siding installs windows and skylights across
          the 5 boroughs, Nassau, and Suffolk County — with the same attention
          to detail we bring to every roofing and siding project.
        </p>
        <p>
          New windows and skylights improve energy efficiency, increase home
          value, and transform the feel of a room. We help you choose the right
          product and handle the full installation properly.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (516) 355-0977", href: "tel:5163550977" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Should You Replace Windows or Add a Skylight?",
        content: (
          <>
            <p>
              Drafts around window frames, condensation between the panes,
              windows that are difficult to open or close, and rising energy
              bills are the most common signs that your windows need to be
              replaced. Older single-pane windows are a significant source of
              heat loss in New York winters.
            </p>
            <p>
              Skylights are worth adding when you have a room that feels dark or
              closed off, or when you want to bring natural light into a space
              where adding a traditional window isn&rsquo;t practical. We
              install skylights with proper flashing and weatherproofing so they
              never become a source of leaks.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p>
              <strong>Step 1 — Consultation &amp; Estimate.</strong> We assess
              your existing windows or skylight location, discuss your goals and
              budget, and provide a written estimate before anything is ordered.
            </p>
            <p>
              <strong>Step 2 — Product Selection.</strong> We help you choose
              the right window style, glass type, and frame material for your
              home&rsquo;s architecture and your energy efficiency goals.
            </p>
            <p>
              <strong>Step 3 — Installation.</strong> Proper installation is
              everything with windows and skylights. We flash, seal, and insulate
              around every opening to prevent drafts and water infiltration.
            </p>
            <p>
              <strong>Step 4 — Cleanup &amp; Walkthrough.</strong> We haul away
              old windows and all debris, and do a final walkthrough with you
              before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Roofing Repairs",              href: "/craft-catalog/roofing-repairs"             },
      { label: "Siding Repairs",               href: "/craft-catalog/siding-repairs"              },
      { label: "Roofing Tear-Offs & Installs", href: "/craft-catalog/roofing-tearoffs-and-installs" },
    ],
  },
};
