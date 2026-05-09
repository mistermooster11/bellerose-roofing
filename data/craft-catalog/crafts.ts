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
    slug: "roofing-repairs",
    title: "Roofing Repairs",
    categories: ["Roofing"],
    disciplines: ["Repair"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "siding-repairs",
    title: "Siding Repairs",
    categories: ["Siding"],
    disciplines: ["Repair"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "roofing-tearoffs-and-installs",
    title: "Roofing Tear-Offs & New Installs",
    categories: ["Roofing"],
    disciplines: ["Installation"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "windows-and-skylights",
    title: "Windows & Skylights",
    categories: ["Windows"],
    disciplines: ["Installation"],
    hasAssessment: false,
    hasTranslation: false,
  },
];

export const CATEGORIES = [
  "All Categories",
  "Roofing",
  "Siding",
  "Windows",
] as const;

export const DISCIPLINES = [
  "All Disciplines",
  "Repair",
  "Installation",
] as const;
