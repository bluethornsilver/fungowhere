# FunGoWhere hackathon demo

## Before presenting

1. Install Node.js 22.13 or newer. Run `npm run dev` in this folder.
2. Open http://127.0.0.1:4173/ in your presentation browser.
3. Keep this server terminal running. Use the same browser for Saved outings.
4. If demonstrating curated events, select 11 October 2026. These records are dated examples, not a live feed.

## Three-minute walkthrough

- **Problem (20 seconds):** “We spend too long deciding where to go. FunGoWhere helps people find Singapore outings that fit their time, budget and company.”
- **Discover (30 seconds):** Show an editable example outing, then start the guided questionnaire. Explain that requirements narrow the choices and preferences help rank them.
- **Recommendations (45 seconds):** Show the shortlist, why each place fits and its tradeoffs. Open Gardens by the Bay or Jurong Lake Gardens to show the actual venue photo, source credits and practical information.
- **Decide together (30 seconds):** Save an outing and compare two places. Open Saved to show how someone can return to a shortlist.
- **Affordable events (30 seconds):** Open Events, select the date and show Free or paid below S$20. Explain that organiser links help visitors check the latest details and availability.
- **Close (25 seconds):** “Our prototype brings discovery, shortlisting and comparison together. Next we would validate it with users and improve current event coverage.”

## Honest answers for judges

- 61 catalogue places; 47 use actual venue photography and 14 use labelled illustrations.
- Recommendations use rules and preference scores; they do not use live weather, crowds or booking availability.
- Five curated dated event records; external search links provide further discovery.
- Only three venues have separately checked practical visitor details. Photo research does not verify operating hours.
- Saves stay in the current browser; there are no accounts or cloud sync.
- Local preview works on this laptop. A GitHub repository is source code, not automatically a hosted website.

## Backup

Keep `docs/demo-preview.png` available as a visual backup. If internet access fails, locally bundled attraction photos and the core planner still work; external fonts fall back to system fonts. Maps, organiser links and external searches require internet access.
