import NumberStatsItem from "./NumberStatsItem";
import VapeImage from "./VapeImage";

const stats = [
  {
    stat: "35+",
    label: "Years Serving the NYC Metro Area",
    linkText: "About Us",
    href: "/explore/belle-rose-roofing",
  },
  {
    stat: "Free",
    label: "Estimates on Every Roofing & Siding Job",
    linkText: "Get an Estimate",
    href: "/contact-us",
  },
  {
    stat: "100%",
    label: "Licensed & Insured — NYC, Nassau & Suffolk",
    linkText: "See Our Services",
    href: "/craft-catalog",
  },
];

export default function Difference() {
  return (
    <div className="front-difference py-20 md:py-48 border-none">
      <div className="inner inner--slim-1172 flex flex-col gap-0 md:gap-10">

        {/* Columns 1 */}
        <div className="flex flex-col-reverse md:flex-row gap-10 items-start">

          {/* Left: heading + first stat */}
          <div className="flex-1">
            <div className="sub-heading">Why Bellerose Roofing &amp; Siding</div>
            <h2 className="h1 mb-[3rem]">
              Family-Owned. Fair Pricing. Done Right.
            </h2>
            <div className="hidden md:flex flex-wrap gap-[3rem] py-[2rem]">
              <NumberStatsItem item={stats[0]} />
            </div>
          </div>

          {/* Right: photo */}
          <div className="w-full md:w-[54%] shrink-0 relative z-20">
            <div className="front-difference__image">
              {/* [TODO: Replace with Bellerose Roofing & Siding job site or completed roof photo] */}
              <VapeImage src="/images/IMG_9750-1024x683.jpg" />
            </div>
          </div>

        </div>

        {/* Columns 2: remaining stats */}
        <div className={[
          "flex flex-col justify-center gap-6",
          "md:flex-row md:items-center"
        ].join(" ")}>
          <div className="block md:hidden">
            <NumberStatsItem item={stats[0]} />
          </div>
          {stats.slice(1).map((item) => (
            <NumberStatsItem key={item.stat} item={item} />
          ))}
        </div>

      </div>
    </div>
  );
}
