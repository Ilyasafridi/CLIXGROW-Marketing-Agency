# CLIXGROW Marketing Agency — Final Website

One page, three core files — everything else lives inside `index.html` as linked sections.

## Files
- `index.html` — the whole site: Home, Services, Why Us, Process, Markets, Contact as sections inside one page, linked to each other by the navbar/anchors (`#services`, `#why-us`, etc.)
- `style.css` — one shared theme: colors, layout, responsiveness, transitions & animations
- `script.js` — mobile menu, scroll-reveal animation, and scroll-spy nav highlighting
- `assets/` — logo icon + favicons

## What changed in this version
- Navbar now uses a gradient pulled straight from the site's own purple palette (instead of flat dark), while staying visibly distinct via blur + a soft glowing bottom edge
- New tagline added to the hero: **"Make Your Brand Impossible To Ignore."** (also echoed in the footer and the closing call-to-action)
- Back to a single `index.html` with the Services/Why Us/Process/Markets/Contact sections linked inside it, instead of separate page files — `style.css` and `script.js` stay as their own linked files
- Nav now highlights whichever section is currently in view as you scroll

## Deploy to Vercel
1. Push this folder to GitHub (same steps as before).
2. Vercel → Add New… → Project → Import Git Repository → your repo.
3. Framework preset **Other**, no build command, no output directory — Deploy.

## Editing
- Colors, navbar gradient, tagline style, animations → `style.css`
- Mobile menu / scroll-reveal / nav highlight → `script.js`
- Content and sections → `index.html`
- Logo/favicons → `assets/`
