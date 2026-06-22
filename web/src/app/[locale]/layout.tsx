import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

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
  return (
    <div data-locale={locale} className="flex min-h-full flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col pt-16">{children}</main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
