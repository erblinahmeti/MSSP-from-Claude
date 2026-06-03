import { useState, useMemo, useRef, useEffect } from 'react';
import { toast } from 'sonner@2.0.3';
import AlertRuleSidebar from './AlertRuleSidebar';
import SzCommandCard from '../../imports/SzCommandCard2/SzCommandCard2';
import MitreCoverageCard from './MitreCoverageCard';
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
  ArrowRight,
  MoreHorizontal,
  Bell,
  Shield,
  Users,
  Eye,
  Edit,
  Trash2,
  Copy,
  Download,
  X,
  Check,
  ChevronDown,
  ChevronUp,
  Upload
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

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
  attention: 'High Value Alert' | 'Low Value Alert' | 'Medium Value Alert' | 'Version Misalignment' | 'Disable Aligned' | 'New Rule' | 'Client Misalignment' | 'Value Misalignment';
  action: 'Enable' | 'Disable' | 'Align' | 'Distribute' | 'Align Version' | 'Align Clients' | 'Value & Distribute' | 'Align Value';
  isNewlyImported?: boolean;
  sourceTenantId?: string; // Which tenant this rule was synced from
  valueExplanation?: string;
  kqlQuery?: string;
}

type SortField = 'name' | 'author' | 'version' | 'value' | 'state' | 'clientsApplied' | 'attention';
type SortDirection = 'asc' | 'desc';

