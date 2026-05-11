import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs — Roofing, Siding & Windows",
  description:
    "Answers to the most common questions about roofing repairs, full installs, siding, and windows in Queens, NYC, Nassau County, and Suffolk County. Free estimates — call (516) 355-0977.",
  openGraph: {
    title: "Roofing & Siding FAQs — Bellerose Roofing & Siding",
    description:
      "Common questions about roofing, siding, and window services in Queens, NYC, and Long Island. 35+ years of experience. Free estimates.",
    url: "https://belleroseroofingsiding.com/general-faqs",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — always. We inspect the roof, siding, or windows, document all damage with photos, and provide a written estimate before any work begins. There's no charge for the estimate and no pressure to commit.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Bellerose Roofing & Siding been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We've been serving Queens and Long Island homeowners for over 35 years. The business is family-owned and operated — the same family has run it since the beginning.",
      },
    },
    {
      "@type": "Question",
      name: "What types of roofs do you repair and install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with asphalt shingles, ceramic tile, synthetic slate, and rubber (EPDM) roofing systems. We handle both residential repairs and full tear-off and new install projects.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a full roof replacement or just a repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the extent of the damage and the age of your roof. We assess every roof honestly — if a targeted repair can solve the problem and extend your roof's life significantly, we'll say so. We don't push unnecessary replacements.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are fully licensed in New York City (NYC Lic# 1259922), Nassau County (Nassau Lic# H18B8620000), and Floral Park (Lic# 119), and carry full liability insurance.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve the full NYC metro area including all 5 boroughs (Queens, Brooklyn, Manhattan, Staten Island, and the Bronx), Nassau County, and Suffolk County.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if an issue comes up mid-project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We keep you informed every step of the way. If we discover something unexpected — rotted decking, hidden damage, a structural issue — we stop, document it, and walk you through your options before any additional work begins. No surprise charges.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do commercial roofing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our primary focus is residential roofing, siding, and windows. For commercial inquiries, call us directly at (516) 355-0977 and we'll let you know if your project is within our scope.",
      },
    },
  ],
};

export default function GeneralFaqsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
