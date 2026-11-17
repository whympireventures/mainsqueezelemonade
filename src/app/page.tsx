import { ORDER_EMAIL, PHONE, flavours } from "@/lib/catalog";
import Hero from "@/components/home/Hero";
import BrandStrip from "@/components/home/BrandStrip";
import HomeFlavours from "@/components/home/HomeFlavours";
import Story from "@/components/home/Story";
import Reviews from "@/components/home/Reviews";
import Lemonution from "@/components/home/Lemonution";
import FindUs from "@/components/home/FindUs";

const SITE = "https://mainsqueezelemonadeco.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#org`,
      name: "Main Squeeze Lemonade Company Inc.",
      url: SITE,
      logo: `${SITE}/images/brand/logo-full.png`,
      email: ORDER_EMAIL,
      telephone: `+1-${PHONE}`,
      address: { "@type": "PostalAddress", addressLocality: "Stratford", addressRegion: "PE", addressCountry: "CA" },
    },
    ...flavours.map((f) => ({
      "@type": "Product",
      name: f.name,
      description: `${f.line}. Sparkling lemonade in 355 mL cans, 24 per case.`,
      image: `${SITE}${f.image}`,
      gtin12: f.upc,
      brand: { "@type": "Brand", name: "Main Squeeze Lemonade Co." },
      manufacturer: { "@id": `${SITE}/#org` },
    })),
  ],
};

// Copy follows Main_Squeeze_Homepage.md. Wholesale ordering lives at /wholesale.
export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // Static data built above; escape "<" so it can't close the tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <BrandStrip />
      <HomeFlavours />
      <Reviews />
      <Story />
      <Lemonution />
      <FindUs />
    </>
  );
}
