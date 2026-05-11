import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services Overview",
  description:
    "Explore all roofing, siding, and window services offered by Bellerose Roofing & Siding across Queens, NYC, Nassau County, and Suffolk County. Free estimates — (516) 355-0977.",
  openGraph: {
    title: "Services Overview — Bellerose Roofing & Siding",
    description:
      "Full overview of roofing repairs, full installs, siding, and windows across NYC and Long Island. 35+ years. Free estimates.",
    url: "https://belleroseroofingsiding.com/programs-crafts/programs",
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
