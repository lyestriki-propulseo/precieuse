import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getPieces } from "@/sanity/lib/content";

const L = "fr" as const;

/** Live static routes under /fr (no studio, no preview/dev/legacy variants). */
const STATIC_PATHS = [
  "", // home -> /fr
  "collection",
  "carnet",
  "creatrice",
  "sur-mesure",
  "contact",
  "mentions-legales",
  "cgv",
  "confidentialite",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: absoluteUrl(`/${L}${path ? `/${path}` : ""}`),
    lastModified: now,
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : 0.7,
  }));

  const pieces = await getPieces();
  const pieceEntries: MetadataRoute.Sitemap = pieces.map((piece) => ({
    url: absoluteUrl(`/${L}/collection/${piece.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...pieceEntries];
}
