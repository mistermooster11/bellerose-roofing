import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery — Roofing, Siding & Windows",
  description:
    "See Bellerose Roofing & Siding's work across Queens, Nassau County, and the NYC metro area. Before-and-after photos of roof replacements, siding installs, and window projects.",
  openGraph: {
    title: "Project Gallery — Bellerose Roofing & Siding",
    description:
      "Before-and-after photos of roofing, siding, and window projects across Queens, NYC, Nassau County, and Suffolk County.",
    url: "https://belleroseroofingsiding.com/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