const mockAlertRules: AlertRule[] = [
  {
    id: '0',
    name: 'Suspicious PowerShell Download and Execute',
    description: 'Detects PowerShell commands that download and execute files from the internet, which may indicate malware installation or command-and-control communication. This rule monitors for common download cmdlets and execution patterns.',
    author: 'Microsoft',
    version: '1.2.0',
    mitre: ['Execution', 'Command and Control'],
    logSources: ['SecurityEvent', 'WindowsEvent'],
    value: 'Medium',
    state: 'Enabled',
    clientsApplied: 14,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta', 'Netflix', 'Spotify', 'Adobe', 'Oracle', 'SAP', 'Salesforce'],
    attention: 'Value Misalignment',
    action: 'Align Value',
    sourceTenantId: '5', // Google changed their value recommendation
    valueExplanation: 'Medium value due to moderate gain in detecting PowerShell-based attacks balanced against medium operational cost from analyzing all PowerShell commands.',
    kqlQuery: `// Detect suspicious PowerShell downloads
SecurityEvent
| where EventID == 4688
| where CommandLine has_any ("Invoke-WebRequest", "wget", "curl", "DownloadString", "DownloadFile")
| where CommandLine has_any ("IEX", "Invoke-Expression", "Start-Process")
| summarize Count = count() by Computer, Account, CommandLine, TimeGenerated
| where Count > 2
| project TimeGenerated, Computer, Account, CommandLine`
  },
  {
    id: '1',
    name: 'Microsoft Entra ID Hybrid Health AD FS Suspicious Activity',
    description: 'This alert detects suspicious activity in Microsoft Entra ID Hybrid Health AD FS environments. It monitors for anomalous authentication patterns, unusual credential access attempts, and potential privilege escalation activities that could indicate a security breach.',
    author: 'Microsoft',
    version: '2.0.1',
    mitre: ['Credential Access', 'Defense Evasion'],
    logSources: ['AzureActivity', 'SecurityEvent'],
    value: 'High',
    state: 'Disabled',
    clientsApplied: 12,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta', 'Netflix', 'Spotify', 'Adobe', 'Oracle'],
    attention: 'High Value Alert',
    action: 'Enable',
    sourceTenantId: '1', // Nike
    valueExplanation: 'This rule provides exceptional value by detecting critical authentication threats with high accuracy. The medium cost is justified by the computational resources needed for real-time analysis of hybrid identity systems, but the potential to prevent credential compromise makes it a high-priority rule.',
    kqlQuery: `// Detect suspicious AD FS activity
AzureActivity
| where OperationName has "ADFS"
| where ActivityStatus == "Failed"
| summarize FailedAttempts = count() by CallerIpAddress, Caller, bin(TimeGenerated, 5m)
| where FailedAttempts > 10
| join kind=inner (
    SecurityEvent
    | where EventID in (4625, 4771)
    | summarize FailedLogins = count() by IpAddress, Account
) on $left.CallerIpAddress == $right.IpAddress
| project TimeGenerated, CallerIpAddress, Caller, Account, FailedAttempts, FailedLogins
| order by FailedAttempts desc`
  },
  {
    id: '2',
    name: 'Azure Alert Suppression Rule',
    author: 'Custom',
    version: '1.0.0',
    mitre: ['Defense Evasion'],
    logSources: ['AzureActivity'],
    value: 'High',
    state: 'Disabled',
    clientsApplied: 1,
    clientNames: ['Nike'],
    attention: 'New Rule',
    action: 'Value & Distribute',
    sourceTenantId: '1' // Nike - NEW, not distributed yet
  },
  {
    id: '3',
    name: 'Base64 encoded Windows process command-lines',
    author: 'Microsoft',
    version: '1.1.4',
    mitre: ['Execution', 'Defense Evasion'],
    logSources: ['Syslog', 'WindowsEvent', 'SecurityEvent', 'CommonSecurityLog', 'AzureActivity'],
    value: 'High',
    state: 'Disabled',
    clientsApplied: 1,
    clientNames: ['Nike'],
    attention: 'New Rule',
    action: 'Value & Distribute',
    sourceTenantId: '1' // Nike - NEW, not distributed yet
  },
  {
    id: '3b',
    name: 'Suspicious PowerShell Download and Execute',
    description: 'Detects PowerShell commands that download and execute files from the internet, which may indicate malware installation or command-and-control communication. This rule monitors for common download cmdlets and execution patterns.',
    author: 'Microsoft',
    version: '1.2.0',
    mitre: ['Execution', 'Command and Control'],
    logSources: ['SecurityEvent', 'WindowsEvent'],
    value: 'Medium',
    state: 'Enabled',
    clientsApplied: 14,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta', 'Netflix', 'Spotify', 'Adobe', 'Oracle', 'SAP', 'Salesforce'],
    attention: 'Value Misalignment',
    action: 'Align Value',
    sourceTenantId: '5', // Google changed their value recommendation
    valueExplanation: 'Medium value due to moderate gain in detecting PowerShell-based attacks balanced against medium operational cost from analyzing all PowerShell commands.',
    kqlQuery: `// Detect suspicious PowerShell downloads
SecurityEvent
| where EventID == 4688
| where CommandLine has_any ("Invoke-WebRequest", "wget", "curl", "DownloadString", "DownloadFile")
| where CommandLine has_any ("IEX", "Invoke-Expression", "Start-Process")
| summarize Count = count() by Computer, Account, CommandLine, TimeGenerated
| where Count > 2
| project TimeGenerated, Computer, Account, CommandLine`
  },
  {
    id: '3c',
    name: 'Malicious PowerShell Cmdlets',
    description: 'Detects execution of known malicious PowerShell cmdlets often used in attacks.',
    author: 'Seculyze',
    version: '1.0.5',
    mitre: ['Execution'],
    logSources: ['SecurityEvent'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 10,
    clientNames: ['Nike', 'Adidas', 'Microsoft', 'Google', 'Tesla', 'Netflix', 'Adobe', 'SAP', 'Salesforce', 'IBM'],
    attention: 'Value Misalignment',
    action: 'Align Value',
    sourceTenantId: '1', // Nike changed their value recommendation
    valueExplanation: 'High value alert with strong detection capabilities for malicious PowerShell activity. Low false positive rate justifies the high classification.',
    kqlQuery: `// Detect malicious PowerShell cmdlets
SecurityEvent
| where EventID == 4688
| where CommandLine has_any ("Invoke-Mimikatz", "Invoke-ReflectivePEInjection", "Invoke-Shellcode")
| project TimeGenerated, Computer, Account, CommandLine`
  },
  {
    id: '4',
    name: 'Brute Force Attack against GitHub Account',
    description: 'Monitors for multiple failed sign-in attempts followed by a successful login, which may indicate a brute force attack against user accounts. This rule correlates sign-in logs with audit logs to identify potential credential stuffing or password spraying attacks.',
    author: 'Microsoft',
    version: '2.0.0',
    mitre: ['Credential Access'],
    logSources: ['SigninLogs', 'AuditLogs'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 8,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Google', 'Tesla', 'Netflix', 'Microsoft', 'Amazon'],
    attention: 'Client Misalignment',
    action: 'Align Clients',
    sourceTenantId: '1', // Nike - Some clients have it enabled, others don't
    valueExplanation: 'High gain alert that effectively detects brute force attacks with minimal false positives. Low operational cost due to efficient log correlation. Essential for protecting against credential-based attacks.',
    kqlQuery: `// Detect brute force attacks
SigninLogs
| where ResultType != 0
| where UserPrincipalName !contains "#EXT#"
| summarize
    FailedAttempts = count(),
    StartTime = min(TimeGenerated),
    EndTime = max(TimeGenerated),
    IPAddresses = make_set(IPAddress)
    by UserPrincipalName, AppDisplayName
| where FailedAttempts >= 5
| join kind=inner (
    SigninLogs
    | where ResultType == 0
    | project UserPrincipalName, SuccessTime = TimeGenerated
) on UserPrincipalName
| where SuccessTime between (StartTime .. EndTime + 1h)
| project UserPrincipalName, FailedAttempts, IPAddresses, StartTime, EndTime, SuccessTime`
  },
  {
    id: '5',
    name: 'Creation of expensive computes in Azure',
    author: 'Microsoft',
    version: '1.0.0',
    mitre: ['Defense Evasion'],
    logSources: ['AzureActivity'],
    value: 'High',
    state: 'Disabled',
    clientsApplied: 10,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta', 'Netflix', 'Spotify'],
    attention: 'Version Misalignment',
    action: 'Align Version',
    sourceTenantId: '1' // Nike
  },
  {
    id: '6',
    name: 'Dev-0228 File Path Hashes November 2021',
    author: 'Microsoft',
    version: '1.2.3',
    mitre: ['Credential Access', 'Persistence'],
    logSources: ['Syslog', 'WindowsEvent', 'SecurityEvent', 'CommonSecurityLog', 'AzureActivity'],
    value: 'High',
    state: 'Disabled',
    clientsApplied: 7,
    clientNames: ['Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta', 'Netflix', 'Spotify'],
    attention: 'Disable Aligned',
    action: 'Disable',
    sourceTenantId: '3' // Apple
  },
  {
    id: '7',
    name: 'Dev-0270 Registry IOC - September 2022',
    author: 'Microsoft',
    version: '1.0.3',
    mitre: ['Impact'],
    logSources: ['SecurityEvent', 'WindowsEvent'],
    value: 'High',
    state: 'Disabled',
    clientsApplied: 11,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta', 'Netflix', 'Spotify', 'Adobe'],
    attention: 'Version Misalignment',
    action: 'Align Version',
    sourceTenantId: '2' // Adidas
  },
  {
    id: '8',
    name: 'Suspicious PowerShell Execution',
    author: 'Seculyze',
    version: '2.1.0',
    mitre: ['Execution', 'Privilege Escalation'],
    logSources: ['WindowsEvent', 'SecurityEvent'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 14,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta', 'Netflix', 'Spotify', 'Adobe', 'Oracle', 'SAP', 'Salesforce'],
    attention: 'High Value Alert',
    action: 'Disable'
  },
  {
    id: '9',
    name: 'Unusual Network Connection',
    author: 'Microsoft',
    version: '1.5.2',
    mitre: ['Command and Control'],
    logSources: ['CommonSecurityLog', 'AzureActivity'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 6,
    clientNames: ['Nike', 'Apple', 'Google', 'Amazon', 'Tesla', 'Netflix'],
    attention: 'Client Misalignment',
    action: 'Align'
  },
  {
    id: '10',
    name: 'Lateral Movement Detection',
    author: 'Seculyze',
    version: '3.0.0',
    mitre: ['Lateral Movement', 'Credential Access'],
    logSources: ['SecurityEvent', 'WindowsEvent', 'AzureActivity'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 9,
    clientNames: ['Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Meta', 'Netflix', 'Adobe', 'Oracle'],
    attention: 'High Value Alert',
    action: 'Disable'
  },
  {
    id: '11',
    name: 'Data Exfiltration Attempt',
    author: 'Microsoft',
    version: '1.8.0',
    mitre: ['Exfiltration'],
    logSources: ['AzureActivity', 'CommonSecurityLog'],
    value: 'High',
    state: 'Disabled',
    clientsApplied: 13,
    clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta', 'Netflix', 'Spotify', 'Adobe', 'Oracle', 'SAP'],
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: '12',
    name: 'Malicious File Download',
    author: 'Seculyze',
    version: '2.2.1',
    mitre: ['Initial Access', 'Execution'],
    logSources: ['CommonSecurityLog', 'WindowsEvent'],
    value: 'Medium',
    state: 'Enabled',
    clientsApplied: 4,
    clientNames: ['Nike', 'Google', 'Tesla', 'Netflix'],
    attention: 'Medium Value Alert',
    action: 'Disable'
  }
];

// Mock Sentinel Alert Rules (simulating rules from Microsoft Sentinel)
const mockSentinelRules: AlertRule[] = [
  {
    id: 'sentinel-1',
    name: 'TI map Domain entity to DnsEvents',
    author: 'Microsoft',
    version: '1.4.2',
    mitre: ['Command and Control'],
    logSources: ['DnsEvents', 'ThreatIntelligenceIndicator'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 0,
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-2',
    name: 'Anomalous sign-in location by user account',
    author: 'Microsoft',
    version: '2.0.5',
    mitre: ['Initial Access'],
    logSources: ['SigninLogs', 'AuditLogs'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 0,
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-3',
    name: 'Mail redirect via ExO transport rule',
    author: 'Microsoft',
    version: '1.0.8',
    mitre: ['Collection', 'Exfiltration'],
    logSources: ['OfficeActivity', 'AuditLogs'],
    value: 'Medium',
    state: 'Disabled',
    clientsApplied: 0,
    attention: 'Medium Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-4',
    name: 'Rare subscription-level operations in Azure',
    author: 'Microsoft',
    version: '1.2.0',
    mitre: ['Impact'],
    logSources: ['AzureActivity'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 0,
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-5',
    name: 'NRT User added to Azure AD Privileged Groups',
    author: 'Microsoft',
    version: '1.1.0',
    mitre: ['Persistence', 'Privilege Escalation'],
    logSources: ['AuditLogs', 'AzureActivity'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 0,
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-6',
    name: 'Malicious Inbox Rule',
    author: 'Microsoft',
    version: '2.1.3',
    mitre: ['Persistence', 'Defense Evasion'],
    logSources: ['OfficeActivity', 'CloudAppEvents'],
    value: 'Medium',
    state: 'Enabled',
    clientsApplied: 0,
    attention: 'Medium Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-7',
    name: 'Mass Cloud resource deletions Time Series Anomaly',
    author: 'Microsoft',
    version: '1.0.1',
    mitre: ['Impact'],
    logSources: ['AzureActivity'],
    value: 'High',
    state: 'Disabled',
    clientsApplied: 0,
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-8',
    name: 'Failed AzureAD logons but success logon to AWS Console',
    author: 'Microsoft',
    version: '1.3.0',
    mitre: ['Defense Evasion', 'Persistence', 'Privilege Escalation'],
    logSources: ['SigninLogs', 'AWSCloudTrail'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 0,
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-9',
    name: 'Rare client observed with high reverse DNS lookup count',
    author: 'Microsoft',
    version: '1.0.0',
    mitre: ['Discovery'],
    logSources: ['DnsEvents'],
    value: 'Medium',
    state: 'Disabled',
    clientsApplied: 0,
    attention: 'Medium Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-10',
    name: 'Multiple Password Reset by user',
    author: 'Microsoft',
    version: '1.0.4',
    mitre: ['Credential Access'],
    logSources: ['AuditLogs', 'SigninLogs'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 0,
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-11',
    name: 'Known IRIDIUM IP',
    author: 'Microsoft',
    version: '2.0.0',
    mitre: ['Command and Control'],
    logSources: ['CommonSecurityLog', 'AzureActivity'],
    value: 'High',
    state: 'Enabled',
    clientsApplied: 0,
    attention: 'High Value Alert',
    action: 'Enable'
  },
  {
    id: 'sentinel-12',
    name: 'Azure DevOps Personal Access Token (PAT) misuse',
    author: 'Microsoft',
    version: '1.0.2',
    mitre: ['Credential Access'],
    logSources: ['AzureDevOpsAuditing'],
    value: 'Medium',
    state: 'Disabled',
    clientsApplied: 0,
    attention: 'Medium Value Alert',
    action: 'Enable'
  }
];

// Mock clients data for applying rules
const mockClients = [
  { id: '1', name: 'Nike' },
  { id: '2', name: 'Adidas' },
  { id: '3', name: 'Apple' },
  { id: '4', name: 'Microsoft' },
  { id: '5', name: 'Google' },
  { id: '6', name: 'Amazon' },
  { id: '7', name: 'Tesla' },
  { id: '8', name: 'Meta' },
  { id: '9', name: 'Netflix' },
  { id: '10', name: 'Spotify' },
  { id: '11', name: 'Adobe' },
  { id: '12', name: 'Oracle' },
  { id: '13', name: 'SAP' },
  { id: '14', name: 'Salesforce' },
  { id: '15', name: 'IBM' }
];

const ITEMS_PER_PAGE = 10;

export default function AlertRules() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRules, setSelectedRules] = useState<string[]>([]);
  const [sortColumn, setSortColumn] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRule, setSelectedRule] = useState<AlertRule | null>(null);
  const [alertRules, setAlertRules] = useState<AlertRule[]>(mockAlertRules);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Distribution workflow
  const [isDistributeModalOpen, setIsDistributeModalOpen] = useState(false);
  const [selectedRulesForDistribution, setSelectedRulesForDistribution] = useState<string[]>([]);
  const [selectedTargetClients, setSelectedTargetClients] = useState<string[]>([]);

  // Action sidebar state — all actions open the same sidebar, just with different mode/section
  const [actionSidebarRule, setActionSidebarRule] = useState<AlertRule | null>(null);
  const [actionSidebarMode, setActionSidebarMode] = useState<'single' | 'distribution'>('single');
  const [actionSidebarSection, setActionSidebarSection] = useState<'attentionAction' | 'valueMatrix' | 'clients' | 'query' | 'changelog' | 'comments'>('attentionAction');

  const openActionSidebar = (rule: AlertRule) => {
    const action = rule.action;
    setActionSidebarRule(rule);
    setActionSidebarMode(action === 'Value & Distribute' || action === 'Distribute' ? 'distribution' : 'single');
    setActionSidebarSection(
      action === 'Align Value' ? 'valueMatrix'
      : action === 'Align Clients' || action === 'Align' ? 'clients'
      : 'attentionAction'
    );
  };

  // Filter states
  const [selectedDate, setSelectedDate] = useState('All time');
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isFiltersDropdownOpen, setIsFiltersDropdownOpen] = useState(false);
  const [isColumnsDropdownOpen, setIsColumnsDropdownOpen] = useState(false);
  const [expandedFilterSection, setExpandedFilterSection] = useState<string | null>(null);
  
  const [selectedFilters, setSelectedFilters] = useState<{
    state: string[];
    value: string[];
    author: string[];
    attention: string[];
    newlyImported: boolean;
  }>({
    state: [],
    value: [],
    author: [],
    attention: [],
    newlyImported: false
  });

  // Card filter state
  const [cardFilter, setCardFilter] = useState<'update' | 'enable' | 'disable' | null>(null);
  const [mitreFilter, setMitreFilter] = useState<string | null>(null);
  
  // Client application modal states
  const [isApplyToClientsModalOpen, setIsApplyToClientsModalOpen] = useState(false);
  const [selectedClientsForApplication, setSelectedClientsForApplication] = useState<string[]>([]);

  // Column widths and visibility
  const [columnWidths, setColumnWidths] = useState({
    name: 350,
    author: 120,
    version: 100,
    mitre: 180,
    logSources: 180,
    value: 100,
    state: 100,
    clientsApplied: 140,
    attention: 180,
    action: 120
  });

  const [visibleColumns, setVisibleColumns] = useState({
    name: true,
    author: true,
    version: true,
    mitre: true,
    logSources: true,
    value: true,
    state: true,
    clientsApplied: true,
    attention: true,
    action: true
  });

  const [isResizing, setIsResizing] = useState(false);
  const resizingColumn = useRef<string | null>(null);
  const startX = useRef(0);
  const startWidth = useRef(0);

  // Resizing handlers
  const handleMouseDown = (column: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    resizingColumn.current = column;
    startX.current = e.clientX;
    startWidth.current = columnWidths[column as keyof typeof columnWidths];
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing || !resizingColumn.current) return;

      const diff = e.clientX - startX.current;
      const newWidth = Math.max(80, startWidth.current + diff);

      setColumnWidths(prev => ({
        ...prev,
        [resizingColumn.current!]: newWidth
      }));
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      resizingColumn.current = null;
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isResizing]);

  // Calculate attention count
  const attentionCount = useMemo(() => {
    return alertRules.filter(rule =>
      rule.attention === 'High Value Alert' ||
      rule.attention === 'Version Misalignment' ||
      rule.attention === 'Disable Aligned' ||
      rule.attention === 'New Rule' ||
      rule.attention === 'Client Misalignment' ||
      rule.attention === 'Value Misalignment'
    ).length;
  }, [alertRules]);

  const totalAttentionItems = useMemo(() => {
    return alertRules.filter(rule => rule.attention === 'High Value Alert').length;
  }, [alertRules]);
  
  const newlyImportedCount = useMemo(() => {
    return alertRules.filter(rule => rule.isNewlyImported === true).length;
  }, [alertRules]);

  // Filter data
  const filteredRules = useMemo(() => {
    return alertRules.filter(rule => {
      const matchesSearch = rule.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rule.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          rule.mitre.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesState = selectedFilters.state.length === 0 || selectedFilters.state.includes(rule.state);
      const matchesValue = selectedFilters.value.length === 0 || selectedFilters.value.includes(rule.value);
      const matchesAuthor = selectedFilters.author.length === 0 || selectedFilters.author.includes(rule.author);
      const matchesAttention = selectedFilters.attention.length === 0 || selectedFilters.attention.includes(rule.attention);
      const matchesNewlyImported = !selectedFilters.newlyImported || rule.isNewlyImported === true;

      // Filter by card action
      const matchesCardFilter = !cardFilter ||
        (cardFilter === 'update' && rule.action === 'Enable') ||
        (cardFilter === 'enable' && rule.state === 'Disabled' && rule.action === 'Enable') ||
        (cardFilter === 'disable' && rule.action === 'Disable');

      // Filter by MITRE tactic
      const matchesMitreFilter = !mitreFilter || rule.mitre.some(m => m.toLowerCase() === mitreFilter.toLowerCase());

      return matchesSearch && matchesState && matchesValue && matchesAuthor && matchesAttention && matchesNewlyImported && matchesCardFilter && matchesMitreFilter;
    });
  }, [alertRules, searchQuery, selectedFilters, cardFilter, mitreFilter]);

  // Sort data
  const sortedRules = useMemo(() => {
    if (!sortColumn) return filteredRules;

    const sorted = [...filteredRules].sort((a, b) => {
      let aVal: any = a[sortColumn];
      let bVal: any = b[sortColumn];

      if (typeof aVal === 'string') {
        return sortDirection === 'asc' 
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }
      
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });

    return sorted;
  }, [filteredRules, sortColumn, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(sortedRules.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentRules = sortedRules.slice(startIndex, endIndex);

  // Handlers
  const handleSort = (field: SortField) => {
    if (sortColumn === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: SortField) => {
    if (sortColumn !== field) {
      return <ArrowUpDown className="w-3.5 h-3.5 text-[#092E3F]/30 opacity-0 group-hover:opacity-100 transition-opacity" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp className="w-3.5 h-3.5 text-[#2A96A8]" />
      : <ArrowDown className="w-3.5 h-3.5 text-[#2A96A8]" />;
  };

  const handleSelectAll = () => {
    if (selectedRules.length === currentRules.length) {
      setSelectedRules([]);
    } else {
      setSelectedRules(currentRules.map(rule => rule.id));
    }
  };

  const handleSelectRule = (ruleId: string) => {
    setSelectedRules(prev => {
      if (prev.includes(ruleId)) {
        return prev.filter(id => id !== ruleId);
      } else {
        return [...prev, ruleId];
      }
    });
  };

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

  const clearFilters = () => {
    setSelectedFilters({
      state: [],
      value: [],
      author: [],
      attention: [],
      newlyImported: false
    });
  };

  const handleImportRules = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedData = JSON.parse(content);
        
        // Validate the imported data
        if (!Array.isArray(importedData)) {
          toast.error('Invalid file format. Expected an array of alert rules.');
          return;
        }

        // Validate each rule has required fields
        const isValid = importedData.every(rule => 
          rule.id && rule.name && rule.author && rule.version && 
          rule.mitre && rule.logSources && rule.value && rule.state && 
          typeof rule.clientsApplied === 'number' && rule.attention && rule.action
        );

        if (!isValid) {
          toast.error('Invalid alert rule format. Please check the JSON structure.');
          return;
        }

        // Merge imported rules with existing ones (avoid duplicates by id)
        setAlertRules(prevRules => {
          const existingIds = new Set(prevRules.map(rule => rule.id));
          const newRules = importedData
            .filter((rule: AlertRule) => !existingIds.has(rule.id))
            .map((rule: AlertRule) => ({ ...rule, isNewlyImported: true }));
          
          if (newRules.length === 0) {
            toast.info('No new rules to import. All rules already exist.');
            return prevRules;
          }
          
          toast.success(`Successfully imported ${newRules.length} alert rule${newRules.length > 1 ? 's' : ''}`);
          
          // Auto-filter to show newly imported rules
          setSelectedFilters(prev => ({ ...prev, newlyImported: true }));
          setCurrentPage(1);
          
          return [...prevRules, ...newRules];
        });

      } catch (error) {
        toast.error('Failed to parse JSON file. Please check the file format.');
        console.error('Import error:', error);
      }
    };

    reader.readAsText(file);
    
    // Reset the input so the same file can be imported again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const uniqueStates = ['Enabled', 'Disabled'];
  const uniqueValues = ['High', 'Medium', 'Low'];
  const uniqueAuthors = ['Microsoft', 'Seculyze', 'Custom'];
  const uniqueAttention = [
    'High Value Alert',
    'Medium Value Alert',
    'Low Value Alert',
    'Value Misalignment',
    'New Rule',
    'Client Misalignment',
    'Version Misalignment',
    'Disable Aligned'
  ];

  const dateFilterOptions = ['All time', 'Last 24 hours', 'Last 7 days', 'Last 30 days', 'Last 90 days', 'Last 6 months', 'Last year'];

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };
  
  // Handle applying newly imported rules to clients
  const handleApplyToClients = () => {
    // Get all newly imported rule IDs
    const newlyImportedRuleIds = alertRules
      .filter(rule => rule.isNewlyImported)
      .map(rule => rule.id);
    
    setSelectedRules(newlyImportedRuleIds);
    setIsApplyToClientsModalOpen(true);
  };
  
  const handleConfirmApplyToClients = () => {
    if (selectedClientsForApplication.length === 0) {
      toast.error('Please select at least one client');
      return;
    }
    
    // Apply rules to selected clients
    setAlertRules(prevRules => 
      prevRules.map(rule => {
        if (rule.isNewlyImported) {
          return {
            ...rule,
            isNewlyImported: false,
            clientsApplied: selectedClientsForApplication.length,
            clientNames: mockClients
              .filter(c => selectedClientsForApplication.includes(c.id))
              .map(c => c.name)
          };
        }
        return rule;
      })
    );
    
    toast.success(`Successfully applied ${alertRules.filter(r => r.isNewlyImported).length} rules to ${selectedClientsForApplication.length} client${selectedClientsForApplication.length > 1 ? 's' : ''}`);
    
    // Clear newly imported filter
    setSelectedFilters(prev => ({ ...prev, newlyImported: false }));
    setSelectedClientsForApplication([]);
    setIsApplyToClientsModalOpen(false);
    setSelectedRules([]);
  };
  
  const handleDismissNewlyImported = () => {
    // Remove the newly imported flag from all rules
    setAlertRules(prevRules => 
      prevRules.map(rule => ({ ...rule, isNewlyImported: false }))
    );
    
    // Clear the filter
    setSelectedFilters(prev => ({ ...prev, newlyImported: false }));
    
    toast.info('Newly imported rules moved to general list');
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(-1);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-[#092E3F]" />
              <h1 className="text-[#092E3F]">
                ALERT RULES
              </h1>
            </div>

            <div className="text-xs text-[#092E3F]/60 flex items-center gap-2">
              <RotateCw className="w-3.5 h-3.5" />
              Auto-synced from Sentinel workspaces
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 mb-6 items-stretch">
          {/* Alert Rules Score */}
          <div className="shrink-0">
            <SzCommandCard
              enabled={alertRules.filter(r => r.state === 'Enabled').length}
              total={alertRules.length}
              updateCount={alertRules.filter(r => r.action === 'Enable').length}
              enableCount={alertRules.filter(r => r.state === 'Disabled' && r.action === 'Enable').length}
              disableCount={alertRules.filter(r => r.action === 'Disable').length}
              onUpdateClick={() => {
                if (cardFilter === 'update') {
                  setCardFilter(null);
                  toast.info('Update filter cleared');
                } else {
                  setCardFilter('update');
                  toast.success('Showing rules that need updates');
                }
              }}
              onEnableClick={() => {
                if (cardFilter === 'enable') {
                  setCardFilter(null);
                  toast.info('Enable filter cleared');
                } else {
                  setCardFilter('enable');
                  toast.success('Showing rules to enable');
                }
              }}
              onDisableClick={() => {
                if (cardFilter === 'disable') {
                  setCardFilter(null);
                  toast.info('Disable filter cleared');
                } else {
                  setCardFilter('disable');
                  toast.success('Showing rules to disable');
                }
              }}
              activeFilter={cardFilter}
            />
          </div>

          {/* Needs Attention */}
          <div className="shrink-0 min-w-[200px]">
            <button
              onClick={() => {
                if (selectedFilters.attention.length > 0) {
                  setSelectedFilters(prev => ({
                    ...prev,
                    attention: []
                  }));
                  toast.info('Attention filter cleared');
                } else {
                  setSelectedFilters(prev => ({
                    ...prev,
                    attention: ['High Value Alert', 'Version Misalignment', 'Disable Aligned', 'New Rule', 'Client Misalignment']
                  }));
                  toast.success('Showing all items needing attention');
                }
              }}
              className={`bg-white rounded-[4px] border border-gray-200 p-6 hover:bg-gray-50 transition-colors cursor-pointer text-left h-full flex flex-col ${
                selectedFilters.attention.length > 0 ? 'ring-2 ring-[#2A96A8]' : ''
              }`}
            >
              <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
                <div className="[word-break:break-word] flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[14px] text-center tracking-[1.25px] uppercase whitespace-nowrap">
                  <p className="leading-[20px]">NEEDS ATTENTION</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 gap-2">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#092E3F]">{attentionCount}</div>
                </div>
                <div className="text-xs text-[#092E3F]/40 uppercase tracking-wider">Click to filter</div>
              </div>
            </button>
          </div>

          {/* MITRE Coverage */}
          <div className="flex-1 min-w-0">
            <MitreCoverageCard
              rules={alertRules}
              activeMitre={mitreFilter}
              onMitreClick={(mitre) => {
                if (mitreFilter === mitre) {
                  setMitreFilter(null);
                  toast.info('MITRE filter cleared');
                } else {
                  setMitreFilter(mitre);
                  toast.success(`Showing rules for ${mitre}`);
                }
              }}
            />
          </div>
        </div>

        {/* Active Card Filters Banner */}
        {(cardFilter || mitreFilter || selectedFilters.attention.length > 0) && (
          <div className="mb-6 bg-[#2A96A8]/10 border border-[#2A96A8]/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-sm font-medium text-[#092E3F]">Active Filters:</span>
                {cardFilter && (
                  <span className="px-3 py-1.5 bg-white rounded-lg text-sm text-[#092E3F] flex items-center gap-2">
                    {cardFilter === 'update' ? 'Update Rules' : cardFilter === 'enable' ? 'Enable Rules' : 'Disable Rules'}
                    <button
                      onClick={() => setCardFilter(null)}
                      className="hover:bg-gray-100 rounded p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {mitreFilter && (
                  <span className="px-3 py-1.5 bg-white rounded-lg text-sm text-[#092E3F] flex items-center gap-2">
                    MITRE: {mitreFilter}
                    <button
                      onClick={() => setMitreFilter(null)}
                      className="hover:bg-gray-100 rounded p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedFilters.attention.length > 0 && (
                  <span className="px-3 py-1.5 bg-white rounded-lg text-sm text-[#092E3F] flex items-center gap-2">
                    Needs Attention ({selectedFilters.attention.length} type{selectedFilters.attention.length > 1 ? 's' : ''})
                    <button
                      onClick={() => setSelectedFilters(prev => ({ ...prev, attention: [] }))}
                      className="hover:bg-gray-100 rounded p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setCardFilter(null);
                  setMitreFilter(null);
                  setSelectedFilters(prev => ({ ...prev, attention: [] }));
                  toast.info('All card filters cleared');
                }}
                className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] hover:bg-white/50 rounded-lg transition-all"
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* Newly Imported Banner */}
        {selectedFilters.newlyImported && newlyImportedCount > 0 && (
          <div className="mb-6 bg-[#2A96A8]/10 border border-[#2A96A8]/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2A96A8]/20 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-[#2A96A8]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#092E3F]">
                    {newlyImportedCount} Newly Imported Rule{newlyImportedCount > 1 ? 's' : ''}
                  </h3>
                  <p className="text-xs text-[#092E3F]/60 mt-0.5">
                    Review and apply these rules to your clients, or dismiss to move them to the general list
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDismissNewlyImported}
                  className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] hover:bg-white/50 rounded-lg transition-all"
                >
                  Dismiss
                </button>
                <button
                  onClick={handleApplyToClients}
                  className="px-4 py-2 bg-[#2A96A8] text-white text-sm font-medium rounded-lg hover:bg-[#2A96A8]/90 transition-all"
                >
                  Apply to Clients
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Distribution Action Bar */}
        {selectedRules.length > 0 && (
          <div className="mb-6 bg-gradient-to-r from-[#2A96A8]/10 to-blue-50 border border-[#2A96A8]/30 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2A96A8]/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#2A96A8]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[#092E3F]">
                    {selectedRules.length} Rule{selectedRules.length > 1 ? 's' : ''} Selected
                  </h3>
                  <p className="text-xs text-[#092E3F]/60 mt-0.5">
                    Ready to distribute to other tenant workspaces
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedRules([])}
                  className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] hover:bg-white/50 rounded-lg transition-all"
                >
                  Clear Selection
                </button>
                <button
                  onClick={() => setIsDistributeModalOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#2A96A8] text-white text-sm font-medium rounded-lg hover:bg-[#2A96A8]/90 transition-all"
                >
                  <Users className="w-4 h-4" />
                  Distribute to Clients
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Controls Bar */}
        <div className="mb-6">
          <div className="flex items-center gap-3 flex-wrap mb-4">
            {/* Search */}
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#092E3F]/40" />
              <input
                type="text"
                placeholder="Search alert rules..."
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
                        {selectedDate === option && (
                          <Check className="w-4 h-4" />
                        )}
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
                {(selectedFilters.state.length > 0 || selectedFilters.value.length > 0 || selectedFilters.author.length > 0 || selectedFilters.attention.length > 0) && (
                  <span className="ml-1 px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                    {selectedFilters.state.length + selectedFilters.value.length + selectedFilters.author.length + selectedFilters.attention.length}
                  </span>
                )}
              </button>

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

                    {/* State Filter */}
                    <div className="border-b border-gray-100">
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('state')}
                      >
                        <span className="text-sm text-[#092E3F]">State</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.state.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.state.length}
                            </span>
                          )}
                          {expandedFilterSection === 'state' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'state' && (
                        <div className="px-4 pb-2 space-y-1">
                          {uniqueStates.map((state) => (
                            <label
                              key={state}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.state.includes(state)}
                                  onChange={() => toggleFilterValue('state', state)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.state.includes(state) 
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
                              <span className="text-sm text-[#092E3F]">{state}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Value Filter */}
                    <div className="border-b border-gray-100">
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('value')}
                      >
                        <span className="text-sm text-[#092E3F]">Value</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.value.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.value.length}
                            </span>
                          )}
                          {expandedFilterSection === 'value' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'value' && (
                        <div className="px-4 pb-2 space-y-1">
                          {uniqueValues.map((value) => (
                            <label
                              key={value}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.value.includes(value)}
                                  onChange={() => toggleFilterValue('value', value)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.value.includes(value) 
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
                              <span className="text-sm text-[#092E3F]">{value}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Author Filter */}
                    <div className="border-b border-gray-100">
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('author')}
                      >
                        <span className="text-sm text-[#092E3F]">Author</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.author.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.author.length}
                            </span>
                          )}
                          {expandedFilterSection === 'author' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'author' && (
                        <div className="px-4 pb-2 space-y-1">
                          {uniqueAuthors.map((author) => (
                            <label
                              key={author}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.author.includes(author)}
                                  onChange={() => toggleFilterValue('author', author)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.author.includes(author) 
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
                              <span className="text-sm text-[#092E3F]">{author === 'Custom' ? 'Company Name' : author}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Attention Filter */}
                    <div className="border-b border-gray-100">
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('attention')}
                      >
                        <span className="text-sm text-[#092E3F]">Attention</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.attention.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.attention.length}
                            </span>
                          )}
                          {expandedFilterSection === 'attention' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'attention' && (
                        <div className="px-4 pb-2 space-y-1">
                          {uniqueAttention.map((attention) => (
                            <label
                              key={attention}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.attention.includes(attention)}
                                  onChange={() => toggleFilterValue('attention', attention)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.attention.includes(attention) 
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
                              <span className="text-sm text-[#092E3F]">{attention}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Clear Filters */}
                    <div className="p-4">
                      <button
                        onClick={() => {
                          clearFilters();
                          setIsFiltersDropdownOpen(false);
                        }}
                        className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-[#092E3F] rounded-lg text-sm transition-colors"
                      >
                        Clear All Filters
                      </button>
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

              {isColumnsDropdownOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsColumnsDropdownOpen(false)}
                  />
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-white py-2 z-50 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-xs uppercase tracking-wider text-[#092E3F]/50">Toggle Columns</p>
                    </div>
                    <div className="p-2 space-y-1">
                      {Object.entries(visibleColumns).map(([key, value]) => (
                        <label
                          key={key}
                          className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                        >
                          <div className="relative flex items-center">
                            <input
                              type="checkbox"
                              checked={value}
                              onChange={(e) => 
                                setVisibleColumns(prev => ({ ...prev, [key]: e.target.checked }))
                              }
                              className="peer sr-only"
                            />
                            <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                              <svg 
                                className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                  value 
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
                          <span className="text-sm text-[#092E3F] capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Action Buttons */}
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => toast.info('Undo functionality')}
                className="p-[10px] hover:bg-white rounded-xl transition-colors"
                title="Undo"
              >
                <Undo2 className="w-4 h-4 text-[#092E3F]/60" />
              </button>
              <button
                onClick={() => {
                  setSearchQuery('');
                  clearFilters();
                  setSelectedDate('All time');
                  toast.success('Filters reset');
                }}
                className="p-[10px] hover:bg-white rounded-xl transition-colors"
                title="Reset"
              >
                <RotateCw className="w-4 h-4 text-[#092E3F]/60" />
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between text-sm">
            <p className="text-[#092E3F]/60">
              Showing <span className="text-[#092E3F]">{startIndex + 1}-{Math.min(endIndex, sortedRules.length)}</span> of <span className="text-[#092E3F]">{sortedRules.length}</span> alert rules
            </p>
            {selectedRules.length > 0 && (
              <p className="text-[#2A96A8]">
                {selectedRules.length} selected
              </p>
            )}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-4 py-3 text-left bg-white w-12">
                    <input
                      type="checkbox"
                      checked={selectedRules.length === currentRules.length && currentRules.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-2 border-gray-300 text-[#2A96A8] focus:ring-[#2A96A8] focus:ring-offset-0 cursor-pointer"
                    />
                  </th>
                  {visibleColumns.name && (
                    <th 
                      className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                      style={{ width: `${columnWidths.name}px`, minWidth: `${columnWidths.name}px`, maxWidth: `${columnWidths.name}px` }}
                      onClick={() => handleSort('name')}
                    >
                      <div className="flex items-center gap-2">
                        Name
                        {getSortIcon('name')}
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('name')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.author && (
                    <th 
                      className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                      style={{ width: `${columnWidths.author}px`, minWidth: `${columnWidths.author}px`, maxWidth: `${columnWidths.author}px` }}
                      onClick={() => handleSort('author')}
                    >
                      <div className="flex items-center gap-2">
                        Author
                        {getSortIcon('author')}
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('author')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.version && (
                    <th 
                      className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                      style={{ width: `${columnWidths.version}px`, minWidth: `${columnWidths.version}px`, maxWidth: `${columnWidths.version}px` }}
                      onClick={() => handleSort('version')}
                    >
                      <div className="flex items-center gap-2">
                        Version
                        {getSortIcon('version')}
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('version')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.mitre && (
                    <th 
                      className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none"
                      style={{ width: `${columnWidths.mitre}px`, minWidth: `${columnWidths.mitre}px`, maxWidth: `${columnWidths.mitre}px` }}
                    >
                      <div className="flex items-center gap-2">
                        MITRE
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('mitre')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.logSources && (
                    <th 
                      className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none"
                      style={{ width: `${columnWidths.logSources}px`, minWidth: `${columnWidths.logSources}px`, maxWidth: `${columnWidths.logSources}px` }}
                    >
                      <div className="flex items-center gap-2">
                        Log Sources
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('logSources')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.value && (
                    <th 
                      className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                      style={{ width: `${columnWidths.value}px`, minWidth: `${columnWidths.value}px`, maxWidth: `${columnWidths.value}px` }}
                      onClick={() => handleSort('value')}
                    >
                      <div className="flex items-center gap-2">
                        Value
                        {getSortIcon('value')}
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('value')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.state && (
                    <th 
                      className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                      style={{ width: `${columnWidths.state}px`, minWidth: `${columnWidths.state}px`, maxWidth: `${columnWidths.state}px` }}
                      onClick={() => handleSort('state')}
                    >
                      <div className="flex items-center gap-2">
                        State
                        {getSortIcon('state')}
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('state')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.clientsApplied && (
                    <th 
                      className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                      style={{ width: `${columnWidths.clientsApplied}px`, minWidth: `${columnWidths.clientsApplied}px`, maxWidth: `${columnWidths.clientsApplied}px` }}
                      onClick={() => handleSort('clientsApplied')}
                    >
                      <div className="flex items-center gap-2">
                        Clients Applied
                        {getSortIcon('clientsApplied')}
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('clientsApplied')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.attention && (
                    <th 
                      className="px-4 py-3 text-right text-xs uppercase tracking-wider text-[#092E3F]/70 bg-[#e5f2f4] relative group select-none cursor-pointer hover:bg-[#d0e8ec] transition-colors"
                      style={{ width: `${columnWidths.attention}px`, minWidth: `${columnWidths.attention}px`, maxWidth: `${columnWidths.attention}px` }}
                      onClick={() => handleSort('attention')}
                    >
                      <div className="flex items-center justify-end gap-2">
                        Attention
                        {getSortIcon('attention')}
                      </div>
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                        onMouseDown={handleMouseDown('attention')}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                      </div>
                    </th>
                  )}
                  {visibleColumns.action && (
                    <th 
                      className="px-4 py-3 text-center text-xs uppercase tracking-wider text-[#092E3F]/70 bg-[#e5f2f4] select-none"
                      style={{ width: `${columnWidths.action}px`, minWidth: `${columnWidths.action}px`, maxWidth: `${columnWidths.action}px` }}
                    >
                      Action
                    </th>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentRules.map((rule) => (
                  <tr
                    key={rule.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors group cursor-pointer"
                    onClick={() => {
                      // Open alert rule detail sidebar
                      setSelectedRule(rule);
                    }}
                  >
                    <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedRules.includes(rule.id)}
                        onChange={() => handleSelectRule(rule.id)}
                        className="w-4 h-4 rounded border-2 border-gray-300 text-[#2A96A8] focus:ring-[#2A96A8] focus:ring-offset-0 cursor-pointer"
                      />
                    </td>
                    {visibleColumns.name && (
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1.5">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="text-sm text-[#092E3F] cursor-pointer hover:text-[#2A96A8] transition-colors truncate">
                                  {rule.name}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent side="top" className="max-w-sm">
                                <p>{rule.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          <div className="flex items-center gap-2">
                            
                          </div>
                        </div>
                      </td>
                    )}
                    {visibleColumns.author && (
                      <td className="px-4 py-3">
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
                          <span className="text-sm text-[#092E3F]">{rule.author === 'Custom' ? 'Company Name' : rule.author}</span>
                        </div>
                      </td>
                    )}
                    {visibleColumns.version && (
                      <td className="px-4 py-3">
                        <span className="text-sm text-[#092E3F]">{rule.version}</span>
                      </td>
                    )}
                    {visibleColumns.mitre && (
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 flex-wrap">
                          <span className="px-2 py-0.5 bg-blue-100/80 text-blue-500 text-xs rounded">
                            {rule.mitre[0]}
                          </span>
                          {rule.mitre.length > 1 && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="px-2 py-0.5 bg-gray-100/80 text-gray-500 text-xs rounded cursor-pointer hover:bg-gray-200 transition-colors">
                                    +{rule.mitre.length - 1}
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="flex flex-col gap-1">
                                    {rule.mitre.slice(1).map((mitre, idx) => (
                                      <span key={idx} className="text-xs">{mitre}</span>
                                    ))}
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </td>
                    )}
                    {visibleColumns.logSources && (
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1 flex-wrap">
                          <span className="px-2 py-0.5 bg-emerald-100/70 text-emerald-600 text-xs rounded">
                            {rule.logSources[0]}
                          </span>
                          {rule.logSources.length > 1 && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span className="px-2 py-0.5 bg-gray-100/80 text-gray-500 text-xs rounded cursor-pointer hover:bg-gray-200 transition-colors">
                                    +{rule.logSources.length - 1}
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <div className="flex flex-col gap-1">
                                    {rule.logSources.slice(1).map((source, idx) => (
                                      <span key={idx} className="text-xs">{source}</span>
                                    ))}
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </td>
                    )}
                    {visibleColumns.value && (
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          rule.value === 'High' 
                            ? 'bg-[#2A96A8] text-white'
                            : rule.value === 'Medium'
                            ? 'bg-[#2A96A8]/30 text-[#2A96A8]'
                            : 'bg-[#2A96A8]/10 text-[#2A96A8]/60'
                        }`}>
                          {rule.value}
                        </span>
                      </td>
                    )}
                    {visibleColumns.state && (
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          rule.state === 'Enabled'
                            ? 'bg-blue-100/80 text-blue-500'
                            : 'bg-gray-100/80 text-gray-500'
                        }`}>
                          {rule.state}
                        </span>
                      </td>
                    )}
                    {visibleColumns.clientsApplied && (
                      <td className="px-4 py-3">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-2 cursor-pointer hover:text-[#2A96A8] transition-colors">
                                <Users className="w-4 h-4 text-[#092E3F]/60" />
                                <span className="text-sm text-[#092E3F]">
                                  {rule.clientsApplied}
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-xs">
                              <div>
                                <p className="mb-1">Applied to {rule.clientsApplied} clients:</p>
                                <div className="text-xs space-y-0.5">
                                  {rule.clientNames?.slice(0, 10).map((name, idx) => (
                                    <div key={idx}>• {name}</div>
                                  ))}
                                  {rule.clientNames && rule.clientNames.length > 10 && (
                                    <div className="text-gray-400 mt-1">
                                      +{rule.clientNames.length - 10} more
                                    </div>
                                  )}
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                    )}
                    {visibleColumns.attention && (
                      <td className="px-4 py-3 bg-[#f8fdfe]">
                        <div className="flex justify-end">
                          <span className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap ${
                            rule.attention === 'High Value Alert'
                              ? 'bg-[#b73520] text-white'
                              : rule.attention === 'Medium Value Alert'
                              ? 'bg-[#ffdbb4] text-[#092E3F]'
                              : rule.attention === 'Low Value Alert'
                              ? 'bg-[#fff9a8] text-[#092E3F]'
                              : rule.attention === 'Version Misalignment'
                              ? 'bg-orange-100 text-orange-700'
                              : rule.attention === 'Disable Aligned'
                              ? 'bg-emerald-100 text-emerald-700'
                              : rule.attention === 'New Rule'
                              ? 'bg-blue-100 text-blue-700'
                              : rule.attention === 'Client Misalignment'
                              ? 'bg-purple-100 text-purple-700'
                              : rule.attention === 'Value Misalignment'
                              ? 'bg-pink-100 text-pink-600'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {rule.attention}
                          </span>
                        </div>
                      </td>
                    )}
                    {visibleColumns.action && (
                      <td className="px-4 py-3 bg-[#f8fdfe]" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openActionSidebar(rule);
                            }}
                            className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                              rule.action === 'Enable'
                                ? 'bg-emerald-100/70 text-emerald-600 hover:bg-emerald-200'
                                : rule.action === 'Disable'
                                ? 'bg-gray-100/80 text-gray-500 hover:bg-gray-200'
                                : rule.action === 'Align'
                                ? 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                                : rule.action === 'Align Version'
                                ? 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                                : rule.action === 'Align Value'
                                ? 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                                : rule.action === 'Distribute'
                                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                : rule.action === 'Value & Distribute'
                                ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                                : 'bg-gray-100/80 text-gray-500 hover:bg-gray-200'
                            }`}
                          >
                            {rule.action}
                          </button>
                          <button
                            className="p-1 hover:bg-gray-200 rounded transition-colors opacity-0 group-hover:opacity-100"
                            onClick={(e) => {
                              e.stopPropagation();
                              toast.info(`More actions for: ${rule.name}`);
                            }}
                          >
                            <MoreHorizontal className="w-4 h-4 text-[#092E3F]/60" />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {currentRules.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">No alert rules found</p>
              <p className="text-sm text-gray-400 mt-1">Try adjusting your filters</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-white rounded-xl hover:border-[#2A96A8] transition-all text-sm text-[#092E3F] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-white"
            >
              Previous
            </button>

            <div className="flex items-center gap-2">
              {getPageNumbers().map((page, index) => (
                page === -1 ? (
                  <span key={`ellipsis-${index}`} className="px-3 py-2 text-[#092E3F]/40">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`px-3 py-2 rounded-xl text-sm transition-all ${
                      currentPage === page
                        ? 'bg-[#2A96A8] text-white'
                        : 'bg-white text-[#092E3F] hover:bg-gray-50 border border-white hover:border-[#2A96A8]'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-white rounded-xl hover:border-[#2A96A8] transition-all text-sm text-[#092E3F] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-white"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Alert Rule Sidebar */}
      {selectedRule && (
        <AlertRuleSidebar
          rule={selectedRule}
          onClose={() => setSelectedRule(null)}
        />
      )}

      {/* Action Sidebar — all action buttons open this */}
      {actionSidebarRule && (
        <AlertRuleSidebar
          rule={actionSidebarRule}
          mode={actionSidebarMode}
          sourceTenantId={actionSidebarRule.sourceTenantId}
          initialSection={actionSidebarSection}
          onClose={() => setActionSidebarRule(null)}
          onDistribute={() => setActionSidebarRule(null)}
        />
      )}

      {/* Distribution Sidebar (bulk distribute from selection bar) */}
      {isDistributeModalOpen && (
        <AlertRuleSidebar
          mode="distribution"
          rules={alertRules.filter(r => selectedRules.includes(r.id))}
          onClose={() => {
            setIsDistributeModalOpen(false);
          }}
          onDistribute={(targetClientIds) => {
            setIsDistributeModalOpen(false);
            setSelectedRules([]);
          }}
        />
      )}

      {/* Apply to Clients Modal */}
      {isApplyToClientsModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-[#092E3F]">Apply Rules to Clients</h2>
                <p className="text-sm text-[#092E3F]/60 mt-1">
                  Select which clients to apply {newlyImportedCount} newly imported rule{newlyImportedCount > 1 ? 's' : ''} to
                </p>
              </div>
              <button
                onClick={() => {
                  setIsApplyToClientsModalOpen(false);
                  setSelectedClientsForApplication([]);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#092E3F]/60" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-6">
              {/* Select All Clients */}
              <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg mb-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedClientsForApplication.length === mockClients.length}
                    onChange={() => {
                      if (selectedClientsForApplication.length === mockClients.length) {
                        setSelectedClientsForApplication([]);
                      } else {
                        setSelectedClientsForApplication(mockClients.map(c => c.id));
                      }
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-[#2A96A8] focus:ring-[#2A96A8] cursor-pointer"
                  />
                  <span className="text-sm font-medium text-[#092E3F]">
                    Select All Clients
                  </span>
                </label>
                {selectedClientsForApplication.length > 0 && (
                  <span className="text-sm text-[#2A96A8] font-medium">
                    {selectedClientsForApplication.length} selected
                  </span>
                )}
              </div>

              {/* Clients Grid */}
              <div className="grid grid-cols-2 gap-3">
                {mockClients.map((client) => (
                  <label
                    key={client.id}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#2A96A8] hover:bg-[#2A96A8]/5 transition-all cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedClientsForApplication.includes(client.id)}
                      onChange={() => {
                        setSelectedClientsForApplication(prev => {
                          if (prev.includes(client.id)) {
                            return prev.filter(id => id !== client.id);
                          } else {
                            return [...prev, client.id];
                          }
                        });
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-[#2A96A8] focus:ring-[#2A96A8] cursor-pointer"
                    />
                    <div className="flex items-center gap-2 min-w-0">
                      <Users className="w-4 h-4 text-[#092E3F]/60 group-hover:text-[#2A96A8] transition-colors flex-shrink-0" />
                      <span className="text-sm font-medium text-[#092E3F] group-hover:text-[#2A96A8] transition-colors truncate">
                        {client.name}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsApplyToClientsModalOpen(false);
                  setSelectedClientsForApplication([]);
                }}
                className="px-4 py-2 text-sm text-[#092E3F]/60 hover:text-[#092E3F] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmApplyToClients}
                disabled={selectedClientsForApplication.length === 0}
                className="px-6 py-2 bg-[#2A96A8] text-white rounded-xl hover:bg-[#2A96A8]/90 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Apply to {selectedClientsForApplication.length > 0 ? `${selectedClientsForApplication.length} ` : ''}Client{selectedClientsForApplication.length !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Apply to Clients Modal */}
      {isApplyToClientsModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-[#092E3F]">Apply Rules to Clients</h2>
                <p className="text-sm text-[#092E3F]/60 mt-1">
                  Select which clients to apply {newlyImportedCount} newly imported rule{newlyImportedCount > 1 ? 's' : ''} to
                </p>
              </div>
              <button
                onClick={() => {
                  setIsApplyToClientsModalOpen(false);
                  setSelectedClientsForApplication([]);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-[#092E3F]/60" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-auto p-6">
              {/* Select All Clients */}
              <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg mb-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedClientsForApplication.length === mockClients.length}
                    onChange={() => {
                      if (selectedClientsForApplication.length === mockClients.length) {
                        setSelectedClientsForApplication([]);
                      } else {
                        setSelectedClientsForApplication(mockClients.map(c => c.id));
                      }
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-[#2A96A8] focus:ring-[#2A96A8] cursor-pointer"
                  />
                  <span className="text-sm font-medium text-[#092E3F]">
                    Select All Clients
                  </span>
                </label>
                {selectedClientsForApplication.length > 0 && (
                  <span className="text-sm text-[#2A96A8] font-medium">
                    {selectedClientsForApplication.length} selected
                  </span>
                )}
              </div>

              {/* Clients Grid */}
              <div className="grid grid-cols-2 gap-3">
                {mockClients.map((client) => (
                  <label
                    key={client.id}
                    className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-[#2A96A8] hover:bg-[#2A96A8]/5 transition-all cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedClientsForApplication.includes(client.id)}
                      onChange={() => {
                        setSelectedClientsForApplication(prev => {
                          if (prev.includes(client.id)) {
                            return prev.filter(id => id !== client.id);
                          } else {
                            return [...prev, client.id];
                          }
                        });
                      }}
                      className="w-4 h-4 rounded border-gray-300 text-[#2A96A8] focus:ring-[#2A96A8] cursor-pointer"
                    />
                    <div className="flex items-center gap-2 min-w-0">
                      <Users className="w-4 h-4 text-[#092E3F]/60 group-hover:text-[#2A96A8] transition-colors flex-shrink-0" />
                      <span className="text-sm font-medium text-[#092E3F] group-hover:text-[#2A96A8] transition-colors truncate">
                        {client.name}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between p-6 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsApplyToClientsModalOpen(false);
                  setSelectedClientsForApplication([]);
                }}
                className="px-4 py-2 text-sm text-[#092E3F]/60 hover:text-[#092E3F] transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmApplyToClients}
                disabled={selectedClientsForApplication.length === 0}
                className="px-6 py-2 bg-[#2A96A8] text-white rounded-xl hover:bg-[#2A96A8]/90 transition-all text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Apply to {selectedClientsForApplication.length > 0 ? `${selectedClientsForApplication.length} ` : ''}Client{selectedClientsForApplication.length !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
