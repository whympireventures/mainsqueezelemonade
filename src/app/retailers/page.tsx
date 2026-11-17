import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, MapPin, Megaphone, Navigation, Phone, Store } from "lucide-react";
import { CASE_PRICE_CENTS, PHONE, PHONE_HREF, dollars, mailto } from "@/lib/catalog";
import {
  PROVINCES,
  type Retailer,
  directionsHref,
  domain,
  fullAddress,
  mapEmbedSrc,
  retailers,
  telHref,
} from "@/lib/retailers";
import { btnPrimary, btnPrimarySmall, btnSecondary, btnSecondarySmall, textLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Where to Buy | Main Squeeze Lemonade Co.",
  description:
    "Find Main Squeeze sparkling lemonade at shops, cafés and taprooms across Atlantic Canada, starting with Good Robot Brewing Co. in Elmsdale, Nova Scotia.",
};

const byProvince = (Object.keys(PROVINCES) as Retailer["province"][])
  .map((code) => ({ code, name: PROVINCES[code], list: retailers.filter((r) => r.province === code) }))
  .filter((g) => g.list.length > 0);

const iconRow = "flex gap-3 items-start";
const iconClass = "w-5 h-5 mt-0.5 shrink-0 text-lagoon-ink";

function RetailerCard({ r }: { r: Retailer }) {
  return (
    <li className="rounded-[1.25rem] border-2 border-navy bg-white overflow-hidden shadow-[0_4px_0_var(--color-navy)] grid md:grid-cols-[1.1fr_1fr]">
      <div className="p-5 md:p-8">
        <div className="flex items-center gap-4">
          <Image
            src={r.logo}
            alt={`${r.name} logo`}
            width={500}
            height={500}
            sizes="96px"
            className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl border border-navy/10 bg-white object-contain p-1"
          />
          <div>
            <h3 className="font-sans not-italic font-extrabold text-navy text-xl md:text-2xl leading-tight">
              {r.name}
            </h3>
            <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-shallows px-3 py-1 text-sm font-semibold text-navy">
              <Store className="w-4 h-4" aria-hidden />
              {r.kind} · {r.town}
            </p>
          </div>
        </div>

        <ul className="mt-6 space-y-3.5 text-navy text-base md:text-[1.0625rem]">
          <li className={iconRow}>
            <MapPin className={iconClass} aria-hidden />
            <span>
              <span className="sr-only">Address: </span>
              {r.street}
              <br />
              {r.town}, {r.province} {r.postal}
            </span>
          </li>
          <li className={iconRow}>
            <Phone className={iconClass} aria-hidden />
            <a href={telHref(r.phone)} className={`${textLink} tabular-nums`}>
              <span className="sr-only">Phone: </span>
              {r.phone}
            </a>
          </li>
          <li className={iconRow}>
            <Globe className={iconClass} aria-hidden />
            <a href={r.website} target="_blank" rel="noopener noreferrer" className={`${textLink} inline-flex items-center gap-1`}>
              {domain(r.website)}
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
          </li>
        </ul>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={directionsHref(r)} target="_blank" rel="noopener noreferrer" className={btnPrimarySmall}>
            <Navigation className="w-4 h-4" aria-hidden />
            Get directions
          </a>
          <a
            href={r.website}
            target="_blank"
            rel="noopener noreferrer"
            className={btnSecondarySmall}
          >
            View the menu
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <iframe
        src={mapEmbedSrc(r)}
        title={`Map of ${r.name}, ${fullAddress(r)}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-64 md:h-full md:min-h-80 border-0 border-t-2 md:border-t-0 md:border-l-2 border-navy bg-shallows"
      />
    </li>
  );
}

export default function RetailersPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-shallows py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-navy px-3.5 py-1 text-sm font-extrabold text-navy">
            <MapPin className="w-4 h-4" aria-hidden />
            Where to buy
          </p>
          <h1 className="mt-5 text-navy text-[2.5rem] md:text-6xl leading-[1.02] max-w-3xl">
            Find an ice-cold can near you.
          </h1>
          <p className="mt-5 text-navy-2 text-lg md:text-xl leading-relaxed max-w-[52ch]">
            Main Squeeze is pouring at these spots across Atlantic Canada. We add new stockists as they
            come on board, so check back often.
          </p>
          <p className="mt-6 text-navy font-semibold">
            <span className="font-extrabold tabular-nums">{retailers.length}</span>{" "}
            {retailers.length === 1 ? "location" : "locations"} in{" "}
            {byProvince.map((g) => g.name).join(", ")}
          </p>
        </div>
      </section>

      {/* LISTINGS */}
      <section aria-label="Retailers" className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6 space-y-14">
          {byProvince.map((g) => (
            <div key={g.code}>
              <h2 className="text-navy text-[1.75rem] md:text-4xl leading-tight">{g.name}</h2>
              <ul className="mt-6 space-y-8">
                {g.list.map((r) => (
                  <RetailerCard key={r.name} r={r} />
                ))}
              </ul>
            </div>
          ))}

          <div className="rounded-[1.25rem] bg-sand p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1">
              <h2 className="font-sans not-italic font-extrabold text-navy text-xl">Don&apos;t see your local shop?</h2>
              <p className="mt-1 text-navy-2">Tell us where you shop and we&apos;ll reach out to them.</p>
            </div>
            <a href={mailto("Stock request", "I'd love to buy Main Squeeze at:\n\nShop name: \nTown: ")} className={btnSecondary}>
              Suggest a shop
            </a>
          </div>
        </div>
      </section>

      {/* RETAILER CTA */}
      <section aria-labelledby="squeeze-title" className="bg-navy text-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-center">
          <div>
            <p className="text-yellow font-extrabold uppercase tracking-widest text-sm">For retailers</p>
            <h2 id="squeeze-title" className="mt-3 text-yellow text-[2.5rem] md:text-6xl leading-[1.02]">
              Squeeze the opportunity.
            </h2>
            <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-[52ch]">
              Give your customers a sparkling lemonade with a Bahamian story and real sugar. Stock it
              in your cooler, taproom or shelf and get listed right here on this page.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/wholesale#order" className={btnPrimary}>
                Start your opening order
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white text-white font-extrabold px-7 h-[3.125rem] md:h-[3.25rem] text-[1.0625rem] tabular-nums hover:bg-white hover:text-navy transition-colors focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-yellow"
              >
                <Phone className="w-5 h-5" aria-hidden />
                {PHONE}
              </a>
            </div>
          </div>

          <ul className="grid gap-4">
            {[
              { figure: dollars(CASE_PRICE_CENTS), label: "per 24-can case, intro price" },
              { figure: "3", label: "sparkling flavours: Classic, Strawberry and Rhubarb Ginger" },
            ].map((s) => (
              <li key={s.label} className="rounded-[1.25rem] bg-white/10 p-5 flex items-baseline gap-4">
                <span className="text-yellow font-extrabold text-[2.25rem] leading-none tabular-nums shrink-0">{s.figure}</span>
                <span className="text-white/85">{s.label}</span>
              </li>
            ))}
            <li className="rounded-[1.25rem] bg-yellow text-navy p-5 flex gap-4 items-start">
              <Megaphone className="w-7 h-7 shrink-0" aria-hidden />
              <span>
                <span className="block font-extrabold">Marketing in every case</span>
                A &ldquo;Sold Here&rdquo; sign and shelf talker ship with each case.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
