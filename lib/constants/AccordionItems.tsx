
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Main Sewer Lines",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "When the main line backs up, every drain in the building stops. We clear main sewer lines in Brooklyn brownstones, Queens multi-family buildings, and Nassau County homes — same day.",
    learnHref: "/craft-catalog/main-sewer-lines",
    steps: [
      { label: "Diagnose", body: "We assess the blockage and confirm whether a camera inspection is needed before tools go in." },
      { label: "Quote Upfront", body: "Price confirmed before any work begins — no surprises, no bait-and-switch." },
      { label: "Clear It", body: "Industrial cutters and hydro jetting break through root masses, grease plugs, and heavy scale until flow is fully restored." },
      { label: "Confirm & Clean Up", body: "We run water to verify full flow, show you the result, and leave the work area clean." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Kitchen Sink Drains",
    image: "/images/IMG_9750-1024x683.jpg",
    description:
      "Grease, food debris, and soap scum build up faster in NYC kitchens than anywhere else. We clear kitchen drains across Brooklyn, Queens, and Nassau County with pro snakes and hydro jetting.",
    learnHref: "/craft-catalog/kitchen-sinks",
    steps: [
      { label: "Diagnose", body: "We assess the drain and confirm whether snaking or hydro jetting is the right call for your situation." },
      { label: "Quote Upfront", body: "Price confirmed before we touch anything — what we quote is what you pay." },
      { label: "Clear It", body: "Hydro jetting scrubs grease from pipe walls for recurring clogs; a professional snake handles straightforward blockages fast." },
      { label: "Test & Clean Up", body: "Hot water confirms full drainage. We wipe down the work area before leaving." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Hydro Jetting",
    image: "/images/iStock-530983109-1.jpg",
    description:
      "A snake clears a path. Hydro jetting scrubs the pipe walls clean. If the same drain has backed up more than once this year, jetting is the long-term fix.",
    learnHref: "/craft-catalog/hydro-jetting",
    steps: [
      { label: "Camera First", body: "We confirm the pipe is structurally sound before introducing high pressure — jetting a cracked pipe makes it worse." },
      { label: "Quote Upfront", body: "Price confirmed before we start." },
      { label: "Jet It", body: "The hose feeds through the clean-out at up to 4,000 PSI, scrubbing pipe walls clean in both directions until flow is fully restored." },
      { label: "Confirm", body: "We run water to verify full flow. On main line jobs, we can run a post-jet camera to show you the before-and-after." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Camera Inspection",
    image: "/images/IMG_9688-1024x682.jpg",
    description:
      "Before recommending a major repair or repeated service, we run a camera through the line and show you exactly what's there — in real time. No guesswork. No upsells on work you don't need.",
    learnHref: "/craft-catalog/camera-inspection",
    steps: [
      { label: "Access the Line", body: "We locate the clean-out or access point nearest the problem area." },
      { label: "Quote Upfront", body: "Price confirmed before the camera goes in." },
      { label: "Run the Camera", body: "High-resolution footage shows root masses, grease, cracks, or offsets in real time — you're watching the screen with us." },
      { label: "Report & Recommend", body: "We tell you what we found and what needs to be done, with footage to back it up. You decide. No pressure." },
    ] as AccordionStep[],
  },
];
