import { Users, PieChart as PieChartIcon, Settings, ArrowUpCircle, Clock, AlertCircle, ChevronDown } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';
import { toast } from 'sonner@2.0.3';
import { useState } from 'react';

type IncidentOverviewCardsProps = {
  selectedDate: string;
  selectedClassificationClient: string;
  setSelectedClassificationClient: (client: string) => void;
  quickSortBy: 'priority' | 'chronological' | null;
  setQuickSortBy: (sort: 'priority' | 'chronological' | null) => void;
  needsAttentionFilter: boolean;
  setNeedsAttentionFilter: (value: boolean) => void;
  setSortColumn: (column: string | null) => void;
  setSortDirection: (direction: 'asc' | 'desc') => void;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
  selectedTopClient: string | null;
  setSelectedTopClient: (client: string | null) => void;
};

export default function IncidentOverviewCards({
  selectedDate,
  selectedClassificationClient,
  setSelectedClassificationClient,
  quickSortBy,
  setQuickSortBy,
  needsAttentionFilter,
  setNeedsAttentionFilter,
  setSortColumn,
  setSortDirection,
  setSearchQuery,
  setCurrentPage,
  selectedTopClient,
  setSelectedTopClient
}: IncidentOverviewCardsProps) {
  
  const [isClassificationDropdownOpen, setIsClassificationDropdownOpen] = useState(false);

  const classificationData = [
    { name: 'True Positives', value: 45, count: 32, color: '#10b981' },
    { name: 'Threat Intel', value: 25, count: 18, color: '#f59e0b' },
    { name: 'No Classification', value: 20, count: 14, color: '#94a3b8' },
    { name: 'False Positives', value: 10, count: 7, color: '#ef4444' }
  ];

  const COLORS = ['#10b981', '#f59e0b', '#94a3b8', '#ef4444'];

  const topClients = [
    { name: 'Nike', logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&h=100&fit=crop', truePositives: 7, percentage: 10 },
    { name: 'Adidas', logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=100&h=100&fit=crop', truePositives: 5, percentage: 8 },
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=100&h=100&fit=crop', truePositives: 4, percentage: 7 },
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&h=100&fit=crop', truePositives: 3, percentage: 6 }
  ];

  const handleClientClick = (clientName: string) => {
    if (selectedTopClient === clientName) {
      // Clicking the same client again - deselect
      setSelectedTopClient(null);
      setSearchQuery('');
      setCurrentPage(1);
      toast.success(`Filter cleared`);
    } else {
      // Selecting a new client
      setSelectedTopClient(clientName);
      setSearchQuery(clientName);
      setCurrentPage(1);
      toast.success(`Filtering by ${clientName}`);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
      {/* Card 1: Top True Positive Clients */}
      <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow p-[16px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm text-[#092E3F]">Top True Positive Clients</h3>
            </div>
          </div>
          <span className="text-xs text-[#092E3F]/40">{selectedDate}</span>
        </div>

        {/* Client list - no scrolling, matches card height */}
        <div className="space-y-2.5">
          {topClients.slice(0, 3).map((client, idx) => (
            <button
              key={idx}
              onClick={() => handleClientClick(client.name)}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg transition-all cursor-pointer ${
                selectedTopClient === client.name
                  ? 'bg-emerald-100 border-2 border-emerald-500 shadow-sm'
                  : 'bg-gray-50 hover:bg-emerald-50 border-2 border-transparent'
              }`}
            >
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-7 h-7 rounded-full object-cover shrink-0 border border-gray-200"
                />
                <span className="text-xs text-[#092E3F] truncate">{client.name}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">{client.percentage}%</span>
                <span className="px-2 py-0.5 bg-[#092E3F] text-white text-xs rounded-full">{client.truePositives}</span>
                {selectedTopClient === client.name && (
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Card 2: Classification */}
      <div className="bg-white border border-white rounded-xl hover:shadow-md transition-shadow p-[16px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#2A96A8] to-[#1d7080] rounded-xl flex items-center justify-center">
              <PieChartIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm text-[#092E3F]">Classification</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Dropdown matching other dropdowns */}
            <div className="relative">
              <button
                onClick={() => setIsClassificationDropdownOpen(!isClassificationDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-white rounded-xl hover:border-[#2A96A8] transition-all text-xs text-[#092E3F]"
              >
                <span>{selectedClassificationClient}</span>
                <ChevronDown className="w-3 h-3 text-[#092E3F]/60" />
              </button>
              {isClassificationDropdownOpen && (
                <div className="absolute right-0 mt-2 w-[180px] bg-white border border-white rounded-xl shadow-lg z-20 py-1">
                  {['All Clients', 'Nike Inc.', 'Adidas', 'Puma'].map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedClassificationClient(option);
                        setIsClassificationDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-[#092E3F] hover:bg-gray-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <span className="text-xs text-[#092E3F]/40 whitespace-nowrap">{selectedDate}</span>
          </div>
        </div>

        {/* Chart on left, metrics on right */}
        <div className="flex items-center gap-4">
          {/* Chart */}
          <div className="w-[120px] h-[120px] shrink-0">
            <PieChart width={120} height={120}>
              <Pie
                data={classificationData}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
              >
                {classificationData.map((entry, index) => (
                  <Cell key={`classification-cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Metrics */}
          <div className="flex-1 space-y-2">
            {classificationData.map((item, index) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-1 justify-end">
                  <span className="text-sm text-[#092E3F]">{item.name}</span>
                  <div 
                    className="w-3 h-3 rounded-full shrink-0" 
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-sm text-[#092E3F]/40">•</span>
                  <span className="text-sm font-medium text-[#092E3F]">{item.value}%</span>
                  <span className="text-sm text-[#092E3F]/50">({item.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 3: Quick Table Actions */}
      <div className="bg-white border border-white rounded-xl p-5 hover:shadow-md transition-shadow p-[16px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="text-sm text-[#092E3F]">Quick Table Actions</h3>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {/* Sort by Priority */}
          <button
            onClick={() => {
              if (quickSortBy === 'priority') {
                setQuickSortBy(null);
                setSortColumn(null);
                setSortDirection('asc');
                toast.success('Sorting cleared');
              } else {
                setQuickSortBy('priority');
                setSortColumn('severity');
                setSortDirection('desc');
                toast.success('Sorted by priority (High to Low)');
              }
            }}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
              quickSortBy === 'priority'
                ? 'bg-purple-100 border-2 border-purple-500 shadow-sm'
                : 'bg-gray-50 hover:bg-purple-50 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-2">
              <ArrowUpCircle className={`w-4 h-4 ${
                quickSortBy === 'priority' ? 'text-purple-600' : 'text-[#092E3F]/60'
              }`} />
              <span className="text-sm text-[#092E3F]">Sort by Priority</span>
            </div>
            {quickSortBy === 'priority' && (
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
            )}
          </button>

          {/* Sort Chronologically */}
          <button
            onClick={() => {
              if (quickSortBy === 'chronological') {
                setQuickSortBy(null);
                setSortColumn(null);
                setSortDirection('asc');
                toast.success('Sorting cleared');
              } else {
                setQuickSortBy('chronological');
                setSortColumn('created');
                setSortDirection('desc');
                toast.success('Sorted chronologically (Newest first)');
              }
            }}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
              quickSortBy === 'chronological'
                ? 'bg-purple-100 border-2 border-purple-500 shadow-sm'
                : 'bg-gray-50 hover:bg-purple-50 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-2">
              <Clock className={`w-4 h-4 ${
                quickSortBy === 'chronological' ? 'text-purple-600' : 'text-[#092E3F]/60'
              }`} />
              <span className="text-sm text-[#092E3F]">Sort Chronologically</span>
            </div>
            {quickSortBy === 'chronological' && (
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
            )}
          </button>

          {/* Needs Attention Filter */}
          <button
            onClick={() => {
              setNeedsAttentionFilter(!needsAttentionFilter);
              if (!needsAttentionFilter) {
                toast.success('Showing only items needing attention');
              } else {
                toast.success('Attention filter cleared');
              }
            }}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
              needsAttentionFilter
                ? 'bg-purple-100 border-2 border-purple-500 shadow-sm'
                : 'bg-gray-50 hover:bg-purple-50 border-2 border-transparent'
            }`}
          >
            <div className="flex items-center gap-2">
              <AlertCircle className={`w-4 h-4 ${
                needsAttentionFilter ? 'text-purple-600' : 'text-[#092E3F]/60'
              }`} />
              <span className="text-sm text-[#092E3F]">Needs Attention Filter</span>
            </div>
            <div className={`relative inline-block w-10 h-5 transition-colors rounded-full ${
              needsAttentionFilter ? 'bg-purple-500' : 'bg-gray-300'
            }`}>
              <div className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                needsAttentionFilter ? 'translate-x-5' : 'translate-x-0'
              }`} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}