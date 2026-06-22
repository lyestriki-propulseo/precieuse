import { V4CNav } from "@/components/v4c/V4CNav";
import { V4CHero } from "@/components/v4c/V4CHero";
import { V4CAvantPropos } from "@/components/v4c/V4CAvantPropos";
import { V4CSeriesF } from "@/components/v4c/series-variants/V4CSeriesF";
import { V4CMatieresFull } from "@/components/v4c/V4CMatieresFull";
import { V4CEtabli } from "@/components/v4c/V4CEtabli";
import { V4CLettres } from "@/components/v4c/V4CLettres";
import { V4CVisite } from "@/components/v4c/V4CVisite";
import { V4CTrustStrip } from "@/components/v4c/V4CTrustStrip";
import { V4CJournal } from "@/components/v4c/V4CJournal";
import { V4CFooter } from "@/components/v4c/V4CFooter";
import { V4CReveal } from "@/components/v4c/V4CReveal";
import { V4CSiteTheme } from "@/components/v4c/V4CSiteTheme";

export const metadata = {
  title: "Le Carnet — Précieuse · Joaillerie artisanale, Bordeaux",
  description:
    "Feuilletez le carnet d'atelier d'Eméline — pièces dessinées à la main, or 18kt, Bordeaux MMXXVI.",
};

export default function HomePage() {
  return (
    <V4CSiteTheme>
      <div className="-mt-16 antialiased">
        <V4CNav />
        <main>
          <V4CHero />

          <V4CReveal>
            <V4CAvantPropos />
          </V4CReveal>

          <V4CReveal delay={60}>
            <V4CSeriesF />
          </V4CReveal>

          <V4CMatieresFull />

          <V4CReveal delay={60}>
            <V4CEtabli />
          </V4CReveal>

          <V4CReveal delay={60}>
            <V4CLettres />
          </V4CReveal>

          <V4CReveal delay={60}>
            <V4CVisite />
          </V4CReveal>

          <V4CReveal delay={40}>
            <V4CTrustStrip />
          </V4CReveal>

          <V4CReveal delay={60}>
            <V4CJournal />
          </V4CReveal>
        </main>
        <V4CFooter />
      </div>
    </V4CSiteTheme>
  );
}
