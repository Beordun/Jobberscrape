# Project Scaffolding & Agent Setup Walkthrough

We have scaffolded the complete monorepo for **Jobberscrape** along with the specialized agent skills and architecture components:

---

### 1. Agents & Workspace Rules
* **[AGENTS.md](file:///c:/Users/DT001/Desktop/Jobberscrape/AGENTS.md)**: Workspace engineering guidelines, design token definitions, and anti-scam verification SLA rules.
* **[anti-scam-verifier](file:///c:/Users/DT001/Desktop/Jobberscrape/.agents/skills/anti-scam-verifier/SKILL.md)**: Agent skill defining deterministic fee/MLM rule drops, Tier-1 corporate impersonation checks, and vector similarity thresholds.
* **[telegram-broadcaster](file:///c:/Users/DT001/Desktop/Jobberscrape/.agents/skills/telegram-broadcaster/SKILL.md)**: Agent skill defining the 8:00 AM WAT curated payload format and inline keyboard specs.
* **[frontend-design](file:///c:/Users/DT001/Desktop/Jobberscrape/.agents/skills/frontend-design/SKILL.md)**: Existing specialized design skill guiding the distinctive UI.

---

### 2. Database & Data Model
* **[schema.prisma](file:///c:/Users/DT001/Desktop/Jobberscrape/packages/database/prisma/schema.prisma)**: Prisma PostgreSQL schema with `pgvector` extension for storing job records, embeddings, duplicate tracking, and community reports.
* **[setup_vector.sql](file:///c:/Users/DT001/Desktop/Jobberscrape/packages/database/sql/setup_vector.sql)**: SQL migration script creating HNSW cosine similarity index and the `match_jobs` search function.

---

### 3. Scraping & Anti-Scam Python Service
* **[verification.py](file:///c:/Users/DT001/Desktop/Jobberscrape/services/scraper/verification.py)**: Deterministic fee filter, MLM trap filter, experience regex extractor, and Tier-1 impersonation detection logic.
* **[main.py](file:///c:/Users/DT001/Desktop/Jobberscrape/services/scraper/main.py)**: Scraper pipeline orchestrator with mock data and verification reporting.
* **[broadcast.py](file:///c:/Users/DT001/Desktop/Jobberscrape/services/bot/broadcast.py)**: Daily 8:00 AM WAT Telegram broadcast formatter and dispatcher.

---

### 4. Next.js 14+ PWA Frontend (`apps/web`)
* **[globals.css](file:///c:/Users/DT001/Desktop/Jobberscrape/apps/web/src/app/globals.css)**: Implements the distinctive token system (`#0A1128` Deep Navy, `#059669` Emerald, `#2563EB` Electric Blue).
* **[Header.tsx](file:///c:/Users/DT001/Desktop/Jobberscrape/apps/web/src/components/Header.tsx)**: Anti-Scam SLA banner and Telegram channel link.
* **[FilterBar.tsx](file:///c:/Users/DT001/Desktop/Jobberscrape/apps/web/src/components/FilterBar.tsx)**: Sub-second client-side instant filtering across Role, Location, and Saved items.
* **[JobCard.tsx](file:///c:/Users/DT001/Desktop/Jobberscrape/apps/web/src/components/JobCard.tsx)**: Trust badge, experience metadata, and 1-tap report trigger.
* **[ReportModal.tsx](file:///c:/Users/DT001/Desktop/Jobberscrape/apps/web/src/components/ReportModal.tsx)**: 1-tap community fraud reporting modal.
* **[page.tsx](file:///c:/Users/DT001/Desktop/Jobberscrape/apps/web/src/app/page.tsx)**: Instant search and `localStorage` bookmark persistence.
