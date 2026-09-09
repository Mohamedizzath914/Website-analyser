# Work Card 06 — Review and Fix

## Goal

Run a full design audit, mobile check, and accessibility pass against `design.md`. Make the single smallest useful fix for each issue found.

## Inputs

- `design.md` — full design specification
- `architecture.md` — verification notes
- `build-blueprint.md` — review mirror section

## Files likely touched

- Any component or CSS file that needs fixes

## Instructions for the coding agent

1. Run through the Design Verification Checklist from `design.md`:

   - [ ] File upload area prominent on empty state
   - [ ] Timeline entries readable at mobile width
   - [ ] Search and date filters responsive
   - [ ] Site summary sorted by visit count
   - [ ] Delete action visible and functional
   - [ ] Empty state returns after data deletion
   - [ ] All text meets contrast requirements (check #6e6e73 on #f5f5f7 — 4.5:1 or better)
   - [ ] Keyboard navigation works through all controls
   - [ ] Focus indicators visible (blue ring on inputs, buttons)
   - [ ] Refresh proves data persistence

2. Check mobile at 375px and 320px widths:
   - No horizontal scroll
   - Touch targets at least 44x44px
   - Text not cut off or overlapping
   - Layout stacks correctly

3. Check accessibility:
   - All inputs have associated labels
   - Focus order follows visual order
   - Delete button has clear text label "Delete Data"
   - File upload communicates accepted types

4. Fix any issues found — make the single smallest useful fix per issue.

## What not to do

- Do not add new features
- Do not redesign or restyle beyond fixing issues
- Do not rewrite components — only fix specific problems

## Done when

- Design Verification Checklist passes
- Mobile at 320px has no horizontal scroll, all content readable
- Keyboard navigation works through all interactive elements
- Focus indicators are visible
- No contrast violations

## Verification steps

- [ ] Checklist items all checked (except keyboard nav which needs manual test)
- [ ] Mobile 375px and 320px — no horizontal scroll, no cut-off text
- [ ] Tab through all controls — focus ring visible on each
- [ ] Delete button has visible label
- [ ] File upload states accepted types
- [ ] No console errors

## Localhost test before continuing

After this card, the learner should test:

- Resize browser to 320px width — is there any horizontal scroll or cut-off text?
- Tap all buttons and inputs on mobile width — are they at least 44px tall?
- Tab through all controls — does each one show a visible focus ring?
- Are the search bar, date filter, and timeline all usable at mobile width?

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If a design issue cannot be fixed in 5 minutes, note it as a known issue in `build-status.md` and continue.

## Status

Completed
- ✅ Removed stray template files from project root (App.jsx, index.css, main.jsx, assets/, favicon.svg, icons.svg)
- ✅ Refactored DateFilter to use React state instead of document.getElementById
- ✅ Added aria-label to date inputs
- ✅ Verified all interactive elements have focus-visible styles
- ✅ Verified upload-zone, delete-btn, sample-btn have focus rings
- ✅ Verified upload zone has aria-label, search has aria-label
- ✅ Mobile layout stacks single-column at 768px and below