import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wholesale & Partnerships | Main Squeeze Lemonade Co.",
  description:
    "Interested in stocking Main Squeeze Lemonade? We partner with cafés, restaurants, grocery stores, hotels, resorts, and food service providers across Atlantic Canada.",
};

const reasons = [
  { icon: "🏆", title: "Award-Winning Flavour", body: "Recognized for quality and taste across The Bahamas — now bringing that same standard to Atlantic Canada." },
  { icon: "✅", title: "Premium, Clean Label", body: "Natural ingredients, real cane sugar. No artificial colours or sweeteners. A product you're proud to carry." },
  { icon: "🍋", title: "Three Sparkling Flavours", body: "Classic, Strawberry, and Rhubarb Ginger — something for every customer and every occasion." },
  { icon: "🌿", title: "Local & Community-Driven", body: "A PEI-based brand with a great story that resonates with local shoppers and supports local business." },
  { icon: "🥤", title: "Retail-Ready Packaging", body: "300mL aluminum cans with bold, eye-catching design. Built for shelf appeal and grab-and-go retail." },
  { icon: "🤝", title: "Flexible Partnerships", body: "Case orders, event supply, or ongoing wholesale arrangements — we work with you." },
];

const partners = [
  "Cafés & coffee shops", "Restaurants & food service",
  "Local grocery & specialty food stores", "Hotels & resorts",
  "Food trucks & pop-up vendors", "Corporate catering",
  "Farmers markets & co-ops", "Event & festival organizers",
];

const productSpecs = [
  ["Format", "300mL sparkling aluminum cans"],
  ["Flavours", "Classic · Strawberry · Rhubarb Ginger"],
  ["Shelf Life", "12 months"],
  ["Minimum Order", "Contact us for details"],
  ["Produced", "Locally in Atlantic Canada"],
];

export default function WholesalePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#F7E01A] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="inline-block bg-[#1B4D2E] text-[#F7E01A] font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Wholesale & Partnerships
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-[#1B4D2E] leading-tight mb-6">
            Let's Get Main Squeeze<br />on Your Shelves.
          </h1>
          <p className="text-[#1B4D2E]/70 text-xl max-w-2xl mx-auto mb-10">
            Premium lemonade your customers will love — and come back for.
          </p>
          <a href="#inquiry" className="inline-block bg-[#1B4D2E] text-white font-bold px-10 py-4 rounded-full hover:bg-white hover:text-[#1B4D2E] transition-colors text-sm tracking-wide">
            Request Wholesale Info ↓
          </a>
        </div>
      </section>

      {/* WHY MAIN SQUEEZE */}
      <section className="bg-[#FAFAF7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#5A9A3A] font-bold uppercase tracking-widest text-xs mb-3">Why Main Squeeze</p>
            <h2 className="text-4xl font-black text-[#1B4D2E]">A Brand Your Customers Will Actually Talk About.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-[#F7E01A] transition-colors">
                <div className="text-4xl mb-4">{r.icon}</div>
                <h3 className="font-black text-[#1B4D2E] text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH + PRODUCT SPECS */}
      <section className="bg-[#1B4D2E] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black text-white mb-8">Perfect For:</h2>
            <ul className="space-y-4">
              {partners.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/70 text-sm">
                  <span className="w-2 h-2 rounded-full bg-[#F7E01A] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-[#F7E01A] font-black text-xl mb-8">The Product</h3>
            <dl className="space-y-5">
              {productSpecs.map(([key, val]) => (
                <div key={key} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                  <dt className="text-white/40 text-xs uppercase tracking-widest mb-1">{key}</dt>
                  <dd className="text-white font-semibold text-sm">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="inquiry" className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1B4D2E] mb-2">Request Wholesale Information</h2>
            <p className="text-gray-500 text-sm">We typically respond within 1–2 business days.</p>
          </div>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">First & Last Name</label>
                <input type="text" placeholder="Jane Smith" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Business Name</label>
                <input type="text" placeholder="Smith Café" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Phone (optional)</label>
                <input type="tel" placeholder="+1 902 555 0000" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Type of Business</label>
              <select className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F7E01A]">
                <option value="">Select…</option>
                <option>Café</option>
                <option>Restaurant</option>
                <option>Grocery</option>
                <option>Hotel & Resort</option>
                <option>Food Truck</option>
                <option>Event</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Message</label>
              <textarea rows={5} placeholder="Tell us about your business and what you're looking for…" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A] resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#1B4D2E] text-white font-black py-4 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors tracking-wide">
              Send My Request
            </button>
            <p className="text-center text-xs text-gray-400">
              Or email us at{" "}
              <a href="mailto:hello@mainsqueezelemonadeco.com" className="text-[#1B4D2E] hover:underline font-medium">
                hello@mainsqueezelemonadeco.com
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
