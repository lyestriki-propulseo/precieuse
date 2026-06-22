/**
 * Shared SEO constants.
 *
 * FLAG: the production domain is not yet confirmed. `SITE_URL` reads from
 * `NEXT_PUBLIC_SITE_URL` and falls back to a placeholder `https://precieuse.fr`.
 * Set the env var (and confirm the real domain) before launch — it feeds the
 * sitemap, robots, `metadataBase`, canonicals and JSON-LD.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://precieuse.fr"
).replace(/\/$/, "");

/** Brand name used across metadata and structured data. */
export const SITE_NAME = "Précieuse";

/** Default locale segment served today (EN is drafted in a later pass). */
export const DEFAULT_LOCALE_SEGMENT = "fr";

/** Build an absolute URL from a path (leading slash optional). */
export function absoluteUrl(path = ""): string {
  const suffix = path.startsWith("/") ? path : path ? `/${path}` : "";
  return `${SITE_URL}${suffix}`;
}
