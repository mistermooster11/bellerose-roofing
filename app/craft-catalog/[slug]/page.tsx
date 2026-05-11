import { notFound } from "next/navigation";
import CraftHero       from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar  from "@/components/custom/channel/ChannelSidebar";
import CraftOverview   from "@/components/custom/craft-catalog/CraftOverview";
import RelatedCrafts   from "@/components/custom/craft-catalog/RelatedCrafts";
import { servicePages } from "@/data/craft-catalog/service-pages";

// TODO: Replace PLACEHOLDER_BG with a real service photo per slug
const PLACEHOLDER_BG = "/images/IMG_9688-1024x682.jpg";

/* Pre-render all known service slugs at build time */
export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: `${data.title} — Bellerose Roofing & Siding`,
    description: `Professional ${data.title.toLowerCase()} across Queens, NYC, Nassau & Suffolk County. Free estimates, honest pricing, 35+ years of experience.`,
    openGraph: {
      title: `${data.title} — Bellerose Roofing & Siding`,
      description: `Professional ${data.title.toLowerCase()} across Queens, NYC, Nassau & Suffolk County. Free estimates, honest pricing, 35+ years of experience.`,
      url: `https://belleroseroofingsiding.com/craft-catalog/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://belleroseroofingsiding.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://belleroseroofingsiding.com/craft-catalog" },
      { "@type": "ListItem", position: 3, name: data.title, item: `https://belleroseroofingsiding.com/craft-catalog/${slug}` },
    ],
  };

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CraftHero
        title={data.title}
        bgImage={PLACEHOLDER_BG}
        breadcrumbs={[
          { label: "Services", href: "/craft-catalog" },
          { label: data.title },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />

          <div className="channel-container">

            {/* ── Overview ─────────────────────────────────────────────── */}
            <div id="overview">
              <CraftOverview
                overviewContent={data.overviewContent}
                quickLinks={data.overviewQuickLinks}
              />
            </div>

            {/* ── Middle sections ──────────────────────────────────────── */}
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="section-page">
                <div className="content-block">
                  <div className="inner inner--slim-1172 cleared">
                    <h2 className="h3 fadeInUpS wow is-visible">
                      {section.heading}
                    </h2>
                    <div className="cleared">
                      <div className="content-entry p2 fadeInUpS wow is-visible">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ── CTA banner ───────────────────────────────────────────── */}
            <div className="banner-craft ia-bg-sky fadeInUp wow is-visible">
              <div className="inner">
                <div className="content-entry p3">
                  <p>
                    <strong>Ready to get a free estimate?</strong>{" "}
                    Call{" "}
                    <a href="tel:5163550977">(516) 355-0977</a>{" "}
                    or{" "}
                    <a href="/contact-us">send us a message online</a>.
                    Written estimate before any work begins — no surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Related Services ─────────────────────────────────────── */}
            <div id="related_services">
            <RelatedCrafts
              description={
                <p>
                  Bellerose Roofing &amp; Siding handles all types of exterior work
                  across Queens, the 5 boroughs, Nassau, and Suffolk County. Explore
                  our other services below.
                </p>
              }
              crafts={data.relatedServices}
            />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
