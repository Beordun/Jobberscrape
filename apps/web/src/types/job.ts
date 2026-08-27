export type RoleType = 'TECH' | 'OPS' | 'FINANCE' | 'NYSC_TRAINEE' | 'OTHER';
export type VerificationStatus = 'VERIFIED' | 'CAUTION' | 'REJECTED' | 'SUSPENDED' | 'PENDING_REVIEW';

export interface Job {
  id: string;
  title: string;
  companyName: string;
  location: string;
  roleType: RoleType;
  description: string;
  applyUrl: string;
  contactEmail?: string;
  minExperienceYears: number;
  maxExperienceYears: number;
  verificationStatus: VerificationStatus;
  scamRiskScore: number;
  reportCount: number;
  isFeatured: boolean;
  createdAt: string;
  verifiedBadgeDetails?: string;
}
