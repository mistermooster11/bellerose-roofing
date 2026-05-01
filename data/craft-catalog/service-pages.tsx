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

  /* ─── MAIN SEWER LINES ─────────────────────────────────────────────────── */
  "main-sewer-lines": {
    title: "Main Sewer Lines",
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
          When the main sewer line backs up, every drain in the building stops
          working. These blockages — caused by root intrusion, grease and scale
          buildup, or decades of accumulation — require industrial-grade equipment
          that goes beyond what a standard snake can handle.
        </p>
        <p>
          Pipe Monkeys techs clear main sewer lines in Brooklyn brownstones, Queens
          multi-family buildings, and Nassau County homes with long underground
          runs — every single day.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (718) 749-1830", href: "tel:7187491830"   },
      { label: "Contact Us Online",   href: "/contact-us"      },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Main Line Service?",
        content: (
          <>
            <p>
              Multiple drains backing up at once is the clearest sign your main
              sewer line is blocked — not just a single fixture. Other warning signs
              include gurgling sounds from drains, slow flow on every floor of the
              building, sewage odors, or water backing up in the tub when you flush
              the toilet.
            </p>
            <p>
              These symptoms don&rsquo;t clear on their own. The longer a main line
              blockage sits, the higher the risk of a sewage backup into the basement
              or lower-level units. Call us as soon as these signs appear.
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
              <strong>Step 1 — Diagnose.</strong> We assess the situation before
              any tools go in. For main line jobs, we confirm the blockage location
              and severity and recommend a camera inspection when the cause isn&rsquo;t
              obvious.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> You get the price before
              we start — no surprises. What we quote is what you pay.
            </p>
            <p>
              <strong>Step 3 — Clear It.</strong> We use industrial electric cutters
              and hydro jetting equipment to break through and flush out root masses,
              grease plugs, and heavy scale. We don&rsquo;t leave until flow is fully
              restored.
            </p>
            <p>
              <strong>Step 4 — Confirm and Clean Up.</strong> We run water through
              to verify full flow, show you the result, and leave the area cleaner
              than we found it. Shoe covers and drop cloths on every job.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Camera Inspection",         href: "/craft-catalog/camera-inspection"    },
      { label: "Hydro Jetting",             href: "/craft-catalog/hydro-jetting"        },
      { label: "Drain Snaking & Augering",  href: "/craft-catalog/drain-snaking"        },
      { label: "Multi-Unit Buildings",      href: "/craft-catalog/multi-unit-buildings" },
    ],
  },

  /* ─── KITCHEN SINKS ────────────────────────────────────────────────────── */
  "kitchen-sinks": {
    title: "Kitchen Sinks",
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
          Grease, food debris, and soap scum are the three main kitchen drain
          killers — and in New York City buildings with heavy daily use, they
          build up faster than anywhere else. A slow kitchen sink almost always
          means the problem is already significant inside the pipe.
        </p>
        <p>
          Pipe Monkeys clears kitchen drains across Brooklyn, Queens, and Nassau
          County using professional snakes and hydro jetting, depending on the
          severity. No mess, no chemical damage to pipes.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (718) 749-1830", href: "tel:7187491830" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Kitchen Drain Service?",
        content: (
          <>
            <p>
              A kitchen drain that drains slowly, backs up under the sink, or
              emits a persistent odor is telling you grease or debris has
              accumulated in the line. In buildings with garbage disposals, the
              buildup accelerates — and chemical drain cleaners can actually make
              the long-term problem worse by softening older pipes.
            </p>
            <p>
              Don&rsquo;t wait until the sink stops draining completely. Early
              intervention is cheaper, faster, and keeps standing water and odors
              out of your kitchen.
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
              <strong>Step 1 — Diagnose.</strong> We look at the sink, check
              under the cabinet, and assess how far the blockage has progressed.
              We&rsquo;ll tell you whether snaking or jetting is the right call
              and why.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Price is confirmed before
              any work begins. No bait-and-switch.
            </p>
            <p>
              <strong>Step 3 — Clear It.</strong> For grease buildup, hydro
              jetting scrubs the pipe walls clean — reducing the chance of a
              repeat clog. For straightforward blockages, a professional electric
              snake breaks it up fast and gets the line flowing.
            </p>
            <p>
              <strong>Step 4 — Test and Clean Up.</strong> We run hot water to
              confirm full drainage and wipe down the work area before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Hydro Jetting",            href: "/craft-catalog/hydro-jetting"       },
      { label: "Drain Snaking & Augering", href: "/craft-catalog/drain-snaking"       },
      { label: "Main Sewer Lines",         href: "/craft-catalog/main-sewer-lines"    },
      { label: "Multi-Unit Buildings",     href: "/craft-catalog/multi-unit-buildings"},
    ],
  },

  /* ─── TUBS & SHOWERS ───────────────────────────────────────────────────── */
  "tubs-and-showers": {
    title: "Tubs & Showers",
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
          Hair, soap residue, and mineral deposits accumulate silently inside tub
          and shower drains until you&rsquo;re standing in ankle-deep water. The
          fix is straightforward — but done wrong, it damages tile, p-traps, or
          the drain body itself.
        </p>
        <p>
          Pipe Monkeys removes bathroom drain blockages cleanly and carefully, with
          shoe covers and drop cloths on every job. Your bathroom goes back to normal
          — or better.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (718) 749-1830", href: "tel:7187491830" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Tub & Shower Drain Service?",
        content: (
          <>
            <p>
              Standing water in the tub, a drain that takes minutes to clear after
              a shower, or a persistent musty smell from the drain are all signs of a
              buildup that a plunger won&rsquo;t fix. In older NYC buildings, mineral
              deposits from hard water compound the problem — narrowing pipes gradually
              until they nearly close off.
            </p>
            <p>
              If you&rsquo;ve already tried drain cleaning solutions without results,
              the clog is past the point of DIY. Call us.
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
              <strong>Step 1 — Diagnose.</strong> We assess the drain type, check the
              p-trap and trap arm for accessibility, and confirm the blockage is in
              the drain line — not the main stack.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Price confirmed before we
              touch anything. You approve — then we work.
            </p>
            <p>
              <strong>Step 3 — Clear It.</strong> We use the right cable gauge for
              the pipe size — no forcing, no guessing. The blockage comes out cleanly
              without damaging the drain body or tile surround.
            </p>
            <p>
              <strong>Step 4 — Test and Clean Up.</strong> We run the shower and
              confirm full drainage before leaving. Shoe covers and drop cloths mean
              your bathroom floor stays clean throughout.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Drain Snaking & Augering", href: "/craft-catalog/drain-snaking"    },
      { label: "Toilets",                  href: "/craft-catalog/toilets"           },
      { label: "Hydro Jetting",            href: "/craft-catalog/hydro-jetting"     },
      { label: "Kitchen Sinks",            href: "/craft-catalog/kitchen-sinks"     },
    ],
  },

  /* ─── TOILETS ──────────────────────────────────────────────────────────── */
  "toilets": {
    title: "Toilets",
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
          Stubborn toilet clogs — including foreign objects, excessive paper, and
          blockages too deep for a plunger to reach — require the right auger and
          the right technique. Forcing the wrong tool causes damage; calling too
          late turns a simple clog into a sewage backup.
        </p>
        <p>
          Pipe Monkeys handles toilet clogs fast, without splash, and without damage
          to the toilet body or floor. We test the flush before leaving.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (718) 749-1830", href: "tel:7187491830" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Toilet Clog Service?",
        content: (
          <>
            <p>
              If a plunger hasn&rsquo;t resolved the clog after a few attempts, the
              blockage is past the trap — deeper in the drain line or in an object
              that can&rsquo;t be pushed through. Common culprits include: children&rsquo;s
              toys, hygiene products, excessive wipes (even &ldquo;flushable&rdquo; ones),
              and buildup at the horn of older toilets.
            </p>
            <p>
              A partial clog that flushes slowly is also worth addressing before it
              becomes a full backup. Call us before the situation escalates.
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
              <strong>Step 1 — Diagnose.</strong> We determine whether the clog is
              in the toilet trap, the flange connection, or deeper in the drain line.
              That determines the right tool.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> You get a clear price before
              any work begins.
            </p>
            <p>
              <strong>Step 3 — Clear It.</strong> We use a professional closet auger
              to retrieve the object or break up the blockage without scratching the
              bowl or damaging the internal glaze. We&rsquo;ve cleared everything from
              toys to full pipe obstructions.
            </p>
            <p>
              <strong>Step 4 — Test and Clean Up.</strong> Multiple test flushes
              confirm the line is clear. We wipe down and leave the bathroom exactly
              as we found it.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Tubs & Showers",           href: "/craft-catalog/tubs-and-showers" },
      { label: "Drain Snaking & Augering", href: "/craft-catalog/drain-snaking"    },
      { label: "Main Sewer Lines",         href: "/craft-catalog/main-sewer-lines" },
      { label: "Camera Inspection",        href: "/craft-catalog/camera-inspection"},
    ],
  },

  /* ─── HYDRO JETTING ────────────────────────────────────────────────────── */
  "hydro-jetting": {
    title: "Hydro Jetting",
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
          A snake clears a path through a clog. Hydro jetting actually scrubs the
          interior pipe walls — using high-pressure water to blast away grease, scale,
          mineral deposits, and root fragments from the inside out.
        </p>
        <p>
          If the same drain has backed up multiple times in the past year, jetting is
          the long-term fix. Pipe Monkeys offers hydro jetting for kitchen lines, main
          sewer lines, and commercial buildings throughout Brooklyn, Queens, and Nassau
          County.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (718) 749-1830", href: "tel:7187491830" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Is Hydro Jetting the Right Call?",
        content: (
          <>
            <p>
              Hydro jetting is the right call when: a drain has recurring clogs despite
              regular snaking; there is confirmed grease buildup in a restaurant or
              commercial kitchen line; a camera inspection reveals significant scale or
              root intrusion that a cutter alone won&rsquo;t fully resolve; or a
              landlord wants a clean baseline before a new tenant moves in.
            </p>
            <p>
              Jetting is not the right first tool for every job — we&rsquo;ll always
              recommend it when it&rsquo;s warranted, and only when it&rsquo;s warranted.
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
              <strong>Step 1 — Camera First (Recommended).</strong> For main line
              jetting, we run a camera to confirm the pipe is structurally sound before
              introducing high pressure. Jetting a cracked or collapsed pipe makes the
              problem worse.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Price confirmed before we start.
            </p>
            <p>
              <strong>Step 3 — Jet It.</strong> We feed the jetting hose into the
              clean-out or access point and work the nozzle through the line at up to
              4,000 PSI — forward and backward — until the walls are clean and flow
              is fully restored.
            </p>
            <p>
              <strong>Step 4 — Confirm.</strong> We run water to verify full flow
              and, on main line jobs, can run a post-jet camera to show you the results.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Camera Inspection",        href: "/craft-catalog/camera-inspection"   },
      { label: "Main Sewer Lines",         href: "/craft-catalog/main-sewer-lines"    },
      { label: "Kitchen Sinks",            href: "/craft-catalog/kitchen-sinks"       },
      { label: "Multi-Unit Buildings",     href: "/craft-catalog/multi-unit-buildings"},
    ],
  },

  /* ─── DRAIN SNAKING & AUGERING ─────────────────────────────────────────── */
  "drain-snaking": {
    title: "Drain Snaking & Augering",
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
          Drain snaking is the first-line tool for most residential clogs. Our
          professional-grade electric snakes reach further, spin harder, and break
          through blockages that hand snakes and drugstore augers can&rsquo;t touch.
        </p>
        <p>
          Pipe Monkeys carries multiple cable sizes — from small bathroom drain cables
          to full main-line cables — so the right tool is always on the truck when we
          arrive.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (718) 749-1830", href: "tel:7187491830" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Drain Snaking?",
        content: (
          <>
            <p>
              Snaking is the right call for most single-drain clogs — kitchen sinks,
              bathroom sinks, tubs, showers, and toilets where the blockage is localized.
              It&rsquo;s also the first step for main line jobs before deciding whether
              hydro jetting is needed.
            </p>
            <p>
              If you&rsquo;ve tried a plunger or a hand snake without results, the
              clog is past what consumer tools can reach. A professional cable gets
              into the line, breaks up or retrieves the obstruction, and leaves the
              drain fully open.
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
              <strong>Step 1 — Select the Right Tool.</strong> Cable diameter matters.
              We match the cable to the pipe size — forcing an oversized cable causes
              damage; undersizing leaves the clog intact.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> You know the price before work
              begins.
            </p>
            <p>
              <strong>Step 3 — Snake It.</strong> We feed the cable through the access
              point (drain opening, clean-out, or trap access) and work through the
              blockage until the line clears. If the cable hits something it can&rsquo;t
              resolve, we&rsquo;ll tell you immediately — no pushing blind.
            </p>
            <p>
              <strong>Step 4 — Test and Clean Up.</strong> Water runs to confirm full
              drainage. Cable, debris, and equipment cleaned up before we leave.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Hydro Jetting",        href: "/craft-catalog/hydro-jetting"     },
      { label: "Main Sewer Lines",     href: "/craft-catalog/main-sewer-lines"  },
      { label: "Kitchen Sinks",        href: "/craft-catalog/kitchen-sinks"     },
      { label: "Tubs & Showers",       href: "/craft-catalog/tubs-and-showers"  },
    ],
  },

  /* ─── CAMERA INSPECTION ────────────────────────────────────────────────── */
  "camera-inspection": {
    title: "Camera Inspection",
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
          Before recommending a major repair, jetting service, or repeated snaking,
          Pipe Monkeys can run a camera through your main line and show you exactly
          what&rsquo;s in there — in real time. You see what we see: root intrusion,
          grease buildup, pipe damage, or collapsed sections.
        </p>
        <p>
          No guesswork. No upsells on work you don&rsquo;t need.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (718) 749-1830", href: "tel:7187491830" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need a Camera Inspection?",
        content: (
          <>
            <p>
              Camera inspection is the right call when: a main line blockage keeps
              coming back after repeated snaking; you&rsquo;re buying or selling a
              home and want to know the condition of the sewer line; a plumber or
              contractor recommends an expensive repair and you want independent
              verification; or we recommend hydro jetting and want to confirm the
              pipe is structurally sound first.
            </p>
            <p>
              It&rsquo;s also useful after a major clearing job — we can show you the
              before-and-after results so you know the line is actually clean, not
              just partially cleared.
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
              <strong>Step 1 — Access the Line.</strong> We locate the clean-out or
              access point nearest to the problem area. In buildings without a clean-out,
              we&rsquo;ll advise on the best access option.
            </p>
            <p>
              <strong>Step 2 — Quote Upfront.</strong> Price confirmed before the
              camera goes in.
            </p>
            <p>
              <strong>Step 3 — Run the Camera.</strong> We feed a high-resolution
              camera through the line and walk you through what we see — root masses,
              grease, cracks, offsets, or clear pipe. You&rsquo;re watching the screen
              in real time.
            </p>
            <p>
              <strong>Step 4 — Report and Recommend.</strong> We tell you what we found
              and what, if anything, needs to be done — with the footage to back it up.
              You decide how to proceed. No pressure.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Hydro Jetting",            href: "/craft-catalog/hydro-jetting"       },
      { label: "Main Sewer Lines",         href: "/craft-catalog/main-sewer-lines"    },
      { label: "Drain Snaking & Augering", href: "/craft-catalog/drain-snaking"       },
      { label: "Multi-Unit Buildings",     href: "/craft-catalog/multi-unit-buildings"},
    ],
  },

  /* ─── MULTI-UNIT & COMMERCIAL BUILDINGS ────────────────────────────────── */
  "multi-unit-buildings": {
    title: "Multi-Unit & Commercial Buildings",
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
          Pipe Monkeys works with brownstones, pre-war walk-ups, condos, co-ops,
          and multi-family buildings across Brooklyn and Queens every day. Stack
          drain issues, shared main lines, and building-wide backups are all in
          our wheelhouse — and we know how to coordinate the job without creating
          chaos for tenants.
        </p>
        <p>
          Building managers and landlords: we show up on time, work efficiently,
          and document the work. Call us directly at{" "}
          <a href="tel:7187491830">(718) 749-1830</a>.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (718) 749-1830", href: "tel:7187491830" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Multi-Unit Drain Service?",
        content: (
          <>
            <p>
              A building-wide backup — multiple units complaining of slow drains or
              sewage odors simultaneously — almost always points to the main building
              drain or the stack serving multiple floors. Individual unit clogs are
              more straightforward; building-wide problems require more diagnostic
              work to pinpoint whether the issue is in a branch line, the main stack,
              or the building sewer itself.
            </p>
            <p>
              We handle both. Whether it&rsquo;s a single-apartment drain or a main
              line serving a six-unit brownstone, we bring the right equipment and
              take the time to find the actual source of the problem.
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
              <strong>Step 1 — Coordinate with Management.</strong> We work directly
              with the building manager or owner to understand which units are affected
              and minimize disruption. If access to multiple units is needed, we schedule
              efficiently.
            </p>
            <p>
              <strong>Step 2 — Diagnose the Root Cause.</strong> Building-wide symptoms
              need root-cause diagnosis — we don&rsquo;t just snake the nearest drain.
              Camera inspection is often recommended to locate the exact blockage in
              the stack or main building drain.
            </p>
            <p>
              <strong>Step 3 — Quote Upfront.</strong> Clear price before we start.
              For complex jobs, we scope the work and confirm before proceeding.
            </p>
            <p>
              <strong>Step 4 — Clear and Confirm.</strong> We use the right tool for
              the blockage type — snake, industrial cutter, or hydro jet — confirm full
              flow on all affected units, and document the work completed.
            </p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Camera Inspection",        href: "/craft-catalog/camera-inspection" },
      { label: "Hydro Jetting",            href: "/craft-catalog/hydro-jetting"     },
      { label: "Main Sewer Lines",         href: "/craft-catalog/main-sewer-lines"  },
      { label: "Drain Snaking & Augering", href: "/craft-catalog/drain-snaking"     },
    ],
  },
};
