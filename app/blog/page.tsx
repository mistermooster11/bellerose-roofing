"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

/* ── Blog Posts (placeholder — swap with real posts or CMS data) */

// [TODO: Replace all placeholder posts with real content from client or CMS before launch]
const posts = [
  {
    id: "repair-or-replace-roof",
    title: "Roof Repair vs. Full Replacement: How to Make the Right Call",
    excerpt:
      "Not every damaged roof needs to be replaced — but some repairs are just delaying the inevitable. Here's how experienced roofers think through this decision, and what questions to ask.",
    category: "Homeowner Guide",
    date: "April 2026",
    href: "/blog/repair-or-replace-roof",
  },
  {
    id: "storm-damage-insurance",
    title: "Roof Storm Damage: What to Document Before You Call Insurance",
    excerpt:
      "A good contractor inspects and documents everything before an insurance claim is filed. Here's what to look for and how the process typically works in New York.",
    category: "Insurance & Claims",
    date: "March 2026",
    href: "/blog/storm-damage-insurance",
  },
  {
    id: "new-york-roof-lifespan",
    title: "How Long Should a Roof Last in New York? The Honest Answer by Material",
    excerpt:
      "Asphalt shingles, rubber, tile, synthetic slate — each material has a different lifespan in NYC's climate. Here's what to expect and how to get the most out of each.",
    category: "Roofing 101",
    date: "February 2026",
    href: "/blog/new-york-roof-lifespan",
  },
  {
    id: "siding-buying-guide",
    title: "Vinyl vs. Wood vs. Fiber Cement Siding: What Makes Sense in New York?",
    excerpt:
      "Each siding material has tradeoffs in terms of cost, durability, and maintenance. Here's how to think through the choice for a New York home specifically.",
    category: "Siding Guide",
    date: "January 2026",
    href: "/blog/siding-buying-guide",
  },
  {
    id: "signs-need-new-roof",
    title: "5 Signs Your Roof Needs to Be Replaced — Not Just Repaired",
    excerpt:
      "Curling shingles, granules in the gutters, sagging sections — some damage signals that repair is no longer cost-effective. Here's how to read what your roof is telling you.",
    category: "Homeowner Guide",
    date: "December 2025",
    href: "/blog/signs-need-new-roof",
  },
  {
    id: "window-replacement-guide",
    title: "When Should You Replace Your Windows? A New York Homeowner's Guide",
    excerpt:
      "Drafts, condensation between panes, and rising energy bills are the main signals. But not every old window needs replacing. Here's how to evaluate yours honestly.",
    category: "Windows Guide",
    date: "November 2025",
    href: "/blog/window-replacement-guide",
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
              Roofing &amp; Home Exterior Guides
            </h1>
          </div>
        </div>

        <div className="hero-org__bottom flex-module">
          <div className="inner inner--slim-1172 cleared">
            <div className={`hero-org__left wow${heroVis}`}>
              <div className={`sub-heading fadeInUpS wow${heroVis}`}>From the Bellerose Roofing &amp; Siding Team</div>
              <div className={`content-entry fadeInUpS wow${heroVis}`} style={{ animationDelay: "0.1s" }}>
                <p>
                  Practical advice from the Bellerose Roofing &amp; Siding team — 35 years of experience
                  working on roofs across Queens, the 5 boroughs, Nassau, and Suffolk. No fluff, just
                  the honest information homeowners actually need.
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
                  <a className="ia-link ia-link--arrow" href="tel:5163550977">
                    <i className="icon-link" />
                    <span>Call (516) 355-0977</span>
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
            Need a Free Estimate?
          </div>
          <h2 className={`h2 wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            Don&apos;t Wait — We Pick Up Fast
          </h2>
          <div className={`front-donation__in wow fadeInUpS${ctaInView ? " is-visible" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="content-entry">
              <p>
                Call <strong>(516) 355-0977</strong> and we&apos;ll give you an ETA on the spot.
                Call us to schedule a free inspection and written estimate. We serve Queens, all 5 boroughs,
                Nassau County, and Suffolk County.
              </p>
            </div>
            <div className="front-donation__btn-wrap">
              <div className="front-donation__btn">
                <a className="btn btn--primary" href="tel:5163550977">
                  Call (516) 355-0977
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
