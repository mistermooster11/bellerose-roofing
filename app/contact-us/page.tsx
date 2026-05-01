"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Service Area Data ───────────────────────────────────────── */

const serviceAreas = [
  {
    region: "Brooklyn",
    description:
      "From brownstones in Park Slope to pre-war buildings in Williamsburg and multi-family homes in Bay Ridge, we know Brooklyn plumbing inside and out. Most Brooklyn jobs are available same-day.",
    neighborhoods:
      "Williamsburg • Greenpoint • Bushwick • Bed-Stuy • Crown Heights • Park Slope • Sunset Park • Bay Ridge • Bensonhurst • Dyker Heights • Gravesend • Sheepshead Bay • Coney Island • and more",
  },
  {
    region: "Queens",
    description:
      "Queens has one of the widest mixes of homes in NYC — single-family houses in Whitestone and Bayside, apartment buildings in Astoria and LIC, and everything in between. Our team handles all of it.",
    neighborhoods:
      "Astoria • LIC • Maspeth • Flushing • Whitestone • Bayside • Forest Hills • Rego Park • Jackson Heights • Elmhurst • Middle Village • and more",
  },
  {
    region: "Nassau County",
    description:
      "Nassau County homes often have longer main lines and mature trees that cause root intrusion and slow sewer drains. Our techs know exactly where Nassau lines tend to fail and how to clear them fast.",
    neighborhoods:
      "Valley Stream • Elmont • Franklin Square • West Hempstead • Hempstead • Garden City • Mineola • New Hyde Park • Floral Park • Rockville Centre • Oceanside • Baldwin • Freeport • Merrick • Bellmore • Wantagh • Seaford • Massapequa • Levittown • East Meadow • Uniondale • Lynbrook • Malverne • Hewlett • and more",
  },
];

/* ── Service Area Section ──────────────────────────────────────── */

function AreaSection({
  area,
  index,
}: {
  area: (typeof serviceAreas)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className={`content-block flex-module fadeInUpS wow${vis}`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="inner inner--slim-1172">
        <h3 className="h4 ia-margin-1">{area.region}</h3>
        <p className="p2 ia-dark" style={{ marginBottom: "0.75rem" }}>
          {area.description}
        </p>
        <p className="p3 ia-medium">{area.neighborhoods}</p>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function ContactPage() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const mapRef     = useRef<HTMLDivElement>(null);
  const formRef    = useRef<HTMLDivElement>(null);
  const areasRef   = useRef<HTMLDivElement>(null);

  const heroInView  = useInView(heroRef,  { once: true, margin: "0px 0px -60px 0px" });
  const mapInView   = useInView(mapRef,   { once: true, margin: "0px 0px -60px 0px" });
  const formInView  = useInView(formRef,  { once: true, margin: "0px 0px -60px 0px" });
  const areasInView = useInView(areasRef, { once: true, margin: "0px 0px -60px 0px" });

  const heroVis  = heroInView  ? " is-visible" : "";
  const mapVis   = mapInView   ? " is-visible" : "";
  const formVis  = formInView  ? " is-visible" : "";
  const areasVis = areasInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className={`hero-org flex-module fadeIn wow${heroVis}`}>
        <div className="hero-org__top ia-bg-dark">
          <div className="inner inner--slim-1172">
            <div className={`breadcrumbs ia-sky fadeInUpS wow${heroVis}`}>
              <a href="/">Home</a>
              <em>&gt;</em>
              <span className="post post-page current-item">Contact Us</span>
            </div>
            <h1
              className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Get in Touch
            </h1>
          </div>
        </div>

        <div ref={heroRef} className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">

            {/* Left */}
            <div className={`hero-org__left fadeInUpS wow${heroVis}`}>
              <div className="sub-heading">Reach Us</div>
              <div className="content-entry" style={{ animationDelay: "0.1s" }}>
                <p>
                  Call <strong>(718) 749-1830</strong> — most calls are answered
                  immediately. Same-day scheduling available 7 days a week. Or
                  fill out the form below and we&apos;ll get back to you within the
                  hour.
                </p>
              </div>
            </div>

            {/* Right: quick contact links */}
            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Contact Options
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:7187491830">
                    <i className="icon-link" />
                    <span>Call (718) 749-1830</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>View FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="/service-areas">
                    <i className="icon-link" />
                    <span>Full Service Area Map</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Contact Form ─────────────────────────────────────────── */}
      <div ref={formRef} className={`content-block-flex flex-module fadeIn wow${formVis}`}>
        <div className="inner inner--slim-1172">
          <div className="content-block-head wide">
            <h2
              id="getstarted"
              className={`h3 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Schedule Service or Ask a Question
            </h2>
            <p className={`p2 fadeInUpS wow${formVis}`} style={{ animationDelay: "0.15s" }}>
              Fill out the form below or call us directly at{" "}
              <strong>(718) 749-1830</strong>. We follow up fast — usually within
              the hour.
            </p>
          </div>

          <div className="content-block-in wide">
            <div className="content-block-text content-entry p2 full-width">
              {/*
                TODO: Replace this form with Pipe Monkeys' preferred form solution
                (HubSpot, Gravity Forms, JotForm, etc.). Until then this is a
                functional HTML stub — wire it to a backend or form service.
              */}
              <form
                action="#"
                method="POST"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  maxWidth: "680px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" className="p3 ia-medium">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1.4rem",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1.4rem",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" className="p3 ia-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1.4rem",
                    }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1.4rem",
                      background: "white",
                    }}
                  >
                    <option value="">Select a service…</option>
                    <option>Main Sewer Line</option>
                    <option>Kitchen Sink Drain</option>
                    <option>Tub & Shower Drain</option>
                    <option>Toilet</option>
                    <option>Hydro Jetting</option>
                    <option>Camera Inspection</option>
                    <option>Multi-Unit Building</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", gridColumn: "1 / -1" }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe the issue — what's happening and where in the building?"
                    style={{
                      padding: "0.75rem 1rem",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      fontSize: "1.4rem",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <button
                    type="submit"
                    className="btn btn--primary"
                    style={{ cursor: "pointer" }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Google Map ───────────────────────────────────────────── */}
      <div ref={mapRef} className={`flex-module fadeIn wow${mapVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 ia-margin-2 fadeInUpS wow${mapVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Our Service Area
          </h2>
          <div className={`fadeInUpS wow${mapVis}`} style={{ animationDelay: "0.2s" }}>
            {/* Covers Brooklyn, Queens, and Nassau County */}
            <iframe
              title="Pipe Monkeys Service Area — Brooklyn, Queens, Nassau County"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96708.34194958338!2d-73.87153600000001!3d40.65751950000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0, display: "block", borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ── Service Areas (stacked) ───────────────────────────────── */}
      <div ref={areasRef} className={`flex-module fadeIn wow${areasVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Service Areas
          </h2>
          <div
            className={`content-entry fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.2s", marginBottom: "3rem" }}
          >
            <p>
              We cover all of Brooklyn, Queens, and Nassau County. If you&apos;re
              not sure whether we serve your neighborhood, call us — we almost
              certainly do.
            </p>
          </div>
        </div>

        {serviceAreas.map((area, i) => (
          <AreaSection key={area.region} area={area} index={i} />
        ))}
      </div>

    </main>
  );
}
