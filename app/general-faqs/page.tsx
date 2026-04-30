"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

interface FaqItem {
  title: string;
  content: React.ReactNode;
  link?: { label: string; href: string };
}

const faqItems: FaqItem[] = [
  {
    title: "How quickly can you get here?",
    content: (
      <p>
        Most calls are scheduled the same day, and we offer near-instant
        response for urgent clogs. Timing depends on your exact neighborhood,
        but we move fast. Call us at{" "}
        <a href="tel:7187491830" className="ia-link">(718) 749-1830</a>{" "}
        and we&apos;ll give you an accurate ETA on the spot.
      </p>
    ),
  },
  {
    title: "Do you give upfront pricing?",
    content: (
      <p>
        Always. We diagnose the issue, explain the solution, and give you the
        price before any work starts. No surprises, no upsell games. What we
        quote is what you pay — period.
      </p>
    ),
  },
  {
    title: "What tools do you use to clear drains?",
    content: (
      <p>
        We carry professional cutters, snakes, augers, and hydro-jetting
        equipment on every truck. Your tech will choose the safest and most
        effective method for your specific line and problem — and explain why
        before starting.
      </p>
    ),
  },
  {
    title: "When should I consider hydro jetting instead of snaking?",
    content: (
      <p>
        Snaking clears a path through the clog. Jetting actually scrubs grease,
        scale, and buildup off the pipe walls — giving you a cleaner line and
        much longer-lasting results. If you get repeat clogs in the same drain,
        jetting is usually the right call. We&apos;ll tell you honestly which
        one makes sense for your situation.
      </p>
    ),
  },
  {
    title: "Do you service apartments and multi-unit buildings?",
    content: (
      <p>
        All the time. We work with brownstones, pre-war buildings, walk-ups,
        condos, co-ops, and multi-family homes across Brooklyn, Queens, and
        Nassau County every day. We coordinate with building managers and work
        to minimize disruption to other tenants.
      </p>
    ),
  },
  {
    title: "What areas do you serve?",
    content: (
      <>
        <p>We serve all of Brooklyn, Queens, and Nassau County including:</p>
        <p>
          <strong>Brooklyn:</strong> Williamsburg, Greenpoint, Bushwick,
          Bed-Stuy, Crown Heights, Park Slope, Sunset Park, Bay Ridge,
          Bensonhurst, Dyker Heights, Gravesend, Sheepshead Bay, Coney Island
          and more.
        </p>
        <p>
          <strong>Queens:</strong> Astoria, LIC, Maspeth, Flushing, Whitestone,
          Bayside, Forest Hills, Rego Park, Jackson Heights, Elmhurst, Middle
          Village and more.
        </p>
        <p>
          <strong>Nassau County:</strong> Valley Stream, Elmont, Franklin
          Square, West Hempstead, Hempstead, Garden City, Mineola, New Hyde
          Park, Rockville Centre, Oceanside, Freeport, Merrick, Bellmore,
          Levittown, East Meadow and more.
        </p>
      </>
    ),
  },
  {
    title: "Do you clean up after the job?",
    content: (
      <p>
        Yes — always. Every tech wears shoe covers, lays down drop cloths, and
        cleans the workspace before leaving. We test the flow, show you the
        results, and make sure your home is cleaner than we found it. That
        &apos;s not a bonus — it&apos;s standard.
      </p>
    ),
  },
];

export default function GeneralFaqsPage() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const heroRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const donationRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { once: true, margin: "0px 0px -60px 0px" });
  const accordionInView = useInView(accordionRef, { once: true, margin: "0px 0px -60px 0px" });
  const donationInView = useInView(donationRef, { once: true, margin: "0px 0px -60px 0px" });

  const toggle = (idx: number) =>
    setOpenIndex((prev) => (prev === idx ? -1 : idx));

  return (
    <main>
      <div id="content">

        {/* ── Hero ── */}
        <div
          ref={heroRef}
          className={`hero-org flex-module wow fadeIn${heroInView ? " is-visible" : ""}`}
        >
          <div className="hero-org__top ia-bg-dark">
            <div className="inner inner--slim-1172">
              <div className={`breadcrumbs ia-sky wow fadeInUpS${heroInView ? " is-visible" : ""}`}>
                <span><a href="/" className="home ia-link">Home</a></span>{" "}
                <em>&gt;</em>{" "}
                <span className="post post-page current-item">FAQs</span>
              </div>
              <h1
                className={`ia-white ia-margin-0 wow fadeInUpS${heroInView ? " is-visible" : ""}`}
                style={{ animationDelay: "0.1s" }}
              >
                Frequently Asked Questions
              </h1>
            </div>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="accordion-module flex-module">
          <div className="inner inner--slim-1172">
            <div
              ref={accordionRef}
              className={`accordion-wrap-flex wow fadeInUpS${accordionInView ? " is-visible" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              {faqItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div className="accordion-item-flex" key={idx}>
                    <a
                      className={`accordion-title-flex h4${isOpen ? " current" : ""}`}
                      href="#"
                      onClick={(e) => { e.preventDefault(); toggle(idx); }}
                      aria-expanded={isOpen}
                    >
                      {item.title}
                      <i className="icon-arr-down" aria-hidden="true" />
                    </a>
                    <div className={`accordion-info-flex${isOpen ? " open" : ""}`}>
                      <div className="content-entry">{item.content}</div>
                      {item.link && (
                        <a href={item.link.href} className="ia-link ia-link--arrow">
                          <i className="icon-arrow-right" aria-hidden="true" />
                          <span>{item.link.label}</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          ref={donationRef}
          className={`front-donation ia-bg-sky flex-module wow fadeInUpS${donationInView ? " is-visible" : ""}`}
        >
          <div className="inner inner--slim-1172">
            <div className={`sub-heading wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              Still have questions?
            </div>
            <h2 className={`h2 wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              We&apos;re Here to Help
            </h2>
            <div className={`front-donation__in wow fadeInUpS${donationInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
              <div className="content-entry">
                <p>
                  Call us at <strong>(718) 749-1830</strong> — our team picks up fast
                  and can answer any question, schedule a same-day visit, or give you
                  an honest assessment over the phone.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call (718) 749-1830"
                    href="tel:7187491830"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
