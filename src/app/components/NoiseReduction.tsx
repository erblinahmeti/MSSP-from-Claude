import { useState, useMemo, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';
import NoiseReductionConfigPanel from './NoiseReductionConfigPanel';
import { 
  Search, 
  Calendar, 
  Filter, 
  Columns3, 
  Undo2, 
  RotateCw,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  ChevronUp,
  Play,
  X,
  Pause,
  Check,
  User,
  Monitor,
  Globe,
  Mail,
  Terminal,
  FileText,
  ExternalLink,
  TrendingUp
} from 'lucide-react';

interface NoiseReductionRule {
  id: string;
  clients: number;
  clientNames: string[];
  alertType: string;
  totalFalsePositives: number;
  falsePositiveRate: number;
  last30Days: number;
  totalUniqueEntities: number;
  sourceProduct: string;
  autoclosedIncidents: number;
  isActive: boolean;
  enabledClients?: number; // Number of clients with noise reduction enabled
}

interface NoiseReductionConfig {
  autoCloseTag: string;
  severity: string;
  duration: string | number;
  incidentScope: string;
  clientScope: string[];
}

type IncidentStatus = 'New' | 'Active' | 'Closed';
type SeverityLevel = 'Low' | 'Medium' | 'High';
type AttentionType = 'True Positive Detected' | 'Threat Intel: High Risk' | 'Threat Intel: Medium Risk' | 'Threat Intel: Low Risk' | 'Tuning: False Positive' | 'No Attention';
type EntityType = 'Account' | 'FileHash' | 'Host' | 'IP' | 'Mailbox' | 'Process';

interface Entity {
  name: string;
  type: EntityType;
}

interface Incident {
  id: string;
  client: {
    name: string;
    logo: string;
  };
  incidentNumber: string;
  status: IncidentStatus;
  type: string;
  created: string;
  entities: Entity[];
  logs: number;
  sentinelSeverity: SeverityLevel;
  attention: AttentionType;
  owner: {
    name: string;
    role: string;
  } | null;
}

const mockRules: NoiseReductionRule[] = [
  {
    id: '1',
    clients: 5,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google'],
    alertType: 'User login from different countries within 3 hours',
    totalFalsePositives: 1247,
    falsePositiveRate: 78.5,
    last30Days: 1.4,
    totalUniqueEntities: 342,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 0,
    isActive: false,
    enabledClients: 0
  },
  {
    id: '2',
    clients: 3,
    clientNames: ['Nike', 'Apple', 'Google'],
    alertType: 'Multiple failed login attempts (VPN users)',
    totalFalsePositives: 892,
    falsePositiveRate: 65.2,
    last30Days: 2.1,
    totalUniqueEntities: 187,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 234,
    isActive: true,
    enabledClients: 3
  },
  {
    id: '3',
    clients: 7,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Samsung'],
    alertType: 'Unusual number of authentication errors',
    totalFalsePositives: 1534,
    falsePositiveRate: 82.1,
    last30Days: 3.2,
    totalUniqueEntities: 456,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 567,
    isActive: true,
    enabledClients: 4
  },
  {
    id: '4',
    clients: 2,
    clientNames: ['Microsoft', 'Apple'],
    alertType: 'Suspicious email forwarding rule detected',
    totalFalsePositives: 423,
    falsePositiveRate: 45.7,
    last30Days: 0.8,
    totalUniqueEntities: 89,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 0,
    isActive: false,
    enabledClients: 0
  },
  {
    id: '5',
    clients: 4,
    clientNames: ['Amazon', 'Samsung', 'Nike', 'Adidas'],
    alertType: 'Office 365 inbox rule with suspicious keywords',
    totalFalsePositives: 678,
    falsePositiveRate: 71.3,
    last30Days: 1.9,
    totalUniqueEntities: 234,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 156,
    isActive: true,
    enabledClients: 4
  },
  {
    id: '6',
    clients: 6,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon'],
    alertType: 'Potential privilege escalation via role assignment',
    totalFalsePositives: 956,
    falsePositiveRate: 68.9,
    last30Days: 2.7,
    totalUniqueEntities: 178,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 89,
    isActive: false,
    enabledClients: 0
  },
  {
    id: '7',
    clients: 3,
    clientNames: ['Samsung', 'Amazon', 'Google'],
    alertType: 'Mass download activity detected',
    totalFalsePositives: 534,
    falsePositiveRate: 52.4,
    last30Days: 1.2,
    totalUniqueEntities: 145,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 0,
    isActive: false,
    enabledClients: 0
  },
  {
    id: '8',
    clients: 5,
    clientNames: ['Nike', 'Apple', 'Microsoft', 'Google', 'Amazon'],
    alertType: 'Suspicious PowerShell execution pattern',
    totalFalsePositives: 1123,
    falsePositiveRate: 74.6,
    last30Days: 3.1,
    totalUniqueEntities: 267,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 445,
    isActive: true,
    enabledClients: 5
  },
  {
    id: '9',
    clients: 4,
    clientNames: ['Nike', 'Adidas', 'Microsoft', 'Samsung'],
    alertType: 'Unusual file share access pattern',
    totalFalsePositives: 789,
    falsePositiveRate: 61.3,
    last30Days: 2.4,
    totalUniqueEntities: 201,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 123,
    isActive: false,
    enabledClients: 0
  },
  {
    id: '10',
    clients: 2,
    clientNames: ['Apple', 'Google'],
    alertType: 'Anomalous Azure AD sign-in properties',
    totalFalsePositives: 345,
    falsePositiveRate: 58.7,
    last30Days: 1.6,
    totalUniqueEntities: 98,
    sourceProduct: 'Microsoft Sentinel',
    autoclosedIncidents: 0,
    isActive: false,
    enabledClients: 0
  }
];

// Mock incidents data for detail modal
const mockIncidentsForRules: Incident[] = [
  {
    id: 'inc-1',
    client: { 
      name: 'Nike', 
      logo: 'https://images.unsplash.com/photo-1706879349357-f17b91de99a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwbG9nb3xlbnwxfHx8fDE3NjY0ODU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    incidentNumber: '4152',
    status: 'New',
    type: 'User login from different countries within 3 hours',
    created: '1h 13m ago',
    entities: [
      { name: 'john.doe@nike.com', type: 'Account' },
      { name: '192.168.1.105', type: 'IP' }
    ],
    logs: 45,
    sentinelSeverity: 'Medium',
    attention: 'Tuning: False Positive',
    owner: null
  },
  {
    id: 'inc-2',
    client: { 
      name: 'Apple', 
      logo: 'https://images.unsplash.com/photo-1609538106201-e0dc68873410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGxvZ298ZW58MXx8fHwxNzY2NDQwNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    incidentNumber: '4198',
    status: 'Closed',
    type: 'User login from different countries within 3 hours',
    created: '3h 45m ago',
    entities: [
      { name: 'sarah.wilson@apple.com', type: 'Account' },
      { name: '10.0.0.25', type: 'IP' }
    ],
    logs: 32,
    sentinelSeverity: 'Low',
    attention: 'Tuning: False Positive',
    owner: { name: 'Emily Rodriguez', role: 'L1 Analyst' }
  },
  {
    id: 'inc-3',
    client: { 
      name: 'Microsoft', 
      logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc2NjQyOTcwNHww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    incidentNumber: '4210',
    status: 'Active',
    type: 'Multiple failed login attempts (VPN users)',
    created: '25m ago',
    entities: [
      { name: 'vpn-user@microsoft.com', type: 'Account' }
    ],
    logs: 78,
    sentinelSeverity: 'Medium',
    attention: 'Tuning: False Positive',
    owner: { name: 'Sarah Johnson', role: 'L1 Analyst' }
  },
  {
    id: 'inc-4',
    client: { 
      name: 'Google', 
      logo: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    incidentNumber: '4215',
    status: 'New',
    type: 'Multiple failed login attempts (VPN users)',
    created: '45m ago',
    entities: [
      { name: 'contractor@google.com', type: 'Account' },
      { name: '172.16.0.10', type: 'IP' }
    ],
    logs: 112,
    sentinelSeverity: 'High',
    attention: 'Tuning: False Positive',
    owner: null
  },
  {
    id: 'inc-5',
    client: { 
      name: 'Adidas', 
      logo: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    incidentNumber: '4220',
    status: 'Closed',
    type: 'Unusual number of authentication errors',
    created: '2h ago',
    entities: [
      { name: 'admin@adidas.com', type: 'Account' },
      { name: 'AUTH-SERVER-01', type: 'Host' }
    ],
    logs: 203,
    sentinelSeverity: 'Medium',
    attention: 'Tuning: False Positive',
    owner: { name: 'Robert Williams', role: 'SOC Manager' }
  },
  {
    id: 'inc-6',
    client: { 
      name: 'Amazon', 
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWF6b24lMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    incidentNumber: '4225',
    status: 'New',
    type: 'Office 365 inbox rule with suspicious keywords',
    created: '1h 30m ago',
    entities: [
      { name: 'user@amazon.com', type: 'Mailbox' }
    ],
    logs: 12,
    sentinelSeverity: 'Low',
    attention: 'Tuning: False Positive',
    owner: null
  },
  {
    id: 'inc-7',
    client: { 
      name: 'Samsung', 
      logo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW1zdW5nJTIwbG9nb3xlbnwxfHx8fDE3NjY0ODU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    incidentNumber: '4230',
    status: 'Active',
    type: 'Office 365 inbox rule with suspicious keywords',
    created: '50m ago',
    entities: [
      { name: 'employee@samsung.com', type: 'Mailbox' },
      { name: 'spam-filter.exe', type: 'Process' }
    ],
    logs: 8,
    sentinelSeverity: 'Medium',
    attention: 'Tuning: False Positive',
    owner: { name: 'Michael Chen', role: 'L2 Analyst' }
  }
];

const ITEMS_PER_PAGE = 10;

// Mock client data for noise reduction configuration
const mockClients = [
  { id: 'client-1', name: 'Nike', enabled: false, level: 1, falsePositiveRate: 2.5, score: 92 },
  { id: 'client-2', name: 'Adidas', enabled: false, level: 1, falsePositiveRate: 1.8, score: 95 },
  { id: 'client-3', name: 'Apple', enabled: false, level: 1, falsePositiveRate: 3.2, score: 89 },
  { id: 'client-4', name: 'Microsoft', enabled: false, level: 2, falsePositiveRate: 4.1, score: 85 },
  { id: 'client-5', name: 'Google', enabled: false, level: 2, falsePositiveRate: 2.9, score: 90 },
  { id: 'client-6', name: 'Amazon', enabled: false, level: 2, falsePositiveRate: 5.5, score: 78 },
  { id: 'client-7', name: 'Samsung', enabled: false, level: 3, falsePositiveRate: 6.2, score: 75 },
  { id: 'client-8', name: 'Facebook', enabled: false, level: 3, falsePositiveRate: 7.8, score: 68 },
  { id: 'client-9', name: 'Tesla', enabled: false, level: 1, falsePositiveRate: 2.1, score: 94 },
  { id: 'client-10', name: 'Netflix', enabled: false, level: 2, falsePositiveRate: 4.5, score: 82 },
  { id: 'client-11', name: 'Spotify', enabled: false, level: 3, falsePositiveRate: 8.1, score: 65 },
  { id: 'client-12', name: 'Uber', enabled: false, level: 2, falsePositiveRate: 5.0, score: 80 },
  { id: 'client-13', name: 'Airbnb', enabled: false, level: 3, falsePositiveRate: 7.5, score: 70 },
  { id: 'client-14', name: 'LinkedIn', enabled: false, level: 1, falsePositiveRate: 2.8, score: 91 },
  { id: 'client-15', name: 'Twitter', enabled: false, level: 2, falsePositiveRate: 4.8, score: 81 },
  { id: 'client-16', name: 'Snapchat', enabled: false, level: 3, falsePositiveRate: 9.2, score: 62 },
  { id: 'client-17', name: 'Pinterest', enabled: false, level: 4, falsePositiveRate: 11.5, score: 55 },
  { id: 'client-18', name: 'Adobe', enabled: false, level: 1, falsePositiveRate: 3.0, score: 88 },
];

function ConfirmationModal({ 
  isOpen, 
  onClose, 
  rule, 
  isBulkAction = false,
  bulkCount = 0,
  selectedRulesData = [],
  onConfirm 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  rule: NoiseReductionRule | null; 
  isBulkAction?: boolean;
  bulkCount?: number;
  selectedRulesData?: NoiseReductionRule[];
  onConfirm: (config: NoiseReductionConfig) => void;
}) {
  const [autoCloseTag, setAutoCloseTag] = useState('Autoclosed by Seculyze');
  const [customTag, setCustomTag] = useState('');
  const [severity, setSeverity] = useState('maintain');
  const [duration, setDuration] = useState<string | number>('indefinitely');
  const [customDuration, setCustomDuration] = useState('');
  const [incidentScope, setIncidentScope] = useState('future_and_open');
  const [clientScope, setClientScope] = useState<string[]>([]);
  const [isAllClients, setIsAllClients] = useState(true);

  if (!isOpen || (!rule && !isBulkAction)) return null;

  // Get all unique clients from selected rules or single rule
  const availableClients = isBulkAction 
    ? Array.from(new Set(selectedRulesData.flatMap(r => r.clientNames))).sort()
    : rule?.clientNames || [];
  
  const totalClients = availableClients.length;

  const handleConfirm = () => {
    onConfirm({
      autoCloseTag: autoCloseTag === 'custom' ? customTag : autoCloseTag,
      severity: severity === 'maintain' ? 'maintain' : severity,
      duration: duration === 'custom' ? parseInt(customDuration) : duration,
      incidentScope,
      clientScope: isAllClients ? ['all'] : clientScope
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]" onClick={onClose}>
      <div 
        className="bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-start justify-between z-10">
          <div>
            <h2 className="text-lg text-[#092E3F] mb-2">
              {isBulkAction ? `Enable Noise Reduction for ${bulkCount} Rule${bulkCount !== 1 ? 's' : ''}` : 'Enable Noise Reduction Rule'}
            </h2>
            {rule && <p className="text-gray-600 text-sm mb-1">{rule.alertType}</p>}
            {isBulkAction && <p className="text-gray-600 text-sm mb-1">Configure settings for {bulkCount} selected rule{bulkCount !== 1 ? 's' : ''}</p>}
            {!isBulkAction && <p className="text-gray-400 text-xs">(Uses Authentication Normalization)</p>}
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Auto-close Tag */}
          <div>
            <label className="block text-sm text-[#092E3F] mb-3">Incident Tag</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#2A96A8] transition-colors">
                <input
                  type="radio"
                  name="tag"
                  value="Autoclosed by Seculyze"
                  checked={autoCloseTag === 'Autoclosed by Seculyze'}
                  onChange={(e) => setAutoCloseTag(e.target.value)}
                />
                <span className="text-gray-700">Autoclosed by Seculyze</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#2A96A8] transition-colors">
                <input
                  type="radio"
                  name="tag"
                  value="custom"
                  checked={autoCloseTag === 'custom'}
                  onChange={(e) => setAutoCloseTag(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter custom tag"
                  value={customTag}
                  onChange={(e) => setCustomTag(e.target.value)}
                  onClick={() => setAutoCloseTag('custom')}
                  className="flex-1 bg-white border border-gray-300 rounded px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2A96A8]"
                />
              </label>
            </div>
          </div>

          {/* Severity */}
          <div>
            <label className="block text-sm text-[#092E3F] mb-3">Incident Severity</label>
            <div className="grid grid-cols-2 gap-3">
              {['maintain', 'informational', 'low', 'medium'].map((sev) => (
                <label 
                  key={sev}
                  className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#2A96A8] transition-colors"
                >
                  <input
                    type="radio"
                    name="severity"
                    value={sev}
                    checked={severity === sev}
                    onChange={(e) => setSeverity(e.target.value)}
                  />
                  <span className="text-gray-700 capitalize">{sev === 'maintain' ? 'Maintain Current' : sev}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm text-[#092E3F] mb-3">Duration</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#2A96A8] transition-colors">
                <input
                  type="radio"
                  name="duration"
                  value="indefinitely"
                  checked={duration === 'indefinitely'}
                  onChange={(e) => setDuration(e.target.value)}
                />
                <span className="text-gray-700">Run indefinitely</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#2A96A8] transition-colors">
                <input
                  type="radio"
                  name="duration"
                  value="custom"
                  checked={duration === 'custom'}
                  onChange={(e) => setDuration(e.target.value)}
                />
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">Run for</span>
                  <input
                    type="number"
                    placeholder="30"
                    value={customDuration}
                    onChange={(e) => setCustomDuration(e.target.value)}
                    onClick={() => setDuration('custom')}
                    className="w-20 bg-white border border-gray-300 rounded px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2A96A8]"
                  />
                  <span className="text-gray-700">days</span>
                </div>
              </label>
            </div>
          </div>

          {/* Incident Scope */}
          <div>
            <label className="block text-sm text-[#092E3F] mb-3">Apply To</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#2A96A8] transition-colors">
                <input
                  type="radio"
                  name="incidentScope"
                  value="future_and_open"
                  checked={incidentScope === 'future_and_open'}
                  onChange={(e) => setIncidentScope(e.target.value)}
                />
                <span className="text-gray-700">Future incidents and currently open ones</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#2A96A8] transition-colors">
                <input
                  type="radio"
                  name="incidentScope"
                  value="future_only"
                  checked={incidentScope === 'future_only'}
                  onChange={(e) => setIncidentScope(e.target.value)}
                />
                <span className="text-gray-700">Future incidents only</span>
              </label>
            </div>
          </div>

          {/* Client Scope */}
          <div>
            <label className="block text-sm text-[#092E3F] mb-3">Client Selection</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:border-[#2A96A8] transition-colors">
                <input
                  type="radio"
                  name="clientScope"
                  checked={isAllClients}
                  onChange={() => setIsAllClients(true)}
                />
                <span className="text-gray-700">Apply to all clients ({totalClients} clients)</span>
              </label>
              <div className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#2A96A8] transition-colors">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="clientScope"
                    checked={!isAllClients}
                    onChange={() => setIsAllClients(false)}
                    className="mt-0.5"
                  />
                </label>
                <div className="flex-1">
                  <div 
                    className="text-gray-700 mb-2 cursor-pointer"
                    onClick={() => setIsAllClients(false)}
                  >
                    Select specific clients
                  </div>
                  {!isAllClients && availableClients.length > 0 && (
                    <div className="space-y-1.5 mt-3">
                      {availableClients.map((client) => (
                        <label 
                          key={client} 
                          className="flex items-center gap-2 p-2 bg-white border border-gray-200 rounded hover:border-[#2A96A8] transition-colors cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={clientScope.includes(client)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setClientScope([...clientScope, client]);
                              } else {
                                setClientScope(clientScope.filter(c => c !== client));
                              }
                            }}
                          />
                          <span className="text-sm text-gray-600">{client}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3 justify-end z-10">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-colors"
          >
            Confirm & Enable
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper functions for the detail modal
function StatusBadge({ status }: { status: IncidentStatus }) {
  const styles = {
    New: 'bg-blue-100/80 text-blue-500',
    Active: 'bg-emerald-100/70 text-emerald-600',
    Closed: 'bg-gray-100/80 text-gray-500'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[status]}`}>
      {status}
    </span>
  );
}

function SeverityBadge({ severity }: { severity: SeverityLevel }) {
  const styles = {
    Low: 'bg-[#2A96A8]/10 text-[#2A96A8]/60',
    Medium: 'bg-[#2A96A8]/30 text-[#2A96A8]',
    High: 'bg-[#2A96A8] text-white'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[severity]}`}>
      {severity}
    </span>
  );
}

function EntityIcon({ type }: { type: EntityType }) {
  const iconProps = { className: "w-3.5 h-3.5 text-[#092E3F]/60" };
  
  switch (type) {
    case 'Account':
      return <User {...iconProps} />;
    case 'FileHash':
      return <FileText {...iconProps} />;
    case 'Host':
      return <Monitor {...iconProps} />;
    case 'IP':
      return <Globe {...iconProps} />;
    case 'Mailbox':
      return <Mail {...iconProps} />;
    case 'Process':
      return <Terminal {...iconProps} />;
    default:
      return <User {...iconProps} />;
  }
}

function RuleDetailModal({
  isOpen,
  onClose,
  rule,
  onToggle
}: {
  isOpen: boolean;
  onClose: () => void;
  rule: NoiseReductionRule | null;
  onToggle: (rule: NoiseReductionRule) => void;
}) {
  if (!isOpen || !rule) return null;

  // Filter incidents by alert type
  const relatedIncidents = mockIncidentsForRules.filter(
    incident => incident.type === rule.alertType
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-[#092E3F] mb-2">{rule.alertType}</h2>
            <p className="text-sm text-[#092E3F]/60">
              Noise Reduction Rule Details
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#092E3F]/60" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Compact Metadata Section */}
          <div className="bg-gradient-to-br from-[#2A96A8]/5 to-white border border-gray-200 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-3">
              {/* Key Metrics */}
              <div>
                <div className="text-xs text-[#092E3F]/60 mb-0.5">Total FPs</div>
                <div className="text-lg text-[#092E3F]">{rule.totalFalsePositives.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-[#092E3F]/60 mb-0.5">FP Rate</div>
                <div className="text-lg text-[#092E3F]">{rule.falsePositiveRate}%</div>
              </div>
              <div>
                <div className="text-xs text-[#092E3F]/60 mb-0.5">Last 30 Days</div>
                <div className="text-lg text-[#092E3F]">{rule.last30Days} FP/day</div>
              </div>
              <div>
                <div className="text-xs text-[#092E3F]/60 mb-0.5">Entities</div>
                <div className="text-lg text-[#092E3F]">{rule.totalUniqueEntities}</div>
              </div>
              <div>
                <div className="text-xs text-[#092E3F]/60 mb-0.5">Autoclosed</div>
                <div className="text-lg text-[#092E3F]">{rule.autoclosedIncidents}</div>
              </div>
              <div>
                <div className="text-xs text-[#092E3F]/60 mb-0.5">Status</div>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${rule.isActive ? 'text-[#2A96A8]' : 'text-gray-400'}`}>
                    {rule.isActive ? 'Enabled' : 'Disabled'}
                  </span>
                  <button
                    onClick={() => onToggle(rule)}
                    className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#2A96A8] focus:ring-offset-2 ${
                      rule.isActive ? 'bg-[#2A96A8]' : 'bg-gray-200'
                    }`}
                    role="switch"
                    aria-checked={rule.isActive}
                  >
                    <span
                      className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                        rule.isActive ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Secondary Info */}
            <div className="flex items-center gap-6 pt-3 border-t border-gray-200/60 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#092E3F]/60">Source:</span>
                <span className="text-[#092E3F]">{rule.sourceProduct}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#092E3F]/60">Clients ({rule.clients}):</span>
                <div className="flex flex-wrap gap-1">
                  {rule.clientNames.slice(0, 3).map((client, idx) => (
                    <span key={idx} className="px-1.5 py-0.5 bg-white text-[#092E3F] text-xs rounded border border-gray-200">
                      {client}
                    </span>
                  ))}
                  {rule.clientNames.length > 3 && (
                    <span className="px-1.5 py-0.5 bg-white text-[#092E3F]/60 text-xs rounded border border-gray-200">
                      +{rule.clientNames.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related Incidents Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-[#092E3F]">Related Incidents ({relatedIncidents.length})</h3>
                <p className="text-xs text-[#092E3F]/60 mt-0.5">
                  Incidents tagged as false positives for this alert type
                </p>
              </div>
            </div>

            {/* Incidents Table */}
            {relatedIncidents.length > 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#e5f2f4]">
                      <tr className="border-b border-gray-200">
                        <th className="px-3 py-2 text-left text-xs uppercase tracking-wider text-[#092E3F]/70">Client</th>
                        <th className="px-3 py-2 text-left text-xs uppercase tracking-wider text-[#092E3F]/70">Incident #</th>
                        <th className="px-3 py-2 text-left text-xs uppercase tracking-wider text-[#092E3F]/70">Status</th>
                        <th className="px-3 py-2 text-left text-xs uppercase tracking-wider text-[#092E3F]/70">Created</th>
                        <th className="px-3 py-2 text-left text-xs uppercase tracking-wider text-[#092E3F]/70">Entities</th>
                        <th className="px-3 py-2 text-left text-xs uppercase tracking-wider text-[#092E3F]/70">Logs</th>
                        <th className="px-3 py-2 text-left text-xs uppercase tracking-wider text-[#092E3F]/70">Severity</th>
                        <th className="px-3 py-2 text-left text-xs uppercase tracking-wider text-[#092E3F]/70">Owner</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {relatedIncidents.map((incident) => (
                        <tr key={incident.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-3 py-2">
                            <div className="flex items-center gap-2">
                              <img 
                                src={incident.client.logo} 
                                alt={incident.client.name}
                                className="w-6 h-6 rounded object-cover"
                              />
                              <span className="text-sm text-[#092E3F]">{incident.client.name}</span>
                            </div>
                          </td>
                          <td className="px-3 py-2">
                            <span className="text-sm text-[#2A96A8]">#{incident.incidentNumber}</span>
                          </td>
                          <td className="px-3 py-2">
                            <StatusBadge status={incident.status} />
                          </td>
                          <td className="px-3 py-2">
                            <span className="text-sm text-[#092E3F]/60">{incident.created}</span>
                          </td>
                          <td className="px-3 py-2">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1.5">
                                <EntityIcon type={incident.entities[0].type} />
                                <span className="text-sm text-[#092E3F]">{incident.entities[0].name}</span>
                              </div>
                              {incident.entities.length > 1 && (
                                <span className="px-2 py-0.5 bg-[#2A96A8]/10 text-[#2A96A8] text-xs rounded">
                                  +{incident.entities.length - 1}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-3 py-2">
                            <span className="text-sm text-[#092E3F]">{incident.logs}</span>
                          </td>
                          <td className="px-3 py-2">
                            <SeverityBadge severity={incident.sentinelSeverity} />
                          </td>
                          <td className="px-3 py-2">
                            {incident.owner ? (
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-[#2A96A8]/10 flex items-center justify-center">
                                  <span className="text-xs text-[#2A96A8]">
                                    {incident.owner.name.split(' ').map(n => n[0]).join('')}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm text-[#092E3F]">{incident.owner.name}</div>
                                  <div className="text-xs text-[#092E3F]/50">{incident.owner.role}</div>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
                                  <User className="w-3.5 h-3.5 text-gray-400" />
                                </div>
                                <div>
                                  <span className="text-sm text-gray-400">Unassigned</span>
                                </div>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <p className="text-sm text-[#092E3F]/60">No related incidents found</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 text-[#092E3F] rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NoiseReduction() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('Last 7 days');
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [columnWidths, setColumnWidths] = useState({
    clients: 100,
    alertType: 350,
    totalFalsePositives: 180,
    falsePositiveRate: 150,
    last30Days: 150,
    uniqueEntities: 140,
    sourceProduct: 180,
    autoclosed: 130,
    action: 150
  });
  const [resizing, setResizing] = useState<string | null>(null);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [rules, setRules] = useState<NoiseReductionRule[]>(mockRules);
  const [currentPage, setCurrentPage] = useState(1);
  const [isColumnsDropdownOpen, setIsColumnsDropdownOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    clients: true,
    alertType: true,
    totalFalsePositives: true,
    falsePositiveRate: true,
    last30Days: true,
    uniqueEntities: true,
    sourceProduct: true,
    autoclosed: true,
    action: true
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [isFiltersDropdownOpen, setIsFiltersDropdownOpen] = useState(false);
  const [expandedFilterSection, setExpandedFilterSection] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    clients: [] as string[],
    sourceProducts: [] as string[],
    status: [] as string[]
  });
  const [selectedRules, setSelectedRules] = useState<string[]>([]);
  const [hoveredClientId, setHoveredClientId] = useState<string | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedRule, setSelectedRule] = useState<NoiseReductionRule | null>(null);
  const [isBulkAction, setIsBulkAction] = useState(false);
  const [bulkActionType, setBulkActionType] = useState<'on' | 'off' | null>(null);
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(true);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedRuleDetail, setSelectedRuleDetail] = useState<NoiseReductionRule | null>(null);
  const [isConfigPanelOpen, setIsConfigPanelOpen] = useState(false);
  const [configAlertType, setConfigAlertType] = useState('');

  // Sync selectedRuleDetail when rules change
  useEffect(() => {
    if (selectedRuleDetail) {
      const updatedRule = rules.find(r => r.id === selectedRuleDetail.id);
      if (updatedRule && JSON.stringify(updatedRule) !== JSON.stringify(selectedRuleDetail)) {
        setSelectedRuleDetail(updatedRule);
      }
    }
  }, [rules]);

  const dateFilterOptions = [
    'Last 24 hours',
    'Last 48 hours',
    'Last 7 days',
    'Last 30 days',
    'This Month',
    'This Quarter',
    'Last Quarter',
    'This Year',
    'Last Year',
    'All time',
    'Custom Range'
  ];

  const columnOptions = [
    { key: 'clients', label: 'Clients' },
    { key: 'alertType', label: 'Alert Type' },
    { key: 'totalFalsePositives', label: 'Total False Positives' },
    { key: 'falsePositiveRate', label: 'False Positive Rate' },
    { key: 'last30Days', label: 'Last 30 Days' },
    { key: 'uniqueEntities', label: 'Unique Entities' },
    { key: 'sourceProduct', label: 'Source Product' },
    { key: 'autoclosed', label: 'Autoclosed' },
    { key: 'action', label: 'Noise Reduction' }
  ];

  const toggleColumn = (columnKey: string) => {
    setVisibleColumns(prev => ({
      ...prev,
      [columnKey]: !prev[columnKey as keyof typeof prev]
    }));
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDate('Last 7 days');
    setSortColumn(null);
    setSortDirection('asc');
    setCurrentPage(1);
    setSelectedFilters({
      clients: [],
      sourceProducts: [],
      status: []
    });
  };

  const handleRefreshTable = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLastRefreshed(new Date());
    setIsRefreshing(false);
    toast.success('Table refreshed successfully');
  };

  const getTimeSinceRefresh = () => {
    const now = new Date();
    const diff = now.getTime() - lastRefreshed.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return 'Just now';
  };

  const handleMouseDown = (column: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setResizing(column);
    
    const startX = e.clientX;
    const startWidth = columnWidths[column as keyof typeof columnWidths];
    
    const handleMouseMove = (moveEvent: MouseEvent) => {
      moveEvent.preventDefault();
      const diff = moveEvent.clientX - startX;
      const newWidth = Math.max(60, startWidth + diff);
      setColumnWidths(prev => ({
        ...prev,
        [column]: newWidth
      }));
    };
    
    const handleMouseUp = () => {
      setResizing(null);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = () => {
    if (selectedRules.length === filteredRules.length && filteredRules.length > 0) {
      setSelectedRules([]);
    } else {
      setSelectedRules(filteredRules.map(r => r.id));
    }
  };

  const handleSelectRule = (id: string) => {
    if (selectedRules.includes(id)) {
      setSelectedRules(selectedRules.filter(rId => rId !== id));
    } else {
      setSelectedRules([...selectedRules, id]);
    }
  };

  const handleToggleRule = (rule: NoiseReductionRule) => {
    if (rule.isActive) {
      setRules(rules.map(r => 
        r.id === rule.id ? { ...r, isActive: false } : r
      ));
      toast.success(`Noise reduction disabled for "${rule.alertType}"`);
    } else {
      setSelectedRule(rule);
      setShowConfirmModal(true);
    }
  };

  const handleConfirmNoiseReduction = (config: NoiseReductionConfig) => {
    if (isBulkAction) {
      // Handle bulk action
      if (bulkActionType === 'on') {
        const inactiveRules = rules.filter(r => selectedRules.includes(r.id) && !r.isActive);
        setRules(prev => prev.map(rule =>
          selectedRules.includes(rule.id) ? { ...rule, isActive: true } : rule
        ));
        toast.success(`Noise reduction enabled for ${inactiveRules.length} rule${inactiveRules.length !== 1 ? 's' : ''}`);
      }
      setSelectedRules([]);
      setIsBulkAction(false);
      setBulkActionType(null);
    } else if (selectedRule) {
      // Handle single rule action
      setRules(rules.map(rule => 
        rule.id === selectedRule.id 
          ? { ...rule, isActive: true }
          : rule
      ));
      toast.success(`Noise reduction enabled for "${selectedRule.alertType}"`);
      setSelectedRule(null);
    }
    setShowConfirmModal(false);
  };

  const handleBulkTurnOn = () => {
    const selectedRulesData = rules.filter(r => selectedRules.includes(r.id));
    const inactiveCount = selectedRulesData.filter(r => !r.isActive).length;
    
    if (inactiveCount === 0) {
      toast.error('All selected rules are already active');
      return;
    }
    
    // Show confirmation modal for bulk turn on
    setIsBulkAction(true);
    setBulkActionType('on');
    setShowConfirmModal(true);
  };

  const handleBulkTurnOff = () => {
    const selectedRulesData = rules.filter(r => selectedRules.includes(r.id));
    const activeCount = selectedRulesData.filter(r => r.isActive).length;
    
    if (activeCount === 0) {
      toast.error('All selected rules are already inactive');
      return;
    }
    
    // Turn off doesn't need confirmation - just disable them
    setRules(prev => prev.map(rule =>
      selectedRules.includes(rule.id) ? { ...rule, isActive: false } : rule
    ));
    
    toast.success(`Noise reduction disabled for ${activeCount} rule${activeCount !== 1 ? 's' : ''}`);
    setSelectedRules([]);
  };

  const handleClearSelection = () => {
    setSelectedRules([]);
  };

  // Get unique filter options
  const uniqueClients = useMemo(() => {
    return Array.from(new Set(mockRules.flatMap(r => r.clientNames))).sort();
  }, []);

  const uniqueSourceProducts = useMemo(() => {
    return Array.from(new Set(mockRules.map(r => r.sourceProduct))).sort();
  }, []);

  const toggleFilterSection = (section: string) => {
    setExpandedFilterSection(expandedFilterSection === section ? null : section);
  };

  const toggleFilterValue = (category: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  // Filter and sort logic
  const filteredRules = useMemo(() => {
    let filtered = [...rules];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(rule =>
        rule.alertType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.sourceProduct.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rule.clientNames.some(name => name.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply filters
    if (selectedFilters.clients.length > 0) {
      filtered = filtered.filter(rule =>
        rule.clientNames.some(name => selectedFilters.clients.includes(name))
      );
    }

    if (selectedFilters.sourceProducts.length > 0) {
      filtered = filtered.filter(rule =>
        selectedFilters.sourceProducts.includes(rule.sourceProduct)
      );
    }

    if (selectedFilters.status.length > 0) {
      filtered = filtered.filter(rule => {
        if (selectedFilters.status.includes('active') && rule.isActive) return true;
        if (selectedFilters.status.includes('inactive') && !rule.isActive) return true;
        return false;
      });
    }

    // Sort
    if (sortColumn) {
      filtered.sort((a, b) => {
        let aValue: any = a[sortColumn as keyof NoiseReductionRule];
        let bValue: any = b[sortColumn as keyof NoiseReductionRule];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortDirection === 'asc' 
            ? aValue.localeCompare(bValue) 
            : bValue.localeCompare(aValue);
        }

        return 0;
      });
    }

    return filtered;
  }, [rules, searchQuery, selectedFilters, sortColumn, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredRules.length / ITEMS_PER_PAGE);
  const paginatedRules = filteredRules.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const isAllSelected = selectedRules.length === filteredRules.length && filteredRules.length > 0;
  const isSomeSelected = selectedRules.length > 0 && selectedRules.length < filteredRules.length;

  const hasActiveFilters = 
    selectedFilters.clients.length > 0 ||
    selectedFilters.sourceProducts.length > 0 ||
    selectedFilters.status.length > 0 ||
    searchQuery !== '' ||
    selectedDate !== 'Last 7 days' ||
    sortColumn !== null;

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto bg-[rgba(0,0,0,0)]">
      <div className="max-w-full h-full flex flex-col p-[16px]">
        {/* Header Section */}
        <div className="mb-3">
          {/* Overview Accordion */}
          <div className="mb-6">
          <button
            onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
            className="flex items-center gap-2 mb-4 hover:opacity-70 transition-opacity"
          >
            <h2 className="text-lg text-[#092E3F]">Noise Reduction Overview</h2>
            {isOverviewExpanded ? (
              <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
            )}
          </button>

          {/* Metric Cards - Will be added later */}
          {isOverviewExpanded && (
            <div className="mb-4">
              <p className="text-sm text-gray-500">Metrics will be displayed here</p>
            </div>
          )}
        </div>

        {/* Alerts Title with Count */}
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-[#092E3F]">Rules</h1>
          <span className="px-3 py-1 bg-[#2A96A8]/10 text-[#2A96A8] rounded-full text-sm">
            {filteredRules.length}
          </span>
        </div>

        {/* Filters Bar - Clean Design */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-[280px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#092E3F]/40" />
            <input
              type="text"
              placeholder="Search by alert type, source product, or client..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-[48px] pr-[16px] py-3.5 bg-white border border-white rounded-xl text-sm text-[#092E3F] placeholder:text-[#092E3F]/40 focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] transition-all pt-[10px] pb-[8px]"
            />
          </div>
          {/* Date Filter */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 px-[20px] py-[10px] bg-white border border-white rounded-xl hover:border-[#2A96A8] transition-all text-sm text-[#092E3F]"
              onClick={() => setIsDateDropdownOpen(!isDateDropdownOpen)}
            >
              <Calendar className="w-4 h-4 text-[#092E3F]/60" />
              <span>{selectedDate}</span>
            </button>

            {/* Date Dropdown Menu */}
            {isDateDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsDateDropdownOpen(false)}
                />
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-white py-2 z-50 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  {dateFilterOptions.map((option) => (
                    <button
                      key={option}
                      className={`w-full px-4 py-2.5 text-left text-sm transition-colors flex items-center justify-between ${
                        selectedDate === option
                          ? 'bg-[#2A96A8]/10 text-[#2A96A8]'
                          : 'text-[#092E3F] hover:bg-gray-50'
                      }`}
                      onClick={() => {
                        setSelectedDate(option);
                        setIsDateDropdownOpen(false);
                      }}
                    >
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Filters */}
          <div className="relative">
            <button 
              className="flex items-center gap-2 px-[20px] py-[10px] bg-white border border-white rounded-xl hover:border-[#2A96A8] transition-all text-sm text-[#092E3F]"
              onClick={() => setIsFiltersDropdownOpen(!isFiltersDropdownOpen)}
            >
              <Filter className="w-4 h-4 text-[#092E3F]/60" />
              <span>Filters</span>
              {(selectedFilters.clients.length > 0 || selectedFilters.sourceProducts.length > 0 || selectedFilters.status.length > 0) && (
                <span className="ml-1 px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                  {selectedFilters.clients.length + selectedFilters.sourceProducts.length + selectedFilters.status.length}
                </span>
              )}
            </button>

            {/* Filters Dropdown Menu */}
            {isFiltersDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsFiltersDropdownOpen(false)}
                />
                <div className="absolute left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-white z-50 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-xs uppercase tracking-wider text-[#092E3F]/50">Advanced Filters</p>
                  </div>
                    {/* Clients Filter */}
                    <div className="border-b border-gray-100">
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('clients')}
                      >
                        <span className="text-sm text-[#092E3F]">Clients</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.clients.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.clients.length}
                            </span>
                          )}
                          {expandedFilterSection === 'clients' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'clients' && (
                        <div className="px-4 pb-2 space-y-1">
                          {uniqueClients.map((client) => (
                            <label
                              key={client}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.clients.includes(client)}
                                  onChange={() => toggleFilterValue('clients', client)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.clients.includes(client) 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-50'
                                    }`}
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="3"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              </div>
                              <span className="text-sm text-[#092E3F]">{client}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Source Products Filter */}
                    <div className="border-b border-gray-100">
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('sourceProducts')}
                      >
                        <span className="text-sm text-[#092E3F]">Source Product</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.sourceProducts.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.sourceProducts.length}
                            </span>
                          )}
                          {expandedFilterSection === 'sourceProducts' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'sourceProducts' && (
                        <div className="px-4 pb-2 space-y-1">
                          {uniqueSourceProducts.map((product) => (
                            <label
                              key={product}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.sourceProducts.includes(product)}
                                  onChange={() => toggleFilterValue('sourceProducts', product)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.sourceProducts.includes(product) 
                                        ? 'opacity-100 scale-100' 
                                        : 'opacity-0 scale-50'
                                    }`}
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    strokeWidth="3"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </div>
                              </div>
                              <span className="text-sm text-[#092E3F]">{product}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Status Filter */}
                    <div>
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('status')}
                      >
                        <span className="text-sm text-[#092E3F]">Status</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.status.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.status.length}
                            </span>
                          )}
                          {expandedFilterSection === 'status' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'status' && (
                        <div className="px-4 pb-2 space-y-1">
                          <label className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                            <div className="relative flex items-center">
                              <input
                                type="checkbox"
                                checked={selectedFilters.status.includes('active')}
                                onChange={() => toggleFilterValue('status', 'active')}
                                className="peer sr-only"
                              />
                              <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                <svg 
                                  className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                    selectedFilters.status.includes('active') 
                                      ? 'opacity-100 scale-100' 
                                      : 'opacity-0 scale-50'
                                  }`}
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor" 
                                  strokeWidth="3"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-sm text-[#092E3F]">Active</span>
                          </label>
                          <label className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                            <div className="relative flex items-center">
                              <input
                                type="checkbox"
                                checked={selectedFilters.status.includes('inactive')}
                                onChange={() => toggleFilterValue('status', 'inactive')}
                                className="peer sr-only"
                              />
                              <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                <svg 
                                  className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                    selectedFilters.status.includes('inactive') 
                                      ? 'opacity-100 scale-100' 
                                      : 'opacity-0 scale-50'
                                  }`}
                                  fill="none" 
                                  viewBox="0 0 24 24" 
                                  stroke="currentColor" 
                                  strokeWidth="3"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                            </div>
                            <span className="text-sm text-[#092E3F]">Inactive</span>
                          </label>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>

          {/* Columns */}
          <div className="relative">
              <button 
                className="flex items-center gap-2 px-[20px] py-[10px] bg-white border border-white rounded-xl hover:border-[#2A96A8] transition-all text-sm text-[#092E3F]"
                onClick={() => setIsColumnsDropdownOpen(!isColumnsDropdownOpen)}
              >
                <Columns3 className="w-4 h-4 text-[#092E3F]/60" />
                <span>Columns</span>
              </button>

              {/* Columns Dropdown Menu */}
              {isColumnsDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsColumnsDropdownOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-white py-2 z-50 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-xs uppercase tracking-wider text-[#092E3F]/50">Toggle Columns</p>
                    </div>
                    {columnOptions.map((column) => (
                      <label
                        key={column.key}
                        className="w-full px-4 py-2.5 text-left text-sm text-[#092E3F] hover:bg-gray-50 transition-colors flex items-center gap-3 cursor-pointer"
                      >
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={visibleColumns[column.key as keyof typeof visibleColumns]}
                            onChange={() => toggleColumn(column.key)}
                            className="peer sr-only"
                          />
                          <div className="w-5 h-5 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                            <svg 
                              className={`w-3 h-3 text-white transition-all duration-200 ${
                                visibleColumns[column.key as keyof typeof visibleColumns] 
                                  ? 'opacity-100 scale-100' 
                                  : 'opacity-0 scale-50'
                              }`}
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth="3"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <span>{column.label}</span>
                      </label>
                    ))}
                  </div>
                </>
              )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 ml-auto">
              <div className="relative group">
                <button 
                  onClick={handleResetFilters}
                  className="p-[10px] rounded-xl bg-white border border-white hover:border-[#2A96A8] hover:text-[#2A96A8] text-[#092E3F]/70 transition-all"
                >
                  <Undo2 className="w-4 h-4" />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-[#092E3F] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Reset Filters
                </div>
              </div>
              <div className="relative group">
                <button 
                  onClick={handleRefreshTable}
                  disabled={isRefreshing}
                  className="p-[10px] rounded-xl bg-white border border-white hover:border-[#2A96A8] hover:text-[#2A96A8] text-[#092E3F]/70 transition-all disabled:opacity-50"
                >
                  <RotateCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-[#092E3F] text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  Last refreshed {getTimeSinceRefresh()}
                </div>
              </div>
          </div>
        </div>
      </div>

      {/* Table Section - Modern Design */}
      <div className="flex-1 overflow-hidden">
        <div className="bg-white rounded-2xl border border-white overflow-hidden h-full flex flex-col relative">
          {/* Loading Overlay */}
          {isRefreshing && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <RotateCw className="w-8 h-8 text-[#2A96A8] animate-spin" />
                <p className="text-sm text-[#092E3F]/70">Refreshing table...</p>
              </div>
            </div>
          )}
          <div className="overflow-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <table className="w-full">
              <thead className="sticky top-0 z-10 shadow-sm">
                <tr className="border-b border-gray-200">
                  {/* Bulk Selection Checkbox */}
                  <th className="px-4 py-3 text-left bg-white w-12">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={isAllSelected}
                        ref={(input) => {
                          if (input) {
                            input.indeterminate = isSomeSelected;
                          }
                        }}
                        onChange={handleSelectAll}
                        className="peer sr-only"
                      />
                      <div 
                        onClick={handleSelectAll}
                        className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center cursor-pointer ${
                          isAllSelected || isSomeSelected
                            ? 'bg-[#2A96A8] border-[#2A96A8]'
                            : 'border-gray-300 hover:border-[#2A96A8]'
                        }`}
                      >
                        {isAllSelected && (
                          <svg 
                            className="w-3 h-3 text-white"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth="3"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {isSomeSelected && !isAllSelected && (
                          <div className="w-2.5 h-0.5 bg-white rounded" />
                        )}
                      </div>
                    </div>
                  </th>
                  {visibleColumns.alertType && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.alertType}px`, minWidth: `${columnWidths.alertType}px`, maxWidth: `${columnWidths.alertType}px` }}
                    onClick={() => handleSort('alertType')}
                  >
                    <div className="flex items-center gap-2">
                      Alert Type
                      {sortColumn === 'alertType' ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-[#2A96A8]" />
                        ) : (
                          <ArrowDown className="w-3.5 h-3.5 text-[#2A96A8]" />
                        )
                      ) : (
                        <ArrowUpDown className="w-3.5 h-3.5 text-[#092E3F]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('alertType')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.totalFalsePositives && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.totalFalsePositives}px`, minWidth: `${columnWidths.totalFalsePositives}px`, maxWidth: `${columnWidths.totalFalsePositives}px` }}
                    onClick={() => handleSort('totalFalsePositives')}
                  >
                    <div className="flex items-center gap-2">
                      Total False Positives
                      {sortColumn === 'totalFalsePositives' ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-[#2A96A8]" />
                        ) : (
                          <ArrowDown className="w-3.5 h-3.5 text-[#2A96A8]" />
                        )
                      ) : (
                        <ArrowUpDown className="w-3.5 h-3.5 text-[#092E3F]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('totalFalsePositives')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.falsePositiveRate && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.falsePositiveRate}px`, minWidth: `${columnWidths.falsePositiveRate}px`, maxWidth: `${columnWidths.falsePositiveRate}px` }}
                    onClick={() => handleSort('falsePositiveRate')}
                  >
                    <div className="flex items-center gap-2">
                      False Positive Rate
                      {sortColumn === 'falsePositiveRate' ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-[#2A96A8]" />
                        ) : (
                          <ArrowDown className="w-3.5 h-3.5 text-[#2A96A8]" />
                        )
                      ) : (
                        <ArrowUpDown className="w-3.5 h-3.5 text-[#092E3F]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('falsePositiveRate')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.last30Days && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.last30Days}px`, minWidth: `${columnWidths.last30Days}px`, maxWidth: `${columnWidths.last30Days}px` }}
                    onClick={() => handleSort('last30Days')}
                  >
                    <div className="flex items-center gap-2">
                      Last 30 Days
                      {sortColumn === 'last30Days' ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-[#2A96A8]" />
                        ) : (
                          <ArrowDown className="w-3.5 h-3.5 text-[#2A96A8]" />
                        )
                      ) : (
                        <ArrowUpDown className="w-3.5 h-3.5 text-[#092E3F]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('last30Days')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.uniqueEntities && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.uniqueEntities}px`, minWidth: `${columnWidths.uniqueEntities}px`, maxWidth: `${columnWidths.uniqueEntities}px` }}
                    onClick={() => handleSort('totalUniqueEntities')}
                  >
                    <div className="flex items-center gap-2">
                      Unique Entities
                      {sortColumn === 'totalUniqueEntities' ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-[#2A96A8]" />
                        ) : (
                          <ArrowDown className="w-3.5 h-3.5 text-[#2A96A8]" />
                        )
                      ) : (
                        <ArrowUpDown className="w-3.5 h-3.5 text-[#092E3F]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('uniqueEntities')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.sourceProduct && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none"
                    style={{ width: `${columnWidths.sourceProduct}px`, minWidth: `${columnWidths.sourceProduct}px`, maxWidth: `${columnWidths.sourceProduct}px` }}
                  >
                    <div className="flex items-center gap-2">
                      Source Product
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('sourceProduct')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.autoclosed && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.autoclosed}px`, minWidth: `${columnWidths.autoclosed}px`, maxWidth: `${columnWidths.autoclosed}px` }}
                    onClick={() => handleSort('autoclosedIncidents')}
                  >
                    <div className="flex items-center gap-2">
                      Autoclosed
                      {sortColumn === 'autoclosedIncidents' ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-[#2A96A8]" />
                        ) : (
                          <ArrowDown className="w-3.5 h-3.5 text-[#2A96A8]" />
                        )
                      ) : (
                        <ArrowUpDown className="w-3.5 h-3.5 text-[#092E3F]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('autoclosed')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.clients && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.clients}px`, minWidth: `${columnWidths.clients}px`, maxWidth: `${columnWidths.clients}px` }}
                    onClick={() => handleSort('clients')}
                  >
                    <div className="flex items-center gap-2">
                      Clients
                      {sortColumn === 'clients' ? (
                        sortDirection === 'asc' ? (
                          <ArrowUp className="w-3.5 h-3.5 text-[#2A96A8]" />
                        ) : (
                          <ArrowDown className="w-3.5 h-3.5 text-[#2A96A8]" />
                        )
                      ) : (
                        <ArrowUpDown className="w-3.5 h-3.5 text-[#092E3F]/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('clients')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.action && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none"
                    style={{ width: `${columnWidths.action}px`, minWidth: `${columnWidths.action}px`, maxWidth: `${columnWidths.action}px` }}
                  >
                    <div className="flex items-center gap-2">
                      Noise Reduction Action
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('action')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {paginatedRules.map((rule) => (
                  <tr
                    key={rule.id}
                    onClick={() => {
                      setSelectedRuleDetail(rule);
                      setIsConfigPanelOpen(true);
                    }}
                    className={`border-b border-gray-100 transition-colors group cursor-pointer ${
                      selectedRules.includes(rule.id)
                        ? 'bg-[#2A96A8]/5 hover:bg-[#2A96A8]/10'
                        : 'hover:bg-gray-50/50'
                    }`}
                  >
                    <td className="px-4 py-3">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedRules.includes(rule.id)}
                          onChange={() => handleSelectRule(rule.id)}
                          className="peer sr-only"
                        />
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectRule(rule.id);
                          }}
                          className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center cursor-pointer ${
                            selectedRules.includes(rule.id)
                              ? 'bg-[#2A96A8] border-[#2A96A8]'
                              : 'border-gray-300 hover:border-[#2A96A8]'
                          }`}
                        >
                          {selectedRules.includes(rule.id) && (
                            <svg 
                              className="w-3 h-3 text-white"
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor" 
                              strokeWidth="3"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </td>
                    {visibleColumns.alertType && (
                      <td className="px-4 py-3">
                        <div 
                          className="text-[#092E3F] text-sm hover:text-[#2A96A8] cursor-pointer hover:underline transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            setConfigAlertType(rule.alertType);
                            setIsConfigPanelOpen(true);
                          }}
                        >
                          {rule.alertType}
                        </div>
                      </td>
                    )}
                    {visibleColumns.totalFalsePositives && (
                      <td className="px-4 py-3">
                        <span className="text-[#092E3F] text-sm">{rule.totalFalsePositives.toLocaleString()}</span>
                      </td>
                    )}
                    {visibleColumns.falsePositiveRate && (
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 rounded-full text-xs bg-blue-100/80 text-blue-500">{rule.falsePositiveRate}%</span>
                      </td>
                    )}
                    {visibleColumns.last30Days && (
                      <td className="px-4 py-3">
                        <span className="text-[#092E3F]/60 text-sm">{rule.last30Days} FP/day</span>
                      </td>
                    )}
                    {visibleColumns.uniqueEntities && (
                      <td className="px-4 py-3">
                        <span className="text-[#092E3F] text-sm">{rule.totalUniqueEntities}</span>
                      </td>
                    )}
                    {visibleColumns.sourceProduct && (
                      <td className="px-4 py-3">
                        <span className="text-[#092E3F]/60 text-sm">{rule.sourceProduct}</span>
                      </td>
                    )}
                    {visibleColumns.autoclosed && (
                      <td className="px-4 py-3">
                        <span className="text-[#2A96A8] text-sm">{rule.autoclosedIncidents}</span>
                      </td>
                    )}
                    {visibleColumns.clients && (
                      <td className="px-4 py-3">
                        <div 
                          className="relative group/clients cursor-help"
                          onMouseEnter={() => setHoveredClientId(rule.id)}
                          onMouseLeave={() => setHoveredClientId(null)}
                        >
                          <span className="text-[#092E3F] text-sm">{rule.clients}</span>
                          {hoveredClientId === rule.id && (
                            <div className="absolute left-0 top-full mt-2 bg-white border border-gray-200 rounded-lg p-3 shadow-xl z-10 min-w-[200px]">
                              <div className="text-xs text-gray-500 mb-2">Affected Clients:</div>
                              {rule.clientNames.map((client, idx) => (
                                <div key={idx} className="text-sm text-[#092E3F] py-0.5">
                                  {client}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>
                    )}
                    {visibleColumns.action && (
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {(() => {
                            const enabledClients = rule.enabledClients || 0;
                            const totalClients = rule.clients;
                            const isPartial = enabledClients > 0 && enabledClients < totalClients;
                            const isFullyEnabled = enabledClients === totalClients && totalClients > 0;
                            const isDisabled = enabledClients === 0;
                            
                            return (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleToggleRule(rule);
                                  }}
                                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                    isFullyEnabled 
                                      ? 'bg-[#2A96A8] focus:ring-[#2A96A8]' 
                                      : isPartial 
                                      ? 'bg-[#F5A623] focus:ring-[#F5A623]' 
                                      : 'bg-gray-200 focus:ring-gray-300'
                                  }`}
                                  role="switch"
                                  aria-checked={isFullyEnabled || isPartial}
                                >
                                  <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                      isFullyEnabled 
                                        ? 'translate-x-6' 
                                        : isPartial 
                                        ? 'translate-x-[14px]' 
                                        : 'translate-x-1'
                                    }`}
                                  />
                                </button>
                                <div className="flex flex-col">
                                  <span className={`text-sm font-medium ${
                                    isFullyEnabled 
                                      ? 'text-[#2A96A8]' 
                                      : isPartial 
                                      ? 'text-[#F5A623]' 
                                      : 'text-gray-400'
                                  }`}>
                                    {isFullyEnabled ? 'Enabled' : isPartial ? 'Partial' : 'Disabled'}
                                    {(isFullyEnabled || isPartial) && (
                                      <span className="ml-1.5 text-[#092E3F]/60">
                                        {enabledClients}/{totalClients}
                                      </span>
                                    )}
                                  </span>
                                  {isPartial && (
                                    <span className="text-[10px] text-[#092E3F]/50 italic">
                                      Click settings to view details
                                    </span>
                                  )}
                                </div>
                              </>
                            );
                          })()}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-white">
              <div className="text-sm text-[#092E3F]/60">
                Showing {((currentPage - 1) * ITEMS_PER_PAGE) + 1} to {Math.min(currentPage * ITEMS_PER_PAGE, filteredRules.length)} of {filteredRules.length} results
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1.5 text-sm text-[#092E3F] border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                      currentPage === page
                        ? 'bg-[#2A96A8] text-white'
                        : 'text-[#092E3F] border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1.5 text-sm text-[#092E3F] border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirmModal}
        onClose={() => {
          setShowConfirmModal(false);
          setSelectedRule(null);
          setIsBulkAction(false);
          setBulkActionType(null);
        }}
        rule={selectedRule}
        isBulkAction={isBulkAction}
        bulkCount={isBulkAction ? rules.filter(r => selectedRules.includes(r.id) && !r.isActive).length : 0}
        selectedRulesData={isBulkAction ? rules.filter(r => selectedRules.includes(r.id) && !r.isActive) : []}
        onConfirm={handleConfirmNoiseReduction}
      />

      {/* Bulk Actions Panel */}
      {selectedRules.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-white border-t border-gray-200 shadow-2xl">
            <div className="max-w-[1400px] mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#2A96A8] text-white flex items-center justify-center">
                      <span className="text-sm">{selectedRules.length}</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#092E3F]">
                        <span className="font-medium">{selectedRules.length}</span> rule{selectedRules.length !== 1 ? 's' : ''} selected
                      </p>
                      <button
                        onClick={handleClearSelection}
                        className="text-xs text-[#092E3F]/60 hover:text-[#2A96A8] transition-colors"
                      >
                        Clear selection
                      </button>
                    </div>
                  </div>

                  <div className="h-8 w-px bg-gray-200" />

                  {/* Bulk Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm"
                      onClick={handleBulkTurnOn}
                    >
                      <Play className="w-4 h-4" />
                      Turn On Selected
                    </button>

                    <button
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-sm"
                      onClick={handleBulkTurnOff}
                    >
                      <Pause className="w-4 h-4" />
                      Turn Off Selected
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleClearSelection}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5 text-[#092E3F]/60" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Rule Detail Modal */}
      <RuleDetailModal
        isOpen={showDetailModal}
        onClose={() => {
          setShowDetailModal(false);
          setSelectedRuleDetail(null);
        }}
        rule={selectedRuleDetail}
        onToggle={handleToggleRule}
      />

      {/* Noise Reduction Config Panel */}
      <NoiseReductionConfigPanel
        isOpen={isConfigPanelOpen}
        onClose={() => setIsConfigPanelOpen(false)}
        alertType={configAlertType}
        clients={mockClients}
        onSave={(clients, applyToAll) => {
          console.log('Saving noise reduction config:', { clients, applyToAll, alertType: configAlertType });
        }}
      />
      </div>
    </div>
  );
}
