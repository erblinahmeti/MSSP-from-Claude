import { useState, useMemo } from 'react';
import { toast } from 'sonner@2.0.3';
import ClientDetail from './ClientDetail';
import { 
  Search, 
  MoreHorizontal,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
  RefreshCw,
  Filter,
  Columns3,
  Plus,
  Edit2,
  ExternalLink,
  Calendar,
  Undo2,
  RotateCw,
  Check,
  ChevronDown,
  ChevronUp,
  X,
  Phone
} from 'lucide-react';
import imgSeculyzePng from "figma:asset/f059048282c6434b0ecb2f73ac4a8d51c0755afb.png";
import imgSentinelPng from "figma:asset/a3774409e98c46ca03515e5bba6f515d1b11173c.png";
import imgAutotaskPng from "figma:asset/da8b49536731a0deeacc8c8a6cd1a32815de7120.png";
import svgPaths from "../imports/svg-bvyv8g5cz7";

type Client = {
  id: string;
  name: string;
  logo: string;
  incidentsLast30Days: number;
  contact: string;
  phone: string;
  priority: 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4';
  onboardedDate: string;
};

const mockClients: Client[] = [
  {
    id: '1',
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1706879349357-f17b91de99a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOaWtlJTIwbG9nb3xlbnwxfHx8fDE3NjY0ODU4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    incidentsLast30Days: 43,
    contact: 'john.doe@nike.com',
    phone: '+1 (555) 123-4567',
    priority: 'Level 1',
    onboardedDate: 'January 1, 2023'
  },
  {
    id: '2',
    name: 'Adidas',
    logo: 'https://images.unsplash.com/photo-1555274175-75f4056dfd05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZGlkYXMlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    incidentsLast30Days: 113,
    contact: 'admin@adidas.com',
    phone: '+1 (555) 234-5678',
    priority: 'Level 2',
    onboardedDate: 'February 14, 2023'
  },
  {
    id: '3',
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1609538106201-e0dc68873410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBcHBsZSUyMGxvZ298ZW58MXx8fHwxNzY2NDQwNzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    incidentsLast30Days: 87,
    contact: 'service@apple.com',
    phone: '+1 (555) 345-6789',
    priority: 'Level 1',
    onboardedDate: 'March 15, 2023'
  },
  {
    id: '4',
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaWNyb3NvZnQlMjBsb2dvfGVufDF8fHx8MTc2NjQyOTcwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    incidentsLast30Days: 39,
    contact: 'svc_azure@microsoft.com',
    phone: '+1 (555) 456-7890',
    priority: 'Level 3',
    onboardedDate: 'April 22, 2023'
  },
  {
    id: '5',
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1662947190722-5d272f82a526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBsb2dvfGVufDF8fHx8MTc2NjQ4NTgzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    incidentsLast30Days: 51,
    contact: 'user@google.com',
    phone: '+1 (555) 567-8901',
    priority: 'Level 2',
    onboardedDate: 'May 30, 2023'
  },
  {
    id: '6',
    name: 'Puma',
    logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=100&h=100&fit=crop',
    incidentsLast30Days: 16,
    contact: 'contact@puma.com',
    phone: '+1 (555) 678-9012',
    priority: 'Level 4',
    onboardedDate: 'June 1, 2023'
  },
  {
    id: '7',
    name: 'Reebok',
    logo: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=100&h=100&fit=crop',
    incidentsLast30Days: 28,
    contact: 'info@reebok.com',
    phone: '+1 (555) 789-0123',
    priority: 'Level 3',
    onboardedDate: 'June 2, 2023'
  },
  {
    id: '8',
    name: 'Under Armour',
    logo: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=100&h=100&fit=crop',
    incidentsLast30Days: 22,
    contact: 'support@underarmour.com',
    phone: '+1 (555) 890-1234',
    priority: 'Level 2',
    onboardedDate: 'June 3, 2023'
  }
];

type SortField = 'name' | 'incidentsLast30Days' | 'contact' | 'phone' | 'priority' | 'onboardedDate';
type SortDirection = 'asc' | 'desc' | null;

