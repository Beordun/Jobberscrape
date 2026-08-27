Revised Build-Ready PRD
Markdown
# PRODUCT REQUIREMENT DOCUMENT (PRD) - REVISED v1.1

## 1. Product Summary
This product is an automated, high-trust job aggregation and verification platform engineered specifically for fresh graduates and National Youth Service Corps (NYSC) members in Nigeria. It addresses structural trust failures in entry-level hiring by operating an automated anti-scam pipeline. The system ingests job listings across online portals, runs automated deterministic and heuristic filters to purge fraudulent postings, mislabeled experience parameters, and fee-demanding network marketing traps, and pushes verified opportunities through a zero-friction Telegram distribution feed and a Next.js Progressive Web Application (PWA). 

**Trust Guarantee SLA:** The automated system enforces a zero-tolerance threshold for public broadcasts; zero fee-soliciting or Tier-1 brand impersonation posts shall reach the public Telegram feed.

## 2. Problem Statement
The Nigerian entry-level recruitment ecosystem suffers from extreme information asymmetry and safety hazards:
* **Predatory Scams & Fee Extraction:** Fraudulent entities (e.g., GNLD/NeoLife multi-level marketing traps, fee-charging recruiters) post vague listings to extract money ("registration/processing fees") or lure candidates into physical safety risks under the guise of "job briefings."
* **Recruiter Impersonation:** Scammers impersonate corporate entities (Tier-1 banks, FMCGs) using free, unverified webmail domains (`@gmail.com`, `@yahoo.com`). *Note: Legitimate SMBs operating without custom domains are permitted provided they do not claim corporate brand identities or solicit fees.*
* **Experience Inflation Noise:** Employers mislabel postings as "Entry-Level" while mandating 3 to 5+ years of professional experience, creating search noise for candidates.
* **High App-Store Friction:** Candidates face high data costs and low storage capacity on entry-level Android devices, causing high churn when forced to download native apps or navigate complex login/ATS barriers.

## 3. Goals & Non-Goals

### Goals
* **Automate Verification:** Programmatically block 95%+ of predatory network marketing scams, free webmail corporate impersonations, and fee-charging posts prior to database ingestion. Maintain a Scam Leakage Rate of <0.5%.
* **Zero-Friction Access:** Deliver clean job feeds with zero forced registration or app installation via Telegram broadcasts and a lightweight Next.js PWA.
* **Sub-Second Search Latency:** Provide sub-500ms search filter responses on mobile networks across Lagos, Abuja, and remote locations using Client-Side Filtering on pre-fetched static datasets and edge API caching.
* **High Conversion Delivery:** Achieve high open rates via automated 8:00 AM daily Telegram broadcasts to captive subscriber channels.

### Non-Goals
* **Full Applicant Tracking System (ATS):** The platform will not handle internal candidate stage management, interviewing schedules, candidate CV uploads, or native application parsing in v1.
* **Self-Serve Employer Portal:** Employer job submissions in v1 are handled via an intake form and manual admin processing rather than a complex self-serve portal.
* **Global/Generic Aggregation:** The system will not aggregate unverified mid-to-senior executive roles or expand outside African entry-level markets for v1.
* **Native iOS/Android App Build:** No Swift or Kotlin native app development will be undertaken for v1.

## 4. Target Users & Personas

| Persona | Archetype | Pain Points | Primary Needs |
| :--- | :--- | :--- | :--- |
| **Amina (Fresh Graduate)** | 22-year-old Unilag graduate based in Lagos seeking first full-time role. | Falls for fake interview invites in remote locations; wasted transport fares; overwhelmed by LinkedIn noise. | Verified entry-level roles, scam-checked employer details, zero cost. |
| **Tunde (NYSC Corps Member)** | 24-year-old serving in Abuja looking for Primary Place of Assignment (PPA) or post-NYSC job. | Filtered out by "3+ years experience" requirements tagged as entry-level; lacks time to check multiple job boards daily. | Low-data Telegram notifications, explicit NYSC/Trainee tags, instant application links. |
| **Emeka (Vetted SMB Employer)** | Hiring Manager at a growing fintech in Yaba, Lagos. | Inundated with unqualified applications via generic email; cannot afford ₦200,000+ per post on traditional legacy job boards. | Targeted reach to top-tier African tech/ops grads; verified listing badge; low cost via manual intake form. |

## 5. Product Scope

