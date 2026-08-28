import os
import json
import logging
import re
from typing import List, Dict, Any, Optional
from urllib.parse import urlparse
from urllib.robotparser import RobotFileParser

import requests

from verification import VerificationEngine
import backend

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("ScraperPipeline")

# Sample mock targets for ingestion demonstration
MOCK_SCRAPED_DATA = [    {
        "title": "Junior Operations Associate",
        "companyName": "Paystack",
        "location": "Lagos",
        "roleType": "OPS",
        "description": "We are seeking a detail-oriented Junior Operations Associate to support payment operations and merchant reconciliation. 0-1 years of experience in finance, ops, or related quantitative field.",
        "applyUrl": "https://paystack.com/careers/junior-ops",
        "contactEmail": "careers@paystack.com",
        "minExperienceYears": 0,
        "maxExperienceYears": 1,
        "isFeatured": True
    },
    {
        "title": "Graduate Trainee Programme 2026",
        "companyName": "Stanbic IBTC",
        "location": "Abuja",
        "roleType": "FINANCE",
        "description": "Stanbic IBTC Graduate Trainee Programme invites passionate Nigerian fresh graduates and NYSC corps members for an intensive 12-month development track.",
        "applyUrl": "https://stanbicibtc.com/graduates",
        "contactEmail": "recruitment@stanbicibtc.com",
        "minExperienceYears": 0,
        "maxExperienceYears": 1,
        "isFeatured": True
    },
    {
        "title": "Executive Business Development Rep",
        "companyName": "Global Alliance Ltd",
        "location": "Lagos (Ikeja)",
        "roleType": "OTHER",
        "description": "Urgent recruitment! Attend an exclusive job briefing session at our Ikeja office. Come with 2 passport photos and an updated CV for on-the-spot screening.",
        "applyUrl": "https://example.com/apply-now",
        "contactEmail": "hr.recruitments2026@gmail.com",
        "minExperienceYears": 0,
        "maxExperienceYears": 0
    },
    {
        "title": "Customer Care Officer",
        "companyName": "Access Bank PLC",
        "location": "Lagos",
        "roleType": "OPS",
        "description": "Access Bank is hiring Customer Care Officers. Candidates must submit application with a N2,500 screening scratch card pin.",
        "applyUrl": "https://example-fake-access.com",
        "contactEmail": "accessbank.careers@yahoo.com",
        "minExperienceYears": 0,
        "maxExperienceYears": 2
    },
    {
        "title": "Frontend Engineer (Junior / NYSC)",
        "companyName": "Kuda Bank",
        "location": "Remote",
        "roleType": "TECH",
        "description": "Join our mobile and web development team. Looking for fresh graduates or NYSC members with solid knowledge of TypeScript, React, and CSS.",
        "applyUrl": "https://kuda.com/careers/junior-fe",
        "contactEmail": "careers@kuda.com",
        "minExperienceYears": 0,
        "maxExperienceYears": 1,
        "isFeatured": False
    }
]

def is_allowed_by_robots(url: str, user_agent: str = "JobberscrapeBot/1.0") -> bool:
    """Honors robots.txt directives (FR-SCR-02). Returns True if fetch is permitted."""
    parsed = urlparse(url)
    base = f"{parsed.scheme}://{parsed.netloc}"
    rp = RobotFileParser()
    rp.set_url(f"{base}/robots.txt")
    try:
        rp.read()
        return rp.can_fetch(user_agent, url)
    except Exception:  # noqa: BLE001
        # If robots.txt is unavailable, be conservative and allow for demo portability.
        return True


def fetch_portal_html(url: str, timeout: int = 20) -> Optional[str]:
    if not is_allowed_by_robots(url):
        logger.warning("Skipping %s — disallowed by robots.txt", url)
        return None
    try:
        resp = requests.get(url, timeout=timeout, headers={"User-Agent": "JobberscrapeBot/1.0"})
        resp.raise_for_status()
        return resp.text
    except Exception as exc:  # noqa: BLE001
        logger.error("Fetch failed for %s: %s", url, exc)
        return None


