#!/bin/bash

# Nerdio Design System Installation Script
# Run this from your "Value Command Center" project root

echo "🎨 Installing Nerdio Design System..."
echo ""

# Backup existing files
echo "📦 Backing up existing files..."
cp tailwind.config.ts tailwind.config.ts.backup 2>/dev/null
cp app/globals.css app/globals.css.backup 2>/dev/null

# Copy new Nerdio-branded files
echo "🎨 Applying Nerdio brand colors and design system..."

# Update Tailwind config
cat > tailwind.config.ts << 'EOF'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Nerdio Official Brand Colors
        nerdio: {
          primary: '#239CBB',      // Eastern Blue - Primary
          secondary: '#77CADC',     // Viking - Light accent
          dark: '#0F2A38',          // Firefly - Dark navy
          light: '#E8F4F8',         // Light tint
        },
        brand: {
          50: '#E8F4F8',
          100: '#D1E9F1',
          200: '#A3D3E3',
          300: '#77CADC',
          400: '#4DB1CD',
          500: '#239CBB',
          600: '#1C7D96',
          700: '#155E71',
          800: '#0F2A38',
          900: '#0A1E2A',
        },
      },
      boxShadow: {
        'nerdio': '0 4px 6px -1px rgba(35, 156, 187, 0.1), 0 2px 4px -1px rgba(35, 156, 187, 0.06)',
        'nerdio-lg': '0 10px 15px -3px rgba(35, 156, 187, 0.1), 0 4px 6px -2px rgba(35, 156, 187, 0.05)',
      },
      borderRadius: {
        'nerdio': '8px',
      },
    },
  },
  plugins: [],
}
export default config
EOF

# Update globals.css
cat > app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --nerdio-primary: #239CBB;
  --nerdio-secondary: #77CADC;
  --nerdio-dark: #0F2A38;
  --nerdio-light: #E8F4F8;
}

body {
  color: #0F2A38;
  background: #F9FAFB;
}

@layer components {
  .btn-nerdio-primary {
    @apply bg-nerdio-primary hover:bg-brand-600 text-white font-semibold py-2 px-4 rounded-nerdio transition-all duration-200 shadow-nerdio hover:shadow-nerdio-lg;
  }
  
  .card-nerdio {
    @apply bg-white rounded-nerdio shadow-nerdio hover:shadow-nerdio-lg transition-all duration-200 border border-gray-100;
  }
  
  .input-nerdio {
    @apply w-full px-4 py-2 border border-gray-300 rounded-nerdio focus:ring-2 focus:ring-nerdio-primary focus:border-nerdio-primary transition-all duration-200;
  }
  
  .header-gradient {
    background: linear-gradient(135deg, #0F2A38 0%, #239CBB 100%);
  }
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #77CADC;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #239CBB;
}
EOF

echo "✅ Nerdio design system installed!"
echo ""
echo "🎨 Nerdio Brand Colors Applied:"
echo "   Primary (Eastern Blue): #239CBB"
echo "   Secondary (Viking): #77CADC"
echo "   Dark (Firefly): #0F2A38"
echo ""
echo "🔧 Next steps:"
echo "   1. Clear cache: rm -rf .next"
echo "   2. Restart dev: npm run dev"
echo "   3. Your app now uses Nerdio's official brand colors!"
echo ""
echo "📚 New CSS classes available:"
echo "   - .btn-nerdio-primary (primary buttons)"
echo "   - .card-nerdio (cards with Nerdio styling)"
echo "   - .input-nerdio (inputs with Nerdio focus)"
echo "   - .header-gradient (Nerdio gradient header)"
echo ""
echo "🎉 Enjoy your Nerdio-branded VE Command Center!"
EOF

chmod +x install-nerdio-design.sh
echo "✅ Script created!"
echo ""
echo "📥 Download and run:"
echo "   chmod +x install-nerdio-design.sh"
echo "   ./install-nerdio-design.sh"
