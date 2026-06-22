export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

/**
 * `true` once a Sanity project id is provided via env.
 * The data-access layer reads from Sanity when configured, and falls back
 * to the local typed seed otherwise — so the site stays functional while
 * the Sanity project is being created.
 */
export const isSanityConfigured = Boolean(projectId);
