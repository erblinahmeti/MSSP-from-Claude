import { useState } from 'react';
import { X, Shield, AlertTriangle, ArrowRight, Search } from 'lucide-react';
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
}

interface Client {
  id: string;
  name: string;
  level: 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4';
  hasLogSources: boolean;
}

interface ValueDistributeModalProps {
  rule: AlertRule;
  sourceTenantId?: string;
  onClose: () => void;
  onDistribute?: (value: 'High' | 'Medium' | 'Low', explanation: string, targetClientIds: string[]) => void;
}

const mockClients: Client[] = [
  { id: '1', name: 'Nike', level: 'Level 1', hasLogSources: true },
  { id: '2', name: 'Adidas', level: 'Level 1', hasLogSources: true },
  { id: '3', name: 'Apple', level: 'Level 2', hasLogSources: true },
  { id: '4', name: 'Microsoft', level: 'Level 2', hasLogSources: true },
  { id: '5', name: 'Google', level: 'Level 1', hasLogSources: true },
  { id: '6', name: 'Amazon', level: 'Level 3', hasLogSources: false },
  { id: '7', name: 'Tesla', level: 'Level 2', hasLogSources: true },
  { id: '8', name: 'Meta', level: 'Level 3', hasLogSources: false },
  { id: '9', name: 'Netflix', level: 'Level 1', hasLogSources: true },
  { id: '10', name: 'Spotify', level: 'Level 4', hasLogSources: true },
  { id: '11', name: 'Adobe', level: 'Level 2', hasLogSources: true },
  { id: '12', name: 'Oracle', level: 'Level 3', hasLogSources: false },
  { id: '13', name: 'SAP', level: 'Level 1', hasLogSources: true },
  { id: '14', name: 'Salesforce', level: 'Level 2', hasLogSources: true },
];

