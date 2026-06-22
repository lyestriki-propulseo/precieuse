# Précieuse v2 — Plan de refonte (cadré)

> **Sources** : brief « OFFRE PRO Site Internet & SEO » + 11 captures annotées (Pastel) d'Eméline Le Ray (22/06/2026) + kit Drive (logo + 17 photos).
> **Cadrage** : session *grilling* du 22/06/2026.
> **Site live** = build **V4C** (`web/src/components/v4c/` + pages `web/src/app/[locale]/` + `web/src/lib/content/`). Prototypes `v2`/`v3*`/`preview`/`dev` = morts.

## ✅ Décisions verrouillées (grilling)
1. **CMS = Sanity**, tout le contenu
2. **Studio embarqué** `/studio` (next-sanity, même app/déploiement)
3. **Contenu structuré / typé** (champs définis, design verrouillé)
4. **i18n-ready** : champs localisés FR/EN dès le départ ; **EN drafté après le FR validé**
5. **Toggle visiteur teal ↔ blush** : change l'accent **+ le logo**, mémorisé (localStorage), défaut **teal**
6. **Périmètre complet** (pas de coupe ; pas de contrainte de délai bloquante)
7. **Déploiement Vercel** (ISR + revalidation par webhook Sanity)
8. **Prix → « Sur devis »**, aucun prix affiché (400 € = info interne, à confirmer avec Eméline)

## 🟦 Recos éditoriales (à valider)
- « MAISON » → **« Atelier »**
- Année de fondation → **à confirmer** (incohérences MMXIX/2019 · MMXXV/2025 · MMXXVI)
- **Hero** → une photo plein écran (je choisis une forte, swappable par Eméline)
- **Images** : contenu → assets Sanity · logo/favicon/ornements → `/public`
- **Contenu manquant** → seed avec drafts marqués **« à valider »**

## 🧩 Stratégie technique (compte Sanity créé À LA FIN par Lyes)
- En attendant le projet : on écrit **tout le code Sanity** (config, studio, schémas, client, requêtes, seed typé). Les composants lisent Sanity **avec fallback sur le seed local** → **le site reste fonctionnel/démontrable** pendant tout le build, sans double-saisie.
- À la fin : Lyes crée le projet → fournit `projectId` + `dataset=production` + `token` → je lance le **seed** (push contenu) + **upload images** → bascule Sanity live → test sur **Vercel**.
- ⚠️ Caveat local : tester la connexion Sanity dans ce conteneur peut être bloqué par l'egress (`api.sanity.io`/`cdn.sanity.io`, comme `drive.google.com`). Test end-to-end sur Vercel.

## 🛠️ Ordre d'exécution
- **A. Fondations Sanity** : `sanity.config.ts`, route `/studio`, client + image builder, helper i18n (champ localisé), structure de seed.
- **B. Schémas + seed** : `siteSettings`, `nav`, `footer`, `hero`, `avantPropos`, `matiere`, `piece`, `etapeSurMesure`, `temoignage`, `articleCarnet`, `creatrice`, `legalPage`, `trustItem`…
- **C. Câblage** : chaque composant → Sanity (GROQ) + **responsive mobile-first** + **polish premium**, section par section.
- **D. Identité** : **toggle couleur** + **logo/favicon** (picto) + **photos réelles**.
- **E. SEO** : titles/meta (Sanity), Hn, `sitemap.xml`/`robots.txt`, données structurées, perf images.
- **F. EN** : drafts dans les champs localisés + routing `en`.
- **G. Mise en ligne** : Vercel + webhook revalidation + QA multi-devices + go live.

## 📌 Retours d'Eméline → atterrissent dans le seed Sanity
- Récit **Bordeaux / 18 ct** (fait en code, à reporter dans le seed)
- Matières : réécrire ; « pas d'or anonyme » → **« or sourcé et tracé (traité de Kimberley) »** ; certifs GIA/HRD
- Avant-propos : « MAISON » → « Atelier »
- Créatrice : **« Emeline » sans accent** (12 ans OK)
- Sur-mesure : **pas d'anglicismes** ; prix → **Sur devis**
- Hero : **1 photo plein écran**, centrer
- Carnet : changer photos + réécrire articles (drafts à valider)
- Témoignages : **vrais avis** (placeholders marqués « à valider »)
- Logo : kit + **agrandir** + picto en favicon + toggle couleur
- Photos : **17 `.webp` réelles** à la place des placeholders

## 📥 Inputs requis
- **[Lyes — à la fin]** projet Sanity : `projectId`, `dataset=production`, `token`
- **[Lyes]** valider les recos éditoriales (ou « tu décides + tu flagues »)
- **[Eméline]** vrais avis · textes des articles du Carnet · adresse Bordeaux · année de fondation · validation wording

## 🗒️ Notes
- **Push bloqué** sur `claude/v2` (403 — l'env n'autorise que `claude/awesome-gates-4utl5x`). Commits **en local** pour l'instant.
- `lib/content/*` sera migré vers le seed Sanity puis **supprimé**.
- Typecheck : 2 erreurs préexistantes (`PageProps`/`LayoutProps`, types générés Next 16 au build) — sans rapport avec nos changements.
