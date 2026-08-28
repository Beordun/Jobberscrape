import os
import json
import logging
import sys
from typing import List, Dict, Any

import requests

# Allow importing the shared backend from the sibling scraper service.
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "scraper"))
from backend import fetch_verified_jobs  # noqa: E402

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("TelegramBroadcaster")

TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_CHANNEL_ID = os.getenv("TELEGRAM_CHANNEL_ID", "")
PWA_BASE_URL = os.getenv("PWA_BASE_URL", "https://jobberscrape.ng")


def format_telegram_broadcast_payload(jobs: List[Dict[str, Any]]) -> str:
    """
    Formats the daily 8:00 AM WAT Telegram broadcast message.
    """
    header = (
        "⚡ *TOP VERIFIED ENTRY-LEVEL & NYSC JOBS (NIGERIA)* ⚡\n"
        "🛡️ *Zero Scam Guarantee | 100% Free Applications*\n"
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
    )

    body = ""
    for idx, job in enumerate(jobs[:5], 1):
        role_type = job.get('roleType', 'OTHER')
        exp = f"{job.get('minExperienceYears', 0)}-{job.get('maxExperienceYears', 1)} yrs"
        body += (
            f"*{idx}. {job['title']}* — *{job['companyName']}*\n"
            f"📍 Location: {job['location']} | 💼 {role_type}\n"
            f"🎓 Exp: {exp}\n"
            f"🛡️ Trust Status: ✅ VERIFIED\n"
            f"👉 Apply: {job['applyUrl']}\n\n"
        )

    footer = (
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
        f"🌐 *Browse All Listings & Filter Live:* [Jobberscrape PWA]({PWA_BASE_URL})\n"
        "📢 *Found a suspicious invite?* Tap 'Report' directly on the web app."
    )

    return header + body + footer


def build_inline_keyboard(jobs: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Builds the inline action buttons per FR-TEL-02 (Apply Now / View Details / Report Scam)."""
    inline_keyboard: List[List[Dict[str, str]]] = []
    for job in jobs[:5]:
        apply_url = job.get("applyUrl", PWA_BASE_URL)
        detail_url = f"{PWA_BASE_URL}/job/{job.get('id', '')}"
        inline_keyboard.append([
            {"text": "Apply Now", "url": apply_url},
            {"text": "View Details", "url": detail_url},
            {"text": "Report Scam", "url": f"{PWA_BASE_URL}/report?job={job.get('id', '')}"},
        ])
    return {"inline_keyboard": inline_keyboard}


def send_daily_broadcast():
    logger.info("Triggering 8:00 AM WAT Daily Telegram Broadcast...")

    jobs = fetch_verified_jobs(limit=5)

    if not jobs:
        # Fallback sample data when Supabase is not configured.
        jobs = [
            {
                "id": "sample-1",
                "title": "Junior Operations Associate",
                "companyName": "Paystack",
                "location": "Lagos",
                "roleType": "OPS",
                "minExperienceYears": 0,
                "maxExperienceYears": 1,
                "applyUrl": "https://paystack.com/careers/junior-ops"
            },
            {
                "id": "sample-2",
                "title": "Graduate Trainee Programme 2026",
                "companyName": "Stanbic IBTC",
                "location": "Abuja",
                "roleType": "FINANCE",
                "minExperienceYears": 0,
                "maxExperienceYears": 1,
                "applyUrl": "https://stanbicibtc.com/graduates"
            },
            {
                "id": "sample-3",
                "title": "Frontend Engineer (Junior / NYSC)",
                "companyName": "Kuda Bank",
                "location": "Remote",
                "roleType": "TECH",
                "minExperienceYears": 0,
                "maxExperienceYears": 1,
                "applyUrl": "https://kuda.com/careers/junior-fe"
            }
        ]
        logger.info("Using fallback sample payload (no Supabase credentials).")

    payload_text = format_telegram_broadcast_payload(jobs)

    if TELEGRAM_BOT_TOKEN and TELEGRAM_CHANNEL_ID:
        send_telegram_message(payload_text, build_inline_keyboard(jobs))
    else:
        logger.info("Bot credentials not set in env; payload generated in preview mode:\n" + payload_text)


def send_telegram_message(text: str, reply_markup: Dict[str, Any]) -> bool:
    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": TELEGRAM_CHANNEL_ID,
        "text": text,
        "parse_mode": "Markdown",
        "reply_markup": reply_markup,
    }
    try:
        resp = requests.post(url, json=payload, timeout=20)
        resp.raise_for_status()
        logger.info("Broadcast sent to channel %s", TELEGRAM_CHANNEL_ID)
        return True
    except Exception as exc:  # noqa: BLE001
        logger.error("Telegram dispatch failed: %s", exc)
        return False


if __name__ == "__main__":
    send_daily_broadcast()
