"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "/projects" },
  { label: "Our Process", href: "/process" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-navy-900">
      <nav className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-4 md:h-20 md:px-6 lg:h-24 lg:px-0">
        <Link href="/" className="flex items-center" aria-label="Brunswick Builders home">
          <Image
            src="/images/Logo.png"
            alt="Brunswick Builders logo"
            width={120}
            height={120}
            priority
            className="h-16 w-auto md:h-20 lg:h-28"
          />
        </Link>

        <ul className="ml-auto hidden items-center gap-8 lg:flex lg:gap-14">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[12px] font-semibold tracking-wide text-white/90 transition-colors hover:text-[#d2bb90]"
              >
                {link.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/quote"
          className="ml-14 hidden min-w-[168px] border border-white/70 px-6 py-3 text-center text-[12px] font-semibold tracking-wider text-white transition-colors hover:bg-white hover:text-navy-900 lg:block"
        >
          GET A QUOTE
        </Link>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-900/95 px-6 pb-6 pt-5 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[12px] font-semibold tracking-wider text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/quote"
                className="mt-2 inline-block border border-white/70 px-5 py-2.5 text-[12px] font-semibold tracking-wider text-white"
                onClick={() => setOpen(false)}
              >
                GET A QUOTE
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}