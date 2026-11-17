import Link from "next/link";
import { Check, MapPin } from "lucide-react";
import { mailto } from "@/lib/catalog";
import { retailers } from "@/lib/retailers";
import { btnPrimary, btnSecondary } from "@/components/ui";

const retailerPoints = [
  "12-month shelf life, no cold chain needed",
  "355 mL sleek cans, 24 per case",
  "A story your customers will repeat",
];

/** Where to buy (from lib/retailers) plus the short pitch to stockists. */
export default function FindUs() {
  return (
    <section className="bg-sand py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-10 md:grid-cols-2">
        <div id="find-us" className="rounded-[1.25rem] bg-white p-7 md:p-10">
          <p className="text-palm-ink font-extrabold uppercase tracking-widest text-sm">Find us</p>
          <h2 id="find-us-title" className="mt-3 text-navy text-[2rem] md:text-4xl leading-tight">
            Now pouring in Halifax.
          </h2>
          <ul className="mt-6 space-y-4">
            {retailers.map((r) => (
              <li key={r.name} className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-lagoon-ink" aria-hidden />
                <span>
                  <span className="font-extrabold text-navy">{r.name}</span>
                  <span className="text-navy-2"> — {r.town}, {r.province}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-navy-2">More stores across Atlantic Canada coming soon.</p>
          <div className="mt-7">
            <Link href="/retailers" className={btnSecondary}>
              Find a can
            </Link>
          </div>
        </div>

        <div className="rounded-[1.25rem] bg-navy text-white p-7 md:p-10">
          <p className="text-yellow font-extrabold uppercase tracking-widest text-sm">For retailers</p>
          <h2 id="retailers-title" className="mt-3 text-yellow text-[2rem] md:text-4xl leading-tight">
            Stock Main Squeeze.
          </h2>
          <ul className="mt-6 space-y-4">
            {retailerPoints.map((p) => (
              <li key={p} className="flex gap-3 items-start text-white/90">
                <Check className="w-5 h-5 mt-0.5 shrink-0 text-yellow" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={mailto("Sell sheet request", "Please send me the Main Squeeze sell sheet.\n\nBusiness name: ")} className={btnPrimary}>
              Get the sell sheet
            </a>
          </div>
          <p className="mt-5">
            <Link href="/wholesale" className="text-white font-semibold underline underline-offset-3 hover:text-yellow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow rounded-sm">
              See wholesale pricing and order
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
