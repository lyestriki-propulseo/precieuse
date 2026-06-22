// Toggle couleur visiteur (teal ↔ blush) — modèle de marque partagé.
// Le choix pilote l'accent (CSS var `--brand-accent`, via `data-brand` sur <html>)
// et, à terme, le logo (voir BRAND_LOGOS ci-dessous).

export type Brand = "teal" | "blush";

export const BRANDS: Brand[] = ["teal", "blush"];
export const DEFAULT_BRAND: Brand = "teal";
export const BRAND_STORAGE_KEY = "precieuse-brand";

export const BRAND_LABELS: Record<Brand, string> = {
  teal: "Teal",
  blush: "Blush",
};

// Pastilles d'aperçu pour le contrôle (doivent suivre les valeurs de globals.css).
export const BRAND_SWATCHES: Record<Brand, string> = {
  teal: "#125e5e",
  blush: "#b97e72",
};

// Logo par marque. TODO(assets) : le logo blush n'est pas encore livré —
// les deux clés pointent pour l'instant sur le logo actuel. Dès que l'asset
// blush atterrit dans /public/brand, remplacer la ligne `blush` (one-liner).
export const BRAND_LOGOS: Record<Brand, string> = {
  teal: "/brand/logo.png",
  blush: "/brand/logo.png", // TODO(assets): -> "/brand/logo-blush.png"
};

export function isBrand(value: unknown): value is Brand {
  return value === "teal" || value === "blush";
}

export function logoForBrand(brand: Brand): string {
  return BRAND_LOGOS[brand] ?? BRAND_LOGOS[DEFAULT_BRAND];
}
