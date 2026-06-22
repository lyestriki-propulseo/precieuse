/**
 * Flat, locale-resolved view-models passed as props into presentation
 * components. The conservative wiring pass keeps each component's existing
 * markup; these helpers resolve the localized seed/Sanity shapes to the plain
 * `fr` strings the components already expected from `@/lib/content/*`.
 */
import type { Locale } from "@/sanity/lib/i18n";
import { pickLocale } from "@/sanity/lib/i18n";
import type {
  SeedFooter,
  SeedNavigation,
  SeedSiteSettings,
} from "@/sanity/seed/types";

export type NavLinkVM = { label: string; href: string };

export function toNavLinks(nav: SeedNavigation, locale: Locale): NavLinkVM[] {
  return nav.links.map((l) => ({ label: pickLocale(l.label, locale), href: l.href }));
}

export type FooterVM = {
  brand: string;
  email: string;
  instagram: string;
  address: { street: string; zip: string; city: string; country: string };
  primaryNav: NavLinkVM[];
  legalNav: NavLinkVM[];
  social: NavLinkVM[];
  copyright: string;
};

export function toFooterVM(
  footer: SeedFooter,
  settings: SeedSiteSettings,
  locale: Locale,
): FooterVM {
  return {
    brand: settings.brand,
    email: settings.email,
    instagram: settings.instagram ?? "",
    address: settings.address,
    primaryNav: footer.primaryNav.map((l) => ({
      label: pickLocale(l.label, locale),
      href: l.href,
    })),
    legalNav: footer.legalNav.map((l) => ({
      label: pickLocale(l.label, locale),
      href: l.href,
    })),
    social: footer.social.map((l) => ({
      label: pickLocale(l.label, locale),
      href: l.href,
    })),
    copyright: pickLocale(footer.copyright, locale),
  };
}
