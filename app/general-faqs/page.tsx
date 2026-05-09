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
    title: "Do you offer free estimates?",
    content: (
      <p>
        Yes — always. We inspect the roof, siding, or windows, document all
        damage with photos, and provide a written estimate before any work
        begins. There&apos;s no charge for the estimate and no pressure to
        proceed. Call us at{" "}
        <a href="tel:5163550977" className="ia-link">(516) 355-0977</a>{" "}
        to schedule.
      </p>
    ),
  },
  {
    title: "How long has Bellerose Roofing & Siding been in business?",
    content: (
      <p>
        We&apos;re a family-owned and operated company with over 35 years of
        experience in the roofing, siding, and window business. That experience
        means we&apos;ve seen every type of roof and every type of problem in
        the New York area — and we know how to price and fix them accurately.
      </p>
    ),
  },
  {
    title: "What types of roofs do you repair and install?",
    content: (
      <p>
        We work on all major residential and commercial roofing types, including
        asphalt shingle, ceramic tile, synthetic slate, and rubber (EPDM).
        Whether you need a few shingles replaced or a full tear-off and new
        install, we handle it. We&apos;ll assess the roof and recommend the
        most cost-effective approach for your situation.
      </p>
    ),
  },
  {
    title: "Do I need a full roof replacement or just a repair?",
    content: (
      <p>
        We&apos;ll give you an honest answer during the free inspection —
        including photos of every problem area. If the roof is repairable
        and repair is the smarter financial choice, that&apos;s what we&apos;ll
        recommend. If replacement is more cost-effective, we&apos;ll explain
        why and walk you through your material options. We have no incentive
        to oversell you.
      </p>
    ),
  },
  {
    title: "Are you licensed and insured?",
    content: (
      <p>
        Yes — fully licensed and insured in New York City, Nassau County, and
        Suffolk County. NYC License #1259922 &bull; Nassau License #H18B8620000
        &bull; Floral Park License #119. We&apos;re happy to provide
        documentation on request.
      </p>
    ),
  },
  {
    title: "What areas do you serve?",
    content: (
      <>
        <p>
          We serve the full New York City 5 boroughs (Queens, Brooklyn,
          Manhattan, the Bronx, and Staten Island), Nassau County, and Suffolk
          County. Some of the neighborhoods and towns we frequently work in:
        </p>
        <p>
          <strong>Queens:</strong> Floral Park, Jamaica, Bayside, Flushing,
          Forest Hills, Rego Park, Astoria, Woodside, Jackson Heights, Middle
          Village, and more.
        </p>
        <p>
          <strong>Nassau County:</strong> Valley Stream, Elmont, New Hyde Park,
          Garden City, Hempstead, Mineola, Rockville Centre, Lynbrook, Malverne,
          Hewlett, and more.
        </p>
        <p>
          <strong>Suffolk County:</strong> Call us to confirm coverage in your
          area — we cover a wide range of Suffolk towns.
        </p>
      </>
    ),
  },
  {
    title: "What happens if an issue comes up mid-project?",
    content: (
      <p>
        We discuss it with you and explain your options before proceeding. We
        never make decisions for you or add charges to a job without your
        knowledge and approval. You stay involved and informed every step of the
        way — that&apos;s been our approach for 35 years.
      </p>
    ),
  },
  {
    title: "Do you do commercial roofing?",
    content: (
      <p>
        Yes. We handle both residential and commercial roofing and siding work
        across the 5 boroughs, Nassau, and Suffolk. Call{" "}
        <a href="tel:5163550977" className="ia-link">(516) 355-0977</a>{" "}
        to discuss your project and we&apos;ll let you know if we&apos;re the
        right fit.
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
                  Call us at <strong>(516) 355-0977</strong> — our team picks up fast
                  and can answer any question, schedule a same-day visit, or give you
                  an honest assessment over the phone.
                </p>
              </div>
              <div className="front-donation__btn-wrap">
                <div className="front-donation__btn">
                  <SecondaryButton
                    label="Call (516) 355-0977"
                    href="tel:5163550977"
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
