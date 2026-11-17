import Image from "next/image";
import Link from "next/link";
import { textLink } from "@/components/ui";

const facts = [
  { figure: "2012", label: "First batch, made for family in Nassau" },
  {
    figure: "3×",
    label: "Award winner: International Culture Food Festival 2012, Taste of The Bahamas Festival 2013, Sweeet Fest 2014",
  },
  { figure: "3", label: "First-of-their-kind inflatable lemonade stands across Nassau and Eleuthera" },
  { figure: "2026", label: "Back in a can, family-owned and Atlantic Canada-made" },
];

const thenNow = [
  {
    label: "Then",
    caption: "The Lemonade Stand, Nassau",
    src: "/images/story/festival-exhibitor.jpg",
    alt: "Smiling in a festival exhibitor badge beside The Lemonade Stand's booth in Nassau",
    width: 720,
    height: 960,
  },
  {
    label: "Now",
    caption: "Main Squeeze Lemonade launch day",
    src: "/images/story/jared-and-lorinda-now.jpg",
    alt: "Jared and Lorinda holding Main Squeeze cans in front of the Main Squeeze website, with a stack of cans on the table",
    width: 945,
    height: 945,
  },
];

/** Homepage story snapshot; the full version lives at /story. */
export default function Story() {
  return (
    <section id="our-story" aria-labelledby="story-title" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-14 items-center">
        {/* Then and now: equal-height photos, each as wide as its shape needs */}
        <div className="flex gap-3 md:gap-4 items-start w-full max-w-xl mx-auto md:max-w-none">
          {thenNow.map((ph) => (
            <figure key={ph.src} className="min-w-0" style={{ flex: `${ph.width / ph.height} 1 0%` }}>
              <Image
                src={ph.src}
                alt={ph.alt}
                width={ph.width}
                height={ph.height}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="w-full h-auto rounded-xl md:rounded-[1.25rem]"
              />
              <figcaption className="mt-2 text-xs md:text-sm leading-snug text-navy-2">
                <span className="inline-block rounded-full bg-yellow text-navy font-extrabold uppercase tracking-wider px-2.5 py-0.5 mr-1.5">
                  {ph.label}
                </span>
                {ph.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div>
          <h2 id="story-title" className="text-navy text-[2rem] md:text-5xl leading-[1.05]">
            Born in The Bahamas. Reborn in the Maritimes.
          </h2>
          <div className="mt-6 space-y-4 text-navy-2 text-base md:text-[1.0625rem] leading-relaxed max-w-[60ch]">
            <p>
              It started in 2012 in a small Nassau apartment, with a newborn, one paycheque and a family
              Independence Day party. Buying a drink off a shelf felt wrong, so we made our own: a strawberry
              lemonade built on the lime, sugar and water lemonade every Bahamian grows up on.
            </p>
            <p>
              People said, &ldquo;You should sell this.&rdquo; So we did. It became The Lemonade Stand, a
              Bahamian movement. Along the way, my cousin Lorinda Skyers was our mentor and guide. She was
              making lemonade too, and helped steer us through the Bahamian food and beverage industry.
            </p>
            <p>
              Life brought us to Prince Edward Island, and the lemonade came with us. Now Lorinda and I have
              come together again, bringing our years of lemonade-making, business management and marketing
              experience to Main Squeeze. This is the next chapter.
            </p>
          </div>

          <p className="mt-6">
            <Link href="/story" className={textLink}>
              Read the full story →
            </Link>
          </p>
        </div>
      </div>

      <ul className="max-w-6xl mx-auto px-4 md:px-6 mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((f) => (
          <li key={f.label} className="rounded-[1.25rem] bg-shallows p-5">
            <p className="font-display italic font-black text-navy text-[2.5rem] leading-none tabular-nums">
              {f.figure}
            </p>
            <p className="mt-2 text-sm text-navy-2 leading-snug">{f.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
