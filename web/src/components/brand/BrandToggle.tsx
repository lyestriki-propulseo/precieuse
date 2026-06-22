"use client";

import { BRAND_LABELS, BRAND_SWATCHES, BRANDS } from "./brand";
import { useBrand } from "./BrandProvider";

const garamond = "font-[family-name:var(--font-eb-garamond)]";

/**
 * Toggle couleur visiteur (teal ↔ blush) — discret, site-wide.
 * Posé en bas à droite, accessible clavier (radiogroup + aria-checked).
 */
export function BrandToggle() {
  const { brand, setBrand } = useBrand();

  return (
    <div
      role="radiogroup"
      aria-label="Couleur de la marque"
      className="fixed bottom-4 right-4 z-[70] flex items-center gap-1 rounded-full border border-[var(--brand-accent)]/30 bg-cream/90 px-1.5 py-1.5 shadow-md shadow-black/5 backdrop-blur-md"
    >
      {BRANDS.map((b) => {
        const active = brand === b;
        return (
          <button
            key={b}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={`Couleur ${BRAND_LABELS[b]}`}
            title={BRAND_LABELS[b]}
            onClick={() => setBrand(b)}
            className={`group flex items-center gap-1.5 rounded-full px-2 py-1 transition-all duration-300 ${
              active ? "bg-[var(--brand-accent)]/10" : "hover:bg-black/[0.03]"
            }`}
          >
            <span
              aria-hidden
              className={`block h-3.5 w-3.5 rounded-full border transition-transform duration-300 ${
                active
                  ? "scale-110 border-[var(--brand-accent)] ring-1 ring-[var(--brand-accent)]/40 ring-offset-1 ring-offset-cream"
                  : "border-black/15 group-hover:scale-105"
              }`}
              style={{ backgroundColor: BRAND_SWATCHES[b] }}
            />
            <span
              className={`${garamond} hidden text-[11px] italic tracking-wide sm:block ${
                active ? "text-[var(--brand-accent-strong)]" : "text-foreground/45"
              }`}
            >
              {BRAND_LABELS[b]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
