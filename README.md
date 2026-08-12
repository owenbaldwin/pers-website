# Owen Baldwin — Personal Website

A frontend-only personal site built with Angular 20 and SCSS: positioning, selected work,
long-form case studies, and (soon) writing.

## Getting started

The project uses Node 20.19.5, recorded in `.nvmrc`.

```bash
nvm use
npm install   # required: the site now self-hosts its typefaces via @fontsource-variable
npm start
```

Open [http://localhost:4200](http://localhost:4200) after the development server starts.

## Structure

```
src/app
├── app.ts / app.html          # shell: skip link, header, router outlet, footer
├── app.routes.ts              # /  ·  /work/lvfx  ·  /about  ·  /writing
├── content/site-links.ts      # LinkedIn / email / CV — replace the placeholders here
├── layout/                    # site-header, site-footer
├── ui/                        # section-heading, media-placeholder, arrow-link
└── pages/                     # home, lvfx, about, writing
```

## Design system

All design tokens live in `src/styles.scss` under `:root` — colour, type scale, spacing and
layout. Change them there and the whole site follows.

- Background: warm parchment ivory · type: charcoal · inverted bands: deep ink navy
- Single accent: oxblood, used sparingly (rules, indices, links)
- Type: Source Serif 4 Variable (display/headings) + Inter Variable (UI/body), both SIL OFL and
  self-hosted through `@fontsource-variable` (wired up in `angular.json` → `styles`)

## Editing content

- Homepage principles and capabilities: `src/app/pages/home/home.ts`
- Case-study copy and lists: `src/app/pages/lvfx/`
- Writing index: add entries to `notes` in `src/app/pages/writing/writing.ts`; give a note a
  `slug` and `date` to publish it instead of showing it as forthcoming
- Contact links: `src/app/content/site-links.ts`
- Image placeholders: replace `<app-media-placeholder>` with `<img>` once assets exist

## Commands

```bash
npm start      # Local development server
npm run build  # Production build
npm test       # Unit tests
```
