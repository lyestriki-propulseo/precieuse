"use client";

import { useState } from "react";
import Link from "next/link";
import { V4CSiteTheme } from "@/components/v4c/V4CSiteTheme";
import { V4CAvantProposA } from "@/components/v4c/avantpropos-variants/V4CAvantProposA";
import { V4CAvantProposB } from "@/components/v4c/avantpropos-variants/V4CAvantProposB";
import { V4CAvantProposC } from "@/components/v4c/avantpropos-variants/V4CAvantProposC";
import { V4CAvantProposD } from "@/components/v4c/avantpropos-variants/V4CAvantProposD";
import { V4CAvantProposE } from "@/components/v4c/avantpropos-variants/V4CAvantProposE";
import { homeContentSeed } from "@/sanity/seed";
import { pickLocale } from "@/sanity/lib/i18n";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

type VariantKey = "A" | "B" | "C" | "D" | "E";

const VARIANTS: { key: VariantKey; label: string; description: string }[] = [
  { key: "A", label: "A — Lithographique", description: "Drop cap M géant · numéros 01-04 italic 44px · losanges Art Déco entre paires · police Bodoni" },
  { key: "B", label: "B — Journal éditorial", description: "MAISON PRÉCIEUSE ligne fine · lead italic Cormorant 22px · Le refus / La promesse en duo · filets pleine largeur" },
  { key: "C", label: "C — Stamp & Seal", description: "Filigrane SVG entre MAISON et Précieuse italic · mot pivot en accent uppercase · sceau circulaire Atelier Lisboa" },
  { key: "D", label: "D — Brutalisme typo", description: "MAISON 96px + Précieuse italic 120px chevauchant · I-IV massifs · Pas X micro 10px / Mais Y italic 32px" },
  { key: "E", label: "E — Mix final ★", description: "Portrait Luxe A (border fin gris + légende EMÉLINE LE RAY / LISBOA · MMXXVI) + texte C (MAISON · filigrane · Précieuse italic + paires romaines + sceau atelier)" },
];

const avantProposVM = {
  heading: pickLocale(homeContentSeed.avantPropos.heading, "fr"),
  pairs: homeContentSeed.avantPropos.pairs.map((p) => ({
    pas: pickLocale(p.pas, "fr"),
    mais: pickLocale(p.mais, "fr"),
  })),
};

const COMPONENTS: Record<VariantKey, React.ReactNode> = {
  A: <V4CAvantProposA />,
  B: <V4CAvantProposB />,
  C: <V4CAvantProposC />,
  D: <V4CAvantProposD />,
  E: <V4CAvantProposE avantPropos={avantProposVM} />,
};

export default function AvantProposPreviewPage() {
  const [active, setActive] = useState<VariantKey>("E");
  const current = VARIANTS.find((v) => v.key === active)!;

  return (
    <V4CSiteTheme>
      <div className="min-h-screen bg-[var(--site-bg)] -mt-16 antialiased">
        <div className="sticky top-0 z-50 bg-[var(--site-bg)]/95 backdrop-blur-sm border-b border-[var(--site-text)]/20">
          <div className="mx-auto max-w-[1440px] px-8 lg:px-16">
            <div className="flex items-center justify-between py-3 border-b border-[var(--site-text)]/10">
              <div className="flex items-center gap-4">
                <Link
                  href="/fr"
                  className={`${garamond} italic text-[14px] text-[var(--site-text)]/60 hover:text-[var(--site-text)] transition-colors`}
                >
                  ← accueil
                </Link>
                <span className="text-[var(--site-text)]/30">·</span>
                <Link
                  href="/fr/preview/avant-propos-luxe"
                  className={`${garamond} italic text-[14px] text-[var(--site-text)]/60 hover:text-[var(--site-text)] transition-colors`}
                >
                  voir set luxe →
                </Link>
              </div>
              <span className={`${caveat} text-[14px] text-[var(--site-caveat)]`}>
                comparateur · Avant-propos · set typographique
              </span>
            </div>

            <div className="flex gap-0 -mb-px pt-2 overflow-x-auto">
              {VARIANTS.map((v) => (
                <button
                  key={v.key}
                  onClick={() => setActive(v.key)}
                  className={`${garamond} italic text-[14px] px-4 py-2 border-b-2 transition-all duration-200 whitespace-nowrap ${
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
          <div className="flex items-center gap-5">
            <span className={`${garamond} italic text-[36px] text-[var(--site-accent)] leading-none`}>
              {current.key}
            </span>
            <p className={`${caveat} text-[16px] text-[var(--site-caveat)] leading-snug max-w-[720px]`}>
              {current.description}
            </p>
          </div>
        </div>

        <div>{COMPONENTS[active]}</div>
      </div>
    </V4CSiteTheme>
  );
}
