"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FOOTER_LINKS, SITE } from "@/lib/content/site";

export function Footer() {
  const pathname = usePathname();
  if (pathname === "/fr" || pathname === "/fr/" || pathname.startsWith("/fr/v2") || pathname.startsWith("/fr/v3") || pathname.startsWith("/fr/v4") || pathname.startsWith("/fr/preview")) return null;

  return (
    <footer className="bg-inverse-surface text-white pt-20">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 border-b border-white/15 px-6 pb-16 sm:px-10 md:grid-cols-3 lg:px-16">
        <div className="flex flex-col gap-6">
          <p className="font-display-lg text-2xl text-white">{SITE.brand}</p>
          <p className="font-technical-label tracking-[0.15em] uppercase leading-relaxed text-white/60">
            Atelier Bordeaux / France
            <br />
            [Adresse Bordeaux — à confirmer]
            <br />
            Bordeaux
          </p>
          <div className="flex gap-6">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-technical-label tracking-[0.15em] uppercase hover:text-tertiary transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="font-technical-label tracking-[0.15em] uppercase hover:text-tertiary transition-colors"
            >
              Pinterest
            </a>
          </div>
        </div>

        <nav
          aria-label="Informations"
          className="flex flex-col gap-4"
        >
          <span className="font-technical-label tracking-[0.15em] uppercase text-tertiary">
            Information
          </span>
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-technical-label tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <span className="font-technical-label tracking-[0.15em] uppercase text-tertiary">
            S&apos;abonner
          </span>
          <p className="text-sm text-white/60">
            Recevez les mises à jour de l&apos;atelier et un accès en avant-première aux pièces uniques.
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="font-technical-label tracking-[0.15em] uppercase border-b border-white/40 pb-2 hover:text-tertiary hover:border-tertiary transition-colors w-fit"
          >
            {SITE.email}
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-6 py-6 sm:flex-row sm:justify-between sm:px-10 lg:px-16">
        <span className="font-technical-label tracking-[0.15em] uppercase text-white/30">
          © {new Date().getFullYear()} {SITE.brand} · Artisanat d&apos;archive
        </span>
        <span className="font-technical-label tracking-[0.15em] uppercase text-white/30">
          France / Bordeaux
        </span>
      </div>
    </footer>
  );
}
