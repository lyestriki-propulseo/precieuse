import Image from "next/image";
import Link from "next/link";
import { FOOTER_FONTS } from "./data";

const { garamond, caveat, inter } = FOOTER_FONTS;

// Non-CMS chrome kept inline (decorative · not part of the content model yet).
const FOUNDER = "Eméline";
const FOUNDED = "MMXIX";
const HOURS = "sur rendez-vous · mardi–samedi";

export type FooterVM = {
  brand: string;
  email: string;
  instagram: string;
  address: { street: string; zip: string; city: string; country: string };
  primaryNav: { label: string; href: string }[];
  legalNav: { label: string; href: string }[];
  social: { label: string; href: string }[];
  copyright: string;
};

function MapLisbonne() {
  return (
    <svg aria-hidden viewBox="0 0 280 200" className="w-full h-full text-[var(--site-bg)]/40">
      <rect x="2" y="2" width="276" height="196" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="3 3" />
      <path d="M0 130 Q70 110 140 125 T280 115" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M40 60 L80 55 L130 70 L150 50 L200 65 L240 55" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <path d="M50 80 L90 75 L120 85 L160 80 L200 90" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.4" />
      <g transform="translate(150, 75)">
        <circle r="5" fill="currentColor" opacity="0.9" />
        <circle r="9" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
      </g>
      <text x="165" y="68" fontSize="9" fill="currentColor" fontFamily="cursive" fontStyle="italic" opacity="0.85">atelier</text>
      <text x="14" y="186" fontSize="7" fill="currentColor" fontFamily="serif" fontStyle="italic" letterSpacing="2" opacity="0.5">BORDEAUX</text>
    </svg>
  );
}

export function V4CFooterH({ footer }: { footer: FooterVM }) {
  return (
    <footer className="relative bg-[var(--site-text)] text-[var(--site-bg)] py-9 px-8 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        {/* Logo en tête, centré */}
        <div className="flex justify-center mb-6 pb-5 border-b border-[var(--site-bg)]/15">
          <Image
            src="/brand/logo.png"
            alt="Précieuse — Joaillerie artisanale, Bordeaux"
            width={420}
            height={140}
            className="h-12 w-auto opacity-90 [filter:brightness(0)_invert(1)]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_auto_1fr] gap-5 md:gap-8 items-center">
          <div>
            <span className={`${caveat} text-[13px] text-[var(--site-bg)]/55 italic block leading-none mb-1`}>
              pour venir nous voir —
            </span>
            <p className={`${caveat} text-[20px] text-[var(--site-bg)] leading-tight`}>
              {footer.address.street}, {footer.address.zip} {footer.address.city}
            </p>
            <p className={`${caveat} text-[14px] text-[var(--site-bg)]/80 mt-1`}>
              {HOURS} · {footer.email}
            </p>
          </div>

          <div className="w-full max-w-[160px] mx-auto md:mx-0 aspect-[7/5] bg-[var(--site-bg)]/[0.04] p-1.5">
            <MapLisbonne />
          </div>

          <div className="md:text-right">
            <span className={`${caveat} text-[12px] text-[var(--site-bg)]/55 italic block`}>
              tenu par —
            </span>
            <span className={`${caveat} text-[40px] text-[var(--site-bg)] leading-none block`}>
              {FOUNDER}
            </span>
            <span className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-bg)]/50 block`}>
              FONDATRICE · {FOUNDED}
            </span>
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 mt-5 pt-4 border-t border-[var(--site-bg)]/10">
          {footer.primaryNav.map((l) => (
            <Link key={l.label} href={l.href} className={`${garamond} italic text-[13px] text-[var(--site-bg)]/75 hover:text-[var(--site-bg)] transition-colors`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col md:flex-row items-center justify-between gap-2 mt-3 pt-3 border-t border-[var(--site-bg)]/10">
          <span className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/30`}>
            {footer.copyright}
          </span>
          <nav className="flex gap-4">
            {footer.legalNav.map((l) => (
              <Link key={l.label} href={l.href} className={`${inter} text-[10px] tracking-wider font-light text-[var(--site-bg)]/30 hover:text-[var(--site-bg)]/60 transition-colors`}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
