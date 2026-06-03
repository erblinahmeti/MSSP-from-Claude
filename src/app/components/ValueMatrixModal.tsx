import { useState } from 'react';
import { X, Shield, TrendingUp, DollarSign, Info, AlertTriangle, CheckCircle, Users } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface AlertRule {
  id: string;
  name: string;
  author: 'Microsoft' | 'Seculyze' | 'Custom';
  version: string;
  mitre: string[];
  logSources: string[];
  value: 'High' | 'Medium' | 'Low';
  state: 'Enabled' | 'Disabled';
  sourceTenantId?: string;
  clientsApplied?: number;
  clientNames?: string[];
}

interface Client {
  id: string;
  name: string;
  level: 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4';
  hasLogSource: boolean;
}

interface ValueMatrixModalProps {
  rule: AlertRule;
  onClose: () => void;
  onApply?: (value: 'High' | 'Medium' | 'Low', explanation: string) => void;
  showKQL?: boolean;
}

type MatrixPosition = {
  gain: 'high' | 'medium' | 'low';
  cost: 'low' | 'medium' | 'high';
};

// Map position to value
const getValueFromPosition = (position: MatrixPosition): 'High' | 'Medium' | 'Low' => {
  if (position.gain === 'high' && position.cost === 'low') return 'High';
  if (position.gain === 'high' && position.cost === 'medium') return 'High';
  if (position.gain === 'medium' && position.cost === 'low') return 'High';
  if (position.gain === 'high' && position.cost === 'high') return 'Medium';
  if (position.gain === 'medium' && position.cost === 'medium') return 'Medium';
  if (position.gain === 'low' && position.cost === 'low') return 'Medium';
  return 'Low'; // low gain + medium/high cost
};

// Get initial position from value
const getPositionFromValue = (value: 'High' | 'Medium' | 'Low'): MatrixPosition => {
  if (value === 'High') return { gain: 'high', cost: 'low' };
  if (value === 'Medium') return { gain: 'medium', cost: 'medium' };
  return { gain: 'low', cost: 'high' };
};

// Mock clients data
const mockClients: Client[] = [
  { id: '1', name: 'Nike', level: 'Level 1', hasLogSource: true },
  { id: '2', name: 'Adidas', level: 'Level 1', hasLogSource: true },
  { id: '3', name: 'Apple', level: 'Level 2', hasLogSource: false },
  { id: '4', name: 'Microsoft', level: 'Level 2', hasLogSource: true },
  { id: '5', name: 'Google', level: 'Level 1', hasLogSource: true },
  { id: '6', name: 'Amazon', level: 'Level 3', hasLogSource: false },
  { id: '7', name: 'Tesla', level: 'Level 2', hasLogSource: true },
  { id: '8', name: 'Meta', level: 'Level 3', hasLogSource: false },
  { id: '9', name: 'Netflix', level: 'Level 1', hasLogSource: true },
  { id: '10', name: 'Spotify', level: 'Level 4', hasLogSource: false },
  { id: '11', name: 'Adobe', level: 'Level 2', hasLogSource: true },
  { id: '12', name: 'Oracle', level: 'Level 3', hasLogSource: false },
  { id: '13', name: 'SAP', level: 'Level 1', hasLogSource: true },
  { id: '14', name: 'Salesforce', level: 'Level 2', hasLogSource: true },
  { id: '15', name: 'IBM', level: 'Level 4', hasLogSource: false },
];

