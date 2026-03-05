# YMCA Website Services Sandboxes landing page

## Source

### Design wireframes

https://xd.adobe.com/view/4c680fc3-feba-4ad1-409f-09efedcd66ac-3a59/

There are 3 variations:
- Mobile Phone (MIN)
- Mobile Tablet
- Desktop (Fixed MAX)

### Images

https://drive.google.com/drive/folders/1j40bjO1l7fD7M6w3QEEcgkkLHZB7N8hn?usp=sharing

### Page text

```
Sandbox

Welcome to the YMCA Website Services demo site! Compare the three themes currently offered on YMCA Website Services and discover the range of
capabilities across different installation levels of the platform.
```

### Sandbox Domain Names

- sandboxes.y.org

- sandbox-carnation-cus.y.org
- sandbox-carnation-ext.y.org
- sandbox-carnation-std.y.org

- sandbox-carnation-std-virtual-y.y.org
- sandbox-carnation-std-membership-framework.y.org
- sandbox-carnation-cus-d9.y.org

### Header

The logo and "back to YMCA Website Services.org" point to https://ycloud.y.org/open-y-association-websites/.

The logo is to be taken from openy.org.

### Fonts

The used fonts:

- Quicksand, regular
- Quicksand, bold
- Roboto, regular
- Roboto, medium

The fonts are to be taken from Google fonts.

### Theme palette

- black #000000
- white #FFFFFF
- red #F41938 (+ #D0343A for contrast with white)
- light-grey #F2F2F2

# Development

## Stack

- **Vite 6** — build tool and dev server
- **TypeScript** — type-safe scripts
- **Tailwind CSS v4** — utility-first styling
- **Nunjucks** (via Vituum) — templating engine
- **Playwright** — visual regression testing

## Usage

Project installation:

`npm install`

To start local environment:

`npm run dev`

To build production artifacts:

`npm run build`

To preview production build:

`npm run preview`

## Project structure

- `vite.config.ts` — Vite configuration with Vituum, Nunjucks, and Tailwind plugins
- `tsconfig.json` — TypeScript configuration
- `playwright.config.ts` — Playwright test configuration
- `src/` — contains all the source files:
   - `layouts/base.njk` — the base HTML layout (head, header, footer)
   - `pages/index.njk` — the main page content
   - `components/card.njk` — card component template
   - `styles/main.css` — Tailwind CSS imports, theme config, and custom card styles
   - `scripts/main.ts` — TypeScript entry point
   - `data/global.json` — page content data (auto-loaded by Vituum)
   - `assets/` — all images used in the page
- `public/` — static assets served at root (favicon, og_image)
- `tests/` — Playwright visual comparison tests

### global.json

The file describes all the content needed to build the static page.

Structure:

- `title` — the page title, used in meta tags
- `description` — the page description, used in meta tags
- `url` — the URL where this page is hosted, used in meta tags
- `header` — the content header
- `intro` — the intro text
- `cards` — the array of card objects:
  - `id` — the card id, used as HTML `id` attribute and in CSS for background images
  - `link` — a link to a sandbox website
  - `title` — a card title
  - `description` — a card body content, non-sanitized, can contain HTML markup
