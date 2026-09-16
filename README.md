# Portfolio — Emmanuel Bailly

Portfolio personnel — Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion · i18n FR/EN.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir <http://localhost:3000>.

## Structure

```
app/
├── layout.tsx           # Layout global + I18nProvider
├── page.tsx             # Home
├── globals.css          # Tailwind + tokens design
├── icon.svg             # Favicon
├── gallery/page.tsx     # Galerie 3D/CAO
└── projects/
    ├── mobilis/
    ├── biomemory/
    ├── vic2d/
    ├── symbiosuits/
    ├── calendrier-bti/
    ├── arcade-online/
    └── safe-screen/
components/
├── Header.tsx           # Nav sticky avec toggle FR/EN
├── Footer.tsx
├── Hero.tsx
├── About.tsx
├── Skills.tsx           # Briques thématiques
├── Experience.tsx       # Timeline zigzag
├── Projects.tsx
├── GalleryTeaser.tsx
├── Contact.tsx
├── ProjectPage.tsx      # Template unique pour les 7 pages projet
├── Sparkle.tsx          # SVG chrome animé
└── SectionHeader.tsx
lib/
├── i18n.tsx             # Context léger custom (localStorage)
├── translations.ts      # Toutes les strings FR/EN
└── projects.ts          # Contenu détaillé des 7 pages projet (FR/EN)
```

## Modifier le contenu

- **Textes du site (hero, sections, footer)** : `lib/translations.ts`
- **Pages projet** (pitch, contribution, résultats, stack, liens) : `lib/projects.ts`
- **Ordre / couleur d'accent** de chaque projet : `lib/projects.ts` → `projectOrder`
- **Compétences** (briques) : `lib/translations.ts` → `skills.groups`
- **Expérience** (timeline) : `lib/translations.ts` → `experience.items`

## Déploiement Render

Le `render.yaml` déclare un service web Node. Sur Render :

1. New → Blueprint → sélectionne ce repo.
2. Node version = 20 (déjà réglé via env var).
3. Deploy.

Build : `npm install && npm run build`
Start : `npm run start`

## Galerie 3D/CAO

Les cases sont des placeholders. Pour ajouter tes visuels :

1. Dépose les images dans `public/gallery/<slug>/` (ex : `public/gallery/mobilis/01.jpg`).
2. Adapte `app/gallery/page.tsx` pour mapper sur les fichiers réels (ou crée un `lib/gallery.ts` si tu veux — dis-moi).
```
