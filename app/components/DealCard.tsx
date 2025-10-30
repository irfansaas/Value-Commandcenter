'use client';

import { Deal } from '@/lib/types';
import { formatCurrency, formatDate, getHealthEmoji, getHealthColor } from '@/lib/utils';

interface DealCardProps {
  deal: Deal;
  onViewDetails: () => void;
  viewMode: 'grid' | 'list';
}

export function DealCard({ deal, onViewDetails, viewMode }: DealCardProps) {
  const healthColor = getHealthColor(deal.healthScore);
  const healthEmoji = getHealthEmoji(deal.healthStatus);

  if (viewMode === 'list') {
    return (
      <div className="card p-4 flex items-center justify-between border border-gray-200 rounded-xl hover:shadow-md hover:bg-nerdio-light/30 cursor-pointer transition-all duration-200" onClick={onViewDetails}>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{healthEmoji}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 truncate">{deal.company}</h3>
              <p className="text-sm text-gray-600">
                {deal.ae} • {deal.industry} • {formatCurrency(deal.dealSizeAnnual)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <div className="text-right">
            <div className={`px-3 py-1 rounded-full text-sm font-medium ${healthColor}`}>{deal.healthScore}/10</div>
            <p className="text-xs text-gray-600 mt-1">{deal.stage}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="card p-5 border border-gray-200 rounded-xl hover:shadow-lg hover:bg-nerdio-light/30 cursor-pointer group transition-all transform hover:-translate-y-1 duration-200"
      onClick={onViewDetails}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-nerdio-primary transition-colors">{deal.company}</h3>
          <p className="text-sm text-gray-600">{deal.industry}</p>
        </div>
        <span className="text-3xl">{healthEmoji}</span>
      </div>

      {/* Health Score Badge */}
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${healthColor} mb-4`}>
        Health: {deal.healthScore}/10
      </div>

      {/* Key Metrics */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Deal Size (Annual):</span>
          <span className="font-semibold text-gray-900">{formatCurrency(deal.dealSizeAnnual)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">AE:</span>
          <span className="font-medium text-gray-900">{deal.ae}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Stage:</span>
          <span className="font-medium text-gray-900">{deal.stage}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Days in Stage:</span>
          <span className={`font-medium ${deal.daysInStage > 90 ? 'text-red-600' : 'text-green-600'}`}>
            {deal.daysInStage} days
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Close Date:</span>
          <span className="font-medium text-gray-900">{formatDate(deal.targetCloseDate)}</span>
        </div>
      </div>

      {/* VE Status */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4">
        <p className="text-xs text-gray-600 font-semibold uppercase mb-2">VE Status</p>
        <div className="flex gap-2 flex-wrap">
          {deal.veDeliverables.roiModel.status === 'completed' && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">ROI ✓</span>
          )}
          {deal.veDeliverables.tcoComparison.status === 'completed' && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">TCO ✓</span>
          )}
          {deal.veDeliverables.executiveBusinessCase.status === 'completed' && (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Business Case ✓</span>
          )}
          {deal.nextActions.filter((a) => a.status === 'pending').length > 0 && (
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              {deal.nextActions.filter((a) => a.status === 'pending').length} Pending
            </span>
          )}
        </div>
      </div>

      {/* Footer */}
      <button className="w-full py-2 px-3 bg-nerdio-light text-nerdio-primary rounded-lg font-medium text-sm hover:bg-nerdio-secondary transition-colors">
        View Details →
      </button>
    </div>
  );
}
