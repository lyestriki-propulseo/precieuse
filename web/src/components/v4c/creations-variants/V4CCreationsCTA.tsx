import Link from "next/link";
import { CTA, FONT } from "./data";

const { garamond, caveat } = FONT;

export function V4CCreationsCTA() {
  return (
    <div className="relative px-8 lg:px-16 py-24 lg:py-32 text-center">
      <div className="mx-auto max-w-[720px]">
        {/* Ornement haut */}
        <div className="flex items-center justify-center gap-4 mb-10" aria-hidden>
          <span className="block w-16 h-px bg-[var(--site-accent)]/40" />
          <span className={`${garamond} italic text-[24px] text-[var(--site-accent)]`}>✶</span>
          <span className="block w-16 h-px bg-[var(--site-accent)]/40" />
        </div>

        {/* Hook */}
        <h3 className={`${garamond} italic text-[40px] lg:text-[52px] text-[var(--site-text)] leading-[1.05] mb-6`}>
          {CTA.hook}
        </h3>

        {/* Body */}
        <p className={`${caveat} text-[22px] lg:text-[24px] text-[var(--site-caveat)] leading-relaxed mb-12`}>
          {CTA.body}
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href={CTA.primary.href}
            className={`${garamond} italic text-[17px] text-[var(--site-bg)] bg-[var(--site-text)] px-10 py-4 hover:bg-[var(--site-accent)] transition-colors duration-300 inline-flex items-center gap-3`}
          >
            {CTA.primary.label}
            <span aria-hidden>→</span>
          </Link>
          <Link
            href={CTA.secondary.href}
            className={`${garamond} italic text-[15px] text-[var(--site-text)] border-b border-[var(--site-accent)]/50 pb-1 hover:border-[var(--site-text)] transition-colors duration-300`}
          >
            {CTA.secondary.label}
          </Link>
        </div>

        {/* Signature manuscrite */}
        <p className={`${caveat} text-[18px] text-[var(--site-caveat)]/70 italic mt-12`}>
          — Emeline répond elle-même, depuis l&apos;atelier de Bordeaux
        </p>
      </div>
    </div>
  );
}
