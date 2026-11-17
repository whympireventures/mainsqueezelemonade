"use client";

import { Minus, Plus } from "lucide-react";
import { useOrder } from "@/lib/order-context";
import type { Flavour } from "@/lib/catalog";

const stepBtn =
  "w-11 h-11 shrink-0 inline-flex items-center justify-center rounded-full border-2 border-navy bg-white text-navy hover:bg-shallows focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy disabled:opacity-35 disabled:pointer-events-none";

/** [−] count [+] for one flavour's cases, with 44px targets. */
export default function CaseStepper({ flavour }: { flavour: Flavour }) {
  const { cases, setCases } = useOrder();
  const count = cases[flavour.id];

  return (
    <div role="group" aria-label={`Cases of ${flavour.short}`} className="inline-flex items-center gap-2">
      <button
        type="button"
        className={stepBtn}
        onClick={() => setCases(flavour.id, count - 1)}
        disabled={count === 0}
        aria-label={`Remove a case of ${flavour.short}`}
      >
        <Minus className="w-5 h-5" aria-hidden />
      </button>
      <input
        type="number"
        inputMode="numeric"
        min={0}
        max={99}
        value={count}
        onChange={(e) => setCases(flavour.id, Number(e.target.value))}
        onFocus={(e) => e.target.select()}
        aria-label={`Cases of ${flavour.short}`}
        className="w-12 h-11 text-center font-extrabold text-lg text-navy tabular-nums bg-transparent rounded-lg [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus-visible:outline-3 focus-visible:outline-navy"
      />
      <button
        type="button"
        className={stepBtn}
        onClick={() => setCases(flavour.id, count + 1)}
        disabled={count >= 99}
        aria-label={`Add a case of ${flavour.short}`}
      >
        <Plus className="w-5 h-5" aria-hidden />
      </button>
    </div>
  );
}
