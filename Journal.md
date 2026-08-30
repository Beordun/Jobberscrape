# Engineering & Architecture Journal — Jobberscrape

This journal documents the development milestones, technical decisions, challenges encountered, and solutions engineered during the build of Jobberscrape.

---

## 1. Project Overview & Core Mission

Jobberscrape was initiated to solve a structural trust crisis in Nigerian entry-level recruitment. Fresh graduates and NYSC corps members routinely encounter predatory recruitment scams, fee-charging interview invites, multi-level marketing (MLM) traps, and extreme experience inflation on legacy job boards.

Our goal was to engineer a high-trust, zero-friction job aggregation system powered by an automated anti-scam pipeline, delivering verified opportunities through a Next.js Progressive Web App (PWA) and daily Telegram broadcasts.

---

## 2. Work Done & Architecture Decisions

### 2.1 Monorepo Architecture
- **Decision:** Structured the repository as a clean monorepo:
  - `apps/web`: Next.js 14+ PWA with client-side state and offline caching.
  - `packages/database`: Prisma models and Supabase `pgvector` SQL setup.
  - `services/scraper`: Python 3.11+ scraper, verification engine, and REST client.
  - `services/bot`: Python Telegram dispatcher with markdown formatting and inline action keyboards.
  - `.agents/`: Specialized agent skills and engineering directives (`AGENTS.md`).
- **Rationale:** Keeps data definitions unified while isolating the Python scraping runtime from the web application frontend.

### 2.2 Anti-Scam Verification Engine
- **Decision:** Built a multi-layered verification system:
  1. **Deterministic Rule Filter:** Instantly drops fee triggers (`"processing fee"`, `"registration fee"`, `"scratch card"`, `"training fee"`) and MLM briefing traps (`"job briefing"`, `"come with 2 passport photos"`, `"wealth creation"`).
  2. **Experience Integrity Parser:** Regex-based experience extraction enforcing entry-level thresholds (dropping or rejecting posts requiring $>3$ years).
  3. **Corporate Impersonation Heuristics:** Flags posts claiming Tier-1 corporate status (e.g. Access Bank, GTBank, MTN, Flutterwave, Paystack) when associated with free webmail domains (`@gmail.com`, `@yahoo.com`) with a `+35` risk score penalty.
  4. **Vector Similarity Matching:** Generates 1536-dimensional embeddings with OpenAI `text-embedding-3-small` (combining Title, Company, first 1,000 chars, and last 1,000 chars) and evaluates cosine similarity against known scam profiles.

### 2.3 Frontend Design & User Experience
- **Decision:** Avoided generic AI-generated templates and cookie-cutter designs by implementing a bespoke design token system:
  - Deep Ink Navy (`#0A1128`)
  - Crisp Clean Surface (`#F8FAFC`)
  - Card White (`#FFFFFF`)
  - Verification Emerald (`#059669`)
  - Alert Ochre (`#D97706`)
  - Primary Electric Blue (`#2563EB`)
- **Zero-Friction Access:** No mandatory sign-up, login, or ATS barriers. Instant client-side search filtering across Role, Location, and Trust Status (sub-500ms latency), with bookmarks persisted in `localStorage`.

### 2.4 Community Reporting & Telegram Broadcasts
- **Decision:** Implemented a 1-tap scam reporting mechanism (`/api/report`). Deduplicates reports by `(jobId, userIp)` and automatically escalates listings to `PENDING_REVIEW` once 3 distinct IP addresses report the same job.
- **Decision:** Scheduled Telegram daily broadcasts for 8:00 AM WAT featuring the top 5 verified jobs of the day with inline buttons for direct applications, PWA deep links, and scam reporting.

---

## 3. Key Challenges & Solutions Provided

### Challenge 1: Experience Range Parsing Failed Upper-Bound Checks
- **Context:** Listings requiring `"3-5 years"` or `"2 to 4 years"` were passing the entry-level check because the initial regex only captured the lower bound (`3` instead of `5`).
- **Impact:** Misleading jobs with inflated requirements were slipping into the verified feed.
- **Solution:** Rewrote `extract_experience_years` in `services/scraper/verification.py` using two separate regex passes: one for explicit ranges (`(\d+)\s*(?:-|to)\s*(\d+)\s*\+?\s*years?`) and one for standalone numbers (`(\d+)\s*\+?\s*years?`), always taking the maximum detected value.

---

### Challenge 2: False Positives in Corporate Impersonation Heuristics
- **Context:** The initial impersonation check searched the entire job description for Tier-1 corporate names. A legitimate small agency posting a job requiring "experience integrating Paystack APIs" while using a Gmail address was penalized with `+35` risk points.
- **Impact:** Legitimate small businesses were falsely categorized under `CAUTION`.
- **Solution:** Constrained the corporate brand matching scope to the `companyName` and `title` fields only. This preserved strict protection against fake corporate recruiters while eliminating false positives on vendor/partner job descriptions.

---

### Challenge 3: Incomplete Verification-Tag Filtering in Frontend
- **Context:** The PRD mandated three core filter dimensions: Role, Location, and Verification Status (`VERIFIED` vs `CAUTION`). The initial frontend only had Role and Location pills.
- **Impact:** Users could not isolate review-flagged posts or focus strictly on fully verified clean listings.
- **Solution:** Added a `Trust` filter group in `FilterBar.tsx` (`ALL`, `VERIFIED`, `CAUTION`) wired into `page.tsx` client-side filtering. Updated `JobCard.tsx` to visually differentiate `CAUTION` listings with ochre borders and warning badges.

---

### Challenge 4: Missing Employer Intake Route
- **Context:** The top navigation bar included a "Post a Job (₦20,000)" CTA pointing to `/hire`, but no route existed, causing a 404 error.
- **Impact:** Broken navigation and inability to collect B2B employer leads.
- **Solution:** Built `apps/web/src/app/hire/page.tsx` with full form validation, responsive layout, and a structured submission confirmation screen matching the design tokens.

---

### Challenge 5: Offline & Low-Bandwidth Portability
- **Context:** Nigerian candidates often browse on mobile devices with intermittent internet connectivity.
- **Impact:** Complex server roundtrips for search and bookmarking cause high latency and user drop-off.
- **Solution:** Designed the PWA architecture with client-side filtering on pre-fetched static seed datasets and browser `localStorage` bookmarking. This guarantees instant sub-500ms filtering regardless of connection speed.

---

## 4. Current State & Next Steps

### Current Status: Production-Ready Monorepo
- Scraper and verification pipeline fully functional with live and preview fallbacks.
- Web application building cleanly with zero TypeScript/lint errors.
- Daily Telegram broadcast service and GitHub Actions cron workflow configured.
- Comprehensive issue log documented in `Issues.md` and user-facing instructions in `README.md`.

### Future Roadmap (v2+):
1. Expand automated scraping to 15+ Nigerian tech, finance, and FMCG career portals.
2. Introduce candidate WhatsApp broadcast alerts alongside Telegram.
3. Build an automated self-serve employer dashboard with Paystack payment gateway integration for instant featured listings.
