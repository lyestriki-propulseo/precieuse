/**
 * Data-access layer.
 *
 * Each getter returns Sanity data when a project is configured
 * (`isSanityConfigured`), otherwise the local typed seed. Components import
 * from here so they never branch on the data source themselves.
 *
 * NOTE: the Sanity branch is wired up but untested end-to-end (the project
 * does not exist yet). GROQ projections are shaped to match the seed types;
 * image fields are projected to a `{ src, alt }`-compatible shape via the
 * asset URL so the rest of the app stays source-agnostic. Final verification
 * happens on Vercel once the project id + token are provided.
 */
import { isSanityConfigured } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import {
  creatricePageSeed,
  creationsSeed,
  footerSeed,
  homeContentSeed,
  legalPagesSeed,
  matieresSeed,
  navigationSeed,
  piecesSeed,
  processSeed,
  siteSettingsSeed,
  temoignagesSeed,
} from "@/sanity/seed";
import type {
  SeedCreatricePage,
  SeedCreation,
  SeedEtape,
  SeedFooter,
  SeedHomeContent,
  SeedLegalPage,
  SeedMatiere,
  SeedNavigation,
  SeedPiece,
  SeedSiteSettings,
  SeedTemoignage,
} from "@/sanity/seed/types";

// GROQ projection reused for localized image fields -> { src, alt }.
const IMAGE_PROJECTION = `{
  "src": asset->url,
  alt
}`;

export async function getSiteSettings(): Promise<SeedSiteSettings> {
  if (!isSanityConfigured) return siteSettingsSeed;
  const data = await client.fetch<SeedSiteSettings | null>(
    `*[_type == "siteSettings"][0]{
      brand, baseline, phone, email, whatsapp, instagram, address,
      defaultColor, seoTitle, seoDescription
    }`,
  );
  return data ?? siteSettingsSeed;
}

export async function getPieces(): Promise<SeedPiece[]> {
  if (!isSanityConfigured) return piecesSeed;
  const data = await client.fetch<SeedPiece[]>(
    `*[_type == "piece"] | order(order asc){
      "slug": slug.current, name, tagline, priceLabel, description,
      materials, story, "image": image${IMAGE_PROJECTION}
    }`,
  );
  return data?.length ? data : piecesSeed;
}

export async function getPiece(slug: string): Promise<SeedPiece | undefined> {
  const pieces = await getPieces();
  return pieces.find((p) => p.slug === slug);
}

export async function getMatieres(): Promise<SeedMatiere[]> {
  if (!isSanityConfigured) return matieresSeed;
  const data = await client.fetch<SeedMatiere[]>(
    `*[_type == "matiere"] | order(order asc){
      "slug": slug.current, nom, sousTitre, description,
      "image": image${IMAGE_PROJECTION}, annotationCaveat, page
    }`,
  );
  return data?.length ? data : matieresSeed;
}

export async function getProcess(): Promise<SeedEtape[]> {
  if (!isSanityConfigured) return processSeed;
  const data = await client.fetch<SeedEtape[]>(
    `*[_type == "etapeSurMesure"] | order(number asc){
      number, title, description
    }`,
  );
  return data?.length ? data : processSeed;
}

export async function getTestimonials(): Promise<SeedTemoignage[]> {
  if (!isSanityConfigured) return temoignagesSeed;
  const data = await client.fetch<SeedTemoignage[]>(
    `*[_type == "temoignage"]{
      placeholder, citation, auteur, ville, date, context
    }`,
  );
  return data?.length ? data : temoignagesSeed;
}

export async function getCreations(): Promise<SeedCreation[]> {
  if (!isSanityConfigured) return creationsSeed;
  const data = await client.fetch<SeedCreation[]>(
    `*[_type == "creation"] | order(order asc){
      "slug": slug.current, name, subtitle,
      "image": image${IMAGE_PROJECTION}, story, matiere, year, status
    }`,
  );
  return data?.length ? data : creationsSeed;
}

export async function getCreatrice(): Promise<SeedCreatricePage> {
  if (!isSanityConfigured) return creatricePageSeed;
  const data = await client.fetch<SeedCreatricePage | null>(
    `*[_type == "creatricePage"][0]{
      overline, title, intro, "portrait": portrait${IMAGE_PROJECTION},
      sections[]{ overline, title, body, "image": image${IMAGE_PROJECTION} },
      quote
    }`,
  );
  return data ?? creatricePageSeed;
}

export async function getHomeContent(): Promise<SeedHomeContent> {
  if (!isSanityConfigured) return homeContentSeed;
  const data = await client.fetch<SeedHomeContent | null>(
    `*[_type == "homeContent"][0]{
      hero{ "image": image${IMAGE_PROJECTION}, eyebrow, headline, sub },
      avantPropos{ heading, pairs[]{ pas, mais } },
      trustStrip[]{ title, body, note },
      visite{ addressLines, text }
    }`,
  );
  return data ?? homeContentSeed;
}

export async function getLegalPages(): Promise<SeedLegalPage[]> {
  if (!isSanityConfigured) return legalPagesSeed;
  const data = await client.fetch<SeedLegalPage[]>(
    `*[_type == "legalPage"]{
      "slug": slug.current, title, "body": body
    }`,
  );
  return data?.length ? data : legalPagesSeed;
}

export async function getLegalPage(
  slug: string,
): Promise<SeedLegalPage | undefined> {
  const pages = await getLegalPages();
  return pages.find((p) => p.slug === slug);
}

export async function getNavigation(): Promise<SeedNavigation> {
  if (!isSanityConfigured) return navigationSeed;
  const data = await client.fetch<SeedNavigation | null>(
    `*[_type == "navigation"][0]{ links[]{ label, href } }`,
  );
  return data ?? navigationSeed;
}

export async function getFooter(): Promise<SeedFooter> {
  if (!isSanityConfigured) return footerSeed;
  const data = await client.fetch<SeedFooter | null>(
    `*[_type == "footer"][0]{
      primaryNav[]{ label, href }, legalNav[]{ label, href },
      social[]{ label, href }, copyright
    }`,
  );
  return data ?? footerSeed;
}
