import type { ChannelPageData } from "@/components/custom/channel/types";
import associations  from "./associations";
import corrections   from "./corrections";
import highSchools   from "./high-schools";
import postsecondary from "./postsecondary";
import pipemonkeys   from "./pipemonkeys";
import belleRoseRoofing from "./belle-rose-roofing";

const channelDataMap: Record<string, ChannelPageData> = {
  associations,
  corrections,
  "high-schools": highSchools,
  postsecondary,
  pipemonkeys,
  "belle-rose-roofing": belleRoseRoofing,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
