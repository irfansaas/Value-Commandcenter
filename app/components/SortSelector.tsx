'use client';

import { SortOption } from '@/lib/types';

interface SortSelectorProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'dealsize-high', label: 'Deal Size (High → Low)' },
  { value: 'dealsize-low', label: 'Deal Size (Low → High)' },
  { value: 'health-best', label: 'Health Score (Best → Worst)' },
  { value: 'health-worst', label: 'Health Score (Worst → Best)' },
  { value: 'daysinstage-most', label: 'Days in Stage (Most → Least)' },
  { value: 'daysinstage-least', label: 'Days in Stage (Least → Most)' },
  { value: 'company-az', label: 'Company Name (A → Z)' },
  { value: 'rep-az', label: 'Rep Name (A → Z)' },
  { value: 'closedate-soonest', label: 'Close Date (Soonest First)' },
  { value: 'recently-updated', label: 'Recently Updated' },
];

export function SortSelector({ sortOption, onSortChange }: SortSelectorProps) {
  return (
    <select
      value={sortOption}
      onChange={(e) => onSortChange(e.target.value as SortOption)}
      className="select"
    >
      {SORT_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
