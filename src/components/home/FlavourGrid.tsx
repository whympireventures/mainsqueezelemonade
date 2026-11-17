"use client";

import Image from "next/image";
import { CANS_PER_CASE, CASE_PRICE_CENTS, dollars, flavours, formatUpc } from "@/lib/catalog";
import { useOrder } from "@/lib/order-context";
import { btnSecondary } from "@/components/ui";
import CaseStepper from "./CaseStepper";

export default function FlavourGrid() {
  const { addStarter } = useOrder();

  return (
    <section id="flavours" aria-labelledby="flavours-title" className="bg-shallows py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-12">
          <h2 id="flavours-title" className="text-navy text-[2rem] md:text-5xl leading-[1.05]">
            Three flavours. One easy order.
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-navy-2 font-semibold text-[1.0625rem] md:text-xl">
            Every flavour starts from our Bahamian traditional recipe. Order any combination, by the case.
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {flavours.map((f) => (
            <li key={f.id} className="bg-white rounded-[1.25rem] overflow-hidden flex flex-col">
              <div className="relative pt-8 flex flex-col items-center" style={{ backgroundColor: f.can }}>
                <Image
                  src={f.image}
                  alt={`${f.name} can`}
                  width={720}
                  height={2026}
                  sizes="(max-width: 768px) 40vw, 12vw"
                  className="relative z-10 h-[19rem] w-auto -mb-7 drop-shadow-[0_10px_12px_rgba(5,35,61,0.35)]"
                />
                <div className="relative w-full h-14">
                  <Image
                    src="/images/hero/plank-strip.webp"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-sans not-italic font-extrabold text-xl md:text-[1.375rem] leading-tight" style={{ color: f.ink }}>
                  {f.short}
                </h3>
                <p className="mt-0.5 text-navy-2 text-sm" lang="fr">{f.fr}</p>
                <p className="mt-3 text-navy text-base leading-relaxed">{f.description}</p>

                <ul aria-label="Tasting notes" className="mt-4 flex flex-wrap gap-1.5">
                  {f.notes.map((n) => (
                    <li
                      key={n}
                      className="rounded-full px-3 py-1 text-[0.8125rem] font-semibold text-navy"
                      style={{ backgroundColor: `${f.can}55` }}
                    >
                      {n}
                    </li>
                  ))}
                </ul>

                <dl className="mt-4 pt-4 border-t border-navy/10 text-sm text-navy-2 space-y-1">
                  <div className="flex gap-2">
                    <dt className="font-semibold text-navy shrink-0">Great for</dt>
                    <dd>{f.greatFor}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-navy">Case</dt>
                    <dd>{CANS_PER_CASE} × 355 mL · {dollars(CASE_PRICE_CENTS)}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="font-semibold text-navy">UPC</dt>
                    <dd className="tabular-nums">{formatUpc(f.upc)}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-5">
                  <CaseStepper flavour={f} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <button type="button" onClick={addStarter} className={btnSecondary}>
            Add one case of each ({dollars(CASE_PRICE_CENTS * flavours.length)})
          </button>
        </div>
      </div>
    </section>
  );
}
