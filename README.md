# CLIXGROW Marketing Agency — Website

Plain static site: `index.html`, `style.css`, `script.js`, and images in `assets/`. No build step needed.

## Deploy to Vercel

**Option A — Vercel dashboard (easiest)**
1. Go to vercel.com → **Add New… → Project**.
2. Choose **Deploy without Git** / drag-and-drop, and drop this whole folder (or the zip, unzipped) onto the upload area.
3. Framework preset: **Other** (static). Leave build command empty, output directory as root (`.`).
4. Click **Deploy** — you'll get a live `.vercel.app` URL in about a minute.

**Option B — Vercel CLI**
```bash
npm i -g vercel
cd clixgrow-site
vercel        # first deploy, follow the prompts
vercel --prod # promote to production URL
```

**Option C — GitHub**
1. Push this folder to a new GitHub repo.
2. In Vercel, **Add New… → Project → Import Git Repository**, pick the repo.
3. Framework preset **Other**, no build command — deploy.

## Custom domain
Once deployed, add `clixgrow.com` under Project → Settings → Domains, then point your domain's DNS to Vercel as instructed there.

## Editing
- Colors, spacing, animations → `style.css`
- Mobile menu + scroll-reveal behavior → `script.js`
- Content/sections → `index.html`
- Logo files → `assets/`
