import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://belleroseroofingsiding.com"),
  title: {
    default: "Bellerose Roofing & Siding — Queens, Nassau & Suffolk County",
    template: "%s | Bellerose Roofing & Siding",
  },
  description:
    "Family-owned roofing, siding, and window contractor serving NYC's 5 boroughs, Nassau County, and Suffolk County for 35+ years. Licensed & insured. Free estimates. Call (516) 355-0977.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Bellerose Roofing & Siding",
    title: "Bellerose Roofing & Siding — Queens, Nassau & Suffolk County",
    description:
      "Family-owned roofing, siding, and window contractor serving NYC's 5 boroughs, Nassau County, and Suffolk County for 35+ years. Licensed & insured. Free estimates.",
    url: "https://belleroseroofingsiding.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bellerose Roofing & Siding — Queens, Nassau & Suffolk County",
    description:
      "Family-owned roofing, siding, and window contractor serving NYC's 5 boroughs, Nassau & Suffolk County for 35+ years. Free estimates. Call (516) 355-0977.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Bellerose Roofing & Siding",
  url: "https://belleroseroofingsiding.com",
  telephone: "+15163550977",
  email: "",
  description:
    "Family-owned roofing, siding, and window contractor serving Queens, NYC's 5 boroughs, Nassau County, and Suffolk County for 35+ years.",
  foundingDate: "1990",
  address: {
    "@type": "PostalAddress",
    streetAddress: "92 Chestnut Ave",
    addressLocality: "Floral Park",
    addressRegion: "NY",
    postalCode: "11001",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7223,
    longitude: -73.7023,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "00:00",
      closes: "00:00",
      description: "By appointment only",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Queens" },
    { "@type": "City", name: "Brooklyn" },
    { "@type": "City", name: "Manhattan" },
    { "@type": "City", name: "Staten Island" },
    { "@type": "City", name: "Bronx" },
    { "@type": "AdministrativeArea", name: "Nassau County" },
    { "@type": "AdministrativeArea", name: "Suffolk County" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing & Exterior Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Siding Repairs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing Tear-Offs & New Installs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Windows & Skylights" } },
    ],
  },
  priceRange: "$$",
  paymentAccepted: "Cash, Check, Credit Card",
  currenciesAccepted: "USD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
