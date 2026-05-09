
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Roofing Repairs",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "We repair asphalt shingle, ceramic tile, synthetic slate, and rubber roofs across Queens, NYC, Nassau, and Suffolk County. Missing shingles, leaks, and flashing failures — diagnosed and fixed with no guessing.",
    learnHref: "/craft-catalog/roofing-repairs",
    steps: [
      { label: "Free Inspection", body: "We assess the full roof and document all damage with photos before any work begins." },
      { label: "Written Estimate", body: "You get an honest, detailed quote — no hidden charges, no surprises at billing." },
      { label: "Repair", body: "We fix what's actually wrong, using quality materials matched to your existing roof." },
      { label: "Cleanup", body: "We haul away all debris and include free anti-mold and anti-moss strips on every job." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Siding Repairs",
    image: "/images/IMG_9750-1024x683.jpg",
    description:
      "From rotten wood siding to cracked vinyl panels, we repair and replace all types of exterior siding. New siding adds curb appeal and thousands to resale value — and protects against moisture damage.",
    learnHref: "/craft-catalog/siding-repairs",
    steps: [
      { label: "Assess", body: "We inspect the siding and the wall behind it — we don't replace panels over a wet wall." },
      { label: "Estimate", body: "Written estimate before work starts, broken down by material and labor." },
      { label: "Repair or Replace", body: "We match existing materials on partial repairs and help you choose the right product for full replacements." },
      { label: "Walkthrough", body: "Final inspection with you and full debris removal before we leave." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Roofing Tear-Offs & New Installs",
    image: "/images/iStock-530983109-1.jpg",
    description:
      "When repair isn't cost-effective, we tear off the old system, inspect and repair the deck, and install a fully new roof. All major roofing types — asphalt, synthetic slate, rubber, and more.",
    learnHref: "/craft-catalog/roofing-tearoffs-and-installs",
    steps: [
      { label: "Free Inspection", body: "We inspect the full roof and deck and document every problem area with photos." },
      { label: "Material Selection", body: "We help you choose the right roofing material for your home, budget, and local climate." },
      { label: "Tear-Off & Install", body: "Old system stripped to deck, damaged sections replaced, new roof installed to manufacturer spec." },
      { label: "Cleanup", body: "All tear-off debris hauled away. Final walkthrough with you before we leave." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Windows & Skylights",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "Drafty windows waste heat in New York winters. Skylights bring natural light into rooms where traditional windows aren't practical. We install both — properly flashed and sealed so they never leak.",
    learnHref: "/craft-catalog/windows-and-skylights",
    steps: [
      { label: "Consultation", body: "We assess your existing windows or skylight location and discuss your goals and budget." },
      { label: "Product Selection", body: "We help you choose the right window style, glass type, and frame material for your home." },
      { label: "Installation", body: "Proper flashing, sealing, and insulation around every opening — done right the first time." },
      { label: "Cleanup", body: "Old windows and all debris removed. Final walkthrough before we leave." },
    ] as AccordionStep[],
  },
];
