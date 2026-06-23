import { defineField, defineType } from "sanity";

/**
 * Localization is handled with plain localized-field objects `{ fr, en }`
 * (no extra plugin). FR is the default locale; EN is drafted in a later pass.
 */
export const LOCALES = ["fr", "en"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "fr";

/** Shape of a localized scalar/text value stored in Sanity and in the seed. */
export type LocalizedString = {
  fr?: string;
  en?: string;
};

/** Shape of a localized portable-text value (array of blocks per locale). */
export type LocalizedPortableText = {
  fr?: unknown[];
  en?: unknown[];
};

/**
 * Pick the value for `locale`, falling back to `fallback` (default `fr`)
 * then to any present locale, then to an empty string.
 */
export function pickLocale(
  value: LocalizedString | string | undefined | null,
  locale: Locale,
  fallback: Locale = DEFAULT_LOCALE,
): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[locale] || value[fallback] || value.fr || value.en || "";
}

/**
 * Pick the portable-text blocks for `locale`, with FR fallback.
 */
export function pickLocaleBlocks(
  value: LocalizedPortableText | undefined | null,
  locale: Locale,
  fallback: Locale = DEFAULT_LOCALE,
): unknown[] {
  if (value == null) return [];
  return value[locale] || value[fallback] || value.fr || value.en || [];
}

// ---------------------------------------------------------------------------
// Schema object types reused across documents for translatable fields.
// ---------------------------------------------------------------------------

export const localizedString = defineType({
  name: "localizedString",
  title: "Texte (FR/EN)",
  type: "object",
  fields: [
    defineField({ name: "fr", title: "Français", type: "string" }),
    defineField({ name: "en", title: "English", type: "string" }),
  ],
});

export const localizedText = defineType({
  name: "localizedText",
  title: "Texte long (FR/EN)",
  type: "object",
  fields: [
    defineField({ name: "fr", title: "Français", type: "text", rows: 4 }),
    defineField({ name: "en", title: "English", type: "text", rows: 4 }),
  ],
});

export const localizedPortableText = defineType({
  name: "localizedPortableText",
  title: "Contenu riche (FR/EN)",
  type: "object",
  fields: [
    defineField({
      name: "fr",
      title: "Français",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "en",
      title: "English",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});

export const localizedTypes = [
  localizedString,
  localizedText,
  localizedPortableText,
];
