/**
 * Utility functions for deal filtering, sorting, and calculations
 */

import { Deal, DealFilters, SortOption, INDUSTRIES, DEAL_STAGES } from './types';

// ============================================================================
// HEALTH SCORE CALCULATIONS
// ============================================================================

/**
 * Calculate health score based on deal assessment
 * Scoring: Economic buyer (2), Champion (2), ROI (1), Compelling event (1), Competition (1), Business case (1), Process (1), Time (1)
 */
export function calculateHealthScore(deal: Deal): number {
  let score = 0;

  // Economic buyer engagement
  if (deal.stakeholders.economicBuyer?.engaged) score += 2;

  // Champion identification and strength
  if (deal.stakeholders.champion) {
    score += 1;
    if (deal.stakeholders.champion.strength === 'strong') score += 1;
  }

  // VE deliverables
  if (deal.veDeliverables.roiModel.status === 'completed') score += 1;
  if (deal.veDeliverables.executiveBusinessCase.status === 'completed') score += 1;

  // Deal context
  if (deal.compellingEvent) score += 1;
  if (deal.competitor) score += 1;

  // Sales process health
  const daysThreshold = 90;
  if (deal.daysInStage <= daysThreshold) score += 1;

  // Next actions tracked
  if (deal.nextActions.length > 0) score += 1;

  // Cap at 10
  return Math.min(score, 10);
}

/**
 * Determine health status based on health score
 */
export function getHealthStatus(healthScore: number): 'healthy' | 'at-risk' | 'stalled' {
  if (healthScore >= 8) return 'healthy';
  if (healthScore >= 5) return 'at-risk';
  return 'stalled';
}

// ============================================================================
// FILTERING
// ============================================================================

/**
 * Filter deals based on multiple criteria
 */
export function filterDeals(deals: Deal[], filters: DealFilters): Deal[] {
  return deals.filter((deal) => {
    // Search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesQuery =
        deal.company.toLowerCase().includes(query) ||
        deal.ae.toLowerCase().includes(query) ||
        deal.id.toLowerCase().includes(query);
      if (!matchesQuery) return false;
    }

    // Representatives
    if (filters.reps && filters.reps.length > 0 && !filters.reps.includes(deal.ae)) {
      return false;
    }

    // Industries
    if (filters.industries && filters.industries.length > 0 && !filters.industries.includes(deal.industry)) {
      return false;
    }

    // Deal Size Tiers
    if (filters.dealSizeTiers && filters.dealSizeTiers.length > 0) {
      const tierMatch = filters.dealSizeTiers.some((tier) => {
        const annual = deal.dealSizeAnnual;
        switch (tier) {
          case 'tier1':
            return annual >= 960000; // $80K MRR+
          case 'tier2':
            return annual >= 720000 && annual < 960000; // $60-79K MRR
          case 'tier3':
            return annual >= 480000 && annual < 720000; // $40-59K MRR
          case 'tier4':
            return annual >= 300000 && annual < 480000; // $25-39K MRR
          default:
            return true;
        }
      });
      if (!tierMatch) return false;
    }

    // Stages
    if (filters.stages && filters.stages.length > 0 && !filters.stages.includes(deal.stage)) {
      return false;
    }

    // Health Status
    if (filters.healthStatus && filters.healthStatus.length > 0 && !filters.healthStatus.includes(deal.healthStatus)) {
      return false;
    }

    return true;
  });
}

// ============================================================================
// SORTING
// ============================================================================

/**
 * Sort deals by specified criteria
 */
export function sortDeals(deals: Deal[], sortOption: SortOption): Deal[] {
  const sorted = [...deals];

  switch (sortOption) {
    case 'dealsize-high':
      return sorted.sort((a, b) => b.dealSizeAnnual - a.dealSizeAnnual);
    case 'dealsize-low':
      return sorted.sort((a, b) => a.dealSizeAnnual - b.dealSizeAnnual);
    case 'health-best':
      return sorted.sort((a, b) => b.healthScore - a.healthScore);
    case 'health-worst':
      return sorted.sort((a, b) => a.healthScore - b.healthScore);
    case 'daysinstage-most':
      return sorted.sort((a, b) => b.daysInStage - a.daysInStage);
    case 'daysinstage-least':
      return sorted.sort((a, b) => a.daysInStage - b.daysInStage);
    case 'company-az':
      return sorted.sort((a, b) => a.company.localeCompare(b.company));
    case 'rep-az':
      return sorted.sort((a, b) => a.ae.localeCompare(b.ae));
    case 'closedate-soonest':
      return sorted.sort((a, b) => new Date(a.targetCloseDate).getTime() - new Date(b.targetCloseDate).getTime());
    case 'recently-updated':
      return sorted.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    default:
      return sorted;
  }
}

// ============================================================================
// AGGREGATIONS & SUMMARIES
// ============================================================================

/**
 * Calculate summary statistics for deals
 */
export function calculateDealSummary(deals: Deal[]) {
  if (deals.length === 0) {
    return {
      totalDeals: 0,
      totalAnnualValue: 0,
      averageHealthScore: 0,
      dealsAtRisk: 0,
      dealsStalled: 0,
    };
  }

  const totalAnnualValue = deals.reduce((sum, deal) => sum + deal.dealSizeAnnual, 0);
  const averageHealthScore = deals.reduce((sum, deal) => sum + deal.healthScore, 0) / deals.length;
  const dealsAtRisk = deals.filter((d) => d.healthStatus === 'at-risk').length;
  const dealsStalled = deals.filter((d) => d.healthStatus === 'stalled').length;

  return {
    totalDeals: deals.length,
    totalAnnualValue,
    averageHealthScore,
    dealsAtRisk,
    dealsStalled,
  };
}

/**
 * Get unique list of AEs from deals
 */
export function getUniqueAEs(deals: Deal[]): string[] {
  return Array.from(new Set(deals.map((d) => d.ae))).sort();
}

/**
 * Get unique list of industries from deals
 */
export function getUniqueIndustries(deals: Deal[]): string[] {
  return Array.from(new Set(deals.map((d) => d.industry))).sort();
}

// ============================================================================
// FORMATTING & DISPLAY
// ============================================================================

/**
 * Format currency as USD
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Get health score color
 */
export function getHealthColor(
  healthScore: number,
): 'bg-green-100 text-green-800' | 'bg-yellow-100 text-yellow-800' | 'bg-red-100 text-red-800' {
  if (healthScore >= 8) return 'bg-green-100 text-green-800';
  if (healthScore >= 5) return 'bg-yellow-100 text-yellow-800';
  return 'bg-red-100 text-red-800';
}

/**
 * Get health status emoji
 */
export function getHealthEmoji(healthStatus: string): string {
  switch (healthStatus) {
    case 'healthy':
      return '🟢';
    case 'at-risk':
      return '🟡';
    case 'stalled':
      return '🔴';
    default:
      return '⚪';
  }
}

/**
 * Get priority color
 */
export function getPriorityColor(
  priority: string,
): 'bg-red-100 text-red-800' | 'bg-yellow-100 text-yellow-800' | 'bg-blue-100 text-blue-800' {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-800';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800';
    case 'low':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
}
