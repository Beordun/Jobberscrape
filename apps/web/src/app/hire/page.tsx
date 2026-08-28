'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ShieldCheck, Send, Check } from 'lucide-react';
import styles from './page.module.css';

export default function HirePage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    companyName: '',
    contactEmail: '',
    phone: '',
    jobTitle: '',
    roleType: 'TECH',
    location: 'Lagos',
    description: '',
    applyUrl: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // v1: manual admin intake — payload would POST to EmployerLead table (see Issue #7)
    console.log('Employer intake submitted:', form);
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className="container">
        <div className={styles.intro}>
          <div className={styles.badge}>
            <ShieldCheck size={18} />
            <span>Verified Employer Intake</span>
          </div>
          <h1>Post a Verified Job</h1>
          <p>
            Reach top Nigerian fresh graduates and NYSC corps members. Every listing
            passes our anti-scam verification engine before going live.
          </p>
        </div>

        {submitted ? (
          <div className={styles.successCard}>
            <div className={styles.checkIcon}>
              <Check size={30} />
            </div>
            <h2>Submission Received</h2>
            <p>
              Our team will verify your company details and publish the listing within
              24 hours. You'll be contacted at <strong>{form.contactEmail || 'your email'}</strong>.
            </p>
            <button
              className={styles.submitBtn}
              onClick={() => setSubmitted(false)}
            >
              Submit Another Job
            </button>
          </div>
        ) : (
          <form className={styles.formCard} onSubmit={handleSubmit}>
            <section className={styles.section}>
              <h2>Company Details</h2>
              <div className={styles.fieldRow}>
                <label className={styles.field}>
                  <span>Company Name</span>
                  <input
                    name="companyName"
                    value={form.companyName}
                    onChange={handleChange}
                    placeholder="e.g., Acme Fintech Ltd"
                    required
                  />
                </label>
                <label className={styles.field}>
                  <span>Work Email</span>
                  <input
                    name="contactEmail"
                    type="email"
                    value={form.contactEmail}
                    onChange={handleChange}
                    placeholder="hiring@company.com"
                    required
                  />
                </label>
              </div>
              <div className={styles.fieldRow}>
                <label className={styles.field}>
                  <span>Phone (optional)</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 ..."
                  />
                </label>
              </div>
            </section>

            <section className={styles.section}>
              <h2>Job Details</h2>
              <label className={styles.field}>
                <span>Job Title</span>
                <input
                  name="jobTitle"
                  value={form.jobTitle}
                  onChange={handleChange}
                  placeholder="e.g., Graduate Trainee, Junior Engineer"
                  required
                />
              </label>
              <div className={styles.fieldRow}>
                <label className={styles.field}>
                  <span>Role Type</span>
                  <select name="roleType" value={form.roleType} onChange={handleChange}>
                    <option value="TECH">Tech</option>
                    <option value="OPS">Ops</option>
                    <option value="FINANCE">Finance</option>
                    <option value="NYSC_TRAINEE">NYSC / Trainee</option>
                    <option value="OTHER">Other</option>
                  </select>
                </label>
                <label className={styles.field}>
                  <span>Location</span>
                  <select name="location" value={form.location} onChange={handleChange}>
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Remote">Remote</option>
                  </select>
                </label>
              </div>
              <label className={styles.field}>
                <span>Job Description</span>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Responsibilities, requirements, and how candidates apply..."
                  required
                />
              </label>
              <label className={styles.field}>
                <span>Application Link</span>
                <input
                  name="applyUrl"
                  value={form.applyUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  required
                />
              </label>
            </section>

            <div className={styles.notice}>
              <ShieldCheck size={16} />
              <span>
                Zero fees for jobseekers. We reject any listing that demands
                application, processing, or training fees.
              </span>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <Send size={16} />
              Submit for Review
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
