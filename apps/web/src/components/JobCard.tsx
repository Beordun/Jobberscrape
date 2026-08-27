import React, { useState } from 'react';
import { Job, RoleType } from '../types/job';
import { 
  Building2, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Bookmark, 
  ExternalLink, 
  AlertTriangle 
} from 'lucide-react';
import styles from './JobCard.module.css';

interface JobCardProps {
  job: Job;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onReportClick: (job: Job) => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  isBookmarked,
  onToggleBookmark,
  onReportClick
}) => {
  const getRoleBadgeClass = (role: RoleType) => {
    switch (role) {
      case 'TECH': return styles.badgeTech;
      case 'OPS': return styles.badgeOps;
      case 'FINANCE': return styles.badgeFinance;
      case 'NYSC_TRAINEE': return styles.badgeNysc;
      default: return styles.badgeOther;
    }
  };

  return (
    <div className={`${styles.card} ${job.isFeatured ? styles.featuredCard : ''}`}>
      {job.isFeatured && (
        <div className={styles.featuredRibbon}>
          ★ FEATURED DROP
        </div>
      )}

      <div className={styles.cardHeader}>
        <div>
          <div className={styles.companyRow}>
            <span className={styles.companyName}>{job.companyName}</span>
            <span className={styles.verifiedPill}>
              <ShieldCheck size={14} className={styles.verifiedIcon} />
              Verified Clean
            </span>
          </div>
          <h2 className={styles.jobTitle}>{job.title}</h2>
        </div>

        <button 
          onClick={() => onToggleBookmark(job.id)}
          className={`${styles.bookmarkBtn} ${isBookmarked ? styles.bookmarked : ''}`}
          aria-label={isBookmarked ? "Remove bookmark" : "Save job"}
        >
          <Bookmark size={18} fill={isBookmarked ? "currentColor" : "none"} />
        </button>
      </div>

      <p className={styles.description}>{job.description}</p>

      <div className={styles.metaRow}>
        <div className={styles.metaPills}>
          <span className={styles.metaPill}>
            <MapPin size={14} />
            {job.location}
          </span>
          <span className={`${styles.metaPill} ${getRoleBadgeClass(job.roleType)}`}>
            {job.roleType.replace('_', ' ')}
          </span>
          <span className={styles.metaPill}>
            <Clock size={14} />
            {job.minExperienceYears}-{job.maxExperienceYears} yrs exp
          </span>
        </div>

        {job.verifiedBadgeDetails && (
          <div className={styles.auditDetails}>
            <small>🛡️ {job.verifiedBadgeDetails}</small>
          </div>
        )}
      </div>

      <div className={styles.cardFooter}>
        <button 
          onClick={() => onReportClick(job)}
          className={styles.reportLink}
        >
          <AlertTriangle size={13} />
          Report Scam / Fee
        </button>

        <a 
          href={job.applyUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.applyButton}
        >
          <span>Apply Directly</span>
          <ExternalLink size={15} />
        </a>
      </div>
    </div>
  );
};
