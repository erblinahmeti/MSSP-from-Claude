import { X, ExternalLink, MessageSquare, History, TrendingUp, Shield, CheckCircle2, AlertTriangle, AlertCircle, MinusCircle, Maximize2, Minimize2 } from 'lucide-react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

type Client = {
  id: string;
  name: string;
  logo: string;
  incidentsLast30Days: number;
  contact: string;
  onboardedDate: string;
};

type ChangelogEntry = {
  id: string;
  who: string;
  what: string;
  when: string;
};

type Comment = {
  id: string;
  author: string;
  text: string;
  timestamp: string;
};

interface ClientDetailProps {
  client: Client;
  onClose: () => void;
  onNavigateToIncidents?: () => void;
  onNavigateToCalibrate?: () => void;
}

export default function ClientDetail({ client, onClose, onNavigateToIncidents, onNavigateToCalibrate }: ClientDetailProps) {
  // Mock classification data
  const classificationData = {
    truePositive: { count: 12, percentage: 28 },
    threatIntel: { count: 18, percentage: 42 },
    noClassification: { count: 8, percentage: 19 },
    falsePositive: { count: 5, percentage: 11 }
  };

  // Calibration data
  const calibrationData = {
    overall: { score: 178, max: 200 },
    alertRules: { score: 84, max: 100, color: '#F59E0B' }, // yellow
    logSources: { score: 78, max: 80, color: '#10B981' }, // green
    configurations: { score: 16, max: 20, color: '#10B981' } // green
  };

  // Mock changelog
  const changelog: ChangelogEntry[] = [
    {
      id: '1',
      who: 'Sarah Mitchell',
      what: 'Updated contact email',
      when: '2 hours ago'
    },
    {
      id: '2',
      who: 'James Rodriguez',
      what: 'Modified alert rule configuration',
      when: '1 day ago'
    },
    {
      id: '3',
      who: 'Emily Chen',
      what: 'Added new log source integration',
      when: '3 days ago'
    },
    {
      id: '4',
      who: 'Michael Brown',
      what: 'Updated client classification settings',
      when: '1 week ago'
    },
    {
      id: '5',
      who: 'David Martinez',
      what: 'Increased monitoring threshold for critical alerts',
      when: '1 week ago'
    },
    {
      id: '6',
      who: 'Lisa Thompson',
      what: 'Added Microsoft 365 integration',
      when: '2 weeks ago'
    },
    {
      id: '7',
      who: 'Robert Chen',
      what: 'Updated firewall rules configuration',
      when: '2 weeks ago'
    },
    {
      id: '8',
      who: 'Jennifer Lee',
      what: 'Modified incident escalation workflow',
      when: '3 weeks ago'
    },
    {
      id: '9',
      who: 'Thomas Anderson',
      what: 'Added new compliance reporting module',
      when: '3 weeks ago'
    },
    {
      id: '10',
      who: 'Amanda Davis',
      what: 'Updated threat intelligence feed sources',
      when: '1 month ago'
    }
  ];

  // Mock comments
  const comments: Comment[] = [
    {
      id: '1',
      author: 'Sarah Mitchell',
      text: 'Client has requested additional monitoring for their production environment.',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      author: 'James Rodriguez',
      text: 'Completed onboarding session. All integrations are active.',
      timestamp: '1 week ago'
    },
    {
      id: '3',
      author: 'Emily Chen',
      text: 'Client needs assistance with setting up custom alert rules for their SQL servers.',
      timestamp: '1 week ago'
    },
    {
      id: '4',
      author: 'Michael Brown',
      text: 'Scheduled quarterly security review for next month. Client has been very responsive.',
      timestamp: '2 weeks ago'
    },
    {
      id: '5',
      author: 'David Martinez',
      text: 'Client reported false positive on backup job alerts. Adjusted thresholds accordingly.',
      timestamp: '2 weeks ago'
    },
    {
      id: '6',
      author: 'Lisa Thompson',
      text: 'Integration with their SIEM platform completed successfully. Testing phase initiated.',
      timestamp: '3 weeks ago'
    },
    {
      id: '7',
      author: 'Robert Chen',
      text: 'Client is very satisfied with the service. Looking to expand coverage to additional departments.',
      timestamp: '3 weeks ago'
    },
    {
      id: '8',
      author: 'Jennifer Lee',
      text: 'Discussed compliance requirements for GDPR and ISO 27001. Action items documented.',
      timestamp: '1 month ago'
    }
  ];

  // Prepare data for classification bar chart
  const classificationChartData = [
    {
      name: 'True Positives',
      value: classificationData.truePositive.count,
      percentage: classificationData.truePositive.percentage,
      color: '#EF4444' // red
    },
    {
      name: 'Threat Intel',
      value: classificationData.threatIntel.count,
      percentage: classificationData.threatIntel.percentage,
      color: '#F59E0B' // yellow/orange
    },
    {
      name: 'No Classification',
      value: classificationData.noClassification.count,
      percentage: classificationData.noClassification.percentage,
      color: '#6B7280' // gray
    },
    {
      name: 'False Positives',
      value: classificationData.falsePositive.count,
      percentage: classificationData.falsePositive.percentage,
      color: '#10B981' // green
    }
  ];

  // Calculate calibration percentage for gradient position
  const calibrationPercentage = (calibrationData.overall.score / calibrationData.overall.max) * 100;

  // State to manage panel size
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Side Panel */}
      <div className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 flex flex-col transition-all duration-300 ${
        isMaximized ? 'w-full left-0' : 'w-[600px] animate-slide-in-right'
      }`}>
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-[#092E3F]">
          <div className="flex items-center gap-3">
            <img 
              src={client.logo} 
              alt={client.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
            />
            <div>
              <h2 className="text-lg text-white">{client.name}</h2>
              <p className="text-sm text-white/70">Client Details</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              title={isMaximized ? "Exit Full Screen" : "Enter Full Screen"}
            >
              {isMaximized ? (
                <Minimize2 className="w-5 h-5 text-white" />
              ) : (
                <Maximize2 className="w-5 h-5 text-white" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className={`p-6 ${isMaximized ? 'max-w-7xl mx-auto' : ''}`}>
            {isMaximized ? (
              // Full-screen layout with grid
              <div className="space-y-6">
                {/* SECTION ONE: THREE COLUMNS - Metadata, Classification, Calibration */}
                <div className="grid grid-cols-3 gap-6">
                  {/* Column 1: Metadata / Basic Information */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider mb-4">
                      Basic Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-[#092E3F]/60 mb-1">Client ID</p>
                        <p className="text-sm text-[#092E3F] font-semibold">{client.id}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#092E3F]/60 mb-1">Incidents (30 days)</p>
                        <p className="text-sm text-[#092E3F] font-semibold">{client.incidentsLast30Days}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#092E3F]/60 mb-1">Contact</p>
                        <p className="text-sm text-[#092E3F]">{client.contact}</p>
                      </div>
                      <div>
                        <p className="text-xs text-[#092E3F]/60 mb-1">Onboarded to Seculyze</p>
                        <p className="text-sm text-[#092E3F]">{client.onboardedDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: Classification */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider flex items-center gap-2 mb-4">
                      <Shield className="w-4 h-4 text-[#2A96A8]" />
                      Classification (Last 30 Days)
                    </h3>

                    <div className="h-48 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={classificationChartData} layout="vertical">
                          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                          <XAxis type="number" stroke="#6B7280" style={{ fontSize: '11px' }} />
                          <YAxis 
                            type="category" 
                            dataKey="name" 
                            stroke="#6B7280" 
                            style={{ fontSize: '11px' }}
                            width={100}
                          />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: '#FFF',
                              border: '1px solid #E5E7EB',
                              borderRadius: '8px',
                              fontSize: '12px'
                            }}
                            formatter={(value: number, name: string, props: any) => [
                              `${value} incidents (${props.payload.percentage}%)`,
                              ''
                            ]}
                          />
                          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                            {classificationChartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-red-50 rounded-lg p-2">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
                          <p className="text-xs text-[#092E3F]/60">True Positives</p>
                        </div>
                        <p className="text-sm font-semibold text-[#092E3F]">
                          {classificationData.truePositive.count}
                          <span className="text-xs text-[#092E3F]/60 ml-1">({classificationData.truePositive.percentage}%)</span>
                        </p>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-2">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                          <p className="text-xs text-[#092E3F]/60">Threat Intel</p>
                        </div>
                        <p className="text-sm font-semibold text-[#092E3F]">
                          {classificationData.threatIntel.count}
                          <span className="text-xs text-[#092E3F]/60 ml-1">({classificationData.threatIntel.percentage}%)</span>
                        </p>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-2">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#6B7280]" />
                          <p className="text-xs text-[#092E3F]/60">No Classification</p>
                        </div>
                        <p className="text-sm font-semibold text-[#092E3F]">
                          {classificationData.noClassification.count}
                          <span className="text-xs text-[#092E3F]/60 ml-1">({classificationData.noClassification.percentage}%)</span>
                        </p>
                      </div>

                      <div className="bg-green-50 rounded-lg p-2">
                        <div className="flex items-center gap-1 mb-1">
                          <div className="w-2 h-2 rounded-full bg-[#10B981]" />
                          <p className="text-xs text-[#092E3F]/60">False Positives</p>
                        </div>
                        <p className="text-sm font-semibold text-[#092E3F]">
                          {classificationData.falsePositive.count}
                          <span className="text-xs text-[#092E3F]/60 ml-1">({classificationData.falsePositive.percentage}%)</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Calibration Status */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-[#2A96A8]" />
                      Calibration Status
                    </h3>

                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-[#092E3F]/60">Overall Score</p>
                        <p className="text-lg font-semibold text-[#092E3F]">
                          {calibrationData.overall.score}/{calibrationData.overall.max}
                        </p>
                      </div>
                      <div className="relative h-8 rounded-full overflow-hidden bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
                        <div 
                          className="absolute top-1/2 -translate-y-1/2 w-1 h-10 bg-white shadow-lg"
                          style={{ left: `${calibrationPercentage}%` }}
                        />
                      </div>
                      <div className="flex justify-between mt-1 text-xs text-[#092E3F]/50">
                        <span>0</span>
                        <span>100</span>
                        <span>200</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-[#092E3F]">Alert Rules</p>
                          <p className="text-xs font-semibold text-[#092E3F]">
                            {calibrationData.alertRules.score}/{calibrationData.alertRules.max}
                          </p>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${(calibrationData.alertRules.score / calibrationData.alertRules.max) * 100}%`,
                              backgroundColor: calibrationData.alertRules.color
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-[#092E3F]">Log Sources</p>
                          <p className="text-xs font-semibold text-[#092E3F]">
                            {calibrationData.logSources.score}/{calibrationData.logSources.max}
                          </p>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${(calibrationData.logSources.score / calibrationData.logSources.max) * 100}%`,
                              backgroundColor: calibrationData.logSources.color
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-[#092E3F]">Configurations</p>
                          <p className="text-xs font-semibold text-[#092E3F]">
                            {calibrationData.configurations.score}/{calibrationData.configurations.max}
                          </p>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-500"
                            style={{ 
                              width: `${(calibrationData.configurations.score / calibrationData.configurations.max) * 100}%`,
                              backgroundColor: calibrationData.configurations.color
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION TWO: TWO COLUMNS - Changelog and Comments */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Left Column: Changelog */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                    <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider flex items-center gap-2 mb-4">
                      <History className="w-4 h-4 text-[#2A96A8]" />
                      Changelog ({changelog.length} entries)
                    </h3>

                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-[600px] space-y-3">
                      {changelog.map((entry, index) => (
                        <div key={entry.id} className="relative pl-6 pb-3">
                          {/* Timeline dot */}
                          <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#2A96A8]" />
                          {/* Timeline line */}
                          {index < changelog.length - 1 && (
                            <div className="absolute left-[3px] top-4 bottom-0 w-0.5 bg-gray-200" />
                          )}
                          
                          <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                            <div className="flex items-start justify-between mb-1">
                              <p className="text-sm font-semibold text-[#092E3F]">{entry.who}</p>
                              <p className="text-xs text-[#092E3F]/50">{entry.when}</p>
                            </div>
                            <p className="text-sm text-[#092E3F]/80">{entry.what}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Comments */}
                  <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col">
                    <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider flex items-center gap-2 mb-4">
                      <MessageSquare className="w-4 h-4 text-[#2A96A8]" />
                      Comments ({comments.length} comments)
                    </h3>

                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent max-h-[550px] mb-4 space-y-3">
                      {comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-[#092E3F]">{comment.author}</p>
                            <p className="text-xs text-[#092E3F]/50">{comment.timestamp}</p>
                          </div>
                          <p className="text-sm text-[#092E3F]/80">{comment.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2 mt-auto pt-4 border-t border-gray-200">
                      <input
                        type="text"
                        placeholder="Add a comment..."
                        className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#092E3F] placeholder:text-[#092E3F]/40 focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] transition-all"
                      />
                      <button className="px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#237d8d] transition-all text-sm">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Original narrow layout
              <div className="space-y-6">
                {/* Basic Information */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider">Basic Information</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#092E3F]/60 mb-1">Incidents (30 days)</p>
                      <p className="text-sm text-[#092E3F] font-semibold">{client.incidentsLast30Days}</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#092E3F]/60 mb-1">Contact</p>
                      <p className="text-sm text-[#092E3F]">{client.contact}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-[#092E3F]/60 mb-1">Onboarded to Seculyze</p>
                      <p className="text-sm text-[#092E3F]">{client.onboardedDate}</p>
                    </div>
                  </div>
                </div>

                {/* Classification from 30 days */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#2A96A8]" />
                      Classification (Last 30 Days)
                    </h3>
                  </div>

                  {/* Bar Chart */}
                  <div className="h-64 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={classificationChartData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                        <XAxis type="number" stroke="#6B7280" style={{ fontSize: '12px' }} />
                        <YAxis 
                          type="category" 
                          dataKey="name" 
                          stroke="#6B7280" 
                          style={{ fontSize: '12px' }}
                          width={120}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#FFF',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            fontSize: '12px'
                          }}
                          formatter={(value: number, name: string, props: any) => [
                            `${value} incidents (${props.payload.percentage}%)`,
                            ''
                          ]}
                        />
                        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                          {classificationChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Classification Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-red-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                        <p className="text-xs text-[#092E3F]/60">True Positives</p>
                      </div>
                      <p className="text-lg font-semibold text-[#092E3F]">
                        {classificationData.truePositive.count}
                        <span className="text-sm text-[#092E3F]/60 ml-2">({classificationData.truePositive.percentage}%)</span>
                      </p>
                    </div>

                    <div className="bg-orange-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                        <p className="text-xs text-[#092E3F]/60">Threat Intel</p>
                      </div>
                      <p className="text-lg font-semibold text-[#092E3F]">
                        {classificationData.threatIntel.count}
                        <span className="text-sm text-[#092E3F]/60 ml-2">({classificationData.threatIntel.percentage}%)</span>
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-[#6B7280]" />
                        <p className="text-xs text-[#092E3F]/60">No Classification</p>
                      </div>
                      <p className="text-lg font-semibold text-[#092E3F]">
                        {classificationData.noClassification.count}
                        <span className="text-sm text-[#092E3F]/60 ml-2">({classificationData.noClassification.percentage}%)</span>
                      </p>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 rounded-full bg-[#10B981]" />
                        <p className="text-xs text-[#092E3F]/60">False Positives</p>
                      </div>
                      <p className="text-lg font-semibold text-[#092E3F]">
                        {classificationData.falsePositive.count}
                        <span className="text-sm text-[#092E3F]/60 ml-2">({classificationData.falsePositive.percentage}%)</span>
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={onNavigateToIncidents}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2A96A8] text-white rounded-lg hover:bg-[#237d8d] transition-all text-sm"
                  >
                    View All Incidents
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Calibration */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[#2A96A8]" />
                      Calibration Status
                    </h3>
                  </div>

                  {/* Overall Score with Gradient Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-[#092E3F]/60">Overall Score</p>
                      <p className="text-lg font-semibold text-[#092E3F]">
                        {calibrationData.overall.score}/{calibrationData.overall.max}
                      </p>
                    </div>
                    <div className="relative h-8 rounded-full overflow-hidden bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-1 h-10 bg-white shadow-lg"
                        style={{ left: `${calibrationPercentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-1 text-xs text-[#092E3F]/50">
                      <span>0</span>
                      <span>100</span>
                      <span>200</span>
                    </div>
                  </div>

                  {/* Individual Metrics */}
                  <div className="space-y-4 mb-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-[#092E3F]">Alert Rules</p>
                        <p className="text-sm font-semibold text-[#092E3F]">
                          {calibrationData.alertRules.score}/{calibrationData.alertRules.max}
                        </p>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(calibrationData.alertRules.score / calibrationData.alertRules.max) * 100}%`,
                            backgroundColor: calibrationData.alertRules.color
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-[#092E3F]">Log Sources</p>
                        <p className="text-sm font-semibold text-[#092E3F]">
                          {calibrationData.logSources.score}/{calibrationData.logSources.max}
                        </p>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(calibrationData.logSources.score / calibrationData.logSources.max) * 100}%`,
                            backgroundColor: calibrationData.logSources.color
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-[#092E3F]">Configurations</p>
                        <p className="text-sm font-semibold text-[#092E3F]">
                          {calibrationData.configurations.score}/{calibrationData.configurations.max}
                        </p>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${(calibrationData.configurations.score / calibrationData.configurations.max) * 100}%`,
                            backgroundColor: calibrationData.configurations.color
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={onNavigateToCalibrate}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#2A96A8] text-white rounded-lg hover:bg-[#237d8d] transition-all text-sm"
                  >
                    View Calibration
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>

                {/* Comments Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider flex items-center gap-2 mb-4">
                    <MessageSquare className="w-4 h-4 text-[#2A96A8]" />
                    Comments
                  </h3>

                  <div className="space-y-3 mb-4">
                    {comments.slice(0, 3).map((comment) => (
                      <div key={comment.id} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-semibold text-[#092E3F]">{comment.author}</p>
                          <p className="text-xs text-[#092E3F]/50">{comment.timestamp}</p>
                        </div>
                        <p className="text-sm text-[#092E3F]/80">{comment.text}</p>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setIsMaximized(true)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 mb-3 bg-gray-100 text-[#092E3F] rounded-lg hover:bg-gray-200 transition-all text-sm border border-gray-200"
                  >
                    View All Comments
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#092E3F] placeholder:text-[#092E3F]/40 focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20 focus:border-[#2A96A8] transition-all"
                    />
                    <button className="px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#237d8d] transition-all text-sm">
                      Post
                    </button>
                  </div>
                </div>

                {/* Changelog Section */}
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="text-sm font-semibold text-[#092E3F] uppercase tracking-wider flex items-center gap-2 mb-4">
                    <History className="w-4 h-4 text-[#2A96A8]" />
                    Changelog
                  </h3>

                  <div className="space-y-3 mb-4">
                    {changelog.slice(0, 4).map((entry, index) => (
                      <div key={entry.id} className="relative pl-6 pb-3">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-[#2A96A8]" />
                        {/* Timeline line */}
                        {index < Math.min(4, changelog.length) - 1 && (
                          <div className="absolute left-[3px] top-4 bottom-0 w-0.5 bg-gray-200" />
                        )}
                        
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-start justify-between mb-1">
                            <p className="text-sm font-semibold text-[#092E3F]">{entry.who}</p>
                            <p className="text-xs text-[#092E3F]/50">{entry.when}</p>
                          </div>
                          <p className="text-sm text-[#092E3F]/80">{entry.what}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setIsMaximized(true)}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-[#092E3F] rounded-lg hover:bg-gray-200 transition-all text-sm border border-gray-200"
                  >
                    View All Changelog
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}