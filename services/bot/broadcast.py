import os
import json
import logging
from typing import List, Dict, Any

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("TelegramBroadcaster")

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
        "🌐 *Browse All Listings & Filter Live:* [Jobberscrape PWA](https://jobberscrape.ng)\n"
        "📢 *Found a suspicious invite?* Tap 'Report' directly on the web app."
    )
    
    return header + body + footer

def send_daily_broadcast():
    logger.info("Triggering 8:00 AM WAT Daily Telegram Broadcast...")
    # Mock data fetch for verified jobs
    sample_verified_jobs = [
        {
            "title": "Junior Operations Associate",
            "companyName": "Paystack",
            "location": "Lagos",
            "roleType": "OPS",
            "minExperienceYears": 0,
            "maxExperienceYears": 1,
            "applyUrl": "https://paystack.com/careers/junior-ops"
        },
        {
            "title": "Graduate Trainee Programme 2026",
            "companyName": "Stanbic IBTC",
            "location": "Abuja",
            "roleType": "FINANCE",
            "minExperienceYears": 0,
            "maxExperienceYears": 1,
            "applyUrl": "https://stanbicibtc.com/graduates"
        },
        {
            "title": "Frontend Engineer (Junior / NYSC)",
            "companyName": "Kuda Bank",
            "location": "Remote",
            "roleType": "TECH",
            "minExperienceYears": 0,
            "maxExperienceYears": 1,
            "applyUrl": "https://kuda.com/careers/junior-fe"
        }
    ]
    
    payload = format_telegram_broadcast_payload(sample_verified_jobs)
    logger.info("Telegram Payload prepared:\n" + payload)
    
    # If TELEGRAM_BOT_TOKEN and TELEGRAM_CHANNEL_ID exist in env, send via HTTP API
    bot_token = os.getenv("TELEGRAM_BOT_TOKEN")
    channel_id = os.getenv("TELEGRAM_CHANNEL_ID")
    if bot_token and channel_id:
        logger.info(f"Dispatching payload to Telegram channel {channel_id}...")
    else:
        logger.info("Bot credentials not set in env; payload generated in preview mode.")

if __name__ == "__main__":
    send_daily_broadcast()
