#!/bin/bash

# Nerdio VE Platform - File Reorganization Script
# Run this from your project root directory

echo "🔧 Reorganizing Nerdio VE Platform files..."

# Create proper directory structure
echo "📁 Creating directory structure..."
mkdir -p app/components
mkdir -p lib
mkdir -p public

# Move component files to app/components/
echo "📦 Moving component files..."
[ -f "DealCard.tsx" ] && mv DealCard.tsx app/components/
[ -f "DealDetailModal.tsx" ] && mv DealDetailModal.tsx app/components/
[ -f "FilterPanel.tsx" ] && mv FilterPanel.tsx app/components/
[ -f "SortSelector.tsx" ] && mv SortSelector.tsx app/components/
[ -f "DealSummary.tsx" ] && mv DealSummary.tsx app/components/

# Move lib files to lib/
echo "📚 Moving library files..."
[ -f "types.ts" ] && mv types.ts lib/
[ -f "utils.ts" ] && mv utils.ts lib/
[ -f "deals.ts" ] && mv deals.ts lib/

# Move app files if not already in app/
echo "🎨 Moving app files..."
[ -f "layout.tsx" ] && mv layout.tsx app/
[ -f "page.tsx" ] && mv page.tsx app/
[ -f "globals.css" ] && mv globals.css app/

# Keep config files in root (they're already there)
echo "⚙️ Config files are in correct location"

# Move documentation to docs folder
echo "📖 Organizing documentation..."
mkdir -p docs
[ -f "00_START_HERE.md" ] && mv 00_START_HERE.md docs/
[ -f "DEVELOPMENT.md" ] && mv DEVELOPMENT.md docs/
[ -f "FILES_OVERVIEW.txt" ] && mv FILES_OVERVIEW.txt docs/
[ -f "PROJECT_SUMMARY.md" ] && mv PROJECT_SUMMARY.md docs/
[ -f "QUICK_START.md" ] && mv QUICK_START.md docs/
[ -f "README.md" ] && cp README.md docs/ # Keep one in root too

echo "✅ Reorganization complete!"
echo ""
echo "📂 New structure:"
echo "   app/"
echo "   ├── components/    (5 component files)"
echo "   ├── layout.tsx"
echo "   ├── page.tsx"
echo "   └── globals.css"
echo "   lib/"
echo "   ├── types.ts"
echo "   ├── utils.ts"
echo "   └── deals.ts"
echo "   docs/"
echo "   └── (5 documentation files)"
echo ""
echo "🚀 Now run: npm run dev"
