import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Flavours | Main Squeeze Lemonade Co.",
  description:
    "Discover the bold, sparkling, Bahamian-inspired lemonade flavours from Main Squeeze Lemonade Co. — Classic, Strawberry, and Rhubarb Ginger.",
};

const flavours = [
  {
    emoji: "🍋",
    name: "Classic Lemonade",
    tagline: "Experience the sparkle of tradition and innovation in every sip.",
    description: [
      "Our Classic Lemonade is more than just another lemonade — it's the result of trial and error leading to perfection. Inspired by the traditional Bahamian recipe of switcha, this flavour pays homage to the vibrant citrus traditions of The Bahamas.",
      "We've elevated the classic switcha with a touch of carbonation that makes the flavour pop — delivering a crisp, refreshing experience unlike any other. Each can captures the perfect balance of tangy and sweet.",
    ],
    taste: ["Bright citrus", "Tangy lemon", "Light cane sugar sweetness", "Crisp sparkling finish"],
    bestFor: ["Everyday sipping", "Café menus", "Food pairings", "Summer events"],
    img: "/images/flavours/classic-lemonade.jpg",
    cardBg: "bg-yellow-50",
    heroBg: "bg-[#FAFAF7]",
  },
  {
    emoji: "🍓",
    name: "Strawberry Lemonade",
    tagline: "Bright, bubbly, and full of berry goodness — reimagined.",
    description: [
      "Our Strawberry Lemonade is a refreshing twist on our classic Bahamian-inspired switcha recipe. Combining the zesty citrus punch of our traditional lemonade with the natural sweetness of strawberries, this flavour is as bold as it is refreshing.",
      "With a hint of carbonation to make the flavours pop, every sip delivers a sparkling, invigorating experience — a must-have for sunny days and celebrations.",
    ],
    taste: ["Ripe strawberry", "Zesty lemon", "Sweet & tangy balance", "Sparkling fruit finish"],
    bestFor: ["Farmers markets", "Festivals", "Brunch menus", "Patio season"],
    img: "/images/flavours/strawberry-lemonade.jpg",
    cardBg: "bg-red-50",
    heroBg: "bg-white",
  },
  {
    emoji: "🫚",
    name: "Rhubarb Ginger Lemonade",
    tagline: "Tangy, spicy, and sparkling — like you've never had before.",
    description: [
      "Our Rhubarb Ginger Lemonade is a bold and exciting fusion of flavours, crafted to surprise and delight. Built on the foundation of our classic Bahamian-inspired switcha recipe, this unique lemonade pairs the tangy, slightly tart notes of rhubarb with the warm, spicy kick of ginger.",
      "Carbonated for an extra layer of refreshment, this flavour strikes the perfect balance between sweet, tart, and zesty — with a bubbly twist that makes it truly unforgettable.",
    ],
    taste: ["Tart rhubarb", "Warming ginger", "Zesty lemon", "Spiced sparkling finish"],
    bestFor: ["Specialty grocery", "Restaurant menus", "Cocktail mixer", "The adventurous palate"],
    img: "/images/flavours/rhubarb-ginger-lemonade.jpg",
    cardBg: "bg-green-50",
    heroBg: "bg-[#FAFAF7]",
  },
];

export default function FlavoursPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-[#1B4D2E] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#F7E01A] font-bold uppercase tracking-widest text-xs mb-4">Our Flavours</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Bold Flavours.<br />Island Soul.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Every flavour starts with our classic Bahamian <em>switcha</em> recipe — then we take it somewhere unforgettable.
          </p>
        </div>
      </section>

      {/* FLAVOUR DETAIL SECTIONS */}
      {flavours.map((f, i) => (
        <section key={f.name} className={`${f.heroBg} py-20`}>
          <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
            {/* Content */}
            <div>
              <span className="text-4xl">{f.emoji}</span>
              <h2 className="text-4xl font-black text-[#1B4D2E] mt-3 mb-2">{f.name}</h2>
              <p className="text-[#5A9A3A] font-semibold italic mb-6 text-sm">{f.tagline}</p>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                {f.description.map((para, j) => <p key={j}>{para}</p>)}
              </div>

              <div className="grid sm:grid-cols-2 gap-6 p-6 bg-white rounded-2xl border border-gray-100">
                <div>
                  <h4 className="font-black text-[#1B4D2E] uppercase tracking-widest text-xs mb-3">Taste Profile</h4>
                  <ul className="space-y-2">
                    {f.taste.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-[#F7E01A] shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-[#1B4D2E] uppercase tracking-widest text-xs mb-3">Best For</h4>
                  <ul className="space-y-2">
                    {f.bestFor.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-[#5A9A3A] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <div className={`${f.cardBg} rounded-3xl p-4`}>
                <Image
                  src={f.img}
                  alt={f.name}
                  width={600}
                  height={600}
                  className="rounded-2xl object-cover w-full aspect-square"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* COMING SOON */}
      <section className="bg-[#1B4D2E] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#F7E01A] font-bold uppercase tracking-widest text-xs mb-3">Coming Soon</p>
          <h2 className="text-3xl font-black text-white mb-4">More Flavours in 2025.</h2>
          <p className="text-white/60 mb-8">
            We're always experimenting in the spirit of <em>switcha</em> — bold, fresh, and inspired by the islands. Sign up to be the first to know when new flavours drop.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#F7E01A] text-[#1B4D2E] font-bold px-8 py-4 rounded-full hover:bg-white transition-colors text-sm tracking-wide"
          >
            Join the List →
          </Link>
        </div>
      </section>
    </>
  );
}
