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
    bgImage: "/images/IMG_9750-1024x683.jpg",
    title: "Our Services",
    description: (
      <p>
        Bellerose Roofing &amp; Siding handles all types of exterior work across
        the 5 boroughs, Nassau County, and Suffolk County — from emergency roof
        repairs to complete roofing tear-offs, siding replacements, and window
        installs.
      </p>
    ),
    breadcrumbParentLabel: "Services",
    breadcrumbParentHref: "/craft-catalog/",
  },

  overview: {
    content: (
      <>
        <p>
          Every job starts with an honest assessment and a written estimate you
          approve before any work begins. We&rsquo;ve been doing this for over
          35 years in the New York area — we know what each roof type needs,
          what holds up in this climate, and how to deliver quality work at fair
          pricing without cutting corners.
        </p>
        <p>
          Fully licensed and insured in NYC, Nassau, and Suffolk. Call{" "}
          <a href="tel:5163550977">(516) 355-0977</a> to get started with a
          free estimate.
        </p>
      </>
    ),
    quickLinks: [
      { label: "View All Services", href: "/craft-catalog/", icon: "icon-books" },
    ],
  },

  programs: [
    {
      title: "Roofing Repairs",
      content: (
        <p>
          We repair roofs of many different styles — asphalt shingle, ceramic
          tile, synthetic slate, and rubber. Whether you have a few missing
          shingles after a storm or a persistent leak, we inspect the full roof,
          document all damage with photos, and repair what&rsquo;s actually
          wrong. We also include free anti-mold and anti-moss strips as a
          thank-you for choosing Bellerose.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roofing-repairs",
    },
    {
      title: "Siding Repairs",
      content: (
        <p>
          From repairing rotten wood siding to replacing cracked or missing
          vinyl panels, we handle all types of exterior siding work. New siding
          protects your home from the elements and can add thousands to your
          home&rsquo;s resale value. We match existing materials closely on
          partial replacements and help you choose the right product for full
          replacements.
        </p>
      ),
      learnMoreHref: "/craft-catalog/siding-repairs",
    },
    {
      title: "Roofing Tear-Offs & New Installs",
      content: (
        <p>
          When repair isn&rsquo;t cost-effective, we tear off the old system
          down to the deck, inspect and repair the decking, and install a
          fully new roof. We help you upgrade to a more energy-efficient roof
          and handle the entire process — from material selection to final
          cleanup. Debris fully hauled away.
        </p>
      ),
      learnMoreHref: "/craft-catalog/roofing-tearoffs-and-installs",
    },
    {
      title: "Windows & Skylights",
      content: (
        <p>
          Want more natural light in your home? Ready to replace drafty,
          energy-wasting windows? We install windows and skylights across the
          5 boroughs, Nassau, and Suffolk County. Proper flashing and sealing
          on every install — skylights done right never leak.
        </p>
      ),
      learnMoreHref: "/craft-catalog/windows-and-skylights",
    },
  ],

  // No external partners for this trade client
  partners: [],
};
