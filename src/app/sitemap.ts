import type { MetadataRoute } from "next";

const SITE = "https://www.mainsqueezelemonadeco.com";

const pages = ["", "/flavours", "/story", "/about", "/retailers", "/wholesale", "/events", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
