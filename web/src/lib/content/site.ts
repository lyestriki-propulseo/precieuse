export const SITE = {
  brand: "Précieuse",
  baseline: "Joaillerie artisanale · Bordeaux",
  description:
    "Bijoux en or 18kt et diamants GVS, dessinés et fabriqués à la main à Bordeaux.",
  email: "contact@precieuse.fr",
  whatsapp: "https://wa.me/33000000000",
  instagram: "https://instagram.com/precieuse.bijoux",
} as const;

// TODO Phase 5 : remplacer le préfixe `/fr/` hardcodé par next-intl Link
// (les liens deviendront locale-aware automatiquement).
export const NAV_LINKS = [
  { href: "/fr/collection", label: "Collection" },
  { href: "/fr/creatrice", label: "Créatrice" },
  { href: "/fr/sur-mesure", label: "Sur-mesure" },
  { href: "/fr/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = [
  { href: "/fr/mentions-legales", label: "Mentions légales" },
  { href: "/fr/confidentialite", label: "Confidentialité" },
  { href: "/fr/cgv", label: "CGV" },
  { href: "/fr/contact", label: "Contact" },
] as const;
