# Design Direction

## Design Inspiration URL

Fallback: Apple-like premium minimal

## What We Borrow

- Generous whitespace to organize data without clutter
- Clean, readable typography (system font stack, 400+ weight for body)
- Neutral/light backgrounds with minimal accent color so data is the focus
- Subtle card borders and shadows for depth

## What We Do Not Copy

- Apple branding, logos, product imagery, or exact layouts
- Any references to Apple products or services
- Overly thin / low-contrast text (avoid Apple's ultra-light weights)
- Excessive whitespace that wastes screen area on data views

## Visual Mood

Premium, calm, official — trustworthy and polished, designed for focused data review.

## Layout Rules

- Single-page app with centered max-width container (960px)
- Header bar at top (app title, delete button)
- File upload area below header (prominent drop zone)
- Two-column layout on desktop: left = site summary, right = timeline
- Search bar and date filter row between upload and results
- Cards with subtle border-radius (8px) and light box-shadow for entry items
- Bottom padding to avoid content touching browser chrome

## Color / Contrast Rules

- Background: `#f5f5f7` (light warm-gray)
- Card surface: `#ffffff`
- Primary text: `#1d1d1f` (near-black)
- Secondary text: `#6e6e73` (medium gray)
- Accent color: Blue `#0071e3` (links, buttons, active filters)
- Destructive action (delete): Red `#ff3b30`
- All text meets WCAG AA contrast ratio (4.5:1 for normal, 3:1 for large)
- No low-contrast gray-on-gray text

## Typography Feel

- System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- Body text: 16px / 1.5 line-height, 400 weight
- Headings: 600–700 weight, tighter line-height (1.2)
- Small/auxiliary text: 13px, 400 weight, `#6e6e73`
- No thin/ultralight font weights

## Component Style

| Component | Style |
|---|---|
| Header | Fixed top, white background, subtle bottom border, app title + delete button |
| FileUpload | Dashed-border drop zone, centered icon + text, blue accent on hover/drag |
| Timeline entry | White card, 8px radius, subtle shadow, URL bold/title below/timestamp small |
| SearchBar | Full-width input, rounded (8px), border on focus, magnifying-glass icon |
| DateFilter | Two date inputs side-by-side, same style as search |
| SiteSummary | Stacked list, each row = favicon + site name + visit count, sorted descending |
| Delete button | Red text, no background, positioned in header |
| Empty state | Centered illustration placeholder + "Upload your history file to begin" text |

## Mobile Rules

- Single-column layout (summary above timeline)
- File upload takes full width
- Search and date filter stack vertically
- Timeline entries full width with minimal side padding (16px)
- Header compact (smaller title, tighter spacing)
- Touch targets minimum 44x44px
- No horizontal scroll

## Accessibility Basics

- All interactive elements focusable and keyboard-operable
- Visible focus ring (2px blue outline)
- Form inputs have associated labels (visually hidden or visible)
- Color not the only indicator (e.g., delete action uses text label + icon)
- Proper heading hierarchy (h1 → h2 → h3)
- Upload drop zone announces file-accept types

## Anti-Slop Rules

- No fake logos
- No fake testimonials
- No fake stats — sample data clearly labeled "Sample Data"
- No "lorem ipsum" in final proof
- One clear primary action: upload a file
- Readable on phone width (320px min)
- All uploaded data deletable with one click
- No data leaves the browser

## Design Verification Checklist

- [ ] File upload area prominent on empty state
- [ ] Timeline entries readable at mobile width
- [ ] Search and date filters responsive
- [ ] Site summary sorted by visit count
- [ ] Delete action visible and functional
- [ ] Empty state returns after data deletion
- [ ] All text meets contrast requirements
- [ ] Keyboard navigation works through all controls
- [ ] Focus indicators visible
- [ ] Refresh proves data persistence