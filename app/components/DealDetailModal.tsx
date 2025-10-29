'use client';

import { Deal } from '@/lib/types';
import { formatCurrency, formatDate, getHealthColor, getPriorityColor, getHealthEmoji } from '@/lib/utils';

interface DealDetailModalProps {
  deal: Deal;
  onClose: () => void;
}

export function DealDetailModal({ deal, onClose }: DealDetailModalProps) {
  const healthColor = getHealthColor(deal.healthScore);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{getHealthEmoji(deal.healthStatus)}</span>
            <div>
              <h2 className="text-2xl font-bold">{deal.company}</h2>
              <p className="text-blue-100">{deal.industry}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Deal Snapshot */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Deal Snapshot</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">Deal Size (MRR)</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{formatCurrency(deal.dealSizeMRR)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">Annual Value</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{formatCurrency(deal.dealSizeAnnual)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">Health Score</p>
                <p className={`text-lg font-bold mt-1 ${healthColor}`}>{deal.healthScore}/10</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">Account Executive</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{deal.ae}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">Stage</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{deal.stage}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">Days in Stage</p>
                <p className={`text-lg font-bold mt-1 ${deal.daysInStage > 90 ? 'text-red-600' : 'text-green-600'}`}>
                  {deal.daysInStage} days
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">User Count</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{deal.userCount.toLocaleString()}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">Close Date</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{formatDate(deal.targetCloseDate)}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600 font-medium uppercase">Current Solution</p>
                <p className="text-lg font-bold text-gray-900 mt-1">{deal.currentVDISolution}</p>
              </div>
            </div>
          </section>

          {/* Stakeholders */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Stakeholders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {deal.stakeholders.economicBuyer && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900">Economic Buyer</p>
                  <p className="font-bold text-gray-900 mt-1">{deal.stakeholders.economicBuyer.name}</p>
                  <p className="text-sm text-gray-600">{deal.stakeholders.economicBuyer.title}</p>
                  <p className={`text-xs mt-2 ${deal.stakeholders.economicBuyer.engaged ? 'text-green-600' : 'text-red-600'}`}>
                    {deal.stakeholders.economicBuyer.engaged ? '✓ Engaged' : '✗ Not Engaged'}
                  </p>
                </div>
              )}
              {deal.stakeholders.champion && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900">Champion</p>
                  <p className="font-bold text-gray-900 mt-1">{deal.stakeholders.champion.name}</p>
                  <p className="text-sm text-gray-600">{deal.stakeholders.champion.title}</p>
                  <p className="text-xs text-gray-600 mt-2 capitalize">Strength: {deal.stakeholders.champion.strength}</p>
                </div>
              )}
              {deal.stakeholders.technicalBuyer && (
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-900">Technical Buyer</p>
                  <p className="font-bold text-gray-900 mt-1">{deal.stakeholders.technicalBuyer.name}</p>
                  <p className="text-sm text-gray-600">{deal.stakeholders.technicalBuyer.title}</p>
                </div>
              )}
            </div>
          </section>

          {/* Assessment */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">VE Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">✓ Strengths</h4>
                <ul className="space-y-2">
                  {deal.assessment.strengths.map((strength, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-green-600 flex-shrink-0">•</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">✗ Gaps</h4>
                <ul className="space-y-2">
                  {deal.assessment.gaps.map((gap, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-red-600 flex-shrink-0">•</span>
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {deal.assessment.primaryStallReason && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs font-semibold text-red-900 uppercase">Primary Stall Reason</p>
                <p className="text-sm text-red-800 mt-2">{deal.assessment.primaryStallReason}</p>
              </div>
            )}
          </section>

          {/* Next Actions */}
          {deal.nextActions.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Next Actions</h3>
              <div className="space-y-3">
                {deal.nextActions.map((action) => (
                  <div key={action.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-xs font-bold px-2 py-1 rounded ${getPriorityColor(action.priority)}`}>
                            {action.priority.toUpperCase()}
                          </span>
                          <span className="text-xs text-gray-600">{formatDate(action.dueDate)}</span>
                        </div>
                        <p className="font-medium text-gray-900">{action.description}</p>
                        <p className="text-sm text-gray-600 mt-2">Owner: {action.owner}</p>
                        {action.notes && <p className="text-sm text-gray-500 mt-2 italic">{action.notes}</p>}
                      </div>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded whitespace-nowrap ml-2 ${
                          action.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : action.status === 'in-progress'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {action.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* VE Deliverables */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">VE Deliverables</h3>
            <div className="space-y-3">
              {Object.entries(deal.veDeliverables).map(([key, deliverable]) => (
                <div key={key} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                    {deliverable.notes && <p className="text-sm text-gray-600 mt-1">{deliverable.notes}</p>}
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded whitespace-nowrap ${
                      deliverable.status === 'completed'
                        ? 'bg-green-100 text-green-800'
                        : deliverable.status === 'in-progress'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {deliverable.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Notes */}
          {deal.notes && (
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Notes</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-800 whitespace-pre-wrap">{deal.notes}</p>
              </div>
            </section>
          )}

          {/* Activity Log */}
          {deal.activityLog.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Activity Log</h3>
              <div className="space-y-3">
                {deal.activityLog.map((activity) => (
                  <div key={activity.id} className="border-l-2 border-gray-300 pl-4 py-2">
                    <p className="text-sm text-gray-600">{formatDate(activity.date)}</p>
                    <p className="font-medium text-gray-900 mt-1">{activity.description}</p>
                    <p className="text-xs text-gray-600 mt-1">by {activity.by}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end gap-2">
          {deal.salesforceUrl && (
            <a
              href={deal.salesforceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Salesforce
            </a>
          )}
          {deal.gongUrl && (
            <a href={deal.gongUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              Gong
            </a>
          )}
          <button onClick={onClose} className="btn btn-primary btn-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
