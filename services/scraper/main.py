import os
import json
import logging
from typing import List, Dict, Any
from verification import VerificationEngine

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger("ScraperPipeline")

# Sample mock targets for ingestion demonstration
MOCK_SCRAPED_DATA = [
    {
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

def run_scraper_and_verification():
    logger.info("Starting Daily Scraper & Verification Job (6:00 AM UTC)...")
    
    verified_jobs = []
    rejected_jobs = []
    caution_jobs = []

    for raw_job in MOCK_SCRAPED_DATA:
        # Run verification engine
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
