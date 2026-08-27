import re
from typing import Dict, Any, Tuple, List

# Tier-1 Corporate Brands operating in Nigeria (Banks, Telcos, FMCGs, Tier-1 Tech)
TIER_1_CORPORATES = [
    "access bank", "gtbank", "guaranty trust bank", "zenith bank", "first bank",
    "stanbic ibtc", "uba", "united bank for africa", "fidelity bank", "ecobank",
    "mtn", "airtel", "glo", "globacom", "9mobile",
    "dangote", "unilever", "nestle", "cadbury", "nigerian breweries", "guinness",
    "flutterwave", "paystack", "interswitch", "kuda", "moniepoint", "opay", "andela"
]

# Free Webmail Domains
FREE_WEBMAIL_DOMAINS = [
    "gmail.com", "yahoo.com", "ymail.com", "hotmail.com", "outlook.com", "live.com", "aol.com"
]

# Deterministic Fee-Demanding Triggers (Instant Reject)
FEE_TRIGGERS = [
    "processing fee", "registration fee", "scratch card", "training fee",
    "acceptance fee", "form fee", "medical report fee", "interview fee"
]

# Multi-Level Marketing (MLM) and Briefing Bait Triggers (Instant Reject)
MLM_TRIGGERS = [
    "job briefing", "capacity building", "come with 2 passport photos",
    "wealth creation", "daily income potential", "unlimited earnings potential",
    "travel opportunities abroad immediately"
]

class VerificationEngine:
    @staticmethod
    def extract_experience_years(text: str) -> int:
        """
        Extracts the required years of experience from text using regex.
        Returns highest detected number of years or 0.
        """
        matches = re.findall(r'(\d+)\+?\s*(?:-\s*\d+\s*)?years?', text, re.IGNORECASE)
        if matches:
            return max(int(m) for m in matches)
        return 0

    @classmethod
    def verify_listing(cls, job_data: Dict[str, Any], similarity_score: float = 0.0) -> Tuple[str, int, List[str]]:
        """
        Executes deterministic rules and heuristic risk scoring.
        Returns: (verificationStatus, scamRiskScore, reasons)
        """
        reasons = []
        risk_score = 0
        
        full_text = f"{job_data.get('title', '')} {job_data.get('companyName', '')} {job_data.get('description', '')}".lower()
        
        # 1. Deterministic Fee Check (Immediate Drop)
        for trigger in FEE_TRIGGERS:
            if trigger in full_text:
                reasons.append(f"Fee demand trigger detected: '{trigger}'")
                return ("REJECTED", 100, reasons)
                
        # 2. Deterministic MLM Check (Immediate Drop)
        for trigger in MLM_TRIGGERS:
            if trigger in full_text:
                reasons.append(f"MLM bait trigger detected: '{trigger}'")
                return ("REJECTED", 100, reasons)

        # 3. Experience Inflation Check (>3 years is not entry-level)
        exp_years = cls.extract_experience_years(full_text)
        if exp_years > 3:
            reasons.append(f"Experience inflation detected: {exp_years} years required for entry-level")
            return ("REJECTED", 85, reasons)
            
        # 4. Impersonation Check (Tier-1 brand using free webmail)
        company_lower = job_data.get('companyName', '').lower()
        contact_email = (job_data.get('contactEmail') or '').lower()
        
        is_tier_1 = any(corp in company_lower or corp in full_text for corp in TIER_1_CORPORATES)
        if is_tier_1 and contact_email:
            domain = contact_email.split('@')[-1] if '@' in contact_email else ''
            if domain in FREE_WEBMAIL_DOMAINS:
                risk_score += 35
                reasons.append(f"Tier-1 brand impersonation risk: {company_lower} using free webmail @{domain}")

        # 5. Vector Similarity Evaluation (against known scam vector bank)
        if similarity_score > 0.90:
            risk_score = max(risk_score, 95)
            reasons.append(f"High vector similarity to known scam pattern ({similarity_score:.2f})")
            return ("REJECTED", risk_score, reasons)
        elif similarity_score >= 0.75:
            risk_score = max(risk_score, 65)
            reasons.append(f"Moderate vector similarity to suspicious pattern ({similarity_score:.2f})")
            return ("CAUTION", risk_score, reasons)
            
        if risk_score >= 35:
            return ("CAUTION", risk_score, reasons)
            
        return ("VERIFIED", risk_score, ["Passed deterministic and heuristic verification checks."])
