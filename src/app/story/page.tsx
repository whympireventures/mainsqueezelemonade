import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { btnPrimary, btnSecondary } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Story | Main Squeeze Lemonade Co.",
  description:
    "Born in The Bahamas. Reborn in the Maritimes. Founder Jared Whyms on how a family Independence Day lemonade became The Lemonade Stand in The Bahamas, and then Main Squeeze on Prince Edward Island.",
};


// Copy from Main_Squeeze_Brand_Story.md (founder interview, May 2026, approved for public use).
const chapters: { heading: string; paragraphs: string[] }[] = [
  {
    heading: "Not empty-handed",
    paragraphs: [
      "I never set out to start a lemonade company. I set out to not show up empty-handed.",
      "It was 2012. My wife Cicely and I were in a small apartment in Nassau with a brand-new baby boy — born that May — and a single paycheque between us, hers. I was out of work. When the family asked us to bring a drink to our July 10th Independence Day gathering, buying something off a shelf felt wrong for a day like that. So we made our own. A strawberry lemonade, built on Switcha — the lime-and-sugar lemonade every Bahamian grows up on, the taste of every hot afternoon and every kitchen I can remember.",
      "The room went quiet, then loud. You should sell this, they said. I'd heard people be polite about food before. This was different.",
    ],
  },
  {
    heading: "The science lab",
    paragraphs: [
      "For the next few weeks our apartment turned into a science lab. Fruits, vegetables, herbs — we tried over twenty flavours before we settled on four: Classic, Strawberry, Watermelon Berry, and Ginger. We started small: home delivery, dropping bottles to offices around Nassau. Then, with a $430 live-birth cheque the government sent us for our son and a small investment from family, we entered the International Culture Food Festival that October — the biggest outdoor food event in the country.",
    ],
  },
  {
    heading: "The hardest month",
    paragraphs: [
      "I have to tell you the part I'll never be able to separate from this brand. That same month, our baby boy suffered a traumatic brain injury and was admitted to intensive care. We had two choices: give up, or press on. We pressed on. Cicely worked the festival in shifts, trading off with a family member so she could be at the hospital. It was the hardest thing we've ever done. The day we won Best Non-Alcoholic Beverage was the day our son came out of the ICU. He's fourteen now, perfectly healthy — and still the biggest lemonade fan I know.",
    ],
  },
  {
    heading: "The Lemonution",
    paragraphs: [
      "After that, it grew into something I still can't quite believe. We opened a brick-and-mortar shop with every flavour, plus specialty food and popsicles. We built three first-of-their-kind inflatable lemonade stands across Nassau and Eleuthera. And somewhere in there it stopped being a product and became a movement — we called it the Lemonution. Our regulars were Lemonites, who'd show up to every festival and event with their Keep Cups in hand. The Lemonade Stand was the most successful, most natural thing I'd ever done. Making lemonade, marketing it, standing behind the counter — it never once felt like work.",
    ],
  },
  {
    heading: "Then COVID",
    paragraphs: [
      "We were mid-expansion — new investor, new equipment, new landlord, new location — and it all came down at once. We held onto our staff as long as we could, because we believed it would turn around. It didn't. With bills past due, investors to honour, and a third child on the way, we did the only responsible thing: we got jobs and clawed our way back out of debt.",
    ],
  },
  {
    heading: "Prince Edward Island",
    paragraphs: [
      "Those jobs were in tourism — and Cicely loved it so much she pursued it for real, which led her to Holland College's Tourism & Travel Management program here on Prince Edward Island. We came for school. We stayed because we fell in love with the place. PEI felt strangely like home: the same closeness, the same pride of place I grew up with in the Bahamas.",
    ],
  },
  {
    heading: "Full circle",
    paragraphs: [
      "And then I started making lemonade again. For new friends, for coworkers. And one of them looked up and said it — you should sell this. Ten years and an ocean away, and there it was again. Full circle.",
      "So we're doing it. My cousin Lorinda Skyers, a fellow entrepreneur who was our business advisor and mentor from the very beginning, is now my partner for this next chapter. The Lemonade Stand is reborn as Main Squeeze Lemonade Co. Same soul, made better. Born in The Bahamas. Reborn in the Maritimes.",
      "I think I was always meant to let the world sip something special.",
    ],
  },
];

type Photo = { src: string; alt: string; caption: string; width: number; height: number };

const photo = (file: string, width: number, height: number, alt: string, caption: string): Photo => ({
  src: `/images/story/${file}`,
  width,
  height,
  alt,
  caption,
});

