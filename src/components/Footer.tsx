import Link from "next/link";
import Image from "next/image";

const shopLinks = [
  { label: "Our Flavours", href: "/flavours" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Events", href: "/events" },
];

const companyLinks = [
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const partnerLinks = [
  { label: "Partner With Us", href: "/wholesale" },
  { label: "Book an Event", href: "/events" },
  { label: "Get In Touch", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B4D2E] text-white">
      {/* Newsletter banner */}
      <div className="bg-[#F7E01A]">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-black text-[#1B4D2E] text-xl">Don't miss a drop.</p>
            <p className="text-[#1B4D2E]/70 text-sm">New flavours, events, and launch news — right to your inbox.</p>
          </div>
          <form className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-5 py-3 rounded-full text-[#1a1a1a] text-sm outline-none focus:ring-2 focus:ring-[#1B4D2E] flex-1 md:w-72"
            />
            <button
              type="submit"
              className="bg-[#1B4D2E] text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-[#2D6A3F] transition-colors whitespace-nowrap"
            >
              Sign Me Up
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/brand/logo.png"
              alt="Main Squeeze Lemonade Co."
              width={100}
              height={100}
              className="h-20 w-auto mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Island-born lemonade. Made for Atlantic Canada.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/50 hover:text-[#F7E01A] text-sm font-medium transition-colors">Facebook</a>
              <a href="#" className="text-white/50 hover:text-[#F7E01A] text-sm font-medium transition-colors">Instagram</a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[#F7E01A] font-black uppercase tracking-widest text-xs mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#F7E01A] font-black uppercase tracking-widest text-xs mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Let's Talk */}
          <div>
            <h4 className="text-[#F7E01A] font-black uppercase tracking-widest text-xs mb-5">Let's Talk</h4>
            <ul className="space-y-3">
              {partnerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-xs mt-6 leading-relaxed">
              hello@mainsqueezelemonadeco.com<br />
              Prince Edward Island, Canada
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2025 Main Squeeze Lemonade Co. All rights reserved.
          </p>
          <p className="text-white/30 text-xs italic">
            Born on one island. Bred on another. Made for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
