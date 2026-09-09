# Work Card 07 — GitHub and Vercel Proof

## Goal

Push the project to GitHub, deploy to Vercel, and confirm the live app works the same as local.

## Inputs

- `build-blueprint.md` — proof ladder

## Files likely touched

- `.gitignore`
- `README.md` (if needed briefly — just a project name line)
- GitHub repository (remote)
- Vercel project

## Instructions for the coding agent

1. Initialize Git in the project folder:
   - `git init`
   - `git add .`
   - `git commit -m "Initial commit: Browser History Analyzer"`

2. Create a GitHub repository (via `gh` CLI or instructions):
   - Repository name: `browser-history-analyzer`
   - Public repo
   - No README, .gitignore, or license (already have files)
   - `git remote add origin <url>`
   - `git push -u origin main`

3. Deploy to Vercel:
   - Via Vercel CLI: `vercel --prod`
   - Or web instructions: import the GitHub repo
   - Ensure framework preset is Vite
   - Build command: `npm run build`
   - Output directory: `dist`

4. Verify the live site:
   - Open the Vercel URL
   - Confirm the app loads with the same layout
   - Load sample data
   - Run search and filter
   - Confirm everything works

5. Take proof screenshots:
   - Browser showing the Vercel URL with sample data loaded
   - Mobile view (using dev tools) showing stacked layout

## What not to do

- Do not add a custom domain
- Do not add environment variables, secrets, or API keys
- Do not add analytics or tracking
- Do not add additional features or content

## Done when

- GitHub repo has the code pushed
- Vercel URL loads the app
- Sample data, search, filter, and delete all work on the live site
- Proof screenshots saved (or noted as taken)

## Verification steps

- [ ] GitHub repo exists with all project files
- [ ] Vercel deployment succeeded (no build errors)
- [ ] Live URL loads the app
- [ ] Sample data, search, filter, and delete work on live site
- [ ] Mobile view on live site shows stacked layout
- [ ] Refresh on live site — data persists (localStorage in the browser)

## Localhost test before continuing

After this card, the learner should test:

- Open the Vercel URL — does the app load correctly?
- Click "Load Sample Data" — does the timeline populate?
- Test search and filter — do they work on the live site?
- Resize to mobile width — does the layout stack correctly?
- Refresh the page — does data persist?

If all tests pass, reply `continue` or `done`.
If anything fails, reply `fix` and paste the error or describe what you see.

## Stop condition

If GitHub push or Vercel deploy fails, check CLI authentication and network. Trainer help if unfixable in 10 minutes.

## Status

Not started