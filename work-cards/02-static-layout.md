# Work Card 02 — Static Layout

## Goal

Build the static layout components: Header, FileUpload drop zone (non-functional), and empty state. No interactivity yet — just the visual structure.

## Inputs

- `architecture.md` — component map
- `design.md` — component styles, layout rules, mobile rules, empty state

## Files likely touched

- `src/App.jsx`
- `src/App.css`
- `src/components/Header.jsx`
- `src/components/FileUpload.jsx`

## Instructions for the coding agent

1. Create `src/components/Header.jsx`:
   - Render an `<header>` element with the app title "Browser History Analyzer"
   - Include a delete button (but disabled / non-functional for now — just the visual)
   - Style: fixed top, white background, subtle bottom border (`1px solid #d2d2d7`)
   - Delete button: red text (`#ff3b30`), no background, positioned on the right

2. Create `src/components/FileUpload.jsx`:
   - Render a dashed-border drop zone (centered, ~200px height)
   - Show an upload icon (use a simple SVG or Unicode character) and text: "Drop your CSV or JSON file here, or click to browse"
   - Text below: "Supports .csv and .json files from browser history exports"
   - Style: dashed border `2px dashed #c7c7cc`, border-radius 12px, padding, centered content
   - Blue accent (`#0071e3`) on hover state
   - No file input logic yet — just the visual

3. Update `src/App.jsx`:
   - Import and render `<Header />` and `<FileUpload />`
   - Remove the placeholder text from Card 01
   - Wrap content in a centered container div

4. Update `src/App.css`:
   - Add styles for the header, drop zone, and container
   - Ensure 16px padding on mobile, 32px on desktop
   - Header has `z-index: 10`, fixed position, top: 0

## What not to do

- Do not add file input or upload logic
- Do not add search, timeline, or other components yet
- Do not add interactivity or state management

## Done when

- Header with title and delete button renders at top
- File upload drop zone renders centered with instructions
- Page has proper padding and container width
- Mobile view stacks correctly (single column, no overflow)
- Design check: drop zone, header spacing, and colors follow `design.md`

## Verification steps

- [ ] Header shows "Browser History Analyzer" with delete button on the right
- [ ] Upload drop zone has dashed border, icon, and instruction text
- [ ] Drop zone changes color on hover (blue accent)
- [ ] Page is centered, max-width ~960px
- [ ] Mobile width (320px) shows stacked layout, no horizontal scroll
- [ ] No console errors

## Localhost test before continuing

After this card, the learner should test:

- Open the browser — do you see the header with title and delete button?
- Do you see the upload drop zone with dashed border and instructions?
- Hover over the drop zone — does the border turn blue?
- Resize browser to mobile width (~375px) — does the layout stack without horizontal scroll?

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If CSS styles break the layout or nothing renders, check for import/export errors in the components. Trainer help if unfixable in 5 minutes.

## Status

Completed
- ✅ `src/components/Header.jsx` — title + disabled "Delete Data" button
- ✅ `src/components/FileUpload.jsx` — dashed drop zone with upload icon, text, hover effect
- ✅ `src/App.jsx` — renders Header and FileUpload
- ✅ `src/App.css` — header (fixed, white bg, border-bottom), upload zone (dashed, blue hover), mobile responsive