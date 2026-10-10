# Carolina Pagliano – Portfolio website

Static site: plain HTML, CSS and JavaScript. No build step or framework. Ready for GitHub Pages: upload the files to the root of the repository.

## Case study order

The case studies follow a document's real journey:

1. **Self-Service Triage Tool** (`triage.html`)
2. **Confirmation Email Generator** (`email-generator.html`)
3. **Data Formatter** (`formatter.html`)
4. **Master Tracker** (`tracker.html`)
5. **Standard Operating Procedure** (`sop.html`)

The homepage flow diagram shows Triage → Email Generator → Formatter → Tracker, with the SOP underneath as the guide that ties every stage together. Each case study page has the same five sections (Problem · What I built · How it works · Result · Built with) and Previous / Next links in this order.

## Demo pattern

Every case study opens with an animated simulation: one click per step, a bouncing **Click here** pointer on whatever to click next, and a Replay button at the end. Triage, Email Generator and Formatter also keep their live demo underneath, closed by default in a **Try the real tool yourself** bar so the page stays short.

The three live demos work the same way, so visitors learn it once:

1. **How to try it:** 2–4 numbered steps sit directly above each demo.
2. **Header bar:** the "Live demo" tag on the left; on the right, **Try with sample data** (or 3 example buttons on the triage) and **Start over**, which appears once something has changed.
3. **Empty start:** each demo opens empty with a short message. The sample button pulses gently until it's first clicked (no animation if the visitor prefers reduced motion).
4. **Feedback:** whatever changes is highlighted in teal for about 1.5 s, and a plain-English message under the demo explains what happened (`aria-live`).
5. **Tables fit:** compact cells and wrapping names at desktop width; on phones the table scrolls sideways inside its box, with a fade on the right edge.

Names in the demos are written the usual way ("Emily Brown"), so it's obvious to any reader that they're people.

Site-wide: case study pages always open at the top, and a round **Back to top** button appears bottom-right after scrolling.

## Case study page structure

Every case study follows the same order: title and one-line subtitle → **At a glance** summary (Problem · Built · Result · Key decision) → **Try it** (the simulation, with the live demo in a closed bar underneath where there is one) → 01 Problem → 02 What I built (with a Key decision box) → 03 Result → 04 Built with → a "Want this kind of thinking on your team?" block with Get in touch / Download CV → Previous / Next links.

Plain words are used instead of consular jargon: "daily payments report", "document delivery", "temporary ID number", "check their details".

## Files

| File | What it is |
|---|---|
| `index.html` | Homepage: hero, work (flow diagram + 5 cards), about, contact |
| `triage.html` | Two demos. First, an animated simulation: three applicants (Emily Brown, James Taylor, Grace Miller) answer on a phone; the visitor taps the highlighted answer and the matching path (Book online · Book online + bring extra proof · Email us first) lights up with their name. On phones the applicant sits above a larger phone. Below it, "Now try it yourself": the bilingual (EN / ES) guide with example buttons, where visitors answer the questions themselves |
| `email-generator.html` | Two demos. First, an animated simulation: the visitor types the applicant's name (optional), picks the date from a calendar and the time from preset slots, picks "ID + passport", and copies the finished email into a webmail window. Beside it, "Before vs after": the old email (copied from a Word template and reformatted) next to what the generator includes, and the time per email (~3–5 min vs under 30 sec). Below it, "Now try it yourself": a live demo that starts empty. Sample data fills Emily Brown, a date, 10:45 and "ID + passport". Clicking a procedure creates the email; a separate **Copy email** button copies it (formatted for the webmail, with a plain-text fallback). Missing date or time shows highlighted placeholders |
| `formatter.html` | Two demos. First, an animated simulation beside a small Excel tracker: the visitor loads the PDF report, clicks Format, adds the final ID number for a flagged temporary ID (warning, error and fixed alerts), copies the rows and pastes them into the tracker, where the Status column fills in by itself. Below it, "Now try it yourself": a live demo that loads a fictional daily payments report, then **Format** turns it into a 7-column table (Date · Case · ID no. · Name · Procedure · ID? · Passport?). Works out which documents are expected from the fees paid, flags a temporary ID number (click **Pending** to type the final number, or ✔ to keep it pending) and marks an unreadable line in red. Copies tab-separated rows for Excel |
| `tracker.html` | Live demo: an animated simulation beside the tracker. Each click plays one step: open the delivery bag (four envelopes land on the desk), click the barcode scanner to scan each envelope (a red line flashes, the matching tracker row updates and flashes; one envelope is not in the records and is set aside), then scan an applicant's signed slip to mark the case collected. A bouncing pointer always shows what to click next. Links to a Google Sheets version |
| `prototype/` | Work-in-progress simulations (`tracker-sim.html`, `triage-sim.html`, `email-sim.html`, `formatter-sim.html`, `sop-sim.html`). Not linked from the site |
| `sop.html` | Animated simulation: the one-page SOP on the left. Each **Next stage** click opens one stage (its steps, tool, tab and rule) and fades the others. On the right, one fictional case (Emily Brown) moves from "Not in the tracker yet" to On track, Ready to collect and Archived, with a link to that stage's tool page |
| `styles.css` | All styles. Colour tokens at the top, with light and dark mode. Demo components are at the end of the file |
| `site.js` | Shared script: sticky header border, back-to-top button, case pages open at the top, fade-in on scroll, `flash()` highlight, `copyText()` helper, table edge fade |
| `images/` | Card images `01-triage.png` to `05-sop.png` (`05-sop.png` is only used on the homepage card now), `monogram-cp.png`, plus: |
| `images/photo.jpg` | About section photo (shown at 4:5, cropped with `object-fit: cover`) |
| `images/og-banner.png` | Link preview image (1200×630) used by the Open Graph and Twitter tags on every page |
| `images/favicon.png` | Square 512×512 crop of the monogram, used as the browser tab icon and phone home-screen icon |

## Demo data

All demo data is fictional:
- Names: John Smith, Emily Brown, James Taylor, Sophia Wilson, Oliver Davis, Ella Jones, Grace Miller, Lucy Parker, Alex Example.
- Case numbers: 9 digits starting with 7 (700000141…). ID numbers: 8 digits (30000041…).
- The formatter and tracker share the same people and case numbers.
- Email address: documents@example.org. Fees in the formatter's sample report are invented. No consulate name, logo, booking link or real fees.
- `Carolina-Pagliano-CV.pdf` sits at the root of the site. The Download CV buttons (homepage Contact section and the end of every case study) link to it and open it in a new tab.
