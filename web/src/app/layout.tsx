import type { Metadata } from "next";
import { Bodoni_Moda, Caveat, Cormorant_Garamond, EB_Garamond, Inter, JetBrains_Mono, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { BrandProvider } from "@/components/brand/BrandProvider";
import { BrandToggle } from "@/components/brand/BrandToggle";
import { BRAND_STORAGE_KEY, DEFAULT_BRAND } from "@/components/brand/brand";

// Pose `data-brand` AVANT le paint depuis localStorage → pas de flash d'accent.
const brandNoFlashScript = `(function(){try{var b=localStorage.getItem(${JSON.stringify(
  BRAND_STORAGE_KEY,
)});if(b!=="teal"&&b!=="blush"){b=${JSON.stringify(
  DEFAULT_BRAND,
)};}document.documentElement.setAttribute("data-brand",b);}catch(e){document.documentElement.setAttribute("data-brand",${JSON.stringify(
  DEFAULT_BRAND,
)});}})();`;

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Précieuse — Joaillerie artisanale",
  description:
    "Bijoux en or 18kt et diamants GVS, dessinés et fabriqués à la main à Bordeaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO Phase 5 : `lang` deviendra dynamique via next-intl quand EN/PT seront actifs.
    <html
      lang="fr"
      data-brand={DEFAULT_BRAND}
      className={`${playfair.variable} ${bodoni.variable} ${inter.variable} ${jetbrainsMono.variable} ${cormorant.variable} ${ebGaramond.variable} ${manrope.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: brandNoFlashScript }} />
      </head>
      <body className="bg-cream text-foreground flex min-h-full flex-col font-sans">
        <BrandProvider>
          {children}
          <BrandToggle />
        </BrandProvider>
      </body>
    </html>
  );
}
