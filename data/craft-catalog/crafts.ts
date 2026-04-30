export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const crafts: CraftItem[] = [
  {
    slug: "main-sewer-lines",
    title: "Main Sewer Lines",
    categories: ["Drain Cleaning"],
    disciplines: ["Sewer"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "kitchen-sinks",
    title: "Kitchen Sinks",
    categories: ["Drain Cleaning"],
    disciplines: ["Kitchen"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "tubs-and-showers",
    title: "Tubs & Showers",
    categories: ["Drain Cleaning"],
    disciplines: ["Bathroom"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "toilets",
    title: "Toilets",
    categories: ["Drain Cleaning"],
    disciplines: ["Bathroom"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "hydro-jetting",
    title: "Hydro Jetting",
    categories: ["Advanced Services"],
    disciplines: ["Sewer", "Kitchen"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "drain-snaking",
    title: "Drain Snaking & Augering",
    categories: ["Drain Cleaning"],
    disciplines: ["Sewer", "Kitchen", "Bathroom"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "camera-inspection",
    title: "Camera Inspection",
    categories: ["Advanced Services"],
    disciplines: ["Sewer"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "multi-unit-buildings",
    title: "Multi-Unit & Commercial Buildings",
    categories: ["Commercial"],
    disciplines: ["Sewer", "Kitchen", "Bathroom"],
    hasAssessment: false,
    hasTranslation: false,
  },
];

export const CATEGORIES = [
  "All Categories",
  "Drain Cleaning",
  "Advanced Services",
  "Commercial",
] as const;

export const DISCIPLINES = [
  "All Disciplines",
  "Sewer",
  "Kitchen",
  "Bathroom",
] as const;
