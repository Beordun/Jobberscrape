import React from 'react';
import { ShieldCheck, Send, AlertTriangle } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navRow}>
          <div className={styles.brand}>
            <div className={styles.logoBadge}>
              <ShieldCheck className={styles.logoIcon} size={24} />
            </div>
            <div>
              <h1 className={styles.logoText}>Jobber<span className={styles.logoAccent}>scrape</span></h1>
              <span className={styles.tagline}>Nigeria's High-Trust Entry-Level & NYSC Feed</span>
            </div>
          </div>
          <div className={styles.actions}>
            <a 
              href="https://t.me/jobberscrape" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.telegramButton}
            >
              <Send size={16} />
              <span>Join Telegram (8:00 AM Drops)</span>
            </a>
            <a href="/hire" className={styles.hireLink}>
              Post a Job (₦20,000)
            </a>
          </div>
        </div>

        <div className={styles.trustBanner}>
          <div className={styles.trustItem}>
            <ShieldCheck size={18} className={styles.trustIcon} />
            <span><strong>Anti-Scam SLA:</strong> 0 fee-charging or MLM posts pass our automated pipeline.</span>
          </div>
          <div className={styles.metricsItem}>
            <span className={styles.pulseDot}></span>
            <span>Live Daily Verified Updates</span>
          </div>
        </div>
      </div>
    </header>
  );
};
