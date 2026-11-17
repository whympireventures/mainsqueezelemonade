"use client";

import { BookOpen, MapPin, Megaphone, Package, Sun, type LucideIcon } from "lucide-react";
import {
  CAN_COST_CENTS,
  CASE_PRICE_CENTS,
  SHELF_PRICES_CENTS,
  dollars,
  marginPct,
  money,
  profitPerCan,
  profitPerCase,
} from "@/lib/catalog";
import { useOrder } from "@/lib/order-context";

const reasons: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: BookOpen,
    title: "A story shoppers repeat.",
    body: "Lime-and-sugar lemonade is a Bahamian tradition every islander grows up on. Ours comes from the founders of The Lemonade Stand, Nassau's award-winning lemonade boutique, and its loyal following, the Lemonites.",
  },
  {
    icon: MapPin,
    title: "Family-owned, Atlantic Canada-made.",
    body: "A PEI family business, made in the region. The local pick shoppers here look for.",
  },
  {
    icon: Sun,
    title: "Real sugar, never corn syrup.",
    body: "Quality lemon and lime concentrate, real sugar and natural flavours.",
  },
  {
    icon: Package,
    title: "Easy to carry.",
    body: "A 12-month shelf life, 24 cans to a case, bilingual labels and scannable UPCs. Store it in the back, chill it to sell.",
  },
  {
    icon: Megaphone,
    title: "Marketing in every case.",
    body: "Each case comes with a marketing pack: a “Sold Here” sign and a shelf talker to put up with your display.",
  },
];

/** "$2.25" — the exact per-can cost; three places only when it has a half cent (e.g. "$1.875"). */
const canCost = `$${(CAN_COST_CENTS / 100).toFixed(Number.isInteger(CAN_COST_CENTS) ? 2 : 3)}`;

export default function ShelfMath() {
  const { shelf, setShelf, totalCases } = useOrder();

  return (
    <section aria-labelledby="shelf-title" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
        <div>
          <h2 id="shelf-title" className="text-navy text-[2rem] md:text-5xl leading-[1.05]">
            Built to earn its shelf space.
          </h2>
          <ul className="mt-8 space-y-7">
            {reasons.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <span className="mt-0.5 w-11 h-11 shrink-0 rounded-full border-2 border-navy flex items-center justify-center">
                  <Icon className="w-5 h-5 text-navy" strokeWidth={1.75} aria-hidden />
                </span>
                <div className="max-w-[60ch]">
                  <h3 className="font-sans not-italic font-extrabold text-navy text-lg">{title}</h3>
                  <p className="mt-1 text-navy-2 text-base md:text-[1.0625rem] leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.25rem] border-2 border-navy overflow-hidden">
          <div className="grid sm:grid-cols-2">
            <div className="bg-navy text-white p-6 md:p-7">
              <span className="inline-block rounded-full bg-frangipani px-2.5 py-0.5 text-xs font-extrabold text-navy">
                Intro price
              </span>
              <p className="mt-3">
                <span className="block text-yellow font-extrabold text-[3.5rem] md:text-[4.5rem] leading-none tabular-nums">
                  {dollars(CASE_PRICE_CENTS)}
                </span>
                <span className="block mt-1 font-semibold">per 24-can case</span>
              </p>
              <p className="mt-2 text-white/85 tabular-nums">That&apos;s {canCost} a can</p>
            </div>
            <div className="bg-yellow text-navy p-6 md:p-7 flex flex-col justify-center">
              <p className="font-semibold">Suggested retail</p>
              <p className="mt-1 font-extrabold text-[1.75rem] xl:text-[2rem] leading-tight tabular-nums whitespace-nowrap">
                {money(SHELF_PRICES_CENTS[0])}–{money(SHELF_PRICES_CENTS[SHELF_PRICES_CENTS.length - 1])}
              </p>
              <p className="font-semibold">a can</p>
            </div>
          </div>

          <div className="p-6 md:p-7 bg-white">
            <fieldset>
              <legend className="font-extrabold text-navy">Your shelf price</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {SHELF_PRICES_CENTS.map((cents) => (
                  <label key={cents} className="cursor-pointer">
                    <input
                      type="radio"
                      name="shelf-price"
                      value={cents}
                      checked={shelf === cents}
                      onChange={() => setShelf(cents)}
                      className="peer sr-only"
                    />
                    <span className="inline-flex items-center h-11 px-5 rounded-full border-[1.5px] border-seaglass bg-white text-navy font-extrabold tabular-nums peer-checked:bg-lagoon peer-checked:border-navy peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy">
                      {money(cents)}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <dl aria-live="polite" className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-shallows p-3">
                <dt className="text-sm text-navy-2">You keep</dt>
                <dd className="mt-1 font-extrabold text-palm-ink text-xl md:text-2xl tabular-nums">
                  {money(profitPerCan(shelf))}
                </dd>
                <dd className="text-sm text-navy-2">a can</dd>
              </div>
              <div className="rounded-xl bg-shallows p-3">
                <dt className="text-sm text-navy-2">Margin</dt>
                <dd className="mt-1 font-extrabold text-palm-ink text-xl md:text-2xl tabular-nums">
                  {marginPct(shelf)}%
                </dd>
              </div>
              <div className="rounded-xl bg-shallows p-3">
                <dt className="text-sm text-navy-2">Profit</dt>
                <dd className="mt-1 font-extrabold text-palm-ink text-xl md:text-2xl tabular-nums">
                  {money(profitPerCase(shelf))}
                </dd>
                <dd className="text-sm text-navy-2">per case</dd>
              </div>
            </dl>

            {totalCases > 0 && (
              <p aria-live="polite" className="mt-4 text-navy font-semibold">
                On your order:{" "}
                <span className="font-extrabold text-palm-ink tabular-nums">
                  {money(profitPerCase(shelf) * totalCases)} profit
                </span>{" "}
                on {totalCases} {totalCases === 1 ? "case" : "cases"}
              </p>
            )}

            <p className="mt-5 text-[0.8125rem] md:text-sm text-navy-2 leading-snug">
              Prices in CAD, plus applicable taxes and container deposit. Margin = (shelf price −{" "}
              {canCost}) ÷ shelf price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
