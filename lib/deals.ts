import { Deal } from './types';

/**
 * Sample deal data for initial testing
 * Starting with the detailed Ambev deal you provided
 */

export const sampleDeals: Deal[] = [
  {
    id: 'deal-ambev-001',
    company: 'Ambev',
    dealSizeMRR: 72000,
    dealSizeAnnual: 864000,
    industry: 'Manufacturing',
    geography: 'Brazil (LATAM)',
    ae: 'Daniel Valverde',
    se: 'Roan Paes',
    veOwner: 'Mohammed',
    stage: 'Technical Validation',
    daysInStage: 110,
    targetCloseDate: '2025-11-03',
    lastActivityDate: '2025-03-24',
    userCount: 20000,
    currentVDISolution: 'Citrix',
    healthScore: 3,
    healthStatus: 'stalled',
    stakeholders: {
      economicBuyer: {
        name: 'Global VP of Technology',
        title: 'VP Technology',
        engaged: false,
      },
      champion: {
        name: 'Marcos Messias',
        title: 'Sponsor',
        strength: 'weak',
      },
      technicalBuyer: {
        name: 'Jose Eduardo Castro Schmidt',
        title: 'SME/Technical Lead',
      },
    },
    assessment: {
      strengths: [
        'Economic buyer identified (Global VP of Technology)',
        'Clear compelling event: Citrix renewal',
        'Large-scale deployment (20K users) shows commitment',
        'Partner-driven go-to-market (Virtex)',
        'POV initiated showing serious evaluation',
      ],
      gaps: [
        'Champion completely blocked by Ambev budget freeze (Dec-Jan)',
        'ROI never presented to economic buyer',
        'Scheduled Global VP meeting (2/5) never happened',
        'Technical PoC canceled 3/24 without resolution strategy',
        'No next meeting scheduled after PoC cancellation',
        'Budget concerns mentioned but never addressed with finance',
        'Success Plan not completed despite deal size',
      ],
      primaryStallReason:
        'Multiple factors converged: (1) Corporate budget freeze blocked champion Marcos Messias, (2) Scheduled Global VP meeting never happened, (3) Technical PoC struggled with scale/ghost sessions, (4) Jose Eduardo cancelled PoC 3/24, (5) No AE recovery response. Deal NOW IN LIMBO.',
    },
    competitor: 'System Integrators + Internal DevOps/Scripting Build',
    compellingEvent: 'Citrix renewal approaching (renovação do seu ambiente Citrix)',
    urgencyLevel: 'low',
    urgencyNotes: 'Was high, but lost momentum during budget freeze. Now at risk of being deprioritized.',
    nextActions: [
      {
        id: 'action-ambev-001',
        priority: 'high',
        description:
          'TRIAGE DECISION CALL: Call Jose Eduardo Castro Schmidt to understand PoC cancellation. Why was it stopped? Can it restart? What specific issues must be resolved?',
        owner: 'Daniel Valverde',
        dueDate: '2025-11-15',
        status: 'pending',
        notes: 'URGENT - Deal is currently DEAD unless we understand what happened on 3/24 and secure commitment to move forward',
      },
      {
        id: 'action-ambev-002',
        priority: 'high',
        description:
          'RE-ENGAGE GLOBAL VP OF TECHNOLOGY (bypass Marcos who is blocked): Direct outreach with financial impact + PoC learnings. Goal: 20-min call within 7 days.',
        owner: 'Daniel Valverde',
        dueDate: '2025-11-21',
        status: 'pending',
        notes: 'CONDITIONAL on triage call results. This is the ONLY way to unlock economic buyer engagement.',
      },
      {
        id: 'action-ambev-003',
        priority: 'high',
        description:
          'CREATE POC RECOVERY PLAN: Root cause analysis of ghost session/technical issues. Prepare phase 1 restart strategy (pilot on subset before full 20K users).',
        owner: 'Mohammed (VE)',
        dueDate: '2025-11-20',
        status: 'pending',
        notes: 'CONDITIONAL on triage decision. Must show Nerdio has SOLUTIONS.',
      },
      {
        id: 'action-ambev-004',
        priority: 'medium',
        description:
          'FINANCIAL CASE TO OVERCOME BUDGET FREEZE: Calculate Citrix renewal cost increase + model Nerdio savings + Cost of Delay analysis.',
        owner: 'Mohammed (VE)',
        dueDate: '2025-11-27',
        status: 'pending',
        notes: 'CONDITIONAL on Global VP meeting confirmed. Budget freeze is PRIMARY objection.',
      },
      {
        id: 'action-ambev-005',
        priority: 'medium',
        description:
          'MULTI-THREAD BEYOND MARCOS: Map CFO, CTO, and other C-suite. Send executive-level outreach showing ROI + Nerdio credentials.',
        owner: 'Daniel Valverde',
        dueDate: '2025-11-27',
        status: 'pending',
        notes: 'Marcos is blocked - need 2-3 more executive paths in.',
      },
      {
        id: 'action-ambev-006',
        priority: 'low',
        description:
          'SHARE LATAM SUCCESS STORIES: Find 2-3 beverage/manufacturing cases (preferably Brazil/adjacency) showing Citrix→AVD migration at scale.',
        owner: 'Mohammed (VE)',
        dueDate: '2025-11-27',
        status: 'pending',
        notes: 'Proof points matter when buyer is cautious about large-scale Nerdio projects.',
      },
    ],
    veDeliverables: {
      roiModel: {
        status: 'completed',
        completedDate: '2025-01-26',
        notes: 'Created but NEVER PRESENTED to Global VP. Must re-present as part of recovery.',
      },
      tcoComparison: {
        status: 'completed',
        completedDate: '2025-01-26',
        notes: 'Citrix vs. Nerdio+AVD comparison exists. Include in Global VP financial deck.',
      },
      executiveBusinessCase: {
        status: 'completed',
        completedDate: '2025-02-05',
        notes: '1-pager created for Marcos but never presented since he was blocked by budget freeze.',
      },
      costOfDelayCalc: {
        status: 'not-started',
        notes: 'CRITICAL - Must show cost of delaying decision vs. Citrix renewal + budget freeze impact.',
      },
      implementationTimeline: {
        status: 'in-progress',
        notes: 'POV started 1/15/2025 but canceled 3/24. Restart timeline unclear - needs 30-day revised plan.',
      },
      valuePropositionDeck: {
        status: 'not-started',
        notes: 'Needed for Global VP executive presentation showing why Nerdio beats internal build + integrators.',
      },
      successStoryMapping: {
        status: 'not-started',
        notes: 'LATAM/beverage/manufacturing case studies needed for proof points at scale.',
      },
    },
    relevantSuccessStories: [],
    activityLog: [
      {
        id: 'activity-ambev-001',
        date: '2025-03-24',
        type: 'call',
        description: 'PoC canceled by technical team (Jose Eduardo Castro Schmidt) - "Encerramento POC"',
        by: 'Jose Eduardo Castro Schmidt',
      },
      {
        id: 'activity-ambev-002',
        date: '2025-01-26',
        type: 'deliverable',
        description: 'ROI model and TCO comparison created',
        by: 'Mohammed',
      },
      {
        id: 'activity-ambev-003',
        date: '2025-01-15',
        type: 'update',
        description: 'POV restarted after Q4 budget freeze',
        by: 'Roan Paes',
      },
      {
        id: 'activity-ambev-004',
        date: '2024-12-03',
        type: 'update',
        description: 'Deal stalled due to Ambev budget freeze',
        by: 'Daniel Valverde',
      },
    ],
    notes:
      'DEAL IS STALLED/DEAD - REQUIRES IMMEDIATE TRIAGE. This deal was strong initially (20K users, clear pain, economic buyer identified) but multiple stall factors converged. RECOVERY STRATEGY: (A) TRIAGE CALL THIS WEEK with Jose Eduardo. (B) IF YES: Direct Global VP engagement, financial case to overcome freeze, technical recovery plan. (C) IF NO: Document as lost. KEY RISK: 20K user scale + budget freeze + internal build option = hard sell.',
    salesforceUrl: 'https://nerdio.lightning.force.com/lightning/r/Opportunity/ambev/view',
    createdAt: '2025-11-13T10:00:00Z',
    updatedAt: '2025-11-13T10:00:00Z',
    createdBy: 'Mohammed',
    lastUpdatedBy: 'Claude (Deal Analysis)',
  },

  // Additional sample deals to test filtering/sorting
  {
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
  },
];