export default function ClientRegistry() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [editingContactId, setEditingContactId] = useState<string | null>(null);
  const [editingPhoneId, setEditingPhoneId] = useState<string | null>(null);
  const [editingPriorityId, setEditingPriorityId] = useState<string | null>(null);
  const [editedContact, setEditedContact] = useState('');
  const [editedPhone, setEditedPhone] = useState('');
  const [editedPriority, setEditedPriority] = useState<'Level 1' | 'Level 2' | 'Level 3' | 'Level 4'>('Level 1');
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [columnWidths, setColumnWidths] = useState({
    client: 280,
    incidents: 200,
    contact: 280,
    phone: 180,
    priority: 180,
    onboarded: 200,
    goTo: 180,
    more: 60
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Filter states matching Incidents page
  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Last 7 days');
  const [isFiltersDropdownOpen, setIsFiltersDropdownOpen] = useState(false);
  const [isColumnsDropdownOpen, setIsColumnsDropdownOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<Date>(new Date());
  const [expandedFilterSection, setExpandedFilterSection] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    clients: [] as string[]
  });
  const [visibleColumns, setVisibleColumns] = useState({
    client: true,
    incidents: true,
    contact: true,
    phone: true,
    priority: true,
    onboarded: true,
    goTo: true
  });
  
  // Client detail state
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

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
    { key: 'client', label: 'Client' },
    { key: 'incidents', label: 'Incidents last 30 days' },
    { key: 'contact', label: 'Contact' },
    { key: 'phone', label: 'Phone' },
    { key: 'priority', label: 'Priority' },
    { key: 'onboarded', label: 'Onboarded to Seculyze' },
    { key: 'goTo', label: 'Go To' }
  ];

  const uniqueClients = useMemo(() => {
    return Array.from(new Set(mockClients.map(c => c.name))).sort();
  }, []);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDate('Last 7 days');
    setSortField(null);
    setSortDirection(null);
    setCurrentPage(1);
    setSelectedFilters({
      clients: []
    });
    toast.success('Filters reset');
  };

  const handleRefreshTable = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLastRefreshed(new Date());
    setIsRefreshing(false);
    toast.success('Table refreshed');
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

  const toggleFilterSection = (section: string) => {
    setExpandedFilterSection(expandedFilterSection === section ? null : section);
  };

  const toggleFilterValue = (category: 'clients', value: string) => {
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
    setCurrentPage(1);
  };

  const toggleColumn = (columnKey: string) => {
    setVisibleColumns(prev => ({
      ...prev,
      [columnKey]: !prev[columnKey as keyof typeof prev]
    }));
  };

  const handleMouseDown = (column: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.pageX;
    const startWidth = columnWidths[column as keyof typeof columnWidths];

    const handleMouseMove = (e: MouseEvent) => {
      const diff = e.pageX - startX;
      const newWidth = Math.max(80, startWidth + diff);
      setColumnWidths(prev => ({
        ...prev,
        [column]: newWidth
      }));
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortField(null);
        setSortDirection(null);
      }
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSaveContact = (clientId: string) => {
    setClients(prev => prev.map(c => 
      c.id === clientId ? { ...c, contact: editedContact } : c
    ));
    setEditingContactId(null);
    toast.success('Contact email updated');
  };

  const handleSavePhone = (clientId: string) => {
    setClients(prev => prev.map(c => 
      c.id === clientId ? { ...c, phone: editedPhone } : c
    ));
    setEditingPhoneId(null);
    toast.success('Phone number updated');
  };

  const handleSavePriority = (clientId: string, priority: 'Level 1' | 'Level 2' | 'Level 3' | 'Level 4') => {
    setClients(prev => prev.map(c => 
      c.id === clientId ? { ...c, priority } : c
    ));
    setEditingPriorityId(null);
    toast.success(`Priority updated to ${priority}`);
  };

  const filteredAndSortedClients = useMemo(() => {
    let filtered = clients.filter(client => {
      return client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
             client.contact.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (sortField && sortDirection) {
      filtered = [...filtered].sort((a, b) => {
        let aValue: any;
        let bValue: any;

        switch (sortField) {
          case 'name':
            aValue = a.name.toLowerCase();
            bValue = b.name.toLowerCase();
            break;
          case 'incidentsLast30Days':
            aValue = a.incidentsLast30Days;
            bValue = b.incidentsLast30Days;
            break;
          case 'contact':
            aValue = a.contact.toLowerCase();
            bValue = b.contact.toLowerCase();
            break;
          case 'phone':
            aValue = a.phone.toLowerCase();
            bValue = b.phone.toLowerCase();
            break;
          case 'priority':
            aValue = a.priority;
            bValue = b.priority;
            break;
          case 'onboardedDate':
            aValue = new Date(a.onboardedDate);
            bValue = new Date(b.onboardedDate);
            break;
        }

        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filtered;
  }, [searchQuery, sortField, sortDirection]);

  const totalPages = Math.ceil(filteredAndSortedClients.length / itemsPerPage);
  const paginatedClients = filteredAndSortedClients.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#F8FAFB]">
      <div className="max-w-full h-full flex flex-col p-[16px]">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-[#092E3F]">Clients</h1>
            <span className="px-3 py-1 bg-[#2A96A8]/10 text-[#2A96A8] rounded-full text-sm">
              {filteredAndSortedClients.length}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap mb-4">
            <div className="relative flex-1 min-w-[280px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#092E3F]/40" />
              <input
                type="text"
                placeholder="Search clients..."
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
                {selectedFilters.clients.length > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 bg-[#2A96A8] text-white text-xs rounded-full">
                    {selectedFilters.clients.length}
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
                    <div>
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
                          <div className="w-4 h-4 rounded border-2 border-gray-300 peer-checked:bg-[#2A96A8] peer-checked:border-[#2A96A8] transition-all duration-200 flex items-center justify-center">
                            <svg 
                              className={`w-2.5 h-2.5 text-white transition-all duration-200 ${
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

            <button 
              onClick={() => toast.success('Onboarding new client...')}
              className="flex items-center gap-2 px-[20px] py-[10px] bg-[#2A96A8] text-white rounded-xl hover:bg-[#237d8d] transition-all text-sm shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Onboard Client</span>
            </button>
          </div>

        </div>

        <div className="flex-1 overflow-auto bg-white rounded-xl border border-gray-200 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {/* Loading Overlay */}
          {isRefreshing && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <RotateCw className="w-8 h-8 text-[#2A96A8] animate-spin" />
                <p className="text-sm text-[#092E3F]/70">Refreshing table...</p>
              </div>
            </div>
          )}

          <table className="w-full">
            <thead className="sticky top-0 bg-[#F8FAFB] border-b border-gray-200 z-10">
              <tr>
                <th 
                  className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                  style={{ width: columnWidths.client }}
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center gap-2">
                    Client
                    {sortField === 'name' ? (
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

                <th 
                  className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                  style={{ width: columnWidths.incidents }}
                  onClick={() => handleSort('incidentsLast30Days')}
                >
                  <div className="flex items-center gap-2">
                    Incidents last 30 days
                    {sortField === 'incidentsLast30Days' ? (
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
                    onMouseDown={handleMouseDown('incidents')}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                  </div>
                </th>

                <th 
                  className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                  style={{ width: columnWidths.contact }}
                  onClick={() => handleSort('contact')}
                >
                  <div className="flex items-center gap-2">
                    Contact
                    {sortField === 'contact' ? (
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
                    onMouseDown={handleMouseDown('contact')}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                  </div>
                </th>

                <th 
                  className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                  style={{ width: columnWidths.phone }}
                  onClick={() => handleSort('phone')}
                >
                  <div className="flex items-center gap-2">
                    Phone
                    {sortField === 'phone' ? (
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
                    onMouseDown={handleMouseDown('phone')}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                  </div>
                </th>

                <th 
                  className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                  style={{ width: columnWidths.priority }}
                  onClick={() => handleSort('priority')}
                >
                  <div className="flex items-center gap-2">
                    Priority
                    {sortField === 'priority' ? (
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
                    onMouseDown={handleMouseDown('priority')}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                  </div>
                </th>

                <th 
                  className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white relative group select-none cursor-pointer hover:bg-gray-100 transition-colors"
                  style={{ width: columnWidths.onboarded }}
                  onClick={() => handleSort('onboardedDate')}
                >
                  <div className="flex items-center gap-2">
                    Onboarded to Seculyze
                    {sortField === 'onboardedDate' ? (
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
                    onMouseDown={handleMouseDown('onboarded')}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-0.5 h-4 bg-gray-300 group-hover:bg-[#2A96A8]" />
                  </div>
                </th>

                <th 
                  className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white"
                  style={{ width: columnWidths.goTo }}
                >
                  Go To
                </th>

                <th 
                  className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[#092E3F]/70 bg-white"
                  style={{ width: columnWidths.more }}
                >
                </th>
              </tr>
            </thead>

            <tbody>
              {paginatedClients.map((client) => (
                <tr 
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className="transition-colors group hover:bg-gray-50/50 cursor-pointer"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="w-8 h-8 rounded-full object-cover shrink-0 border border-gray-200"
                      />
                      <span className="text-sm text-[#092E3F] truncate">{client.name}</span>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="text-sm text-[#092E3F]">
                      <span className="font-semibold">{client.incidentsLast30Days}</span>
                      <span className="text-[#6b828c] ml-1">Incidents</span>
                    </div>
                  </td>

                  <td className="px-4 py-3 group/cell" onClick={(e) => e.stopPropagation()}>
                    {editingContactId === client.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="email"
                          value={editedContact}
                          onChange={(e) => setEditedContact(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSaveContact(client.id);
                            if (e.key === 'Escape') setEditingContactId(null);
                          }}
                          className="flex-1 px-2 py-1 text-sm text-[#092E3F] border border-[#2A96A8] rounded focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20"
                          autoFocus
                        />
                        <button
                          onClick={() => handleSaveContact(client.id)}
                          className="p-1 hover:bg-green-100 rounded transition-colors"
                        >
                          <Check className="w-4 h-4 text-green-600" />
                        </button>
                        <button
                          onClick={() => setEditingContactId(null)}
                          className="p-1 hover:bg-red-100 rounded transition-colors"
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#092E3F] truncate">{client.contact}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingContactId(client.id);
                            setEditedContact(client.contact);
                          }}
                          className="p-1 hover:bg-gray-100 rounded transition-colors shrink-0 opacity-0 group-hover/cell:opacity-100"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#6b828c]" />
                        </button>
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3 group/cell" onClick={(e) => e.stopPropagation()}>
                    {editingPhoneId === client.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="tel"
                          value={editedPhone}
                          onChange={(e) => setEditedPhone(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleSavePhone(client.id);
                            if (e.key === 'Escape') setEditingPhoneId(null);
                          }}
                          className="flex-1 px-2 py-1 text-sm text-[#092E3F] border border-[#2A96A8] rounded focus:outline-none focus:ring-2 focus:ring-[#2A96A8]/20"
                          autoFocus
                        />
                        <button
                          onClick={() => handleSavePhone(client.id)}
                          className="p-1 hover:bg-green-100 rounded transition-colors"
                        >
                          <Check className="w-4 h-4 text-green-600" />
                        </button>
                        <button
                          onClick={() => setEditingPhoneId(null)}
                          className="p-1 hover:bg-red-100 rounded transition-colors"
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#6b828c]" />
                        <span className="text-sm text-[#6b828c] truncate">{client.phone}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingPhoneId(client.id);
                            setEditedPhone(client.phone);
                          }}
                          className="p-1 hover:bg-gray-100 rounded transition-colors shrink-0 opacity-0 group-hover/cell:opacity-100"
                        >
                          <Edit2 className="w-3.5 h-3.5 text-[#6b828c]" />
                        </button>
                      </div>
                    )}
                  </td>

                  <td className="px-4 py-3 relative" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingPriorityId(editingPriorityId === client.id ? null : client.id);
                        setEditedPriority(client.priority);
                      }}
                      className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm text-[#092E3F]">{client.priority}</span>
                      <ChevronDown className="w-4 h-4 text-[#6b828c]" />
                    </button>

                    {editingPriorityId === client.id && (
                      <>
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setEditingPriorityId(null)}
                        />
                        <div className="absolute left-0 top-full mt-1 w-32 bg-white rounded-xl shadow-xl border border-gray-200 z-50 py-1">
                          {(['Level 1', 'Level 2', 'Level 3', 'Level 4'] as const).map((level) => (
                            <button
                              key={level}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSavePriority(client.id, level);
                              }}
                              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                                client.priority === level
                                  ? 'bg-[#2A96A8]/10 text-[#2A96A8]'
                                  : 'text-[#092E3F] hover:bg-gray-50'
                              }`}
                            >
                              {level}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </td>

                  <td className="px-4 py-3">
                    <span className="text-sm text-[#6b828c]">{client.onboardedDate}</span>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => toast.success(`Opening ${client.name} in Seculyze`)}
                        className="bg-white p-[7px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-all"
                        title="Open in Seculyze"
                      >
                        <div className="size-6 flex items-center justify-center">
                          <img src={imgSeculyzePng} alt="Seculyze" className="h-[18px] w-[34.5px] object-contain" />
                        </div>
                      </button>
                      <button 
                        onClick={() => toast.success(`Opening ${client.name} in Sentinel`)}
                        className="bg-white p-[7px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-all"
                        title="Investigate in Sentinel"
                      >
                        <div className="size-6 flex items-center justify-center">
                          <img src={imgSentinelPng} alt="Sentinel" className="h-5 w-auto object-contain" />
                        </div>
                      </button>
                      <button 
                        onClick={() => toast.success(`Opening ${client.name} in Autotask`)}
                        className="bg-white p-[7px] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-all"
                        title="Open in AutoTask"
                      >
                        <div className="size-6 flex items-center justify-center overflow-clip rounded">
                          <img src={imgAutotaskPng} alt="AutoTask" className="size-6 object-cover" />
                        </div>
                      </button>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="relative">
                      <button 
                        onClick={() => setOpenDropdownId(openDropdownId === client.id ? null : client.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <MoreHorizontal className="w-4 h-4 text-[#092E3F]/60" />
                      </button>

                      {openDropdownId === client.id && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setOpenDropdownId(null)}
                          />
                          <div className="absolute right-0 top-full mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-200 z-50 py-1">
                            <button
                              onClick={() => {
                                toast.success(`Viewing details for ${client.name}`);
                                setOpenDropdownId(null);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
                            >
                              View Client Details
                            </button>
                            <button
                              onClick={() => {
                                toast.success(`Editing ${client.name}`);
                                setOpenDropdownId(null);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
                            >
                              Edit Client
                            </button>
                            <button
                              onClick={() => {
                                toast.success(`Viewing incidents for ${client.name}`);
                                setOpenDropdownId(null);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
                            >
                              View Incidents
                            </button>
                            <button
                              onClick={() => {
                                toast.success(`Managing integrations for ${client.name}`);
                                setOpenDropdownId(null);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
                            >
                              Manage Integrations
                            </button>
                            <div className="border-t border-gray-100 my-1" />
                            <button
                              onClick={() => {
                                toast.error(`Offboarding ${client.name}...`);
                                setOpenDropdownId(null);
                              }}
                              className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                              Offboard Client
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {paginatedClients.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg text-[#092E3F] mb-2">No clients found</h3>
              <p className="text-sm text-[#092E3F]/60">Try adjusting your search query</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-[#092E3F]/60">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAndSortedClients.length)} of {filteredAndSortedClients.length} clients
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#092E3F] hover:border-[#2A96A8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg text-sm transition-colors ${
                      currentPage === page
                        ? 'bg-[#2A96A8] text-white'
                        : 'bg-white border border-gray-200 text-[#092E3F] hover:border-[#2A96A8]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-[#092E3F] hover:border-[#2A96A8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Client Detail Side Pane */}
      {selectedClient && (
        <ClientDetail
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
          onNavigateToIncidents={() => {
            setSelectedClient(null);
            toast.success(`Navigating to incidents for ${selectedClient.name}...`);
          }}
          onNavigateToCalibrate={() => {
            setSelectedClient(null);
            toast.success(`Navigating to calibration for ${selectedClient.name}...`);
          }}
        />
      )}
    </div>
  );
}