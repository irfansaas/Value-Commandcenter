# 🚀 Mohammed's Nerdio VE Platform - Development Guide

**Your TypeScript-First Command Center for Deal Management**

This is your step-by-step guide to get up and running locally in WSL, then push to GitHub and Vercel.

---

## 📋 Phase 1: Local Setup (30 minutes)

### Step 1: Create Your Project Directory in WSL

```bash
# Navigate to your projects folder (adjust path as needed)
cd ~/projects
# or wherever you keep code
mkdir nerdio-ve-platform
cd nerdio-ve-platform
```

### Step 2: Copy the Scaffolded Files

All files are in `/mnt/user-data/outputs/`. Copy them:

```bash
# From outputs directory, copy everything
cp -r /mnt/user-data/outputs/* ~/projects/nerdio-ve-platform/

# Verify files copied
ls -la
# Should see: package.json, tsconfig.json, app/, components/, lib/, etc.
```

### Step 3: Install Dependencies

```bash
cd ~/projects/nerdio-ve-platform
npm install
```

This installs:
- `next` - React framework
- `react` & `react-dom` - UI library
- `tailwindcss` - Styling
- `typescript` - Type safety
- Plus dev dependencies for linting, formatting

### Step 4: Start Development Server

```bash
npm run dev
```

You should see:
```
> nerdio-ve-platform@0.1.0 dev
> next dev

  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local
```

### Step 5: Open in Browser

```
http://localhost:3000
```

You should see:
- Header: "🎯 Nerdio VE Command Center"
- Summary cards: Total deals, annual value, health metrics
- Filter panel on left
- Deal cards in grid view (showing Ambev and Intermountain Health)

✅ **Success! Your local dev environment is running.**

---

## 🎨 Phase 2: Customization (Today)

### Add Your Real Deal Data

1. Open `lib/deals.ts` in Cursor
2. Look for `export const sampleDeals: Deal[] = [`
3. You have 2 sample deals (Ambev + Intermountain Health)
4. Add your remaining 48 deals following the structure:

```typescript
{
  id: 'deal-unique-id',
  company: 'Company Name',
  dealSizeMRR: 50000,
  dealSizeAnnual: 600000,
  industry: 'Healthcare', // or other from INDUSTRIES list
  geography: 'United States',
  ae: 'AE Name',
  se: 'SE Name',
  veOwner: 'Mohammed',
  stage: 'Technical Validation', // from DEAL_STAGES
  daysInStage: 45,
  targetCloseDate: '2025-12-15',
  lastActivityDate: '2025-11-01',
  userCount: 5000,
  currentVDISolution: 'Citrix',
  healthScore: 8, // 1-10
  healthStatus: 'healthy', // healthy, at-risk, stalled
  stakeholders: {
    economicBuyer: {
      name: 'Name',
      title: 'CFO',
      engaged: true,
    },
    champion: {
      name: 'Name',
      title: 'CIO',
      strength: 'strong', // strong or weak
    },
  },
  assessment: {
    strengths: ['Economic buyer engaged', 'Clear ROI'],
    gaps: ['No executive meeting scheduled'],
    primaryStallReason: null, // or string if stalled
  },
  competitor: 'Citrix',
  compellingEvent: 'Renewal in 90 days',
  urgencyLevel: 'high', // high, medium, low
  nextActions: [
    {
      id: 'action-1',
      priority: 'high',
      description: 'Schedule CFO meeting',
      owner: 'Your Name',
      dueDate: '2025-11-08',
      status: 'pending', // pending, in-progress, completed
    },
  ],
  veDeliverables: {
    roiModel: { status: 'completed', completedDate: '2025-10-28' },
    tcoComparison: { status: 'completed', completedDate: '2025-10-30' },
    executiveBusinessCase: { status: 'completed', completedDate: '2025-11-01' },
    costOfDelayCalc: { status: 'not-started' },
    implementationTimeline: { status: 'not-started' },
    valuePropositionDeck: { status: 'not-started' },
    successStoryMapping: { status: 'not-started' },
  },
  relevantSuccessStories: [],
  activityLog: [
    {
      id: 'activity-1',
      date: '2025-11-01',
      type: 'deliverable',
      description: 'Business case sent',
      by: 'Mohammed',
    },
  ],
  notes: 'Deal notes here',
  createdAt: '2025-11-13T10:00:00Z',
  updatedAt: '2025-11-13T10:00:00Z',
  createdBy: 'Mohammed',
  lastUpdatedBy: 'Mohammed',
}
```

### Test Locally

```bash
# In browser, test:
1. Search for company names
2. Filter by AE / Industry / Health Status
3. Sort by different criteria
4. Toggle Grid/List view
5. Click a deal card to see details
6. Verify all your data appears
```

### Run Type Check

Before moving forward, ensure no TypeScript errors:

```bash
npm run type-check
```

Should say: `✓ No TypeScript errors`

If errors appear:
- Check the error message
- Review `lib/types.ts` to see required fields
- Ensure all dates are ISO format (YYYY-MM-DD or full ISO 8601)
- Ensure `healthScore` is 1-10
- Ensure `stage` is one of: Prospecting, Discovery, Sales Qualified, Technical Validation, Contracting

---

## 📤 Phase 3: Push to GitHub (30 minutes)

### Step 1: Initialize Git

```bash
cd ~/projects/nerdio-ve-platform

# Initialize git
git init

# Check files
git status
```

You should see all your files listed as "untracked files".

### Step 2: Create .gitignore

Already included in the scaffold! Just make sure it's there:

```bash
ls -la | grep gitignore
# Should show: .gitignore
```

