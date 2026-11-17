import Link from "next/link";

export const metadata = {
  title: "Offline | Main Squeeze Lemonade Co.",
};

/** Shown by the service worker when a navigation fails with no cached copy. */
export default function OfflinePage() {
  return (
    <section className="bg-[#F7E01A] min-h-[70vh] flex items-center">
      <div className="max-w-xl mx-auto px-6 text-center py-24">
        <h1 className="text-5xl md:text-6xl uppercase text-[#1B4D2E] leading-[0.9] mb-5">
          No Signal.
        </h1>
        <p className="text-[#1B4D2E]/75 text-lg mb-9">
          You&rsquo;re offline right now. Check your connection and try again —
          the lemonade isn&rsquo;t going anywhere.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1B4D2E] text-white font-black text-sm uppercase tracking-widest px-9 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
