import type { ChannelPageData } from "@/components/custom/channel/types";

const belleRoseRoofing: ChannelPageData = {
  slug: "belle-rose-roofing",

  navItems: [
    { href: "#channel",           label: "About Us"         },
    { href: "#helpful_resources", label: "Quick Links"      },
    { href: "#crafts",            label: "Our Services"     },
    { href: "#testimonials",      label: "Testimonials"     },
    { href: "#flex_feature",      label: "Free Estimate"    },
    { href: "#get_in_touch",      label: "Get in Touch"     },
  ],

  hero: {
    title:           "Roofing & Siding Specialists",
    breadcrumbLabel: "About Us",
    imageBg:
      "url(/images/IMG_9688-1024x682.jpg) no-repeat center center / cover",
    description: (
      <p>
        Bellerose Roofing &amp; Siding is a family-owned roofing, siding, and
        window company that has been proudly serving the 5-borough area, Nassau
        County, and Suffolk County for over 35 years. We deliver high-quality
        work at fair and honest pricing — and keep you involved every step of
        the way.
      </p>
    ),
  },

  learnMore: {
    title: "35 Years of Roofs Done Right",
    content: (
      <>
        <p>
          Bellerose Roofing &amp; Siding is family-owned and operated with over
          35 years of experience in the roofing, siding, and window business. We
          are passionate about the work that we do, and pride ourselves on
          delivering high-quality work at fair and honest pricing. Our many years
          in the business allow us to provide expert estimates for any type of
          job — and we&rsquo;ll keep you involved in the decision-making process
          every step of the way.
        </p>

        <h5>Fair and Honest Pricing</h5>
        <p>
          As a family-owned business, we emphasize integrity above all else. We
          draw on our decades of experience to ensure that your estimate is
          accurate and that you aren&rsquo;t left with any unpleasant surprises
          when you get your bill. We also offer free anti-mold and anti-moss
          strips for your roof as a special thank-you for choosing our services.
        </p>

        <h5>We Keep You Involved</h5>
        <p>
          If an issue comes up during your roofing or siding project, we discuss
          it with you and explain your options before proceeding. You stay
          informed every step of the way — we want our clients to feel in
          control of their project, and we are always happy to address your
          questions and concerns.
        </p>

        <h5>Licensed &amp; Insured</h5>
        <p>
          Fully licensed and insured in New York City, Nassau County, and
          Suffolk County. NYC Lic# 1259922 &bull; Nassau Lic# H18B8620000
          &bull; Floral Park Lic# 119.
        </p>
      </>
    ),
  },

  resources: {
    title: "Quick Links",
    resources: [
      { title: "Call Us — (516) 355-0977",           href: "tel:5163550977",  icon: "icon-message" },
      { title: "Contact Us Online",                   href: "/contact-us",     icon: "icon-mail"    },
      { title: "Our Services",                        href: "/craft-catalog",  icon: "icon-link"    },
      { title: "Service Areas",                       href: "/service-areas",  icon: "icon-info"    },
      { title: "Frequently Asked Questions",          href: "/general-faqs",   icon: "icon-link"    },
    ],
  },

  crafts: {
    description: (
      <p>
        We handle all types of residential and commercial exterior work across
        the 5 boroughs, Nassau County, and Suffolk County — from emergency
        roof repairs to full siding replacements and window installs.
      </p>
    ),
    craftLinks: [
      { label: "Roofing Repairs",              href: "/craft-catalog/roofing-repairs"             },
      { label: "Siding Repairs",               href: "/craft-catalog/siding-repairs"              },
      { label: "Roofing Tear-Offs & Installs", href: "/craft-catalog/roofing-tearoffs-and-installs" },
      { label: "Windows & Skylights",          href: "/craft-catalog/windows-and-skylights"       },
    ],
  },

  testimonials: {
    videos: [],
    quote: {
      // TODO: Replace with a real client review from Google or Yelp
      text:
        "Bellerose Roofing replaced our entire roof and it was the best contractor experience we've had. They showed up on time, kept us in the loop the whole time, and cleaned up completely when they were done. Fair price, no surprises. Highly recommend.",
      name:     "Long Island Homeowner",
      position: "Nassau County",
    },
  },

  flexFeature: {
    imageSrc:    "/images/iStock-1220765707-443x559-1.jpg",
    title:       "Ready for a Free Estimate?",
    body: (
      <p>
        Whether you need a roof repaired after a storm or want to upgrade your
        home&rsquo;s siding, we offer free estimates across the 5 boroughs,
        Nassau, and Suffolk. Call{" "}
        <strong>(516) 355-0977</strong> today — we&rsquo;ll assess the job and
        give you an honest quote with no pressure.
      </p>
    ),
    buttonLabel: "Call for a Free Estimate",
    buttonHref:  "tel:5163550977",
  },

  getInTouch: {
    body: (
      <p>
        Ready to schedule a free estimate or have a question about your roof or
        siding? Call us at <strong>(516) 355-0977</strong> or use our online
        contact form — we&rsquo;ll get back to you fast.
      </p>
    ),
    buttonLabel: "Contact Us",
    buttonHref:  "/contact-us",
  },
};

export default belleRoseRoofing;
