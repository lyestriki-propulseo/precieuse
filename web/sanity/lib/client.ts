import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "@/sanity/env";

/**
 * Sanity read client. Only meaningful once `isSanityConfigured` is true —
 * the data layer guards every call. `useCdn` for fast, cached reads.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
