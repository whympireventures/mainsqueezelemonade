"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/catalog";
import { btnPrimarySmall } from "@/components/ui";

const links = [
  { label: "Flavours", href: "/flavours" },
  { label: "Our Story", href: "/story" },
  { label: "Find Us", href: "/retailers" },
  { label: "Wholesale", href: "/wholesale" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-[4.75rem] md:h-24 flex items-center gap-4">
        <Link
          href="/"
          className="shrink-0 rounded-md focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-navy"
        >
          <Image
            src="/images/brand/logo-full.png"
            alt="Main Squeeze Lemonade Co. home"
            width={1252}
            height={995}
            sizes="(max-width: 768px) 96px, 220px"
            className="h-16 md:h-[5.25rem] w-auto drop-shadow-[0_2px_3px_rgba(5,35,61,0.18)]"
            preload
          />
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-1 ml-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 rounded-full text-base font-semibold text-navy hover:bg-shallows focus-visible:outline-3 focus-visible:outline-navy"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden lg:inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-navy tabular-nums px-2 py-2 rounded-full hover:bg-shallows focus-visible:outline-3 focus-visible:outline-navy"
          >
            <Phone className="w-4 h-4" aria-hidden />
            {PHONE}
          </a>
          <Link href="/retailers" className={btnPrimarySmall}>
            Find a can
          </Link>
          <button
            type="button"
            className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-full text-navy hover:bg-shallows focus-visible:outline-3 focus-visible:outline-navy"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="md:hidden border-t border-navy/10 bg-white px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-navy font-semibold border-b border-navy/10"
            >
              {l.label}
            </Link>
          ))}
          <a href={PHONE_HREF} className="flex items-center gap-2 py-3.5 text-navy font-semibold tabular-nums">
            <Phone className="w-4 h-4" aria-hidden />
            {PHONE}
          </a>
        </nav>
      )}
    </header>
  );
}
