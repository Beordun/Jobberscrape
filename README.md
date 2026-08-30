# Jobberscrape

Jobberscrape is an automated, scam-free job aggregator built specifically for Nigerian fresh graduates and NYSC corps members. 

Finding an entry-level job in Nigeria often means dealing with fake interview invitations, multi-level marketing schemes disguised as corporate roles, and recruiters demanding application or processing fees. Jobberscrape fixes this by running an automated anti-scam verification engine on every scraped job before it reaches jobseekers through our web app or Telegram channel.

---

## What Problem Does It Solve?

1. **Recruitment Scams and Fee Demands:** We immediately drop any listing asking candidates to pay for scratch cards, aptitude tests, registration, or onboarding materials.
2. **MLM Traps:** We filter out vague invitations (such as GNLD/NeoLife lures) that tell graduates to attend a "briefing" or bring passport photos.
3. **Experience Inflation:** Many postings labeled as entry-level quietly require 3 to 5 years of experience. Our system catches these and strips them from entry-level feeds.
4. **Corporate Impersonation:** If a post claims to represent a major bank, telco, or FMCG but lists a generic Gmail or Yahoo address, it gets flagged with a risk penalty.
5. **Zero Data Friction:** Jobseekers do not need to create an account, log in, or install heavy apps. Everything is accessible directly on the web with instant client-side filtering and local bookmarks.

---

## Key Features

- **Automated Anti-Scam Pipeline:** Deterministic keyword checks, regex experience parsers, corporate impersonation heuristics, and vector similarity scoring with OpenAI embeddings (`text-embedding-3-small`).
- **Fast Progressive Web App (PWA):** Built on Next.js 14+ with sub-second instant search across role types (Tech, Ops, Finance, NYSC Trainee), locations (Lagos, Abuja, Remote), and verification status (Verified, Caution).
- **Daily Telegram Drops:** A scheduled 8:00 AM West Africa Time broadcast delivering top verified jobs with direct apply links and inline action buttons.
- **1-Tap Community Reporting:** Jobseekers can flag suspicious listings directly on the web app. When 3 unique IP addresses report a job, it is automatically held for review.
- **Local Bookmarking:** Save listings to your device using browser storage without signing up.

---

## Architecture and Tech Stack

- **Frontend:** Next.js 14+ (App Router), React, TypeScript, Vanilla CSS Modules (custom token design system)
- **Database & Vectors:** Supabase PostgreSQL with `pgvector` extension and HNSW cosine similarity indexing
- **ORM:** Prisma
- **Scraper & Verification Engine:** Python 3.11+, Requests, BeautifulSoup, OpenAI API
- **Telegram Bot:** Python dispatcher running automated channel broadcasts
- **Automation / CI:** GitHub Actions daily scheduled workflows

---

## Project Structure

```text
Jobberscrape/
├── apps/
│   └── web/                   # Next.js 14+ Progressive Web App
│       ├── public/            # Manifest, icons, static assets
│       └── src/
│           ├── app/           # App router pages, /hire, /api/report
│           ├── components/    # Header, FilterBar, JobCard, ReportModal
│           ├── data/          # Seed datasets
│           └── types/         # TypeScript interfaces
├── packages/
│   └── database/              # Prisma schema and pgvector SQL migrations
├── services/
│   ├── bot/                   # Telegram 8:00 AM WAT broadcast service
│   └── scraper/               # Python scraper, backend adapters, verification engine
├── .agents/                   # Custom agent skills and guidelines
└── AGENTS.md                  # Workspace engineering rules and SLA guidelines
```

---

## Getting Started Locally

### Prerequisites

- Node.js 18+ and npm
- Python 3.10+
- (Optional) Supabase project credentials with pgvector enabled

### 1. Web Application Setup

Navigate to the web app directory and install dependencies:

```bash
cd apps/web
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Python Scraper and Verification Engine

Install the Python dependencies:

```bash
cd services
pip install -r requirements.txt
```

Run the scraper pipeline in preview/live mode:

```bash
python scraper/main.py
```

Run the daily Telegram broadcast generator:

```bash
python bot/broadcast.py
```

---

## Environment Variables

Create a `.env` file in the root or set these secrets in your deployment environment:

```env
# Supabase Database & REST API
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres"
DIRECT_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres"
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# AI Verification
OPENAI_API_KEY="your-openai-api-key"

# Telegram Bot
TELEGRAM_BOT_TOKEN="your-telegram-bot-token"
TELEGRAM_CHANNEL_ID="@your_channel_username"

# PWA Config
PWA_BASE_URL="https://jobberscrape.ng"
```

If these keys are left empty, the scraper and bot run safely in preview mode using local fallback datasets.

---

## Verification Rules and Trust Guarantee

- **Zero-Tolerance Fee Drop:** Listings containing terms like *"processing fee"*, *"registration fee"*, *"scratch card"*, or *"training fee"* are dropped immediately.
- **MLM Filter:** Listings mentioning *"job briefing"*, *"wealth creation"*, or *"come with 2 passport photos"* are dropped immediately.
- **Experience Filter:** Postings requiring more than 3 years of experience are stripped of their entry-level tag or rejected.
- **Impersonation Penalties:** Free webmail contacts used on behalf of Tier-1 Nigerian corporate brands trigger a 35-point risk penalty.

---

## License

This project is private and maintained for the Jobberscrape platform.