const P = {
  lab: photo("flavour-testing.jpg", 640, 480, "A jar of watermelon berry lemonade beside a blender, half a watermelon and a box of strawberries", "The apartment science lab"),
  booth: photo("festival-booth.jpg", 720, 960, "Jared, wearing a festival exhibitor pass, beside The Lemonade Stand's green sign and yellow-draped booth", "Festival day at our booth"),
  crowd: photo("icff-booth-crowd.jpg", 640, 480, "A crowd of customers at The Lemonade Stand's booth number 30 at the International Culture Food Festival", "Booth 30, International Culture Food Festival"),
  jaren: photo("jaren-hospital.jpg", 709, 945, "Baby Jaren in a striped onesie, held by his masked mother beside a hospital monitor", "Jaren in the hospital, October 2012"),
  serving: photo("festival-serving.jpg", 640, 480, "Serving from jars of Strawberry, Classic and Watermelon Berry lemonade at The Lemonade Stand's festival booth", "Serving Classic, Strawberry and Watermelon Berry"),
  shop: photo("lemonade-stand-shop.jpg", 720, 960, "The Lemonade Stand's yellow and green shop in Nassau with a green inflatable lemonade stand out front", "Our shop in Nassau"),
  green: photo("jared-inflatable-stand.jpg", 1152, 2048, "Jared inside a green inflatable lemonade stand with The Lemonade Stand's Exotic Lemonade banner", "A first-of-its-kind inflatable stand"),
  pink: photo("pink-inflatable-stand.jpg", 540, 960, "A pink inflatable Fresh Squeezed Lemonade stand set up on a festival field", "The pink stand"),
  grad: photo("cicely-graduation.jpg", 709, 945, "Cicely in her graduation gown with flowers and balloons, standing with Jared outside Holland College", "Cicely's graduation from Holland College"),
  cans: photo("first-cans.jpg", 532, 945, "Lorinda Skyers and Jared Whyms smiling and holding up Main Squeeze cans on the canning line", "Lorinda and Jared with the first cans off the line"),
  together: {
    src: "/images/about/jay-and-lorinda.jpg",
    width: 1086,
    height: 1448,
    alt: "Lorinda Skyers and Jared Whyms holding Main Squeeze cans",
    caption: "Back in business, together again",
  },
};

// Photos shown under each chapter, keyed by heading. Each inner array is one row;
// photos in a row share a height and together fill the column width.
const chapterRows: Record<string, Photo[][]> = {
  "The science lab": [[P.lab, P.crowd]],
  "The hardest month": [[P.jaren, P.booth, P.serving]],
  "The Lemonution": [[P.shop, P.green, P.pink]],
  "Prince Edward Island": [[P.grad]],
  "Full circle": [[P.cans, P.together]],
};

const awards = [
  { year: "2012", title: "Best Non-Alcoholic Beverage", event: "International Culture Food Festival" },
  { year: "2013", title: "Best Non-Alcoholic Drink", event: "Taste of The Bahamas Festival" },
  { year: "2014", title: "Best Beverage", event: "Sweeet Fest" },
];

const milestones = [
  { when: "July 10, 2012", what: "First batch for a family Independence Day party in Nassau" },
  { when: "October 2012", what: "Best Non-Alcoholic Beverage, International Culture Food Festival" },
  { when: "2013", what: "Best Non-Alcoholic Drink, Taste of The Bahamas Festival" },
  { when: "2014", what: "Best Beverage, Sweeet Fest" },
  { when: "The Lemonade Stand", what: "A shop, three inflatable stands across Nassau and Eleuthera, and the Lemonites" },
  { when: "COVID", what: "Mid-expansion, it all came down at once" },
  { when: "Prince Edward Island", what: "We came for school and fell in love with the place" },
  { when: "Today", what: "Reborn as Main Squeeze Lemonade Co." },
];

/**
 * A row of photos at one shared height that fills the column. Each photo's
 * flex-grow is its width/height ratio, so heights match without cropping.
 */
