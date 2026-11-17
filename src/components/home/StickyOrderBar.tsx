"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { casesLabel, dollars } from "@/lib/catalog";
import { useOrder } from "@/lib/order-context";
import { btnPrimarySmall } from "@/components/ui";

/**
 * Slides up once the first case is added, and steps aside while the order
 * section itself is on screen.
 */
export default function StickyOrderBar() {
  const { totalCases, totalCents } = useOrder();
  const [orderVisible, setOrderVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("order");
    if (!target) return;
    const io = new IntersectionObserver(([entry]) => setOrderVisible(entry.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  const shown = totalCases > 0 && !orderVisible;

  return (
    <div
      aria-hidden={!shown}
      inert={!shown}
      className={`fixed z-40 inset-x-0 bottom-0 md:inset-x-auto md:right-6 md:bottom-6 transition-[transform,opacity] duration-300 motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-full md:translate-y-[150%] opacity-0"
      }`}
    >
      <div className="bg-white border-t-[3px] border-lagoon shadow-[0_-6px_24px_-8px_rgba(5,35,61,0.35)] md:rounded-full md:border-[3px] md:shadow-[0_10px_30px_-8px_rgba(5,35,61,0.4)] px-4 py-3 md:pl-6 md:pr-2 md:py-2 flex items-center justify-between gap-4">
        <p className="font-extrabold text-navy tabular-nums" aria-live="polite">
          {casesLabel(totalCases)} for {dollars(totalCents)}
        </p>
        <Link href="#order" className={btnPrimarySmall}>
          Review order
        </Link>
      </div>
    </div>
  );
}