### Step 3: Commit Everything

```bash
# Stage all files
git add .

# Commit
git commit -m "Initial commit: Nerdio VE Platform scaffold with 2 sample deals"

# Check log
git log --oneline
```

### Step 4: Create GitHub Repo

1. Go to https://github.com/new
2. Repository name: `nerdio-ve-platform`
3. Description: `Strategic Deal Management & Value Engineering Platform for Nerdio`
4. Select: **Public** (or Private if you prefer)
5. Click "Create repository"

### Step 5: Add Remote & Push

```bash
# Add the remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/nerdio-ve-platform.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

You should see:
```
Enumerating objects: XX, done.
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), done.
Updating XX...XX
Main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

✅ **Your code is now on GitHub!**

Check: https://github.com/YOUR-USERNAME/nerdio-ve-platform

---

## 🚀 Phase 4: Deploy to Vercel (15 minutes)

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Sign in with GitHub (or create account)
3. Click "New Project"
4. Find "nerdio-ve-platform" repo in the list
5. Click "Import"
6. Accept all defaults
7. Click "Deploy"

**Wait 2-3 minutes...**

You'll get a URL like: `https://nerdio-ve-platform-XXXXX.vercel.app`

✅ Your platform is live! Share this URL.

### Option B: Deploy via CLI (Advanced)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from your project directory
cd ~/projects/nerdio-ve-platform
vercel

# Follow prompts
# Select: Link to existing project? (if first time: no)
# Project name: nerdio-ve-platform
# Framework: Next.js
# Wait for deployment...
```

### (Optional) Set Custom Domain

```bash
# In Vercel dashboard:
1. Select your project
2. Go to Settings → Domains
3. Add domain (e.g., ve.getnerdio.com)
4. Follow DNS instructions
```

---

## 📝 Development Workflow Going Forward

### When You Add New Features

```bash
# Make changes locally
# Test in browser: http://localhost:3000

# Type check
npm run type-check

# Format code
npm run format

# Commit
git add .
git commit -m "Feature: [description]"

# Push to GitHub
git push

# Vercel auto-deploys! 🎉
```

### Quick Commands Reference

```bash
npm run dev              # Start local dev server
npm run build            # Build for production
npm run type-check       # Check TypeScript
npm run format           # Auto-format code
npm run lint             # Check code quality
```

---

## 🎯 Example: Add Stalled Deal to Dashboard

Let's say you want to highlight stalled deals differently.

### Step 1: Check Current Code

Open `components/DealCard.tsx` and find:
```typescript
const healthColor = getHealthColor(deal.healthScore);
```

### Step 2: Enhance It

```typescript
// Add special styling for stalled deals
const healthColor = getHealthColor(deal.healthScore);
const isStalled = deal.healthStatus === 'stalled';

// Later in the JSX, add border:
<div className={`card hover:shadow-lg cursor-pointer group 
  ${isStalled ? 'border-red-500 border-2' : ''}`}
>
```

### Step 3: Test Locally

```bash
npm run dev
# Open http://localhost:3000
# Look for Ambev (stalled deal) - should have red border
```

### Step 4: Commit & Push

```bash
git add components/DealCard.tsx
git commit -m "Feature: Add red border to stalled deals"
git push
# Vercel auto-deploys!
```

---

## 🧠 TypeScript Pro Tips

### Intellisense Magic

In Cursor, when you type `deal.` it auto-suggests all available fields. This is TypeScript at work!

```typescript
// Hover over 'deal' and press Ctrl+Space to see all options
deal.company        // ✓ Available
deal.badField       // ✗ TypeScript error!
```

### Catch Errors Early

```bash
npm run type-check
# Catches typos BEFORE they break the app
```

### Add New Deal Fields

1. Update `interface Deal` in `lib/types.ts`
2. TypeScript will show red squiggles everywhere you need to update
3. Click the squiggle, follow the suggestion

---

## 🚨 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Port 3000 in use | `lsof -ti:3000 \| xargs kill -9` then `npm run dev` |
| TypeScript errors | `npm run type-check` and fix them |
| Tailwind styles not showing | Restart dev server: `Ctrl+C` then `npm run dev` |
| GitHub push fails | `git pull origin main` then `git push` |
| Vercel deployment fails | Check build logs in Vercel dashboard |

---

## ✅ Launch Checklist

Before showing to Eileen/Larry:

- [ ] All 50 deals loaded in `lib/deals.ts`
- [ ] No TypeScript errors: `npm run type-check`
- [ ] Local testing done (filters, sorting, modal)
- [ ] Code formatted: `npm run format`
- [ ] Pushed to GitHub: `git push`
- [ ] Deployed to Vercel (auto-deploys from GitHub)
- [ ] Share Vercel URL: `https://nerdio-ve-platform-XXXXX.vercel.app`

---

## 📞 Next Steps

1. **Today**: Load all 50 deals, push to GitHub, deploy to Vercel
2. **Tomorrow**: Share with Eileen for feedback
3. **This week**: Implement feedback, add features
4. **Next week**: Add success story linking, advanced filters

---

## 🎓 Learning Resources (for deepening knowledge)

- **React**: https://react.dev/learn
- **TypeScript**: https://www.typescriptlang.org/docs/handbook/
- **Next.js**: https://nextjs.org/learn
- **Tailwind**: https://tailwindcss.com/docs/installation

---

**You've got this! This is a production-ready, type-safe platform built for scale.**

Happy coding! 🚀

---

Last updated: November 2025
Created for: Mohammed (Value Engineer)
Platform: Nerdio VE Command Center
