"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

const testimonials = [
  {
    id: "daniel-pipitone",
    quote:
      "Professional service with a very fair price. They send you info about the assigned technician in advance and showed up exactly on time. They cleaned up nicely after snaking a drain line on the 2nd floor of a 3 story building. Forget Roto Rooter — Pipe Monkeys will be my new go-to for plumbing needs.",
    name: "Daniel Pipitone",
    position: "Brooklyn Homeowner",
    platform: "Google Review ★★★★★",
  },
];

function QuoteCard({ item, delay }: { item: typeof testimonials[number]; delay: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div
      ref={ref}
      className={`story-item wow${vis}`}
      style={{ animationDelay: delay, maxWidth: "72rem", margin: "0 auto" }}
    >
      <div className="content-entry ia-white" style={{ fontSize: "1.8rem", lineHeight: 1.6, fontStyle: "italic", marginBottom: "2rem" }}>
        <p>&ldquo;{item.quote}&rdquo;</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        <strong className="ia-white" style={{ fontSize: "1.6rem" }}>{item.name}</strong>
        <span className="ia-sky" style={{ fontSize: "1.4rem" }}>{item.position}</span>
        <span style={{ fontSize: "1.3rem", opacity: 0.7, color: "#fff" }}>{item.platform}</span>
      </div>
    </div>
  );
}

export default function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <div ref={ref} className="front-testimonial ia-bg-dark">
      <div className="inner inner--slim-1172">
        <div className={`sub-heading sub-heading__white fadeInUpS wow${vis}`}>
          What Our Customers Say
        </div>
        <h2 className={`h3 ia-white fadeInUpS wow${vis}`} style={{ animationDelay: "0.1s" }}>
          Real Reviews From Real Neighbors
        </h2>
      </div>

      <div className="inner" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
        {testimonials.map((t, i) => (
          <QuoteCard key={t.id} item={t} delay={`${i * 0.15}s`} />
        ))}
      </div>
    </div>
  );
}
