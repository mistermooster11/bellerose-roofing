import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/channel/", "/api/"],
      },
    ],
    sitemap: "https://belleroseroofingsiding.com/sitemap.xml",
  };
}
