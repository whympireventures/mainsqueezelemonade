const items = ["Sparkling", "Bahamian-born", "No corn syrup", "Family-owned", "Atlantic Canada-made"];

/** One run of the claims, each followed by a star so the loop joins seamlessly. */
function Run({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {/* Repeat so one run is always wider than the screen */}
      {[0, 1].flatMap((rep) =>
        items.map((item) => (
          <li key={`${rep}-${item}`} className="flex items-center gap-6 pr-6 whitespace-nowrap">
            {item}
            <span aria-hidden>✦</span>
          </li>
        )),
      )}
    </ul>
  );
}

/** Yellow scrolling band of brand claims under the hero. */
export default function BrandStrip() {
  return (
    <section
      aria-label="What's in the can"
      className="group bg-yellow border-y-2 border-navy overflow-hidden text-navy font-extrabold uppercase tracking-widest text-sm md:text-base"
    >
      <div className="flex w-max py-4 animate-marquee group-hover:[animation-play-state:paused]">
        <Run />
        <Run hidden />
      </div>
    </section>
  );
}