export default function ValueDistributeModal({
  rule,
  sourceTenantId,
  onClose,
  onDistribute
}: ValueDistributeModalProps) {
  const [selectedValue, setSelectedValue] = useState<'High' | 'Medium' | 'Low'>('High');
  const [explanation, setExplanation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClients, setSelectedClients] = useState<string[]>(
    mockClients
      .filter(c => c.id !== sourceTenantId && c.hasLogSources)
      .map(c => c.id)
  );

  const availableClients = mockClients.filter(c => c.id !== sourceTenantId);
  const filteredClients = availableClients.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleClient = (clientId: string) => {
    setSelectedClients(prev =>
      prev.includes(clientId)
        ? prev.filter(id => id !== clientId)
        : [...prev, clientId]
    );
  };

  const handleSelectAll = () => {
    if (selectedClients.length === availableClients.length) {
      setSelectedClients([]);
    } else {
      setSelectedClients(availableClients.map(c => c.id));
    }
  };

  const handleDistribute = () => {
    if (!explanation.trim()) {
      toast.error('Please provide an explanation for the value recommendation');
      return;
    }
    if (selectedClients.length === 0) {
      toast.error('Please select at least one client to distribute to');
      return;
    }
    onDistribute?.(selectedValue, explanation, selectedClients);
    toast.success(`Distributed rule with ${selectedValue} value to ${selectedClients.length} client${selectedClients.length !== 1 ? 's' : ''}`);
    onClose();
  };

  const sourceTenant = mockClients.find(c => c.id === sourceTenantId);
  const clientsWithLogSources = availableClients.filter(c => c.hasLogSources).length;
  const clientsWithoutLogSources = availableClients.filter(c => !c.hasLogSources).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="bg-[#092E3F] px-6 py-5 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-white text-lg font-bold mb-2">Set Value & Distribute New Rule</h2>
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

        <div className="p-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[#092E3F] font-medium mb-1">
                  New Alert Rule from {sourceTenant?.name}
                </p>
                <p className="text-xs text-[#092E3F]/70">
                  This alert rule needs to be valued and distributed to other clients. Set the value recommendation and select target clients for distribution.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-bold text-[#092E3F] mb-3">Value Recommendation</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setSelectedValue('High')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedValue === 'High'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-red-300'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedValue === 'High' ? 'bg-red-500' : 'bg-red-100'
                  }`}>
                    <AlertTriangle className={`w-6 h-6 ${
                      selectedValue === 'High' ? 'text-white' : 'text-red-500'
                    }`} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-[#092E3F]">High</p>
                    <p className="text-xs text-[#092E3F]/60 mt-1">Critical alerts</p>
                  </div>
                  {selectedValue === 'High' && (
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>

              <button
                onClick={() => setSelectedValue('Medium')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedValue === 'Medium'
                    ? 'border-yellow-500 bg-yellow-50'
                    : 'border-gray-200 bg-white hover:border-yellow-300'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedValue === 'Medium' ? 'bg-yellow-500' : 'bg-yellow-100'
                  }`}>
                    <AlertTriangle className={`w-6 h-6 ${
                      selectedValue === 'Medium' ? 'text-white' : 'text-yellow-600'
                    }`} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-[#092E3F]">Medium</p>
                    <p className="text-xs text-[#092E3F]/60 mt-1">Moderate alerts</p>
                  </div>
                  {selectedValue === 'Medium' && (
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>

              <button
                onClick={() => setSelectedValue('Low')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedValue === 'Low'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    selectedValue === 'Low' ? 'bg-blue-500' : 'bg-blue-100'
                  }`}>
                    <Shield className={`w-6 h-6 ${
                      selectedValue === 'Low' ? 'text-white' : 'text-blue-500'
                    }`} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-[#092E3F]">Low</p>
                    <p className="text-xs text-[#092E3F]/60 mt-1">Informational</p>
                  </div>
                  {selectedValue === 'Low' && (
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-bold text-[#092E3F] mb-2">
              Explanation <span className="text-red-500">*</span>
            </label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Explain why this value is recommended..."
              className="w-full px-4 py-3 bg-[#f6f6f6] border border-[#e5f2f4] rounded-lg text-sm text-[#092E3F] placeholder:text-[#979394] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] transition-all resize-none"
              rows={3}
            />
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[#092E3F]">Select Target Clients</h3>
              <button
                onClick={handleSelectAll}
                className="text-xs text-[#2A96A8] hover:underline"
              >
                {selectedClients.length === availableClients.length ? 'Deselect All' : 'Select All'}
              </button>
            </div>

            {clientsWithoutLogSources > 0 && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-xs text-[#092E3F]">
                  <span className="font-medium">{clientsWithoutLogSources} client{clientsWithoutLogSources !== 1 ? 's' : ''}</span> don't have the required log sources enabled. The rule will be distributed but won't be active until log sources are enabled.
                </p>
              </div>
            )}

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b828c]" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-[#f6f6f6] border border-[#e5f2f4] rounded-lg text-xs text-[#092E3F] placeholder:text-[#979394] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
              {filteredClients.map((client) => (
                <label
                  key={client.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                    selectedClients.includes(client.id)
                      ? 'bg-[#e5f2f4] border-[#2A96A8]'
                      : 'bg-white border-gray-200 hover:border-[#2A96A8]/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedClients.includes(client.id)}
                    onChange={() => handleToggleClient(client.id)}
                    className="w-4 h-4 text-[#2A96A8] rounded border-gray-300 focus:ring-[#2A96A8]"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-[#092E3F] truncate">
                        {client.name}
                      </span>
                      {!client.hasLogSources && (
                        <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 text-[9px] rounded-full shrink-0">
                          No Log Sources
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#6b828c]">{client.level}</span>
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-[#092E3F]/60">
                <span className="font-bold text-[#092E3F]">{selectedClients.length}</span> of{' '}
                <span className="font-bold text-[#092E3F]">{availableClients.length}</span> clients selected
                {clientsWithLogSources < availableClients.length && (
                  <span className="ml-2">
                    ({clientsWithLogSources} with required log sources)
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDistribute}
              disabled={selectedClients.length === 0}
              className="px-6 py-2 bg-[#2A96A8] hover:bg-[#237f8e] text-white rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <ArrowRight className="w-4 h-4" />
              Set Value & Distribute
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
