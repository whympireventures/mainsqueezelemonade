import Image from "next/image";
import Link from "next/link";
import { flavours } from "@/lib/catalog";
import { btnPrimary, btnSecondary } from "@/components/ui";

/** Sell-sheet order: Strawberry, Classic, Rhubarb Ginger — all the same size. */
const lineup = flavours;

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-sky min-h-[38rem] lg:min-h-[40rem]"
    >
      {/* Looping video backdrop, pinned to the bottom; its first frame shows while it loads */}
      <video
        aria-hidden
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover object-[50%_100%]"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 min-h-[38rem] lg:min-h-[40rem] grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-end gap-8 pt-10 pb-10 lg:pb-12">
        {/* Copy on a frosted panel so it reads cleanly over the palms */}
        <div className="rounded-[1.75rem] bg-white/85 backdrop-blur-md shadow-[0_20px_50px_-24px_rgba(5,35,61,0.45)] p-6 sm:p-8 lg:p-10 text-center lg:text-left max-w-xl mx-auto lg:mx-0 lg:py-11">
          <p className="text-navy-2 font-extrabold uppercase tracking-widest text-xs md:text-sm">
            Bahamian-born · Family-owned
          </p>
          <h1
            id="hero-title"
            className="mt-3 text-navy font-black text-[2.5rem] leading-[1.02] sm:text-[3.25rem] xl:text-[3.5rem] tracking-tight"
          >
            A traditional Bahamian recipe,{" "}
            <span className="relative inline-block">
              {/* Yellow brush stroke under the last words, behind the text */}
              <svg
                aria-hidden
                viewBox="0 0 400 40"
                preserveAspectRatio="none"
                className="absolute left-0 right-0 -bottom-[0.04em] h-[0.45em] w-full"
              >
                <path
                  d="M6 26 C 70 10, 150 30, 220 16 S 340 8, 394 20 L 392 34 C 330 26, 250 38, 180 32 S 60 34, 8 38 Z"
                  fill="var(--color-yellow)"
                />
              </svg>
              <span className="relative">made sparkling.</span>
            </span>
          </h1>

          <p className="mt-5 text-navy font-semibold text-[1.0625rem] md:text-[1.25rem] leading-snug">
            Premium sparkling lemonade born in The Bahamas and reborn in the Maritimes. Bright, bubbly, and built on
            the lemonade every Bahamian grows up on.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link href="#flavours" className={btnPrimary}>
              Meet the flavours
            </Link>
            <Link href="#our-story" className={btnSecondary}>
              Read our story
            </Link>
          </div>
        </div>

        {/* Cans stand on the planks; on desktop they match the panel's height so tops and bottoms line up */}
        <div className="flex items-end justify-center gap-3 sm:gap-5">
          {lineup.map((can, i) => (
            <div
              key={can.id}
              className="relative animate-can-rise"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {/* Float: transform-only animation, so it runs on the GPU and costs nothing to load */}
              <div className="relative z-10 animate-can-float" style={{ animationDelay: `${i * -1.6}s` }}>
                <Image
                  src={can.image}
                  alt={can.name}
                  width={720}
                  height={2026}
                  preload={i === 1}
                  sizes="(max-width: 1024px) 30vw, 16vw"
                  className="w-auto h-[17.5rem] sm:h-[21rem] lg:h-[27rem] drop-shadow-[0_18px_18px_rgba(5,35,61,0.3)]"
                />
              </div>
              {/* Contact shadow on the planks; shrinks and fades as the can rises */}
              <span aria-hidden className="absolute left-[5%] -bottom-2 w-[90%] h-4">
                <span
                  className="block w-full h-full rounded-[50%] bg-navy/50 blur-[6px] animate-shadow-float"
                  style={{ animationDelay: `${i * -1.6}s` }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
