---
name: anti-scam-verifier
desciption: .Procedures and heuristic rules for verifying Nigerian entry-level jobs, scoring scam risk, detecting fee traps, corporate impersonation, and MLM lures.
---

# Anti-Scam Verification Agent & Engine Skill

This skill defines the multi-tiered verification pipeline for validating Nigerian entry-level and NYSC job opportunities before database insertion and broadcast.

## 1. Deterministic Rule Matching

A job post is marked `REJECTED` (with risk score 100) if any of the following keyword categories are detected in the title, description, or requirements:

### Fee Demands

- `"processing fee"`
- `"registration fee"`
- `"scratch card"`
- `"training fee"`
- `"acceptance fee"`
- `"form fee"`

### Multi-Level Marketing (MLM) & Briefing Traps (e.g. GNLD / NeoLife)

- `"job briefing"`
- `"capacity building"`
- `"come with 2 passport photos"`
- `"wealth creation"`
- `"business development associate"` (when accompanied by unspecified office location or generic invite instructions)
- `"daily income potential"`

### Experience Inflation Check

- Extract experience using regex: `(\d+)\+?\s*years?`
- If max or extracted experience $>3$ years, reject or drop from `ENTRY_LEVEL`/`NYSC_TRAINEE` categorization.

---

## 2. Heuristic Impersonation Detection

Check if company name matches Tier-1 Nigerian Corporate List (e.g. Access Bank, GTBank, Zenith Bank, First Bank, MTN, Airtel, Dangote, Unilever, Nestle, Flutterwave, Paystack, Interswitch, etc.).

If the company is Tier-1:

- Check `contactEmail` or application destination.
- If domain is free webmail (`gmail.com`, `yahoo.com`, `hotmail.com`, `outlook.com`, `ymail.com`), increment `scamRiskScore` by `+35` points.

---

## 3. Vector-Based Semantic Scam Scoring

Embed input string: `Title + " | " + Company + " | " + Description[:1000] + " | " + Description[-1000:]` using OpenAI `text-embedding-3-small` (1536 dims).

Query similarity against known scam vector bank:

- **Similarity > 0.90:** Status = `REJECTED`, `scamRiskScore = 95`
- **Similarity 0.75 - 0.90:** Status = `PENDING_REVIEW` / `CAUTION`, `scamRiskScore = 65`
- **Similarity < 0.75:** Status = `VERIFIED`, `scamRiskScore = 0`

---

## 4. Community Flagging Action

- When `/api/jobs/report` receives 3 unique IP reports on a single job ID:
  - Transition status to `PENDING_REVIEW`
  - Notify admin alert channel
