import { useState, useEffect } from 'react';
import { 
  X, 
  Calendar,
  User,
  Building2,
  Shield,
  AlertTriangle,
  Clock,
  MessageSquare,
  FileText,
  ChevronDown,
  ChevronUp,
  UserPlus,
  Edit,
  Bell,
  Ticket,
  Play,
  ExternalLink,
  Copy,
  Check,
  Send,
  Target,
  Zap,
  Activity,
  Monitor,
  Globe,
  Mail,
  Terminal,
  FileCheck,
  Maximize2,
  Minimize2,
  Tag,
  Plus,
  Hash,
  Link,
  Sparkles,
  Ban,
  KeyRound,
  LogOut,
  UserX,
  ShieldAlert,
  Loader2,
  Clipboard,
  Search
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type IncidentStatus = 'New' | 'Active' | 'Closed';
type SeverityLevel = 'Critical' | 'High' | 'Medium' | 'Low';
type AttentionType = 'New Alerts' | 'Waiting on customer' | 'New logs';
type Classification = 'TruePositive' | 'FalsePositive' | 'BenignPositive' | 'Undetermined';

interface RecommendedAction {
  id: string;
  action: string;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  icon: string;
  description: string;
  target?: string;
}

interface Alert {
  id: string;
  name: string;
  severity: SeverityLevel;
  timestamp: string;
  source: string;
  description: string;
}

interface TimelineEvent {
  id: string;
  type: 'created' | 'status_change' | 'assigned' | 'comment' | 'alert' | 'playbook';
  timestamp: string;
  user?: string;
  description: string;
  details?: string;
}

interface Comment {
  id: string;
  user: string;
  role: string;
  timestamp: string;
  content: string;
}

interface LogEntry {
  id: string;
  timestamp: string;
  source: string;
  event: string;
  ip?: string;
  user?: string;
  severity?: 'Critical' | 'High' | 'Medium' | 'Low';
  rawData?: Record<string, any>;
}

interface IncidentDetailProps {
  incident: {
    id: string;
    client: { name: string; logo: string };
    incident: string;
    status: IncidentStatus;
    type: string;
    created: string;
    entities: number;
    logs: number;
    severity: SeverityLevel;
    owner: { name: string; role: string } | null;
    attention: AttentionType[];
    tags?: string[];
    classification?: Classification;
  };
  onClose: () => void;
  onUpdateTags?: (incidentId: string, tags: string[]) => void;
}

export default function IncidentDetail({ incident, onClose, onUpdateTags }: IncidentDetailProps) {
  const [expandedSections, setExpandedSections] = useState({
    alerts: true,
    timeline: true,
    comments: true,
    logs: false,
    mitre: true,
    entities: true,
    tags: true,
    analysis: true
  });
  const [newComment, setNewComment] = useState('');
  const [copiedLog, setCopiedLog] = useState<string | null>(null);
  const [selectedLog, setSelectedLog] = useState<LogEntry | null>(null);
  const [isFullScreenLogs, setIsFullScreenLogs] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [assignToAnalyst, setAssignToAnalyst] = useState<string>('');
  const [newStatus, setNewStatus] = useState<IncidentStatus>('Active');
  const [newSeverity, setNewSeverity] = useState<SeverityLevel>('Medium');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [selectedPlaybook, setSelectedPlaybook] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showSeverityDropdown, setShowSeverityDropdown] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<IncidentStatus>(incident.status);
  const [currentSeverity, setCurrentSeverity] = useState<SeverityLevel>(incident.severity);
  const [localTags, setLocalTags] = useState<string[]>(incident.tags || []);
  const [newTag, setNewTag] = useState('');
  const [classification, setClassification] = useState<Classification>(incident.classification || 'TruePositive');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [recommendedActions, setRecommendedActions] = useState<RecommendedAction[]>([]);
  const [logSearchQuery, setLogSearchQuery] = useState('');
  const [showQueryInterface, setShowQueryInterface] = useState(false);
  const [queryText, setQueryText] = useState('');
  const [activeQuery, setActiveQuery] = useState('');

  // Mock data for detailed view
  const alerts: Alert[] = [
    {
      id: 'ALT-001',
      name: 'Suspicious PowerShell Execution',
      severity: 'Critical',
      timestamp: '2024-01-15 14:23:45',
      source: 'EDR - Endpoint 192.168.1.45',
      description: 'PowerShell executed with encoded command from unusual process'
    },
    {
      id: 'ALT-002',
      name: 'Unusual Outbound Connection',
      severity: 'High',
      timestamp: '2024-01-15 14:25:12',
      source: 'Firewall - Office Network',
      description: 'Connection to suspicious IP address in known malicious range'
    },
    {
      id: 'ALT-003',
      name: 'File Modification Detected',
      severity: 'Medium',
      timestamp: '2024-01-15 14:27:33',
      source: 'EDR - Endpoint 192.168.1.45',
      description: 'Multiple system files modified in short timeframe'
    }
  ];

  const timeline: TimelineEvent[] = [
    {
      id: 'TL-001',
      type: 'created',
      timestamp: '2024-01-15 14:23:00',
      description: 'Incident created',
      details: 'Automatically generated from correlation engine'
    },
    {
      id: 'TL-002',
      type: 'alert',
      timestamp: '2024-01-15 14:23:45',
      description: 'Alert added: Suspicious PowerShell Execution',
      details: 'Severity: Critical'
    },
    {
      id: 'TL-003',
      type: 'assigned',
      timestamp: '2024-01-15 14:30:00',
      user: 'Sarah Mitchell',
      description: 'Incident assigned to Sarah Mitchell',
      details: 'Auto-assigned based on rotation schedule'
    },
    {
      id: 'TL-004',
      type: 'status_change',
      timestamp: '2024-01-15 14:35:00',
      user: 'Sarah Mitchell',
      description: 'Status changed from New to Active',
    },
    {
      id: 'TL-005',
      type: 'comment',
      timestamp: '2024-01-15 14:40:00',
      user: 'Sarah Mitchell',
      description: 'Comment added',
      details: 'Investigating potential malware infection'
    },
    {
      id: 'TL-006',
      type: 'playbook',
      timestamp: '2024-01-15 14:45:00',
      user: 'Sarah Mitchell',
      description: 'Malware Response playbook started',
      details: 'Endpoint isolation in progress'
    }
  ];

  const comments: Comment[] = [
    {
      id: 'COM-001',
      user: 'Sarah Mitchell',
      role: 'Senior Analyst',
      timestamp: '2024-01-15 14:40:00',
      content: 'Investigating potential malware infection. Initial analysis shows PowerShell was executed with encoded commands. Isolating endpoint and running forensic analysis.'
    },
    {
      id: 'COM-002',
      user: 'James Rodriguez',
      role: 'SOC Analyst',
      timestamp: '2024-01-15 15:15:00',
      content: 'Forensic analysis complete. Found evidence of Cobalt Strike beacon. Malware hash added to blocklist across all customer endpoints.'
    }
  ];

  const logs: LogEntry[] = [
    {
      id: 'LOG-001',
      timestamp: '2024-01-15 14:23:45',
      source: 'Windows Security',
      event: 'Process Creation: powershell.exe -enc SGVsbG8gV29ybGQ=',
      ip: '192.168.1.45',
      user: 'SYSTEM',
      severity: 'High',
      rawData: {
        EventID: 4688,
        EventType: 'ProcessCreation',
        Computer: 'DESKTOP-A45FG21',
        ProcessName: 'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
        CommandLine: 'powershell.exe -enc SGVsbG8gV29ybGQ=',
        ParentProcessName: 'C:\\Windows\\explorer.exe',
        User: 'SYSTEM',
        LogonID: '0x3e7',
        SourceIP: '192.168.1.45',
        DestinationIP: null,
        Port: null,
        Protocol: null,
        Action: 'Allowed',
        RuleName: null
      }
    },
    {
      id: 'LOG-002',
      timestamp: '2024-01-15 14:25:12',
      source: 'Firewall',
      event: 'Outbound connection blocked to 185.220.101.45:443',
      ip: '192.168.1.45',
      severity: 'Critical',
      rawData: {
        EventID: 5157,
        EventType: 'NetworkConnection',
        Computer: 'DESKTOP-A45FG21',
        ProcessName: 'C:\\Windows\\System32\\svchost.exe',
        SourceIP: '192.168.1.45',
        SourcePort: 49823,
        DestinationIP: '185.220.101.45',
        DestinationPort: 443,
        Protocol: 'TCP',
        Action: 'Blocked',
        RuleName: 'Suspicious_Outbound_Block',
        Direction: 'Outbound',
        Application: 'System'
      }
    },
    {
      id: 'LOG-003',
      timestamp: '2024-01-15 14:27:33',
      source: 'File Integrity Monitor',
      event: 'File modified: C:\\Windows\\System32\\drivers\\etc\\hosts',
      ip: '192.168.1.45',
      user: 'SYSTEM',
      severity: 'Medium',
      rawData: {
        EventID: 4663,
        EventType: 'FileModification',
        Computer: 'DESKTOP-A45FG21',
        FilePath: 'C:\\Windows\\System32\\drivers\\etc\\hosts',
        AccessMask: '0x2',
        ProcessName: 'C:\\Windows\\System32\\notepad.exe',
        User: 'SYSTEM',
        PreviousHash: 'a3e5f8c9d2b1e6f4c8a7b3d5e1f9c2a4',
        NewHash: 'b4f6g9d0e3c2f7a5d9b8e4c1f0d3a6b5',
        FileSize: 1024,
        Operation: 'WriteData'
      }
    },
    {
      id: 'LOG-004',
      timestamp: '2024-01-15 14:28:01',
      source: 'Windows Security',
      event: 'Registry modification: HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run',
      ip: '192.168.1.45',
      user: 'SYSTEM',
      severity: 'High',
      rawData: {
        EventID: 4657,
        EventType: 'RegistryModification',
        Computer: 'DESKTOP-A45FG21',
        RegistryPath: 'HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run',
        ValueName: 'WindowsUpdate',
        ValueType: 'REG_SZ',
        NewValue: 'C:\\Users\\Public\\update.exe',
        OldValue: null,
        ProcessName: 'C:\\Windows\\regedit.exe',
        User: 'SYSTEM',
        Operation: 'SetValue'
      }
    },
    {
      id: 'LOG-005',
      timestamp: '2024-01-15 14:30:22',
      source: 'Azure AD',
      event: 'Failed login attempt from unusual location',
      ip: '203.45.67.89',
      user: 'john.doe@acmecorp.com',
      severity: 'Medium',
      rawData: {
        EventID: 50126,
        EventType: 'SignInActivity',
        User: 'john.doe@acmecorp.com',
        Application: 'Office 365',
        IPAddress: '203.45.67.89',
        Location: 'Moscow, Russia',
        DeviceInfo: 'Windows 10 - Chrome 120.0.6099.129',
        Status: 'Failed',
        FailureReason: 'InvalidPasswordError',
        Timestamp: '2024-01-15T14:30:22Z',
        CorrelationId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
      }
    },
    {
      id: 'LOG-006',
      timestamp: '2024-01-15 14:32:55',
      source: 'EDR',
      event: 'Suspicious process injection detected',
      ip: '192.168.1.45',
      user: 'SYSTEM',
      severity: 'Critical',
      rawData: {
        EventID: 8,
        EventType: 'CreateRemoteThread',
        Computer: 'DESKTOP-A45FG21',
        SourceProcessName: 'C:\\Windows\\System32\\svchost.exe',
        SourceProcessId: 2348,
        TargetProcessName: 'C:\\Windows\\System32\\lsass.exe',
        TargetProcessId: 652,
        StartAddress: '0x7FFE2A3B1000',
        ThreadId: 4532,
        User: 'SYSTEM',
        Technique: 'ProcessInjection',
        MitreTactic: 'DefenseEvasion'
      }
    },
    {
      id: 'LOG-007',
      timestamp: '2024-01-15 14:35:18',
      source: 'DNS',
      event: 'Query to known C2 domain blocked',
      ip: '192.168.1.45',
      severity: 'High',
      rawData: {
        EventID: 22,
        EventType: 'DNSQuery',
        Computer: 'DESKTOP-A45FG21',
        QueryName: 'malicious-c2-server.evil.com',
        QueryType: 'A',
        QueryResult: 'BLOCKED',
        ProcessName: 'C:\\Windows\\System32\\svchost.exe',
        SourceIP: '192.168.1.45',
        DNSServer: '8.8.8.8',
        ThreatCategory: 'C2Communication',
        BlockReason: 'ThreatIntelligenceMatch'
      }
    },
    {
      id: 'LOG-008',
      timestamp: '2024-01-15 14:38:42',
      source: 'Email Gateway',
      event: 'Phishing email delivered to mailbox',
      user: 'john.doe@acmecorp.com',
      severity: 'Medium',
      rawData: {
        EventID: 1001,
        EventType: 'EmailDelivery',
        Recipient: 'john.doe@acmecorp.com',
        Sender: 'noreply@fake-microsoft.com',
        Subject: 'Urgent: Verify Your Account',
        AttachmentCount: 1,
        AttachmentNames: ['invoice.pdf.exe'],
        AttachmentHashes: ['c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0'],
        PhishingScore: 87,
        MalwareDetected: true,
        Action: 'Quarantined',
        Timestamp: '2024-01-15T14:38:42Z'
      }
    }
  ];

  const mitreAttacks = [
    { id: 'T1059.001', name: 'PowerShell', tactic: 'Execution' },
    { id: 'T1071.001', name: 'Web Protocols', tactic: 'Command and Control' },
    { id: 'T1547.001', name: 'Registry Run Keys', tactic: 'Persistence' },
    { id: 'T1027', name: 'Obfuscated Files or Information', tactic: 'Defense Evasion' }
  ];

  const entities = [
    { name: 'DESKTOP-A45FG21', type: 'Host', score: null },
    { name: '192.168.1.45', type: 'IP', score: 85 },
    { name: 'john.doe@acmecorp.com', type: 'Mailbox', score: null },
    { name: 'powershell.exe', type: 'Process', score: 72 },
    { name: 'a3e5f8c9d2b1...', type: 'FileHash', score: 91 },
    { name: 'ACME\\\\jdoe', type: 'Account', score: null }
  ];

  // Auto-analyze TruePositives on mount
  useEffect(() => {
    if (classification === 'TruePositive' && !analysisComplete) {
      performAnalysis();
    }
  }, []);

  // Initialize selectedLog when logs section is expanded
  useEffect(() => {
    if (expandedSections.logs && !selectedLog && logs.length > 0) {
      setSelectedLog(logs[0]);
    }
  }, [expandedSections.logs]);

  // Perform analysis
  const performAnalysis = () => {
    setIsAnalyzing(true);
    const isReanalysis = analysisComplete;
    
    // Simulate AI analysis
    setTimeout(() => {
      const actions: RecommendedAction[] = [
        {
          id: 'act-1',
          action: 'Block-AADUser',
          priority: 'Critical',
          icon: 'userx',
          description: 'Block compromised Azure AD user account to prevent further unauthorized access',
          target: 'john.doe@acmecorp.com'
        },
        {
          id: 'act-2',
          action: 'Disable user',
          priority: 'Critical',
          icon: 'userx',
          description: 'Disable user account in Active Directory to revoke all access permissions',
          target: 'ACME\\jdoe'
        },
        {
          id: 'act-3',
          action: 'Revoke-AADSignInSessions',
          priority: 'High',
          icon: 'logout',
          description: 'Revoke all active Azure AD sign-in sessions for the compromised account',
          target: 'john.doe@acmecorp.com'
        },
        {
          id: 'act-4',
          action: 'Confirm-EntraIDRiskyUser',
          priority: 'High',
          icon: 'shieldalert',
          description: 'Confirm user as risky in Entra ID to trigger additional security measures',
          target: 'john.doe@acmecorp.com'
        },
        {
          id: 'act-5',
          action: 'Isolate-MDEMachine',
          priority: 'Critical',
          icon: 'shieldalert',
          description: 'Isolate endpoint from network using Microsoft Defender for Endpoint',
          target: 'DESKTOP-A45FG21'
        },
        {
          id: 'act-6',
          action: 'Make incident in ITSM',
          priority: 'Medium',
          icon: 'clipboard',
          description: 'Create incident ticket in IT Service Management system for tracking',
          target: 'INC-2024-0245'
        },
        {
          id: 'act-7',
          action: 'Block IP In infrastructure',
          priority: 'Critical',
          icon: 'ban',
          description: 'Block malicious IP address at firewall and infrastructure level',
          target: '192.168.1.45'
        }
      ];
      
      setRecommendedActions(actions);
      setAnalysisComplete(true);
      setIsAnalyzing(false);
      
      if (isReanalysis) {
        toast.success('Re-analysis complete - Recommendations updated');
      } else {
        toast.success('Analysis complete - Recommended actions identified');
      }
    }, 2500);
  };

  const handleManualAnalyze = () => {
    performAnalysis();
  };

  // Handler functions
  const handleAssign = () => {
    if (!assignToAnalyst) return;
    toast.success(`Incident assigned to ${assignToAnalyst}`);
    setActiveModal(null);
    setAssignToAnalyst('');
  };

  const handleChangeStatus = () => {
    toast.success(`Status changed to ${newStatus} with ${newSeverity} severity`);
    setActiveModal(null);
  };

  const handleNotify = () => {
    if (!notificationMessage) return;
    toast.success('Customer notification sent successfully');
    setActiveModal(null);
    setNotificationMessage('');
  };

  const handleCreateTicket = () => {
    toast.success('Support ticket created successfully');
    setActiveModal(null);
  };

  const handleRunPlaybook = () => {
    if (!selectedPlaybook) return;
    toast.success(`${selectedPlaybook} playbook started`);
    setActiveModal(null);
    setSelectedPlaybook('');
  };

  const handleOpenSentinel = () => {
    toast.success('Opening incident in Microsoft Sentinel...');
    window.open('https://portal.azure.com', '_blank');
  };

  const handleOpenAutotask = () => {
    toast.success('Opening ticket in Autotask...');
    window.open('https://ww15.autotask.net', '_blank');
  };

  const handleOpenSeculyze = () => {
    toast.success(`Opening in ${incident.client.name}.Seculyze...`);
    window.open('https://seculyze.com', '_blank');
  };

  const handleGenerateReport = () => {
    toast.success('Generating incident report...');
  };

  const handleStatusChange = (status: IncidentStatus) => {
    setCurrentStatus(status);
    setShowStatusDropdown(false);
    toast.success(`Status changed to ${status}`);
  };

  const handleSeverityChange = (severity: SeverityLevel) => {
    setCurrentSeverity(severity);
    setShowSeverityDropdown(false);
    toast.success(`Severity changed to ${severity}`);
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.relative')) {
        setShowStatusDropdown(false);
        setShowSeverityDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCopyLog = (logId: string, logText: string) => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(logText).then(() => {
          setCopiedLog(logId);
          setTimeout(() => setCopiedLog(null), 2000);
        }).catch(() => {
          // Fallback if clipboard API fails
          copyToClipboardFallback(logText, logId);
        });
      } else {
        // Fallback for browsers/contexts where clipboard API is blocked
        copyToClipboardFallback(logText, logId);
      }
    } catch (error) {
      copyToClipboardFallback(logText, logId);
    }
  };

  const copyToClipboardFallback = (text: string, logId: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopiedLog(logId);
      setTimeout(() => setCopiedLog(null), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
    document.body.removeChild(textArea);
  };

  const handleCopyRawLog = (log: LogEntry) => {
    const rawText = JSON.stringify(log.rawData || log, null, 2);
    const textArea = document.createElement('textarea');
    textArea.value = rawText;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      toast.success('Log copied to clipboard');
    } catch (error) {
      console.error('Failed to copy text:', error);
      toast.error('Failed to copy log');
    }
    document.body.removeChild(textArea);
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    toast.success('Comment added successfully');
    setNewComment('');
  };

  // Simple search filter (real-time) - searches through all fields including raw data
  const filterLogsBySearch = (log: LogEntry): boolean => {
    if (!logSearchQuery.trim()) return true;
    
    const lowerQuery = logSearchQuery.toLowerCase();
    
    // Search in basic fields
    if (log.event.toLowerCase().includes(lowerQuery) ||
        log.source.toLowerCase().includes(lowerQuery) ||
        log.timestamp.toLowerCase().includes(lowerQuery) ||
        log.user?.toLowerCase().includes(lowerQuery) ||
        log.ip?.toLowerCase().includes(lowerQuery)) {
      return true;
    }
    
    // Search in raw data (JSON) including EventID and other fields
    if (log.rawData) {
      const rawDataString = JSON.stringify(log.rawData).toLowerCase();
      return rawDataString.includes(lowerQuery);
    }
    
    return false;
  };

  // Advanced query filter (searches raw data)
  const filterLogsByQuery = (log: LogEntry): boolean => {
    if (!activeQuery.trim()) return true;
    
    const lowerQuery = activeQuery.toLowerCase();
    
    // Search in basic fields
    if (log.event.toLowerCase().includes(lowerQuery) ||
        log.source.toLowerCase().includes(lowerQuery) ||
        log.timestamp.toLowerCase().includes(lowerQuery) ||
        log.user?.toLowerCase().includes(lowerQuery) ||
        log.ip?.toLowerCase().includes(lowerQuery)) {
      return true;
    }
    
    // Search in raw data (JSON)
    if (log.rawData) {
      const rawDataString = JSON.stringify(log.rawData).toLowerCase();
      return rawDataString.includes(lowerQuery);
    }
    
    return false;
  };

  const handleRunQuery = () => {
    setActiveQuery(queryText);
    setShowQueryInterface(false);
    const filteredCount = logs.filter(filterLogsByQuery).length;
    toast.success(`Query executed - ${filteredCount} log(s) found`);
  };

  const getFilteredLogs = () => {
    let filtered = logs;
    
    // Apply search filter
    filtered = filtered.filter(filterLogsBySearch);
    
    // Apply query filter if active
    if (activeQuery) {
      filtered = filtered.filter(filterLogsByQuery);
    }
    
    return filtered;
  };

  const getStatusColor = (status: IncidentStatus) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-700';
      case 'Active': return 'bg-orange-100 text-orange-700';
      case 'Closed': return 'bg-green-100 text-green-700';
    }
  };

  const getSeverityColor = (severity: SeverityLevel) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  const getTimelineIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'created': return <Zap className="w-4 h-4 text-blue-600" />;
      case 'status_change': return <Activity className="w-4 h-4 text-orange-600" />;
      case 'assigned': return <UserPlus className="w-4 h-4 text-purple-600" />;
      case 'comment': return <MessageSquare className="w-4 h-4 text-green-600" />;
      case 'alert': return <AlertTriangle className="w-4 h-4 text-red-600" />;
      case 'playbook': return <Play className="w-4 h-4 text-[#2A96A8]" />;
    }
  };

  const handleAddTag = () => {
    if (!newTag.trim()) return;
    setLocalTags([...localTags, newTag]);
    setNewTag('');
  };

  const handleRemoveTag = (tag: string) => {
    setLocalTags(localTags.filter(t => t !== tag));
  };

  const handleSaveTags = () => {
    if (onUpdateTags) {
      onUpdateTags(incident.id, localTags);
    }
    toast.success('Tags updated successfully');
  };

  // Helper function to get score color and label
  const getScoreColor = (score: number) => {
    if (score >= 80) return { bg: 'bg-red-100', text: 'text-red-700', bar: 'bg-red-500', label: 'High Risk' };
    if (score >= 50) return { bg: 'bg-orange-100', text: 'text-orange-700', bar: 'bg-orange-500', label: 'Medium Risk' };
    if (score >= 30) return { bg: 'bg-yellow-100', text: 'text-yellow-700', bar: 'bg-yellow-500', label: 'Low Risk' };
    return { bg: 'bg-green-100', text: 'text-green-700', bar: 'bg-green-500', label: 'Safe' };
  };

  const getClassificationColor = (cls: Classification) => {
    switch (cls) {
      case 'TruePositive': return 'bg-red-100 text-red-700 border-red-200';
      case 'FalsePositive': return 'bg-green-100 text-green-700 border-green-200';
      case 'BenignPositive': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Undetermined': return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getActionIcon = (iconName: string) => {
    switch (iconName) {
      case 'ban': return <Ban className="w-4 h-4" />;
      case 'keyround': return <KeyRound className="w-4 h-4" />;
      case 'logout': return <LogOut className="w-4 h-4" />;
      case 'shieldalert': return <ShieldAlert className="w-4 h-4" />;
      case 'userx': return <UserX className="w-4 h-4" />;
      case 'clipboard': return <Clipboard className="w-4 h-4" />;
      default: return <Shield className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'Low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Mock threat intel scores
  const threatIntelScores = {
    overall: 78,
    ip: 85,
    url: 62,
    hash: 91
  };

  return (
    <>
      {/* Full-Screen Logs View */}
      {isFullScreenLogs && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-[60] animate-in fade-in duration-200"
            onClick={() => setIsFullScreenLogs(false)}
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full h-full max-w-[98vw] max-h-[98vh] flex flex-col animate-in zoom-in-95 duration-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#092E3F] to-[#092E3F]/90 px-6 py-4 flex items-center justify-between flex-shrink-0 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-white" />
                  <div>
                    <h2 className="text-xl text-white">All Logs - Incident {incident.incident}</h2>
                    <p className="text-white/70 text-sm">{logs.length} log entries</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsFullScreenLogs(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Full-Screen Logs Content */}
              <div className="flex-1 overflow-hidden">
                <div className="flex flex-col h-full p-4 gap-4">
                  {/* Query Interface */}
                  {showQueryInterface && (
                    <div className="border border-[#2A96A8] rounded-lg bg-white overflow-hidden flex-shrink-0">
                      <div className="bg-gradient-to-r from-[#092E3F] to-[#092E3F]/90 px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-5 h-5 text-white" />
                          <h4 className="text-base text-white font-medium">Query Logs</h4>
                        </div>
                        <button
                          onClick={() => setShowQueryInterface(false)}
                          className="p-1 hover:bg-white/10 rounded transition-colors"
                        >
                          <X className="w-5 h-5 text-white" />
                        </button>
                      </div>
                      <div className="p-4">
                        <textarea
                          value={queryText}
                          onChange={(e) => setQueryText(e.target.value)}
                          placeholder="Enter query (e.g., EventID: 4688, ProcessCreation, powershell.exe, C:\Windows\System32)..."
                          className="w-full h-32 px-3 py-2 text-sm font-mono border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] resize-none"
                        />
                        <div className="flex items-center justify-between mt-3">
                          <p className="text-sm text-[#092E3F]/60">Query searches through all raw log data including EventID, ProcessName, CommandLine, DestinationIP, and more.</p>
                          <button
                            onClick={handleRunQuery}
                            className="flex items-center gap-2 px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-colors"
                          >
                            <Play className="w-4 h-4" />
                            Run Query
                          </button>
                        </div>
                        {activeQuery && (
                          <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
                            <p className="text-sm text-green-700">Active query: <span className="font-mono font-medium">{activeQuery}</span></p>
                            <button
                              onClick={() => { setActiveQuery(''); setQueryText(''); }}
                              className="text-sm text-green-700 hover:text-green-900 underline"
                            >
                              Clear
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-[30%_70%] gap-4 flex-1 overflow-hidden">
                    {/* Left: Log List */}
                    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
                      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex-shrink-0">
                        <h4 className="text-sm font-medium text-[#092E3F] mb-3">Log Entries ({getFilteredLogs().length})</h4>
                        
                        {/* Search Bar */}
                        <div className="relative mb-3">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#092E3F]/40" />
                          <input
                            type="text"
                            placeholder="Search logs..."
                            value={logSearchQuery}
                            onChange={(e) => setLogSearchQuery(e.target.value)}
                            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8]"
                          />
                        </div>

                        {/* Run Query Button */}
                        <button
                          onClick={() => setShowQueryInterface(!showQueryInterface)}
                          className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm bg-[#092E3F] text-white rounded-lg hover:bg-[#092E3F]/90 transition-colors"
                        >
                          <Terminal className="w-4 h-4" />
                          {showQueryInterface ? 'Hide Query' : 'Run Query'}
                        </button>
                      </div>
                      <div className="overflow-y-auto flex-1 p-2 space-y-2">
                        {getFilteredLogs().map((log) => (
                        <button
                          key={log.id}
                          onClick={() => setSelectedLog(log)}
                          className={`w-full p-3 rounded text-left transition-colors ${
                            selectedLog?.id === log.id 
                              ? 'bg-[#2A96A8]/10 border border-[#2A96A8]' 
                              : 'hover:bg-gray-50 border border-transparent'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="text-xs text-[#092E3F]/60 font-mono">{log.timestamp}</span>
                            {log.severity && (
                              <span className={`px-2 py-0.5 rounded-full text-xs border ${getSeverityColor(log.severity)}`}>
                                {log.severity}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#2A96A8] font-medium mb-1">{log.source}</p>
                          <p className="text-sm text-[#092E3F] line-clamp-2">{log.event}</p>
                          {log.ip && <p className="text-xs text-[#092E3F]/50 font-mono mt-1">IP: {log.ip}</p>}
                          {log.user && <p className="text-xs text-[#092E3F]/50 font-mono">User: {log.user}</p>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right: Raw Log Details */}
                  <div className="border border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
                    <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between flex-shrink-0">
                      <h4 className="text-sm font-medium text-[#092E3F]">Raw Log Data</h4>
                      {selectedLog && (
                        <button
                          onClick={() => handleCopyRawLog(selectedLog)}
                          className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#2A96A8] hover:bg-[#2A96A8]/10 rounded transition-colors"
                        >
                          <Copy className="w-4 h-4" />
                          Copy
                        </button>
                      )}
                    </div>
                    <div className="overflow-y-auto flex-1">
                      {selectedLog ? (
                        <div className="p-6">
                          {/* Basic Info */}
                          <div className="mb-6 pb-6 border-b border-gray-200">
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`px-3 py-1 rounded-full text-sm border ${getSeverityColor(selectedLog.severity || 'Medium')}`}>
                                {selectedLog.severity || 'Medium'}
                              </span>
                              <span className="text-sm text-[#2A96A8] font-medium">{selectedLog.source}</span>
                            </div>
                            <p className="text-base text-[#092E3F] mb-2">{selectedLog.event}</p>
                            <p className="text-sm text-[#092E3F]/60 font-mono">{selectedLog.timestamp}</p>
                          </div>

                          {/* Raw JSON Data */}
                          <div className="bg-[#092E3F] rounded-lg p-6 overflow-x-auto">
                            <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                              {JSON.stringify(selectedLog.rawData || {
                                id: selectedLog.id,
                                timestamp: selectedLog.timestamp,
                                source: selectedLog.source,
                                event: selectedLog.event,
                                ...(selectedLog.ip && { ip: selectedLog.ip }),
                                ...(selectedLog.user && { user: selectedLog.user }),
                                ...(selectedLog.severity && { severity: selectedLog.severity })
                              }, null, 2)}
                            </pre>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-[#092E3F]/60">
                          Select a log entry to view details
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      )}

      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 z-40 animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-50 animate-in slide-in-from-right duration-300 flex flex-col transition-all ${
        isExpanded ? 'max-w-[95vw]' : 'max-w-3xl'
      }`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#092E3F] to-[#092E3F]/90 px-8 py-6 flex-shrink-0">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <img 
                src={incident.client.logo} 
                alt={incident.client.name}
                className="w-12 h-12 rounded-full bg-white p-1"
              />
              <div>
                <h2 className="text-2xl text-white mb-1">Incident {incident.incident}</h2>
                <p className="text-white/70 text-sm">{incident.client.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                title={isExpanded ? 'Collapse panel' : 'Expand panel'}
              >
                {isExpanded ? (
                  <Minimize2 className="w-6 h-6 text-white" />
                ) : (
                  <Maximize2 className="w-6 h-6 text-white" />
                )}
              </button>
              <button 
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex items-center gap-3">
            {/* Status Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowStatusDropdown(!showStatusDropdown);
                  setShowSeverityDropdown(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm cursor-pointer hover:opacity-80 transition-opacity ${getStatusColor(currentStatus)}`}
              >
                {currentStatus}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {showStatusDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[120px]">
                  {(['New', 'Active', 'Closed'] as IncidentStatus[]).map((status) => (
                    <button
                      key={status}
                      onClick={() => handleStatusChange(status)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        currentStatus === status ? 'bg-gray-100 font-medium text-[#2A96A8]' : 'text-[#092E3F]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Severity Dropdown */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowSeverityDropdown(!showSeverityDropdown);
                  setShowStatusDropdown(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border cursor-pointer hover:opacity-80 transition-opacity ${getSeverityColor(currentSeverity)}`}
              >
                {currentSeverity}
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {showSeverityDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[120px]">
                  {(['Critical', 'High', 'Medium', 'Low'] as SeverityLevel[]).map((severity) => (
                    <button
                      key={severity}
                      onClick={() => handleSeverityChange(severity)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        currentSeverity === severity ? 'bg-gray-100 font-medium text-[#2A96A8]' : 'text-[#092E3F]'
                      }`}
                    >
                      {severity}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="px-3 py-1 rounded-full text-sm bg-white/20 text-white">
              {incident.type}
            </span>
          </div>
        </div>

        {/* External Actions Bar */}
        <div className="px-8 py-3 border-b border-gray-200 flex items-center gap-2 flex-shrink-0 bg-white">
          <button 
            onClick={handleOpenSentinel}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-xs"
          >
            <Shield className="w-3.5 h-3.5" />
            Open in Sentinel
          </button>
          <button 
            onClick={handleOpenAutotask}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-xs"
          >
            <Ticket className="w-3.5 h-3.5" />
            Open in Autotask
          </button>
          <button 
            onClick={handleOpenSeculyze}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            Open in {incident.client.name}.Seculyze
          </button>
          <button 
            onClick={handleGenerateReport}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-xs"
          >
            <FileCheck className="w-3.5 h-3.5" />
            Generate Report
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Metadata Panel */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-sm text-[#092E3F]/70 mb-4 uppercase tracking-wider">Incident Metadata</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#2A96A8] mt-0.5" />
                <div>
                  <p className="text-xs text-[#092E3F]/60">Created</p>
                  <p className="text-sm text-[#092E3F]">{incident.created}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-[#2A96A8] mt-0.5" />
                <div>
                  <p className="text-xs text-[#092E3F]/60">Assigned To</p>
                  <p className="text-sm text-[#092E3F]">{incident.owner?.name || 'Unassigned'}</p>
                  <p className="text-xs text-[#092E3F]/50">{incident.owner?.role}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#2A96A8] mt-0.5" />
                <div>
                  <p className="text-xs text-[#092E3F]/60">Client</p>
                  <p className="text-sm text-[#092E3F]">{incident.client.name}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#2A96A8] mt-0.5" />
                <div>
                  <p className="text-xs text-[#092E3F]/60">Type</p>
                  <p className="text-sm text-[#092E3F]">{incident.type}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[#2A96A8] mt-0.5" />
                <div>
                  <p className="text-xs text-[#092E3F]/60">Alerts</p>
                  <p className="text-sm text-[#092E3F]">{alerts.length} alerts</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#2A96A8] mt-0.5" />
                <div>
                  <p className="text-xs text-[#092E3F]/60">Logs</p>
                  <p className="text-sm text-[#092E3F]">{incident.logs} log entries</p>
                </div>
              </div>
            </div>
          </div>

          {/* Threat Intel Scores Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs text-[#092E3F]/60 uppercase tracking-wider">Threat Intelligence Scores</h3>
              <span className="text-[10px] text-[#092E3F]/40 italic">Hover for details</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* Overall Threat Intel Score */}
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg group relative">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-[#092E3F]/60" />
                  <span className="text-xs text-[#092E3F]/70">Overall</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(threatIntelScores.overall).bar} transition-all duration-500`}
                      style={{ width: `${threatIntelScores.overall}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#092E3F] font-medium min-w-[2rem] text-right">{threatIntelScores.overall}/100</span>
                </div>
                {/* Tooltip */}
                <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-[#092E3F] text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                  <p className="font-medium mb-1">Overall Threat Score</p>
                  <p className="text-white/80">Aggregated threat intelligence score based on all indicators. Higher scores indicate greater threat level (0-100).</p>
                </div>
              </div>

              {/* IP Score */}
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg group relative">
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-[#092E3F]/60" />
                  <span className="text-xs text-[#092E3F]/70">IP</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(threatIntelScores.ip).bar} transition-all duration-500`}
                      style={{ width: `${threatIntelScores.ip}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#092E3F] font-medium min-w-[2rem] text-right">{threatIntelScores.ip}/100</span>
                </div>
                {/* Tooltip */}
                <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-[#092E3F] text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                  <p className="font-medium mb-1">IP Reputation Score</p>
                  <p className="text-white/80">Threat score for IP addresses involved in this incident based on global threat intelligence feeds.</p>
                </div>
              </div>

              {/* URL Score */}
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg group relative">
                <div className="flex items-center gap-2">
                  <Link className="w-3.5 h-3.5 text-[#092E3F]/60" />
                  <span className="text-xs text-[#092E3F]/70">URL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(threatIntelScores.url).bar} transition-all duration-500`}
                      style={{ width: `${threatIntelScores.url}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#092E3F] font-medium min-w-[2rem] text-right">{threatIntelScores.url}/100</span>
                </div>
                {/* Tooltip */}
                <div className="absolute left-0 bottom-full mb-2 w-64 p-3 bg-[#092E3F] text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                  <p className="font-medium mb-1">URL Reputation Score</p>
                  <p className="text-white/80">Threat score for URLs and domains detected in this incident based on malicious activity patterns.</p>
                </div>
              </div>

              {/* Hash Score */}
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg group relative">
                <div className="flex items-center gap-2">
                  <Hash className="w-3.5 h-3.5 text-[#092E3F]/60" />
                  <span className="text-xs text-[#092E3F]/70">Hash</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className={`h-full ${getScoreColor(threatIntelScores.hash).bar} transition-all duration-500`}
                      style={{ width: `${threatIntelScores.hash}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#092E3F] font-medium min-w-[2rem] text-right">{threatIntelScores.hash}/100</span>
                </div>
                {/* Tooltip */}
                <div className="absolute right-0 bottom-full mb-2 w-64 p-3 bg-[#092E3F] text-white text-xs rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                  <p className="font-medium mb-1">File Hash Reputation Score</p>
                  <p className="text-white/80">Threat score for file hashes based on known malware signatures and behavioral analysis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Analysis Section */}
          <div>
            <button
              onClick={() => toggleSection('analysis')}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#2A96A8]" />
                <h3 className="text-lg text-[#092E3F]">AI Analysis & Recommendations</h3>
                {analysisComplete && (
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                    Complete
                  </span>
                )}
              </div>
              {expandedSections.analysis ? <ChevronUp className="w-5 h-5 text-[#092E3F]/60" /> : <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />}
            </button>
            {expandedSections.analysis && (
              <div className="space-y-4">
                {/* Classification Badge */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-xs text-[#092E3F]/60 mb-1">Classification</p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm border ${getClassificationColor(classification)}`}>
                      {classification.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {classification !== 'TruePositive' && !analysisComplete && !isAnalyzing && (
                      <button
                        onClick={handleManualAnalyze}
                        className="flex items-center gap-2 px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm"
                      >
                        <Sparkles className="w-4 h-4" />
                        Analyze Now
                      </button>
                    )}
                    {analysisComplete && !isAnalyzing && (
                      <button
                        onClick={performAnalysis}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-[#092E3F] border border-gray-200 rounded-lg hover:bg-gray-200 transition-all text-sm"
                      >
                        <Sparkles className="w-4 h-4" />
                        ReAnalyze
                      </button>
                    )}
                  </div>
                </div>

                {/* Analysis Status */}
                {isAnalyzing && (
                  <div className="flex items-center justify-center gap-3 p-8 bg-gradient-to-br from-[#2A96A8]/10 to-[#092E3F]/10 rounded-lg">
                    <Loader2 className="w-6 h-6 text-[#2A96A8] animate-spin" />
                    <div>
                      <p className="text-sm text-[#092E3F] font-medium">Analyzing incident...</p>
                      <p className="text-xs text-[#092E3F]/60">AI is evaluating threat indicators and generating recommendations</p>
                    </div>
                  </div>
                )}

                {/* Auto-analysis note for TruePositives */}
                {classification === 'TruePositive' && !isAnalyzing && analysisComplete && (
                  <div className="flex items-start gap-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <Sparkles className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-blue-700">
                      This incident was automatically analyzed as a <strong>True Positive</strong>. Recommended actions have been generated based on threat intelligence.
                    </p>
                  </div>
                )}

                {/* Manual analysis note */}
                {classification !== 'TruePositive' && !analysisComplete && !isAnalyzing && (
                  <div className="flex items-start gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-[#092E3F]/60 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-[#092E3F]/70">
                      This incident is classified as <strong>{classification.replace(/([A-Z])/g, ' $1').trim()}</strong>. Click "Analyze Now" to generate AI-powered recommendations.
                    </p>
                  </div>
                )}

                {/* Recommended Actions */}
                {analysisComplete && recommendedActions.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm text-[#092E3F] font-medium">Recommended Actions</h4>
                      <span className="text-xs text-[#092E3F]/50">{recommendedActions.length} actions</span>
                    </div>
                    {recommendedActions.map((action) => (
                      <div key={action.id} className="p-4 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-[#092E3F]/5 rounded-lg flex-shrink-0">
                            {getActionIcon(action.icon)}
                          </div>
                          <div className="flex-1">
                            <h5 className="text-sm text-[#092E3F] font-medium mb-1">{action.action}</h5>
                            <p className="text-xs text-[#092E3F]/70 mb-1">{action.description}</p>
                            {action.target && (
                              <p className="text-xs text-[#2A96A8] font-mono">{action.target}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Entities Section */}
          <div>
            <button
              onClick={() => toggleSection('entities')}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#092E3F]" />
                <h3 className="text-lg text-[#092E3F]">Entities</h3>
                <span className="px-2 py-0.5 bg-[#2A96A8]/10 text-[#2A96A8] text-xs rounded-full">
                  {entities.length}
                </span>
              </div>
              {expandedSections.entities ? <ChevronUp className="w-5 h-5 text-[#092E3F]/60" /> : <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />}
            </button>
            {expandedSections.entities && (
              <div className="grid grid-cols-2 gap-2">
                {entities.map((entity, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-[#2A96A8] transition-colors group relative">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#092E3F] truncate">{entity.name}</p>
                      <p className="text-xs text-[#092E3F]/50">{entity.type}</p>
                    </div>
                    {entity.score !== null && (
                      <>
                        <span className={`px-1.5 py-0.5 ${getScoreColor(entity.score).bg} ${getScoreColor(entity.score).text} text-[10px] rounded font-medium flex-shrink-0 cursor-help`}>
                          {entity.score}
                        </span>
                        {/* Tooltip for entity score */}
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-56 p-2.5 bg-[#092E3F] text-white text-[11px] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 pointer-events-none">
                          <p className="font-medium mb-0.5">Threat Intel Score: {entity.score}/100</p>
                          <p className="text-white/80">
                            {entity.type === 'IP' && 'IP reputation score based on threat intelligence feeds'}
                            {entity.type === 'Process' && 'Process behavior score based on known malicious patterns'}
                            {entity.type === 'FileHash' && 'File hash reputation from malware signatures database'}
                          </p>
                        </div>
                      </>
                    )}
                    {entity.type === 'Host' && <Monitor className="w-4 h-4 text-[#2A96A8] flex-shrink-0" />}
                    {entity.type === 'IP' && <Globe className="w-4 h-4 text-[#2A96A8] flex-shrink-0" />}
                    {entity.type === 'Mailbox' && <Mail className="w-4 h-4 text-[#2A96A8] flex-shrink-0" />}
                    {entity.type === 'Process' && <Terminal className="w-4 h-4 text-[#2A96A8] flex-shrink-0" />}
                    {entity.type === 'FileHash' && <FileText className="w-4 h-4 text-[#2A96A8] flex-shrink-0" />}
                    {entity.type === 'Account' && <User className="w-4 h-4 text-[#2A96A8] flex-shrink-0" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MITRE ATT&CK Mapping */}
          <div>
            <button
              onClick={() => toggleSection('mitre')}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-[#092E3F]" />
                <h3 className="text-lg text-[#092E3F]">MITRE ATT&CK Mapping</h3>
                <span className="px-2 py-0.5 bg-[#2A96A8]/10 text-[#2A96A8] text-xs rounded-full">
                  {mitreAttacks.length} techniques
                </span>
              </div>
              {expandedSections.mitre ? <ChevronUp className="w-5 h-5 text-[#092E3F]/60" /> : <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />}
            </button>
            {expandedSections.mitre && (
              <div className="space-y-2">
                {mitreAttacks.map(attack => (
                  <div key={attack.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:border-[#2A96A8] transition-colors group">
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 bg-[#092E3F] text-white text-xs rounded font-mono">
                        {attack.id}
                      </span>
                      <div>
                        <p className="text-sm text-[#092E3F]">{attack.name}</p>
                        <p className="text-xs text-[#092E3F]/60">{attack.tactic}</p>
                      </div>
                    </div>
                    <a 
                      href={`https://attack.mitre.org/techniques/${attack.id.replace('.', '/')}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4 text-[#2A96A8]" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Alerts Section */}
          <div>
            <button
              onClick={() => toggleSection('alerts')}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#092E3F]" />
                <h3 className="text-lg text-[#092E3F]">Alerts</h3>
                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full">
                  {alerts.length}
                </span>
              </div>
              {expandedSections.alerts ? <ChevronUp className="w-5 h-5 text-[#092E3F]/60" /> : <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />}
            </button>
            {expandedSections.alerts && (
              <div className="space-y-3">
                {alerts.map(alert => (
                  <div key={alert.id} className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#092E3F]/60">{alert.id}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${getSeverityColor(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </div>
                      <span className="text-xs text-[#092E3F]/50">{alert.timestamp}</span>
                    </div>
                    <h4 className="text-sm text-[#092E3F] mb-1">{alert.name}</h4>
                    <p className="text-xs text-[#092E3F]/60 mb-2">{alert.description}</p>
                    <p className="text-xs text-[#2A96A8]">{alert.source}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Timeline Section */}
          <div>
            <button
              onClick={() => toggleSection('timeline')}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#092E3F]" />
                <h3 className="text-lg text-[#092E3F]">Timeline</h3>
              </div>
              {expandedSections.timeline ? <ChevronUp className="w-5 h-5 text-[#092E3F]/60" /> : <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />}
            </button>
            {expandedSections.timeline && (
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                <div className="space-y-4">
                  {timeline.map(event => (
                    <div key={event.id} className="relative pl-12">
                      <div className="absolute left-0 top-1 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                        {getTimelineIcon(event.type)}
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm text-[#092E3F]">{event.description}</p>
                          <span className="text-xs text-[#092E3F]/50 whitespace-nowrap ml-3">{event.timestamp}</span>
                        </div>
                        {event.user && (
                          <p className="text-xs text-[#092E3F]/60 mb-1">by {event.user}</p>
                        )}
                        {event.details && (
                          <p className="text-xs text-[#092E3F]/50">{event.details}</p>
                        )}
                      </div>
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
                <MessageSquare className="w-5 h-5 text-[#092E3F]" />
                <h3 className="text-lg text-[#092E3F]">Comments & Notes</h3>
                <span className="px-2 py-0.5 bg-gray-200 text-[#092E3F]/70 text-xs rounded-full">
                  {comments.length}
                </span>
              </div>
              {expandedSections.comments ? <ChevronUp className="w-5 h-5 text-[#092E3F]/60" /> : <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />}
            </button>
            {expandedSections.comments && (
              <div className="space-y-4">
                {/* Add Comment */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment or note..."
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors resize-none"
                  />
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <button
                      onClick={handleAddComment}
                      disabled={!newComment.trim()}
                      className="flex items-center gap-2 px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      Add Comment
                    </button>
                  </div>
                </div>

                {/* Existing Comments */}
                {comments.map(comment => (
                  <div key={comment.id} className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm text-[#092E3F]">{comment.user}</p>
                        <p className="text-xs text-[#092E3F]/50">{comment.role}</p>
                      </div>
                      <span className="text-xs text-[#092E3F]/50">{comment.timestamp}</span>
                    </div>
                    <p className="text-sm text-[#092E3F]/80">{comment.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Logs Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => toggleSection('logs')}
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5 text-[#092E3F]" />
                <h3 className="text-lg text-[#092E3F]">Logs</h3>
                <span className="px-2 py-0.5 bg-gray-200 text-[#092E3F]/70 text-xs rounded-full">
                  {logs.length}
                </span>
                {expandedSections.logs ? <ChevronUp className="w-5 h-5 text-[#092E3F]/60" /> : <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />}
              </button>
              {expandedSections.logs && (
                <button
                  onClick={() => setIsFullScreenLogs(true)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#2A96A8] hover:bg-[#2A96A8]/10 rounded transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  View All Logs
                </button>
              )}
            </div>
            {expandedSections.logs && (
              <div className="space-y-3">
                <div className="grid grid-cols-[35%_65%] gap-4 h-[600px]">
                  {/* Left: Log List */}
                  <div className="border border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
                    <div className="sticky top-0 bg-white border-b border-gray-200 px-3 py-2 flex-shrink-0">
                      <h4 className="text-xs font-medium text-[#092E3F] mb-2">Log Entries ({getFilteredLogs().length})</h4>
                      
                      {/* Search Bar */}
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#092E3F]/40" />
                        <input
                          type="text"
                          placeholder="Search all log data (e.g., 4688, EventID, powershell)..."
                          value={logSearchQuery}
                          onChange={(e) => setLogSearchQuery(e.target.value)}
                          className="w-full pl-8 pr-3 py-1.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8]"
                        />
                      </div>
                      {logSearchQuery && (
                        <p className="text-[10px] text-[#2A96A8] mt-1">
                          Searching through all fields including raw log data
                        </p>
                      )}
                    </div>
                    <div className="overflow-y-auto flex-1 p-1.5 space-y-1">
                      {getFilteredLogs().map((log) => (
                      <button
                        key={log.id}
                        onClick={() => setSelectedLog(log)}
                        className={`w-full p-2 rounded text-left transition-colors ${
                          selectedLog?.id === log.id 
                            ? 'bg-[#2A96A8]/10 border border-[#2A96A8]' 
                            : 'hover:bg-gray-50 border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                          <span className="text-[10px] text-[#092E3F]/60 font-mono">{log.timestamp}</span>
                        </div>
                        <p className="text-[10px] text-[#2A96A8] font-medium mb-0.5">{log.source}</p>
                        <p className="text-xs text-[#092E3F] line-clamp-1">{log.event}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Raw Log Details */}
                <div className="border border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
                  <div className="sticky top-0 bg-white border-b border-gray-200 p-3 flex items-center justify-between flex-shrink-0">
                    <h4 className="text-sm font-medium text-[#092E3F]">Raw Log Data</h4>
                    {selectedLog && (
                      <button
                        onClick={() => handleCopyRawLog(selectedLog)}
                        className="flex items-center gap-1.5 px-2 py-1 text-xs text-[#2A96A8] hover:bg-[#2A96A8]/10 rounded transition-colors"
                      >
                        <Copy className="w-3 h-3" />
                        Copy
                      </button>
                    )}
                  </div>
                  <div className="overflow-y-auto flex-1">
                    {selectedLog ? (
                      <div className="p-4">
                        {/* Basic Info */}
                        <div className="mb-4 pb-4 border-b border-gray-200">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-[#2A96A8] font-medium">{selectedLog.source}</span>
                          </div>
                          <p className="text-sm text-[#092E3F] mb-2">{selectedLog.event}</p>
                          <p className="text-xs text-[#092E3F]/60 font-mono">{selectedLog.timestamp}</p>
                        </div>

                        {/* Raw JSON Data */}
                        <div className="bg-[#092E3F] rounded-lg p-4 overflow-x-auto">
                          <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap">
                            {JSON.stringify(selectedLog.rawData || {
                              id: selectedLog.id,
                              timestamp: selectedLog.timestamp,
                              source: selectedLog.source,
                              event: selectedLog.event,
                              ...(selectedLog.ip && { ip: selectedLog.ip }),
                              ...(selectedLog.user && { user: selectedLog.user }),
                              ...(selectedLog.severity && { severity: selectedLog.severity })
                            }, null, 2)}
                          </pre>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-[#092E3F]/60 text-sm">
                        Select a log entry to view details
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>

          {/* Tags Section */}
          <div>
            <button
              onClick={() => toggleSection('tags')}
              className="w-full flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-[#092E3F]" />
                <h3 className="text-lg text-[#092E3F]">Tags</h3>
                <span className="px-2 py-0.5 bg-gray-200 text-[#092E3F]/70 text-xs rounded-full">
                  {localTags.length}
                </span>
              </div>
              {expandedSections.tags ? <ChevronUp className="w-5 h-5 text-[#092E3F]/60" /> : <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />}
            </button>
            {expandedSections.tags && (
              <div className="space-y-4">
                {/* Add Tag */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors"
                    />
                    <button
                      onClick={handleAddTag}
                      disabled={!newTag.trim()}
                      className="flex items-center gap-2 px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex-shrink-0"
                    >
                      <Plus className="w-4 h-4" />
                      Add Tag
                    </button>
                  </div>
                </div>

                {/* Existing Tags */}
                <div className="flex flex-wrap gap-2">
                  {localTags.map(tag => (
                    <div key={tag} className="flex items-center gap-2 px-3 py-1 bg-gray-200 text-[#092E3F]/70 text-xs rounded-full">
                      <span>{tag}</span>
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="p-1 hover:bg-gray-300 rounded-full"
                      >
                        <X className="w-3 h-3 text-[#092E3F]/50" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Save Tags */}
                <div className="flex items-center justify-end gap-3 mt-6">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveTags}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm"
                  >
                    Save Tags
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modals */}
        {activeModal === 'assign' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveModal(null)}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-full max-w-md animate-in fade-in zoom-in duration-200">
              <div className="p-6">
                <h3 className="text-lg text-[#092E3F] mb-4">Assign Incident</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Select Analyst</label>
                    <select
                      value={assignToAnalyst}
                      onChange={(e) => setAssignToAnalyst(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors"
                    >
                      <option value="">Choose an analyst...</option>
                      <option value="Sarah Mitchell">Sarah Mitchell (Senior Analyst)</option>
                      <option value="James Rodriguez">James Rodriguez (SOC Analyst)</option>
                      <option value="Emily Chen">Emily Chen (Threat Hunter)</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 mt-6">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAssign}
                    disabled={!assignToAnalyst}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeModal === 'status' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveModal(null)}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-full max-w-md animate-in fade-in zoom-in duration-200">
              <div className="p-6">
                <h3 className="text-lg text-[#092E3F] mb-4">Change Status & Severity</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Status</label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as IncidentStatus)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors"
                    >
                      <option value="New">New</option>
                      <option value="Active">Active</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Severity</label>
                    <select
                      value={newSeverity}
                      onChange={(e) => setNewSeverity(e.target.value as SeverityLevel)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 mt-6">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleChangeStatus}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeModal === 'notify' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveModal(null)}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-full max-w-md animate-in fade-in zoom-in duration-200">
              <div className="p-6">
                <h3 className="text-lg text-[#092E3F] mb-4">Notify Customer</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Message</label>
                    <textarea
                      value={notificationMessage}
                      onChange={(e) => setNotificationMessage(e.target.value)}
                      placeholder="Enter notification message..."
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors resize-none"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 mt-6">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleNotify}
                    disabled={!notificationMessage.trim()}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Notification
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeModal === 'ticket' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveModal(null)}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-full max-w-md animate-in fade-in zoom-in duration-200">
              <div className="p-6">
                <h3 className="text-lg text-[#092E3F] mb-4">Create Support Ticket</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-[#092E3F]/70 mb-2">A support ticket will be created in Autotask with the following details:</p>
                  <ul className="text-sm text-[#092E3F]/60 space-y-1 list-disc list-inside">
                    <li>Incident: {incident.incident}</li>
                    <li>Client: {incident.client.name}</li>
                    <li>Severity: {incident.severity}</li>
                  </ul>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateTicket}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm"
                  >
                    Create Ticket
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeModal === 'playbook' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveModal(null)}
            />
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 w-full max-w-md animate-in fade-in zoom-in duration-200">
              <div className="p-6">
                <h3 className="text-lg text-[#092E3F] mb-4">Run Playbook</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Select Playbook</label>
                    <select
                      value={selectedPlaybook}
                      onChange={(e) => setSelectedPlaybook(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors"
                    >
                      <option value="">Choose a playbook...</option>
                      <option value="Malware Response">Malware Response</option>
                      <option value="Phishing Investigation">Phishing Investigation</option>
                      <option value="Data Exfiltration">Data Exfiltration</option>
                      <option value="Endpoint Isolation">Endpoint Isolation</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-3 mt-6">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleRunPlaybook}
                    disabled={!selectedPlaybook}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Run Playbook
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}