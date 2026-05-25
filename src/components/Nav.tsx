"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Flavours", href: "/flavours" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/brand/logo.png"
            alt="Main Squeeze Lemonade Co."
            width={80}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#1B4D2E] hover:text-[#F7E01A] transition-colors tracking-wide uppercase"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/wholesale"
            className="bg-[#1B4D2E] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors tracking-wide"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1B4D2E] transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1B4D2E] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#1B4D2E] transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-4 text-[#1B4D2E] font-semibold border-b border-gray-100 uppercase tracking-wide text-sm hover:text-[#5A9A3A]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/wholesale"
            onClick={() => setOpen(false)}
            className="mt-5 block text-center bg-[#1B4D2E] text-white font-bold py-3 rounded-full hover:bg-[#F7E01A] hover:text-[#1B4D2E] transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      )}
    </header>
  );
}
