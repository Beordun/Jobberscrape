import React, { useState } from 'react';
import { Job } from '../types/job';
import { AlertTriangle, X, Check } from 'lucide-react';
import styles from './ReportModal.module.css';

interface ReportModalProps {
  job: Job | null;
  onClose: () => void;
  onSubmitReport: (jobId: string, reason: string) => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({
  job,
  onClose,
  onSubmitReport
}) => {
  const [reason, setReason] = useState('FEE_SOLICITATION');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitReport(job.id, `${reason}: ${details}`);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <div className={styles.titleGroup}>
            <AlertTriangle className={styles.alertIcon} size={20} />
            <h3>Report Fraud / Scam Listing</h3>
          </div>
          <button onClick={onClose} className={styles.closeBtn}>
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div className={styles.successState}>
            <div className={styles.checkIcon}>
              <Check size={28} />
            </div>
            <h4>Report Logged</h4>
            <p>Thank you for protecting Nigerian jobseekers. If 3 distinct reports are verified, this post will be automatically suspended.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.jobBrief}>
              <strong>{job.title}</strong> at {job.companyName}
            </div>

            <div className={styles.field}>
              <label>Reason for Flagging:</label>
              <select 
                value={reason} 
                onChange={(e) => setReason(e.target.value)}
                className={styles.select}
              >
                <option value="FEE_SOLICITATION">Asking for Application/Screening Fee</option>
                <option value="MLM_BRIEFING">GNLD / MLM Briefing Trap</option>
                <option value="IMPERSONATION">Fake Corporate Brand Impersonation</option>
                <option value="EXPERIENCE_MISMATCH">Requires 3+ years (Not Entry-Level)</option>
                <option value="OTHER">Other Suspicious Behavior</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Additional Evidence (Optional):</label>
              <textarea
                placeholder="e.g., They sent a WhatsApp invite demanding N2,000 for training..."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className={styles.textarea}
                rows={3}
              />
            </div>

            <div className={styles.actions}>
              <button type="button" onClick={onClose} className={styles.cancelBtn}>
                Cancel
              </button>
              <button type="submit" className={styles.submitBtn}>
                Submit 1-Tap Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
