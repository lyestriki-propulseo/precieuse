import { V4CNav } from "@/components/v4c/V4CNav";
import { V4CCreations } from "@/components/v4c/V4CCreations";
import { V4CFooter } from "@/components/v4c/V4CFooter";
import { V4CSiteTheme } from "@/components/v4c/V4CSiteTheme";
import {
  getCreations,
  getFooter,
  getNavigation,
  getSiteSettings,
} from "@/sanity/lib/content";
import { pickLocale } from "@/sanity/lib/i18n";
import { toFooterVM, toNavLinks } from "@/sanity/lib/view-models";

export const metadata = {
  title: { absolute: "Le Carnet d'Emeline — Précieuse · Joaillerie artisanale, Bordeaux" },
  description:
    "Pièces signées, archives de l'atelier et carnet d'œuvres d'Emeline — Joséphine, Aurore, Louise et les autres. Bordeaux MMXXVI.",
};

const L = "fr" as const;

export default async function CarnetPage() {
  const [nav, footer, settings, creations] = await Promise.all([
    getNavigation(),
    getFooter(),
    getSiteSettings(),
    getCreations(),
  ]);

  const navLinks = toNavLinks(nav, L);
  const footerVM = toFooterVM(footer, settings, L);

  const signatures = creations
    .filter((c) => c.status === "signature")
    .map((c) => ({
      id: c.slug,
      name: c.name,
      subtitle: pickLocale(c.subtitle, L),
      image: c.image?.src ?? "",
      story: c.story.fr ?? [],
      matiere: pickLocale(c.matiere, L),
      year: c.year,
      status: c.status,
    }));

  const galerie = creations
    .filter((c) => c.status !== "signature")
    .map((c) => ({
      id: c.slug,
      name: c.name,
      image: c.image?.src,
      matiere: pickLocale(c.matiere, L),
      year: c.year,
      status: c.status,
      story: (c.story.fr ?? []).join(" "),
    }));

  return (
    <V4CSiteTheme>
      <div className="bg-[var(--site-bg)] text-[var(--site-text)] antialiased min-h-screen">
        <V4CNav links={navLinks} />
        <main className="pt-16">
          <V4CCreations signatures={signatures} galerie={galerie} />
        </main>
        <V4CFooter footer={footerVM} />
      </div>
    </V4CSiteTheme>
  );
}
