# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`

## Project Identity

Browser History Analyzer — a private, browser-only tool for reviewing exported browser history files.

## Build Shape

Browser-local tool

## Version-One Promise

Users can upload a CSV or JSON browser-history export, see entries in a chronological timeline, search by keyword, filter by date, view most-visited site summaries, and delete their data — all processed locally with no server or account.

## Scope Lock

### Now

- File upload (CSV / JSON)
- Chronological timeline view
- Search by website or keyword
- Date-range filter
- Most-visited sites summary
- Delete uploaded data
- localStorage persistence
- Mobile-responsive layout
- Empty-state handling
- Sample data for demo

### Later

- Suspicious / unusual activity flags
- Additional file formats
- Advanced filtering / grouping
- Export analysis

### Never

- Real-time browser monitoring
- Direct browser data access
- Server-side storage or upload
- User accounts or login
- Multi-user sync
- AI-based threat detection
- Full forensic case management

## Architecture Summary

- **Stack:** Vite + React + Plain CSS + localStorage
- **No backend, auth, DB, or live API**
- Single-page app, all processing in-browser

## Data / State / Storage Rules

- **Entry fields:** id (uuid), url, title, timestamp (ISO), visitDuration (seconds), visitCount (number)
- **State:** entries[], searchQuery, dateRange {start, end}, isLoading, error
- **localStorage key:** `browser-history-analyzer-data`
- Save on upload/change, load on mount, clear on delete
- CSV expected columns: `url, title, timestamp, visit_duration, visit_count`
- JSON expected: array of objects with matching fields

## Design Direction Summary

- **Inspiration:** Apple-like premium minimal
- **Borrow:** generous whitespace, clean system typography, neutral/light backgrounds, subtle card borders, blue accent (#0071e3)
- **Do not copy:** Apple branding, ultra-light fonts, low-contrast text, excessive whitespace on data views
- **Mood:** Premium + Calm + Official
- **Layout:** centered max-width 960px, header + upload zone + filters + two-column results (summary left, timeline right), single-column on mobile
- **Mobile:** stacked layout, 44px touch targets, no horizontal scroll, 16px padding
- **Accessibility:** focusable & keyboard-operable controls, visible focus rings, labels for inputs, proper heading hierarchy
- **Anti-slop:** no fake logos/testimonials/stats, sample data labeled, readable at 320px, data deletable in one click

## Implementation Rules

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing
- Implement only the current work card — do not jump ahead
- Stop after verification steps pass
- Update `build-status.md` after each work card
- No backend, auth, database, or API calls
- No secrets or keys in code
- No invented claims, testimonials, logos, or real numbers
- Follow `design.md` for all styling decisions

## File and Folder Expectations

```
browser-history-analyzer/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── components/
│   │   ├── FileUpload.jsx
│   │   ├── Timeline.jsx
│   │   ├── SearchBar.jsx
│   │   ├── DateFilter.jsx
│   │   ├── SiteSummary.jsx
│   │   └── Header.jsx
│   ├── data/
│   │   └── sample.json
│   ├── hooks/
│   │   └── useHistoryData.js
│   └── utils/
│       ├── parser.js
│       └── localStorage.js
└── public/
```

## Work Card Plan

| Card | File | Description |
|---|---|---|
| 01 | `work-cards/01-project-skeleton.md` | Scaffold Vite + React project, create folder structure |
| 02 | `work-cards/02-static-layout.md` | Build static layout: Header, upload zone, empty state |
| 03 | `work-cards/03-upload-parse-display.md` | CSV/JSON upload, parsing, timeline rendering |
| 04 | `work-cards/04-search-filter-summary.md` | Search bar, date filter, site summary |
| 05 | `work-cards/05-localstorage-delete.md` | localStorage save/load, delete data, refresh proof |
| 06 | `work-cards/06-review-and-fix.md` | Design audit, mobile check, accessibility pass |
| 07 | `work-cards/07-github-vercel-proof.md` | GitHub push, Vercel deploy, proof screenshots |

## Review Mirror

After Card 06, run `prompts/07-review-mirror.md` to audit the build against the design and brief before shipping.

## Proof Ladder

1. `npm run dev` starts without errors
2. Empty state shows upload prompt
3. Upload sample JSON → timeline renders with entries
4. Search filters timeline entries
5. Date filter narrows results
6. Site summary shows top sites sorted
7. Delete returns to empty state
8. Refresh browser → data persists
9. Mobile width shows stacked layout, no cut-off
10. Vercel deploy URL loads the same app

## 60-Second Explanation Template

"This is the Browser History Analyzer. Upload your exported browser history CSV or JSON file. You'll see your browsing activity in a clean timeline, search and filter by date or keyword, and see a summary of your most-visited sites. Everything stays on your device — no accounts, no uploads to a server. Delete your data any time with one click."

## Guardrails for the Coding Agent

- read `build-status.md`, `build-blueprint.md`, and the current work card before editing;
- implement only the current work card;
- do not jump ahead;
- stop after verification;
- update `build-status.md` after each work card;
- do not add backend/auth/database/API unless the blueprint explicitly allows it;
- do not add secrets or keys to code;
- do not invent claims, testimonials, logos, or real numbers;
- apply the guardrails for the confirmed browser-local tool build shape;
- if a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping;