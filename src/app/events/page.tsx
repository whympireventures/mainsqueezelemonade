import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events | Main Squeeze Lemonade Co.",
  description:
    "Book Main Squeeze Lemonade Co. for your next festival, market, wedding, corporate event, or community activation across Atlantic Canada.",
};

const eventTypes = [
  { icon: "🌿", label: "Farmers Markets", body: "Fresh, local, and community-driven. Main Squeeze is a natural fit." },
  { icon: "🎪", label: "Festivals & Fairs", body: "High energy, big crowds, bold flavours. We're built for it." },
  { icon: "💍", label: "Weddings & Celebrations", body: "Elegant, refreshing, and crowd-pleasing. Perfect for your drinks table." },
  { icon: "🏢", label: "Corporate Events", body: "Impress your guests with something premium, local, and memorable." },
  { icon: "🏖️", label: "Summer Pop-Ups", body: "Wherever the sun is shining, Main Squeeze belongs." },
  { icon: "🤝", label: "Community Events", body: "We're part of Atlantic Canada's fabric. Let's show up together." },
];

const offerings = [
  "Branded can supply for your event bar or drinks station",
  "On-site sampling and activation appearances",
  "Custom event partnership packages",
  "Signage, branded materials, and co-marketing opportunities",
];

export default function EventsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1B4D2E] py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-0 grid md:grid-cols-2 gap-12 items-end">
          <div className="pb-20">
            <p className="text-[#F7E01A] font-bold uppercase tracking-widest text-xs mb-4">Events</p>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Main Squeeze<br />at Your Next Event.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              From farmers markets to wedding receptions — we bring the refreshment, the vibe, and the story. Let's make your event unforgettable.
            </p>
            <a href="#booking" className="inline-block bg-[#F7E01A] text-[#1B4D2E] font-bold px-8 py-4 rounded-full hover:bg-white transition-colors text-sm tracking-wide">
              Book Us for an Event ↓
            </a>
          </div>
          <div className="self-end">
            <Image
              src="/images/events/lifestyle-market.jpg"
              alt="Main Squeeze at a market"
              width={600}
              height={450}
              className="rounded-t-3xl object-cover w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="bg-[#FAFAF7] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#5A9A3A] font-bold uppercase tracking-widest text-xs mb-3">Events We Love</p>
            <h2 className="text-4xl font-black text-[#1B4D2E]">We Show Up Where It Matters.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((e) => (
              <div key={e.label} className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-[#F7E01A] transition-colors">
                <div className="text-4xl mb-4">{e.icon}</div>
                <h3 className="font-black text-[#1B4D2E] text-lg mb-2">{e.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#F7E01A] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#1B4D2E]/60 font-bold uppercase tracking-widest text-xs mb-3">What We Offer</p>
            <h2 className="text-4xl font-black text-[#1B4D2E] mb-6">
              What a Main Squeeze<br />Event Looks Like
            </h2>
            <p className="text-[#1B4D2E]/70 leading-relaxed mb-8">
              Whether we're pouring at your market booth, supplying cans for your bar, or creating a custom branded lemonade activation — we bring the energy, the flavour, and the Bahamian soul.
            </p>
            <ul className="space-y-4 mb-8">
              {offerings.map((o) => (
                <li key={o} className="flex items-start gap-3 text-[#1B4D2E] text-sm font-medium">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-[#1B4D2E] shrink-0" />

                  {o}
                </li>
              ))}
            </ul>
            <p className="text-[#1B4D2E]/50 text-xs italic">
              Availability is limited — reach out early to secure your date.
            </p>
          </div>
          <div>
            <Image
              src="/images/events/events-lifestyle.jpg"
              alt="Main Squeeze event energy"
              width={600}
              height={450}
              className="rounded-3xl object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="bg-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1B4D2E] mb-2">Book Main Squeeze for an Event</h2>
            <p className="text-gray-500 text-sm">We respond within 1–2 business days.</p>
          </div>
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">First & Last Name</label>
                <input type="text" placeholder="Jane Smith" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Email</label>
                <input type="email" placeholder="you@example.com" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Event Name / Type</label>
                <input type="text" placeholder="Charlottetown Farmers Market" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Event Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Location / Venue</label>
                <input type="text" placeholder="Charlottetown, PEI" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Est. Attendance</label>
                <input type="text" placeholder="e.g. 500" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Message / Details</label>
              <textarea rows={5} placeholder="Tell us about your event…" className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A] resize-none" />
            </div>
            <button type="submit" className="w-full bg-[#1B4D2E] text-white font-black py-4 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors tracking-wide">
              Submit Event Inquiry
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
