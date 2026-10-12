import Image from "next/image";
import Link from "next/link";

const badges = [
  { icon: "🌿", label: "All Natural" },
  { icon: "🎋", label: "Real Cane Sugar" },
  { icon: "✨", label: "No Artificial Colours" },
  { icon: "🏆", label: "Award-Winning" },
  { icon: "🇧🇸", label: "Bahamian Recipe" },
];

const flavours = [
  {
    name: "Classic Lemonade",
    tagline: "The one that started it all.",
    img: "/images/flavours/classic-lemonade.jpg",
    color: "bg-yellow-50",
    accent: "#F7E01A",
  },
  {
    name: "Strawberry Lemonade",
    tagline: "Bold, bubbly berry goodness.",
    img: "/images/flavours/strawberry-lemonade.jpg",
    color: "bg-red-50",
    accent: "#F05A28",
  },
  {
    name: "Rhubarb Ginger Lemonade",
    tagline: "Tangy. Warm. Unforgettable.",
    img: "/images/flavours/rhubarb-ginger-lemonade.jpg",
    color: "bg-green-50",
    accent: "#5A9A3A",
  },
];

const pillars = [
  { icon: "🌴", title: "Bahamian Heritage", body: "Rooted in the island switcha tradition — a recipe born in Nassau, perfected over years." },
  { icon: "🍋", title: "Natural Ingredients", body: "Real cane sugar, natural flavours, zero artificial colours or sweeteners." },
  { icon: "🏆", title: "Award-Winning", body: "Recognized across The Bahamas and now bringing that same quality to Atlantic Canada." },
  { icon: "🤝", title: "Community First", body: "From markets to shelves to weddings — made for the moments that bring people together." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full bleed image */}
      <section className="relative w-full overflow-hidden bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-black text-[#1B4D2E] leading-tight mb-6">
              Island-Born<br />
              <span className="text-[#5A9A3A]">Lemonade.</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
              Bahamian-inspired. Sparkling. Made with real cane sugar and natural flavours — crafted for Atlantic Canada.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/flavours"
                className="bg-[#1B4D2E] text-white font-bold px-8 py-4 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors text-sm tracking-wide"
              >
                Shop Flavours
              </Link>
              <Link
                href="/about"
                className="border-2 border-[#1B4D2E] text-[#1B4D2E] font-bold px-8 py-4 rounded-full hover:bg-[#1B4D2E] hover:text-white transition-colors text-sm tracking-wide"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-[#F7E01A] rounded-full blur-3xl opacity-30 scale-90" />
              <Image
                src="/images/hero/main-squeeze-hero.jpg"
                alt="Main Squeeze Lemonade"
                width={600}
                height={600}
                className="relative rounded-3xl object-cover w-full aspect-square"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* BADGE BAR */}
      <section className="border-y border-gray-100 bg-white py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-[#1B4D2E]">
                <span className="text-lg">{b.icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLAVOURS GRID */}
      <section className="bg-[#FAFAF7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#5A9A3A] font-bold uppercase tracking-widest text-xs mb-3">Our Flavours</p>
            <h2 className="text-4xl font-black text-[#1B4D2E]">Bold. Refreshing. Unforgettable.</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Three sparkling lemonades built on our classic Bahamian <em>switcha</em> recipe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {flavours.map((f) => (
              <div
                key={f.name}
                className={`${f.color} rounded-3xl overflow-hidden group cursor-pointer`}
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={f.img}
                    alt={f.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-black text-[#1B4D2E] text-xl mb-1">{f.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{f.tagline}</p>
                  <Link
                    href="/flavours"
                    className="inline-block bg-[#1B4D2E] text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/flavours"
              className="inline-block border-2 border-[#1B4D2E] text-[#1B4D2E] font-bold px-8 py-3 rounded-full hover:bg-[#1B4D2E] hover:text-white transition-colors text-sm tracking-wide"
            >
              View All Flavours
            </Link>
          </div>
        </div>
      </section>

      {/* OUR STORY — split */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/images/about/founder-story.jpg"
              alt="Jared and Cicely Whyms"
              width={600}
              height={500}
              className="rounded-3xl object-cover w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#F7E01A] rounded-2xl px-6 py-4 shadow-lg hidden md:block">
              <p className="font-black text-[#1B4D2E] text-sm">Est. Nassau, 2012</p>
              <p className="text-[#1B4D2E]/60 text-xs">Now on Prince Edward Island</p>
            </div>
          </div>
          <div>
            <p className="text-[#5A9A3A] font-bold uppercase tracking-widest text-xs mb-3">Our Story</p>
            <h2 className="text-4xl font-black text-[#1B4D2E] mb-6 leading-tight">
              Born in the Bahamas.<br />Brewed for Atlantic Canada.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              It started under the sun-kissed skies of Nassau, where Jared and Cicely Whyms began crafting lemonade for family and friends. Their recipe — rooted in the traditional Bahamian <em>switcha</em> — won awards across The Bahamas before making its way north.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Now they're bringing Main Squeeze to Atlantic Canada, blending the vibrant spirit of the islands with the warmth of the Maritimes.
            </p>
            <blockquote className="border-l-4 border-[#F7E01A] pl-4 mb-8 italic text-[#1B4D2E] font-semibold">
              "Born on one island. Bred on another."
            </blockquote>
            <Link
              href="/about"
              className="inline-block bg-[#1B4D2E] text-white font-bold px-8 py-4 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors text-sm tracking-wide"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-[#1B4D2E] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#F7E01A] font-bold uppercase tracking-widest text-xs mb-3">What Makes Us Different</p>
            <h2 className="text-4xl font-black text-white">Crafted With Passion.<br />Rooted in Tradition.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                <div className="text-4xl mb-5">{p.icon}</div>
                <h3 className="font-black text-[#F7E01A] text-lg mb-3">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHOLESALE CTA */}
      <section className="bg-[#F7E01A] py-16">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-black text-[#1B4D2E] mb-2">Bring Main Squeeze to Your Shelves.</h2>
            <p className="text-[#1B4D2E]/70 max-w-lg">
              We partner with cafés, grocers, restaurants, hotels, and event organizers across Atlantic Canada.
            </p>
          </div>
          <Link
            href="/wholesale"
            className="shrink-0 bg-[#1B4D2E] text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1B4D2E] transition-colors text-sm tracking-wide whitespace-nowrap"
          >
            Partner With Us →
          </Link>
        </div>
      </section>

      {/* EVENTS CTA */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#5A9A3A] font-bold uppercase tracking-widest text-xs mb-3">Events</p>
            <h2 className="text-4xl font-black text-[#1B4D2E] mb-4 leading-tight">
              Main Squeeze at Your Next Event.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              From summer festivals to farmers markets to weddings and corporate events — Main Squeeze is the refreshment people talk about. Booking activations across Atlantic Canada for 2025.
            </p>
            <Link
              href="/events"
              className="inline-block bg-[#1B4D2E] text-white font-bold px-8 py-4 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors text-sm tracking-wide"
            >
              Book Us for an Event →
            </Link>
          </div>
          <div>
            <Image
              src="/images/events/lifestyle-market.jpg"
              alt="Main Squeeze at a market"
              width={600}
              height={400}
              className="rounded-3xl object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#FAFAF7] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-2xl md:text-3xl font-black text-[#1B4D2E] leading-snug mb-6 italic">
            "Pure magic — the perfect blend of tradition and flavour. I'll definitely be back for more."
          </blockquote>
          <p className="text-[#5A9A3A] font-bold uppercase tracking-widest text-xs">— Kevin</p>
        </div>
      </section>
    </>
  );
}
