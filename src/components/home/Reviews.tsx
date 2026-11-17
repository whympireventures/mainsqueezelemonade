"use client";

import Image from "next/image";
import { useState } from "react";
import { Pause, Play } from "lucide-react";
import { flavours, type FlavourId } from "@/lib/catalog";

type Review = { quote: string; name: string; flavour?: FlavourId };

// First tasters' feedback. `flavour` sets the card colour and can; reviews
// that don't name a flavour get the yellow card with all three cans.
const reviews: Review[] = [
  { name: "Mike", flavour: "rhubarb-ginger", quote: "Rhubarb Ginger is like nothing I’ve ever tasted. Just the right amount of smooth spice." },
  { name: "Ryan", flavour: "strawberry", quote: "Best strawberry lemonade I’ve ever had, and I don’t even drink lemonade!" },
  { name: "Emily", flavour: "classic", quote: "Just the right amount of everything. The lime in the Classic makes it really good." },
  { name: "Audrey", flavour: "strawberry", quote: "Excellent packaging! Strawberry was my favourite. I wish I had a gallon of it." },
  { name: "Pete", flavour: "rhubarb-ginger", quote: "The Rhubarb Ginger was great. I’d buy this every week!" },
  { name: "Maggie", flavour: "classic", quote: "Classic was my favourite. I know this would pair well with some vodka!" },
  { name: "Jace", flavour: "rhubarb-ginger", quote: "I’m a true lemonade lover, and the Rhubarb Ginger was a shocking surprise. I enjoyed every bit of it." },
  { name: "Scienna", quote: "My first carbonated lemonade, and the flavours were really amplified. The smell was excellent!" },
  { name: "Patsy", flavour: "strawberry", quote: "Strawberry was my favourite. I could smell the flavour before I even took a sip, so I need this in a 6-pack!" },
  { name: "Tiff", quote: "When are you adding vodka to this? These are freaking awesome!" },
  { name: "Kirk", flavour: "classic", quote: "Bahamian pride in the Maritimes! The Classic reminds me of home, and it’s so refreshing ice cold." },
  { name: "David", quote: "Add vodka. That is all. 😂" },
  { name: "Jason", quote: "These are mighty wonderful! When are you putting them in a 6-pack?" },
  { name: "Bridgette", flavour: "rhubarb-ginger", quote: "Rhubarb Ginger is going to be a Maritime staple! My favourite of the three, and you’ve got a customer for life." },
];

// Split alternately so each row gets a mix of flavours.
const rows = [reviews.filter((_, i) => i % 2 === 0), reviews.filter((_, i) => i % 2 === 1)];

function Card({ review, index }: { review: Review; index: number }) {
  const f = review.flavour ? flavours.find((x) => x.id === review.flavour)! : undefined;
  const bg = f?.can ?? "var(--color-yellow)";
  const ink = f?.ink ?? "var(--color-navy)";
  // Alternate a slight tilt so the row reads like stickers on a cooler.
  const tilt = index % 2 === 0 ? "-rotate-[1.5deg]" : "rotate-[1.5deg]";

  return (
    <figure
      className={`${tilt} relative flex w-[17.5rem] md:w-[21rem] shrink-0 flex-col overflow-hidden rounded-[1.5rem] border-2 border-navy bg-white shadow-[0_6px_0_var(--color-navy)] transition-transform duration-300 hover:rotate-0 hover:-translate-y-1.5`}
    >
      {/* Coloured top band with the can(s) peeking over the edge */}
      <div className="relative h-20 border-b-2 border-navy" style={{ backgroundColor: bg }}>
        <span
          aria-hidden
          className="absolute left-4 top-1 font-display italic font-black text-[5.5rem] leading-none text-white/70 select-none"
        >
          &ldquo;
        </span>
        <div className="absolute right-4 -bottom-6 flex items-end">
          {(f ? [f] : flavours).map((can, i) => (
            <Image
              key={can.id}
              src={can.image}
              alt=""
              width={720}
              height={2026}
              sizes="40px"
              className={`h-[5.5rem] w-auto drop-shadow-[0_4px_4px_rgba(5,35,61,0.35)] ${i > 0 ? "-ml-3" : ""}`}
            />
          ))}
        </div>
      </div>

      <blockquote className="flex-1 px-5 pt-5 pb-3 text-navy text-[0.975rem] md:text-base leading-snug font-semibold">
        <p>&ldquo;{review.quote}&rdquo;</p>
      </blockquote>

      <figcaption className="flex items-center gap-3 px-5 pb-5">
        <span
          aria-hidden
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-navy font-extrabold text-sm"
          style={{ backgroundColor: bg, color: f ? "white" : "var(--color-navy)" }}
        >
          {review.name[0]}
        </span>
        <span className="font-extrabold text-navy">— {review.name}</span>
        <span
          className="ml-auto rounded-full px-2.5 py-0.5 text-[0.6875rem] font-extrabold uppercase tracking-wider"
          style={{ color: ink, backgroundColor: f ? `${f.can}33` : "var(--color-sand)" }}
        >
          {f ? f.short : "All three"}
        </span>
      </figcaption>
    </figure>
  );
}

/** One row: two identical runs that slide by half their width, then loop. */
function Row({ items, reverse, paused }: { items: Review[]; reverse?: boolean; paused: boolean }) {
  return (
    <div className="reviews-row overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee-reviews"} group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] ${paused ? "[animation-play-state:paused]" : ""}`}
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 gap-6 pr-6">
            {items.map((r, i) => (
              <li key={r.name}>
                <Card review={r} index={i + (reverse ? 1 : 0)} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/** Homepage reviews from the first tasters, as two opposing marquee rows. */
export default function Reviews() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative bg-lagoon-ink py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <p className="inline-block rounded-full border-2 border-navy bg-yellow px-4 py-1 text-xs md:text-sm font-extrabold uppercase tracking-widest text-navy shadow-[0_3px_0_var(--color-navy)]">
          From our first tasters
        </p>
        <h2
          id="reviews-title"
          className="mt-5 text-yellow text-[2.5rem] md:text-7xl leading-[1] [text-shadow:0_4px_0_var(--color-navy)]"
        >
          The Squeeze is Real.
        </h2>
        <p className="mt-4 text-white text-base md:text-lg font-semibold">
          {reviews.length} people tried it before anyone else. Here&rsquo;s what they said.
        </p>
      </div>

      <div className="group mt-10 md:mt-12 space-y-4 md:space-y-6">
        <Row items={rows[0]} paused={paused} />
        <Row items={rows[1]} reverse paused={paused} />
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="inline-flex items-center gap-2 rounded-full border-2 border-navy bg-white px-4 h-10 text-sm font-extrabold text-navy hover:bg-shallows focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          {paused ? <Play size={16} aria-hidden /> : <Pause size={16} aria-hidden />}
          {paused ? "Play reviews" : "Pause reviews"}
        </button>
      </div>
    </section>
  );
}