def extract_jobs_from_html(html: str, base_url: str) -> List[Dict[str, Any]]:
    """Best-effort parse of common job-listing HTML structures.

    Looks for <a> elements that carry a job title inside headings or 'h' classes
    and their href. This is intentionally lightweight; a robust per-portal parser
    or an LLM micro-service (PRD 7.1) can be layered on top.
    """
    jobs: List[Dict[str, Any]] = []
    anchor_re = re.compile(
        r'<a[^>]+href=["\'](?P<href>[^"\']+)["\'][^>]*>\s*(?P<text>.*?)</a>',
        re.IGNORECASE | re.DOTALL,
    )
    for m in anchor_re.finditer(html):
        text = re.sub(r'<[^>]+>', ' ', m.group("text"))
        text = re.sub(r'\s+', ' ', text).strip()
        if not text or len(text) < 5:
            continue
        # Heuristic: only keep links that look like job titles (title-ish casing).
        href = m.group("href")
        if not href.startswith("http"):
            href = requests.compat.urljoin(base_url, href)
        jobs.append({
            "title": text,
            "companyName": "",
            "location": "",
            "roleType": "OTHER",
            "description": text,
            "applyUrl": href,
            "contactEmail": None,
            "minExperienceYears": 0,
            "maxExperienceYears": 0,
            "sourceUrl": href,
        })
    return jobs


def run_scraper_and_verification():
    logger.info("Starting Daily Scraper & Verification Job (6:00 AM UTC)...")

    # Live ingestion path when Supabase is configured; otherwise preview mode.
    if backend.is_configured():
        logger.info("Supabase configured — running live ingestion path.")
        _run_live_pipeline()
        return [], [], []

    _run_preview_pipeline()


def _run_live_pipeline():
    portal_urls = os.getenv("SCRAPER_PORTALS", "").split(",")
    portal_urls = [u.strip() for u in portal_urls if u.strip()]

    for portal in portal_urls:
        html = fetch_portal_html(portal)
        if not html:
            continue
        for raw_job in extract_jobs_from_html(html, portal):
            if backend.source_exists(raw_job["sourceUrl"]):
                logger.info("Duplicate skipped: %s", raw_job["sourceUrl"])
                continue
            status, risk_score, reasons = VerificationEngine.verify_listing(raw_job)
            if status == "REJECTED":
                logger.error("❌ REJECTED: %s — %s", raw_job["title"], reasons)
                continue
            embedding = backend.generate_embedding(backend.build_embedding_input(raw_job))
            record = {
                **raw_job,
                "verificationStatus": status,
                "scamRiskScore": risk_score,
                "verificationReasons": reasons,
            }
            if backend.insert_job(record, embedding) and backend.insert_source(raw_job["sourceUrl"]):
                logger.info("%s: %s (Risk %s)", status, raw_job["title"], risk_score)
            else:
                logger.warning("Persistence failed for %s", raw_job["title"])


def _run_preview_pipeline():
    verified_jobs = []
    rejected_jobs = []
    caution_jobs = []

    for raw_job in MOCK_SCRAPED_DATA:
        status, risk_score, reasons = VerificationEngine.verify_listing(raw_job)
        
        job_record = {
            **raw_job,
            "verificationStatus": status,
            "scamRiskScore": risk_score,
            "verificationReasons": reasons
        }

        if status == "VERIFIED":
            verified_jobs.append(job_record)
            logger.info(f"✅ VERIFIED: {raw_job['title']} at {raw_job['companyName']} (Risk Score: {risk_score})")
        elif status == "CAUTION":
            caution_jobs.append(job_record)
            logger.warning(f"⚠️ CAUTION: {raw_job['title']} at {raw_job['companyName']} - Reasons: {reasons}")
        else:
            rejected_jobs.append(job_record)
            logger.error(f"❌ REJECTED: {raw_job['title']} at {raw_job['companyName']} - Reasons: {reasons}")

    logger.info(f"Summary: Verified={len(verified_jobs)}, Caution={len(caution_jobs)}, Rejected={len(rejected_jobs)}")
    return verified_jobs, caution_jobs, rejected_jobs

if __name__ == "__main__":
    run_scraper_and_verification()
