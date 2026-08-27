import React from 'react';
import { RoleType } from '../types/job';
import { Search, Filter, Bookmark } from 'lucide-react';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedRole: string;
  onRoleChange: (r: string) => void;
  selectedLocation: string;
  onLocationChange: (l: string) => void;
  showBookmarkedOnly: boolean;
  onToggleBookmarkedOnly: () => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedRole,
  onRoleChange,
  selectedLocation,
  onLocationChange,
  showBookmarkedOnly,
  onToggleBookmarkedOnly,
  totalResults
}) => {
  return (
    <div className={styles.filterWrapper}>
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search verified role, skill, or employer..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <button
          onClick={onToggleBookmarkedOnly}
          className={`${styles.savedToggle} ${showBookmarkedOnly ? styles.savedToggleActive : ''}`}
        >
          <Bookmark size={16} fill={showBookmarkedOnly ? "currentColor" : "none"} />
          <span>Saved Jobs</span>
        </button>
      </div>

      <div className={styles.pillsRow}>
        <div className={styles.pillGroup}>
          <span className={styles.filterLabel}>Role:</span>
          {['ALL', 'TECH', 'OPS', 'FINANCE', 'NYSC_TRAINEE'].map((role) => (
            <button
              key={role}
              onClick={() => onRoleChange(role)}
              className={`${styles.filterPill} ${selectedRole === role ? styles.pillActive : ''}`}
            >
              {role === 'ALL' ? 'All Roles' : role.replace('_', ' ')}
            </button>
          ))}
        </div>

        <div className={styles.pillGroup}>
          <span className={styles.filterLabel}>Location:</span>
          {['ALL', 'Lagos', 'Abuja', 'Remote'].map((loc) => (
            <button
              key={loc}
              onClick={() => onLocationChange(loc)}
              className={`${styles.filterPill} ${selectedLocation === loc ? styles.pillActive : ''}`}
            >
              {loc === 'ALL' ? 'All Locations' : loc}
            </button>
          ))}
        </div>

        <div className={styles.resultsCount}>
          <span>{totalResults} Verified Jobs</span>
        </div>
      </div>
    </div>
  );
};
