# 🎯 Nerdio VE Command Center

**Strategic Deal Management & Value Engineering Platform**

A TypeScript-first, production-ready web application for managing 50+ strategic deals with systematic value engineering assessment, deal health tracking, and sales enablement.

---

## 🚀 Quick Start (WSL/Local Development)

### Prerequisites
- Node.js 18+ and npm
- Git
- WSL2 (if on Windows)
- Cursor or VS Code

### Installation

1. **Navigate to your project directory**
```bash
cd /your/project/path
```

2. **Copy the scaffolded files** (from `/mnt/user-data/outputs/`)
```bash
# If you downloaded the files, copy them to your WSL directory
cp -r /mnt/user-data/outputs/* .
```

3. **Install dependencies**
```bash
npm install
```

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
nerdio-ve-platform/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main dashboard page
│   └── globals.css         # Global Tailwind styles
├── components/
│   ├── DealCard.tsx        # Deal card component (grid/list)
│   ├── DealDetailModal.tsx # Full deal details modal
│   ├── FilterPanel.tsx     # Multi-dimensional filter UI
│   ├── SortSelector.tsx    # Sort dropdown
│   └── DealSummary.tsx     # Summary statistics
├── lib/
│   ├── types.ts            # TypeScript type definitions
│   ├── utils.ts            # Utility functions (filter, sort, format)
│   └── deals.ts            # Sample deal data
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── .eslintrc.json          # ESLint config
├── .prettierrc              # Prettier config
└── .gitignore              # Git ignore rules
```

---

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Building
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking
npm run format           # Format code with Prettier
npm run format:check     # Check format (dry run)
```

---

## 📊 Key Features

### Dashboard
- **Deal Cards**: Grid or list view of all 50+ deals
- **Real-time Filtering**: By rep, industry, deal size, stage, health status
- **Multi-level Sorting**: Deal size, health score, days in stage, close date
- **Search**: Quick search by company name, AE, deal ID

### Deal Assessment
- **Health Scoring**: 1-10 scale based on deal maturity
- **VE Strengths & Gaps**: Structured assessment framework
- **Next Actions**: Prioritized action items with owners and due dates
- **VE Deliverables Tracking**: ROI models, TCO analysis, business cases

### Leadership Visibility
- **Summary Stats**: Total deals, annual value, average health, at-risk count
- **Health Indicators**: 🟢 Healthy, 🟡 At-Risk, 🔴 Stalled
- **Deal Context**: Stakeholders, competitors, compelling events, urgency

---

## 💾 Data Schema

### Core Deal Object (lib/types.ts)

```typescript
interface Deal {
  id: string
  company: string
  dealSizeMRR: number
  dealSizeAnnual: number
  industry: Industry
  ae: string                    // Account Executive
  stage: DealStage
  healthScore: number           // 1-10
  healthStatus: 'healthy' | 'at-risk' | 'stalled'
  stakeholders: {
    economicBuyer?: EconomicBuyer
    champion?: Champion
    technicalBuyer?: Stakeholder
  }
  assessment: VEAssessment
  nextActions: NextAction[]
  veDeliverables: VEDeliverables
  // ... more fields
}
```

All types are **strictly typed** in `lib/types.ts` for full TypeScript safety.

---

## 🔧 Customization

### Adding Your Deal Data

1. Open `lib/deals.ts`
2. Update the `sampleDeals` array with your actual deals
3. Use the Ambev deal as a template structure
4. Ensure all types match the `Deal` interface

### Styling

- Tailwind CSS utility classes in components
- Custom theme colors in `tailwind.config.ts`
- Global styles in `app/globals.css`

### Adding New Features

1. Create components in `/components/`
2. Use TypeScript types from `lib/types.ts`
3. Import utility functions from `lib/utils.ts`
4. Leverage Next.js server/client component split

---

## 📦 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5.3 |
| **Styling** | Tailwind CSS 3.4 |
| **Runtime** | Node.js 18+ |
| **Package Manager** | npm |

---

## 🚀 Deployment (GitHub → Vercel)

### 1. Initialize Git & Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial Nerdio VE Platform commit"

# Add remote (replace with your repo)
git remote add origin https://github.com/YOUR-USERNAME/nerdio-ve-platform.git

# Push to main
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Connect GitHub to Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Sign in / Create account
3. Click "New Project"
4. Select your GitHub repo
5. Accept defaults, click "Deploy"
6. Your app lives at `https://nerdio-ve-platform.vercel.app`

**Option B: Deploy from CLI**
```bash
npm install -g vercel
vercel
```

### 3. Set Custom Domain
- In Vercel dashboard: Settings → Domains
- Add custom domain (e.g., `ve.getnerdio.com`)
- Follow DNS instructions

---

## 🧪 Testing Locally

### Test Filters
```
1. Search for "Ambev" - should show 1 result
2. Filter by "Daniel Valverde" (AE) - shows Ambev
3. Filter by "Healthcare" - shows Intermountain Health
4. Filter by "Stalled" - shows Ambev (health score 3)
5. Sort by "Health Score (Worst → Best)" - Ambev first
```

### Test Modal
```
1. Click any deal card
2. Modal opens with full details
3. Scroll through assessment, actions, deliverables
4. Click external links (Salesforce, Gong)
5. Close button works
```

---

## 📝 Development Workflow

### Before Coding
1. Check `nerdio_ve_prd.md` for requirements
2. Review existing types in `lib/types.ts`
3. Plan components in `components/`

### During Development
```bash
# Run type checking in parallel
npm run type-check

# Format code before committing
npm run format

# Lint before pushing
npm run lint
```

### Before Pushing to GitHub
```bash
# Final type check
npm run type-check

# Build production bundle
npm run build

# No errors? Ready to commit
git add .
git commit -m "Feature: [description]"
git push
```

---

## 🐛 Troubleshooting

### Port 3000 in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### TypeScript errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Type check
npm run type-check
```

### Tailwind not working
```bash
# Rebuild Tailwind cache
npm run build

# Or restart dev server
npm run dev
```

---

## 📚 Additional Resources

- **PRD**: See `nerdio_ve_prd.md` (uploaded files)
- **Deal Data**: See `Deal_Dissection.md` (Ambev example)
- **TypeScript Docs**: https://www.typescriptlang.org/docs/
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

## 🎯 Next Steps

### Phase 1 (Today)
- ✅ Set up project locally
- ✅ Test filters/sort/modal
- ⏭️ **Add all 50 deals data** (replace `sampleDeals`)
- ⏭️ **Test complete workflow**
- ⏭️ **Push to GitHub**

### Phase 2 (This Week)
- Add authentication (optional)
- Integrate real data source
- Deploy to Vercel
- Share link with Eileen & Larry

### Phase 3 (Next Sprint)
- Advanced analytics
- Export to CSV/PDF
- Deal comparison view
- Success story linking

---

## 📞 Support

**Questions?**
- Check `nerdio_ve_prd.md` for feature details
- Review component code comments
- Check TypeScript types in `lib/types.ts`

**Want to add a feature?**
1. Update types in `lib/types.ts`
2. Add utility functions to `lib/utils.ts`
3. Create React component
4. Test and commit

---

## 📄 License

Internal Nerdio tool. All rights reserved.

---

**Built with ❤️ for the Nerdio Value Engineering team**

Last updated: November 2025
