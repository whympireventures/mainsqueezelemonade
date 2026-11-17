import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-navy text-white text-sm font-medium">
      <p className="max-w-7xl mx-auto px-4 min-h-10 py-2 flex items-center justify-center text-center">
        <span>
          <span className="hidden sm:inline">
            Introductory price: $54 per 24-can case, for a limited time.
          </span>
          <span className="sm:hidden">Intro price: $54 per 24-can case.</span>{" "}
          <Link
            href="/wholesale#order"
            className="text-yellow font-extrabold underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow rounded-sm"
          >
            Start an order
          </Link>
        </span>
      </p>
    </div>
  );
}
