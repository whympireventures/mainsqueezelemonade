import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Main Squeeze Lemonade Co.",
  description:
    "Learn the story behind Main Squeeze Lemonade Co. — a Bahamian-inspired lemonade brand founded by Jared and Cicely Whyms, now growing in Atlantic Canada.",
};

const values = [
  { icon: "🌴", title: "Heritage", body: "Honouring the Bahamian switcha tradition that started it all." },
  { icon: "⭐", title: "Quality", body: "Premium natural ingredients. No shortcuts. Ever." },
  { icon: "🤝", title: "Community", body: "Built for the people, events, and places that make Atlantic Canada home." },
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
              The journey of Main Squeeze Lemonade began under the sun-kissed skies of Nassau, Bahamas back in 2012. It was here that Jared and Cicely Whyms started crafting delicious lemonade for their family and friends.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Encouraged by rave reviews, they decided to share their passion with the world. Their homemade recipe — infused with love and a burst of island zest — quickly became a local sensation at festivals and events, winning numerous awards and accolades along the way.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Inspired by their success in The Bahamas, they are now bringing Main Squeeze to Atlantic Canada — blending the vibrant spirit of tropical paradise with the soulful charm of the Atlantic shores.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/about/founder-story.jpg"
              alt="Founders of Main Squeeze Lemonade"
              width={600}
              height={500}
              className="rounded-3xl object-cover w-full"
            />
            <div className="absolute -bottom-4 -left-4 bg-[#F7E01A] rounded-2xl px-6 py-4 shadow-lg hidden md:block">
              <p className="font-black text-[#1B4D2E] text-sm">Est. Nassau, 2012</p>
              <p className="text-[#1B4D2E]/60 text-xs">Now on Prince Edward Island</p>
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
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-black text-[#1B4D2E] text-xl mb-3">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-[#1B4D2E] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#F7E01A] font-bold uppercase tracking-widest text-xs mb-3">The People Behind the Brand</p>
            <h2 className="text-4xl font-black text-white">Meet Jared &amp; Cicely Whyms</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/about/jared-and-cicely.jpg"
                alt="Jared and Cicely Whyms"
                width={600}
                height={500}
                className="rounded-3xl object-cover w-full"
              />
            </div>
            <div className="space-y-10">
              <div className="border-l-4 border-[#F7E01A] pl-6">
                <h3 className="text-white font-black text-xl mb-1">Jared Whyms</h3>
                <p className="text-[#F7E01A]/70 text-xs uppercase tracking-wider mb-3">CEO & Director of Sales and Marketing</p>
                <p className="text-white/60 leading-relaxed text-sm">
                  Jared is the driving force behind Main Squeeze's growth — from flavour development to sales strategy to showing up at every market with a smile and a cold can. His passion for the brand and for connecting with people is what makes Main Squeeze more than a product.
                </p>
              </div>
              <div className="border-l-4 border-[#F7E01A] pl-6">
                <h3 className="text-white font-black text-xl mb-1">Cicely Whyms</h3>
                <p className="text-[#F7E01A]/70 text-xs uppercase tracking-wider mb-3">Co-Founder & CFO</p>
                <p className="text-white/60 leading-relaxed text-sm">
                  Cicely keeps the business sharp and grounded. With a focus on financial stewardship and operational excellence, she ensures that every decision we make is built for long-term, sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F7E01A] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-[#1B4D2E] mb-8">
            Want to Carry Main Squeeze or Book Us for an Event?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/wholesale" className="bg-[#1B4D2E] text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1B4D2E] transition-colors text-sm tracking-wide">
              Partner With Us
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
