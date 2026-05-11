import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing & Siding Tips — Blog",
  description:
    "Homeowner guides, roofing advice, and siding tips from Bellerose Roofing & Siding. 35+ years of expertise serving Queens, Nassau County, and NYC. Free estimates — (516) 355-0977.",
  openGraph: {
    title: "Roofing & Siding Blog — Bellerose Roofing & Siding",
    description:
      "Practical homeowner guides on roofing, siding, and windows from a 35-year Queens and Long Island roofing contractor.",
    url: "https://belleroseroofingsiding.com/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
