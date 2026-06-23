import createImageUrlBuilder, {
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Build a Sanity image URL. Use only on assets coming from Sanity.
 * Seed images are plain `/public` paths and don't go through this.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
