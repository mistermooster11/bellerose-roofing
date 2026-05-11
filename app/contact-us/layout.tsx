import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Free Roofing & Siding Estimates",
  description:
    "Request a free estimate from Bellerose Roofing & Siding. Serving Queens, NYC, Nassau County, and Suffolk County. Call (516) 355-0977 or send us a message — we respond fast.",
  openGraph: {
    title: "Contact Bellerose Roofing & Siding — Free Estimates",
    description:
      "Get a free roofing, siding, or window estimate in Queens, NYC, Nassau, or Suffolk County. Call (516) 355-0977 or fill out the form.",
    url: "https://belleroseroofingsiding.com/contact-us",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
