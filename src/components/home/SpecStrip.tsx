import { Cylinder, Package, Sparkles, Warehouse, type LucideIcon } from "lucide-react";

/** The same four items as the sell sheet's icon row. */
const specs: { icon: LucideIcon; label: string }[] = [
  { icon: Sparkles, label: "Sparkling" },
  { icon: Cylinder, label: "355 mL sleek cans" },
  { icon: Package, label: "24 cans per case" },
  { icon: Warehouse, label: "12-month shelf life" },
];

export default function SpecStrip() {
  return (
    <section aria-label="Product details" className="bg-white border-b border-navy/10">
      <ul className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
        {specs.map(({ icon: Icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-3 text-center">
            <span className="w-14 h-14 rounded-full border-2 border-navy flex items-center justify-center">
              <Icon className="w-6 h-6 text-navy" strokeWidth={1.75} aria-hidden />
            </span>
            <span className="font-extrabold text-navy text-[0.9375rem] md:text-base">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
