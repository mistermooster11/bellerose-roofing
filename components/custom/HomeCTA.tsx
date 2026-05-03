"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("home-cta-submit", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit", width: "100%" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Get Same-Day Service</span>
    </button>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "0.85rem 1rem",
  border: "1px solid rgba(255,255,255,0.2)",
  borderRadius: "4px",
  fontSize: "1.4rem",
  background: "rgba(255,255,255,0.08)",
  color: "#fff",
  width: "100%",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 600,
  color: "rgba(255,255,255,0.7)",
  marginBottom: "0.4rem",
  display: "block",
  letterSpacing: "0.03em",
  textTransform: "uppercase",
};

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className={`fadeIn wow${vis}`} style={{ background: "var(--c-navy, #101d2b)" }}>
      <div className="inner inner--slim-1172" style={{ padding: "7rem 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="home-cta-grid"
        >

          {/* ── Left: selling copy ── */}
          <div>
            <div
              className={`sub-heading sub-heading__white fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.05s" }}
            >
              Same-Day Service Available
            </div>
            <h2
              className={`ia-white fadeInUpS wow${vis}`}
              style={{
                animationDelay: "0.1s",
                fontSize: "clamp(3.2rem, 5vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "2.5rem",
              }}
            >
              Backed Up Right Now?<br />We Can Be There Fast.
            </h2>
            <div
              className={`content-entry ia-white fadeInUpS wow${vis}`}
              style={{ animationDelay: "0.15s", marginBottom: "3rem", maxWidth: "44rem" }}
            >
              <p>
                If your sink, toilet, tub, or main line is backed up — don&apos;t wait.
                Our Brooklyn, Queens &amp; Nassau County techs handle urgent clogs every
                day. Fill out the form or call us directly and we&apos;ll get someone
                out to you fast.
              </p>
            </div>

            {/* Trust signals */}
            <div
              className={`fadeInUpS wow${vis}`}
              style={{
                animationDelay: "0.2s",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                "✓  Upfront pricing before any work begins",
                "✓  Same-day scheduling, 7 days a week",
                "✓  Local techs — Brooklyn, Queens & Nassau",
                "✓  No mess left behind",
              ].map((item) => (
                <p
                  key={item}
                  style={{ color: "rgba(161,197,211,0.9)", fontSize: "1.5rem", fontWeight: 500 }}
                >
                  {item}
                </p>
              ))}
            </div>

            <a
              href="tel:7187491830"
              className={`fadeInUpS wow${vis}`}
              style={{
                animationDelay: "0.25s",
                display: "inline-block",
                marginTop: "3.5rem",
                fontSize: "3.2rem",
                fontWeight: 800,
                color: "var(--c-orange, #e8470a)",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              (718) 749-1830
            </a>
          </div>

          {/* ── Right: contact form ── */}
          <div
            className={`fadeInUpS wow${vis}`}
            style={{
              animationDelay: "0.15s",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              padding: "3.5rem",
            }}
          >
            <p
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "1.8rem",
                marginBottom: "2.5rem",
              }}
            >
              Request Service
            </p>

            <form
              action="#"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              {/* Name row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
                <div>
                  <label htmlFor="hcta-first" style={labelStyle}>First Name *</label>
                  <input id="hcta-first" name="first_name" type="text" required placeholder="Jane" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="hcta-last" style={labelStyle}>Last Name</label>
                  <input id="hcta-last" name="last_name" type="text" placeholder="Smith" style={inputStyle} />
                </div>
              </div>

              {/* Phone + Email */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
                <div>
                  <label htmlFor="hcta-phone" style={labelStyle}>Phone *</label>
                  <input id="hcta-phone" name="phone" type="tel" required placeholder="(555) 000-0000" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="hcta-email" style={labelStyle}>Email</label>
                  <input id="hcta-email" name="email" type="email" placeholder="you@example.com" style={inputStyle} />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="hcta-service" style={labelStyle}>Service Needed</label>
                <select
                  id="hcta-service"
                  name="service"
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                >
                  <option value="" style={{ background: "#101d2b" }}>Select a service…</option>
                  <option style={{ background: "#101d2b" }}>Main Sewer Line</option>
                  <option style={{ background: "#101d2b" }}>Kitchen Sink Drain</option>
                  <option style={{ background: "#101d2b" }}>Tub &amp; Shower Drain</option>
                  <option style={{ background: "#101d2b" }}>Toilet</option>
                  <option style={{ background: "#101d2b" }}>Hydro Jetting</option>
                  <option style={{ background: "#101d2b" }}>Camera Inspection</option>
                  <option style={{ background: "#101d2b" }}>Multi-Unit Building</option>
                  <option style={{ background: "#101d2b" }}>Not Sure / Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="hcta-message" style={labelStyle}>Tell Us What&apos;s Happening</label>
                <textarea
                  id="hcta-message"
                  name="message"
                  rows={3}
                  placeholder="Which drain? What's it doing? How urgent?"
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {/* Consent */}
              <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>
                By submitting, you consent to receiving texts about your request.
                Reply STOP to opt out at any time.
              </p>

              <SubmitBtn />
            </form>
          </div>

        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .home-cta-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </div>
  );
}
