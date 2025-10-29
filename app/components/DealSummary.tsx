'use client';

import { formatCurrency } from '@/lib/utils';

interface Summary {
  totalDeals: number;
  totalAnnualValue: number;
  averageHealthScore: number;
  dealsAtRisk: number;
  dealsStalled: number;
}

interface DealSummaryProps {
  summary: Summary;
}

export function DealSummary({ summary }: DealSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
      {/* Total Deals */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 text-sm font-medium">Total Deals</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{summary.totalDeals}</p>
      </div>

      {/* Total Annual Value */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 text-sm font-medium">Annual Value</p>
        <p className="text-2xl font-bold text-green-600 mt-2">{formatCurrency(summary.totalAnnualValue)}</p>
      </div>

      {/* Average Health */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 text-sm font-medium">Avg Health Score</p>
        <p className="text-3xl font-bold text-blue-600 mt-2">{summary.averageHealthScore.toFixed(1)}/10</p>
      </div>

      {/* At Risk */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 text-sm font-medium">At Risk 🟡</p>
        <p className="text-3xl font-bold text-yellow-600 mt-2">{summary.dealsAtRisk}</p>
      </div>

      {/* Stalled */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 text-sm font-medium">Stalled 🔴</p>
        <p className="text-3xl font-bold text-red-600 mt-2">{summary.dealsStalled}</p>
      </div>
    </div>
  );
}
