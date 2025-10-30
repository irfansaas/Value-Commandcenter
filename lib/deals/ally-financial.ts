import { Deal } from '../types';

/**
 * Ally Financial Inc - Financial Services
 * Large Citrix displacement with leadership change stall
 * Status: STALLED - New economic buyer not engaged, deal on hold
 */

const allyFinancial: Deal = {
  id: 'deal-ally-001',
  company: 'Ally Financial Inc',
  dealSizeMRR: 36300,
  dealSizeAnnual: 435600,
  industry: 'Financial Services',
  geography: 'United States',
  ae: 'Michael Atlas',
  se: 'Greg Roberson',
  veOwner: 'Mohammed',
  stage: 'Contracting',
  daysInStage: 68,
  targetCloseDate: '2025-12-19',
  lastActivityDate: '2025-10-29',
  userCount: 6500,
  currentVDISolution: 'Citrix',
  healthScore: 3,
  healthStatus: 'stalled',
  stakeholders: {
    economicBuyer: {
      name: 'Unknown (New Leadership)',
      title: 'Leadership Change - TBD',
      engaged: false,
    },
    champion: {
      name: 'Bob Sim / Michael Schetgen',
      title: 'Director / Sr Director',
      strength: 'weak',
    },
    technicalBuyer: {
      name: 'Gaby VandenHeuvel',
      title: 'Sr. Analyst - Supply Chain/Tech Sourcing',
    },
  },
  assessment: {
    strengths: [
      'Technical validation completed successfully (POV 9/15/25)',
      'Strong cost savings potential: $1.165M annual savings (55% reduction from $2M+ Citrix costs)',
      'Clear compelling event: Citrix contract expires November 2025',
      'Partner engaged (LTIMindtree servicing partner)',
      'Microsoft engaged with $100K Azure credits available',
      'Pricing negotiated: $7.25/MAU for 3-year commitment',
      'Large-scale deployment: 5,000 AVD seats, 6,500 estimated monthly users',
    ],
    gaps: [
      'Economic buyer never identified in 435-day cycle - only procurement analyst negotiating',
      'New leadership change (Oct 2025) - new decision-maker not engaged',
      'No executive business case exists for new leadership to review',
      'ROI marked complete in Salesforce but not documented/accessible',
      'Champion strength untested - no advocacy during hold announcement',
      'Deal on hold since Oct 23 with no contact since Oct 29',
      'Value not quantified strongly enough to survive leadership scrutiny',
      'No multi-threading beyond Bob/Michael - single point of failure',
    ],
    primaryStallReason:
      'Leadership change in Oct 2025 triggered "all purchases on hold for evaluation." New economic buyer not engaged, no documented business case for them to review, and existing champion unable to advocate through the change. Deal went from Contracting to STALLED overnight.',
  },
  competitor: 'Citrix (incumbent)',
  compellingEvent: 'Citrix contract expires November 2025 - risk of forced renewal at higher price if delayed',
  urgencyLevel: 'high',
  urgencyNotes:
    'Originally high urgency (Nov 2025 Citrix renewal), but leadership change in Oct 2025 removed urgency. Every month of delay = $97K in lost savings. Only ~30 days until Citrix renewal.',
  nextActions: [
    {
      id: 'action-ally-001',
      priority: 'high',
      description:
        'IDENTIFY NEW ECONOMIC BUYER: Research who joined Ally leadership Sept-Oct 2025. Use LinkedIn, Microsoft contacts, and direct ask Bob/Michael who the new decision-maker is.',
      owner: 'Michael Atlas',
      dueDate: '2025-11-10',
      status: 'pending',
      notes: 'CRITICAL - Cannot recover deal without knowing who has budget authority post-leadership change',
    },
    {
      id: 'action-ally-002',
      priority: 'high',
      description:
        'ENGAGE NEW LEADERSHIP: Once identified, request 30-min briefing to present business case. Message: "We understand there\'s been a leadership change. Given our 15-month engagement and completed technical validation, we\'d like to brief you on the $1.165M annual cost reduction opportunity."',
      owner: 'Michael Atlas',
      dueDate: '2025-11-15',
      status: 'pending',
      notes: 'CONDITIONAL on Action 1. Must get face-to-face within 14 days.',
    },
    {
      id: 'action-ally-003',
      priority: 'high',
      description:
        'CREATE EXECUTIVE BUSINESS CASE: Build 1-2 page PDF for new leadership showing: Problem ($2M+ Citrix costs), Solution (Nerdio saves $1.165M/year), Proof (POV completed), Risk of delay (Citrix renewal Nov), Next step (30-min briefing).',
      owner: 'Mohammed (VE)',
      dueDate: '2025-11-11',
      status: 'pending',
      notes: 'URGENT - Must be in new leader\'s hands within 5 days. Bob/Michael can hand-deliver.',
    },
    {
      id: 'action-ally-004',
      priority: 'high',
      description:
        'RECONSTRUCT ROI MODEL: Document the $2M+ Citrix costs vs. $935K Nerdio+AVD costs. Include: Current state ($1.6M Azure + $400-600K licenses), Future state ($435K Nerdio + $500K Azure), 3-year savings ($3.5M), payback (<1 month), Microsoft credits ($100K).',
      owner: 'Mohammed (VE)',
      dueDate: '2025-11-11',
      status: 'pending',
      notes: 'Salesforce shows completed but not accessible. Must rebuild for executive presentation.',
    },
    {
      id: 'action-ally-005',
      priority: 'medium',
      description:
        'BUILD COST OF DELAY CALCULATOR: Quantify monthly cost of evaluation hold: $97K/month in lost savings, risk of Citrix auto-renewal at higher price, loss of $100K Azure credits.',
      owner: 'Mohammed (VE)',
      dueDate: '2025-11-18',
      status: 'pending',
      notes: 'Use to make "evaluation" expensive, not free. Position as "evaluation costs $97K/month."',
    },
    {
      id: 'action-ally-006',
      priority: 'medium',
      description:
        'VALIDATE CHAMPION COMMITMENT: Ask Bob/Michael directly: "Will you share our business case with new leadership? Will you advocate for Nerdio? What\'s your conviction level?" Arm them with talking points if strong.',
      owner: 'Michael Atlas',
      dueDate: '2025-11-20',
      status: 'pending',
      notes: 'Test if they\'ll fight internally. If weak, need new champion or rebuild relationship.',
    },
    {
      id: 'action-ally-007',
      priority: 'medium',
      description:
        'ACTIVATE MICROSOFT CO-SELL: Leverage "Microsoft Engaged" status. Ask MSFT VSSP to facilitate intro to new Ally leadership. Position as $1.6M Azure consumption account.',
      owner: 'Michael Atlas',
      dueDate: '2025-11-20',
      status: 'pending',
      notes: 'Microsoft partnership can provide executive access path if direct approach fails.',
    },
    {
      id: 'action-ally-008',
      priority: 'low',
      description:
        'PREPARE CITRIX DEFENSE: Build battle card for when Citrix offers discount. Show even 30% Citrix discount ($1.68M/year) is 44% more expensive than Nerdio ($935K/year). Position modern vs. legacy tech.',
      owner: 'Mohammed (VE)',
      dueDate: '2025-12-09',
      status: 'pending',
      notes: 'Assume Citrix will counter with discount during "evaluation." Be ready to defend.',
    },
  ],
  veDeliverables: {
    roiModel: {
      status: 'completed',
      completedDate: '2025-08-15',
      notes:
        'Marked complete in Salesforce but NOT ACCESSIBLE/DOCUMENTED. Must reconstruct showing $2M+ Citrix costs vs. $935K Nerdio costs = $1.165M annual savings.',
    },
    tcoComparison: {
      status: 'in-progress',
      notes:
        'Need to build 3-year TCO: Citrix $7.245M vs. Nerdio $2.855M = $4.39M savings (61% reduction). Include migration costs offset by $100K Azure credits.',
      link: 'https://nerdio-tco-app.vercel.app/',
    },
    executiveBusinessCase: {
      status: 'not-started',
      notes:
        'CRITICAL - 1-2 page PDF needed immediately for new leadership. Include: current $2M+ costs, proposed $935K costs, $1.165M savings, POV validation, Nov 2025 Citrix renewal risk.',
    },
    costOfDelayCalc: {
      status: 'not-started',
      notes:
        'Quantify $97K/month cost of "evaluation hold." Include risk of Citrix auto-renewal, lost Azure credits, and locked-in expensive infrastructure for 1-3 years.',
    },
    implementationTimeline: {
      status: 'not-started',
      notes: 'Need revised deployment timeline showing path to migrate before Nov 2025 Citrix renewal.',
      link: 'https://nerdio-timeline-v1.vercel.app/',
    },
    valuePropositionDeck: {
      status: 'not-started',
      notes:
        'Executive-level deck showing: Why Nerdio vs. Citrix/DIY AVD, cost comparison, Microsoft partnership, POV results, similar customer success stories.',
    },
    successStoryMapping: {
      status: 'not-started',
      notes:
        'Need Financial Services Citrix displacement story: 3,000-6,000 users, complex apps (50+), 50%+ cost savings, zero business disruption.',
    },
  },
  relevantSuccessStories: [],
  activityLog: [
    {
      id: 'activity-ally-001',
      date: '2025-10-29',
      type: 'email',
      description: 'Deal put on hold - "internal shift with leadership, all purchases being evaluated"',
      by: 'Gaby VandenHeuvel',
    },
    {
      id: 'activity-ally-002',
      date: '2025-10-23',
      type: 'email',
      description: 'First mention of deal on hold due to leadership change',
      by: 'Gaby VandenHeuvel',
    },
    {
      id: 'activity-ally-003',
      date: '2025-10-16',
      type: 'update',
      description: 'Negotiating MSA/pricing, pushing to close by end of October',
      by: 'Michael Atlas',
    },
    {
      id: 'activity-ally-004',
      date: '2025-09-15',
      type: 'update',
      description: 'POV completed successfully - technical validation complete',
      by: 'Greg Roberson',
    },
    {
      id: 'activity-ally-005',
      date: '2025-08-27',
      type: 'call',
      description: 'Customer expressed they are "pleased with progress" during POV',
      by: 'Bob Sim',
    },
    {
      id: 'activity-ally-006',
      date: '2025-07-29',
      type: 'call',
      description: 'Great call reviewing scripted actions and feature comparison with Azure',
      by: 'Bob Sim',
    },
    {
      id: 'activity-ally-007',
      date: '2024-08-20',
      type: 'other',
      description:
        'Partner-registered opportunity (LTIMindtree). Customer identified as price-sensitive, 3,000 concurrent users, 6,000 Citrix licenses, $1.6M annual Azure consumption.',
      by: 'Michael Atlas',
    },
  ],
  notes:
    'STALLED DEAL - 435 days in cycle, reached Contracting, then hit by Oct 2025 leadership change. Primary issue: Economic buyer never engaged in 15-month journey, so new decision-maker has zero context/buy-in. No documented business case for them to review. "All purchases on hold" = value not defensible enough to survive scrutiny.\n\nRECOVERY STRATEGY: (1) Identify new economic buyer within 7 days, (2) Create executive business case showing $1.165M annual savings vs. $2M+ Citrix costs, (3) Engage new leader with 30-min briefing, (4) Leverage Microsoft co-sell, (5) Use Cost of Delay framing to make "evaluation" expensive.\n\nKEY NUMBERS: Current Citrix $2M-$2.2M/year → Nerdio $935K/year = $1.165M savings (55% reduction). 3-year savings: $3.5M. Payback: <1 month. Microsoft offering $100K Azure credits.\n\nRISK: 90% chance of being lost or pushed to 2026 without immediate intervention. Citrix renewal November 2025 = only ~30 days to act. Every month of delay = $97K in lost savings.\n\nLESSONS: (1) Never reach Contracting without economic buyer engagement, (2) Executive business case must exist BEFORE leadership changes, (3) Champion strength must be tested continuously, (4) Long cycles need executive sponsorship + multi-threading.',
  salesforceUrl: 'https://nerdio.lightning.force.com/lightning/r/Opportunity/ally/view',
  createdAt: '2024-08-20T10:00:00Z',
  updatedAt: '2025-10-29T16:30:00Z',
  createdBy: 'Michael Atlas',
  lastUpdatedBy: 'Mohammed',
};

export default allyFinancial;
