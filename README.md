# zrnm6wrpj2-code.github.io

Personal site (Vite + React). **Do not open the SSH clone URL in a browser** — it is only for Git (`git clone`). Use:

- **Repository:** https://github.com/zrnm6wrpj2-code/zrnm6wrpj2-code.github.io  
- **Published site:** https://zrnm6wrpj2-code.github.io/

## GitHub Pages (fix blank page)

This project is built with Vite. The `index.html` in the **repository root** is a **development template** (it references `/src/main.tsx`). If GitHub Pages is set to **“Deploy from a branch” → `main` → `/ (root)`**, visitors get that file and the app **will not load** (blank page).

1. Open **Settings → Pages** for this repository.  
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).  
3. Open the **Actions** tab and confirm the latest **Deploy to GitHub Pages** workflow succeeded.  
4. Wait a minute and reload https://zrnm6wrpj2-code.github.io/

If you still see a blank page, hard-refresh (Ctrl+F5) or try a private window.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output is in `dist/` (used by the GitHub Actions workflow).
