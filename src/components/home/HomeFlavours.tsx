import Image from "next/image";
import Link from "next/link";
import { flavours, type FlavourId } from "@/lib/catalog";
import { textLink } from "@/components/ui";

// Homepage copy for each flavour (Main_Squeeze_Homepage.md). Colours and cans come from the catalog.
const copy: Record<FlavourId, { tag: string; title: string; body: string; notes: string[] }> = {
  classic: {
    tag: "The original",
    title: "Where it all started.",
    body: "Our take on the lemonade every Bahamian grows up on: lime, sugar and water. We added our own twist with a crisp sparkle, bright and just sweet enough. The one to start with.",
    notes: ["Lemon + lime", "Sparkling", "The original"],
  },
  strawberry: {
    tag: "The first batch",
    title: "The one that started it all.",
    body: "A strawberry lemonade built on the classic Bahamian recipe, the very first one we ever made, for a family Independence Day party in Nassau in 2012.",
    notes: ["Strawberry", "Lemon", "Sparkling"],
  },
  "rhubarb-ginger": {
    tag: "The hero",
    title: "Two islands, one can.",
    body: "The first time we tasted rhubarb was here on Prince Edward Island, and our first thought was: how would this taste as a lemonade? Rhubarb that tastes like the Maritimes, ginger that brings the island warmth. You will not find this one anywhere else.",
    notes: ["Rhubarb", "Ginger warmth", "Sparkling"],
  },
};

const order: FlavourId[] = ["classic", "strawberry", "rhubarb-ginger"];
const lineup = order.map((id) => flavours.find((f) => f.id === id)!);

export default function HomeFlavours() {
  return (
    <section id="flavours" aria-labelledby="flavours-title" className="bg-shallows py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 id="flavours-title" className="text-navy text-[2rem] md:text-5xl leading-[1.05] text-center mb-10 md:mb-12">
          Three ways to squeeze.
        </h2>

        <ul className="grid gap-6 md:grid-cols-3">
          {lineup.map((f) => {
            const c = copy[f.id];
            return (
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
                    <Image src="/images/hero/plank-strip.webp" alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-sans not-italic font-extrabold text-xl md:text-[1.375rem] leading-tight" style={{ color: f.ink }}>
                    {f.short} <span className="text-navy-2 font-semibold text-base">· {c.tag}</span>
                  </h3>
                  <p className="mt-3 font-extrabold text-navy">{c.title}</p>
                  <p className="mt-2 text-navy text-base leading-relaxed">{c.body}</p>
                  <ul aria-label="Tasting notes" className="mt-auto pt-5 flex flex-wrap gap-1.5">
                    {c.notes.map((n) => (
                      <li
                        key={n}
                        className="rounded-full px-3 py-1 text-[0.8125rem] font-semibold text-navy"
                        style={{ backgroundColor: `${f.can}55` }}
                      >
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 text-center">
          <Link href="/flavours" className={textLink}>
            More about the flavours
          </Link>
        </p>
      </div>
    </section>
  );
}
