"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Blog Posts (placeholder — swap with real posts or CMS data) */

const posts = [
  {
    id: "why-drains-keep-clogging",
    title: "Why Your Drain Keeps Clogging (And What Actually Fixes It)",
    excerpt:
      "Snaking the same drain every few months? The problem usually isn't the clog — it's grease or mineral buildup on the pipe walls. Here's when to snake and when to jet.",
    category: "Drain Tips",
    date: "April 2026",
    href: "/blog/why-drains-keep-clogging",
  },
  {
    id: "hydro-jetting-vs-snaking",
    title: "Hydro Jetting vs. Drain Snaking: Which One Do You Actually Need?",
    excerpt:
      "Both tools clear clogs — but they work very differently. We break down the honest answer for homeowners who don't want to overpay or get upsold.",
    category: "How It Works",
    date: "March 2026",
    href: "/blog/hydro-jetting-vs-snaking",
  },
  {
    id: "main-line-warning-signs",
    title: "5 Warning Signs Your Main Sewer Line Is About to Back Up",
    excerpt:
      "Multiple slow drains, gurgling toilets, foul smells near floor drains — these aren't random. They're your plumbing system telling you something's wrong downstream.",
    category: "Homeowner Guide",
    date: "February 2026",
    href: "/blog/main-line-warning-signs",
  },
  {
    id: "brooklyn-old-pipes",
    title: "Brooklyn's Old Pipes: What Every Brownstone Owner Needs to Know",
    excerpt:
      "Pre-war buildings in Brooklyn often have clay, cast iron, or even Orangeburg pipe. We explain what that means for your drains and how to stay ahead of blockages.",
    category: "Local Guide",
    date: "January 2026",
    href: "/blog/brooklyn-old-pipes",
  },
  {
    id: "what-not-to-flush",
    title: "What Not to Flush or Pour Down the Drain (The Real List)",
    excerpt:
      "Flushable wipes aren't actually flushable. Grease hardens in your pipes. Here's what Pipe Monkeys techs pull out of clogged lines every single day.",
    category: "Drain Tips",
    date: "December 2025",
    href: "/blog/what-not-to-flush",
  },
  {
    id: "camera-inspection-worth-it",
    title: "Is a Drain Camera Inspection Worth It? Honest Answer from a Tech",
    excerpt:
      "You don't need a camera for a simple kitchen clog. But for recurring main line issues? A camera can save you thousands. Here's when we recommend it and why.",
    category: "How It Works",
    date: "November 2025",
    href: "/blog/camera-inspection-worth-it",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

function PostCard({ post, delay }: { post: typeof posts[number]; delay: string }) {
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
          <span
            className="p3 ia-medium"
            style={{
              padding: "0.3rem 1rem",
              background: "var(--ia-sky, #a1c5d3)",
              borderRadius: "4px",
              fontSize: "1.2rem",
            }}
          >
            {post.category}
          </span>
          <span className="p3 ia-dark" style={{ fontSize: "1.2rem", opacity: 0.6 }}>{post.date}</span>
        </div>
        <h3 className="h6 ia-margin-1">
          {/* [TODO: Enable when blog CMS is wired up] */}
          {post.title}
        </h3>
        <p className="p3 ia-regular ia-dark" style={{ marginBottom: "1.2rem" }}>
          {post.excerpt}
        </p>
        <a className="ia-link ia-link--arrow" href={post.href}>
          <i className="icon-link" />
          <span>Read More</span>
        </a>
        {/* [TODO: Wire each href to real blog post pages] */}
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────────── */

export default function BlogPage() {
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
              <span className="post post-page current-item">Blog</span>
            </div>
            <h1 className={`ia-white ia-margin-0 fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
              Drain Tips & Homeowner Guides
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>From the Pipe Monkeys Team</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Practical advice from the techs who clear drains in Brooklyn, Queens, and Nassau
                  County every single day. No fluff — just the honest information homeowners
                  and building managers actually need.
                </p>
              </div>
            </div>

            <div className="hero-org__right">
              <div className={`sub-heading fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                Quick Links
              </div>
              <ul className="quick-links" role="list">
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                  <a className="ia-link ia-link--arrow" href="/craft-catalog">
                    <i className="icon-link" />
                    <span>Our Services</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.2s" }}>
                  <a className="ia-link ia-link--arrow" href="/general-faqs">
                    <i className="icon-link" />
                    <span>FAQs</span>
                  </a>
                </li>
                <li className={`fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.3s" }}>
                  <a className="ia-link ia-link--arrow" href="tel:7187491830">
                    <i className="icon-link" />
                    <span>Call (718) 749-1830</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <div
        ref={gridRef}
        className={`user-grid-small fadeIn wow${gridInView ? " is-visible" : ""} flex-module`}
      >
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${gridInView ? " is-visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            Latest Articles
          </h2>
          {/* [TODO: Replace placeholder posts with real content from client or CMS] */}
          <div className="user-grid-list user-grid-list--small">
            {posts.map((post, i) => (
              <PostCard key={post.id} post={post} delay={`${(i % 3) * 0.1}s`} />
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
            Have a Drain Emergency?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Don&apos;t Wait — We Pick Up Fast
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(718) 749-1830</strong> and we&apos;ll give you an ETA on the spot.
                Same-day service available seven days a week across Brooklyn, Queens, and Nassau County.
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
