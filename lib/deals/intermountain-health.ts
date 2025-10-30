import { Deal } from '../types';

/**
 * Intermountain Health - Healthcare (Utah)
 * Citrix displacement with strong momentum
 * Status: HEALTHY - Economic buyer engaged, strong champion
 */

const intermountainHealth: Deal = {
  id: 'deal-intermountain-001',
  company: 'Intermountain Health',
  dealSizeMRR: 100000,
  dealSizeAnnual: 1200000,
  industry: 'Healthcare',
  geography: 'United States - Utah',
  ae: 'Cherie MacFarlane',
  se: 'John Doe',
  veOwner: 'Mohammed',
  stage: 'Technical Validation',
  daysInStage: 45,
  targetCloseDate: '2025-12-15',
  lastActivityDate: '2025-11-01',
  userCount: 5000,
  currentVDISolution: 'Citrix',
  healthScore: 8,
  healthStatus: 'healthy',
  stakeholders: {
    economicBuyer: {
      name: 'Sarah Johnson',
      title: 'CFO',
      engaged: true,
    },
    champion: {
      name: 'Mike Stevens',
      title: 'CIO',
      strength: 'strong',
    },
    technicalBuyer: {
      name: 'Emily Chen',
      title: 'Director of IT Infrastructure',
    },
  },
  assessment: {
    strengths: [
      'Economic buyer (CFO) actively engaged',
      'Strong champion (CIO) with executive influence',
      'ROI model created showing 3-year payback',
      'Clear compelling event: Citrix renewal in 90 days',
      'Competition mapped: Citrix incumbent vs Nerdio',
    ],
    gaps: [
      'No executive presentation scheduled yet',
      'Champion hasn\'t verbalized urgency in last 3 conversations',
      'Pricing discussion not yet initiated (Day 45 in cycle)',
    ],
    primaryStallReason: null,
  },
  competitor: 'Citrix',
  compellingEvent: 'Citrix renewal in 90 days with 40% price increase (from $800K to $1.12M annually)',
  urgencyLevel: 'high',
  nextActions: [
    {
      id: 'action-intermountain-001',
      priority: 'high',
      description: 'Schedule CFO/CIO executive meeting to present business case',
      owner: 'Cherie MacFarlane',
      dueDate: '2025-11-08',
      status: 'pending',
    },
    {
      id: 'action-intermountain-002',
      priority: 'medium',
      description: 'Initiate pricing conversation with CFO',
      owner: 'Cherie MacFarlane',
      dueDate: '2025-11-12',
      status: 'pending',
    },
    {
      id: 'action-intermountain-003',
      priority: 'low',
      description: 'Share Epic EHR migration success story',
      owner: 'Mohammed (VE)',
      dueDate: '2025-11-05',
      status: 'completed',
      completedDate: '2025-11-02',
    },
  ],
  veDeliverables: {
    roiModel: {
      status: 'completed',
      completedDate: '2025-10-28',
      link: 'https://docs.google.com/spreadsheets/d/xxx',
      notes: '3-year payback, 40% Azure savings',
    },
    tcoComparison: {
      status: 'completed',
      completedDate: '2025-10-30',
      link: 'https://docs.google.com/spreadsheets/d/yyy',
      notes: 'Citrix $1.12M/yr vs. Nerdio+AVD $680K/yr',
    },
    executiveBusinessCase: {
      status: 'completed',
      completedDate: '2025-11-01',
      link: 'https://docs.google.com/presentation/d/zzz',
      notes: '1-pager for CFO meeting',
    },
    costOfDelayCalc: {
      status: 'in-progress',
      notes: 'Calculating monthly cost of waiting vs. acting now',
    },
    implementationTimeline: {
      status: 'not-started',
    },
    valuePropositionDeck: {
      status: 'not-started',
    },
    successStoryMapping: {
      status: 'completed',
      completedDate: '2025-11-02',
      notes: 'Mapped to 3 relevant healthcare stories',
    },
  },
  relevantSuccessStories: [
    {
      id: 'story-001',
      title: 'Healthcare System Saves $900K Annually with Nerdio',
      industry: 'Healthcare',
      summary: '4,500-user Epic EHR deployment, migrated from Citrix, 45% Azure cost savings',
      link: 'https://www.getnerdio.com/case-studies/healthcare-epic',
    },
    {
      id: 'story-002',
      title: 'Hospital Network Improves EHR Performance 50% with AVD + Nerdio',
      industry: 'Healthcare',
      summary: 'Multi-location hospital, Epic Hyperspace users, reduced login times 50%',
      link: 'https://www.getnerdio.com/case-studies/hospital-network',
    },
  ],
  activityLog: [
    {
      id: 'activity-intermountain-001',
      date: '2025-11-01',
      type: 'deliverable',
      description: 'Executive business case sent to champion (Mike Stevens)',
      by: 'Mohammed',
    },
    {
      id: 'activity-intermountain-002',
      date: '2025-10-28',
      type: 'call',
      description: 'Technical validation call with IT team (8 attendees)',
      by: 'Cherie MacFarlane & John Doe (SE)',
    },
  ],
  notes:
    'Strong deal overall. Key risk: Citrix may offer significant discount to retain. Need to emphasize long-term Azure cost optimization and admin time savings.',
  createdAt: '2025-09-15T10:00:00Z',
  updatedAt: '2025-11-01T14:30:00Z',
  createdBy: 'Mohammed',
  lastUpdatedBy: 'Mohammed',
};

export default intermountainHealth;
