"""Shared backend helpers: Supabase REST + OpenAI embeddings.

All calls are credential-gated so the pipeline degrades to preview mode when
env vars are absent. Uses only `requests` (no heavy SDKs) to stay portable.
"""
import os
import logging
from typing import Dict, Any, List, Optional

import requests

logger = logging.getLogger("Backend")

SUPABASE_URL = os.getenv("SUPABASE_URL", "").rstrip("/")
SUPABASE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY", "")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")

EMBEDDING_MODEL = "text-embedding-3-small"
EMBEDDING_DIM = 1536


def is_configured() -> bool:
    return bool(SUPABASE_URL and SUPABASE_KEY)


def _headers() -> Dict[str, str]:
    return {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
    }


# --------------------------------------------------------------------------
# OpenAI embeddings
# --------------------------------------------------------------------------
def generate_embedding(text: str) -> Optional[List[float]]:
    """Returns a 1536-dim embedding or None if OpenAI is not configured."""
    if not OPENAI_API_KEY:
        logger.warning("OPENAI_API_KEY not set; skipping embedding generation.")
        return None
    try:
        resp = requests.post(
            "https://api.openai.com/v1/embeddings",
            headers={"Authorization": f"Bearer {OPENAI_API_KEY}",
                     "Content-Type": "application/json"},
            json={"model": EMBEDDING_MODEL, "input": text},
            timeout=30,
        )
        resp.raise_for_status()
        vector = resp.json()["data"][0]["embedding"]
        return vector
    except Exception as exc:  # noqa: BLE001
        logger.error("Embedding generation failed: %s", exc)
        return None


def build_embedding_input(job: Dict[str, Any]) -> str:
    """Concatenation rule per PRD 7.2: title + company + first/last 1000 chars."""
    title = job.get("title", "")
    company = job.get("companyName", "")
    desc = job.get("description", "")
    head = desc[:1000]
    tail = desc[-1000:] if len(desc) > 1000 else ""
    return f"{title} {company} {head} {tail}".strip()


# --------------------------------------------------------------------------
# Supabase REST persistence
# --------------------------------------------------------------------------
def source_exists(source_url: str) -> bool:
    if not is_configured():
        return False
    try:
        resp = requests.get(
            f"{SUPABASE_URL}/rest/v1/scraped_sources",
            headers=_headers(),
            params={"source_url": f"eq.{source_url}", "select": "id"},
            timeout=15,
        )
        return resp.status_code == 200 and len(resp.json()) > 0
    except Exception as exc:  # noqa: BLE001
        logger.error("Dedup check failed: %s", exc)
        return False


def insert_job(job: Dict[str, Any], embedding: Optional[List[float]]) -> bool:
    if not is_configured():
        return False
    payload = {
        "title": job.get("title"),
        "companyName": job.get("companyName"),
        "location": job.get("location"),
        "roleType": job.get("roleType", "OTHER"),
        "description": job.get("description"),
        "applyUrl": job.get("applyUrl"),
        "contactEmail": job.get("contactEmail"),
        "minExperienceYears": job.get("minExperienceYears", 0),
        "maxExperienceYears": job.get("maxExperienceYears", 0),
        "verificationStatus": job.get("verificationStatus", "VERIFIED"),
        "scamRiskScore": job.get("scamRiskScore", 0),
        "isFeatured": job.get("isFeatured", False),
        "sourceUrl": job.get("sourceUrl"),
    }
    if embedding:
        payload["embedding"] = f"[{','.join(str(x) for x in embedding)}]"
    try:
        resp = requests.post(
            f"{SUPABASE_URL}/rest/v1/jobs",
            headers={**_headers(), "Prefer": "return=minimal"},
            json=payload,
            timeout=15,
        )
        return resp.status_code in (200, 201)
    except Exception as exc:  # noqa: BLE001
        logger.error("Job insert failed: %s", exc)
        return False


def insert_source(source_url: str) -> bool:
    if not is_configured():
        return False
    try:
        resp = requests.post(
            f"{SUPABASE_URL}/rest/v1/scraped_sources",
            headers={**_headers(), "Prefer": "return=minimal"},
            json={"sourceUrl": source_url},
            timeout=15,
        )
        return resp.status_code in (200, 201)
    except Exception as exc:  # noqa: BLE001
        logger.error("Source insert failed: %s", exc)
        return False


def fetch_verified_jobs(limit: int = 5) -> List[Dict[str, Any]]:
    if not is_configured():
        return []
    try:
        resp = requests.get(
            f"{SUPABASE_URL}/rest/v1/jobs",
            headers=_headers(),
            params={
                "verificationStatus": "eq.VERIFIED",
                "order": "createdAt.desc",
                "limit": str(limit),
                "select": "id,title,companyName,location,roleType,minExperienceYears,maxExperienceYears,applyUrl",
            },
            timeout=15,
        )
        if resp.status_code == 200:
            return resp.json()
        return []
    except Exception as exc:  # noqa: BLE001
        logger.error("Fetch verified jobs failed: %s", exc)
        return []
