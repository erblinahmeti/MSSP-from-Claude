import { Shield, Target, Activity, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';

type SeverityLevel = 'Low' | 'Medium' | 'High';
type AttentionType = 'True Positive Detected' | 'Threat Intel: High Risk' | 'Threat Intel: Medium Risk' | 'Threat Intel: Low Risk' | 'Tuning: False Positive' | 'No Attention';

type IncidentMetricCardsProps = {
  selectedDate: string;
  statistics: {
    keyThreats: { type: string; count: number }[];
    severityCounts: {
      High: number;
      Medium: number;
      Low: number;
    };
    attentionCounts: {
      'True Positive Detected': number;
      'Threat Intel: High Risk': number;
      'Threat Intel: Medium Risk': number;
      'Threat Intel: Low Risk': number;
      'Tuning: False Positive': number;
    };
  };
  activeFilters: {
    threatType: string | null;
    severity: SeverityLevel | null;
    attention: AttentionType | null;
  };
  onThreatTypeClick: (threatType: string) => void;
  onSeverityClick: (severity: SeverityLevel) => void;
  onAttentionClick: (attention: AttentionType) => void;
};

export default function IncidentMetricCards({
  selectedDate,
  statistics,
  activeFilters,
  onThreatTypeClick,
  onSeverityClick,
  onAttentionClick
}: IncidentMetricCardsProps) {
  
  // Prepare data for Sentinel Severity pie chart
  const severityData = [
    { name: 'High', value: statistics.severityCounts.High, color: '#2A96A8' },
    { name: 'Medium', value: statistics.severityCounts.Medium, color: '#2A96A8BB' },
    { name: 'Low', value: statistics.severityCounts.Low, color: '#2A96A820' }
  ];

  // Prepare data for Threat Analysis (Attention) pie chart
  const threatAnalysisData = [
    { name: 'True Positives', value: statistics.attentionCounts['True Positive Detected'], color: '#10b981', attentionType: 'True Positive Detected' as AttentionType },
    { name: 'High Risk', value: statistics.attentionCounts['Threat Intel: High Risk'], color: '#ef4444', attentionType: 'Threat Intel: High Risk' as AttentionType },
    { name: 'Medium Risk', value: statistics.attentionCounts['Threat Intel: Medium Risk'], color: '#f59e0b', attentionType: 'Threat Intel: Medium Risk' as AttentionType },
    { name: 'Low Risk', value: statistics.attentionCounts['Threat Intel: Low Risk'], color: '#fbbf24', attentionType: 'Threat Intel: Low Risk' as AttentionType },
    { name: 'False Positives', value: statistics.attentionCounts['Tuning: False Positive'], color: '#94a3b8', attentionType: 'Tuning: False Positive' as AttentionType }
  ].filter(item => item.value > 0); // Only show categories with values

  const totalThreats = statistics.keyThreats.reduce((sum, threat) => sum + threat.count, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      {/* Card 1: Key Threats */}
      <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow p-[16px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm text-[#092E3F]">Key Threats</h3>
            </div>
          </div>
          <span className="text-xs text-[#092E3F]/40">{selectedDate}</span>
        </div>

        <div className="space-y-2.5">
          {statistics.keyThreats.slice(0, 3).map((threat, idx) => {
            const percentage = totalThreats > 0 ? Math.round((threat.count / totalThreats) * 100) : 0;
            const isActive = activeFilters.threatType === threat.type;
            return (
              <button
                key={idx}
                onClick={() => onThreatTypeClick(threat.type)}
                className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-red-500 border-2 border-red-600 shadow-md' 
                    : 'bg-gray-50 hover:bg-red-50 border-2 border-transparent hover:border-red-200'
                }`}
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Shield className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-red-600'}`} />
                  <span className={`text-xs truncate ${isActive ? 'text-white' : 'text-[#092E3F]'}`} title={threat.type}>
                    {threat.type}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    isActive ? 'bg-red-700 text-white' : 'bg-red-100 text-red-700'
                  }`}>
                    {percentage}%
                  </span>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${
                    isActive ? 'bg-white text-red-600' : 'bg-[#092E3F] text-white'
                  }`}>
                    {threat.count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Card 2: Sentinel Severity */}
      <div className="bg-white border border-white rounded-xl hover:shadow-md transition-shadow p-[16px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2A96A8] to-[#1d7080] rounded-xl flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm text-[#092E3F]">Sentinel Severity</h3>
            </div>
          </div>
          <span className="text-xs text-[#092E3F]/40 whitespace-nowrap">{selectedDate}</span>
        </div>

        {/* Chart on left, metrics on right */}
        <div className="flex items-center gap-4">
          {/* Chart */}
          <div className="w-[120px] h-[120px] shrink-0">
            <PieChart width={120} height={120}>
              <Pie
                data={severityData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {severityData.map((entry, index) => (
                  <Cell key={`severity-cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Metrics */}
          <div className="flex-1 space-y-2">
            {severityData.map((item, index) => {
              const isActive = activeFilters.severity === item.name;
              return (
                <button
                  key={index}
                  onClick={() => onSeverityClick(item.name as SeverityLevel)}
                  className={`w-full flex items-center justify-between gap-4 px-2 py-1.5 rounded-lg transition-all cursor-pointer ${
                    isActive ? 'bg-[#2A96A8] shadow-md' : 'hover:bg-[#2A96A8]/10'
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1 justify-end">
                    <span className={`text-sm ${isActive ? 'text-white font-medium' : 'text-[#092E3F]'}`}>{item.name}</span>
                    <div 
                      className={`w-3 h-3 rounded-full shrink-0 ${isActive ? 'ring-2 ring-white' : ''}`}
                      style={{ backgroundColor: isActive ? 'white' : item.color }}
                    />
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`text-sm ${isActive ? 'text-white/60' : 'text-[#092E3F]/40'}`}>•</span>
                    <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-[#092E3F]'}`}>{item.value}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Card 3: Threat Analysis */}
      <div className="bg-white border border-white rounded-xl hover:shadow-md transition-shadow p-[16px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm text-[#092E3F]">Threat Analysis</h3>
            </div>
          </div>
          <span className="text-xs text-[#092E3F]/40 whitespace-nowrap">{selectedDate}</span>
        </div>

        {/* Chart on left, metrics on right */}
        <div className="flex items-center gap-4">
          {/* Chart */}
          <div className="w-[120px] h-[120px] shrink-0">
            <PieChart width={120} height={120}>
              <Pie
                data={threatAnalysisData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {threatAnalysisData.map((entry, index) => (
                  <Cell key={`threat-analysis-cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Metrics - show top 3 */}
          <div className="flex-1 space-y-2">
            {threatAnalysisData.slice(0, 3).map((item, index) => {
              const isActive = activeFilters.attention === item.attentionType;
              return (
                <button
                  key={index}
                  onClick={() => onAttentionClick(item.attentionType)}
                  className={`w-full flex items-center justify-between gap-4 px-2 py-1.5 rounded-lg transition-all cursor-pointer ${
                    isActive ? 'shadow-md' : 'hover:opacity-80'
                  }`}
                  style={{ backgroundColor: isActive ? item.color : 'transparent' }}
                >
                  <div className="flex items-center gap-2 flex-1 justify-end">
                    <span className={`text-xs truncate ${isActive ? 'text-white font-medium' : 'text-[#092E3F]'}`}>{item.name}</span>
                    <div 
                      className={`w-3 h-3 rounded-full shrink-0 ${isActive ? 'ring-2 ring-white' : ''}`}
                      style={{ backgroundColor: isActive ? 'white' : item.color }}
                    />
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`text-sm ${isActive ? 'text-white/70' : 'text-[#092E3F]/40'}`}>•</span>
                    <span className={`text-sm font-medium ${isActive ? 'text-white' : 'text-[#092E3F]'}`}>{item.value}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}