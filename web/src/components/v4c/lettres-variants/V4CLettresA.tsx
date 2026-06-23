"use client";

import { useState } from "react";
import { FONT } from "./data";

const { garamond, caveat } = FONT;

export type LettreVM = {
  citation: string;
  auteur: string;
  ville: string;
  date: string;
  piece: string;
};

export function V4CLettresA({ lettres }: { lettres: LettreVM[] }) {
  const LETTRES = lettres;
  const [active, setActive] = useState(0);
  const lettre = LETTRES[active];

  if (!lettre) return null;

  return (
    <section className="relative bg-[var(--site-bg)] py-14 lg:py-16 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/15" />

      <div className="mx-auto max-w-[1100px]">
        <header className="flex items-baseline justify-between mb-8 flex-wrap gap-3">
          <div className="flex items-baseline gap-3">
            <h2 className={`${garamond} italic text-[28px] lg:text-[32px] text-[var(--site-text)] leading-none`}>
              Lettres reçues
            </h2>
            <span className={`${caveat} text-[15px] text-[var(--site-caveat)]`}>
              — de celles qui portent
            </span>
          </div>
          <span className={`${caveat} text-[13px] text-[var(--site-caveat)]/70 italic`}>
            chaque lettre est réelle
          </span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-6 items-start">
          {/* Lettre dominante — compactée */}
          <article className="relative bg-[var(--site-surface)] p-6 lg:p-8 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.2)] rotate-[-0.3deg]">
            <div className="flex items-baseline justify-between mb-4 pb-3 border-b border-[var(--site-text)]/15">
              <span className={`${garamond} italic text-[10px] tracking-[0.4em] text-[var(--site-accent)]`}>
                PRÉCIEUSE
              </span>
              <span className={`${garamond} italic text-[11px] text-[var(--site-text)]/60`}>
                {lettre.ville} · {lettre.date}
              </span>
            </div>

            <p className={`${caveat} text-[19px] lg:text-[22px] text-[var(--site-text)] leading-[1.5] mb-5`}>
              « {lettre.citation} »
            </p>

            <div className="flex items-end justify-between pt-3 border-t border-[var(--site-text)]/10">
              <span className={`${caveat} text-[20px] text-[var(--site-text)] leading-none`}>
                — {lettre.auteur}
              </span>
              <span className={`${garamond} italic text-[11px] text-[var(--site-accent)] tracking-widest`}>
                porte « {lettre.piece} »
              </span>
            </div>
          </article>

          {/* Pile de lettres miniatures */}
          <aside className="space-y-2">
            <p className={`${garamond} italic text-[10px] tracking-[0.3em] text-[var(--site-accent)] mb-2`}>
              AUTRES — {LETTRES.length}
            </p>
            {LETTRES.map((l, i) => (
              <button
                key={l.auteur}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`block w-full text-left bg-[var(--site-surface)] p-3 transition-all duration-300 ${
                  active === i
                    ? "shadow-sm scale-[1.01]"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <span className={`${caveat} text-[13px] text-[var(--site-text)] line-clamp-2 leading-snug block`}>
                  {l.citation.slice(0, 60)}…
                </span>
                <span className={`${garamond} italic text-[10px] text-[var(--site-accent)] block mt-1`}>
                  {l.auteur} · {l.ville}
                </span>
              </button>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