export default function ValueMatrixModal({
  rule,
  onClose,
  onApply,
  showKQL = false
}: ValueMatrixModalProps) {
  const [position, setPosition] = useState<MatrixPosition>(getPositionFromValue(rule.value));
  const [explanation, setExplanation] = useState('');

  const currentValue = getValueFromPosition(position);

  // Value misalignment data
  const sourceClient = showKQL ? mockClients.find(c => c.id === rule.sourceTenantId) || mockClients[0] : null;
  const targetClients = showKQL ? mockClients.filter(c => c.id !== rule.sourceTenantId) : [];
  const clientsWithLogSource = targetClients.filter(c => c.hasLogSource);
  const clientsWithoutLogSource = targetClients.filter(c => !c.hasLogSource);

  const handleApply = () => {
    if (!explanation.trim()) {
      toast.error('Please provide an explanation for the value change');
      return;
    }
    onApply?.(currentValue, explanation);
    if (showKQL && sourceClient) {
      toast.success(`Value alignment from ${sourceClient.name} applied to ${targetClients.length} customers`);
    } else {
      toast.success(`Value updated to ${currentValue} across all customers`);
    }
    onClose();
  };

  const handleReset = () => {
    setPosition(getPositionFromValue(rule.value));
    setExplanation('');
    toast.info('Reset to default value and explanation');
  };

  const getCellColor = (gain: 'high' | 'medium' | 'low', cost: 'low' | 'medium' | 'high') => {
    const value = getValueFromPosition({ gain, cost });
    if (value === 'High') return 'bg-[#76ba3b]'; // Dark green
    if (value === 'Medium') return 'bg-[#cfffa6]'; // Light green
    return 'bg-[#d6d6d6]'; // Gray
  };

  const isSelected = (gain: 'high' | 'medium' | 'low', cost: 'low' | 'medium' | 'high') => {
    return position.gain === gain && position.cost === cost;
  };

  const mockKQL = `SecurityEvent
| where EventID == 4625
| where AccountType == "User"
| summarize FailedAttempts = count() by Account, Computer
| where FailedAttempts > 5`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-[#092E3F] px-6 py-5 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-white text-lg font-bold mb-2">Set Value Recommendation</h2>
              <p className="text-[#e5f2f4] text-xs leading-relaxed">{rule.name}</p>
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
        <div className="p-6">
          {/* Value Misalignment Info */}
          {showKQL && sourceClient && (
            <div className="mb-6 space-y-4">
              {/* Source Customer Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-[#092E3F] font-medium mb-1">
                      Source of Change
                    </p>
                    <p className="text-xs text-blue-800">
                      The following value settings are from <span className="font-bold">{sourceClient.name}</span> and will be applied to all other customers.
                    </p>
                  </div>
                </div>
              </div>

              {/* Target Customers Summary */}
              <div className="bg-[#e5f2f4] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-[#2A96A8]" />
                  <h3 className="text-sm font-medium text-[#092E3F]">Alignment Summary</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xs text-gray-600">With Log Sources</span>
                    </div>
                    <p className="text-lg font-bold text-[#092E3F]">{clientsWithLogSource.length}</p>
                    <p className="text-xs text-gray-600 mt-1">Will apply immediately</p>
                  </div>
                  {clientsWithoutLogSource.length > 0 && (
                    <div className="bg-white rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="w-4 h-4 text-orange-600" />
                        <span className="text-xs text-gray-600">Without Log Sources</span>
                      </div>
                      <p className="text-lg font-bold text-[#092E3F]">{clientsWithoutLogSource.length}</p>
                      <p className="text-xs text-gray-600 mt-1">Pending activation</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {!showKQL && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#092E3F] font-medium mb-1">
                    Update value recommendation across all customers
                  </p>
                  <p className="text-xs text-[#092E3F]/70">
                    Move the marker on the matrix to adjust the overall value based on gain and cost.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Overall Value Display */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-sm font-light text-[#092E3F] uppercase">Overall Value: </span>
                <span className={`text-sm font-black uppercase ${
                  currentValue === 'High' ? 'text-[#76ba3b]' :
                  currentValue === 'Medium' ? 'text-[#cfffa6]' :
                  'text-[#d6d6d6]'
                }`}>
                  {currentValue}
                </span>
              </div>
              <button
                onClick={handleReset}
                className="text-xs text-[#d6d6d6] hover:text-[#092E3F] transition-colors flex items-center gap-1"
              >
                <span>Reset value and explanation to default</span>
                <svg className="w-4 h-4 rotate-180 -scale-y-100" fill="currentColor" viewBox="0 0 16 17.5">
                  <path d="M8,0 L16,0 L16,8 L14,8 L14,3.41 L6.71,10.71 L5.29,9.29 L12.59,2 L8,2 L8,0 Z M0,5 L0,17.5 L14,17.5 L14,11.5 L12,11.5 L12,15.5 L2,15.5 L2,7 L6,7 L6,5 L0,5 Z" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-[#6b828c]">Move the marker to adjust overall value</p>
          </div>

          {/* Gain vs Cost Matrix */}
          <div className="mb-6 flex items-center gap-4">
            {/* Gain Scale (Left) */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="flex flex-col items-center">
                <TrendingUp className="w-5 h-5 text-[#092E3F] mb-1" />
                <span className="text-sm text-[#092E3F]">Gain</span>
              </div>
              <div className="w-2 h-[187px] rounded-sm bg-gradient-to-b from-[#76ba3b] to-[#092e3f]" />
            </div>

            {/* Matrix Grid */}
            <div className="flex-1">
              <div className="grid grid-rows-3 gap-0 h-[187px] rounded-sm overflow-hidden">
                {/* High Gain Row */}
                <div className="grid grid-cols-3 gap-0">
                  <button
                    onClick={() => setPosition({ gain: 'high', cost: 'low' })}
                    className={`${getCellColor('high', 'low')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('high', 'low') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => setPosition({ gain: 'high', cost: 'medium' })}
                    className={`${getCellColor('high', 'medium')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('high', 'medium') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => setPosition({ gain: 'high', cost: 'high' })}
                    className={`${getCellColor('high', 'high')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('high', 'high') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                </div>

                {/* Medium Gain Row */}
                <div className="grid grid-cols-3 gap-0">
                  <button
                    onClick={() => setPosition({ gain: 'medium', cost: 'low' })}
                    className={`${getCellColor('medium', 'low')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('medium', 'low') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => setPosition({ gain: 'medium', cost: 'medium' })}
                    className={`${getCellColor('medium', 'medium')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('medium', 'medium') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => setPosition({ gain: 'medium', cost: 'high' })}
                    className={`${getCellColor('medium', 'high')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('medium', 'high') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                </div>

                {/* Low Gain Row */}
                <div className="grid grid-cols-3 gap-0">
                  <button
                    onClick={() => setPosition({ gain: 'low', cost: 'low' })}
                    className={`${getCellColor('low', 'low')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('low', 'low') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => setPosition({ gain: 'low', cost: 'medium' })}
                    className={`${getCellColor('low', 'medium')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('low', 'medium') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => setPosition({ gain: 'low', cost: 'high' })}
                    className={`${getCellColor('low', 'high')} relative transition-all hover:opacity-80`}
                  >
                    {isSelected('low', 'high') && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#f6f6f6] rounded-full border-4 border-[#092E3F] shadow-lg" />
                      </div>
                    )}
                  </button>
                </div>
              </div>

              {/* Cost Scale (Bottom) */}
              <div className="mt-4 flex items-center gap-2 pl-14">
                <div className="flex-1 h-2 rounded-sm bg-gradient-to-r from-[#092e3f] to-[#b73520]" />
                <div className="flex items-center gap-1 shrink-0">
                  <DollarSign className="w-4 h-4 text-[#092E3F]" />
                  <span className="text-sm text-[#092E3F]">Cost</span>
                </div>
              </div>
            </div>
          </div>

          {/* Value Explanation */}
          <div className="mb-6">
            <label className="block text-sm font-light text-[#092E3F] uppercase mb-2">
              Value Explanation
            </label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Explain why this value is recommended..."
              className="w-full px-4 py-3 bg-[#f6f6f6] border-l-2 border-[#6b828c] text-sm text-[#092E3F] placeholder:text-[#d6d6d6] focus:outline-none focus:border-[#2A96A8] transition-all resize-none"
              rows={4}
            />
          </div>

          {/* KQL Code Section (conditional) */}
          {showKQL && (
            <div className="mb-6">
              <h3 className="text-sm font-light text-[#092E3F] uppercase mb-2">KQL Query</h3>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-green-400 font-mono">{mockKQL}</pre>
              </div>
              <p className="text-xs text-[#6b828c] mt-2">
                Multiple versions detected. The query above represents version {rule.version}.
              </p>
            </div>
          )}

          {/* Target Customers Details (for Value Misalignment) */}
          {showKQL && (
            <div className="mb-6 space-y-4">
              {/* Customers with Log Source */}
              <div className="border border-gray-200 rounded-xl p-4">
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
                    {rule.logSources.map((source, idx) => (
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

              {/* Customers without Log Source */}
              {clientsWithoutLogSource.length > 0 && (
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
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
            </div>
          )}

          {/* Current Settings Info */}
          <div className="bg-gray-50 rounded-xl p-4 border-l-2 border-[#6b828c]">
            <h3 className="text-sm font-light text-[#092E3F] uppercase mb-3">Current Settings</h3>
            <div className="grid grid-cols-4 gap-4 text-xs">
              <div>
                <p className="text-[#6b828c] mb-1">State</p>
                <p className="text-[#092E3F] font-medium">{rule.state}</p>
              </div>
              <div>
                <p className="text-[#6b828c] mb-1">Version</p>
                <p className="text-[#092E3F] font-medium">{rule.version}</p>
              </div>
              <div>
                <p className="text-[#6b828c] mb-1">Author</p>
                <p className="text-[#092E3F] font-medium">{rule.author}</p>
              </div>
              <div>
                <p className="text-[#6b828c] mb-1">Current Value</p>
                <p className="text-[#092E3F] font-medium">{rule.value}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-[#e5f2f4] px-6 py-4 bg-white rounded-b-2xl">
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white text-[#6b828c] rounded text-sm hover:text-[#092E3F] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleApply}
              className="px-6 py-2 bg-[#092e3f] text-white rounded text-sm hover:bg-[#092e3f]/90 transition-colors"
            >
              {showKQL ? 'Confirm Alignment' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
