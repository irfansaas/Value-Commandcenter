/**
 * Core Type Definitions for Nerdio VE Command Center
 * Type-safe schema for all deal, assessment, and VE data
 */

// ============================================================================
// ENUMS & LITERAL TYPES
// ============================================================================

export const DEAL_STAGES = ['Prospecting', 'Discovery', 'Sales Qualified', 'Technical Validation', 'Contracting'] as const;
export type DealStage = typeof DEAL_STAGES[number];

export const HEALTH_STATUS = ['healthy', 'at-risk', 'stalled'] as const;
export type HealthStatus = typeof HEALTH_STATUS[number];

export const ACTION_PRIORITY = ['high', 'medium', 'low'] as const;
export type ActionPriority = typeof ACTION_PRIORITY[number];

export const ACTION_STATUS = ['pending', 'in-progress', 'completed'] as const;
export type ActionStatus = typeof ACTION_STATUS[number];

export const DELIVERABLE_STATUS = ['not-started', 'in-progress', 'completed'] as const;
export type DeliverableStatus = typeof DELIVERABLE_STATUS[number];

export const INDUSTRIES = [
  'Healthcare',
  'Financial Services',
  'Government',
  'Energy',
  'Technology',
  'Telecom',
  'Retail',
  'Manufacturing',
  'Other',
] as const;
export type Industry = typeof INDUSTRIES[number];

export const STRENGTH_LEVELS = ['strong', 'weak'] as const;
export type StrengthLevel = typeof STRENGTH_LEVELS[number];

// ============================================================================
// STAKEHOLDER TYPES
// ============================================================================

export interface Stakeholder {
  name: string;
  title: string;
}

export interface EconomicBuyer extends Stakeholder {
  engaged: boolean;
}

export interface Champion extends Stakeholder {
  strength: StrengthLevel;
}

export interface Stakeholders {
  economicBuyer?: EconomicBuyer;
  champion?: Champion;
  technicalBuyer?: Stakeholder;
}

// ============================================================================
// ASSESSMENT TYPES
// ============================================================================

export interface VEAssessment {
  strengths: string[];
  gaps: string[];
  primaryStallReason: string | null;
}

// ============================================================================
// NEXT ACTION TYPES
// ============================================================================

export interface NextAction {
  id: string;
  priority: ActionPriority;
  description: string;
  owner: string;
  dueDate: string; // ISO 8601 date string
  status: ActionStatus;
  completedDate?: string;
  notes?: string;
}

// ============================================================================
// VE DELIVERABLE TYPES
// ============================================================================

export interface Deliverable {
  status: DeliverableStatus;
  completedDate?: string;
  link?: string;
  notes?: string;
}

export interface VEDeliverables {
  roiModel: Deliverable;
  tcoComparison: Deliverable;
  executiveBusinessCase: Deliverable;
  costOfDelayCalc: Deliverable;
  implementationTimeline: Deliverable;
  valuePropositionDeck: Deliverable;
  successStoryMapping: Deliverable;
  [key: string]: Deliverable;
}

// ============================================================================
// SUCCESS STORY TYPES
// ============================================================================

export interface SuccessStory {
  id: string;
  title: string;
  industry: Industry;
  summary: string;
  link: string;
}

// ============================================================================
// ACTIVITY LOG TYPES
// ============================================================================

export type ActivityType = 'deliverable' | 'call' | 'meeting' | 'email' | 'update' | 'other';

export interface Activity {
  id: string;
  date: string; // ISO 8601 date string
  type: ActivityType;
  description: string;
  by: string;
}

// ============================================================================
// DEAL TYPES
// ============================================================================

export interface Deal {
  // Identifiers & Metadata
  id: string;
  company: string;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  lastUpdatedBy: string;

  // Financial
  dealSizeMRR: number;
  dealSizeAnnual: number;

  // Context
  industry: Industry;
  geography: string;
  userCount: number;
  currentVDISolution: string;

  // People & Organization
  ae: string; // Account Executive
  se?: string; // Solutions Engineer
  veOwner: string;

  // Sales Cycle
  stage: DealStage;
  daysInStage: number;
  targetCloseDate: string;
  lastActivityDate: string;

  // Health & Status
  healthScore: number; // 1-10
  healthStatus: HealthStatus;

  // Deal Content
  stakeholders: Stakeholders;
  assessment: VEAssessment;
  competitor?: string;
  compellingEvent?: string;
  urgencyLevel: 'low' | 'medium' | 'high';
  urgencyNotes?: string;

  // Next Steps
  nextActions: NextAction[];

  // Deliverables
  veDeliverables: VEDeliverables;

  // Supporting
  relevantSuccessStories: SuccessStory[];
  activityLog: Activity[];
  notes: string;

  // External Links
  salesforceUrl?: string;
  gongUrl?: string;
}

// ============================================================================
// FILTER & SORT TYPES
// ============================================================================

export interface DealFilters {
  searchQuery?: string;
  reps?: string[];
  industries?: Industry[];
  dealSizeTiers?: ('tier1' | 'tier2' | 'tier3' | 'tier4')[];
  stages?: DealStage[];
  healthStatus?: HealthStatus[];
}

export type SortOption =
  | 'dealsize-high'
  | 'dealsize-low'
  | 'health-best'
  | 'health-worst'
  | 'daysinstage-most'
  | 'daysinstage-least'
  | 'company-az'
  | 'rep-az'
  | 'closedate-soonest'
  | 'recently-updated';

// ============================================================================
// UTILITY TYPES
// ============================================================================

export interface DealSummary {
  totalDeals: number;
  totalAnnualValue: number;
  averageHealthScore: number;
  dealsAtRisk: number;
  dealsStalled: number;
}

export interface FilteredDealsResult {
  deals: Deal[];
  count: number;
  summary: DealSummary;
}

// ============================================================================
// RESPONSE TYPES
// ============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: string;
}
