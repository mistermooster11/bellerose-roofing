import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas — Queens, NYC, Nassau & Suffolk County",
  description:
    "Bellerose Roofing & Siding serves all of Queens, NYC's 5 boroughs, Nassau County, and Suffolk County. Based in Floral Park. Free estimates. Licensed in NYC and Nassau County.",
  openGraph: {
    title: "Service Areas — Bellerose Roofing & Siding",
    description:
      "Queens, Brooklyn, Manhattan, Staten Island, Bronx, Nassau County, and Suffolk County. Family-owned roofing and siding contractor based in Floral Park, NY.",
    url: "https://belleroseroofingsiding.com/service-areas",
  },
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
