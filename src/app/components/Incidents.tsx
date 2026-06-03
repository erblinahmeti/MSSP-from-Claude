import { useState, useMemo } from 'react';
import { toast } from 'sonner@2.0.3';
import IncidentDetail from './IncidentDetail';
import IncidentMetricCards from './IncidentMetricCards';
import { 
  Search, 
  Calendar, 
  Filter, 
  Columns3, 
  Undo2, 
  RotateCw,
  MoreHorizontal,
  Shield,
  ExternalLink,
  GripVertical,
  Copy,
  Check,
  User,
  Monitor,
  Globe,
  Mail,
  Terminal,
  FileText,
  Edit,
  Trash2,
  AlertCircle,
  FileCheck,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  ChevronDown,
  ChevronUp,
  Inbox,
  UserPlus,
  Bell,
  Ticket,
  Play,
  X,
  TrendingUp,
  Activity,
  Target,
  Zap,
  Users,
  PieChart,
  Settings,
  ArrowUpCircle,
  Clock,
  Tag,
  Plus,
  MessageSquare
} from 'lucide-react';
import svgPaths from "../imports/svg-bvyv8g5cz7";
import imgSentinelPng from "figma:asset/a3774409e98c46ca03515e5bba6f515d1b11173c.png";
import imgAutotaskPng from "figma:asset/da8b49536731a0deeacc8c8a6cd1a32815de7120.png";
import { PieChart as RechartsPie, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

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
  tags: string[];
}

