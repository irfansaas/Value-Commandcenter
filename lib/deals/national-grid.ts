import { Deal } from '../types';

/**
 * National Grid - Energy & Utilities
 * DUMMY DATA - Replace with actual deal information when available
 * Status: HEALTHY
 */

const nationalGrid: Deal = {
  id: 'deal-national-grid-001',
  company: 'National Grid',
  dealSizeMRR: 2600,
  dealSizeAnnual: 31200,
  industry: 'Energy',
  geography: 'United States',
  ae: 'Scott Hilt',
  se: 'Rachel Adams',
  veOwner: 'Mohammed',
  stage: 'Discovery',
  daysInStage: 45,
  targetCloseDate: '2026-01-24',
  lastActivityDate: '2025-10-27',
  userCount: 1000,
  currentVDISolution: 'Citrix',
  healthScore: 10,
  healthStatus: 'healthy',
  stakeholders: {
    economicBuyer: {
      name: '[TBD]',
      title: '[TBD]',
      engaged: false,
    },
    champion: {
      name: '[TBD]',
      title: '[TBD]',
      strength: 'weak',
    },
    technicalBuyer: {
      name: '[TBD]',
      title: '[TBD]',
    },
  },
  assessment: {
    strengths: [
      '[DUMMY] Initial discovery completed',
      '[DUMMY] Technical team identified',
      '[DUMMY] Budget allocated for modernization',
    ],
    gaps: [
      '[DUMMY] Economic buyer not yet engaged',
      '[DUMMY] No executive presentation scheduled',
      '[DUMMY] Competitive landscape unclear',
    ],
    primaryStallReason: null,
  },
  competitor: 'Citrix',
  compellingEvent: '[DUMMY] Citrix contract renewal approaching',
  urgencyLevel: 'medium',
  urgencyNotes: '[DUMMY] Standard evaluation timeline',
  nextActions: [
    {
      id: 'action-national-grid-001',
      priority: 'high',
      description: '[DUMMY] Schedule discovery call with economic buyer',
      owner: 'Scott Hilt',
      dueDate: '2025-11-06',
      status: 'pending',
      notes: '[DUMMY] Initial engagement action',
    },
    {
      id: 'action-national-grid-002',
      priority: 'medium',
      description: '[DUMMY] Complete technical assessment',
      owner: 'Rachel Adams',
      dueDate: '2025-11-13',
      status: 'pending',
      notes: '[DUMMY] Technical validation needed',
    },
  ],
  veDeliverables: {
    roiModel: {
      status: 'not-started',
      notes: '[DUMMY] ROI model to be created',
    },
    tcoComparison: {
      status: 'not-started',
      notes: '[DUMMY] TCO comparison to be created',
      link: 'https://nerdio-tco-app.vercel.app/',
    },
    executiveBusinessCase: {
      status: 'not-started',
      notes: '[DUMMY] Business case to be created',
    },
    costOfDelayCalc: {
      status: 'not-started',
      notes: '[DUMMY] Cost of delay calculation pending',
    },
    implementationTimeline: {
      status: 'not-started',
      notes: '[DUMMY] Implementation timeline to be created',
      link: 'https://nerdio-timeline-v1.vercel.app/',
    },
    valuePropositionDeck: {
      status: 'not-started',
      notes: '[DUMMY] Value prop deck to be created',
    },
    successStoryMapping: {
      status: 'not-started',
      notes: '[DUMMY] Success stories to be identified',
    },
  },
  relevantSuccessStories: [],
  activityLog: [
    {
      id: 'activity-national-grid-001',
      date: '2025-10-27',
      type: 'call',
      description: '[DUMMY] Initial discovery call completed',
      by: 'Scott Hilt',
    },
  ],
  notes: '[DUMMY DATA] This deal record contains placeholder information. Update with actual deal details, stakeholder information, and assessment when available.',
  salesforceUrl: 'https://nerdio.lightning.force.com/lightning/r/Opportunity/deal-national-grid-001/view',
  createdAt: '2025-04-21T05:12:42Z',
  updatedAt: '2025-10-30T05:12:42Z',
  createdBy: 'Mohammed',
  lastUpdatedBy: 'System (Generated)',
};

export default nationalGrid;
