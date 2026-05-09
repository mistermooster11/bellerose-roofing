"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ──────────────────────────────────────── */

const areas = [
  {
    slug: "queens",
    region: "Queens",
    headline: "Roofing & Siding Specialists in Queens",
    description:
      "Queens is home base for Bellerose Roofing & Siding. We've been working on Queens rooftops, facades, and windows for over 35 years — from attached row houses in Woodside and Sunnyside to larger detached homes in Bayside and Whitestone. We know exactly how New York City's weather affects Queens homes and what each roof type needs to last.",
    callouts: [
      "35+ years serving Queens homeowners",
      "Row houses, detached homes & residential buildings",
      "Free estimates — same week, no pressure",
    ],
    neighborhoods:
      "Floral Park • Jamaica • Bayside • Flushing • Forest Hills • Rego Park • Astoria • Woodside • Jackson Heights • Middle Village • Elmhurst • Maspeth • Howard Beach • Ozone Park • Richmond Hill • Springfield Gardens & More",
  },
  {
    slug: "nyc-5-boroughs",
    region: "NYC — All 5 Boroughs",
    headline: "Roofing & Siding Across All 5 NYC Boroughs",
    description:
      "Bellerose Roofing & Siding serves all five New York City boroughs. From Brooklyn brownstones to Staten Island colonials to Bronx multi-family buildings, we handle roofing repairs, full tear-offs, siding, and window installations across the full NYC metro area. Fully licensed in New York City — NYC Lic# 1259922.",
    callouts: [
      "NYC licensed — Lic# 1259922",
      "Residential and commercial roofing & siding",
      "Free estimates across all 5 boroughs",
    ],
    neighborhoods:
      "Brooklyn (Park Slope, Bay Ridge, Flatbush, Canarsie, and more) • Manhattan • The Bronx • Staten Island • and all of Queens",
  },
  {
    slug: "nassau-county",
    region: "Nassau County",
    headline: "Roofing & Siding Specialists in Nassau County",
    description:
      "Nassau County is one of our most active service areas. We're based in Floral Park and work across Nassau daily — from valley stream to Massapequa, Garden City to Hewlett. Nassau County homes deal with mature tree canopies, salt air near the South Shore, and the same freeze-thaw cycles that stress roofing systems throughout the Northeast. We know what lasts here and what doesn't. Nassau License #H18B8620000.",
    callouts: [
      "Based in Floral Park — Nassau County locals",
      "Nassau License #H18B8620000",
      "All roof types: asphalt, tile, rubber, and more",
    ],
    neighborhoods:
      "Valley Stream • Elmont • Franklin Square • West Hempstead • Hempstead • Garden City • Mineola • New Hyde Park • Floral Park • Rockville Centre • Oceanside • Baldwin • Freeport • Merrick • Bellmore • Wantagh • Seaford • Massapequa • Levittown • East Meadow • Uniondale • Lynbrook • Malverne • Hewlett & More",
  },
  {
    slug: "suffolk-county",
    region: "Suffolk County",
    headline: "Roofing & Siding Specialists in Suffolk County",
    description:
      "Bellerose Roofing & Siding also serves Suffolk County homeowners. If you're located in Western Suffolk and looking for a licensed, experienced roofing and siding contractor, call us. We'll confirm coverage for your specific location and can often be out for a free estimate within the same week.",
    callouts: [
      "Serving Western Suffolk County",
      "Free estimate — call to confirm your area",
      "Same 35-year track record, same quality work",
    ],
    neighborhoods:
      "Call (516) 355-0977 to confirm coverage in your Suffolk County location",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function AreaSection({ area, reversed }: { area: typeof areas[number]; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      id={area.slug}
      className={`content-block-flex flex-module fadeIn wow${vis}`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
    >
      <div className="inner inner--slim-1172">
        <div className="content-block-head wide">
          <h2 className={`h3 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
            {area.headline}
          </h2>
        </div>
        <div className="content-block-in wide">
          <div className="content-block-text content-entry p2 full-width">
            <p>{area.description}</p>
            <ul>
              {area.callouts.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p>
              <strong>Neighborhoods served:</strong> {area.neighborhoods}
            </p>
            <p>
              Not sure if we cover your street?{" "}
              <a href="tel:5163550977" className="ia-link">Call (516) 355-0977</a>{" "}
              — we almost certainly do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ServiceAreasPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div ref={heroRef} className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Service Areas</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              We Come to Your Roof
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Coverage Area</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Bellerose Roofing &amp; Siding serves Queens, all 5 NYC boroughs, Nassau County, and
                  Suffolk County. Family-owned and operated for over 35 years — we know these
                  neighborhoods and we know what it takes to do quality work in New York&apos;s climate.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Jump to Area
              </div>
              <ul className="quick-links" role="list">
                {areas.map((area, i) => (
                  <li key={area.slug} className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                    <a className="ia-link ia-link--arrow" href={`#${area.slug}`}>
                      <i className="icon-link" />
                      <span>{area.region}</span>
                    </a>
                  </li>
                ))}
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.4s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:5163550977">
                    <i className="icon-link" />
                    <span>Call (516) 355-0977</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Area Sections ── */}
      {areas.map((area, i) => (
        <AreaSection key={area.slug} area={area} reversed={i % 2 !== 0} />
      ))}

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Not Sure If We Cover You?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Call for a Free Estimate — We Cover More Than You Think
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Our coverage spans Queens, all 5 boroughs, Nassau, and Suffolk. Call{" "}
                <strong>(516) 355-0977</strong> and we&apos;ll confirm your area and get you a free
                estimate scheduled fast.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:5163550977">
                  Call (516) 355-0977
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
