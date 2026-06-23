import { createClient, type SanityClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

/**
 * Sanity read client. Only meaningful once `isSanityConfigured` is true —
 * the data layer guards every call. `useCdn` for fast, cached reads.
 *
 * Created lazily: `createClient` throws when `projectId` is empty, so while
 * the Sanity project is being set up we expose `null` (typed as a client so
 * call sites stay clean). Every getter in `content.ts` short-circuits to the
 * seed via `isSanityConfigured` before touching this, so it's never used.
 */
export const client: SanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : (null as unknown as SanityClient);
