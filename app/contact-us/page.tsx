"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Styled submit button ── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -60px 0px" });
  const vis = sectionInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <CraftHero
        title="Contact Us"
        bgImage="/images/IMG_9688-1024x682.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form + Map ── */}
      <div ref={sectionRef} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Schedule a Free Estimate or Ask a Question
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "2.5rem" }}
          >
            Fill out the form below or call us directly at{" "}
            <strong>(516) 355-0977</strong>. We follow up fast.
            Mon–Fri: 8am–6pm &bull; Sat &amp; Sun: By appointment.
          </p>

          {/* Two-column: form left, map right. Stacks on mobile. */}
          <div className="contact-layout-grid">

            {/* ── Form ── */}
            <div className={`contact-form-col fadeInUpS wow${vis}`} style={{ animationDelay: "0.2s" }}>
              {/* TODO: Replace with real form backend (Gravity Forms, JotForm, HubSpot, etc.) */}
              <form
                action="#"
                method="POST"
                className="contact-form-inner"
              >
                <div className="form-row-2col">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="name" className="p3 ia-medium">Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your full name"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                    <input
                      id="phone" name="phone" type="tel" required
                      placeholder="(555) 000-0000"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="email" className="p3 ia-medium">Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                    <select
                      id="service" name="service"
                      style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                    >
                      <option value="">Select a service…</option>
                      <option>Roofing Repair</option>
                      <option>Siding Repair</option>
                      <option>Roofing Tear-Off &amp; New Install</option>
                      <option>Windows &amp; Skylights</option>
                      <option>Free Estimate / Inspection</option>
                      <option>Not Sure / Other</option>
                    </select>
                  </div>
                </div>

                {/* Message — flex-grows to fill remaining height on desktop */}
                <div className="contact-message-row">
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Describe what you need — what type of roof, approximate age, any visible damage?"
                    className="contact-textarea-grow"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", resize: "vertical" }}
                  />
                </div>

                <div>
                  <SubmitBtn />
                </div>
              </form>
            </div>

            {/* ── Map ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
              {/* TODO: Replace with Google Maps embed centered on 92 Chestnut Ave, Floral Park, NY 11001 or the broader service area */}
              <iframe
                title="Bellerose Roofing & Siding — Floral Park, NY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9!2d-73.7053!3d40.7234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c265bba30a7b8f%3A0x1a2b3c4d5e6f7a8b!2s92%20Chestnut%20Ave%2C%20Floral%20Park%2C%20NY%2011001!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                height="340"
                style={{ border: 0, display: "block", borderRadius: "6px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p3 ia-medium" style={{ marginTop: "1.25rem", lineHeight: "1.7" }}>
                <strong>Bellerose Roofing &amp; Siding</strong><br />
                92 Chestnut Ave, Floral Park, NY 11001<br />
                <a href="tel:5163550977" style={{ color: "inherit" }}>(516) 355-0977</a><br />
                <a href="tel:7183430620" style={{ color: "inherit" }}>(718) 343-0620</a><br />
                Mon–Fri: 8am–6pm &bull; Sat &amp; Sun: By Appointment
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        /* Two-column contact layout */
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: stretch;
        }

        /* Form column — flex column so form can fill height */
        .contact-form-col {
          display: flex;
          flex-direction: column;
        }

        /* Form itself stretches to fill column height */
        .contact-form-inner {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          flex: 1;
        }

        /* Message row — flex column, grows to fill remaining space */
        .contact-message-row {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        /* Textarea grows to fill the message row */
        .contact-textarea-grow {
          flex: 1;
          min-height: 8rem;
        }

        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        @media (max-width: 860px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
            align-items: start;
          }
          .contact-form-col {
            display: block;
          }
          .contact-form-inner {
            display: flex;
          }
          .contact-message-row {
            flex: unset;
          }
          .contact-textarea-grow {
            flex: unset;
            min-height: 10rem;
          }
        }

        @media (max-width: 480px) {
          .form-row-2col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </main>
  );
}
