import { useState } from 'react';
import { X, ArrowRight, AlertTriangle, Info, Activity, Users, CheckCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Client {
  id: string;
  name: string;
  level: 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4';
  hasLogSource: boolean;
}

interface ValueSettings {
  matrixPosition: { gain: 'high' | 'med' | 'low'; cost: 'low' | 'med' | 'high' };
  valueExplanation: string;
  value: 'High' | 'Medium' | 'Low';
}

interface ValueAlignmentModalProps {
  ruleName: string;
  sourceClient: Client;
  targetClients: Client[];
  sourceValueSettings: ValueSettings;
  logSources: string[];
  onConfirm: () => void;
  onClose: () => void;
}

export default function ValueAlignmentModal({
  ruleName,
  sourceClient,
  targetClients,
  sourceValueSettings,
  logSources,
  onConfirm,
  onClose
}: ValueAlignmentModalProps) {
  const clientsWithLogSource = targetClients.filter(c => c.hasLogSource);
  const clientsWithoutLogSource = targetClients.filter(c => !c.hasLogSource);

  const getMatrixValue = (gain: string, cost: string): string => {
    if (gain === 'high' && (cost === 'low' || cost === 'med')) return 'H';
    if (gain === 'high' && cost === 'high') return 'M';
    if (gain === 'med' && cost === 'low') return 'H';
    if (gain === 'med' && cost === 'med') return 'M';
    if (gain === 'med' && cost === 'high') return 'L';
    if (gain === 'low' && cost === 'low') return 'M';
    return 'L';
  };

  const getMatrixColor = (value: string): string => {
    if (value === 'H') return 'bg-green-500';
    if (value === 'M') return 'bg-yellow-400';
    return 'bg-red-400';
  };

  const handleConfirm = () => {
    onConfirm();
    toast.success(`Value alignment applied to ${targetClients.length} customers`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[600px] max-h-[90vh] bg-white rounded-lg shadow-2xl flex flex-col animate-scale-in">
        {/* Header */}
        <div className="bg-[#092E3F] px-6 py-5 rounded-t-lg">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-white text-lg font-bold mb-2">Align Value Across Customers</h2>
              <p className="text-[#e5f2f4] text-xs leading-relaxed">{ruleName}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors shrink-0"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {/* Source Customer Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-medium text-blue-900">Source of Change</h3>
            </div>
            <p className="text-sm text-blue-800 mb-3">
              The following value settings are from <span className="font-bold">{sourceClient.name}</span> and will be applied to all other customers.
            </p>
            <div className="bg-white border border-blue-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-[#2A96A8]" />
                <span className="text-xs font-medium text-[#092E3F]">Value Matrix Position</span>
              </div>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${getMatrixColor(getMatrixValue(sourceValueSettings.matrixPosition.gain, sourceValueSettings.matrixPosition.cost))} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm`}>
                  {getMatrixValue(sourceValueSettings.matrixPosition.gain, sourceValueSettings.matrixPosition.cost)}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-600">
                    Gain: <span className="font-medium text-[#092E3F] capitalize">{sourceValueSettings.matrixPosition.gain}</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Cost: <span className="font-medium text-[#092E3F] capitalize">{sourceValueSettings.matrixPosition.cost}</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Overall Value: <span className="font-medium text-[#2A96A8]">{sourceValueSettings.value}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-blue-100">
                <div className="text-xs font-medium text-[#092E3F] mb-1">Explanation</div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {sourceValueSettings.valueExplanation}
                </p>
              </div>
            </div>
          </div>

          {/* Target Customers with Log Source */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="text-sm font-medium text-[#092E3F]">
                Customers with Log Sources ({clientsWithLogSource.length})
              </h3>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              These customers have the required log sources enabled and will receive the alignment immediately.
            </p>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-[10px] font-medium text-gray-600 mb-2">Required Log Sources:</div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {logSources.map((source, idx) => (
                  <span key={idx} className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-medium">
                    {source}
                  </span>
                ))}
              </div>
              <div className="max-h-32 overflow-y-auto space-y-1.5">
                {clientsWithLogSource.map((client) => (
                  <div key={client.id} className="flex items-center justify-between bg-white border border-gray-200 rounded px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-[#092E3F]">{client.name}</span>
                      <span className="px-2 py-0.5 bg-[#e5f2f4] text-[#6b828c] text-[10px] rounded-full">
                        {client.level}
                      </span>
                    </div>
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Target Customers without Log Source */}
          {clientsWithoutLogSource.length > 0 && (
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                <h3 className="text-sm font-medium text-orange-900">
                  Customers without Log Sources ({clientsWithoutLogSource.length})
                </h3>
              </div>
              <p className="text-xs text-orange-800 mb-3">
                These customers do not have the required log sources enabled yet. The value settings will be applied to them as well, so when they enable the log sources in the future, the alert rule will automatically use these aligned values.
              </p>
              <div className="bg-white border border-orange-200 rounded-lg p-3 max-h-32 overflow-y-auto space-y-1.5">
                {clientsWithoutLogSource.map((client) => (
                  <div key={client.id} className="flex items-center justify-between bg-orange-50/50 border border-orange-100 rounded px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-sm font-medium text-[#092E3F]">{client.name}</span>
                      <span className="px-2 py-0.5 bg-[#e5f2f4] text-[#6b828c] text-[10px] rounded-full">
                        {client.level}
                      </span>
                    </div>
                    <span className="text-[10px] text-orange-700 font-medium">Pending log source</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Summary */}
          <div className="bg-[#e5f2f4] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-[#2A96A8]" />
              <h3 className="text-sm font-medium text-[#092E3F]">Alignment Summary</h3>
            </div>
            <div className="text-sm text-[#092E3F] space-y-1">
              <p>
                • Source: <span className="font-bold">{sourceClient.name}</span>
              </p>
              <p>
                • Total customers to align: <span className="font-bold">{targetClients.length}</span>
              </p>
              <p>
                • With active log sources: <span className="font-bold text-green-700">{clientsWithLogSource.length}</span>
              </p>
              {clientsWithoutLogSource.length > 0 && (
                <p>
                  • Pending log sources: <span className="font-bold text-orange-700">{clientsWithoutLogSource.length}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 rounded-b-lg">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-6 py-2 bg-[#2A96A8] hover:bg-[#237f8e] text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              Confirm Alignment
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
