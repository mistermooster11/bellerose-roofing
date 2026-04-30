"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Areas Data ─────────────────────────────────────── */

const serviceAreas = [
  {
    region: "Brooklyn",
    description:
      "Brooklyn homes deal with some of the oldest plumbing and drain systems in New York. From brownstones in Park Slope to pre-war buildings in Williamsburg and busy multi-family homes in Bay Ridge, we know the quirks of Brooklyn piping and arrive prepared every time.",
    neighborhoods:
      "Williamsburg • Greenpoint • Bushwick • Bed-Stuy • Crown Heights • Park Slope • Sunset Park • Bay Ridge • Bensonhurst • Dyker Heights • Gravesend • Sheepshead Bay • Coney Island & More",
  },
  {
    region: "Queens",
    description:
      "Queens has one of the widest mixes of homes in NYC — from single-family houses in Whitestone and Bayside to apartment buildings in Astoria, LIC, and Flushing. Our team is trained for all of it.",
    neighborhoods:
      "Astoria • LIC • Maspeth • Flushing • Whitestone • Bayside • Forest Hills • Rego Park • Jackson Heights • Elmhurst • Middle Village & More",
  },
  {
    region: "Nassau County",
    description:
      "Nassau County has a unique mix of older homes, long main lines, and mature trees that can cause everything from slow drains to full sewer backups. Our local techs understand how Nassau lines are built and where clogs usually form.",
    neighborhoods:
      "Valley Stream • Elmont • Franklin Square • West Hempstead • Hempstead • Garden City • Mineola • New Hyde Park • Floral Park • Rockville Centre • Oceanside • Baldwin • Freeport • Merrick • Bellmore • Wantagh • Seaford • Massapequa • Levittown • East Meadow • Uniondale • Lynbrook • Malverne • Hewlett & More",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function ServiceAreaCard({ area, delay }: { area: typeof serviceAreas[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`user-grid-item user-grid-item--three fadeInUpS wow${vis}`}
      style={{ animationDelay: delay }}
    >
      <div className="user-grid-item-info">
        <h3 className="h6 ia-margin-1">{area.region}</h3>
        <div className="p3 ia-regular ia-dark" style={{ marginBottom: "0.75rem" }}>
          {area.description}
        </div>
        <div className="p3 ia-medium">{area.neighborhoods}</div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const areasRef = useRef<HTMLDivElement>(null);
  const areasInView = useInView(areasRef, { once: true, margin: "0px 0px -60px 0px" });
  const formRef = useRef<HTMLDivElement>(null);
  const formInView = useInView(formRef, { once: true, margin: "0px 0px -60px 0px" });

  const vis = heroInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <div className={`hero-org flex-module fadeIn wow${vis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${vis}`}>
              <span><a href="/">Home</a></span>
              <em>&gt;</em>
              <span className="post post-page current-item">Contact Us</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
              Get in Touch
            </h1>
          </div>
        </div>

        <div ref={heroRef} className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">

            {/* Left: overview */}
            <div className={`hero-org__left wow${vis}`}>
              <div className={`sub-heading fadeInUpS wow${vis}`}>Reach Us</div>
              <div className={`content-entry fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Call us at <strong>(718) 749-1830</strong> or fill out the form
                  below. Most calls are answered immediately — same-day scheduling
                  available seven days a week.
                </p>
              </div>
            </div>

            {/* Right: quick links */}
            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:7187491830">
                    <i className="icon-link" />
                    <span>Call (718) 749-1830</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>View FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service Areas ── */}
      <div
        ref={areasRef}
        className={`user-grid-small fadeIn wow${areasInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${areasInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Service Areas
          </h2>
          <div
            className={`content-entry fadeInUpS wow${areasInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              We serve all of Brooklyn, Queens, and Nassau County. If you&apos;re
              not sure whether we cover your neighborhood, just call — we almost
              certainly do.
            </p>
          </div>
          <div className="user-grid-list user-grid-list--small">
            {serviceAreas.map((area, i) => (
              <ServiceAreaCard key={area.region} area={area} delay={`${i * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact Form ── */}
      <div ref={formRef} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">
          <div className="content-block-head wide">
            <h2
              id="getstarted"
              className={`h3 fadeInUpS wow${formInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              Schedule Service or Ask a Question
            </h2>
          </div>
          <div className="content-block-in wide">
            <div className="content-block-text content-entry p2 full-width">
              <p>
                Call us at <strong>(718) 749-1830</strong> or complete the form
                below and we&apos;ll follow up fast — usually within the hour.
              </p>
              {/* TODO: Replace with Pipe Monkeys contact form embed (HubSpot, Gravity Forms, etc.) */}
              <iframe
                src="https://share.hsforms.com/2EvjaHNBmQBaJ9-YEhkKnagt3bsz"
                width="100%"
                height="800"
                scrolling="yes"
                className="iframe-class"
                style={{ border: "none", display: "block" }}
                title="Contact Pipe Monkeys"
              />
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