+---------------------------------------------------------------------------------+
|                                 SYSTEM SCOPE                                    |
+----------------------------------------+----------------------------------------+
|                IN SCOPE (v1 MVP)       |          OUT OF SCOPE (v2+)            |
+----------------------------------------+----------------------------------------+
| * Automated Python Scraper & Scraper   | * Candidate CV Builder & Auto-Apply    |
|   Cron (GitHub Actions @ 6:00 AM UTC)  | * Native iOS/Android Apps (App Store)  |
| * Deterministic & Heuristic Verification| * In-App Direct Messaging / Chat UI    |
| * Telegram Broadcast Bot Integration   | * Complex Recruiter Dashboard ATS      |
| * Next.js 14+ PWA with localStorage    | * Multi-Country Localizations          |
| * Supabase PostgreSQL + pgvector Schema| * Direct Candidate CV Collection       |
| * Manual Employer Intake Form          | * Self-Serve Employer Portal           |
+----------------------------------------+----------------------------------------+


## 6. Functional Requirements

### 6.1 Data Acquisition & Scraping Module
* **FR-SCR-01:** The scraper shall execute automatically every morning at 6:00 AM UTC via GitHub Actions using Python, restricted to 5 high-density target job portals for v1.
* **FR-SCR-02:** The system shall ingest raw job postings from targeted RSS feeds, public career portals, and HTML structures without violating `robots.txt` directives.
* **FR-SCR-03:** The scraper shall deduplicate postings by checking existing `source_url` entries in the `scraped_sources` database table before ingestion.

### 6.2 Anti-Scam Verification Engine
* **FR-VER-01 (Deterministic Drop):** The engine shall automatically discard any post containing fee-demand keywords (*"processing fee"*, *"registration fee"*, *"scratch card"*, *"training fee"*).
* **FR-VER-02 (MLM Drop):** The engine shall discard network marketing bait terms (*"job briefing"*, *"capacity building"*, *"come with 2 passport photos"*, *"wealth creation"*).
* **FR-VER-03 (Impersonation Flag):** If a job description mentions a Tier-1 corporate brand (e.g., Banks, MNCs, FMCGs) but uses a free webmail contact email (`@gmail.com`, `@yahoo.com`, `@hotmail.com`), the risk score shall increase by 35 points.
* **FR-VER-04 (Experience Inflation Filter):** The parser shall extract regex matching `(\d+)\+?\s*years?` experience. If the experience required is $>3$ years, the system shall purge the "Entry-Level" tag or reject the listing.
* **FR-VER-05 (Community Flagging & Safety):** The frontend PWA and Telegram bot deep links shall expose a 1-tap "Report Scam" mechanism. Reaching a threshold of 3 unique reports from distinct IP addresses automatically updates the post status to `PENDING_REVIEW` for admin inspection without immediate public removal unless risk score $>55$.

### 6.3 Telegram Broadcast Service
* **FR-TEL-01:** The bot shall execute a daily payload broadcast at 8:00 AM WAT to the subscriber channel.
* **FR-TEL-02:** The broadcast payload must contain maximum 5 verified jobs formatted with Inline Action Buttons linking to the direct application URL or the PWA detail view.

### 6.4 Progressive Web Application (PWA) Interface
* **FR-PWA-01:** The interface shall render without requiring mandatory user registration or authentication.
* **FR-PWA-02:** Filter options must allow instantaneous client-side state updates for **Role Type** (`Tech`, `Ops`, `Finance`, `NYSC/Trainee`), **Location** (`Lagos`, `Abuja`, `Remote`), and **Verification Tag** (`Verified`, `Caution`).
* **FR-PWA-03:** The system shall persist user bookmarks in the browser's `localStorage` via client-side keys.

## 7. AI & AI-Related Tools & Solutions

### 7.1 Automated Job Parsing & Structuring
Raw HTML scraped from job pages is parsed using an LLM micro-service API to return structured JSON.

