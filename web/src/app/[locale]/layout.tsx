import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { getFooter, getNavigation, getSiteSettings } from "@/sanity/lib/content";
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

  return (
    <div data-locale={locale} className="flex min-h-full flex-1 flex-col">
      <Nav brand={settings.brand} links={navLinks} />
      <main className="flex flex-1 flex-col pt-16">{children}</main>
      <Footer footer={footerVM} />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
