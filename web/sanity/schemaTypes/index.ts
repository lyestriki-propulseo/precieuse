import type { SchemaTypeDefinition } from "sanity";

import { localizedTypes } from "@/sanity/lib/i18n";
import { siteSettings } from "@/sanity/schemaTypes/documents/siteSettings";
import { piece } from "@/sanity/schemaTypes/documents/piece";
import { matiere } from "@/sanity/schemaTypes/documents/matiere";
import { etapeSurMesure } from "@/sanity/schemaTypes/documents/etapeSurMesure";
import { temoignage } from "@/sanity/schemaTypes/documents/temoignage";
import { creation } from "@/sanity/schemaTypes/documents/creation";
import { creatricePage } from "@/sanity/schemaTypes/documents/creatricePage";
import { homeContent } from "@/sanity/schemaTypes/documents/homeContent";
import { legalPage } from "@/sanity/schemaTypes/documents/legalPage";
import { navigation } from "@/sanity/schemaTypes/documents/navigation";
import { footer } from "@/sanity/schemaTypes/documents/footer";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Shared localized field object types
  ...localizedTypes,
  // Documents
  siteSettings,
  piece,
  matiere,
  etapeSurMesure,
  temoignage,
  creation,
  creatricePage,
  homeContent,
  legalPage,
  navigation,
  footer,
];
