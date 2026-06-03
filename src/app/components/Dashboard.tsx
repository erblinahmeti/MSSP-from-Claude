import { useState } from 'react';
import { 
  Users, 
  AlertTriangle, 
  Activity, 
  Clock, 
  TrendingUp, 
  TrendingDown,
  Shield,
  Target,
  ChevronDown,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Building2,
  Calendar,
  BarChart3,
  LineChart as LineChartIcon,
  Euro,
  Timer,
  Database,
  Zap
} from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { toast } from 'sonner@2.0.3';

function Dashboard() {
  const [timeRange, setTimeRange] = useState('Last 7 days');
  const [isTimeRangeOpen, setIsTimeRangeOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const [clientFilter, setClientFilter] = useState('All Clients');
  const [isClientFilterOpen, setIsClientFilterOpen] = useState(false);

  // Tuning Impact states
  const [tuningTimeRange, setTuningTimeRange] = useState('Last 30 days');
  const [isTuningTimeRangeOpen, setIsTuningTimeRangeOpen] = useState(false);
  const [tuningChartType, setTuningChartType] = useState<'bar' | 'line'>('bar');

  // Microsoft Log Costs states
  const [logCostsTimeRange, setLogCostsTimeRange] = useState('Last 30 days');
  const [isLogCostsTimeRangeOpen, setIsLogCostsTimeRangeOpen] = useState(false);

  // Multi-client threat trend data (inspired by the attached image)
  const threatTrendData = [
    { date: 'Jan', nike: 45, adidas: 32, apple: 28, microsoft: 20, amazon: 18 },
    { date: 'Feb', nike: 52, adidas: 38, apple: 31, microsoft: 24, amazon: 22 },
    { date: 'Mar', nike: 48, adidas: 42, apple: 35, microsoft: 28, amazon: 25 },
    { date: 'Apr', nike: 61, adidas: 45, apple: 38, microsoft: 31, amazon: 28 },
    { date: 'May', nike: 55, adidas: 48, apple: 42, microsoft: 35, amazon: 31 },
    { date: 'Jun', nike: 67, adidas: 52, apple: 45, microsoft: 38, amazon: 35 }
  ];

  // Client data with logos and metrics
  const topClientsData = [
    { 
      name: 'Nike', 
      logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop',
      threats: 67,
      critical: 12,
      trend: '+8.2%',
      status: 'critical',
      color: '#ef4444'
    },
    { 
      name: 'Adidas', 
      logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=100&h=100&fit=crop',
      threats: 52,
      critical: 8,
      trend: '+5.4%',
      status: 'warning',
      color: '#f59e0b'
    },
    { 
      name: 'Apple', 
      logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=100&h=100&fit=crop',
      threats: 45,
      critical: 6,
      trend: '+3.1%',
      status: 'warning',
      color: '#3b82f6'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop',
      threats: 38,
      critical: 4,
      trend: '-1.2%',
      status: 'stable',
      color: '#10b981'
    },
    { 
      name: 'Amazon', 
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop',
      threats: 35,
      critical: 3,
      trend: '-0.8%',
      status: 'stable',
      color: '#8b5cf6'
    }
  ];

  // Recent critical incidents
  const recentIncidents = [
    { client: 'Nike', type: 'Ransomware Detection', severity: 'Critical', time: '5 min ago', status: 'active' },
    { client: 'Adidas', type: 'Data Exfiltration', severity: 'Critical', time: '12 min ago', status: 'active' },
    { client: 'Apple', type: 'Unauthorized Access', severity: 'High', time: '28 min ago', status: 'investigating' },
    { client: 'Nike', type: 'Malware Activity', severity: 'High', time: '1 hour ago', status: 'investigating' }
  ];

  // Threat distribution data
  const threatDistributionData = [
    { name: 'Initial Access', value: 24, color: '#ef4444' },
    { name: 'Execution', value: 20, color: '#f59e0b' },
    { name: 'Defense Evasion', value: 18, color: '#3b82f6' },
    { name: 'Credential Access', value: 16, color: '#8b5cf6' },
    { name: 'Command & Control', value: 12, color: '#10b981' },
    { name: 'Exfiltration', value: 10, color: '#ec4899' }
  ];

  // SLA Compliance data
  const slaData = [
    { metric: 'Response Time', value: 94, target: 95, status: 'warning' },
    { metric: 'Resolution Rate', value: 98, target: 95, status: 'success' },
    { metric: 'Detection Time', value: 92, target: 90, status: 'success' },
    { metric: 'Client Satisfaction', value: 96, target: 95, status: 'success' }
  ];

  const handleClientClick = (clientName: string) => {
    if (selectedClient === clientName) {
      setSelectedClient(null);
      toast.success('Filter cleared');
    } else {
      setSelectedClient(clientName);
      toast.success(`Viewing details for ${clientName}`);
    }
  };

  // Filter data based on clientFilter
  const filteredTopClients = clientFilter === 'All Clients' 
    ? topClientsData 
    : topClientsData.filter(c => c.name === clientFilter);

  const filteredIncidents = clientFilter === 'All Clients'
    ? recentIncidents
    : recentIncidents.filter(i => i.client === clientFilter);

  // Calculate filtered metrics
  const getFilteredMetrics = () => {
    if (clientFilter === 'All Clients') {
      return {
        totalClients: 247,
        activeThreats: 1834,
        criticalIncidents: 33,
        avgResponseTime: '4.2m',
        clientTrend: '+12%',
        threatTrend: '+8.2%',
        incidentTrend: '-3.1%',
        responseTrend: '-15%'
      };
    }

    // Single client metrics
    const client = topClientsData.find(c => c.name === clientFilter);
    if (!client) return null;

    return {
      totalClients: 1,
      activeThreats: client.threats,
      criticalIncidents: client.critical,
      avgResponseTime: '3.8m',
      clientTrend: '+0%',
      threatTrend: client.trend,
      incidentTrend: client.trend,
      responseTrend: '-12%'
    };
  };

  const metrics = getFilteredMetrics() || {
    totalClients: 0,
    activeThreats: 0,
    criticalIncidents: 0,
    avgResponseTime: '0m',
    clientTrend: '+0%',
    threatTrend: '+0%',
    incidentTrend: '+0%',
    responseTrend: '+0%'
  };

  // All Tuning Impact data
  const allTuningImpactData = {
    'Last 7 days': [
      { month: 'Day 1', falsePositives: 12, closedWithSeculyze: 18, totalIncidents: 52 },
      { month: 'Day 2', falsePositives: 10, closedWithSeculyze: 17, totalIncidents: 48 },
      { month: 'Day 3', falsePositives: 11, closedWithSeculyze: 19, totalIncidents: 51 },
      { month: 'Day 4', falsePositives: 9, closedWithSeculyze: 20, totalIncidents: 46 },
      { month: 'Day 5', falsePositives: 13, closedWithSeculyze: 18, totalIncidents: 54 },
      { month: 'Day 6', falsePositives: 11, closedWithSeculyze: 21, totalIncidents: 47 },
      { month: 'Day 7', falsePositives: 10, closedWithSeculyze: 19, totalIncidents: 49 }
    ],
    'Last 30 days': [
      { month: 'Week 1', falsePositives: 42, closedWithSeculyze: 58, totalIncidents: 198 },
      { month: 'Week 2', falsePositives: 38, closedWithSeculyze: 62, totalIncidents: 185 },
      { month: 'Week 3', falsePositives: 35, closedWithSeculyze: 65, totalIncidents: 178 },
      { month: 'Week 4', falsePositives: 32, closedWithSeculyze: 68, totalIncidents: 172 }
    ],
    'Last 90 days': [
      { month: 'Month 1', falsePositives: 128, closedWithSeculyze: 185, totalIncidents: 542 },
      { month: 'Month 2', falsePositives: 105, closedWithSeculyze: 205, totalIncidents: 498 },
      { month: 'Month 3', falsePositives: 92, closedWithSeculyze: 224, totalIncidents: 456 }
    ],
    'Last 6 months': [
      { month: 'Jan', falsePositives: 142, closedWithSeculyze: 89, totalIncidents: 456 },
      { month: 'Feb', falsePositives: 128, closedWithSeculyze: 95, totalIncidents: 423 },
      { month: 'Mar', falsePositives: 118, closedWithSeculyze: 102, totalIncidents: 398 },
      { month: 'Apr', falsePositives: 105, closedWithSeculyze: 108, totalIncidents: 381 },
      { month: 'May', falsePositives: 92, closedWithSeculyze: 115, totalIncidents: 356 },
      { month: 'Jun', falsePositives: 78, closedWithSeculyze: 124, totalIncidents: 324 }
    ]
  };

  // All Microsoft Log Costs data
  const allLogCostsData = {
    'Last 7 days': [
      { month: 'Day 1', baselineCost: 2140, actualCost: 1680 },
      { month: 'Day 2', baselineCost: 2140, actualCost: 1720 },
      { month: 'Day 3', baselineCost: 2140, actualCost: 1650 },
      { month: 'Day 4', baselineCost: 2140, actualCost: 1690 },
      { month: 'Day 5', baselineCost: 2140, actualCost: 1630 },
      { month: 'Day 6', baselineCost: 2140, actualCost: 1670 },
      { month: 'Day 7', baselineCost: 2140, actualCost: 1620 }
    ],
    'Last 30 days': [
      { month: '1', baselineCost: 500, actualCost: 420 },
      { month: '2', baselineCost: 500, actualCost: 385 },
      { month: '3', baselineCost: 500, actualCost: 410 },
      { month: '4', baselineCost: 500, actualCost: 395 },
      { month: '5', baselineCost: 500, actualCost: 425 },
      { month: '6', baselineCost: 500, actualCost: 380 },
      { month: '7', baselineCost: 500, actualCost: 405 },
      { month: '8', baselineCost: 500, actualCost: 390 },
      { month: '9', baselineCost: 500, actualCost: 415 },
      { month: '10', baselineCost: 500, actualCost: 370 },
      { month: '11', baselineCost: 500, actualCost: 395 },
      { month: '12', baselineCost: 500, actualCost: 385 },
      { month: '13', baselineCost: 500, actualCost: 400 },
      { month: '14', baselineCost: 500, actualCost: 375 },
      { month: '15', baselineCost: 500, actualCost: 420 },
      { month: '16', baselineCost: 500, actualCost: 365 },
      { month: '17', baselineCost: 500, actualCost: 390 },
      { month: '18', baselineCost: 500, actualCost: 410 },
      { month: '19', baselineCost: 500, actualCost: 385 },
      { month: '20', baselineCost: 500, actualCost: 395 },
      { month: '21', baselineCost: 500, actualCost: 375 },
      { month: '22', baselineCost: 500, actualCost: 405 },
      { month: '23', baselineCost: 500, actualCost: 360 },
      { month: '24', baselineCost: 500, actualCost: 390 },
      { month: '25', baselineCost: 500, actualCost: 380 },
      { month: '26', baselineCost: 500, actualCost: 400 },
      { month: '27', baselineCost: 500, actualCost: 370 },
      { month: '28', baselineCost: 500, actualCost: 395 },
      { month: '29', baselineCost: 500, actualCost: 385 },
      { month: '30', baselineCost: 500, actualCost: 375 }
    ],
    'Last 90 days': [
      { month: 'Month 1', baselineCost: 15000, actualCost: 12800 },
      { month: 'Month 2', baselineCost: 15000, actualCost: 11800 },
      { month: 'Month 3', baselineCost: 15000, actualCost: 10800 }
    ],
    'Last 6 months': [
      { month: 'Jan', baselineCost: 15000, actualCost: 12800 },
      { month: 'Feb', baselineCost: 15000, actualCost: 12200 },
      { month: 'Mar', baselineCost: 15000, actualCost: 11800 },
      { month: 'Apr', baselineCost: 15000, actualCost: 11200 },
      { month: 'May', baselineCost: 15000, actualCost: 10800 },
      { month: 'Jun', baselineCost: 15000, actualCost: 10200 }
    ]
  };

  const tuningImpactData = allTuningImpactData[tuningTimeRange as keyof typeof allTuningImpactData];
  const logCostsData = allLogCostsData[logCostsTimeRange as keyof typeof allLogCostsData];

  return (
    <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto">
      <div className="p-6 max-w-[1800px] mx-auto p-[16px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-[#092E3F]">MSSP Dashboard</h1>
            <p className="text-sm text-[#092E3F]/60">Real-time security operations overview</p>
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-3">
            {/* Client Filter Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsClientFilterOpen(!isClientFilterOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-white rounded-xl hover:border-[#2A96A8] transition-all text-sm text-[#092E3F]"
              >
                <Building2 className="w-4 h-4 text-[#092E3F]/60" />
                <span>{clientFilter}</span>
                <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
              </button>
              {isClientFilterOpen && (
                <div className="absolute right-0 mt-2 w-[180px] bg-white border border-white rounded-xl shadow-lg z-20 py-1">
                  {['All Clients', 'Nike', 'Adidas', 'Apple', 'Microsoft', 'Amazon'].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setClientFilter(option);
                        setIsClientFilterOpen(false);
                        toast.success(option === 'All Clients' ? 'Showing all clients' : `Filtered by ${option}`);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Time Range Selector */}
            <div className="relative">
              <button
                onClick={() => setIsTimeRangeOpen(!isTimeRangeOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-white rounded-xl hover:border-[#2A96A8] transition-all text-sm text-[#092E3F]"
              >
                <Clock className="w-4 h-4 text-[#092E3F]/60" />
                <span>{timeRange}</span>
                <ChevronDown className="w-4 h-4 text-[#092E3F]/60" />
              </button>
              {isTimeRangeOpen && (
                <div className="absolute right-0 mt-2 w-[180px] bg-white border border-white rounded-xl shadow-lg z-20 py-1">
                  {['Last 24 hours', 'Last 7 days', 'Last 30 days', 'Last 90 days'].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setTimeRange(option);
                        setIsTimeRangeOpen(false);
                        toast.success(`Time range set to ${option}`);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overview Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Total Clients */}
          <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-[#2A96A8]/10 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-[#2A96A8]" />
              </div>
              <div className="flex items-center gap-1 text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                <TrendingUp className="w-3 h-3" />
                <span>{metrics.clientTrend}</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#092E3F]/60 mb-1">Total Clients</p>
              <p className="text-2xl text-[#092E3F]">{metrics.totalClients}</p>
            </div>
          </div>

          {/* Active Threats */}
          <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex items-center gap-1 text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">
                <TrendingUp className="w-3 h-3" />
                <span>{metrics.threatTrend}</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#092E3F]/60 mb-1">Active Threats</p>
              <p className="text-2xl text-[#092E3F]">{metrics.activeThreats}</p>
            </div>
          </div>

          {/* Critical Incidents */}
          <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-orange-500" />
              </div>
              <div className="flex items-center gap-1 text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                <TrendingDown className="w-3 h-3" />
                <span>{metrics.incidentTrend}</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#092E3F]/60 mb-1">Critical Incidents</p>
              <p className="text-2xl text-[#092E3F]">{metrics.criticalIncidents}</p>
            </div>
          </div>

          {/* Avg Response Time */}
          <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-emerald-500" />
              </div>
              <div className="flex items-center gap-1 text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                <TrendingDown className="w-3 h-3" />
                <span>{metrics.responseTrend}</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-[#092E3F]/60 mb-1">Avg Response Time</p>
              <p className="text-2xl text-[#092E3F]">{metrics.avgResponseTime}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Multi-Client Threat Trends Chart - Takes 2 columns */}
          <div className="lg:col-span-2 bg-white border border-white rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-[#092E3F] mb-1">Client Threat Trends</h3>
                <p className="text-xs text-[#092E3F]/60">Threat volume comparison across top clients</p>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-[#092E3F]/40" />
              </div>
            </div>

            {/* Chart */}
            <div className="h-[280px] mb-4 w-full min-h-[280px]">
              <ResponsiveContainer key="threat-trends-container" width="100%" height={280}>
                <LineChart key="threat-trends-chart" data={threatTrendData}>
                  <XAxis 
                    key="threat-trends-xaxis"
                    dataKey="date" 
                    stroke="#092E3F40"
                    style={{ fontSize: '11px' }}
                  />
                  <YAxis 
                    key="threat-trends-yaxis"
                    stroke="#092E3F40"
                    style={{ fontSize: '11px' }}
                  />
                  <Tooltip 
                    key="threat-trends-tooltip"
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Line 
                    key="threat-line-nike"
                    type="monotone" 
                    dataKey="nike" 
                    stroke="#ef4444" 
                    strokeWidth={2}
                    dot={{ fill: '#ef4444', r: 3 }}
                    name="Nike"
                  />
                  <Line 
                    key="threat-line-adidas"
                    type="monotone" 
                    dataKey="adidas" 
                    stroke="#f59e0b" 
                    strokeWidth={2}
                    dot={{ fill: '#f59e0b', r: 3 }}
                    name="Adidas"
                  />
                  <Line 
                    key="threat-line-apple"
                    type="monotone" 
                    dataKey="apple" 
                    stroke="#3b82f6" 
                    strokeWidth={2}
                    dot={{ fill: '#3b82f6', r: 3 }}
                    name="Apple"
                  />
                  <Line 
                    key="threat-line-microsoft"
                    type="monotone" 
                    dataKey="microsoft" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    dot={{ fill: '#10b981', r: 3 }}
                    name="Microsoft"
                  />
                  <Line 
                    key="threat-line-amazon"
                    type="monotone" 
                    dataKey="amazon" 
                    stroke="#8b5cf6" 
                    strokeWidth={2}
                    dot={{ fill: '#8b5cf6', r: 3 }}
                    name="Amazon"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {topClientsData.map((client) => (
                <button
                  key={client.name}
                  onClick={() => handleClientClick(client.name)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    selectedClient === client.name
                      ? 'bg-gray-100 border-2 border-gray-300'
                      : 'hover:bg-gray-50 border-2 border-transparent'
                  }`}
                >
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: client.color }}
                  />
                  <span className="text-xs text-[#092E3F]">{client.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Threat Distribution Pie Chart */}
          <div className="bg-white border border-white rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <h3 className="text-[#092E3F] mb-1">MITRE ATT&CK Tactics</h3>
              <p className="text-xs text-[#092E3F]/60">Threat distribution by tactic</p>
            </div>

            {/* Chart */}
            <div className="flex items-center justify-center mb-4">
              <PieChart key="threat-distribution-piechart" width={180} height={180}>
                <Pie
                  key="threat-distribution-pie-chart"
                  data={threatDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {threatDistributionData.map((entry, index) => (
                    <Cell key={`threat-dist-cell-${entry.name}-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            {/* Legend */}
            <div className="space-y-2">
              {threatDistributionData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-[#092E3F]">{item.name}</span>
                  </div>
                  <span className="text-xs text-[#092E3F]">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tuning Impact & Microsoft Log Costs - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 mb-4">
          {/* Tuning Impact Card */}
          <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2A96A8]/10 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-[#2A96A8]" />
                </div>
                <div>
                  <h3 className="text-[#092E3F] text-sm">Tuning Impact</h3>
                  <p className="text-[10px] text-[#092E3F]/60">False positive reduction</p>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center gap-2">
                {/* Chart Type Toggle */}
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-0.5">
                  <button
                    onClick={() => {
                      setTuningChartType('bar');
                      toast.success('Switched to bar chart');
                    }}
                    className={`p-1.5 rounded-md transition-all ${
                      tuningChartType === 'bar'
                        ? 'bg-white text-[#092E3F] shadow-sm'
                        : 'text-[#092E3F]/60 hover:text-[#092E3F]'
                    }`}
                  >
                    <BarChart3 className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => {
                      setTuningChartType('line');
                      toast.success('Switched to line chart');
                    }}
                    className={`p-1.5 rounded-md transition-all ${
                      tuningChartType === 'line'
                        ? 'bg-white text-[#092E3F] shadow-sm'
                        : 'text-[#092E3F]/60 hover:text-[#092E3F]'
                    }`}
                  >
                    <LineChartIcon className="w-3 h-3" />
                  </button>
                </div>

                {/* Time Range Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsTuningTimeRangeOpen(!isTuningTimeRangeOpen)}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg hover:border-[#2A96A8] transition-all text-xs text-[#092E3F]"
                  >
                    <Calendar className="w-3 h-3 text-[#092E3F]/60" />
                    <span className="text-[10px]">{tuningTimeRange}</span>
                    <ChevronDown className="w-3 h-3 text-[#092E3F]/60" />
                  </button>
                  {isTuningTimeRangeOpen && (
                    <div className="absolute right-0 mt-2 w-[140px] bg-white border border-white rounded-xl shadow-lg z-20 py-1">
                      {['Last 7 days', 'Last 30 days', 'Last 90 days', 'Last 6 months'].map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setTuningTimeRange(option);
                            setIsTuningTimeRangeOpen(false);
                            toast.success(`Time range set to ${option}`);
                          }}
                          className="w-full text-left px-3 py-1.5 text-xs text-[#092E3F] hover:bg-gray-50 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-[200px] mb-4 w-full min-h-[200px]">
              <ResponsiveContainer width="100%" height={200}>
                {tuningChartType === 'bar' ? (
                  <BarChart key="tuning-impact-bar-chart" data={tuningImpactData}>
                    <XAxis 
                      key="tuning-bar-xaxis"
                      dataKey="month" 
                      stroke="#092E3F40"
                      style={{ fontSize: '10px' }}
                    />
                    <YAxis 
                      key="tuning-bar-yaxis"
                      stroke="#092E3F40"
                      style={{ fontSize: '10px' }}
                    />
                    <Tooltip 
                      key="tuning-bar-tooltip"
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '11px',
                        padding: '8px'
                      }}
                    />
                    <Bar key="bar-falsePositives" dataKey="falsePositives" fill="#2A96A8" name="False Positives" radius={[4, 4, 0, 0]} />
                    <Bar key="bar-closedWithSeculyze" dataKey="closedWithSeculyze" fill="#10b981" name="Closed with Seculyze" radius={[4, 4, 0, 0]} />
                    <Bar key="bar-totalIncidents" dataKey="totalIncidents" fill="#092E3F" name="Total Incidents" radius={[4, 4, 0, 0]} />
                  </BarChart>
                ) : (
                  <LineChart key="tuning-impact-line-chart" data={tuningImpactData}>
                    <XAxis 
                      key="tuning-line-xaxis"
                      dataKey="month" 
                      stroke="#092E3F40"
                      style={{ fontSize: '10px' }}
                    />
                    <YAxis 
                      key="tuning-line-yaxis"
                      stroke="#092E3F40"
                      style={{ fontSize: '10px' }}
                    />
                    <Tooltip 
                      key="tuning-line-tooltip"
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '11px',
                        padding: '8px'
                      }}
                    />
                    <Line 
                      key="tuning-line-falsePositives"
                      type="monotone" 
                      dataKey="falsePositives" 
                      stroke="#2A96A8" 
                      strokeWidth={2}
                      dot={{ fill: '#2A96A8', r: 3 }}
                      name="False Positives"
                    />
                    <Line 
                      key="tuning-line-closedWithSeculyze"
                      type="monotone" 
                      dataKey="closedWithSeculyze" 
                      stroke="#10b981" 
                      strokeWidth={2}
                      dot={{ fill: '#10b981', r: 3 }}
                      name="Closed with Seculyze"
                    />
                    <Line 
                      key="tuning-line-totalIncidents"
                      type="monotone" 
                      dataKey="totalIncidents" 
                      stroke="#092E3F" 
                      strokeWidth={2}
                      dot={{ fill: '#092E3F', r: 3 }}
                      name="Total Incidents"
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>

            {/* Legend with numbers */}
            <div className="flex items-center justify-center gap-4 mb-4 pb-4 border-b border-gray-200 flex-wrap">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2A96A8]" />
                <span className="text-[10px] text-[#092E3F]/60">False Positives</span>
                <span className="text-xs text-[#092E3F]">78</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-[#092E3F]/60">Closed w/ Seculyze</span>
                <span className="text-xs text-[#092E3F]">124</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#092E3F]" />
                <span className="text-[10px] text-[#092E3F]/60">Total Incidents</span>
                <span className="text-xs text-[#092E3F]">324</span>
              </div>
            </div>

            {/* Bottom Metrics Row */}
            <div className="grid grid-cols-4 gap-3">
              <div className="text-center">
                <p className="text-xl text-[#092E3F] mb-0.5">24%</p>
                <p className="text-[10px] text-[#092E3F]/60 leading-tight">False Positive Rate</p>
              </div>
              <div className="text-center">
                <p className="text-xl text-[#092E3F] mb-0.5">38%</p>
                <p className="text-[10px] text-[#092E3F]/60 leading-tight">Seculyze Closing Rate</p>
              </div>
              <div className="text-center">
                <p className="text-xl text-[#092E3F] mb-0.5">€48.5k</p>
                <p className="text-[10px] text-[#092E3F]/60 leading-tight">Est. Savings</p>
              </div>
              <div className="text-center">
                <p className="text-xl text-[#092E3F] mb-0.5">1,240h</p>
                <p className="text-[10px] text-[#092E3F]/60 leading-tight">Est. Time Saved</p>
              </div>
            </div>
          </div>

          {/* Microsoft Log Costs Card */}
          <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Database className="w-4 h-4 text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-[#092E3F] text-sm">Microsoft Log Costs</h3>
                  <p className="text-[10px] text-[#092E3F]/60">Cost optimization</p>
                </div>
              </div>
              
              {/* Time Range Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLogCostsTimeRangeOpen(!isLogCostsTimeRangeOpen)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded-lg hover:border-[#2A96A8] transition-all text-xs text-[#092E3F]"
                >
                  <Calendar className="w-3 h-3 text-[#092E3F]/60" />
                  <span className="text-[10px]">{logCostsTimeRange}</span>
                  <ChevronDown className="w-3 h-3 text-[#092E3F]/60" />
                </button>
                {isLogCostsTimeRangeOpen && (
                  <div className="absolute right-0 mt-2 w-[140px] bg-white border border-white rounded-xl shadow-lg z-20 py-1">
                    {['Last 7 days', 'Last 30 days', 'Last 90 days', 'Last 6 months'].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setLogCostsTimeRange(option);
                          setIsLogCostsTimeRangeOpen(false);
                          toast.success(`Time range set to ${option}`);
                        }}
                        className="w-full text-left px-3 py-1.5 text-xs text-[#092E3F] hover:bg-gray-50 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Chart */}
            <div className="h-[200px] mb-4 w-full min-h-[200px]">
              <ResponsiveContainer key="log-costs-container" width="100%" height={200}>
                <LineChart key="log-costs-line-chart" data={logCostsData}>
                  <XAxis 
                    key="log-costs-xaxis"
                    dataKey="month" 
                    stroke="#092E3F40"
                    style={{ fontSize: '10px' }}
                  />
                  <YAxis 
                    key="log-costs-yaxis"
                    stroke="#092E3F40"
                    style={{ fontSize: '10px' }}
                    tickFormatter={(value) => `€${value / 1000}k`}
                  />
                  <Tooltip 
                    key="log-costs-tooltip"
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '11px',
                      padding: '8px'
                    }}
                    formatter={(value: any) => [`€${value.toLocaleString()}`, '']}
                    labelFormatter={(label) => `${label}`}
                  />
                  <Line 
                    key="logcost-line-baseline"
                    type="monotone" 
                    dataKey="baselineCost" 
                    stroke="#94a3b8" 
                    strokeWidth={2}
                    strokeDasharray="6 6"
                    dot={{ fill: '#94a3b8', r: 3 }}
                    name="Baseline Cost"
                  />
                  <Line 
                    key="logcost-line-actual"
                    type="monotone" 
                    dataKey="actualCost" 
                    stroke="#2A96A8" 
                    strokeWidth={2}
                    dot={{ fill: '#2A96A8', r: 4 }}
                    name="Actual Cost"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Legend with numbers */}
            <div className="flex items-center justify-center gap-4 mb-4 pb-4 border-b border-gray-200 flex-wrap">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-[#092E3F]/60">Est. Savings</span>
                <span className="text-xs text-[#092E3F]">€4,800</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2A96A8]" />
                <span className="text-[10px] text-[#092E3F]/60">Actual Cost</span>
                <span className="text-xs text-[#092E3F]">€10,200</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                <span className="text-[10px] text-[#092E3F]/60">Baseline Cost</span>
                <span className="text-xs text-[#092E3F]">€15,000</span>
              </div>
            </div>

            {/* Bottom Metrics Row */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-xl text-[#092E3F] mb-0.5">32%</p>
                <p className="text-[10px] text-[#092E3F]/60 leading-tight">Est. Savings as %</p>
              </div>
              <div className="text-center">
                <p className="text-xl text-[#092E3F] mb-0.5">€28.8k</p>
                <p className="text-[10px] text-[#092E3F]/60 leading-tight">Savings since Onboarding</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Top Clients by Threat Volume */}
          <div className="lg:col-span-2 bg-white border border-white rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[#092E3F] mb-1">Clients with Most Threats</h3>
                <p className="text-xs text-[#092E3F]/60">Ranked by threat volume and severity</p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2">
                      <span className="text-xs text-[#092E3F]/60">Rank</span>
                    </th>
                    <th className="text-left py-3 px-2">
                      <span className="text-xs text-[#092E3F]/60">Client</span>
                    </th>
                    <th className="text-left py-3 px-2">
                      <span className="text-xs text-[#092E3F]/60">Total Threats</span>
                    </th>
                    <th className="text-left py-3 px-2">
                      <span className="text-xs text-[#092E3F]/60">Critical</span>
                    </th>
                    <th className="text-left py-3 px-2">
                      <span className="text-xs text-[#092E3F]/60">Trend</span>
                    </th>
                    <th className="text-left py-3 px-2">
                      <span className="text-xs text-[#092E3F]/60">Status</span>
                    </th>
                    <th className="text-right py-3 px-2">
                      <span className="text-xs text-[#092E3F]/60">Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTopClients.map((client, index) => (
                    <tr 
                      key={client.name}
                      className={`border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer ${
                        selectedClient === client.name ? 'bg-blue-50' : ''
                      }`}
                      onClick={() => handleClientClick(client.name)}
                    >
                      <td className="py-3 px-2">
                        <span className="text-sm text-[#092E3F]">#{index + 1}</span>
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-2">
                          <img 
                            src={client.logo} 
                            alt={client.name}
                            className="w-8 h-8 rounded-full object-cover border border-gray-200"
                          />
                          <span className="text-sm text-[#092E3F]">{client.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <span className="text-sm text-[#092E3F]">{client.threats}</span>
                      </td>
                      <td className="py-3 px-2">
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full">
                          {client.critical}
                        </span>
                      </td>
                      <td className="py-3 px-2">
                        <div className={`flex items-center gap-1 text-xs ${
                          client.trend.startsWith('+') ? 'text-red-600' : 'text-emerald-600'
                        }`}>
                          {client.trend.startsWith('+') ? (
                            <ArrowUpRight className="w-3 h-3" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3" />
                          )}
                          <span>{client.trend}</span>
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          client.status === 'critical' 
                            ? 'bg-red-100 text-red-700'
                            : client.status === 'warning'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {client.status === 'critical' ? 'Critical' : client.status === 'warning' ? 'Warning' : 'Stable'}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <button className="text-[#2A96A8] hover:text-[#1d7080] transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Critical Incidents & SLA */}
          <div className="space-y-4">
            {/* Recent Critical Incidents */}
            <div className="bg-white border border-white rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-[#092E3F] mb-1">Recent Critical</h3>
                  <p className="text-xs text-[#092E3F]/60">Last hour activity</p>
                </div>
              </div>

              <div className="space-y-3">
                {filteredIncidents.map((incident, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs text-[#092E3F]">{incident.client}</span>
                      <span className="text-xs text-[#092E3F]/60">{incident.time}</span>
                    </div>
                    <p className="text-xs text-[#092E3F]/80 mb-2">{incident.type}</p>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        incident.severity === 'Critical' 
                          ? 'bg-red-100 text-red-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {incident.severity}
                      </span>
                      <span className="text-xs text-[#092E3F]/60 capitalize">{incident.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SLA Compliance */}
            <div className="bg-white border border-white rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-[#092E3F] mb-1">SLA Compliance</h3>
                  <p className="text-xs text-[#092E3F]/60">Current period performance</p>
                </div>
              </div>

              <div className="space-y-4">
                {slaData.map((item) => (
                  <div key={item.metric}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[#092E3F]">{item.metric}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#092E3F]">{item.value}%</span>
                        {item.status === 'success' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-orange-500" />
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all ${
                          item.status === 'success' ? 'bg-emerald-500' : 'bg-orange-500'
                        }`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;