const mockIncidents: Incident[] = [
  {
    id: '1',
    client: { 
      name: 'Nike', 
      logo: 'https://images.unsplash.com/photo-1706879349357-f17b91de99a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwbG9nb3xlbnwxfHx8fDE3NjY0ODU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '4152',
    status: 'New',
    type: 'Guest Users Invited to Tenant by New Inviters',
    created: '1h 13m ago',
    entities: [
      { name: 'john.doe@nike.com', type: 'Account' },
      { name: '192.168.1.105', type: 'IP' },
      { name: 'malware_hash_a3f2', type: 'FileHash' }
    ],
    logs: 12,
    sentinelSeverity: 'High',
    attention: 'True Positive Detected',
    owner: { name: 'Sarah Chen', role: 'L1 Analyst' },
    tags: ['Phishing', 'Urgent']
  },
  {
    id: '2',
    client: { 
      name: 'Adidas', 
      logo: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '11875',
    status: 'Active',
    type: 'Distributed Password cracking attempts in AzureAD',
    created: '46m ago',
    entities: [
      { name: 'admin@adidas.com', type: 'Account' },
      { name: 'Server-DB-01', type: 'Host' },
      { name: 'powershell.exe', type: 'Process' },
      { name: 'admin.mailbox@adidas.com', type: 'Mailbox' },
      { name: '10.0.0.45', type: 'IP' }
    ],
    logs: 5,
    sentinelSeverity: 'Low',
    attention: 'True Positive Detected',
    owner: { name: 'David Martinez', role: 'L2 Analyst' },
    tags: ['Brute Force', 'Investigation']
  },
  {
    id: '3',
    client: { 
      name: 'Apple', 
      logo: 'https://images.unsplash.com/photo-1609538106201-e0dc68873410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGxvZ298ZW58MXx8fHwxNzY2NDQwNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '2344',
    status: 'New',
    type: 'New access credential added to Application or Service Principal',
    created: '1h ago',
    entities: [
      { name: 'service@apple.com', type: 'Account' },
      { name: 'DESKTOP-APPLE-42', type: 'Host' }
    ],
    logs: 15,
    sentinelSeverity: 'Medium',
    attention: 'Threat Intel: Medium Risk',
    owner: null,
    tags: []
  },
  {
    id: '4',
    client: { 
      name: 'Microsoft', 
      logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc2NjQyOTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '2345',
    status: 'New',
    type: 'New access credential added to Application or Service Principal',
    created: '1h ago',
    entities: [
      { name: 'svc_azure@microsoft.com', type: 'Account' },
      { name: 'cmd.exe', type: 'Process' }
    ],
    logs: 8,
    sentinelSeverity: 'Medium',
    attention: 'Threat Intel: High Risk',
    owner: { name: 'Mike Johnson', role: 'L1 Analyst' },
    tags: ['Malware', 'Escalated']
  },
  {
    id: '5',
    client: { 
      name: 'Google', 
      logo: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '1252',
    status: 'New',
    type: 'New access credential added to Application or Service Principal',
    created: '1h ago',
    entities: [{ name: 'user@google.com', type: 'Account' }],
    logs: 15,
    sentinelSeverity: 'Medium',
    attention: 'Threat Intel: Low Risk',
    owner: { name: 'Jessica Park', role: 'L3 Specialist' },
    tags: ['Review']
  },
  {
    id: '6',
    client: { 
      name: 'Nike', 
      logo: 'https://images.unsplash.com/photo-1706879349357-f17b91de99a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwbG9nb3xlbnwxfHx8fDE3NjY0ODU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '11856',
    status: 'New',
    type: 'New access credential added to Application or Service Principal',
    created: '52m ago',
    entities: [{ name: 'webapp@nike.com', type: 'Mailbox' }],
    logs: 15,
    sentinelSeverity: 'Medium',
    attention: 'No Attention',
    owner: { name: 'Emily Rodriguez', role: 'L1 Analyst' },
    tags: []
  },
  {
    id: '7',
    client: { 
      name: 'Adidas', 
      logo: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '11857',
    status: 'Closed',
    type: 'New access credential added to Application or Service Principal',
    created: '52m ago',
    entities: [
      { name: '172.16.0.99', type: 'IP' },
      { name: 'WEB-SERVER-03', type: 'Host' }
    ],
    logs: 15,
    sentinelSeverity: 'Medium',
    attention: 'No Attention',
    owner: null,
    tags: ['False Positive']
  },
  {
    id: '8',
    client: { 
      name: 'Apple', 
      logo: 'https://images.unsplash.com/photo-1609538106201-e0dc68873410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGxvZ298ZW58MXx8fHwxNzY2NDQwNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '11858',
    status: 'New',
    type: 'New access credential added to Application or Service Principal',
    created: '52m ago',
    entities: [{ name: 'hash_f8a92bc', type: 'FileHash' }],
    logs: 15,
    sentinelSeverity: 'Medium',
    attention: 'No Attention',
    owner: { name: 'Robert Williams', role: 'SOC Manager' },
    tags: ['Monitoring']
  },
  {
    id: '9',
    client: { 
      name: 'Microsoft', 
      logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc2NjQyOTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '9234',
    status: 'Active',
    type: 'Suspicious Resource deployment',
    created: '2h ago',
    entities: [
      { name: 'svc_deployment@microsoft.com', type: 'Account' },
      { name: 'az-server-prod-01', type: 'Host' }
    ],
    logs: 22,
    sentinelSeverity: 'High',
    attention: 'True Positive Detected',
    owner: { name: 'Jessica Park', role: 'L3 Specialist' },
    tags: ['Cloud', 'Investigation']
  },
  {
    id: '10',
    client: { 
      name: 'Google', 
      logo: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '7821',
    status: 'New',
    type: 'Multiple failed login attempts',
    created: '3h ago',
    entities: [
      { name: 'admin@google.com', type: 'Account' },
      { name: '203.45.67.89', type: 'IP' }
    ],
    logs: 45,
    sentinelSeverity: 'Medium',
    attention: 'Tuning: False Positive',
    owner: { name: 'Sarah Chen', role: 'L1 Analyst' },
    tags: ['False Positive', 'Closed']
  },
  {
    id: '11',
    client: { 
      name: 'Nike', 
      logo: 'https://images.unsplash.com/photo-1706879349357-f17b91de99a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwbG9nb3xlbnwxfHx8fDE3NjY0ODU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '5512',
    status: 'Closed',
    type: 'Unusual volume of file deletion',
    created: '5h ago',
    entities: [
      { name: 'fileserver@nike.com', type: 'Account' },
      { name: 'FS-NIKE-02', type: 'Host' },
      { name: 'explorer.exe', type: 'Process' }
    ],
    logs: 120,
    sentinelSeverity: 'Low',
    attention: 'No Attention',
    owner: { name: 'David Martinez', role: 'L2 Analyst' },
    tags: ['Data Loss']
  },
  {
    id: '12',
    client: { 
      name: 'Adidas', 
      logo: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '3345',
    status: 'Active',
    type: 'Malware detected on endpoint',
    created: '30m ago',
    entities: [
      { name: 'LAPTOP-ADI-42', type: 'Host' },
      { name: 'malware_xyz123', type: 'FileHash' },
      { name: 'trojan.exe', type: 'Process' }
    ],
    logs: 78,
    sentinelSeverity: 'High',
    attention: 'True Positive Detected',
    owner: { name: 'Jessica Park', role: 'L3 Specialist' },
    tags: ['Malware', 'Urgent', 'Escalated']
  },
  {
    id: '13',
    client: { 
      name: 'Apple', 
      logo: 'https://images.unsplash.com/photo-1609538106201-e0dc68873410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGxvZ298ZW58MXx8fHwxNzY2NDQwNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '8823',
    status: 'New',
    type: 'Privilege escalation attempt',
    created: '1h 30m ago',
    entities: [
      { name: 'developer@apple.com', type: 'Account' },
      { name: 'sudo', type: 'Process' }
    ],
    logs: 34,
    sentinelSeverity: 'High',
    attention: 'Threat Intel: High Risk',
    owner: null,
    tags: ['Privilege Escalation', 'Critical']
  },
  {
    id: '14',
    client: { 
      name: 'Microsoft', 
      logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc2NjQyOTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '6677',
    status: 'New',
    type: 'Unusual network traffic pattern',
    created: '4h ago',
    entities: [
      { name: '10.20.30.40', type: 'IP' },
      { name: 'WEB-MS-PROD', type: 'Host' }
    ],
    logs: 156,
    sentinelSeverity: 'Medium',
    attention: 'Threat Intel: Low Risk',
    owner: { name: 'Mike Johnson', role: 'L1 Analyst' },
    tags: ['Network', 'Monitoring']
  },
  {
    id: '15',
    client: { 
      name: 'Google', 
      logo: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '4456',
    status: 'Closed',
    type: 'Suspicious email attachment opened',
    created: '1 day ago',
    entities: [
      { name: 'finance@google.com', type: 'Mailbox' },
      { name: 'invoice.pdf.exe', type: 'FileHash' }
    ],
    logs: 12,
    sentinelSeverity: 'Low',
    attention: 'No Attention',
    owner: { name: 'Emily Rodriguez', role: 'L1 Analyst' }
  },
  {
    id: '16',
    client: { 
      name: 'Nike', 
      logo: 'https://images.unsplash.com/photo-1706879349357-f17b91de99a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwbG9nb3xlbnwxfHx8fDE3NjY0ODU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '9988',
    status: 'Active',
    type: 'Data exfiltration attempt',
    created: '2h 15m ago',
    entities: [
      { name: 'contractor@nike.com', type: 'Account' },
      { name: '192.168.50.22', type: 'IP' },
      { name: 'ftp.exe', type: 'Process' }
    ],
    logs: 89,
    sentinelSeverity: 'High',
    attention: 'True Positive Detected',
    owner: { name: 'David Martinez', role: 'L2 Analyst' }
  },
  {
    id: '17',
    client: { 
      name: 'Adidas', 
      logo: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '2211',
    status: 'New',
    type: 'Brute force attack detected',
    created: '6h ago',
    entities: [
      { name: 'vpn@adidas.com', type: 'Account' },
      { name: '45.67.89.10', type: 'IP' }
    ],
    logs: 234,
    sentinelSeverity: 'Medium',
    attention: 'Tuning: False Positive',
    owner: null
  },
  {
    id: '18',
    client: { 
      name: 'Apple', 
      logo: 'https://images.unsplash.com/photo-1609538106201-e0dc68873410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGxvZ298ZW58MXx8fHwxNzY2NDQwNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '5543',
    status: 'Active',
    type: 'Unauthorized API access',
    created: '45m ago',
    entities: [
      { name: 'api-service@apple.com', type: 'Account' },
      { name: 'API-GATEWAY-01', type: 'Host' }
    ],
    logs: 67,
    sentinelSeverity: 'High',
    attention: 'True Positive Detected',
    owner: { name: 'Jessica Park', role: 'L3 Specialist' }
  },
  {
    id: '19',
    client: { 
      name: 'Microsoft', 
      logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc2NjQyOTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '7734',
    status: 'Closed',
    type: 'Phishing campaign identified',
    created: '2 days ago',
    entities: [
      { name: 'security@microsoft.com', type: 'Mailbox' },
      { name: 'phishing_link_hash', type: 'FileHash' }
    ],
    logs: 45,
    sentinelSeverity: 'Low',
    attention: 'No Attention',
    owner: { name: 'Sarah Chen', role: 'L1 Analyst' }
  },
  {
    id: '20',
    client: { 
      name: 'Google', 
      logo: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '1123',
    status: 'New',
    type: 'Ransomware indicators found',
    created: '20m ago',
    entities: [
      { name: 'FILE-SERVER-03', type: 'Host' },
      { name: 'encrypt.exe', type: 'Process' },
      { name: 'ransom_note.txt', type: 'FileHash' }
    ],
    logs: 312,
    sentinelSeverity: 'High',
    attention: 'True Positive Detected',
    owner: { name: 'Robert Williams', role: 'SOC Manager' }
  },
  {
    id: '21',
    client: { 
      name: 'Nike', 
      logo: 'https://images.unsplash.com/photo-1706879349357-f17b91de99a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwbG9nb3xlbnwxfHx8fDE3NjY0ODU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '6654',
    status: 'New',
    type: 'Lateral movement detected',
    created: '1h 45m ago',
    entities: [
      { name: 'admin@nike.com', type: 'Account' },
      { name: 'DC-NIKE-01', type: 'Host' },
      { name: 'psexec.exe', type: 'Process' }
    ],
    logs: 98,
    sentinelSeverity: 'Medium',
    attention: 'Threat Intel: Medium Risk',
    owner: { name: 'Mike Johnson', role: 'L1 Analyst' }
  },
  {
    id: '22',
    client: { 
      name: 'Adidas', 
      logo: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '3398',
    status: 'Active',
    type: 'SQL injection attempt',
    created: '3h 20m ago',
    entities: [
      { name: 'WEB-APP-DB', type: 'Host' },
      { name: '88.99.11.22', type: 'IP' }
    ],
    logs: 145,
    sentinelSeverity: 'High',
    attention: 'True Positive Detected',
    owner: { name: 'David Martinez', role: 'L2 Analyst' }
  },
  {
    id: '23',
    client: { 
      name: 'Apple', 
      logo: 'https://images.unsplash.com/photo-1609538106201-e0dc68873410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGxvZ298ZW58MXx8fHwxNzY2NDQwNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '8876',
    status: 'Closed',
    type: 'Insider threat alert',
    created: '1 week ago',
    entities: [
      { name: 'former_employee@apple.com', type: 'Account' }
    ],
    logs: 23,
    sentinelSeverity: 'Low',
    attention: 'No Attention',
    owner: null
  },
  {
    id: '24',
    client: { 
      name: 'Microsoft', 
      logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc2NjQyOTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '4421',
    status: 'New',
    type: 'Cryptomining activity detected',
    created: '5h 10m ago',
    entities: [
      { name: 'COMPUTE-NODE-12', type: 'Host' },
      { name: 'miner.exe', type: 'Process' }
    ],
    logs: 267,
    sentinelSeverity: 'Medium',
    attention: 'Tuning: False Positive',
    owner: { name: 'Emily Rodriguez', role: 'L1 Analyst' }
  },
  {
    id: '25',
    client: { 
      name: 'Google', 
      logo: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    incidentNumber: '9921',
    status: 'Active',
    type: 'Zero-day exploit attempt',
    created: '15m ago',
    entities: [
      { name: 'EDGE-ROUTER-01', type: 'Host' },
      { name: '123.45.67.89', type: 'IP' },
      { name: 'exploit_payload', type: 'FileHash' }
    ],
    logs: 421,
    sentinelSeverity: 'High',
    attention: 'True Positive Detected',
    owner: { name: 'Robert Williams', role: 'SOC Manager' }
  },
];

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

function AttentionBadge({ attention }: { attention: AttentionType }) {
  const styles = {
    'True Positive Detected': 'bg-[#b73520] text-white',
    'Threat Intel: Medium': 'bg-[#ffdbb4] text-[#092E3F]',
    'Threat Intel: Low': 'bg-[#fff9a8] text-[#092E3F]',
    'No Attention': 'bg-gray-100 text-gray-500'
  };

  return (
    <span className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap truncate block max-w-full ${styles[attention]}`}>
      {attention}
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

function OwnerBadge({ owner }: { owner: { name: string; role: string } | null }) {
  if (!owner) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
          <User className="w-3.5 h-3.5 text-gray-400" />
        </div>
        <div>
          <p className="text-sm text-gray-400 italic">Unassigned</p>
          <p className="text-xs text-red-500">No owner</p>
        </div>
      </div>
    );
  }

  // Get initials from name
  const initials = owner.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  // Color based on role
  const roleColors = {
    'L1 Analyst': 'bg-blue-100 text-blue-600',
    'L2 Analyst': 'bg-purple-100 text-purple-600',
    'L3 Specialist': 'bg-orange-100 text-orange-600',
    'SOC Manager': 'bg-emerald-100 text-emerald-600'
  };

  const colorClass = roleColors[owner.role as keyof typeof roleColors] || 'bg-gray-100 text-gray-600';

  return (
    <div className="flex items-center gap-2">
      <div className={`w-7 h-7 rounded-full ${colorClass} flex items-center justify-center text-xs shrink-0`}>
        {initials}
      </div>
      <div className="min-w-0">
        <p className="text-sm text-[#092E3F] truncate">{owner.name}</p>
        <p className="text-xs text-[#092E3F]/50 truncate">{owner.role}</p>
      </div>
    </div>
  );
}

const ITEMS_PER_PAGE = 10;

export default function Incidents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('Last 7 days');
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredEntityId, setHoveredEntityId] = useState<string | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [columnWidths, setColumnWidths] = useState({
    client: 120,
    incident: 90,
    status: 90,
    type: 250,
    created: 100,
    entities: 130,
    logs: 70,
    severity: 90,
    owner: 140,
    tags: 150,
    attention: 140,
    action: 130
  });
  const [resizing, setResizing] = useState<string | null>(null);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [currentPage, setCurrentPage] = useState(1);
  const [isColumnsDropdownOpen, setIsColumnsDropdownOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState({
    client: true,
    incident: true,
    status: true,
    type: true,
    created: true,
    entities: true,
    logs: true,
    severity: true,
    owner: true,
    tags: true,
    attention: true,
    action: true
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [isFiltersDropdownOpen, setIsFiltersDropdownOpen] = useState(false);
  const [expandedFilterSection, setExpandedFilterSection] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    clients: [] as string[],
    status: [] as IncidentStatus[],
    severity: [] as SeverityLevel[],
    owner: [] as string[],
    attention: [] as AttentionType[]
  });
  const [selectedIncidents, setSelectedIncidents] = useState<string[]>([]);
  const [selectedIncidentDetail, setSelectedIncidentDetail] = useState<Incident | null>(null);
  const [activeQuickAction, setActiveQuickAction] = useState<string | null>(null);
  const [assignToAnalyst, setAssignToAnalyst] = useState<string>('');
  const [bulkStatus, setBulkStatus] = useState<IncidentStatus>('Active');
  const [bulkSeverity, setBulkSeverity] = useState<SeverityLevel>('Medium');
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationMethod, setNotificationMethod] = useState<'email' | 'sms' | 'both'>('email');
  const [selectedPlaybook, setSelectedPlaybook] = useState('');
  const [tagModalOpen, setTagModalOpen] = useState(false);
  const [selectedIncidentForTags, setSelectedIncidentForTags] = useState<string | null>(null);
  const [newTag, setNewTag] = useState('');
  const [isOverviewExpanded, setIsOverviewExpanded] = useState(true);
  const [metricFilters, setMetricFilters] = useState<{
    threatType: string | null;
    severity: SeverityLevel | null;
    attention: AttentionType | null;
  }>({
    threatType: null,
    severity: null,
    attention: null
  });

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

  const availableAnalysts = [
    { id: 'sarah', name: 'Sarah Mitchell', role: 'Senior Analyst' },
    { id: 'james', name: 'James Rodriguez', role: 'SOC Analyst' },
    { id: 'emily', name: 'Emily Chen', role: 'Security Engineer' },
    { id: 'michael', name: 'Michael Brown', role: 'SOC Analyst' },
    { id: 'lisa', name: 'Lisa Anderson', role: 'Threat Hunter' }
  ];

  const availablePlaybooks = [
    { id: 'phishing', name: 'Phishing Investigation', description: 'Automated phishing email analysis and containment' },
    { id: 'malware', name: 'Malware Response', description: 'Isolate endpoint and run forensic analysis' },
    { id: 'bruteforce', name: 'Brute Force Mitigation', description: 'Block IP and reset affected credentials' },
    { id: 'dataleakage', name: 'Data Leakage Response', description: 'Identify scope and notify stakeholders' },
    { id: 'ransomware', name: 'Ransomware Containment', description: 'Emergency isolation and backup verification' }
  ];

  const columnOptions = [
    { key: 'client', label: 'Client' },
    { key: 'incident', label: 'Incident' },
    { key: 'status', label: 'Status' },
    { key: 'type', label: 'Type' },
    { key: 'created', label: 'Created' },
    { key: 'entities', label: 'Entities' },
    { key: 'logs', label: 'Logs' },
    { key: 'severity', label: 'Severity' },
    { key: 'owner', label: 'Owner' },
    { key: 'tags', label: 'Tags' },
    { key: 'attention', label: 'Attention' },
    { key: 'action', label: 'Action' }
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
      status: [],
      severity: [],
      owner: [],
      attention: []
    });
  };

  const handleRefreshTable = async () => {
    setIsRefreshing(true);
    // Simulate loading for 1.5 seconds
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLastRefreshed(new Date());
    setIsRefreshing(false);
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

  const handleCopyIncident = async (incidentNumber: string, id: string) => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(incidentNumber);
      } else {
        // Fallback for browsers/contexts where clipboard API is blocked
        const textArea = document.createElement('textarea');
        textArea.value = incidentNumber;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopiedId(id);
      setTimeout(() => {
        setCopiedId(null);
        setHoveredId(null);
      }, 2000);
    } catch (err) {
      // Final fallback using execCommand
      try {
        const textArea = document.createElement('textarea');
        textArea.value = incidentNumber;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
        setCopiedId(id);
        setTimeout(() => {
          setCopiedId(null);
          setHoveredId(null);
        }, 2000);
      } catch (fallbackErr) {
        console.error('Failed to copy:', fallbackErr);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
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

  // Tag management functions
  const handleAddTag = (incidentId: string, tag: string) => {
    if (!tag.trim()) return;
    
    setIncidents(prev => prev.map(incident => {
      if (incident.id === incidentId) {
        if (!incident.tags.includes(tag.trim())) {
          return { ...incident, tags: [...incident.tags, tag.trim()] };
        }
      }
      return incident;
    }));
    toast.success(`Tag "${tag}" added to incident`);
  };

  const handleRemoveTag = (incidentId: string, tagToRemove: string) => {
    setIncidents(prev => prev.map(incident => {
      if (incident.id === incidentId) {
        return { ...incident, tags: incident.tags.filter(tag => tag !== tagToRemove) };
      }
      return incident;
    }));
    toast.success(`Tag "${tagToRemove}" removed from incident`);
  };

  const handleOpenTagModal = (incidentId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIncidentForTags(incidentId);
    setTagModalOpen(true);
    setNewTag('');
  };

  const handleAddNewTag = () => {
    if (newTag.trim() && selectedIncidentForTags) {
      handleAddTag(selectedIncidentForTags, newTag);
      setNewTag('');
    }
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }

    const sortedIncidents = [...incidents].sort((a, b) => {
      if (column === 'client') {
        return sortDirection === 'asc'
          ? a.client.name.localeCompare(b.client.name)
          : b.client.name.localeCompare(a.client.name);
      } else if (column === 'incident') {
        return sortDirection === 'asc'
          ? a.incidentNumber.localeCompare(b.incidentNumber)
          : b.incidentNumber.localeCompare(a.incidentNumber);
      } else if (column === 'status') {
        return sortDirection === 'asc'
          ? a.status.localeCompare(b.status)
          : b.status.localeCompare(a.status);
      } else if (column === 'type') {
        return sortDirection === 'asc'
          ? a.type.localeCompare(b.type)
          : b.type.localeCompare(a.type);
      } else if (column === 'created') {
        return sortDirection === 'asc'
          ? a.created.localeCompare(b.created)
          : b.created.localeCompare(a.created);
      } else if (column === 'entities') {
        return sortDirection === 'asc'
          ? a.entities.length - b.entities.length
          : b.entities.length - a.entities.length;
      } else if (column === 'logs') {
        return sortDirection === 'asc'
          ? a.logs - b.logs
          : b.logs - a.logs;
      } else if (column === 'severity') {
        return sortDirection === 'asc'
          ? a.sentinelSeverity.localeCompare(b.sentinelSeverity)
          : b.sentinelSeverity.localeCompare(a.sentinelSeverity);
      } else if (column === 'owner') {
        // Sort with null owners at the end
        if (!a.owner && !b.owner) return 0;
        if (!a.owner) return sortDirection === 'asc' ? 1 : -1;
        if (!b.owner) return sortDirection === 'asc' ? -1 : 1;
        return sortDirection === 'asc'
          ? a.owner.name.localeCompare(b.owner.name)
          : b.owner.name.localeCompare(a.owner.name);
      } else if (column === 'attention') {
        return sortDirection === 'asc'
          ? a.attention.localeCompare(b.attention)
          : b.attention.localeCompare(a.attention);
      }
      return 0;
    });

    setIncidents(sortedIncidents);
  };

  // Get unique filter options from incidents
  const uniqueClients = useMemo(() => {
    return Array.from(new Set(mockIncidents.map(i => i.client.name))).sort();
  }, []);

  const uniqueOwners = useMemo(() => {
    const owners = mockIncidents
      .map(i => i.owner?.name)
      .filter((name): name is string => name !== null && name !== undefined);
    const uniqueOwnerNames = Array.from(new Set(owners)).sort();
    // Add "Unassigned" option if there are any incidents without owners
    const hasUnassigned = mockIncidents.some(i => !i.owner);
    return hasUnassigned ? ['Unassigned', ...uniqueOwnerNames] : uniqueOwnerNames;
  }, []);

  const uniqueStatuses: IncidentStatus[] = ['New', 'Active', 'Closed'];
  const uniqueSeverities: SeverityLevel[] = ['Low', 'Medium', 'High'];
  const uniqueAttention: AttentionType[] = ['True Positive Detected', 'Threat Intel: Medium', 'Threat Intel: Low', 'No Attention'];

  const toggleFilterSection = (section: string) => {
    setExpandedFilterSection(expandedFilterSection === section ? null : section);
  };

  const toggleFilterValue = (category: 'clients' | 'status' | 'severity' | 'owner' | 'attention', value: string) => {
    setSelectedFilters(prev => {
      const currentValues = prev[category] as string[];
      const isSelected = currentValues.includes(value);
      
      return {
        ...prev,
        [category]: isSelected 
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value]
      };
    });
    setCurrentPage(1); // Reset to page 1 when filters change
  };

  // Metric card filter handlers
  const handleThreatTypeClick = (threatType: string) => {
    setMetricFilters(prev => ({
      ...prev,
      threatType: prev.threatType === threatType ? null : threatType
    }));
    setCurrentPage(1);
    toast.success(metricFilters.threatType === threatType ? 'Filter cleared' : `Filtering by: ${threatType}`);
  };

  const handleSeverityClick = (severity: SeverityLevel) => {
    setMetricFilters(prev => ({
      ...prev,
      severity: prev.severity === severity ? null : severity
    }));
    setCurrentPage(1);
    toast.success(metricFilters.severity === severity ? 'Filter cleared' : `Filtering by ${severity} severity`);
  };

  const handleAttentionClick = (attention: AttentionType) => {
    setMetricFilters(prev => ({
      ...prev,
      attention: prev.attention === attention ? null : attention
    }));
    setCurrentPage(1);
    toast.success(metricFilters.attention === attention ? 'Filter cleared' : `Filtering by: ${attention}`);
  };

  const clearAllMetricFilters = () => {
    setMetricFilters({
      threatType: null,
      severity: null,
      attention: null
    });
    toast.success('All metric filters cleared');
  };

  // Filter incidents based on search query and filters
  const filteredIncidents = useMemo(() => {
    let filtered = incidents;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(incident => {
        // Search in incident number
        if (incident.incidentNumber.toLowerCase().includes(query)) return true;
        
        // Search in client name
        if (incident.client.name.toLowerCase().includes(query)) return true;
        
        // Search in status
        if (incident.status.toLowerCase().includes(query)) return true;
        
        // Search in type
        if (incident.type.toLowerCase().includes(query)) return true;
        
        // Search in attention
        if (incident.attention.toLowerCase().includes(query)) return true;
        
        // Search in severity
        if (incident.sentinelSeverity.toLowerCase().includes(query)) return true;
        
        // Search in entities
        if (incident.entities.some(entity => 
          entity.name.toLowerCase().includes(query) || 
          entity.type.toLowerCase().includes(query)
        )) return true;
        
        return false;
      });
    }

    // Apply advanced filters
    if (selectedFilters.clients.length > 0) {
      filtered = filtered.filter(incident => selectedFilters.clients.includes(incident.client.name));
    }

    if (selectedFilters.status.length > 0) {
      filtered = filtered.filter(incident => selectedFilters.status.includes(incident.status));
    }

    if (selectedFilters.severity.length > 0) {
      filtered = filtered.filter(incident => selectedFilters.severity.includes(incident.sentinelSeverity));
    }

    if (selectedFilters.owner.length > 0) {
      filtered = filtered.filter(incident => {
        if (selectedFilters.owner.includes('Unassigned')) {
          return !incident.owner || selectedFilters.owner.includes(incident.owner?.name || '');
        }
        return incident.owner && selectedFilters.owner.includes(incident.owner.name);
      });
    }

    if (selectedFilters.attention.length > 0) {
      filtered = filtered.filter(incident => selectedFilters.attention.includes(incident.attention));
    }

    // Apply metric card filters
    if (metricFilters.threatType) {
      filtered = filtered.filter(incident => incident.type === metricFilters.threatType);
    }

    if (metricFilters.severity) {
      filtered = filtered.filter(incident => incident.sentinelSeverity === metricFilters.severity);
    }

    if (metricFilters.attention) {
      filtered = filtered.filter(incident => incident.attention === metricFilters.attention);
    }

    return filtered;
  }, [incidents, searchQuery, selectedFilters, metricFilters]);

  // Calculate statistics for metric cards
  const statistics = useMemo(() => {
    // Key Threats - top 5 threat types
    const threatCounts: Record<string, number> = {};
    incidents.forEach(incident => {
      threatCounts[incident.type] = (threatCounts[incident.type] || 0) + 1;
    });
    const keyThreats = Object.entries(threatCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([type, count]) => ({ type, count }));

    // Sentinel Severity distribution
    const severityCounts = {
      High: incidents.filter(i => i.sentinelSeverity === 'High').length,
      Medium: incidents.filter(i => i.sentinelSeverity === 'Medium').length,
      Low: incidents.filter(i => i.sentinelSeverity === 'Low').length
    };

    // Attention metrics
    const attentionCounts = {
      'True Positive Detected': incidents.filter(i => i.attention === 'True Positive Detected').length,
      'Threat Intel: High Risk': incidents.filter(i => i.attention === 'Threat Intel: High Risk').length,
      'Threat Intel: Medium Risk': incidents.filter(i => i.attention === 'Threat Intel: Medium Risk').length,
      'Threat Intel: Low Risk': incidents.filter(i => i.attention === 'Threat Intel: Low Risk').length,
      'Tuning: False Positive': incidents.filter(i => i.attention === 'Tuning: False Positive').length
    };

    return { keyThreats, severityCounts, attentionCounts };
  }, [incidents]);

  // Apply sorting
  const sortedIncidents = useMemo(() => {
    if (!sortColumn) return filteredIncidents;

    const sorted = [...filteredIncidents].sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortColumn) {
        case 'client':
          aValue = a.client.name.toLowerCase();
          bValue = b.client.name.toLowerCase();
          break;
        case 'incident':
          aValue = a.incidentNumber;
          bValue = b.incidentNumber;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'type':
          aValue = a.type.toLowerCase();
          bValue = b.type.toLowerCase();
          break;
        case 'created':
          aValue = new Date(a.created).getTime();
          bValue = new Date(b.created).getTime();
          break;
        case 'severity':
          const severityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
          aValue = severityOrder[a.sentinelSeverity as keyof typeof severityOrder];
          bValue = severityOrder[b.sentinelSeverity as keyof typeof severityOrder];
          break;
        case 'owner':
          aValue = a.owner?.name || '';
          bValue = b.owner?.name || '';
          break;
        case 'attention':
          aValue = a.attention;
          bValue = b.attention;
          break;
        default:
          return 0;
      }

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [filteredIncidents, sortColumn, sortDirection]);

  // Pagination calculations
  const totalPages = Math.ceil(sortedIncidents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentIncidents = sortedIncidents.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Generate page numbers to display
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
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(-1); // Ellipsis
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1); // Ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Bulk selection handlers
  const handleSelectAll = () => {
    if (selectedIncidents.length === currentIncidents.length) {
      setSelectedIncidents([]);
    } else {
      setSelectedIncidents(currentIncidents.map(incident => incident.id));
    }
  };

  const handleSelectIncident = (incidentId: string) => {
    setSelectedIncidents(prev => {
      if (prev.includes(incidentId)) {
        return prev.filter(id => id !== incidentId);
      } else {
        return [...prev, incidentId];
      }
    });
  };

  const handleClearSelection = () => {
    setSelectedIncidents([]);
  };

  // Quick action handlers
  const handleAssignSubmit = () => {
    if (!assignToAnalyst) return;
    
    const analyst = availableAnalysts.find(a => a.id === assignToAnalyst);
    const count = selectedIncidents.length;
    
    setIncidents(prev => prev.map(incident => {
      if (selectedIncidents.includes(incident.id)) {
        return {
          ...incident,
          owner: analyst ? { name: analyst.name, role: analyst.role } : incident.owner
        };
      }
      return incident;
    }));
    
    toast.success(`Successfully assigned ${count} incident${count !== 1 ? 's' : ''} to ${analyst?.name}`);
    
    setActiveQuickAction(null);
    setAssignToAnalyst('');
    setSelectedIncidents([]);
  };

  const handleChangeStatusSubmit = () => {
    const count = selectedIncidents.length;
    
    setIncidents(prev => prev.map(incident => {
      if (selectedIncidents.includes(incident.id)) {
        return {
          ...incident,
          status: bulkStatus,
          severity: bulkSeverity
        };
      }
      return incident;
    }));
    
    toast.success(`Successfully updated ${count} incident${count !== 1 ? 's' : ''} to ${bulkStatus} with ${bulkSeverity} severity`);
    
    setActiveQuickAction(null);
    setSelectedIncidents([]);
  };

  const closeNotifyModal = () => {
    setActiveQuickAction(null);
    setNotificationMessage('');
    setNotificationMethod('email');
  };

  const handleNotifyCustomer = () => {
    if (!notificationMessage.trim()) return;
    
    const count = selectedIncidents.length;
    const methodText = notificationMethod === 'both' ? 'email and SMS' : notificationMethod.toUpperCase();
    
    console.log('Sending notification to customers:', {
      incidents: selectedIncidents,
      message: notificationMessage,
      method: notificationMethod
    });
    
    toast.success(`Notification sent via ${methodText} for ${count} incident${count !== 1 ? 's' : ''}`);
    
    closeNotifyModal();
    setSelectedIncidents([]);
  };

  const handleCreateTicket = () => {
    const count = selectedIncidents.length;
    
    console.log('Creating tickets for incidents:', selectedIncidents);
    
    toast.success(`Successfully created ${count} ticket${count !== 1 ? 's' : ''} in ConnectWise`);
    
    setActiveQuickAction(null);
    setSelectedIncidents([]);
  };

  const handleRunPlaybook = () => {
    if (!selectedPlaybook) return;
    
    const count = selectedIncidents.length;
    const playbook = availablePlaybooks.find(p => p.id === selectedPlaybook);
    
    console.log('Running playbook:', {
      playbook: selectedPlaybook,
      incidents: selectedIncidents
    });
    
    toast.success(`${playbook?.name} playbook started for ${count} incident${count !== 1 ? 's' : ''}`);
    
    setActiveQuickAction(null);
    setSelectedPlaybook('');
    setSelectedIncidents([]);
  };

  const isAllSelected = currentIncidents.length > 0 && selectedIncidents.length === currentIncidents.length;
  const isSomeSelected = selectedIncidents.length > 0 && selectedIncidents.length < currentIncidents.length;

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-y-auto overflow-x-hidden bg-[rgba(0,0,0,0)]">
      {/* Entity Tooltip */}
      {hoveredEntityId && (() => {
        const incident = mockIncidents.find(i => i.id === hoveredEntityId);
        if (!incident || incident.entities.length <= 1) return null;
        
        return (
          <div 
            className="fixed z-50 pointer-events-none"
            style={{ 
              left: `${tooltipPos.x + 15}px`, 
              top: `${tooltipPos.y + 15}px` 
            }}
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-3 min-w-[240px]">
              <div className="text-xs uppercase tracking-wider text-[#092E3F]/50 mb-2 px-1">
                All Entities ({incident.entities.length})
              </div>
              <div className="space-y-1.5">
                {incident.entities.map((entity, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-1.5 rounded-md bg-[#e5f2f4]">
                      <EntityIcon type={entity.type} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-wide text-[#092E3F]/50">
                        {entity.type}
                      </div>
                      <div className="text-xs text-[#092E3F] truncate">
                        {entity.name}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
      
      {/* Tooltip */}
      {(hoveredId || copiedId) && (
        <div 
          className="fixed z-50 pointer-events-none"
          style={{ 
            left: `${tooltipPos.x + 15}px`, 
            top: `${tooltipPos.y + 15}px` 
          }}
        >
          <div className={`px-3 py-2 rounded-lg shadow-lg flex items-center gap-2 text-xs whitespace-nowrap transition-all ${
            copiedId 
              ? 'bg-[#2A96A8] text-white shadow-[#2A96A8]/30' 
              : 'bg-[#092E3F] text-white shadow-gray-900/20'
          }`}>
            {copiedId ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>#{mockIncidents.find(i => i.id === copiedId)?.incidentNumber} copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy to clipboard</span>
              </>
            )}
          </div>
        </div>
      )}
      
      <div className="max-w-full h-full flex flex-col p-[16px]">
        {/* Header Section */}
        <div className="mb-3">
          {/* Overview Accordion */}
          <div className="mb-6">
            <button
              onClick={() => setIsOverviewExpanded(!isOverviewExpanded)}
              className="flex items-center gap-2 mb-4 hover:opacity-70 transition-opacity"
            >
              <h2 className="text-lg text-[#092E3F]">Overview</h2>
              {isOverviewExpanded ? (
                <ChevronUp className="w-5 h-5 text-[#092E3F]/60" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#092E3F]/60" />
              )}
            </button>

            {/* Metric Cards */}
            {isOverviewExpanded && (
              <IncidentMetricCards
                selectedDate={selectedDate}
                statistics={statistics}
                activeFilters={metricFilters}
                onThreatTypeClick={handleThreatTypeClick}
                onSeverityClick={handleSeverityClick}
                onAttentionClick={handleAttentionClick}
              />
            )}
          </div>

          {/* Alerts Title with Count */}
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-[#092E3F]">Alerts</h1>
            <span className="px-3 py-1 bg-[#2A96A8]/10 text-[#2A96A8] rounded-full text-sm">
              {sortedIncidents.length}
            </span>
          </div>

          {/* Active Metric Filters Display */}
          {(metricFilters.threatType || metricFilters.severity || metricFilters.attention) && (
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-sm text-[#092E3F]/60">Active Filters:</span>
              {metricFilters.threatType && (
                <button
                  onClick={() => handleThreatTypeClick(metricFilters.threatType!)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200 transition-colors"
                >
                  <Target className="w-3.5 h-3.5" />
                  <span className="max-w-[200px] truncate">{metricFilters.threatType}</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              {metricFilters.severity && (
                <button
                  onClick={() => handleSeverityClick(metricFilters.severity!)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2A96A8]/20 text-[#2A96A8] rounded-lg text-sm hover:bg-[#2A96A8]/30 transition-colors"
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>{metricFilters.severity} Severity</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              {metricFilters.attention && (
                <button
                  onClick={() => handleAttentionClick(metricFilters.attention!)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-lg text-sm hover:bg-orange-200 transition-colors"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="max-w-[200px] truncate">{metricFilters.attention}</span>
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={clearAllMetricFilters}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
              >
                <span>Clear All</span>
              </button>
            </div>
          )}

          {/* Filters Bar - Clean Design */}
          <div className="flex items-center gap-3 flex-wrap">
            {/* Search */}
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#092E3F]/40" />
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to page 1 when search changes
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
                {(selectedFilters.clients.length > 0 || selectedFilters.status.length > 0 || selectedFilters.severity.length > 0 || selectedFilters.owner.length > 0 || selectedFilters.attention.length > 0) && (
                  <span className="ml-1 px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                    {selectedFilters.clients.length + selectedFilters.status.length + selectedFilters.severity.length + selectedFilters.owner.length + selectedFilters.attention.length}
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

                    {/* Status Filter */}
                    <div className="border-b border-gray-100">
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
                          {uniqueStatuses.map((status) => (
                            <label
                              key={status}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.status.includes(status)}
                                  onChange={() => toggleFilterValue('status', status)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.status.includes(status) 
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
                              <span className="text-sm text-[#092E3F]">{status}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Severity Filter */}
                    <div className="border-b border-gray-100">
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('severity')}
                      >
                        <span className="text-sm text-[#092E3F]">Severity</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.severity.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.severity.length}
                            </span>
                          )}
                          {expandedFilterSection === 'severity' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'severity' && (
                        <div className="px-4 pb-2 space-y-1">
                          {uniqueSeverities.map((severity) => (
                            <label
                              key={severity}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.severity.includes(severity)}
                                  onChange={() => toggleFilterValue('severity', severity)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.severity.includes(severity) 
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
                              <span className="text-sm text-[#092E3F]">{severity}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Owner Filter */}
                    <div className="border-b border-gray-100">
                      <button
                        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => toggleFilterSection('owner')}
                      >
                        <span className="text-sm text-[#092E3F]">Owner</span>
                        <div className="flex items-center gap-2">
                          {selectedFilters.owner.length > 0 && (
                            <span className="px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                              {selectedFilters.owner.length}
                            </span>
                          )}
                          {expandedFilterSection === 'owner' ? (
                            <ChevronUp className="w-4 h-4 text-[#092E3F]/60" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
                          )}
                        </div>
                      </button>
                      {expandedFilterSection === 'owner' && (
                        <div className="px-4 pb-2 space-y-1">
                          {uniqueOwners.map((owner) => (
                            <label
                              key={owner}
                              className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                            >
                              <div className="relative flex items-center">
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.owner.includes(owner)}
                                  onChange={() => toggleFilterValue('owner', owner)}
                                  className="peer sr-only"
                                />
                                <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                                  <svg 
                                    className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
                                      selectedFilters.owner.includes(owner) 
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
                              <span className={`text-sm ${owner === 'Unassigned' ? 'text-red-500 italic' : 'text-[#092E3F]'}`}>{owner}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Attention Filter */}
                    <div>
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
        <div className="bg-white rounded-2xl border border-white overflow-hidden flex-1 flex flex-col relative">
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
                  {visibleColumns.client && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.client}px`, minWidth: `${columnWidths.client}px`, maxWidth: `${columnWidths.client}px` }}
                    onClick={() => handleSort('client')}
                  >
                    <div className="flex items-center gap-2">
                      {/* Select All Checkbox - shown when any items are selected */}
                      {selectedIncidents.length > 0 && (
                        <div onClick={(e) => { e.stopPropagation(); handleSelectAll(); }} className="mr-1">
                          <div 
                            className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center cursor-pointer ${
                              isAllSelected || isSomeSelected
                                ? 'bg-[#2A96A8] border-[#2A96A8]'
                                : 'border-gray-300 hover:border-[#2A96A8] bg-white'
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
                      )}
                      Client
                      {sortColumn === 'client' ? (
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
                      onMouseDown={handleMouseDown('client')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.incident && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.incident}px`, minWidth: `${columnWidths.incident}px`, maxWidth: `${columnWidths.incident}px` }}
                    onClick={() => handleSort('incident')}
                  >
                    <div className="flex items-center gap-2">
                      Incident
                      {sortColumn === 'incident' ? (
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
                      onMouseDown={handleMouseDown('incident')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.status && (
                  <th 
                    className="px-4 py-3 text-center text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.status}px`, minWidth: `${columnWidths.status}px`, maxWidth: `${columnWidths.status}px` }}
                    onClick={() => handleSort('status')}
                  >
                    <div className="flex items-center justify-center gap-2">
                      Status
                      {sortColumn === 'status' ? (
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
                      onMouseDown={handleMouseDown('status')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.type && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.type}px`, minWidth: `${columnWidths.type}px`, maxWidth: `${columnWidths.type}px` }}
                    onClick={() => handleSort('type')}
                  >
                    <div className="flex items-center gap-2">
                      Type
                      {sortColumn === 'type' ? (
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
                      onMouseDown={handleMouseDown('type')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.created && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.created}px`, minWidth: `${columnWidths.created}px`, maxWidth: `${columnWidths.created}px` }}
                    onClick={() => handleSort('created')}
                  >
                    <div className="flex items-center gap-2">
                      Created
                      {sortColumn === 'created' ? (
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
                      onMouseDown={handleMouseDown('created')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.entities && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.entities}px`, minWidth: `${columnWidths.entities}px`, maxWidth: `${columnWidths.entities}px` }}
                    onClick={() => handleSort('entities')}
                  >
                    <div className="flex items-center gap-2">
                      Entities
                      {sortColumn === 'entities' ? (
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
                      onMouseDown={handleMouseDown('entities')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.logs && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.logs}px`, minWidth: `${columnWidths.logs}px`, maxWidth: `${columnWidths.logs}px` }}
                    onClick={() => handleSort('logs')}
                  >
                    <div className="flex items-center gap-2">
                      Logs
                      {sortColumn === 'logs' ? (
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
                      onMouseDown={handleMouseDown('logs')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.severity && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.severity}px`, minWidth: `${columnWidths.severity}px`, maxWidth: `${columnWidths.severity}px` }}
                    onClick={() => handleSort('severity')}
                  >
                    <div className="flex items-center gap-2">
                      Severity
                      {sortColumn === 'severity' ? (
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
                      onMouseDown={handleMouseDown('severity')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.owner && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                    style={{ width: `${columnWidths.owner}px`, minWidth: `${columnWidths.owner}px`, maxWidth: `${columnWidths.owner}px` }}
                    onClick={() => handleSort('owner')}
                  >
                    <div className="flex items-center gap-2">
                      Owner
                      {sortColumn === 'owner' ? (
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
                      onMouseDown={handleMouseDown('owner')}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                    </div>
                  </th>
                  )}
                  {visibleColumns.tags && (
                  <th 
                    className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none"
                    style={{ width: `${columnWidths.tags}px`, minWidth: `${columnWidths.tags}px`, maxWidth: `${columnWidths.tags}px` }}
                  >
                    <div className="flex items-center justify-start gap-2">
                      <Tag className="w-3.5 h-3.5" />
                      Tags
                    </div>
                    <div 
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-col-resize hover:bg-[#2A96A8] transition-colors flex items-center justify-center"
                      onMouseDown={handleMouseDown('tags')}
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
                      {sortColumn === 'attention' ? (
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
              <tbody className="divide-y divide-gray-100">
                {currentIncidents.length === 0 ? (
                  <tr>
                    <td colSpan={Object.values(visibleColumns).filter(Boolean).length} className="px-4 py-20 text-center">
                      <div className="flex flex-col items-center justify-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2A96A8]/10 to-[#2A96A8]/5 rounded-2xl flex items-center justify-center">
                          <Inbox className="w-8 h-8 text-[#2A96A8]/40" />
                        </div>
                        <div className="max-w-md">
                          <h3 className="text-[#092E3F] mb-2">No incidents found</h3>
                          <p className="text-sm text-[#092E3F]/60 mb-4">
                            We couldn't find any incidents matching your search criteria. Try adjusting your filters or search terms.
                          </p>
                          {(searchQuery || selectedFilters.clients.length > 0 || selectedFilters.status.length > 0 || selectedFilters.severity.length > 0 || selectedFilters.owner.length > 0 || selectedFilters.attention.length > 0) && (
                            <button
                              onClick={handleResetFilters}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#1d7080] transition-all text-sm"
                            >
                              <Undo2 className="w-4 h-4" />
                              Clear all filters
                            </button>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  currentIncidents.map((incident, index) => (
                  <tr 
                    key={incident.id} 
                    onClick={() => setSelectedIncidentDetail(incident)}
                    className={`transition-colors group cursor-pointer ${
                      selectedIncidents.includes(incident.id)
                        ? 'bg-[#2A96A8]/5 hover:bg-[#2A96A8]/10'
                        : 'hover:bg-gray-50/50'
                    }`}
                  >
                    {/* Client - Avatar transforms to checkbox on hover/selection */}
                    {visibleColumns.client && (
                    <td className="px-4 py-3" style={{ width: `${columnWidths.client}px`, minWidth: `${columnWidths.client}px`, maxWidth: `${columnWidths.client}px` }}>
                      <div className="flex items-center gap-2 overflow-hidden">
                        <div className="relative w-8 h-8 shrink-0" onClick={(e) => e.stopPropagation()}>
                          {/* Avatar - hidden on hover or when ANY item is selected */}
                          <img 
                            src={incident.client.logo} 
                            alt={incident.client.name} 
                            className={`w-8 h-8 rounded-full object-cover border border-gray-200 transition-opacity ${
                              selectedIncidents.length > 0 ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
                            }`}
                          />
                          {/* Checkbox - shown on hover or when ANY item is selected */}
                          <div 
                            className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                              selectedIncidents.length > 0 ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={selectedIncidents.includes(incident.id)}
                              onChange={() => handleSelectIncident(incident.id)}
                              className="peer sr-only"
                            />
                            <div 
                              onClick={() => handleSelectIncident(incident.id)}
                              className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center cursor-pointer ${
                                selectedIncidents.includes(incident.id)
                                  ? 'bg-[#2A96A8] border-[#2A96A8]'
                                  : 'border-gray-300 hover:border-[#2A96A8] bg-white'
                              }`}
                            >
                              <svg 
                                className={`w-3 h-3 text-white transition-all duration-200 ${
                                  selectedIncidents.includes(incident.id)
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
                        </div>
                        <span className="text-sm text-[#092E3F] truncate">{incident.client.name}</span>
                      </div>
                    </td>
                    )}

                    {/* Incident Number */}
                    {visibleColumns.incident && (
                    <td className="px-4 py-3" style={{ width: `${columnWidths.incident}px`, minWidth: `${columnWidths.incident}px`, maxWidth: `${columnWidths.incident}px` }}>
                      <div className="flex items-center gap-2">
                        <span 
                          className="inline-flex items-center px-2.5 py-1 bg-[#e5f2f4] text-[#092E3F] rounded-lg text-xs hover:bg-[#2A96A8] hover:text-white transition-all cursor-pointer"
                          onClick={() => setSelectedIncidentDetail(incident)}
                        >
                          #{incident.incidentNumber}
                        </span>
                        <button
                          className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopyIncident(incident.incidentNumber, incident.id);
                          }}
                          onMouseEnter={() => setHoveredId(incident.id)}
                          onMouseLeave={() => {
                            if (copiedId !== incident.id) {
                              setHoveredId(null);
                            }
                          }}
                          onMouseMove={handleMouseMove}
                          title="Copy incident number"
                        >
                          {copiedId === incident.id ? (
                            <Check className="w-3.5 h-3.5 text-green-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5 text-[#092E3F]/60" />
                          )}
                        </button>
                      </div>
                    </td>
                    )}

                    {/* Status */}
                    {visibleColumns.status && (
                    <td className="px-4 py-3 text-center" style={{ width: `${columnWidths.status}px`, minWidth: `${columnWidths.status}px`, maxWidth: `${columnWidths.status}px` }}>
                      <StatusBadge status={incident.status} />
                    </td>
                    )}

                    {/* Type */}
                    {visibleColumns.type && (
                    <td className="px-4 py-3" style={{ width: `${columnWidths.type}px`, minWidth: `${columnWidths.type}px`, maxWidth: `${columnWidths.type}px` }}>
                      <p className="text-sm text-[#092E3F] truncate" title={incident.type}>
                        {incident.type}
                      </p>
                    </td>
                    )}

                    {/* Created */}
                    {visibleColumns.created && (
                    <td className="px-4 py-3" style={{ width: `${columnWidths.created}px`, minWidth: `${columnWidths.created}px`, maxWidth: `${columnWidths.created}px` }}>
                      <span className="text-xs text-[#092E3F]/60 truncate block">{incident.created}</span>
                    </td>
                    )}

                    {/* Entities */}
                    {visibleColumns.entities && (
                    <td className="px-4 py-3" style={{ width: `${columnWidths.entities}px`, minWidth: `${columnWidths.entities}px`, maxWidth: `${columnWidths.entities}px` }}>
                      <div className="flex items-center gap-1.5 overflow-hidden">
                        <span className="inline-block px-2.5 py-1 bg-[#e5f2f4] text-[#092E3F] rounded-lg text-xs truncate max-w-full">
                          {incident.entities[0].name}
                        </span>
                        {incident.entities.length > 1 && (
                          <span 
                            className="inline-flex items-center px-2 py-1 bg-[#2A96A8]/10 text-[#2A96A8] rounded-lg text-xs shrink-0 cursor-pointer hover:bg-[#2A96A8]/20 transition-all"
                            onMouseEnter={() => setHoveredEntityId(incident.id)}
                            onMouseLeave={() => setHoveredEntityId(null)}
                            onMouseMove={handleMouseMove}
                          >
                            +{incident.entities.length - 1}
                          </span>
                        )}
                      </div>
                    </td>
                    )}

                    {/* Logs */}
                    {visibleColumns.logs && (
                    <td className="px-4 py-3" style={{ width: `${columnWidths.logs}px`, minWidth: `${columnWidths.logs}px`, maxWidth: `${columnWidths.logs}px` }}>
                      <span className="text-sm text-[#092E3F]/80">{incident.logs}</span>
                    </td>
                    )}

                    {/* Sentinel Severity */}
                    {visibleColumns.severity && (
                    <td className="px-4 py-3" style={{ width: `${columnWidths.severity}px`, minWidth: `${columnWidths.severity}px`, maxWidth: `${columnWidths.severity}px` }}>
                      <SeverityBadge severity={incident.sentinelSeverity} />
                    </td>
                    )}

                    {/* Owner */}
                    {visibleColumns.owner && (
                    <td className="px-4 py-3" style={{ width: `${columnWidths.owner}px`, minWidth: `${columnWidths.owner}px`, maxWidth: `${columnWidths.owner}px` }}>
                      <OwnerBadge owner={incident.owner} />
                    </td>
                    )}

                    {/* Tags */}
                    {visibleColumns.tags && (
                    <td 
                      className="px-4 py-3" 
                      style={{ width: `${columnWidths.tags}px`, minWidth: `${columnWidths.tags}px`, maxWidth: `${columnWidths.tags}px` }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {(incident.tags || []).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#2A96A8]/10 text-[#2A96A8] rounded text-xs group/tag hover:bg-[#2A96A8]/20 transition-colors"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(incident.id, tag)}
                              className="opacity-0 group-hover/tag:opacity-100 hover:text-red-600 transition-all"
                              title="Remove tag"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                        <button
                          onClick={(e) => handleOpenTagModal(incident.id, e)}
                          className="inline-flex items-center gap-1 px-2 py-0.5 border border-dashed border-[#2A96A8]/30 text-[#2A96A8] rounded text-xs hover:bg-[#2A96A8]/10 hover:border-[#2A96A8] transition-all"
                          title="Add tag"
                        >
                          <Plus className="w-3 h-3" />
                          Add
                        </button>
                      </div>
                    </td>
                    )}

                    {/* Attention */}
                    {visibleColumns.attention && (
                    <td className="px-4 py-3 text-right bg-[#e5f2f4]/30" style={{ width: `${columnWidths.attention}px`, minWidth: `${columnWidths.attention}px`, maxWidth: `${columnWidths.attention}px` }}>
                      <div className="flex justify-end">
                        <AttentionBadge attention={incident.attention} />
                      </div>
                    </td>
                    )}

                    {/* Actions */}
                    {visibleColumns.action && (
                    <td className="px-4 py-3 relative bg-[#e5f2f4]/30" style={{ width: `${columnWidths.action}px`, minWidth: `${columnWidths.action}px`, maxWidth: `${columnWidths.action}px` }} onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        {/* Sentinel Button */}
                        <button 
                          className="bg-white p-[7px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-all"
                          title="Investigate in Sentinel"
                        >
                          <div className="size-6 flex items-center justify-center">
                            <img src={imgSentinelPng} alt="Sentinel" className="h-5 w-auto object-contain" />
                          </div>
                        </button>

                        {/* AutoTask Button */}
                        <button 
                          className="bg-white p-[7px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-all"
                          title="Open in AutoTask"
                        >
                          <div className="size-6 flex items-center justify-center overflow-clip rounded">
                            <img src={imgAutotaskPng} alt="AutoTask" className="size-6 object-cover" />
                          </div>
                        </button>

                        {/* More Actions Dropdown */}
                        <div className="relative">
                          <button 
                            className="bg-[#f6f6f6] p-[7px] rounded-full hover:bg-gray-200 transition-all"
                            title="More Actions"
                            onClick={(e) => {
                              e.stopPropagation();
                              
                              // Calculate if dropdown should open upward or downward
                              const buttonRect = e.currentTarget.getBoundingClientRect();
                              const viewportHeight = window.innerHeight;
                              const dropdownHeight = 320; // Approximate height of dropdown menu
                              const spaceBelow = viewportHeight - buttonRect.bottom;
                              
                              setDropdownPosition(spaceBelow < dropdownHeight ? 'top' : 'bottom');
                              setOpenDropdownId(openDropdownId === incident.id ? null : incident.id);
                            }}
                          >
                            <div className="size-6 flex items-center justify-center">
                              <svg className="size-6" fill="none" viewBox="0 0 24 24">
                                <path d={svgPaths.p1cbf28b0} fill="#6B828C" />
                              </svg>
                            </div>
                          </button>

                          {/* Dropdown Menu */}
                          {openDropdownId === incident.id && (
                            <>
                              <div 
                                className="fixed inset-0 z-40" 
                                onClick={() => setOpenDropdownId(null)}
                              />
                              <div className={`absolute right-0 ${dropdownPosition === 'top' ? 'bottom-full mb-1' : 'top-full mt-1'} w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50`}>
                                <button 
                                  className="w-full px-4 py-2.5 text-left text-sm text-[#092E3F] hover:bg-gray-50 transition-colors flex items-center gap-3"
                                  onClick={() => {
                                    console.log('Investigate in Sentinel');
                                    setOpenDropdownId(null);
                                  }}
                                >
                                  <Shield className="w-4 h-4 text-[#092E3F]/60" />
                                  <span>Investigate in Sentinel</span>
                                </button>
                                
                                <button 
                                  className="w-full px-4 py-2.5 text-left text-sm text-[#092E3F] hover:bg-gray-50 transition-colors flex items-center gap-3"
                                  onClick={() => {
                                    console.log('Open in company.Seculyze');
                                    setOpenDropdownId(null);
                                  }}
                                >
                                  <ExternalLink className="w-4 h-4 text-[#092E3F]/60" />
                                  <span>Open in company.Seculyze</span>
                                </button>

                                <div className="my-1 border-t border-gray-100" />
                                
                                <button 
                                  className="w-full px-4 py-2.5 text-left text-sm text-[#092E3F] hover:bg-gray-50 transition-colors flex items-center gap-3"
                                  onClick={() => {
                                    console.log('Discard Attention');
                                    setOpenDropdownId(null);
                                  }}
                                >
                                  <AlertCircle className="w-4 h-4 text-[#092E3F]/60" />
                                  <span>Discard Attention</span>
                                </button>
                                
                                <button 
                                  className="w-full px-4 py-2.5 text-left text-sm text-[#092E3F] hover:bg-gray-50 transition-colors flex items-center gap-3"
                                  onClick={() => {
                                    console.log('Remove from Queue');
                                    setOpenDropdownId(null);
                                  }}
                                >
                                  <Trash2 className="w-4 h-4 text-[#092E3F]/60" />
                                  <span>Remove from Queue</span>
                                </button>

                                <div className="my-1 border-t border-gray-100" />
                                
                                <button 
                                  className="w-full px-4 py-2.5 text-left text-sm text-[#092E3F] hover:bg-gray-50 transition-colors flex items-center gap-3"
                                  onClick={() => {
                                    console.log('Edit');
                                    setOpenDropdownId(null);
                                  }}
                                >
                                  <Edit className="w-4 h-4 text-[#092E3F]/60" />
                                  <span>Edit</span>
                                </button>
                                
                                <button 
                                  className="w-full px-4 py-2.5 text-left text-sm text-[#092E3F] hover:bg-gray-50 transition-colors flex items-center gap-3"
                                  onClick={() => {
                                    console.log('Generate Incident Report');
                                    setOpenDropdownId(null);
                                  }}
                                >
                                  <FileCheck className="w-4 h-4 text-[#092E3F]/60" />
                                  <span>Generate Incident Report</span>
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </td>
                    )}
                  </tr>
                ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-[#092E3F]/60">
            Showing <span className="text-[#092E3F]">{sortedIncidents.length === 0 ? 0 : startIndex + 1}-{Math.min(endIndex, sortedIncidents.length)}</span> of <span className="text-[#092E3F]">{sortedIncidents.length}</span> incidents
          </p>
          <div className="flex items-center gap-1">
            <button 
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                currentPage === 1 
                  ? 'text-[#092E3F]/30 cursor-not-allowed' 
                  : 'text-[#092E3F]/60 hover:text-[#092E3F] hover:bg-white'
              }`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {getPageNumbers().map((page, index) => 
              page === -1 ? (
                <span key={`ellipsis-${index}`} className="px-2 py-1.5 text-sm text-[#092E3F]/40">
                  ...
                </span>
              ) : (
                <button 
                  key={page}
                  className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                    currentPage === page 
                      ? 'bg-[#2A96A8] text-white' 
                      : 'text-[#092E3F]/60 hover:text-[#092E3F] hover:bg-white'
                  }`}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </button>
              )
            )}
            
            <button 
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                currentPage === totalPages 
                  ? 'text-[#092E3F]/30 cursor-not-allowed' 
                  : 'text-[#092E3F]/60 hover:text-[#092E3F] hover:bg-white'
              }`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>

        {/* Quick Actions Panel */}
        {selectedIncidents.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-5 duration-300">
            <div className="bg-white border-t border-gray-200 shadow-2xl">
              <div className="max-w-[1400px] mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#2A96A8] text-white flex items-center justify-center">
                        <span className="text-sm">{selectedIncidents.length}</span>
                      </div>
                      <div>
                        <p className="text-sm text-[#092E3F]">
                          <span className="font-medium">{selectedIncidents.length}</span> incident{selectedIncidents.length !== 1 ? 's' : ''} selected
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

                    {/* Quick Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        className="flex items-center gap-2 px-4 py-2 bg-[#092E3F] text-white rounded-lg hover:bg-[#092E3F]/90 transition-all text-sm"
                        onClick={() => setActiveQuickAction('assign')}
                      >
                        <UserPlus className="w-4 h-4" />
                        Assign
                      </button>

                      <button
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-sm"
                        onClick={() => setActiveQuickAction('changeStatus')}
                      >
                        <Edit className="w-4 h-4" />
                        Change Status
                      </button>

                      <button
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-sm"
                        onClick={() => setActiveQuickAction('notify')}
                      >
                        <Bell className="w-4 h-4" />
                        Notify Customer
                      </button>

                      <button
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-sm"
                        onClick={() => setActiveQuickAction('ticket')}
                      >
                        <Ticket className="w-4 h-4" />
                        Create Ticket
                      </button>

                      <button
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-[#092E3F] rounded-lg hover:border-[#2A96A8] hover:text-[#2A96A8] transition-all text-sm"
                        onClick={() => setActiveQuickAction('playbook')}
                      >
                        <Play className="w-4 h-4" />
                        Run Playbook
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

        {/* Assign Modal */}
        {activeQuickAction === 'assign' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveQuickAction(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-[#092E3F]">Assign Incidents</h3>
                    <button 
                      onClick={() => setActiveQuickAction(null)}
                      className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-[#092E3F]/60" />
                    </button>
                  </div>
                  <p className="text-sm text-[#092E3F]/60 mt-1">
                    Assign {selectedIncidents.length} incident{selectedIncidents.length !== 1 ? 's' : ''} to an analyst
                  </p>
                </div>
                <div className="px-6 py-4">
                  <label className="block text-sm text-[#092E3F]/70 mb-2">Select Analyst</label>
                  <select
                    value={assignToAnalyst}
                    onChange={(e) => setAssignToAnalyst(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors"
                  >
                    <option value="">Choose an analyst...</option>
                    {availableAnalysts.map(analyst => (
                      <option key={analyst.id} value={analyst.id}>
                        {analyst.name} - {analyst.role}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveQuickAction(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAssignSubmit}
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

        {/* Change Status Modal */}
        {activeQuickAction === 'changeStatus' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveQuickAction(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-[#092E3F]">Change Status & Severity</h3>
                    <button 
                      onClick={() => setActiveQuickAction(null)}
                      className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-[#092E3F]/60" />
                    </button>
                  </div>
                  <p className="text-sm text-[#092E3F]/60 mt-1">
                    Update {selectedIncidents.length} incident{selectedIncidents.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="px-6 py-4 space-y-4">
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Status</label>
                    <select
                      value={bulkStatus}
                      onChange={(e) => setBulkStatus(e.target.value as IncidentStatus)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors"
                    >
                      <option value="New">New</option>
                      <option value="Active">Active</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Severity</label>
                    <select
                      value={bulkSeverity}
                      onChange={(e) => setBulkSeverity(e.target.value as SeverityLevel)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors"
                    >
                      <option value="Critical">Critical</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveQuickAction(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleChangeStatusSubmit}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Notify Customer Modal */}
        {activeQuickAction === 'notify' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={closeNotifyModal}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl animate-in zoom-in-95 duration-200">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-[#092E3F]">Notify Customer</h3>
                    <button 
                      onClick={closeNotifyModal}
                      className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-[#092E3F]/60" />
                    </button>
                  </div>
                  <p className="text-sm text-[#092E3F]/60 mt-1">
                    Send notification for {selectedIncidents.length} incident{selectedIncidents.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="px-6 py-4 space-y-4">
                  {/* Notification Method Selection */}
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-3">Notification Method</label>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setNotificationMethod('email')}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                          notificationMethod === 'email'
                            ? 'border-[#2A96A8] bg-[#2A96A8]/5 text-[#2A96A8]'
                            : 'border-gray-200 text-[#092E3F]/60 hover:border-gray-300'
                        }`}
                      >
                        <Mail className="w-5 h-5" />
                        <span className="text-sm font-medium">Email</span>
                      </button>
                      
                      <button
                        onClick={() => setNotificationMethod('sms')}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                          notificationMethod === 'sms'
                            ? 'border-[#2A96A8] bg-[#2A96A8]/5 text-[#2A96A8]'
                            : 'border-gray-200 text-[#092E3F]/60 hover:border-gray-300'
                        }`}
                      >
                        <MessageSquare className="w-5 h-5" />
                        <span className="text-sm font-medium">SMS</span>
                      </button>
                      
                      <button
                        onClick={() => setNotificationMethod('both')}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 transition-all ${
                          notificationMethod === 'both'
                            ? 'border-[#2A96A8] bg-[#2A96A8]/5 text-[#2A96A8]'
                            : 'border-gray-200 text-[#092E3F]/60 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          <MessageSquare className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">Both</span>
                      </button>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Notification Message</label>
                    <textarea
                      value={notificationMessage}
                      onChange={(e) => setNotificationMessage(e.target.value)}
                      placeholder="Enter your message to the customer..."
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[#092E3F] focus:outline-none focus:border-[#2A96A8] transition-colors resize-none"
                    />
                    <p className="text-xs text-[#092E3F]/50 mt-2">
                      {notificationMethod === 'email' && 'This message will be sent to all affected customers via email.'}
                      {notificationMethod === 'sms' && 'This message will be sent to all affected customers via SMS. Keep it concise for better delivery.'}
                      {notificationMethod === 'both' && 'This message will be sent to all affected customers via both email and SMS.'}
                    </p>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
                  <button
                    onClick={closeNotifyModal}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleNotifyCustomer}
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

        {/* Create Ticket Modal */}
        {activeQuickAction === 'ticket' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveQuickAction(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-[#092E3F]">Create Tickets</h3>
                    <button 
                      onClick={() => setActiveQuickAction(null)}
                      className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-[#092E3F]/60" />
                    </button>
                  </div>
                  <p className="text-sm text-[#092E3F]/60 mt-1">
                    Create tickets for {selectedIncidents.length} incident{selectedIncidents.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[#092E3F]">
                      <Check className="w-4 h-4 text-[#2A96A8]" />
                      <span>Tickets will be created in ConnectWise</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#092E3F]">
                      <Check className="w-4 h-4 text-[#2A96A8]" />
                      <span>Incident details will be auto-populated</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#092E3F]">
                      <Check className="w-4 h-4 text-[#2A96A8]" />
                      <span>Customers will be notified automatically</span>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveQuickAction(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleCreateTicket}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm"
                  >
                    Create Tickets
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Run Playbook Modal */}
        {activeQuickAction === 'playbook' && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => setActiveQuickAction(null)}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-in zoom-in-95 duration-200">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-[#092E3F]">Run Playbook</h3>
                    <button 
                      onClick={() => setActiveQuickAction(null)}
                      className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-[#092E3F]/60" />
                    </button>
                  </div>
                  <p className="text-sm text-[#092E3F]/60 mt-1">
                    Execute automated playbook on {selectedIncidents.length} incident{selectedIncidents.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <label className="block text-sm text-[#092E3F]/70 mb-2">Select Playbook</label>
                  <div className="space-y-2">
                    {availablePlaybooks.map(playbook => (
                      <label
                        key={playbook.id}
                        className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedPlaybook === playbook.id
                            ? 'border-[#2A96A8] bg-[#2A96A8]/5'
                            : 'border-gray-200 hover:border-[#2A96A8]/50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <input
                            type="radio"
                            name="playbook"
                            value={playbook.id}
                            checked={selectedPlaybook === playbook.id}
                            onChange={(e) => setSelectedPlaybook(e.target.value)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="text-sm text-[#092E3F]">{playbook.name}</div>
                            <div className="text-xs text-[#092E3F]/60 mt-0.5">{playbook.description}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveQuickAction(null)}
                    className="px-4 py-2 text-sm text-[#092E3F]/70 hover:text-[#092E3F] transition-colors"
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

        {/* Tag Management Modal */}
        {tagModalOpen && selectedIncidentForTags && (
          <>
            <div 
              className="fixed inset-0 bg-black/50 z-50" 
              onClick={() => {
                setTagModalOpen(false);
                setSelectedIncidentForTags(null);
                setNewTag('');
              }}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-200">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg text-[#092E3F] flex items-center gap-2">
                      <Tag className="w-5 h-5 text-[#2A96A8]" />
                      Manage Tags
                    </h3>
                    <button 
                      onClick={() => {
                        setTagModalOpen(false);
                        setSelectedIncidentForTags(null);
                        setNewTag('');
                      }}
                      className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5 text-[#092E3F]/60" />
                    </button>
                  </div>
                  <p className="text-sm text-[#092E3F]/60 mt-1">
                    Add or remove tags for Incident #{incidents.find(i => i.id === selectedIncidentForTags)?.incidentNumber}
                  </p>
                </div>
                
                <div className="px-6 py-4">
                  {/* Current Tags */}
                  <div className="mb-4">
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Current Tags</label>
                    <div className="flex flex-wrap gap-2 min-h-[40px] p-3 bg-gray-50 rounded-lg">
                      {(incidents.find(i => i.id === selectedIncidentForTags)?.tags || []).length === 0 ? (
                        <span className="text-sm text-[#092E3F]/40 italic">No tags added yet</span>
                      ) : (
                        (incidents.find(i => i.id === selectedIncidentForTags)?.tags || []).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#2A96A8]/10 text-[#2A96A8] rounded-lg text-sm group hover:bg-[#2A96A8]/20 transition-colors"
                          >
                            {tag}
                            <button
                              onClick={() => handleRemoveTag(selectedIncidentForTags, tag)}
                              className="hover:text-red-600 transition-colors"
                              title="Remove tag"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </span>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Add New Tag */}
                  <div>
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Add New Tag</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && newTag.trim()) {
                            handleAddNewTag();
                          }
                        }}
                        placeholder="Enter tag name..."
                        className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#092E3F] placeholder:text-[#092E3F]/40 focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] transition-all"
                      />
                      <button
                        onClick={handleAddNewTag}
                        disabled={!newTag.trim()}
                        className="px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Add
                      </button>
                    </div>
                  </div>

                  {/* Popular Tags */}
                  <div className="mt-4">
                    <label className="block text-sm text-[#092E3F]/70 mb-2">Quick Add</label>
                    <div className="flex flex-wrap gap-2">
                      {['Urgent', 'Review', 'Investigation', 'Escalated', 'Monitoring', 'False Positive'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => {
                            if (selectedIncidentForTags) {
                              handleAddTag(selectedIncidentForTags, tag);
                            }
                          }}
                          disabled={(incidents.find(i => i.id === selectedIncidentForTags)?.tags || []).includes(tag)}
                          className="px-3 py-1.5 border border-[#2A96A8]/30 text-[#2A96A8] rounded-lg text-xs hover:bg-[#2A96A8]/10 hover:border-[#2A96A8] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-end">
                  <button
                    onClick={() => {
                      setTagModalOpen(false);
                      setSelectedIncidentForTags(null);
                      setNewTag('');
                    }}
                    className="px-6 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#2A96A8]/90 transition-all text-sm"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Incident Detail Panel */}
        {selectedIncidentDetail && (
          <IncidentDetail 
            incident={{
              ...selectedIncidentDetail,
              incident: selectedIncidentDetail.incidentNumber,
              severity: selectedIncidentDetail.sentinelSeverity,
              entities: selectedIncidentDetail.entities.length,
              attention: [selectedIncidentDetail.attention],
              tags: selectedIncidentDetail.tags
            }}
            onClose={() => setSelectedIncidentDetail(null)}
            onUpdateTags={(incidentId, newTags) => {
              setIncidents(prev => prev.map(inc => 
                inc.id === incidentId ? { ...inc, tags: newTags } : inc
              ));
              if (selectedIncidentDetail) {
                setSelectedIncidentDetail({ ...selectedIncidentDetail, tags: newTags });
              }
            }}
          />
        )}
      </div>
    </div>
  );
}
