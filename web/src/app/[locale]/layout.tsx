import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { Toaster } from "@/components/ui/sonner";
import { absoluteUrl, SITE_NAME, SITE_URL } from "@/lib/seo";
import { getFooter, getNavigation, getSiteSettings } from "@/sanity/lib/content";
import { pickLocale } from "@/sanity/lib/i18n";
import { toFooterVM, toNavLinks } from "@/sanity/lib/view-models";

const SUPPORTED = ["fr"] as const;

export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!(SUPPORTED as readonly string[]).includes(locale)) {
    notFound();
  }

  const L = "fr" as const;
  const [nav, footer, settings] = await Promise.all([
    getNavigation(),
    getFooter(),
    getSiteSettings(),
  ]);
  const navLinks = toNavLinks(nav, L);
  const footerVM = toFooterVM(footer, settings, L);

  // Organization / JewelryStore structured data. Only emit fields we can
  // source from settings; the street address is a placeholder in the seed,
  // so we expose city/country (areaServed) rather than a full postal address.
  const sameAs = [settings.instagram].filter(
    (v): v is string => typeof v === "string" && v.length > 0,
  );
  const orgJsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    name: SITE_NAME,
    description: pickLocale(settings.seoDescription, L),
    url: SITE_URL,
    image: absoluteUrl("/icon.png"),
    email: settings.email,
    areaServed: [settings.address.city, settings.address.country].filter(
      Boolean,
    ),
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <div data-locale={locale} className="flex min-h-full flex-1 flex-col">
      <JsonLd data={orgJsonLd} />
      <Nav brand={settings.brand} links={navLinks} />
      <main className="flex flex-1 flex-col pt-16">{children}</main>
      <Footer footer={footerVM} />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
