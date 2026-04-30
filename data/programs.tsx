import type { ReactNode } from "react";

export type NavItem = { href: string; label: string };

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  href: string;
  imgSrc: string;
  alt: string;
};

export type ProgramsPageData = {
  navItems: NavItem[];
  hero: {
    bgImage: string;
    title: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

export const programsData: ProgramsPageData = {
  navItems: [
    { href: "#flex-module-3", label: "Service Details" },
    { href: "#flex-module-4", label: "Service Areas"  },
  ],

  hero: {
    bgImage: "https://pipemonkeys.com/",
    title: "Our Services",
    description: (
      <p>
        Pipe Monkeys handles every type of drain and sewer issue across
        Brooklyn, Queens, and Nassau County — from a slow kitchen sink to a
        fully blocked main line.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every job starts the same way: we diagnose the problem, explain the
          solution in plain language, and give you the price before any work
          begins. Our techs carry professional-grade cutters, snakes, augers,
          and hydro-jetting equipment — so whatever the line throws at us,
          we&rsquo;re ready.
        </p>
        <p>
          We work in residential homes, brownstones, pre-war walk-ups, condos,
          and multi-family buildings. Same-day scheduling available. Near-instant
          response for emergencies. Call{" "}
          <a href="tel:7187491830">(718) 749-1830</a> to get started.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "Main Sewer Line Clearing",
      content: (
        <p>
          Roots, scale, grease buildup, and heavy blockages in the main line
          require pro-level equipment — not a standard snake from the hardware
          store. Our techs use industrial cutters and jetting to restore full
          flow to your main sewer line and confirm it before leaving. We handle
          this every day in Brooklyn brownstones, Queens multi-families, and
          Nassau County homes with long sewer runs.
        </p>
      ),
      learnMoreHref: "/craft-catalog/main-sewer-lines",
    },
    {
      title: "Kitchen Sink Drain Clearing",
      content: (
        <p>
          Grease, food debris, and soap scum are the most common kitchen culprits
          — and they build up fast in NYC buildings with heavy daily use. We
          clear kitchen drains using professional cutters and hydro jetting
          depending on the severity, leaving the line fully open and grease-free.
          No mess, no damage to pipes, and no recurring clogs if you go with
          jetting.
        </p>
      ),
      learnMoreHref: "/craft-catalog/kitchen-sinks",
    },
    {
      title: "Tub & Shower Drain Clearing",
      content: (
        <p>
          Hair, soap buildup, and mineral deposits accumulate silently until
          you&rsquo;re standing in ankle-deep water. Our techs remove the
          blockage cleanly — no torn-up tile, no chemical damage to pipes — and
          leave the bathroom exactly as they found it. Shoe covers and drop
          cloths every time.
        </p>
      ),
      learnMoreHref: "/craft-catalog/tubs-and-showers",
    },
    {
      title: "Toilet Clog Clearing",
      content: (
        <p>
          Stubborn toilet clogs — including foreign objects, excessive paper,
          and hard-to-reach blockages — are cleared fast with the right auger
          and technique. We&rsquo;ve retrieved everything from children&rsquo;s
          toys to full pipe obstructions. No splash, no stress, and we test the
          flush before we leave.
        </p>
      ),
      learnMoreHref: "/craft-catalog/toilets",
    },
    {
      title: "Hydro Jetting",
      content: (
        <p>
          Snaking clears a path through the clog. Hydro jetting actually scrubs
          grease, scale, and buildup off the pipe walls — giving you a like-new
          interior and dramatically reducing repeat clogs. If you&rsquo;ve been
          dealing with the same drain backing up every few months, jetting is
          the long-term fix. Available for kitchen lines, main sewer lines, and
          commercial buildings.
        </p>
      ),
      learnMoreHref: "/craft-catalog/hydro-jetting",
    },
    {
      title: "Camera Inspection",
      content: (
        <p>
          Before we recommend a repair or jetting service on your main line, we
          can run a camera to show you exactly what&rsquo;s in there — root
          intrusion, pipe damage, grease buildup, or collapsed sections. You see
          what we see, in real time, so there&rsquo;s no guesswork and no
          upselling on work you don&rsquo;t need.
        </p>
      ),
      learnMoreHref: "/craft-catalog/camera-inspection",
    },
    {
      title: "Multi-Unit & Commercial Buildings",
      content: (
        <p>
          We work with brownstones, pre-war walk-ups, condos, co-ops, and
          multi-family buildings across Brooklyn and Queens every single day.
          Stack drain issues, shared main lines, and building-wide backups are
          all in our wheelhouse. We coordinate with building managers and
          minimize disruption to tenants throughout the job.
        </p>
      ),
      learnMoreHref: "/craft-catalog/multi-unit-buildings",
    },
  ],

  // No external partners — use service area neighborhoods instead
  partners: [],
};
