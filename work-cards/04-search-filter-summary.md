# Work Card 04 — Search, Date Filter, and Site Summary

## Goal

Add search-by-keyword, date-range filter, and most-visited sites summary sidebar so the user can explore their history.

## Inputs

- `architecture.md` — component map, data model
- `design.md` — SearchBar, DateFilter, SiteSummary styles

## Files likely touched

- `src/App.jsx`
- `src/App.css`
- `src/components/SearchBar.jsx`
- `src/components/DateFilter.jsx`
- `src/components/SiteSummary.jsx`
- `src/hooks/useHistoryData.js`

## Instructions for the coding agent

1. Create `src/components/SearchBar.jsx`:
   - Full-width text input with rounded corners (8px)
   - Placeholder: "Search by website or keyword..."
   - Calls `onSearch(query)` prop on every keystroke
   - Shows a magnifying-glass icon (SVG or Unicode) inside the input on the left
   - Border `1px solid #d2d2d7`, blue focus ring (`#0071e3`)
   - Clear button (X) appears when text is entered, clears the input

2. Create `src/components/DateFilter.jsx`:
   - Two date inputs side-by-side: "From" and "To"
   - Labels above inputs (small, gray, 13px)
   - Same input styling as SearchBar
   - Calls `onDateRangeChange({ start, end })` prop
   - If either is empty, no filter for that bound

3. Create `src/components/SiteSummary.jsx`:
   - Renders a list of most-visited sites, sorted by visit count descending
   - Each row: site hostname (extracted from URL) + visit count
   - Rows separated by light border (`1px solid #e8e8ed`)
   - Accepts `entries` prop

4. Update `src/App.jsx`:
   - Add `searchQuery` and `dateRange` state
   - Add filtering logic: filter entries by searchQuery (matches URL or title, case-insensitive) and dateRange
   - Render SearchBar, DateFilter, and SiteSummary components above Timeline
   - Two-column layout on desktop: left column = SiteSummary, right column = Timeline + filters
   - Single-column on mobile: everything stacks vertically

5. Update `src/App.css`:
   - Two-column grid: `grid-template-columns: 280px 1fr` on desktop
   - Single column on mobile (`< 768px`)
   - 24px gap between columns
   - Search and date filter row have 16px bottom margin

## What not to do

- Do not add localStorage yet
- Do not add delete functionality yet
- Do not add complex state management — keep it in App.jsx

## Done when

- Search bar filters timeline entries as user types
- Date range filter narrows entries
- Site summary shows sites sorted by visit count
- Two-column layout on desktop, single column on mobile
- Design check: search, filter, and summary components follow `design.md` styles

## Verification steps

- [ ] Type in search — timeline filters to matching entries
- [ ] Clear search — all entries show again
- [ ] Set date range — only entries in range show
- [ ] Site summary lists sites by visit count (highest first)
- [ ] Desktop shows two-column layout with summary on left
- [ ] Mobile (<768px) stacks everything in a single column
- [ ] No console errors

## Localhost test before continuing

After this card, the learner should test:

- Load sample data, then type a search term — does the timeline filter to matching entries?
- Set a date range — does the timeline only show entries in that range?
- Does the site summary show sites sorted by visit count (most visited first)?
- Resize to mobile width — does everything stack in one column without horizontal scroll?

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If filtering or layout breaks, check console errors and grid CSS. Trainer help if unfixable in 5 minutes.

## Status

Completed
- ✅ `src/components/SearchBar.jsx` — search with icon, clear button, keyboard accessible
- ✅ `src/components/DateFilter.jsx` — From/To date inputs with labels
- ✅ `src/components/SiteSummary.jsx` — most-visited sites sorted by visit count
- ✅ `src/App.jsx` — search/filter state, filtered entries, two-column layout, no-results
- ✅ `src/App.css` — two-column grid, search bar, date filter, site summary, mobile responsive