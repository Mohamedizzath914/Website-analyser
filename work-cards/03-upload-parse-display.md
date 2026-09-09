# Work Card 03 — Upload, Parse, and Display

## Goal

Add real file upload functionality, CSV/JSON parsing, sample data, and timeline rendering so the app displays history entries.

## Inputs

- `architecture.md` — data model, component map, parser expectations
- `design.md` — timeline entry card style

## Files likely touched

- `src/App.jsx`
- `src/App.css`
- `src/components/FileUpload.jsx`
- `src/components/Timeline.jsx`
- `src/data/sample.json`
- `src/utils/parser.js`
- `src/hooks/useHistoryData.js`

## Instructions for the coding agent

1. Create `src/data/sample.json` with 8-10 sample browser history entries using the data model:
   - Fields: `id` (uuid string), `url`, `title`, `timestamp` (ISO string), `visitDuration` (seconds), `visitCount` (number)
   - Mix of realistic sites (e.g., google.com, github.com, youtube.com, stackoverflow.com, reddit.com)
   - Spread across the last 7 days

2. Create `src/utils/parser.js` with two export functions:
   - `parseCSV(file)` — reads file as text, parses CSV with header row, returns array of history entries with generated IDs
   - `parseJSON(file)` — reads file as text, parses JSON, validates fields, returns array with generated IDs
   - Both return `{ entries: [...], errors: [...] }`

3. Create `src/hooks/useHistoryData.js`:
   - Maintains `entries`, `isLoading`, `error` state
   - Exposes `loadFromFile(file)` that calls parser and sets entries
   - Exposes `loadSample()` that loads `sample.json`
   - Exposes `clearData()` to reset entries
   - Returns `{ entries, isLoading, error, loadFromFile, loadSample, clearData }`

4. Update `src/components/FileUpload.jsx`:
   - Add hidden `<input type="file" accept=".csv,.json">` triggered on click
   - Call `onFileSelect(file)` prop when user selects a file
   - Show file name after selection
   - Handle drag-and-drop (dragover, drop events)
   - Add a "Load Sample Data" button below the drop zone

5. Create `src/components/Timeline.jsx`:
   - Accepts `entries` prop
   - Renders entries as a vertical list, newest first
   - Each entry card shows: title (bold), URL (small, gray), timestamp (small, gray), visit duration and count
   - White card with 8px border-radius, subtle shadow, 16px padding, 8px gap between cards
   - If entries is empty, render nothing (handled by parent empty state)

6. Update `src/App.jsx`:
   - Use `useHistoryData` hook
   - Pass `loadFromFile` to FileUpload
   - Render Timeline with entries
   - If entries.length === 0, show the FileUpload
   - If entries.length > 0, show Timeline below FileUpload
   - Add a "Load Sample Data" button handler

## What not to do

- Do not add search/filter/summary yet
- Do not add localStorage yet
- Do not add delete functionality yet (the hook has clearData but no UI for it yet besides the button)

## Done when

- Clicking "Load Sample Data" populates the timeline with sample entries
- Uploading a CSV or JSON file populates the timeline
- Each entry shows title, URL, timestamp, duration, visit count
- Timeline is sorted newest first
- Design check: entry cards match `design.md` card style (white, 8px radius, subtle shadow, clean spacing)

## Verification steps

- [ ] "Load Sample Data" button renders and populates timeline on click
- [ ] Upload a `.json` file — entries appear in timeline
- [ ] Upload a `.csv` file — entries appear in timeline
- [ ] Timeline shows title, URL, timestamp, duration, and visit count for each entry
- [ ] Entries are sorted newest first
- [ ] Entry cards have white background, border-radius, subtle shadow
- [ ] No console errors

## Localhost test before continuing

After this card, the learner should test:

- Click "Load Sample Data" — does the timeline populate with sample entries?
- Upload a `.json` file — do its entries appear in the timeline?
- Upload a `.csv` file — do its entries appear in the timeline?
- Are entries sorted with the most recent at the top?
- Do entry cards look clean with proper spacing and typography?

If all tests pass, reply `continue`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If file parsing fails or the timeline does not render, check the parser logic and browser console for errors. Trainer help if unfixable in 5 minutes.

## Status

Completed
- ✅ `src/data/sample.json` — 10 realistic browser history entries
- ✅ `src/utils/parser.js` — CSV and JSON parsing with validation
- ✅ `src/hooks/useHistoryData.js` — state management (load, sample, clear)
- ✅ `src/components/FileUpload.jsx` — file input, drag-drop, sample button
- ✅ `src/components/Timeline.jsx` — sorted timeline with cards
- ✅ `src/components/Header.jsx` — functional delete with confirm dialog
- ✅ `src/App.jsx` — wired upload, timeline, delete flow
- ✅ `src/App.css` — timeline card styles, error banner, sample button