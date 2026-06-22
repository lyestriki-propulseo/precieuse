"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type NavLink = { label: string; href: string };

export function V4CNav({ links }: { links: NavLink[] }) {
  const pathname = usePathname();
  const navLinks = links;

  return (
    <header className="fixed top-0 z-50 w-full bg-[var(--site-bg)]/95 backdrop-blur-sm border-b border-[var(--site-text)]/20">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-8 py-3 lg:px-16">
        <Link
          href="/fr"
          aria-label="Précieuse — accueil"
          className="relative block transition-opacity hover:opacity-70"
        >
          <Image
            src="/brand/logo.png"
            alt="Précieuse — Joaillerie artisanale, Bordeaux"
            width={420}
            height={140}
            priority
            className="h-9 w-auto lg:h-10"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`${garamond} italic text-[14px] text-[var(--site-text)]/70 transition-colors hover:text-[var(--site-text)] ${
                pathname.startsWith(l.href) ? "text-[var(--site-text)]" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <span className={`${caveat} text-[16px] text-[var(--site-caveat)] hidden md:block`}>
          Numéro II · MMXXVI
        </span>
      </nav>
    </header>
  );
}
