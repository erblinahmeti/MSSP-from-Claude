import { ArrowUpCircle, Clock, AlertCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

type QuickTableActionsProps = {
  quickSortBy: 'priority' | 'chronological' | null;
  setQuickSortBy: (sort: 'priority' | 'chronological' | null) => void;
  needsAttentionFilter: boolean;
  setNeedsAttentionFilter: (value: boolean) => void;
  setSortColumn: (column: string | null) => void;
  setSortDirection: (direction: 'asc' | 'desc') => void;
};

export default function QuickTableActions({
  quickSortBy,
  setQuickSortBy,
  needsAttentionFilter,
  setNeedsAttentionFilter,
  setSortColumn,
  setSortDirection
}: QuickTableActionsProps) {
  return (
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
  );
}
