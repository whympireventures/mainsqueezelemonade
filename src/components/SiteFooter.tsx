import Image from "next/image";
import Link from "next/link";
import { ORDER_EMAIL, PHONE, PHONE_HREF, mailto } from "@/lib/catalog";
import { CookieSettingsButton } from "@/components/ConsentBanner";

const linkClass =
  "text-white/80 hover:text-white underline-offset-3 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow rounded-sm";

const headingClass = "font-sans not-italic font-extrabold text-white text-base mb-4";

export default function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <Image
              src="/images/brand/logo-full.png"
              alt="Main Squeeze Lemonade Co."
              width={1252}
              height={995}
              sizes="300px"
              className="h-28 w-auto mb-6"
            />
            <p className="font-display italic font-extrabold text-yellow text-2xl md:text-[1.75rem] leading-tight max-w-xs">
              Born in The Bahamas. Reborn in the Maritimes.
            </p>
          </div>

          <nav aria-labelledby="footer-order">
            <h2 id="footer-order" className={headingClass}>Order</h2>
            <ul className="space-y-3 text-[0.9375rem]">
              <li><Link href="/flavours" className={linkClass}>Flavours</Link></li>
              <li><Link href="/retailers" className={linkClass}>Find us</Link></li>
              <li><Link href="/wholesale#order" className={linkClass}>Order wholesale</Link></li>
              <li><a href={mailto("Sell sheet request")} className={linkClass}>Sell sheet</a></li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-company">
            <h2 id="footer-company" className={headingClass}>Company</h2>
            <ul className="space-y-3 text-[0.9375rem]">
              <li><Link href="/story" className={linkClass}>Our story</Link></li>
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>Order desk</h2>
            <ul className="space-y-3 text-[0.9375rem]">
              <li><a href={`mailto:${ORDER_EMAIL}`} className={`${linkClass} break-all`}>{ORDER_EMAIL}</a></li>
              <li><a href={PHONE_HREF} className={`${linkClass} tabular-nums`}>{PHONE}</a></li>
              <li className="text-white/80">Stratford, Prince Edward Island</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-[0.9375rem] text-white/80">
          Want Main Squeeze at your local shop?{" "}
          <a href={mailto("Stock request")} className="text-yellow font-semibold underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow rounded-sm">
            Tell us where you shop.
          </a>
        </p>

        <div className="border-t border-white/15 mt-8 pt-6 flex flex-col md:flex-row gap-2 md:gap-6 text-sm text-white/70">
          <p>Family-owned. Atlantic Canada-made.</p>
          <p>© {new Date().getFullYear()} Main Squeeze Lemonade Company Inc. Stratford, Prince Edward Island.</p>
          <CookieSettingsButton className="text-left md:ml-auto underline underline-offset-3 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow rounded-sm" />
        </div>
      </div>
    </footer>
  );
}
