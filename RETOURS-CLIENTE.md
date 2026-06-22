# Retours cliente — Plan v2 (Précieuse)

> **Source** : 11 captures annotées (outil *Pastel*) envoyées par Eméline Le Ray le 22/06/2026,
> + kit logo (5 lockups × 2 couleurs) et 17 photos produits, via Google Drive.
>
> **Périmètre technique** : le site **live** est le build **`V4C`**
> (`web/src/components/v4c/` + pages `web/src/app/[locale]/` + contenu `web/src/lib/content/`).
> Les prototypes `v2`, `v3`, `v3a`, `v3b`, `v3c`, `preview/`, `dev/` sont **morts** → hors périmètre.

## Légende
- `[x]` fait · `[ ]` à faire
- 🟢 sans dépendance · 🟡 besoin d'un contenu/validation d'Eméline · 🔵 technique/structurant · ⏳ à confirmer

## Décisions actées
- **Récit de marque** : fabrication à **Bordeaux / France** (fini Portugal/Lisboa) · or **18 carats** (fini 19)
- **Traduction FR / EN** dans le périmètre v2 (à faire **après** le FR figé)

---

## ✅ Lot 0 — Récit de marque _(FAIT — commit `a6c5797`, en local, à pousser)_
- [x] Or 19 carats / 19kt → **18 carats / 18kt** (matières, produits, collection, avant-propos, méta)
- [x] Lisboa / Lisbonne → **Bordeaux** · Portugal → **France** · « atelier portugais » → Bordeaux
- [x] Réécriture de la phrase Matières qui comparait le 19kt au 18kt français
- [x] Footer (V4C + layout), Nav, Hero, TrustStrip, Visite, Avant-propos, Carnet, mentions légales
- [ ] ⏳ **Adresse postale de Bordeaux** réelle (placeholder `[Adresse Bordeaux — à confirmer]` posé dans le footer + Visite)
- [ ] Renommer assets/slug interne `or-19kt` → `or-18kt` (`matieres.ts` + fichiers images)

## Lot 1 — Logo / identité 🟢 🔵
- [ ] Récupérer le kit depuis Drive (`Logo/`, 10 PNG 300 dpi) → optimiser web → `web/public/brand/`
- [ ] ⏳ **Couleur primaire : teal ou blush ?**
- [ ] **Header** (`V4CNav` + `layout/Nav`) : logo horizontal **agrandi** (« remettre/grossir le logo »)
- [ ] **Footer** : logo vertical (lockup `logo-picto-bas`)
- [ ] **Favicon** : le picto (fleur) seul (`picto_seul`) → `web/src/app/favicon.ico` + icônes
- [ ] Remplacer l'actuel `web/public/brand/logo.png` (teal horizontal)

## Lot 2 — Photos produits 🟢
- [ ] Importer les **17 `.webp`** du Drive (`Photo/`) → `web/public/images/...`
- [ ] Mapper chaque photo à la bonne pièce/section : Joséphine, Aurore, Thelma, Louise, bracelet, collier perle, collier saphir, mains, buste…
- [ ] Remplacer les placeholders : hero, collection, carnet (`creations-variants/data.ts`), matières

## Lot 3 — Page d'accueil / Hero 🟡 ⏳
- [ ] **Une seule photo pleine page** — ⏳ laquelle ?
- [ ] Revoir la mise en page (« la séparation fait bizarre, on lit mal les variantes ») → **centrer**
- [ ] Garder « le bon texte » — ⏳ lequel ?

## Lot 4 — Textes / contenus 🟡
- [ ] **« MAISON »** (avant-propos) → à remplacer — ⏳ par quoi ?
- [ ] **Matières** : réécrire (« trouver autre chose ») ; « pas d'or anonyme » → **« or sourcé et tracé grâce au traité de Kimberley »** ; certifications **GIA / HRD**
- [ ] **Créatrice** : « Eméline » → **« Emeline » sans accent** _(« 12 ans » déjà OK ✅)_
- [ ] **Sur-mesure** : supprimer les **anglicismes**
- [ ] **Prix** ⏳ : « jamais de prix hors devis » **vs** « je commence à 400 € » → afficher « à partir de 400 € » ou aucun prix ?

## Lot 5 — Le Carnet (blog) 🟡 _(gros morceau)_
- [ ] Changer **toutes les photos** des articles
- [ ] Réécrire **tous les textes** des articles
- [ ] → besoin du contenu rédactionnel d'Eméline (ou draft IA à valider)

## Lot 6 — Témoignages 🟡
- [ ] Remplacer les avis fictifs (Claire/Sophie/Margaux) par ses **vrais avis** (`lettres-variants/data.ts`) — textes + prénoms/villes

## Lot 7 — Cohérence & détails ⏳
- [ ] **Années** à harmoniser : footer « fondée **MMXIX / 2019** » vs « **MMXXV / 2025** » vs « **MMXXVI** » partout — ⏳ la bonne ?
- [ ] Titre de la home affiche « **Le Carnet —** » (probable bug de copie)
- [ ] Pièce « **Cocktail de Lisbonne** » (`creations-variants/data.ts`) : renommer ? ⏳
- [ ] Nom de fonction interne `MapLisbonne` (cosmétique, texte affiché déjà « BORDEAUX »)

## Lot 8 — Traduction FR / EN 🔵 _(après FR figé)_
- [ ] Mettre en place les **catalogues next-intl** (le contenu est aujourd'hui en dur dans `lib/content` + composants)
- [ ] ⏳ Miroir complet ou pages clés d'abord ?
- [ ] ⏳ Qui rédige l'EN (je drafte / traducteur) ?

---

## 📨 Inputs à demander à Eméline (en un seul message)
- [ ] Adresse postale **Bordeaux**
- [ ] Politique de **prix** (afficher « à partir de 400 € » ? ou rien ?)
- [ ] Remplacement du mot **« MAISON »**
- [ ] **Photo** du hero (plein écran) + **texte** à conserver
- [ ] Ses **vrais avis** clients (textes + prénoms/villes)
- [ ] **Textes + photos** des articles du Carnet
- [ ] Wording **Matières** validé
- [ ] **Année** de fondation correcte
- [ ] Périmètre **EN** (miroir complet vs pages clés)

## Notes techniques
- **Push** : l'environnement n'autorise que la branche `claude/awesome-gates-4utl5x` (push `claude/v2` → 403). Commits en local pour l'instant.
- **i18n** : `next-intl` installé + routing `[locale]`, mais **pas de catalogues** → chantier à part (Lot 8).
- **Typecheck** : `pnpm -C web typecheck` remonte 2 erreurs **préexistantes** (`PageProps`/`LayoutProps`, types générés par Next 16 au build) — sans rapport avec les retours.
