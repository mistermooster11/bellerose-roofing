"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Gallery Data ────────────────────────────────────────────── */

const galleryItems = [
  {
    id: "gallery-1",
    label: "Main Sewer Line — Crown Heights, Brooklyn",
    beforeAlt: "Blocked main sewer line before clearing",
    afterAlt:  "Clear main sewer line after hydro jetting",
    // [TODO: Replace placeholder URLs with real before/after photos]
    before: "https://pipemonkeys.com/",
    after:  "https://pipemonkeys.com/",
    category: "Main Sewer Line",
  },
  {
    id: "gallery-2",
    label: "Kitchen Drain — Astoria, Queens",
    beforeAlt: "Grease-clogged kitchen drain before clearing",
    afterAlt:  "Kitchen drain fully cleared and flowing",
    before: "https://pipemonkeys.com/",
    after:  "https://pipemonkeys.com/",
    category: "Kitchen Sink",
  },
  {
    id: "gallery-3",
    label: "Hydro Jetting — Nassau County Home",
    beforeAlt: "Pipe interior with grease buildup",
    afterAlt:  "Clean pipe interior after hydro jetting",
    before: "https://pipemonkeys.com/",
    after:  "https://pipemonkeys.com/",
    category: "Hydro Jetting",
  },
  {
    id: "gallery-4",
    label: "Tub Drain — Bay Ridge, Brooklyn",
    beforeAlt: "Hair-clogged tub drain before clearing",
    afterAlt:  "Tub drain cleared with no damage to tile",
    before: "https://pipemonkeys.com/",
    after:  "https://pipemonkeys.com/",
    category: "Tub & Shower",
  },
  {
    id: "gallery-5",
    label: "Camera Inspection — Multi-Unit, Flushing",
    beforeAlt: "Camera view showing root intrusion in sewer line",
    afterAlt:  "Cleared line confirmed via camera after service",
    before: "https://pipemonkeys.com/",
    after:  "https://pipemonkeys.com/",
    category: "Camera Inspection",
  },
  {
    id: "gallery-6",
    label: "Toilet Clog — Levittown, Nassau",
    beforeAlt: "Overflowing toilet before service",
    afterAlt:  "Toilet fully cleared and flushing cleanly",
    before: "https://pipemonkeys.com/",
    after:  "https://pipemonkeys.com/",
    category: "Toilet",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function GalleryCard({ item, delay }: { item: typeof galleryItems[number]; delay: string }) {
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
        <span
          className="p3 ia-medium"
          style={{
            display: "inline-block",
            marginBottom: "1rem",
            padding: "0.3rem 1rem",
            background: "var(--ia-sky, #a1c5d3)",
            borderRadius: "4px",
            fontSize: "1.2rem",
          }}
        >
          {item.category}
        </span>

        {/* Before / After image pair */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.2rem" }}>
          <div>
            <div
              style={{
                background: `url(${item.before}) no-repeat 50% 50% / cover`,
                backgroundColor: "#1a2a3a",
                height: "16rem",
                borderRadius: "4px",
              }}
              role="img"
              aria-label={item.beforeAlt}
            />
            <p className="p3 ia-dark" style={{ marginTop: "0.5rem", textAlign: "center", fontWeight: 600 }}>Before</p>
            {/* [TODO: swap image — before photo] */}
          </div>
          <div>
            <div
              style={{
                background: `url(${item.after}) no-repeat 50% 50% / cover`,
                backgroundColor: "#1a2a3a",
                height: "16rem",
                borderRadius: "4px",
              }}
              role="img"
              aria-label={item.afterAlt}
            />
            <p className="p3 ia-dark" style={{ marginTop: "0.5rem", textAlign: "center", fontWeight: 600 }}>After</p>
            {/* [TODO: swap image — after photo] */}
          </div>
        </div>

        <h3 className="h6 ia-margin-1">{item.label}</h3>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "0px 0px -60px 0px" });
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
              <span className="post post-page current-item">Gallery</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              Before &amp; After Gallery
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>Real Results</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Every job below was done by a Pipe Monkeys tech in Brooklyn, Queens, or Nassau
                  County. These are real lines, real homes, and real results — no stock photos.
                  {/* [TODO: Replace placeholder images with actual job photos from client] */}
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:7187491830">
                    <i className="icon-link" />
                    <span>Call (718) 749-1830</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="/contact-us">
                    <i className="icon-link" />
                    <span>Schedule Service</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Gallery Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Recent Jobs
          </h2>
          <div
            className={`content-entry fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <p>
              Scroll through clogs we&apos;ve cleared across the area. From grease-packed kitchen
              lines to root-choked main sewers — we document our work and stand behind every job.
            </p>
          </div>
          <div className="user-grid-list user-grid-list--small">
            {galleryItems.map((item, i) => (
              <GalleryCard key={item.id} item={item} delay={`${(i % 3) * 0.1}s`} />
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        ref={ctaRef}
        className={`front-donation ia-bg-sky flex-module wow fadeInUpS${ctaInView ? " is-visible" : ""}`}
      >
        <div className="inner inner--slim-1172">
          <div className={`sub-heading wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.1s" }}>
            Ready to Clear Your Drain?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Same-Day Service Available
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(718) 749-1830</strong> — we&apos;ll give you an honest price
                before we start, and we won&apos;t leave until the job is done right.
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
