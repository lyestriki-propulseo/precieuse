import type { CSSProperties, ReactNode } from "react";
import { SITE_THEMES, DEFAULT_THEME_ID } from "./etabli-variants/themes";

/**
 * Habillage des surfaces V4C (home / carnet).
 *
 * Le fond, la surface, le texte et l'encre restent figés sur la palette « vélin »
 * (le crème du site). Seul l'ACCENT suit le toggle visiteur teal ↔ blush :
 * `--site-accent` est routé sur `--brand-accent` (piloté par `data-brand` sur
 * <html>, voir globals.css + BrandProvider). Plus de switcheur dev 9 palettes.
 */
export function V4CSiteTheme({ children }: { children: ReactNode }) {
  const theme = SITE_THEMES.find((t) => t.id === DEFAULT_THEME_ID) ?? SITE_THEMES[0];

  const cssVars: CSSProperties = {
    ["--site-bg" as string]: theme.bg,
    ["--site-surface" as string]: theme.surface,
    ["--site-text" as string]: theme.text,
    // Accent de marque (teal/blush) — suit le toggle visiteur.
    ["--site-accent" as string]: "var(--brand-accent)",
    ["--site-caveat" as string]: theme.caveat,
  };

  return (
    <div style={cssVars} className="bg-[var(--site-bg)] text-[var(--site-text)]">
      {children}
    </div>
  );
}
