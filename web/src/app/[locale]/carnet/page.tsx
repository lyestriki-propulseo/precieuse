import { V4CNav } from "@/components/v4c/V4CNav";
import { V4CCreations } from "@/components/v4c/V4CCreations";
import { V4CFooter } from "@/components/v4c/V4CFooter";
import { V4CSiteTheme } from "@/components/v4c/V4CSiteTheme";

export const metadata = {
  title: "Le Carnet d'Eméline — Précieuse · Joaillerie artisanale, Bordeaux",
  description:
    "Pièces signées, archives de l'atelier et carnet d'œuvres d'Eméline — Joséphine, Aurore, Louise et les autres. Bordeaux MMXXVI.",
};

export default function CarnetPage() {
  return (
    <V4CSiteTheme>
      <div className="bg-[var(--site-bg)] text-[var(--site-text)] antialiased min-h-screen">
        <V4CNav />
        <main className="pt-16">
          <V4CCreations />
        </main>
        <V4CFooter />
      </div>
    </V4CSiteTheme>
  );
}