function PhotoRow({ photos, dark = false, center = false }: { photos: Photo[]; dark?: boolean; center?: boolean }) {
  const total = photos.reduce((sum, ph) => sum + ph.width / ph.height, 0);
  // Cap the row at about 28rem tall, so a lone portrait photo doesn't fill the whole column.
  return (
    <div className={`flex gap-3 md:gap-4 items-start ${center ? "mx-auto" : ""}`} style={{ maxWidth: `${(total * 28).toFixed(2)}rem` }}>
      {photos.map((ph) => {
        const ratio = ph.width / ph.height;
        return (
          <figure key={ph.src} className="min-w-0" style={{ flex: `${ratio} 1 0%` }}>
            <Image
              src={ph.src}
              alt={ph.alt}
              width={ph.width}
              height={ph.height}
              sizes={`(max-width: 768px) ${Math.round((ratio / total) * 92)}vw, ${Math.round((ratio / total) * 44)}rem`}
              className="w-full h-auto rounded-xl md:rounded-[1.25rem]"
            />
            <figcaption className={`mt-2 text-xs md:text-sm leading-snug ${dark ? "text-white/75" : "text-navy-2"}`}>
              {ph.caption}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export default function StoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="text-yellow font-extrabold uppercase tracking-widest text-sm mb-5">Our story</p>
          <h1 className="text-[2.5rem] md:text-7xl leading-[1.02]">
            Born in The Bahamas.
            <br />
            Reborn in the Maritimes.
          </h1>
          <p className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            The Bahamian lemonade we loved too much to leave behind.
          </p>
        </div>
      </section>

      {/* SHORT VERSION + PHOTO */}
      <section className="bg-sand py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16 items-center">
          <div>
            <h2 className="text-navy text-[2rem] md:text-5xl leading-[1.05]">
              The short version.
            </h2>
            <div className="mt-6 space-y-4 text-navy-2 text-lg md:text-xl leading-relaxed max-w-[58ch]">
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
          </div>
          <figure className="relative max-w-sm mx-auto md:max-w-none w-full">
            <Image
              src="/images/about/jared-and-cicely.jpg"
              alt="Jared and Cicely Whyms smiling under a citrus tree"
              width={1044}
              height={1856}
              sizes="(max-width: 768px) 90vw, 40vw"
              className="w-full aspect-[4/5] object-cover object-top rounded-[1.25rem]"
            />
            <figcaption className="absolute -bottom-4 left-3 right-3 rounded-xl bg-yellow border-2 border-navy px-3 py-2 text-center text-navy font-extrabold text-sm sm:text-base shadow-[0_3px_0_var(--color-navy)]">
              Jared &amp; Cicely Whyms
            </figcaption>
          </figure>
        </div>
      </section>

      {/* FULL STORY */}
      <section aria-labelledby="full-story" className="bg-white py-16 md:py-24">
        <div className="max-w-[44rem] mx-auto px-4 md:px-6">
          <h2 id="full-story" className="sr-only">The full story</h2>
          <p className="text-palm-ink font-extrabold uppercase tracking-widest text-sm mb-10">
            In Jared&apos;s words
          </p>
          <div className="space-y-12">
            {chapters.map((c) => (
              <article key={c.heading}>
                <h3 className="text-navy text-2xl md:text-[2rem] leading-tight mb-4">{c.heading}</h3>
                <div className="space-y-4 text-navy-2 text-base md:text-lg leading-relaxed">
                  {c.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
                {chapterRows[c.heading] && (
                  <div className="mt-8 space-y-4">
                    {chapterRows[c.heading].map((row) => (
                      <PhotoRow key={row.map((ph) => ph.src).join()} photos={row} />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <p className="mt-10 font-display italic font-extrabold text-navy text-2xl">— Jared</p>
        </div>
      </section>

      {/* AWARDS */}
      <section aria-labelledby="awards" className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-yellow font-extrabold uppercase tracking-widest text-sm text-center">Award-winning</p>
          <h2 id="awards" className="mt-3 text-yellow text-[2rem] md:text-5xl leading-tight text-center">
            Three years, three trophies.
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {awards.map((a) => (
              <li key={a.year} className="rounded-[1.25rem] border-2 border-yellow/40 p-6 text-center">
                <p className="font-display italic font-black text-yellow text-4xl tabular-nums">{a.year}</p>
                <p className="mt-3 font-extrabold text-lg">{a.title}</p>
                <p className="mt-1 text-white/75">{a.event}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-lg mx-auto">
            <PhotoRow
              dark
              center
              photos={[
                photo("taste-of-bahamas-award.jpg", 540, 960, "Jared accepting a trophy on stage at the Taste of The Bahamas Festival", "On stage at the Taste of The Bahamas Festival"),
                photo("cicely-trophy.jpg", 540, 960, "Cicely Whyms smiling and holding a trophy at The Lemonade Stand booth", "Cicely with a trophy at our booth"),
              ]}
            />
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section aria-labelledby="milestones" className="bg-shallows py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 id="milestones" className="text-navy text-[2rem] md:text-4xl leading-tight mb-10 text-center">
            Ten years and an ocean away
          </h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <li key={m.when} className="rounded-[1.25rem] bg-white p-6 border-2 border-navy/10">
                <p className="font-display italic font-black text-navy text-xl">{m.when}</p>
                <p className="mt-2 text-navy-2 leading-snug">{m.what}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-navy text-3xl md:text-4xl mb-8">We made it for family first. Now we&apos;re making it for yours.</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/flavours" className={btnSecondary}>
              Meet the flavours
            </Link>
            <Link href="/wholesale#order" className={btnPrimary}>
              Order wholesale
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
