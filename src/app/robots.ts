import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/offline",
    },
    sitemap: "https://www.mainsqueezelemonadeco.com/sitemap.xml",
  };
}
