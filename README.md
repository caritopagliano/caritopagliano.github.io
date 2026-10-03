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

All four live demos work the same way, so visitors learn it once:

1. **How to try it:** 2–4 numbered steps sit directly above each demo.
2. **Header bar:** the "Live demo" tag on the left; on the right, **Try with sample data** (or 3 example buttons on the triage) and **Start over**, which appears once something has changed.
3. **Empty start:** each demo opens empty with a short message. The sample button pulses gently until it's first clicked (no animation if the visitor prefers reduced motion).
4. **Feedback:** whatever changes is highlighted in teal for about 1.5 s, and a plain-English message under the demo explains what happened (`aria-live`).
5. **Tables fit:** compact cells and wrapping names at desktop width; on phones the table scrolls sideways inside its box, with a fade on the right edge.

Names in the demos are written the usual way ("Emily Brown"), so it's obvious to any reader that they're people.

Site-wide: case study pages always open at the top, and a round **Back to top** button appears bottom-right after scrolling.

## Files

| File | What it is |
|---|---|
| `index.html` | Homepage: hero, work (flow diagram + 5 cards), about, testimonials, contact |
| `triage.html` | Live demo: bilingual (EN / ES) guide. Three example buttons click through the answers visibly (about 400 ms per step), or visitors answer themselves. Shows one of three outcomes: book online, book online and bring extra proof of identity, or email first for a records check (with a copy-ready email template) |
| `email-generator.html` | Static before / after comparison, then a live demo that starts empty. Sample data fills Emily Brown, a date, 10:45 and "ID + passport". Clicking a procedure creates the email; a separate **Copy email** button copies it (formatted for Outlook, with a plain-text fallback). Missing date or time shows highlighted placeholders |
| `formatter.html` | Live demo: loads a fictional daily cash report, then **Format** turns it into a 7-column table (Date · Case · ID no. · Name · Procedure · ID? · Passport?). Names become "John Smith". Works out which documents are expected from the fees paid, flags a provisional ID number (click **Pending** to type the final number, or ✔ to keep it pending) and marks an unreadable line in red. Copies tab-separated rows for Excel |
| `tracker.html` | Live demo: a guided 3-step walkthrough on one screen. Step 1, documents arrive in the diplomatic pouch (click envelopes to scan them, one is not in the records). Step 2, applicants collect (scan signed slips, cases are archived). Step 3, move forward 14 days and the delayed cases are flagged. The counters and case list always come from the same data. A strip shows which of the 4 real workbook tabs each step uses. Links to a Google Sheets version |
| `sop.html` | 4-stage flow with design rules and the SOP preview image |
| `styles.css` | All styles. Colour tokens at the top, with light and dark mode. Demo components are at the end of the file |
| `site.js` | Shared script: sticky header border, back-to-top button, case pages open at the top, fade-in on scroll, `flash()` highlight, `copyText()` helper, table edge fade |
| `images/` | Card images `01-triage.png` to `05-sop.png` (`05-sop.png` is also the SOP preview), `monogram-cp.png`, plus: |
| `images/photo.jpg` | About section photo (shown at 4:5, cropped with `object-fit: cover`) |
| `images/og-banner.png` | Link preview image (1200×630) used by the Open Graph and Twitter tags on every page |
| `images/favicon.png` | Square 512×512 crop of the monogram, used as the browser tab icon and phone home-screen icon |
| `image-source/mock.html` | Source of an earlier set of illustrations. No longer used by the site |

## Demo data

All demo data is fictional:
- Names: John Smith, Emily Brown, James Taylor, Sophia Wilson, Oliver Davis, Ella Jones, Grace Miller, Lucy Parker, Alex Example. The formatter's raw sample report prints them as "SMITH, John" on purpose, to show the clean-up.
- Case numbers: 9 digits starting with 7 (700000141…). ID numbers: 8 digits (30000041…).
- The formatter and tracker share the same people and case numbers.
- Email address: documents@example.org. Fees in the formatter's sample report are invented. No consulate name, logo, booking link or real fees.

## Still to fill in

- CV link (`href="#"` on the Download CV button in the Contact section of `index.html`).
- About photo (placeholder box) and the two testimonial cards. To hide the Testimonials section, add `hidden` to its `<section>` tag.
