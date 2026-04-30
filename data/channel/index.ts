import type { ChannelPageData } from "@/components/custom/channel/types";
import associations  from "./associations";
import corrections   from "./corrections";
import highSchools   from "./high-schools";
import postsecondary from "./postsecondary";
import pipemonkeys   from "./pipemonkeys";

const channelDataMap: Record<string, ChannelPageData> = {
  associations,
  corrections,
  "high-schools": highSchools,
  postsecondary,
  pipemonkeys,
};

export function getChannelData(slug: string): ChannelPageData | null {
  return channelDataMap[slug] ?? null;
}

export { channelDataMap };
