"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SecondaryButton from "@/components/custom/buttons/SecondaryButton";

export default function HomeCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`front-donation ia-bg-sky flex-module wow fadeInUpS${vis}`}
    >
      <div className="inner inner--slim-1172">
        <div className={`sub-heading wow fadeInUpS${vis}`} style={{ animationDelay: "0.1s" }}>
          Same-Day Service Available
        </div>
        <h2 className={`h2 wow fadeInUpS${vis}`} style={{ animationDelay: "0.15s" }}>
          Don&apos;t Wait — Call Now
        </h2>
        <div className={`front-donation__in wow fadeInUpS${vis}`} style={{ animationDelay: "0.2s" }}>
          <div className="content-entry">
            <p>
              Backed up drains don&apos;t fix themselves. Our Brooklyn, Queens &amp; Nassau County
              techs are on the road every day — call us and we&apos;ll get someone out fast.
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
  );
}
