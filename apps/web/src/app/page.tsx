'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from '@/components/Header';
import { FilterBar } from '@/components/FilterBar';
import { JobCard } from '@/components/JobCard';
import { ReportModal } from '@/components/ReportModal';
import { INITIAL_JOBS } from '@/data/jobs';
import { Job } from '@/types/job';
import styles from './page.module.css';

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>(INITIAL_JOBS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('ALL');
  const [selectedLocation, setSelectedLocation] = useState('ALL');
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [reportingJob, setReportingJob] = useState<Job | null>(null);

  // Load bookmarks from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('jobberscrape_bookmarks');
      if (saved) {
        setBookmarkedIds(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load bookmarks', e);
    }
  }, []);

  // Save bookmarks to localStorage
  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('jobberscrape_bookmarks', JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save bookmark', e);
      }
      return next;
    });
  };

  const handleReportScam = (jobId: string, reason: string) => {
    console.log(`Report logged for Job ${jobId}: ${reason}`);
    // Update local report count
    setJobs((prev) =>
      prev.map((job) =>
        job.id === jobId ? { ...job, reportCount: job.reportCount + 1 } : job
      )
    );
  };

  // Instant Client-Side Filter
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // 1. Verification filter (only show verified/caution, exclude rejected)
      if (job.verificationStatus === 'REJECTED') return false;

      // 2. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesCompany = job.companyName.toLowerCase().includes(q);
        const matchesDesc = job.description.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCompany && !matchesDesc) return false;
      }

      // 3. Role filter
      if (selectedRole !== 'ALL' && job.roleType !== selectedRole) {
        return false;
      }

      // 4. Location filter
      if (selectedLocation !== 'ALL' && !job.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }

      // 5. Bookmarks filter
      if (showBookmarkedOnly && !bookmarkedIds.includes(job.id)) {
        return false;
      }

      return true;
    });
  }, [jobs, searchQuery, selectedRole, selectedLocation, showBookmarkedOnly, bookmarkedIds]);

  return (
    <div className={styles.page}>
      <Header />

      <main className="container">
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          showBookmarkedOnly={showBookmarkedOnly}
          onToggleBookmarkedOnly={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
          totalResults={filteredJobs.length}
        />

        {filteredJobs.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No Verified Opportunities Found</h3>
            <p>Try adjusting your search query or filters to discover active entry-level roles.</p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedRole('ALL');
                setSelectedLocation('ALL');
                setShowBookmarkedOnly(false);
              }}
              className={styles.resetBtn}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isBookmarked={bookmarkedIds.includes(job.id)}
                onToggleBookmark={handleToggleBookmark}
                onReportClick={(j) => setReportingJob(j)}
              />
            ))}
          </div>
        )}
      </main>

      <ReportModal
        job={reportingJob}
        onClose={() => setReportingJob(null)}
        onSubmitReport={handleReportScam}
      />
    </div>
  );
}
