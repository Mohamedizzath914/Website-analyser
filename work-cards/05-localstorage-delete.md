# Work Card 05 — localStorage Persistence and Delete Data

## Goal

Add localStorage save/load so data survives page refresh, and connect the delete button so users can clear all data and return to empty state.

## Inputs

- `architecture.md` — storage logic, localStorage key
- `design.md` — delete affordance, empty state

## Files likely touched

- `src/utils/localStorage.js`
- `src/hooks/useHistoryData.js`
- `src/App.jsx`
- `src/App.css`
- `src/components/Header.jsx`
- `src/components/FileUpload.jsx`

## Instructions for the coding agent

1. Create `src/utils/localStorage.js`:
   - `saveEntries(entries)` — saves to `localStorage` under key `browser-history-analyzer-data`
   - `loadEntries()` — loads and parses from localStorage, returns [] if empty or invalid
   - `clearEntries()` — removes the key from localStorage

2. Update `src/hooks/useHistoryData.js`:
   - On mount, call `loadEntries()` from localStorage
   - After `loadFromFile`, call `saveEntries(entries)`
   - After `loadSample`, call `saveEntries(entries)`
   - After `clearData`, call `clearEntries()`

3. Update `src/components/Header.jsx`:
   - Made delete button functional: calls `onDelete` prop
   - Show a confirmation step (window.confirm is fine): "Delete all browsing data? This cannot be undone."
   - Only show delete button when there are entries (passed via prop)

4. Update `src/App.jsx`:
   - Pass `clearData` as the delete handler to Header
   - Pass `entries.length > 0` to Header so delete button only shows when data exists

5. Update `src/App.css`:
   - Add a subtle transition on the empty state / data state switch

## What not to do

- Do not add multi-file upload or history of uploads
- Do not add any backend or server-side storage
- Do not add "export" functionality yet

## Done when

- Data persists after page refresh (load sample data, refresh, data still there)
- Delete button only shows when entries exist
- Clicking delete removes all data and returns to empty state
- Refresh after delete — empty state persists
- Design check: delete button styling follows `design.md` red delete affordance

## Verification steps

- [ ] Load sample data → refresh browser → data still visible
- [ ] Delete button visible only when entries exist
- [ ] Click delete → confirmation dialog → data cleared → empty state shown
- [ ] Refresh after delete → empty state remains
- [ ] Upload a file → refresh → data persists
- [ ] No console errors
- [ ] Design check: empty state matches `design.md` description

## Localhost test before continuing

After this card, the learner should test:

- Click "Load Sample Data", then refresh the browser — does the data persist?
- Is the delete button visible when data is loaded?
- Click delete — does the confirmation appear, and does data clear after confirming?
- Refresh the browser after deleting — is the empty state still shown?
- Upload a file, refresh — does the uploaded data persist?

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If localStorage is not available (private browsing restrictions) or refresh does not persist, check browser privacy settings. Trainer help if unfixable in 5 minutes.

## Status

Completed
- ✅ `src/utils/localStorage.js` — save, load, clear with key `browser-history-analyzer-data`
- ✅ `src/hooks/useHistoryData.js` — loads from localStorage on mount, saves on data change, clears on delete
- ✅ Data persists across refresh — load sample data, refresh, data remains
- ✅ Delete button clears data from state AND localStorage