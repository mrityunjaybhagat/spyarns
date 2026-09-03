# S.P. Yarns — Corporate Website

React + Vite + Tailwind CSS v4 multi-page site for S.P. Yarns (textile/yarn manufacturer & exporter, est. 1991).

## Run locally
npm install
npm run dev

## Build for production
npm run build   # outputs to dist/

## Pages
/ (Home), /about, /products, /products/:slug, /global-presence,
/quality-sustainability, /careers, /contact, /privacy-policy, /terms

## Editable content
- src/data/products.js — product catalogue (categories, specs, images)
- src/pages/*.jsx — page copy, stats, leadership placeholders
- src/assets/logo.png — company logo (used as-is)

Notes:
- No map component anywhere (per brief).
- Stats, MOQ, and certification text are marked as editable placeholders.
- Product photography currently uses stock imagery — swap in real product/factory photos before launch.
