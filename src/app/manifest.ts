import type { MetadataRoute } from "next";

/**
 * Web app manifest. Next serves this at /manifest.webmanifest and links it
 * from <head> automatically — no `manifest` key needed in the metadata export.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Main Squeeze Lemonade Co.",
    short_name: "Main Squeeze",
    description:
      "Sparkling lemonade from a Bahamian family recipe, in 355 mL cans, 24 per case. Wholesale for Atlantic Canada.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7E01A",
    theme_color: "#F7E01A",
    orientation: "portrait",
    categories: ["food", "shopping", "lifestyle"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
