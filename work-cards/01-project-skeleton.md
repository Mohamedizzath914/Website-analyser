# Work Card 01 — Project Skeleton

## Goal

Scaffold a new Vite + React project inside this folder, create the directory structure, and verify the dev server starts with a clean shell.

## Inputs

- `architecture.md` — folder structure
- `design.md` — color / typography foundation

## Files likely touched

- `package.json`
- `index.html`
- `vite.config.js`
- `src/main.jsx`
- `src/App.jsx`
- `src/App.css`

## Instructions for the coding agent

1. Create a new Vite + React project in this folder using `npm create vite@latest . -- --template react`
2. If the folder already has files, scaffold into a temp dir and move contents, or confirm `--force` is acceptable
3. Create these empty directories: `src/components/`, `src/data/`, `src/hooks/`, `src/utils/`, `public/`
4. Replace `src/App.jsx` with a minimal shell:
   - Import `App.css`
   - Render a `<header>` with the app title "Browser History Analyzer"
   - Render a `<main>` with placeholder text "Upload zone will go here"
5. Set `App.css` with the base styles from `design.md`:
   - Background: `#f5f5f7`
   - Font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
   - Body: 16px / 1.5, 400 weight, color `#1d1d1f`
   - Reset margin/padding on `*`, `body`
   - Max-width container: 960px, centered
6. Update `index.html` title to "Browser History Analyzer"

## What not to do

- Do not add any component files yet
- Do not implement upload, search, or any app logic
- Do not install extra packages beyond the Vite + React template
- Do not initialize Git

## Done when

- `npm run dev` starts without errors
- Browser shows the page with the header "Browser History Analyzer" and the upload placeholder
- Base CSS styles (bg, font, spacing) are applied
- Empty `src/components/`, `src/data/`, `src/hooks/`, `src/utils/` directories exist

## Verification steps

- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts the dev server (no errors in terminal)
- [ ] Browser at localhost shows header "Browser History Analyzer"
- [ ] Page background is `#f5f5f7`, text is `#1d1d1f`
- [ ] Container is centered, max-width ~960px
- [ ] Directory structure matches `architecture.md`
- [ ] Design check: base colors and typography match `design.md` mood

## Localhost test before continuing

After this card, the learner should test:

- Run `npm run dev` — does the dev server start without errors?
- Open the localhost URL in a browser — do you see "Browser History Analyzer" in the header?
- Is the background light gray (`#f5f5f7`) and text dark?

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If `npm create vite` fails or the dev server does not start, check Node/npm versions and disk space. Ask for trainer help if it cannot be fixed in 5 minutes.

## Status

Completed
- ✅ Vite + React project scaffolded
- ✅ Dependencies installed (24 packages, 0 vulnerabilities)
- ✅ `src/components/`, `src/data/`, `src/hooks/`, `src/utils/`, `public/` directories created
- ✅ `index.html` title set to "Browser History Analyzer"
- ✅ `src/App.jsx` replaced with minimal shell (header + placeholder)
- ✅ `src/App.css` base styles applied (#f5f5f7 bg, system font stack, 960px container)
- ✅ Dev server starts at http://localhost:5173/