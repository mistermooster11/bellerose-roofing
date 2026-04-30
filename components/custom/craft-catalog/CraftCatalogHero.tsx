"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CraftCatalogHero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const vis = inView ? " is-visible" : "";

  return (
    <div className="hero-org fadeIn wow" ref={ref}>
      <div className="hero-org__top ia-bg-dark">
        <div className="inner inner--slim-1172 cleared">
          <div className="hero-org-in">

            {/* Text block */}
            <div className="hero-org__text">
              <h1 className={`ia-white fadeInUpS wow${vis}`}>
                Craft Catalog
              </h1>
              <div
                className={`content-entry ia-white fadeInUpS wow${vis}`}
                style={{ transitionDelay: "0.1s" }}
              >
                <p>
                  NCCER offers a broad portfolio of curricula that spans a wide
                  range of construction and maintenance disciplines to ensure
                  organizations and learners of all backgrounds can find options
                  to fit their needs.
                </p>
              </div>
            </div>

            {/* Decorative graphic with vape reveal */}
            <div className={`hero-org__image vape wow ia-bg-dark${vis}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="vape-el"
                src="https://www.nccer.org/wp-content/themes/nccer/assets/images/graphic-logo.png"
                alt="Logo element"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
