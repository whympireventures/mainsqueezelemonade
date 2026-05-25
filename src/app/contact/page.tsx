import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Main Squeeze Lemonade Co.",
  description:
    "Get in touch with Main Squeeze Lemonade Co. for wholesale inquiries, event bookings, retail opportunities, collaborations, and general questions.",
};

export default function ContactPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="bg-[#1B4D2E] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#F7E01A] font-bold uppercase tracking-widest text-xs mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Let's Talk Lemonade.
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Whether you want to carry our product, book us for an event, or just say hello — we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-[#FAFAF7] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12">

          {/* FORM — wider column */}
          <div className="md:col-span-3 bg-white rounded-3xl border border-gray-100 p-10">
            <h2 className="text-2xl font-black text-[#1B4D2E] mb-8">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">First & Last Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Business / Organization (optional)</label>
                <input
                  type="text"
                  placeholder="Your company or organization"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Reason for Inquiry</label>
                <select className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F7E01A]">
                  <option value="">Select…</option>
                  <option>Wholesale / Retail Partnership</option>
                  <option>Event Booking</option>
                  <option>General Inquiry</option>
                  <option>Media & Press</option>
                  <option>Collaboration</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-[#1B4D2E] mb-2">Message</label>
                <textarea
                  rows={6}
                  placeholder="What's on your mind?"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#F7E01A] resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1B4D2E] text-white font-black py-4 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* Contact info card */}
            <div className="bg-[#1B4D2E] rounded-3xl p-8 text-white">
              <h3 className="text-[#F7E01A] font-black text-lg mb-6">Contact Info</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                  <a
                    href="mailto:hello@mainsqueezelemonadeco.com"
                    className="text-white text-sm font-medium hover:text-[#F7E01A] transition-colors break-all"
                  >
                    hello@mainsqueezelemonadeco.com
                  </a>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white text-sm font-medium">Prince Edward Island, Atlantic Canada</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Social</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-white/60 hover:text-[#F7E01A] text-sm font-medium transition-colors">Facebook</a>
                    <a href="#" className="text-white/60 hover:text-[#F7E01A] text-sm font-medium transition-colors">Instagram</a>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-white/40 text-xs italic">We typically respond within 1–2 business days.</p>
                </div>
              </div>
            </div>

            {/* Quick links card */}
            <div className="bg-[#F7E01A] rounded-3xl p-8">
              <h3 className="font-black text-[#1B4D2E] text-lg mb-5">Looking for something specific?</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="/wholesale"
                  className="bg-[#1B4D2E] text-white font-bold py-3 px-6 rounded-full text-center text-sm hover:bg-white hover:text-[#1B4D2E] transition-colors"
                >
                  Wholesale & Partnerships →
                </Link>
                <Link
                  href="/events"
                  className="bg-white text-[#1B4D2E] font-bold py-3 px-6 rounded-full text-center text-sm hover:bg-[#1B4D2E] hover:text-white transition-colors"
                >
                  Book Us for an Event →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
