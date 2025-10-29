'use client';

import { useState } from 'react';
import { Deal, DealFilters, DEAL_STAGES, INDUSTRIES } from '@/lib/types';
import { getUniqueAEs } from '@/lib/utils';

interface FilterPanelProps {
  deals: Deal[];
  filters: DealFilters;
  onFilterChange: (filters: DealFilters) => void;
  onClearFilters: () => void;
}

export function FilterPanel({ deals, filters, onFilterChange, onClearFilters }: FilterPanelProps) {
  const [searchQuery, setSearchQuery] = useState(filters.searchQuery || '');

  const uniqueAEs = getUniqueAEs(deals);
  const uniqueIndustries = Array.from(new Set(deals.map((d) => d.industry))).sort();

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onFilterChange({ ...filters, searchQuery: value || undefined });
  };

  const handleAEToggle = (ae: string) => {
    const newReps = filters.reps?.includes(ae)
      ? filters.reps.filter((r) => r !== ae)
      : [...(filters.reps || []), ae];
    onFilterChange({ ...filters, reps: newReps.length > 0 ? newReps : undefined });
  };

  const handleIndustryToggle = (industry: string) => {
    const newIndustries = filters.industries?.map((i) => i as string).includes(industry)
      ? filters.industries?.filter((i) => i !== industry)
      : [...(filters.industries || []), industry as any];
    onFilterChange({ ...filters, industries: newIndustries?.length ? (newIndustries as any) : undefined });
  };

  const handleHealthStatusToggle = (status: string) => {
    const newStatuses = filters.healthStatus?.includes(status as any)
      ? filters.healthStatus.filter((s) => s !== status)
      : [...(filters.healthStatus || []), status as any];
    onFilterChange({ ...filters, healthStatus: newStatuses.length > 0 ? (newStatuses as any) : undefined });
  };

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
        <input
          type="text"
          placeholder="Company name, AE, deal ID..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="input"
        />
      </div>

      {/* Representatives */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Account Executives</label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {uniqueAEs.map((ae) => (
            <label key={ae} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.reps?.includes(ae) || false}
                onChange={() => handleAEToggle(ae)}
                className="rounded border-gray-300 text-blue-600 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">{ae}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Industries */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Industries</label>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {uniqueIndustries.map((industry) => (
            <label key={industry} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.industries?.includes(industry as any) || false}
                onChange={() => handleIndustryToggle(industry)}
                className="rounded border-gray-300 text-blue-600 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700">{industry}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Health Status */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Health Status</label>
        <div className="space-y-2">
          {['healthy', 'at-risk', 'stalled'].map((status) => (
            <label key={status} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.healthStatus?.includes(status as any) || false}
                onChange={() => handleHealthStatusToggle(status)}
                className="rounded border-gray-300 text-blue-600 cursor-pointer"
              />
              <span className="ml-2 text-sm text-gray-700 capitalize">{status}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