```json
{
  "title": "Junior Operations Associate",
  "company_name": "Paystack",
  "location": "Lagos",
  "role_type": "Ops",
  "min_experience_years": 0,
  "max_experience_years": 1,
  "detected_skills": ["Excel", "SQL"],
  "scam_indicators": []
}
7.2 Tiered Semantic Scam Scoring & Vector Embeddings
Embedding Input Construction: To capture trailing scam clauses, document text for embedding is constructed by concatenating: Title + Company + First 1,000 Characters + Last 1,000 Characters.

Embedding Engine: Text is processed into 1536-dimensional vector embeddings using text-embedding-3-small.

Tiered Cosine Similarity Routing:

Similarity >0.90: Auto-reject listing (REJECTED).

Similarity 0.75−0.90: Flag for manual human inspection (CAUTION / PENDING_REVIEW).

Similarity <0.75: Pass to verified queue (VERIFIED).

8. Technical Architecture & Prisma Data Model
Architecture Overview
                                  [ GitHub Actions Cron ]
                                             │ (Runs daily @ 6:00 AM UTC)
                                             ▼
                                   [ Python Scraper Logic ]
                                             │
                                             ▼
                                  [ Verification Engine ]
                                  ├── Deterministic Rules
                                  └── Tiered Vector Check
                                             │
                                             ▼
                                  [ Supabase PostgreSQL ]
                                  (pgvector + Standard Relational)
                                             │
                      ┌──────────────────────┴──────────────────────┐
                      ▼                                             ▼
         [ Telegram Bot Service ]                       [ Next.js 14+ PWA ]
         (8:00 AM WAT Broadcast)                        (Hosted on Vercel)
Production Prisma Schema (schema.prisma)
Code snippet
datasource db {
  provider   = "postgresql"
  url        = env("DATABASE_URL")
  directUrl  = env("DIRECT_URL")
  extensions = [pgvector(map: "vector")]
}

generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["postgresqlExtensions"]
}

enum RoleType {
  TECH
  OPS
  FINANCE
  NYSC_TRAINEE
  OTHER
}

enum VerificationStatus {
  VERIFIED
  CAUTION
  REJECTED
  SUSPENDED
  PENDING_REVIEW
}

model Job {
  id                  String             @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  title               String             @db.VarChar(255)
  companyName         String             @db.VarChar(255)
  location            String             @db.VarChar(100)
  roleType            RoleType           @default(OTHER)
  description         String             @db.Text
  applyUrl            String             @db.Text
  contactEmail        String?            @db.VarChar(255)
  minExperienceYears  Int                @default(0)
  maxExperienceYears  Int                @default(0)
  verificationStatus  VerificationStatus @default(VERIFIED)
  scamRiskScore       Int                @default(0)
  reportCount         Int                @default(0)
  isFeatured          Boolean            @default(false)
  
  sourceId            String?            @db.Uuid
  scrapedSource       ScrapedSource?     @relation(fields: [sourceId], references: [id], onDelete: SetNull)

  // Vector Embedding for Semantic Search / Scam Scoring
  embedding           Unsupported("vector(1536)")?

  createdAt           DateTime           @default(now()) @db.Timestamptz(6)
  updatedAt           DateTime           @updatedAt @db.Timestamptz(6)

  reports             JobReport[]

  @@index([verificationStatus, isFeatured, createdAt(sort: Desc)])
  @@index([location, roleType])
  @@index([scamRiskScore])
  @@map("jobs")
}

model ScrapedSource {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  sourceUrl String   @unique @db.Text
  createdAt DateTime @default(now()) @db.Timestamptz(6)
  
  jobs      Job[]

  @@map("scraped_sources")
}

model JobReport {
  id        String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  jobId     String   @db.Uuid
  reason    String   @db.Text
  userIp    String   @db.VarChar(45)
  createdAt DateTime @default(now()) @db.Timestamptz(6)

  job       Job      @relation(fields: [jobId], references: [id], onDelete: Cascade)

  @@unique([jobId, userIp])
  @@map("job_reports")
}

model EmployerLead {
  id          String   @id @default(dbgenerated("gen_random_uuid()")) @db.Uuid
  companyName String   @db.VarChar(255)
  email       String   @db.VarChar(255)
  phone       String?  @db.VarChar(50)
  notes       String?  @db.Text
  status      String   @default("PENDING") @db.VarChar(50)
  createdAt   DateTime @default(now()) @db.Timestamptz(6)

  @@map("employer_leads")
}
9. Vector Database Architecture & Design
The system uses Supabase pgvector to execute low-latency vector operations within PostgreSQL.

Chunking & Vector Generation Rules
Document Input Construction: Concatenation of Title + Company + First 1,000 Chars + Last 1,000 Chars.

Embedding Engine: OpenAI text-embedding-3-small outputting a 1536-dimensional array.

Indexing Algorithm: HNSW
Indexed using Hierarchical Navigable Small World (HNSW) over IVFFlat for faster concurrent reads.

SQL
-- Raw SQL Migration for Supabase HNSW Index Setup
CREATE INDEX ON jobs 
USING hnsw (embedding vector_cosine_ops)
WITH (m = 16, ef_construction = 64);
Vector Similarity Search Function
SQL
CREATE OR REPLACE FUNCTION match_jobs (
  query_embedding vector(1536),
  match_threshold float,
  match_count int
)
RETURNS TABLE (
  id uuid,
  title text,
  company_name text,
  similarity float
)
LANGUAGE plpgsql
AS $$ BEGIN   RETURN QUERY   SELECT     jobs.id,     jobs.title,     jobs.company_name,     1 - (jobs.embedding <=> query_embedding) AS similarity   FROM jobs   WHERE 1 - (jobs.embedding <=> query_embedding) > match_threshold     AND jobs.verification_status = 'VERIFIED'   ORDER BY jobs.embedding <=> query_embedding   LIMIT match_count; END; $$;
10. Vector Database Model
In Supabase pgvector, vectors are stored as native table columns. Relational fields serve as metadata:

Column Name	PostgreSQL Type	Functional Description
id	UUID	Primary key linking directly to the relational Job entity.
embedding	vector(1536)	Dense vector representation generated by text-embedding-3-small.
verificationStatus	ENUM	Relational filter column to restrict vector queries to VERIFIED posts.
roleType	ENUM	Relational filter column for fast category-based similarity constraints.
11. Business & Monetization Model
Candidate Tier (B2C)
100% Free Access: Zero paywalls for job search, Telegram notifications, or saving jobs locally.

B2B Employer Tier (Paid Featured Drops)
Employers pay to broadcast verified jobs directly to the candidate audience via manual submission intake:

+-----------------------------------------------------------------------------------+
|                            PRICING MATRIX (B2B)                                   |
+----------------------+--------------------+---------------------------------------+
| TIER                 | PRICE (NGN)        | INCLUSIONS                            |
+----------------------+--------------------+---------------------------------------+
| Single Featured Post | ₦20,000 / post     | * Top-pinned positioning in PWA feed  |
|                      |                    |   for 7 days.                         |
|                      |                    | * 1x Dedicated Telegram Broadcast drop|
|                      |                    | * "Direct Recruiter" Verified Badge.  |
+----------------------+--------------------+---------------------------------------+
| Monthly Employer Pass| ₦65,000 / month    | * Up to 4 Featured Job Posts.         |
|                      |                    | * Priority Verification Engine check. |
|                      |                    | * Direct apply link highlighting.     |
+----------------------+--------------------+---------------------------------------+
12. Success Metrics & Key Performance Indicators (KPIs)
                       CORE SUCCESS DASHBOARD
+-------------------------------------------------------------------+
| METRIC                           | TARGET (DAY 30) | TARGET (DAY 90)|
+----------------------------------+-----------------+----------------+
| Daily Active Users (PWA)         | 1,500 DAU       | 8,000 DAU      |
| Telegram Open/Click-Through Rate | 40% CTR         | 55% CTR        |
| Scam Leakage Rate (Scams Live)   | <0.5%           | <0.1%          |
| False Positive Rate (Valid Jobs) | <3%             | <1%            |
| PWA Average Page Load Time       | <1.2s (3G)      | <800ms (3G)    |
| Paying Employer Accounts         | 5 Accounts      | 25 Accounts    |
+----------------------------------+-----------------+----------------+
13. Risks & Mitigation Strategies
Risk Factor	Severity	Impact	Mitigation Strategy
Scraper IP Blocking / Cloudflare Protections	High	Prevents fresh job ingestion.	Use lightweight proxy rotation (e.g., ScraperAPI free tier) and limit scraping to 5 reliable target sources in v1.
False Positives (Valid jobs blocked)	Medium	Reduces listing inventory.	Implement an admin queue for jobs scoring in the 0.75−0.90 similarity band.
Employer Copyright / Takedown Demands	Low	Legal notice or complaint.	Provide an automated /takedown web form allowing employers to instantly unpublish their job listing upon ownership validation.
14. Open Questions & Technical Assumptions
Technical Assumptions
[ASSUMPTION 1]: Scraping 5 target portals daily completes within 10 minutes, remaining well inside GitHub Actions free tier quotas.

[ASSUMPTION 2]: Supabase PostgreSQL free tier storage (500MB) will handle up to ~25,000 active job records with vector embeddings before requiring a paid scale plan.

[ASSUMPTION 3]: Target candidates have Telegram installed, avoiding push notification delivery drop-off.

Open Questions
Should v1 integrate an automated WhatsApp Channel option alongside Telegram once monthly B2B employer revenue reaches ₦250,000?

Should community reporters receive a visual confirmation badge when a flagged job is verified as a scam and removed?