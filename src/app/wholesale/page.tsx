import type { Metadata } from "next";
import Link from "next/link";
import { OrderProvider } from "@/lib/order-context";
import { mailto } from "@/lib/catalog";
import { btnSecondary } from "@/components/ui";
import SpecStrip from "@/components/home/SpecStrip";
import FlavourGrid from "@/components/home/FlavourGrid";
import ShelfMath from "@/components/home/ShelfMath";
import OrderSection from "@/components/home/OrderSection";
import StickyOrderBar from "@/components/home/StickyOrderBar";

export const metadata: Metadata = {
  title: "Wholesale | Main Squeeze Lemonade Co.",
  description:
    "Stock Main Squeeze sparkling lemonade: a Bahamian family recipe in 355 mL cans, 24 per case, with a 12-month shelf life. Introductory price $54 a case.",
};

// The trade tools that used to live on the homepage: case ordering, shelf math and the order form.
export default function WholesalePage() {
  return (
    <OrderProvider>
      <section aria-labelledby="wholesale-title" className="bg-yellow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-navy font-extrabold uppercase tracking-widest text-sm mb-4">For retailers</p>
          <h1 id="wholesale-title" className="text-navy text-[2.5rem] md:text-6xl leading-[1.02]">
            Stock Main Squeeze.
          </h1>
          <p className="mt-5 text-navy font-semibold text-lg md:text-xl max-w-2xl mx-auto">
            <strong className="font-extrabold tabular-nums">$54</strong> per 24-can case at our introductory
            price, a <strong className="font-extrabold tabular-nums">35–50% margin</strong> at suggested retail.
            12-month shelf life, no cold chain needed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="#order" className={btnSecondary}>
              Order wholesale
            </Link>
            <a
              href={mailto("Sell sheet request", "Please send me the Main Squeeze sell sheet.\n\nBusiness name: ")}
              className={btnSecondary}
            >
              Get the sell sheet
            </a>
          </div>
        </div>
      </section>
      <SpecStrip />
      <FlavourGrid />
      <ShelfMath />
      <OrderSection />
      <StickyOrderBar />
    </OrderProvider>
  );
}
