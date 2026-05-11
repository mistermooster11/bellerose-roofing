import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Bellerose Roofing & Siding. Learn how we collect and use your information when you contact us for roofing, siding, and window services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
