"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ──────────────────────────────────────── */

const areas = [
  {
    slug: "brooklyn",
    region: "Brooklyn",
    headline: "Drain & Sewer Specialists in Brooklyn",
    description:
      "Brooklyn has some of the oldest plumbing infrastructure in New York — pre-war pipe systems, clay drain lines in brownstones, and cast iron stacks in walk-ups that have been running for 80+ years. Our techs know exactly what to expect when they pull up to a building in Park Slope vs. Bay Ridge, and they arrive with the right equipment the first time.",
    callouts: [
      "Brownstone & pre-war walk-up specialists",
      "Stack drain issues in multi-family buildings",
      "Same-day service, all neighborhoods",
    ],
    neighborhoods:
      "Williamsburg • Greenpoint • Bushwick • Bed-Stuy • Crown Heights • Park Slope • Sunset Park • Bay Ridge • Bensonhurst • Dyker Heights • Gravesend • Sheepshead Bay • Coney Island • Flatbush • Canarsie • East New York & More",
  },
  {
    slug: "queens",
    region: "Queens",
    headline: "Drain & Sewer Specialists in Queens",
    description:
      "Queens covers one of the widest mixes of home types in the entire city — from single-family houses in Whitestone and Bayside to dense apartment buildings in Astoria and Flushing. Our team handles everything from slow kitchen drains in a LIC condo to main line backups in a multi-unit Jackson Heights walk-up.",
    callouts: [
      "Single-family homes to large apartment buildings",
      "Grease line clearing for restaurants & commercial kitchens",
      "Emergency same-day response across all of Queens",
    ],
    neighborhoods:
      "Astoria • LIC • Maspeth • Flushing • Whitestone • Bayside • Forest Hills • Rego Park • Jackson Heights • Elmhurst • Middle Village • Ridgewood • Woodside • Sunnyside • Jamaica • Howard Beach & More",
  },
  {
    slug: "nassau-county",
    region: "Nassau County",
    headline: "Drain & Sewer Specialists in Nassau County",
    description:
      "Nassau County homes sit on longer sewer runs than most NYC properties, and mature tree root systems along those lines are one of the leading causes of main line backups. Our technicians understand how Nassau systems are laid out, where clogs typically form, and how to clear them without damaging the pipe.",
    callouts: [
      "Root intrusion specialists for Nassau main lines",
      "Hydro jetting for long sewer runs",
      "Local techs — not dispatched from far away",
    ],
    neighborhoods:
      "Valley Stream • Elmont • Franklin Square • West Hempstead • Hempstead • Garden City • Mineola • New Hyde Park • Floral Park • Rockville Centre • Oceanside • Baldwin • Freeport • Merrick • Bellmore • Wantagh • Seaford • Massapequa • Levittown • East Meadow • Uniondale • Lynbrook • Malverne • Hewlett & More",
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
              <a href="tel:7187491830" className="ia-link">Call (718) 749-1830</a>{" "}
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
              We Come to You
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Coverage Area</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Pipe Monkeys serves all of Brooklyn, Queens, and Nassau County. We don&apos;t
                  subcontract — our own techs cover every neighborhood, every day, seven days a week.
                  Same-day scheduling is available across our entire service area.
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
                  <a className="ia-link ia-link--arrow" href="tel:7187491830">
                    <i className="icon-link" />
                    <span>Call (718) 749-1830</span>
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
            Just Call — We Almost Certainly Do
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Our dispatch is fast and our coverage is wide. Call <strong>(718) 749-1830</strong> and
                we&apos;ll confirm in 30 seconds and get you on the schedule the same day.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:7187491830">
                  Call (718) 749-1830
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
