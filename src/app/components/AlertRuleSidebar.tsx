import { useState } from 'react';
import { X, Search, Users, ArrowRight, Shield, Code, MessageSquare, History, Info, Activity, FileText, AlertTriangle, CheckCircle, Eye, Edit3, Save, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface Client {
  id: string;
  name: string;
  level: 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4';
  enabled: boolean;
  fpRate?: string;
  score?: number;
}

interface AlertRule {
  id: string;
  name: string;
  description?: string;
  author: 'Microsoft' | 'Seculyze' | 'Custom';
  version: string;
  mitre: string[];
  logSources: string[];
  value: 'High' | 'Medium' | 'Low';
  state: 'Enabled' | 'Disabled';
  clientsApplied: number;
  clientNames?: string[];
  attention: 'High Value Alert' | 'Low Value Alert' | 'Medium Value Alert' | 'Version Misalignment' | 'Value Misalignment' | 'Disable Aligned' | 'New Rule' | 'Client Misalignment';
  action: 'Enable' | 'Disable' | 'Align' | 'Distribute' | 'Align Version' | 'Align Value' | 'Value & Distribute';
  valueExplanation?: string;
  kqlQuery?: string;
}

interface ChangelogEntry {
  id: string;
  user: string;
  timestamp: string;
  changes: string;
}

interface Comment {
  id: string;
  user: string;
  timestamp: string;
  text: string;
}

const mockClients: Client[] = [
  { id: '1', name: 'Nike', level: 'Level 1', enabled: true, fpRate: '2.1%', score: 94 },
  { id: '2', name: 'Adidas', level: 'Level 1', enabled: true, fpRate: '1.8%', score: 96 },
  { id: '3', name: 'Apple', level: 'Level 2', enabled: false, fpRate: '3.2%', score: 89 },
  { id: '4', name: 'Microsoft', level: 'Level 2', enabled: true, fpRate: '2.4%', score: 93 },
  { id: '5', name: 'Google', level: 'Level 1', enabled: true, fpRate: '1.9%', score: 95 },
  { id: '6', name: 'Amazon', level: 'Level 3', enabled: false, fpRate: '4.1%', score: 85 },
  { id: '7', name: 'Tesla', level: 'Level 2', enabled: true, fpRate: '2.7%', score: 91 },
  { id: '8', name: 'Meta', level: 'Level 3', enabled: false, fpRate: '3.8%', score: 87 },
  { id: '9', name: 'Netflix', level: 'Level 1', enabled: true, fpRate: '2.0%', score: 94 },
  { id: '10', name: 'Spotify', level: 'Level 4', enabled: false, fpRate: '5.2%', score: 82 },
  { id: '11', name: 'Adobe', level: 'Level 2', enabled: true, fpRate: '2.5%', score: 92 },
  { id: '12', name: 'Oracle', level: 'Level 3', enabled: false, fpRate: '4.3%', score: 84 },
  { id: '13', name: 'SAP', level: 'Level 1', enabled: true, fpRate: '1.7%', score: 97 },
  { id: '14', name: 'Salesforce', level: 'Level 2', enabled: true, fpRate: '2.3%', score: 93 },
  { id: '15', name: 'IBM', level: 'Level 4', enabled: false, fpRate: '5.5%', score: 80 },
];

type SidebarSection = 'attentionAction' | 'valueMatrix' | 'clients' | 'query' | 'changelog' | 'comments';

interface AlertRuleSidebarProps {
  rule?: AlertRule;
  rules?: AlertRule[];
  mode?: 'single' | 'distribution';
  sourceTenantId?: string;
  initialSection?: SidebarSection;
  onClose: () => void;
  onDistribute?: (targetClientIds: string[]) => void;
}

export default function AlertRuleSidebar({
  rule,
  rules = [],
  mode = 'single',
  sourceTenantId,
  initialSection,
  onClose,
  onDistribute
}: AlertRuleSidebarProps) {
  // In distribution mode, filter out the source tenant
  const availableClients = mode === 'distribution' && sourceTenantId
    ? mockClients.filter(c => c.id !== sourceTenantId)
    : mockClients;

  const [clients, setClients] = useState<Client[]>(
    availableClients.map(c => ({ ...c, enabled: true }))
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTab, setFilterTab] = useState<'all' | 'enabled' | 'disabled'>('all');
  const [applyAllEnabled, setApplyAllEnabled] = useState(true);

  // New states for detail view - collapsible sections
  const [expandedSections, setExpandedSections] = useState<{
    description: boolean;
    attentionAction: boolean;
    valueMatrix: boolean;
    basicInfo: boolean;
    logSources: boolean;
    mitre: boolean;
    query: boolean;
    changelog: boolean;
    comments: boolean;
    clients: boolean;
  }>({
    description: true,
    attentionAction: true,
    valueMatrix: true,
    basicInfo: true,
    logSources: true,
    mitre: true,
    query: initialSection === 'query',
    changelog: initialSection === 'changelog',
    comments: initialSection === 'comments',
    clients: initialSection === 'clients' || rule?.action === 'Value & Distribute' || rule?.action === 'Align Value',
  });

  const [isEditingQuery, setIsEditingQuery] = useState(false);
  const [kqlQuery, setKqlQuery] = useState(rule?.kqlQuery || `// Example KQL Query
SecurityEvent
| where EventID == 4625
| where AccountType == "User"
| summarize FailedAttempts = count() by Account, Computer, IpAddress
| where FailedAttempts > 5
| project TimeGenerated, Account, Computer, IpAddress, FailedAttempts`);
  const [newComment, setNewComment] = useState('');

  // Matrix state
  type MatrixPosition = { gain: 'high' | 'med' | 'low'; cost: 'low' | 'med' | 'high' };
  const getMatrixValueFromRule = (ruleValue: 'High' | 'Medium' | 'Low'): MatrixPosition => {
    if (ruleValue === 'High') return { gain: 'med', cost: 'med' };
    if (ruleValue === 'Medium') return { gain: 'med', cost: 'low' };
    return { gain: 'low', cost: 'high' };
  };
  const [matrixPosition, setMatrixPosition] = useState<MatrixPosition>(
    getMatrixValueFromRule(rule?.value || 'Medium')
  );
  const [isEditingExplanation, setIsEditingExplanation] = useState(false);
  const [valueExplanation, setValueExplanation] = useState(
    rule?.valueExplanation || 'This rule provides high value due to its effectiveness in detecting critical security threats with minimal false positives. The cost is medium due to the computational resources required for analysis.'
  );

  // Version misalignment: two versions only — current (what clients have) and latest (available)
  const hasVersionMisalignment = rule?.attention === 'Version Misalignment';
  const versionCurrent = rule?.version ?? '1.0.8';
  const versionLatest = versionCurrent.replace(/(\d+)$/, (n) => String(Number(n) + 1));
  const [selectedVersion, setSelectedVersion] = useState<'current' | 'latest'>('latest');

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Mock data
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      user: 'Sarah Chen',
      timestamp: '2024-05-28 14:30',
      text: 'Updated the threshold to reduce false positives from automated testing environments.'
    },
    {
      id: '2',
      user: 'Mike Johnson',
      timestamp: '2024-05-27 09:15',
      text: 'This rule has been very effective in catching brute force attempts. Consider enabling for all Level 1 clients.'
    }
  ]);

  const [changelog] = useState<ChangelogEntry[]>([
    {
      id: '1',
      user: 'Sarah Chen',
      timestamp: '2024-05-28 14:30',
      changes: 'Updated KQL query threshold from 3 to 5 failed attempts'
    },
    {
      id: '2',
      user: 'David Martinez',
      timestamp: '2024-05-26 11:20',
      changes: 'Changed state from Disabled to Enabled for Nike, Adidas, Apple'
    },
    {
      id: '3',
      user: 'Emily Rodriguez',
      timestamp: '2024-05-25 16:45',
      changes: 'Updated value classification from Medium to High'
    },
    {
      id: '4',
      user: 'System',
      timestamp: '2024-05-24 08:00',
      changes: 'Version updated from 1.0.0 to 1.1.4'
    }
  ]);

  const enabledCount = clients.filter(c => c.enabled).length;
  const totalCount = clients.length;
  const sourceTenant = mockClients.find(c => c.id === sourceTenantId);

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = filterTab === 'all' ||
                       (filterTab === 'enabled' && client.enabled) ||
                       (filterTab === 'disabled' && !client.enabled);

    return matchesSearch && matchesTab;
  });

  const handleToggleClient = (clientId: string) => {
    setClients(prev => prev.map(c =>
      c.id === clientId ? { ...c, enabled: !c.enabled } : c
    ));
  };

  const handleApplyAll = () => {
    const newApplyAllState = !applyAllEnabled;
    setApplyAllEnabled(newApplyAllState);
    setClients(prev => prev.map(c => ({ ...c, enabled: newApplyAllState })));
    toast.success(newApplyAllState ? 'Applied rule to all clients' : 'Removed rule from all clients');
  };

  const handleSaveQuery = () => {
    setIsEditingQuery(false);
    toast.success('KQL query saved successfully');
  };

  const handleMatrixCellClick = (gain: 'high' | 'med' | 'low', cost: 'low' | 'med' | 'high') => {
    setMatrixPosition({ gain, cost });
    toast.success('Matrix position updated');
  };

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

  const isSelectedCell = (gain: string, cost: string): boolean => {
    return matrixPosition.gain === gain && matrixPosition.cost === cost;
  };

  const handleSaveExplanation = () => {
    setIsEditingExplanation(false);
    toast.success('Value explanation saved successfully');
  };

  const handleAlignAcrossCustomers = () => {
    toast.success('Aligning value matrix across all customers');
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      user: 'Current User',
      timestamp: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      }),
      text: newComment
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
    toast.success('Comment added successfully');
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-start justify-end bg-black/20 backdrop-blur-sm">
        {/* Sidebar */}
        <div className="w-[520px] h-full bg-white shadow-2xl flex flex-col animate-slide-in-right overflow-hidden">
        {/* Header */}
        <div className="bg-[#092E3F] px-6 py-5">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              {mode === 'distribution' ? (
                <>
                  <h2 className="text-white text-lg font-bold mb-2">Distribute Alert Rules</h2>
                  <p className="text-[#e5f2f4] text-xs leading-relaxed">
                    Distributing {rules.length} rule{rules.length !== 1 ? 's' : ''} from {sourceTenant?.name} to selected tenants
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-white text-lg font-bold mb-2">Alert Rule</h2>
                  <p className="text-[#e5f2f4] text-xs leading-relaxed">{rule?.name}</p>
                </>
              )}
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors shrink-0"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#e5f2f4] border-b border-[#e5f2f4] px-6 py-3">
          <p className="text-sm text-[#092E3F]">
            <span className="font-bold">{enabledCount}</span>
            <span className="text-[#092E3F]/60"> of </span>
            <span className="font-bold">{totalCount}</span>
            <span className="text-[#092E3F]/60">{mode === 'distribution' ? ` target tenants selected (excluding ${sourceTenant?.name})` : ' clients enabled'}</span>
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">

          {/* Rules Preview (Distribution Mode Only) */}
          {mode === 'distribution' && rules.length > 0 && (
            <div className="pb-4 border-b border-gray-200">
              <h3 className="text-sm font-medium text-[#092E3F] mb-3">Rules to Distribute</h3>
              <div className="bg-gray-50 rounded-lg p-3 max-h-32 overflow-y-auto">
                <div className="space-y-2">
                  {rules.map((r) => (
                    <div key={r.id} className="flex items-center gap-2 text-xs">
                      <Shield className="w-3 h-3 text-[#2A96A8] flex-shrink-0" />
                      <span className="text-[#092E3F] flex-1 truncate">{r.name}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        r.value === 'High' ? 'bg-red-50 text-red-600' :
                        r.value === 'Medium' ? 'bg-yellow-50 text-yellow-600' :
                        'bg-blue-50 text-blue-600'
                      }`}>
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Collapsible Sections (Single Rule Mode Only) */}
          {mode === 'single' && rule && (
            <div className="space-y-6">
              {/* Description Section */}
              <div>
                <button
                  onClick={() => toggleSection('description')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">Description</h3>
                  </div>
                  {expandedSections.description ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.description && (
                  <div className="mb-6">
                    <p className="text-sm text-[#092E3F]/60 leading-relaxed">
                      {rule.description || 'This alert rule monitors for suspicious activity patterns that may indicate a security threat. It analyzes log data to detect anomalies and potential security incidents requiring investigation.'}
                    </p>
                  </div>
                )}
              </div>

              {/* Attention & Action Section */}
              <div>
                <button
                  onClick={() => toggleSection('attentionAction')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">Attention & Action</h3>
                  </div>
                  {expandedSections.attentionAction ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.attentionAction && (
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-[#092E3F]/60 mb-1">Attention</div>
                        <span className={`inline-block px-3 py-1.5 rounded-full text-xs ${
                          rule.attention === 'High Value Alert'
                            ? 'bg-red-100 text-red-700'
                            : rule.attention === 'Medium Value Alert'
                            ? 'bg-yellow-100 text-yellow-700'
                            : rule.attention === 'Low Value Alert'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {rule.attention}
                        </span>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-[#092E3F]/60 mb-1">Action</div>
                        <span className={`inline-block px-3 py-1.5 rounded-full text-xs ${
                          rule.action === 'Enable'
                            ? 'bg-green-100 text-green-700'
                            : rule.action === 'Disable'
                            ? 'bg-gray-100 text-gray-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {rule.action}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Matrix Value Section */}
              <div>
                <button
                  onClick={() => toggleSection('valueMatrix')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">Value Matrix & Explanation</h3>
                  </div>
                  {expandedSections.valueMatrix ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.valueMatrix && (
                  <div className="mb-6 space-y-3">
                    {/* Matrix */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="grid grid-cols-4 gap-1.5 text-[10px]">
                        {/* Header */}
                        <div></div>
                        <div className="text-center font-medium text-[#092E3F]/60">Low Cost</div>
                        <div className="text-center font-medium text-[#092E3F]/60">Med Cost</div>
                        <div className="text-center font-medium text-[#092E3F]/60">High Cost</div>

                        {/* High Gain Row */}
                        <div className="flex items-center text-[10px] font-medium text-[#092E3F]/60">High Gain</div>
                        <button
                          onClick={() => handleMatrixCellClick('high', 'low')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('high', 'low'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('high', 'low') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('high', 'low')}
                        </button>
                        <button
                          onClick={() => handleMatrixCellClick('high', 'med')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('high', 'med'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('high', 'med') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('high', 'med')}
                        </button>
                        <button
                          onClick={() => handleMatrixCellClick('high', 'high')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('high', 'high'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('high', 'high') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('high', 'high')}
                        </button>

                        {/* Med Gain Row */}
                        <div className="flex items-center text-[10px] font-medium text-[#092E3F]/60">Med Gain</div>
                        <button
                          onClick={() => handleMatrixCellClick('med', 'low')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('med', 'low'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('med', 'low') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('med', 'low')}
                        </button>
                        <button
                          onClick={() => handleMatrixCellClick('med', 'med')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('med', 'med'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('med', 'med') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('med', 'med')}
                        </button>
                        <button
                          onClick={() => handleMatrixCellClick('med', 'high')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('med', 'high'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('med', 'high') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('med', 'high')}
                        </button>

                        {/* Low Gain Row */}
                        <div className="flex items-center text-[10px] font-medium text-[#092E3F]/60">Low Gain</div>
                        <button
                          onClick={() => handleMatrixCellClick('low', 'low')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('low', 'low'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('low', 'low') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('low', 'low')}
                        </button>
                        <button
                          onClick={() => handleMatrixCellClick('low', 'med')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('low', 'med'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('low', 'med') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('low', 'med')}
                        </button>
                        <button
                          onClick={() => handleMatrixCellClick('low', 'high')}
                          className={`aspect-square ${getMatrixColor(getMatrixValue('low', 'high'))} rounded flex items-center justify-center text-white text-[10px] font-bold hover:opacity-80 transition-opacity ${
                            isSelectedCell('low', 'high') ? 'ring-2 ring-[#2A96A8] ring-offset-1' : ''
                          }`}
                        >
                          {getMatrixValue('low', 'high')}
                        </button>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-[10px]">
                        <div className="flex items-center gap-1">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded"></div>
                          <span className="text-[#092E3F]/60">High</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2.5 h-2.5 bg-yellow-400 rounded"></div>
                          <span className="text-[#092E3F]/60">Medium</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2.5 h-2.5 bg-red-400 rounded"></div>
                          <span className="text-[#092E3F]/60">Low</span>
                        </div>
                        <div className="ml-auto">
                          <span className="font-medium text-[#2A96A8]">
                            Current: {getMatrixValue(matrixPosition.gain, matrixPosition.cost) === 'H' ? 'High' : getMatrixValue(matrixPosition.gain, matrixPosition.cost) === 'M' ? 'Medium' : 'Low'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Value Explanation */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-medium text-[#092E3F]">Value Explanation</div>
                        {!isEditingExplanation ? (
                          <button
                            onClick={() => setIsEditingExplanation(true)}
                            className="px-2 py-1 bg-[#2A96A8] text-white rounded text-[10px] hover:bg-[#237f8e] transition-colors flex items-center gap-1"
                          >
                            <Edit3 className="w-3 h-3" />
                            Edit
                          </button>
                        ) : (
                          <div className="flex gap-1.5">
                            <button
                              onClick={() => setIsEditingExplanation(false)}
                              className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-[10px] hover:bg-gray-300 transition-colors"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleSaveExplanation}
                              className="px-2 py-1 bg-[#2A96A8] text-white rounded text-[10px] hover:bg-[#237f8e] transition-colors flex items-center gap-1"
                            >
                              <Save className="w-3 h-3" />
                              Save
                            </button>
                          </div>
                        )}
                      </div>
                      {isEditingExplanation ? (
                        <textarea
                          value={valueExplanation}
                          onChange={(e) => setValueExplanation(e.target.value)}
                          className="w-full p-2 text-sm text-[#092E3F] border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/50 focus:border-[#2A96A8]"
                          rows={3}
                          style={{ resize: 'vertical' }}
                        />
                      ) : (
                        <p className="text-sm text-[#092E3F]/60 leading-relaxed">
                          {valueExplanation}
                        </p>
                      )}
                    </div>

                    {/* Align Across All Customers Button */}
                    <button
                      onClick={handleAlignAcrossCustomers}
                      className="w-full px-4 py-2.5 bg-[#2A96A8] hover:bg-[#237f8e] text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Users className="w-4 h-4" />
                      Align Across All Customers
                    </button>

                    {/* Version Misalignment Section */}
                    {hasVersionMisalignment && (
                      <div className="border border-orange-200 rounded-xl overflow-hidden">
                        {/* Header */}
                        <div className="bg-orange-50 px-4 py-3 flex items-center gap-2 border-b border-orange-200">
                          <AlertTriangle className="w-4 h-4 text-orange-600 shrink-0" />
                          <p className="text-xs text-orange-800">Select the version to align <strong>all clients</strong> to, then click <strong>Apply Changes</strong>.</p>
                        </div>
                        {/* Version cards */}
                        <div className="divide-y divide-gray-100">
                          {/* Current version */}
                          <button
                            onClick={() => setSelectedVersion('current')}
                            className={`w-full text-left px-4 py-4 flex items-start gap-3 transition-colors ${selectedVersion === 'current' ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
                          >
                            <span className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${selectedVersion === 'current' ? 'border-orange-500' : 'border-gray-300'}`}>
                              {selectedVersion === 'current' && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-semibold text-[#092E3F]">v{versionCurrent}</span>
                                <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded-full font-medium">Current</span>
                              </div>
                              <p className="text-xs text-[#092E3F]/55">Keep the version already deployed across clients</p>
                            </div>
                          </button>
                          {/* Latest version */}
                          <button
                            onClick={() => setSelectedVersion('latest')}
                            className={`w-full text-left px-4 py-4 flex items-start gap-3 transition-colors ${selectedVersion === 'latest' ? 'bg-orange-50' : 'bg-white hover:bg-gray-50'}`}
                          >
                            <span className={`mt-0.5 w-4 h-4 rounded-full border-2 shrink-0 flex items-center justify-center ${selectedVersion === 'latest' ? 'border-orange-500' : 'border-gray-300'}`}>
                              {selectedVersion === 'latest' && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-semibold text-[#092E3F]">v{versionLatest}</span>
                                <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-[10px] rounded-full font-medium">Latest</span>
                              </div>
                              <p className="text-xs text-[#092E3F]/55">Upgrade all clients to the newest available version</p>
                            </div>
                          </button>
                        </div>
                        {/* Summary */}
                        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                          <p className="text-xs text-[#092E3F]/60">
                            All <span className="font-semibold text-[#092E3F]">{rule?.clientsApplied ?? 0} clients</span> will be aligned to{' '}
                            <span className="font-semibold text-[#092E3F]">v{selectedVersion === 'latest' ? versionLatest : versionCurrent}</span>.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Basic Information Section */}
              <div>
                <button
                  onClick={() => toggleSection('basicInfo')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Info className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">Basic Information</h3>
                  </div>
                  {expandedSections.basicInfo ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.basicInfo && (
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3">
                  {/* State */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-[#092E3F]/60 mb-1">State</div>
                    <div className="flex items-center gap-2">
                      {rule.state === 'Enabled' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 text-gray-400" />
                      )}
                      <span className={`text-sm font-medium ${
                        rule.state === 'Enabled' ? 'text-green-700' : 'text-gray-600'
                      }`}>
                        {rule.state}
                      </span>
                    </div>
                  </div>

                  {/* Version */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-[#092E3F]/60 mb-1">Version</div>
                    <div className="text-sm font-medium text-[#092E3F]">{rule.version}</div>
                  </div>

                  {/* Author */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-[#092E3F]/60 mb-1">Author</div>
                    <div className="flex items-center gap-2">
                      {rule.author === 'Microsoft' ? (
                        <Shield className="w-4 h-4 text-blue-600" />
                      ) : rule.author === 'Seculyze' ? (
                        <div className="w-4 h-4 rounded-full bg-[#2A96A8] flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">S</span>
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">C</span>
                        </div>
                      )}
                      <span className="text-sm font-medium text-[#092E3F]">
                        {rule.author === 'Custom' ? 'Company Name' : rule.author}
                      </span>
                    </div>
                  </div>

                  {/* Clients Applied */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-[#092E3F]/60 mb-1">Clients Applied</div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-medium text-[#092E3F]">{rule.clientsApplied}</span>
                    </div>
                  </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Log Sources Section */}
              <div>
                <button
                  onClick={() => toggleSection('logSources')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">Log Sources</h3>
                  </div>
                  {expandedSections.logSources ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.logSources && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {rule.logSources.map((source, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-medium">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* MITRE Tactics Section */}
              <div>
                <button
                  onClick={() => toggleSection('mitre')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#092E3F]" />
                    <h3 className="text-lg text-[#092E3F]">MITRE ATT&CK Tactics</h3>
                  </div>
                  {expandedSections.mitre ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.mitre && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {rule.mitre.map((tactic, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                          {tactic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Query Section */}
              <div>
                <button
                  onClick={() => toggleSection('query')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">KQL Query</h3>
                  </div>
                  {expandedSections.query ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.query && (
                  <div className="mb-6">
                    <div className="flex items-center justify-end mb-3">
                      {!isEditingQuery ? (
                        <button
                          onClick={() => setIsEditingQuery(true)}
                          className="px-3 py-1.5 bg-[#2A96A8] text-white rounded-lg text-xs font-medium hover:bg-[#237f8e] transition-colors flex items-center gap-2"
                        >
                          <Edit3 className="w-3 h-3" />
                          Edit Query
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button
                            onClick={() => setIsEditingQuery(false)}
                            className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-300 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleSaveQuery}
                            className="px-3 py-1.5 bg-[#2A96A8] text-white rounded-lg text-xs font-medium hover:bg-[#237f8e] transition-colors flex items-center gap-2"
                          >
                            <Save className="w-3 h-3" />
                            Save Query
                          </button>
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <textarea
                        value={kqlQuery}
                        onChange={(e) => setKqlQuery(e.target.value)}
                        readOnly={!isEditingQuery}
                        className={`w-full h-64 p-4 font-mono text-xs bg-gray-900 text-green-400 rounded-lg border ${
                          isEditingQuery ? 'border-[#2A96A8]' : 'border-gray-700'
                        } focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/50`}
                        style={{ resize: 'vertical' }}
                      />
                      {!isEditingQuery && (
                        <div className="absolute top-2 right-2">
                          <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-[10px]">
                            <Eye className="w-3 h-3 inline mr-1" />
                            Read-only
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Changelog Section */}
              <div>
                <button
                  onClick={() => toggleSection('changelog')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <History className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">Change History</h3>
                  </div>
                  {expandedSections.changelog ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.changelog && (
                  <div className="mb-6">
                    <div className="space-y-3">
                      {changelog.map((entry) => (
                        <div key={entry.id} className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#2A96A8]">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-[#2A96A8] rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {entry.user.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-[#092E3F]">{entry.user}</div>
                                <div className="text-xs text-gray-500">{entry.timestamp}</div>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 pl-10">{entry.changes}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Comments Section */}
              <div>
                <button
                  onClick={() => toggleSection('comments')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">Comments</h3>
                    <span className="px-2 py-0.5 bg-[#2A96A8]/10 text-[#2A96A8] text-xs rounded-full">
                      {comments.length}
                    </span>
                  </div>
                  {expandedSections.comments ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.comments && (
                  <div className="mb-6">
                    {/* Add Comment */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/50 focus:border-[#2A96A8] resize-none"
                        rows={3}
                      />
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={handleAddComment}
                          disabled={!newComment.trim()}
                          className="px-4 py-2 bg-[#2A96A8] text-white rounded-lg text-sm font-medium hover:bg-[#237f8e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Add Comment
                        </button>
                      </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-3">
                      {comments.map((comment) => (
                        <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-[#2A96A8] to-[#1d7080] rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                              {comment.user.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-sm font-medium text-[#092E3F]">{comment.user}</span>
                                <span className="text-xs text-gray-500">{comment.timestamp}</span>
                              </div>
                              <p className="text-sm text-gray-700 leading-relaxed">{comment.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Clients Section */}
              <div>
                <button
                  onClick={() => toggleSection('clients')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#2A96A8]" />
                    <h3 className="text-lg text-[#092E3F]">
                      {rule?.action === 'Value & Distribute'
                        ? 'Distribute to clients'
                        : rule?.action === 'Align Value'
                        ? 'Align clients'
                        : 'Clients'}
                    </h3>
                    <span className="px-2 py-0.5 bg-[#2A96A8]/10 text-[#2A96A8] text-xs rounded-full">
                      {totalCount}
                    </span>
                  </div>
                  {expandedSections.clients ? (
                    <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
                  )}
                </button>
                {expandedSections.clients && (
                  <div className="mb-6 space-y-4">
                    {/* Apply to All Clients */}
                    <div className="pb-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-[#092E3F] mb-1">
                            {rule?.action === 'Value & Distribute' ? 'Distribute to all clients' : rule?.action === 'Align Value' ? 'Align all clients' : 'Apply to All Clients'}
                          </h3>
                          <p className="text-xs text-[#092E3F]/60">
                            {rule?.action === 'Value & Distribute'
                              ? `Deploy this rule to all ${totalCount} clients`
                              : rule?.action === 'Align Value'
                              ? `Unify the value across all ${totalCount} clients`
                              : `Enable or disable across all ${totalCount} clients`}
                          </p>
                        </div>
                        <button
                          onClick={handleApplyAll}
                          className={`relative inline-block w-12 h-6 transition-colors rounded-full ${
                            applyAllEnabled ? 'bg-[#2A96A8]' : 'bg-[#e5f2f4]'
                          }`}
                        >
                          <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                            applyAllEnabled ? 'translate-x-6' : 'translate-x-0'
                          }`} />
                        </button>
                      </div>
                    </div>

                    {/* Individual Clients */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-medium text-[#092E3F]">Individual Clients</h3>
                        <p className="text-xs text-[#092E3F]/60">
                          Showing {filteredClients.length} • {filteredClients.filter(c => c.enabled).length} enabled
                        </p>
                      </div>

                {/* Filter Tabs */}
                <div className="grid grid-cols-3 gap-1.5 mb-4">
                  <button
                    onClick={() => setFilterTab('all')}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      filterTab === 'all'
                        ? 'bg-[#092E3F] text-white'
                        : 'bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e8ec]'
                    }`}
                  >
                    All ({totalCount})
                  </button>
                  <button
                    onClick={() => setFilterTab('enabled')}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      filterTab === 'enabled'
                        ? 'bg-[#092E3F] text-white'
                        : 'bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e8ec]'
                    }`}
                  >
                    Enabled ({enabledCount})
                  </button>
                  <button
                    onClick={() => setFilterTab('disabled')}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      filterTab === 'disabled'
                        ? 'bg-[#092E3F] text-white'
                        : 'bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e8ec]'
                    }`}
                  >
                    Disabled ({totalCount - enabledCount})
                  </button>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b828c]" />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-[#f6f6f6] border border-[#e5f2f4] rounded text-xs text-[#092E3F] placeholder:text-[#979394] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] transition-all"
                  />
                </div>

                {/* Client List */}
                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                  {filteredClients.map((client) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-[#092E3F]">{client.name}</span>
                          <span className="px-2 py-0.5 bg-[#e5f2f4] text-[#6b828c] text-[10px] rounded-full">
                            {client.level}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-[#6b828c]">
                          <span>FP Rate: <span className={`font-medium ${
                            parseFloat(client.fpRate || '0') > 4 ? 'text-red-500' : 'text-green-600'
                          }`}>{client.fpRate}</span></span>
                          <span>Score: <span className={`font-medium ${
                            (client.score || 0) > 90 ? 'text-green-600' : 'text-orange-500'
                          }`}>{client.score}</span></span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleToggleClient(client.id)}
                        className={`relative inline-block w-12 h-6 transition-colors rounded-full ${
                          client.enabled ? 'bg-[#4caf50]' : 'bg-[#e5f2f4]'
                        }`}
                      >
                        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          client.enabled ? 'translate-x-6' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                  ))}

                  {filteredClients.length === 0 && (
                    <div className="text-center py-8">
                      <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-sm text-gray-500">No clients found</p>
                      <p className="text-xs text-gray-400 mt-1">Try adjusting your filters</p>
                    </div>
                  )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Distribution Mode Content */}
          {mode === 'distribution' && (
            <>
              {/* Apply to All Clients */}
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-[#092E3F] mb-1">Select All Tenants</h3>
                    <p className="text-xs text-[#092E3F]/60">
                      Select or deselect all {totalCount} target tenants
                    </p>
                  </div>
                  <button
                    onClick={handleApplyAll}
                    className={`relative inline-block w-12 h-6 transition-colors rounded-full ${
                      applyAllEnabled ? 'bg-[#2A96A8]' : 'bg-[#e5f2f4]'
                    }`}
                  >
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      applyAllEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`} />
                  </button>
                </div>
              </div>

              {/* Individual Clients */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-[#092E3F]">Individual Clients</h3>
                  <p className="text-xs text-[#092E3F]/60">
                    Showing {filteredClients.length} • {filteredClients.filter(c => c.enabled).length} enabled
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="grid grid-cols-3 gap-1.5 mb-4">
                  <button
                    onClick={() => setFilterTab('all')}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      filterTab === 'all'
                        ? 'bg-[#092E3F] text-white'
                        : 'bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e8ec]'
                    }`}
                  >
                    All ({totalCount})
                  </button>
                  <button
                    onClick={() => setFilterTab('enabled')}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      filterTab === 'enabled'
                        ? 'bg-[#092E3F] text-white'
                        : 'bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e8ec]'
                    }`}
                  >
                    Enabled ({enabledCount})
                  </button>
                  <button
                    onClick={() => setFilterTab('disabled')}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      filterTab === 'disabled'
                        ? 'bg-[#092E3F] text-white'
                        : 'bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e8ec]'
                    }`}
                  >
                    Disabled ({totalCount - enabledCount})
                  </button>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b828c]" />
                  <input
                    type="text"
                    placeholder="Search clients..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-[#f6f6f6] border border-[#e5f2f4] rounded text-xs text-[#092E3F] placeholder:text-[#979394] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] transition-all"
                  />
                </div>

                {/* Client List */}
                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                  {filteredClients.map((client) => (
                    <div
                      key={client.id}
                      className="flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-[#092E3F]">{client.name}</span>
                          <span className="px-2 py-0.5 bg-[#e5f2f4] text-[#6b828c] text-[10px] rounded-full">
                            {client.level}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-[#6b828c]">
                          <span>FP Rate: <span className={`font-medium ${
                            parseFloat(client.fpRate || '0') > 4 ? 'text-red-500' : 'text-green-600'
                          }`}>{client.fpRate}</span></span>
                          <span>Score: <span className={`font-medium ${
                            (client.score || 0) > 90 ? 'text-green-600' : 'text-orange-500'
                          }`}>{client.score}</span></span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleToggleClient(client.id)}
                        className={`relative inline-block w-12 h-6 transition-colors rounded-full ${
                          client.enabled ? 'bg-[#4caf50]' : 'bg-[#e5f2f4]'
                        }`}
                      >
                        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          client.enabled ? 'translate-x-6' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                  ))}

                  {filteredClients.length === 0 && (
                    <div className="text-center py-8">
                      <Users className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                      <p className="text-sm text-gray-500">No clients found</p>
                      <p className="text-xs text-gray-400 mt-1">Try adjusting your filters</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
            >
              {mode === 'single' ? 'Close' : 'Cancel'}
            </button>
            {(mode === 'distribution' || (mode === 'single' && expandedSections.clients) || hasVersionMisalignment) && (
              <button
                onClick={() => {
                  if (mode === 'distribution') {
                    if (enabledCount === 0) { toast.error('Please select at least one target tenant'); return; }
                    const selectedClientIds = clients.filter(c => c.enabled).map(c => c.id);
                    onDistribute?.(selectedClientIds);
                    toast.success(`Distributing ${rules.length} rule${rules.length !== 1 ? 's' : ''} to ${enabledCount} tenant${enabledCount !== 1 ? 's' : ''}`);
                  } else if (hasVersionMisalignment) {
                    const v = selectedVersion === 'latest' ? versionLatest : versionCurrent;
                    toast.success(`Aligned ${rule?.clientsApplied ?? 0} clients to v${v}`);
                  } else if (rule?.action === 'Value & Distribute') {
                    const chosenValue = getMatrixValue(matrixPosition.gain, matrixPosition.cost) === 'H' ? 'High' : getMatrixValue(matrixPosition.gain, matrixPosition.cost) === 'M' ? 'Medium' : 'Low';
                    toast.success(`Rule valued as ${chosenValue} and distributed to ${enabledCount} client${enabledCount !== 1 ? 's' : ''}`);
                  } else if (rule?.action === 'Align Value') {
                    const chosenValue = getMatrixValue(matrixPosition.gain, matrixPosition.cost) === 'H' ? 'High' : getMatrixValue(matrixPosition.gain, matrixPosition.cost) === 'M' ? 'Medium' : 'Low';
                    toast.success(`Value aligned to ${chosenValue} across ${enabledCount} client${enabledCount !== 1 ? 's' : ''}`);
                  } else {
                    toast.success(`Applied changes to ${enabledCount} clients`);
                  }
                  onClose();
                }}
                disabled={mode === 'distribution' && enabledCount === 0}
                className="px-6 py-2 bg-[#2A96A8] hover:bg-[#237f8e] text-white rounded-lg text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {mode === 'distribution' && <ArrowRight className="w-4 h-4" />}
                {mode === 'distribution'
                  ? 'Distribute Alert Rules'
                  : rule?.action === 'Value & Distribute'
                  ? 'Value & Distribute'
                  : rule?.action === 'Align Value'
                  ? 'Align Value'
                  : 'Apply Changes'}
              </button>
            )}
          </div>
        </div>
      </div>
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </>
  );
}