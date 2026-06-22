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
import {
  getFooter,
  getHomeContent,
  getMatieres,
  getNavigation,
  getPieces,
  getSiteSettings,
  getTestimonials,
} from "@/sanity/lib/content";
import { pickLocale } from "@/sanity/lib/i18n";
import { toFooterVM, toNavLinks } from "@/sanity/lib/view-models";

export const metadata = {
  title: "Le Carnet — Précieuse · Joaillerie artisanale, Bordeaux",
  description:
    "Feuilletez le carnet d'atelier d'Eméline — pièces dessinées à la main, or 18kt, Bordeaux MMXXVI.",
};

const L = "fr" as const;

export default async function HomePage() {
  const [settings, nav, footer, home, matieres, pieces, testimonials] =
    await Promise.all([
      getSiteSettings(),
      getNavigation(),
      getFooter(),
      getHomeContent(),
      getMatieres(),
      getPieces(),
      getTestimonials(),
    ]);

  const navLinks = toNavLinks(nav, L);

  const matieresVM = matieres.map((m) => ({
    slug: m.slug,
    nom: m.nom,
    sous_titre: pickLocale(m.sousTitre, L),
    description_courte: pickLocale(m.description, L),
    image: m.image.src,
    image_alt: pickLocale(m.image.alt, L),
    annotation_caveat: pickLocale(m.annotationCaveat, L),
    page: m.page,
  }));

  const piecesVM = pieces.map((p) => ({
    slug: p.slug,
    name: p.name,
    tagline: pickLocale(p.tagline, L),
    price: pickLocale(p.priceLabel, L),
    description: pickLocale(p.description, L),
    materials: pickLocale(p.materials, L),
    story: pickLocale(p.story, L),
    image: p.image.src,
    imageAlt: pickLocale(p.image.alt, L),
  }));

  const avantProposVM = {
    heading: pickLocale(home.avantPropos.heading, L),
    pairs: home.avantPropos.pairs.map((p) => ({
      pas: pickLocale(p.pas, L),
      mais: pickLocale(p.mais, L),
    })),
  };

  const trustStripVM = home.trustStrip.map((t) => ({
    titre: pickLocale(t.title, L),
    corps: pickLocale(t.body, L),
    annotation: pickLocale(t.note, L),
  }));

  const visiteVM = {
    addressLines: home.visite.addressLines,
    text: pickLocale(home.visite.text, L),
  };

  const heroVM = {
    image: home.hero.image.src,
    imageAlt: pickLocale(home.hero.image.alt, L),
    eyebrow: pickLocale(home.hero.eyebrow, L),
    headline: pickLocale(home.hero.headline, L),
    sub: pickLocale(home.hero.sub, L),
  };

  const lettresVM = testimonials.map((t) => ({
    citation: pickLocale(t.citation, L),
    auteur: t.auteur,
    ville: t.ville ?? "",
    date: t.date ?? "",
    piece: pickLocale(t.context, L),
  }));

  const footerVM = toFooterVM(footer, settings, L);

  return (
    <V4CSiteTheme>
      <div className="-mt-16 antialiased">
        <V4CNav links={navLinks} />
        <main>
          <V4CHero hero={heroVM} />

          <V4CReveal>
            <V4CAvantPropos avantPropos={avantProposVM} />
          </V4CReveal>

          <V4CReveal delay={60}>
            <V4CSeriesF pieces={piecesVM} />
          </V4CReveal>

          <V4CMatieresFull matieres={matieresVM} />

          <V4CReveal delay={60}>
            <V4CEtabli />
          </V4CReveal>

          <V4CReveal delay={60}>
            <V4CLettres lettres={lettresVM} />
          </V4CReveal>

          <V4CReveal delay={60}>
            <V4CVisite visite={visiteVM} />
          </V4CReveal>

          <V4CReveal delay={40}>
            <V4CTrustStrip items={trustStripVM} />
          </V4CReveal>

          <V4CReveal delay={60}>
            <V4CJournal />
          </V4CReveal>
        </main>
        <V4CFooter footer={footerVM} />
      </div>
    </V4CSiteTheme>
  );
}
