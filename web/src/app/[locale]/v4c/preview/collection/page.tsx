"use client";

import { useState } from "react";
import Link from "next/link";
import { V4CSiteTheme } from "@/components/v4c/V4CSiteTheme";
import { V4CSeriesA } from "@/components/v4c/series-variants/V4CSeriesA";
import { V4CSeriesB } from "@/components/v4c/series-variants/V4CSeriesB";
import { V4CSeriesC } from "@/components/v4c/series-variants/V4CSeriesC";
import { V4CSeriesD } from "@/components/v4c/series-variants/V4CSeriesD";
import { V4CSeriesE } from "@/components/v4c/series-variants/V4CSeriesE";
import { V4CSeriesF } from "@/components/v4c/series-variants/V4CSeriesF";
import { piecesSeed } from "@/sanity/seed";
import { pickLocale } from "@/sanity/lib/i18n";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type VariantKey = "A" | "B" | "C" | "D" | "E" | "F";

const VARIANTS: { key: VariantKey; label: string; description: string }[] = [
  { key: "A", label: "Variante A", description: "Réduction radicale — 3 produits hero + CTA global" },
  { key: "B", label: "Variante B", description: "Carousel horizontal défilant — snap-scroll, 1 viewport" },
  { key: "C", label: "Variante C", description: "Focus + grid — Joséphine hero 60% + 4 produits 2×2" },
  { key: "D", label: "Variante D", description: "Tabs catégories — Solitaires / Entourage / Alliances / Statement" },
  { key: "E", label: "Variante E", description: "Liste éditoriale — sommaire vertical type table des matières" },
  { key: "F", label: "Variante F", description: "Coverflow premium · focus centre, peek latéral, auto-play 7s" },
];

const piecesVM = piecesSeed.map((p) => ({
  slug: p.slug,
  name: p.name,
  tagline: pickLocale(p.tagline, "fr"),
  price: pickLocale(p.priceLabel, "fr"),
  description: pickLocale(p.description, "fr"),
  materials: pickLocale(p.materials, "fr"),
  story: pickLocale(p.story, "fr"),
  image: p.image.src,
  imageAlt: pickLocale(p.image.alt, "fr"),
}));

const COMPONENTS: Record<VariantKey, React.ReactNode> = {
  A: <V4CSeriesA />,
  B: <V4CSeriesB />,
  C: <V4CSeriesC />,
  D: <V4CSeriesD />,
  E: <V4CSeriesE />,
  F: <V4CSeriesF pieces={piecesVM} />,
};

export default function CollectionPreviewPage() {
  const [active, setActive] = useState<VariantKey>("A");
  const current = VARIANTS.find((v) => v.key === active)!;

  return (
    <V4CSiteTheme>
      <div className="min-h-screen bg-[var(--site-bg)]">
        <div className="sticky top-0 z-50 bg-[var(--site-bg)]/95 backdrop-blur-sm border-b border-[var(--site-text)]/20">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="flex items-center justify-between py-3 border-b border-[var(--site-text)]/10">
              <Link
                href="/fr/v4c"
                className={`${garamond} italic text-[14px] text-[var(--site-text)]/60 hover:text-[var(--site-text)] transition-colors`}
              >
                ← retour à v4c
              </Link>
              <span className={`${caveat} text-[14px] text-[var(--site-caveat)]`}>
                comparateur · section Collection
              </span>
            </div>

            <div className="flex gap-1 -mb-px pt-2">
              {VARIANTS.map((v) => (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => setActive(v.key)}
                  className={`${garamond} italic text-[15px] px-5 py-2 border-b-2 transition-all duration-200 ${
                    active === v.key
                      ? "text-[var(--site-text)] border-[var(--site-text)]"
                      : "text-[var(--site-text)]/40 border-transparent hover:text-[var(--site-text)]/70"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-6">
          <div className="flex items-center gap-4">
            <span className={`${garamond} italic text-[32px] text-[var(--site-accent)] leading-none`}>
              {current.key}
            </span>
            <div>
              <p className={`${garamond} italic text-[18px] text-[var(--site-text)]`}>
                {current.label}
              </p>
              <p className={`${caveat} text-[15px] text-[var(--site-caveat)]`}>
                {current.description}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px]">{COMPONENTS[active]}</div>

        <div className="mx-auto max-w-[1440px] px-8 lg:px-16 py-8 mt-4 border-t border-[var(--site-text)]/10">
          <p className={`${caveat} text-[14px] text-[var(--site-text)]/40 text-center`}>
            preview · non publié · Précieuse v4c
          </p>
        </div>
      </div>
    </V4CSiteTheme>
  );
}
