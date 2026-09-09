# Architecture

## Build Shape

Browser-local tool

## Stack Decision

- Vite (build tool)
- React (UI framework)
- Plain CSS
- localStorage (persistence)
- No backend, auth, database, or live API

## Structure Overview

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

## Component Map

| Component | Responsibility |
|---|---|
| App | Root layout, state owner, orchestrates children |
| FileUpload | Accepts CSV/JSON file, triggers parse |
| Timeline | Displays entries chronologically |
| SearchBar | Filters entries by URL or title keyword |
| DateFilter | Date-range picker to narrow entries |
| SiteSummary | Aggregated most-visited sites list |
| Header | App title, description, delete-data button |

## Data / State Model

```js
// Single history entry
{
  id: string,          // unique generated ID
  url: string,         // visited URL
  title: string,       // page title
  timestamp: string,   // ISO datetime string
  visitDuration: number, // seconds (from export or parsed)
  visitCount: number    // times visited (from export or parsed)
}

// App state (managed in App.jsx via useState/useReducer)
{
  entries: HistoryEntry[],  // all parsed entries
  searchQuery: string,      // current search filter
  dateRange: { start, end }, // date filter range
  isLoading: boolean,
  error: string | null
}
```

## Storage Logic

- **localStorage key:** `browser-history-analyzer-data`
- Save all parsed entries as JSON on upload/change
- Load on app mount
- Clear on user "Delete Data" action
- No server-side storage

## User Flow

1. User opens the app → empty state with upload prompt
2. User uploads CSV or JSON file → file is parsed locally
3. Parsed entries populate timeline, site summary, and filters
4. User can search, filter by date, browse timeline
5. Data persists in localStorage across refreshes
6. User can delete all data to reset

## File Expectations

- **CSV:** columns `url, title, timestamp, visit_duration, visit_count` (with optional header)
- **JSON:** array of objects with fields `url, title, timestamp, visitDuration, visitCount` (or snake_case aliases)

## Constraints

- One file at a time
- All processing in-browser
- No server upload or external API calls
- Single-user only

## Technical Non-Goals

- Real-time browser monitoring
- Direct browser data access
- Server-side storage
- User accounts
- Multi-user sync
- AI-based detection
- Full forensic case management

## Verification Notes

- Upload sample JSON → timeline renders
- Search filters entries correctly
- Date range filter works
- Site summary shows top entries
- Refresh page → data persists
- Delete data → empty state returns
- Mobile responsive layout passes check