import type { LocalizedString } from "@/sanity/lib/i18n";

/**
 * Typed shapes for the LOCAL SEED — the fallback content served while the
 * Sanity project does not yet exist. These mirror the schema documents but
 * use plain `/public` image paths instead of Sanity image assets.
 *
 * FR is populated; EN is intentionally left empty (filled in a later pass).
 */

export type SeedImage = {
  /** Path under /public, e.g. "/images/…". */
  src: string;
  alt: LocalizedString;
};

export type SeedSiteSettings = {
  brand: string;
  baseline: LocalizedString;
  phone?: string;
  email: string;
  whatsapp?: string;
  instagram?: string;
  address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
  defaultColor: "teal" | "blush";
  seoTitle: LocalizedString;
  seoDescription: LocalizedString;
};

export type SeedPiece = {
  slug: string;
  name: string;
  tagline: LocalizedString;
  priceLabel: LocalizedString;
  description: LocalizedString;
  materials: LocalizedString;
  story: LocalizedString;
  image: SeedImage;
};

export type SeedMatiere = {
  slug: string;
  nom: string;
  sousTitre: LocalizedString;
  description: LocalizedString;
  image: SeedImage;
  annotationCaveat: LocalizedString;
  page: string;
};

export type SeedEtape = {
  number: string;
  title: LocalizedString;
  description: LocalizedString;
};

export type SeedTemoignage = {
  /** Placeholder à remplacer par un vrai avis (Eméline). */
  placeholder: boolean;
  citation: LocalizedString;
  auteur: string;
  ville?: string;
  date?: string;
  context?: LocalizedString;
};

export type CreationStatus = "vendue" | "disponible" | "signature";

export type SeedCreation = {
  slug: string;
  name: string;
  subtitle: LocalizedString;
  image?: SeedImage;
  story: { fr: string[]; en: string[] };
  matiere: LocalizedString;
  year: string;
  status: CreationStatus;
};

export type SeedCreatriceSection = {
  overline: LocalizedString;
  title: LocalizedString;
  body: LocalizedString;
  image?: SeedImage;
};

export type SeedCreatricePage = {
  overline: LocalizedString;
  title: LocalizedString;
  intro: LocalizedString;
  portrait: SeedImage;
  sections: SeedCreatriceSection[];
  quote: LocalizedString;
};

export type SeedHomeContent = {
  hero: {
    image: SeedImage;
    eyebrow: LocalizedString;
    headline: LocalizedString;
    sub: LocalizedString;
  };
  avantPropos: {
    heading: LocalizedString;
    pairs: { pas: LocalizedString; mais: LocalizedString }[];
  };
  trustStrip: {
    title: LocalizedString;
    body: LocalizedString;
    note: LocalizedString;
  }[];
  visite: {
    addressLines: string[];
    text: LocalizedString;
  };
};

export type SeedLegalPage = {
  slug: string;
  title: LocalizedString;
  /** Plain paragraphs for the seed; becomes localized portable text in Sanity. */
  body: { fr: string[]; en: string[] };
};

export type SeedNavLink = {
  label: LocalizedString;
  href: string;
};

export type SeedNavigation = {
  links: SeedNavLink[];
};

export type SeedFooter = {
  primaryNav: SeedNavLink[];
  legalNav: SeedNavLink[];
  social: SeedNavLink[];
  copyright: LocalizedString;
};
