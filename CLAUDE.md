# Claude Code Instructions

## Workflow
- **Nach jeder Änderung immer committen und pushen** (kein explizites OK nötig)
- Agent Teams verwenden, ausschließlich Modell **Sonnet 4.6**

## Projekt
- Stack: Vite + React + TypeScript + Tailwind CSS v4
- GitHub Pages: https://maystudios.github.io/maxsim-flutter-landingpage/
- `base: '/maxsim-flutter-landingpage/'` in vite.config.ts ist essenziell für GitHub Pages

## Tests
- `npm test` → Playwright (Chromium) gegen `npm run preview` auf Port 4173
- Hooks laufen automatisch nach Edits: Build + Playwright Tests
