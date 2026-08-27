---
name: telegram-broadcaster
description: Guidelines and message formatting specifications for dispatching the 8:00 AM WAT Nigerian entry-level job broadcast payload.
---

# Telegram Broadcast Agent Skill

This skill defines the schedule, formatting, and payload dispatch rules for the Telegram Broadcast channel.

## 1. Schedule & Cadence
- **Timing:** 8:00 AM WAT (West Africa Time) daily.
- **Quota:** Maximum 5 curated, top-ranked `VERIFIED` jobs per broadcast to avoid notification fatigue.

## 2. Message Formatting Rules

Each broadcast must feature:
- Clean emoji hierarchy (⚡, 🛡️, 📍, 💼).
- Concise job summary: Title, Company, Location, Role Category, Experience required.
- Clear "🛡️ Scam Verified (0 Fee Guarantee)" badge.
- Inline keyboard buttons:
  - Button 1: `👉 Apply Directly` (links to official source URL)
  - Button 2: `🌐 View on Web (PWA)` (links to Jobberscrape PWA deep-link)
  - Button 3: `⚠️ Report Listing` (links to 1-tap report endpoint)

## 3. Sample Broadcast Payload Template

```text
⚡ TOP VERIFIED ENTRY-LEVEL JOBS — [DATE]

🛡️ 100% Free Application Guarantee | Zero Recruitment Fees

1. Junior Operations Associate — Paystack
📍 Lagos | 💼 Ops | 🎓 0-1 yrs exp
🛡️ Verification: PASS (Tier-1 Domain)

2. Graduate Trainee (Finance) — Stanbic IBTC
📍 Abuja / Hybrid | 💼 Finance | 🎓 NYSC / Trainee
🛡️ Verification: PASS (Official Portal)

...
```
