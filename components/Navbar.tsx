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
      <nav className="mx-auto flex h-24 max-w-[1360px] items-center justify-between px-0">
        <Link href="/" className="flex items-center" aria-label="Brunswick Builders home">
          <Image
            src="/images/Logo.png"
            alt="Brunswick Builders logo"
            width={120}
            height={120}
            priority
            className="h-28 w-auto"
          />
        </Link>

        <ul className="ml-auto flex items-center gap-14">
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
          className="ml-14 min-w-[168px] border border-white/70 px-6 py-3 text-center text-[12px] font-semibold tracking-wider text-white transition-colors hover:bg-white hover:text-navy-900"
        >
          GET A QUOTE
        </Link>
      </nav>
    </header>
  );
}