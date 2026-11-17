import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Palmtree, Star, HeartHandshake, type LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Main Squeeze Lemonade Co.",
  description:
    "Learn the story behind Main Squeeze Lemonade Co. — a sparkling lemonade from a Bahamian traditional recipe, from Jared and Cicely Whyms, founders of The Lemonade Stand in Nassau, and their longtime mentor and now partner Lorinda Skyers.",
};

const founders = [
  {
    name: "Jared Whyms",
    role: "Founder",
    bio: "Jared and his wife Cicely started The Lemonade Stand, a niche, award-winning lemonade boutique in Nassau that pioneered exotic flavours of traditional Bahamian lemonade, built a following called the Lemonites and put inflatable lemonade stands across Nassau and Eleuthera.",
  },
  {
    name: "Lorinda Skyers",
    role: "Partner",
    bio: "Lorinda brings an extensive background in food and beverage in The Bahamas, including making lemonade in her own business. She was Jared and Cicely's business advisor and mentor at The Lemonade Stand, and is now Jared's partner in Main Squeeze.",
  },
];

const values: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Palmtree, title: "Heritage", body: "Honouring the Bahamian traditional recipe that started it all." },
  { icon: Star, title: "Quality", body: "Quality concentrate, real sugar. No shortcuts. Ever." },
  { icon: HeartHandshake, title: "Community", body: "Built for the people and places that make Atlantic Canada home." },
];

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-[#1B4D2E] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#F7E01A] font-bold uppercase tracking-widest text-xs mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            The Story Behind<br />the Squeeze.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Two islands. One dream. A lemonade that tastes like home — wherever home is.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-[#FAFAF7] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#5A9A3A] font-bold uppercase tracking-widest text-xs mb-3">How It Started</p>
            <h2 className="text-4xl font-black text-[#1B4D2E] mb-6 leading-tight">
              From Nassau to<br />Prince Edward Island.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Main Squeeze grew out of The Lemonade Stand, the niche, award-winning lemonade boutique Jared Whyms and his wife Cicely started in Nassau in 2012. It pioneered exotic flavours of traditional Bahamian lemonade. Along the way, Jared&apos;s cousin Lorinda Skyers, who was making lemonade in her own business, was their business advisor and mentor, helping steer them through the Bahamian food and beverage industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Lemonade Stand built a following called the Lemonites and put inflatable lemonade stands across Nassau and Eleuthera. Life brought Jared and Cicely to Prince Edward Island, and the lemonade came with them. Now Jared and Lorinda have come together again as partners in Main Squeeze: a line of flavours based on a traditional Bahamian recipe, with their own sparkling twist, made for Atlantic Canada.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Today it&apos;s a sparkling lemonade in three flavours: Classic, Strawberry and Rhubarb Ginger.
            </p>
            <Link href="/story" className="inline-block font-bold text-[#1B4D2E] underline underline-offset-4 hover:text-[#5A9A3A]">
              Read the full story, in Jared&apos;s words →
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/images/hero/beach.jpg"
              alt="Main Squeeze cans on a dock by a turquoise Bahamian bay"
              width={1672}
              height={941}
              className="rounded-3xl object-cover w-full aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#F7E01A] rounded-2xl px-6 py-4 shadow-lg hidden md:block">
              <p className="font-black text-[#1B4D2E] text-sm">Born in The Bahamas</p>
              <p className="text-[#1B4D2E]/60 text-xs">Made for Atlantic Canada</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-[#5A9A3A] font-bold uppercase tracking-widest text-xs mb-3">What We Stand For</p>
            <h2 className="text-4xl font-black text-[#1B4D2E] mb-6">
              Lemonade That's More Than a Drink.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Main Squeeze isn't just a beverage — it's a celebration of joy, culture, and community. We believe great lemonade brings people together, and we believe in quality ingredients, authentic recipes, and giving people something to feel good about with every sip.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to become the premium lemonade brand in Atlantic Canada — and eventually, a name that stands for refreshment, heritage, and real flavour coast to coast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border border-gray-100 rounded-3xl p-10 text-center hover:border-[#F7E01A] transition-colors">
                <v.icon className="w-9 h-9 mb-5 mx-auto text-[#5A9A3A]" strokeWidth={1.75} />
                <h3 className="font-black text-[#1B4D2E] text-xl mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-[#1B4D2E] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#F7E01A] font-bold uppercase tracking-widest text-xs mb-3">The People Behind the Brand</p>
            <h2 className="text-4xl font-black text-white">Meet Jared &amp; Lorinda</h2>
          </div>

          <Image
            src="/images/about/jay-and-lorinda.jpg"
            alt="Lorinda Skyers and Jared Whyms holding Main Squeeze cans in front of the Main Squeeze website"
            width={1086}
            height={1448}
            sizes="(max-width: 640px) 100vw, 512px"
            className="rounded-3xl object-cover w-full max-w-lg mx-auto aspect-[3/4]"
          />

          <div className="grid sm:grid-cols-2 gap-10 mt-12">
            {founders.map((f) => (
              <div key={f.name} className="border-l-4 border-[#F7E01A] pl-6">
                <h3 className="text-white font-black text-xl mb-1">{f.name}</h3>
                <p className="text-[#F7E01A]/80 text-xs uppercase tracking-wider mb-3">{f.role}</p>
                <p className="text-white/70 leading-relaxed text-sm">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7E01A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#1B4D2E] mb-8">
            Want to Carry Main Squeeze?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/wholesale#order" className="bg-[#1B4D2E] text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1B4D2E] transition-colors text-sm tracking-wide">
              Order Wholesale
            </Link>
            <Link href="/contact" className="border-2 border-[#1B4D2E] text-[#1B4D2E] font-bold px-8 py-4 rounded-full hover:bg-[#1B4D2E] hover:text-white transition-colors text-sm tracking-wide">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
