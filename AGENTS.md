# Jobberscrape System Rules & Engineering Directives

These rules govern the development, testing, and operation of the Jobberscrape platform.

## 1. Zero-Tolerance Anti-Scam Verification SLA
- **Deterministic Rule Drop:** Any scraped post containing fee-soliciting triggers (*"processing fee"*, *"registration fee"*, *"scratch card"*, *"training fee"*) or MLM lures (*"job briefing"*, *"capacity building"*, *"come with 2 passport photos"*, *"wealth creation"*) MUST be rejected immediately prior to entering verified feeds.
- **Experience Integrity:** Listings labeled "Entry-Level" or "Graduate Trainee" that require $>3$ years experience MUST have their entry-level tag stripped or be rejected.
- **Impersonation Guards:** Posts referencing Tier-1 corporations (e.g., Banks, FMCGs, Telcos) using free webmail (`@gmail.com`, `@yahoo.com`, `@hotmail.com`) receive a mandatory +35 risk penalty.

## 2. Frontend Design & Performance Standards
- Follow the guidelines in `.agents/skills/frontend-design/SKILL.md`.
- No generic, cookie-cutter templates. Use the distinct design token system:
  - Deep Ink Navy (`#0A1128`)
  - Crisp Clean Surface (`#F8FAFC`)
  - Card White (`#FFFFFF`)
  - Verification Emerald (`#059669`)
  - Alert Ochre (`#D97706`)
  - Primary Electric Blue (`#2563EB`)
- Target sub-500ms client search responsiveness using pre-fetched datasets and client-side filtering.
- Zero forced registration or sign-up walls for job seekers. Offline bookmarking must be stored in `localStorage`.

## 3. Telegram Broadcast Feed Rules
- Scheduled daily at 8:00 AM WAT.
- Broadcast max 5 top-ranked verified jobs of the day with inline action buttons (`Apply Now`, `View Details`, `Report Scam`).
