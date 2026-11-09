# Components

Small HTML, CSS, and JavaScript experiments, plus two React apps (`square` and `changelanguage`). The index at the repository root lists them and previews a demo beside its card.

## Preview locally

Open the site with a static server from the repository root. Opening `index.html` as a file leaves the catalog empty, because the page loads `catalog.json` with `fetch`.

```bash
python3 -m http.server 8765
```

Then open [http://127.0.0.1:8765/](http://127.0.0.1:8765/).

`square` and `changelanguage` are served from their `dist` folders. Those folders are not in git. Build them once before previewing those two cards:

```bash
npm ci && npm run build
```

Run that inside `square` and inside `changelanguage`. GitHub Pages builds them on each push to `master`.
