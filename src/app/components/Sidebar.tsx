import { useState } from 'react';
import imgSeculyzeLogo from 'figma:asset/f059048282c6434b0ecb2f73ac4a8d51c0755afb.png';
import imgAvatarPlaceholder from 'figma:asset/4d26c05510cc56873f23d8c51c85578f89b6402d.png';
import { 
  LayoutDashboard, 
  AlertTriangle, 
  Gauge, 
  Volume2, 
  Bell,
  Database, 
  TrendingUp, 
  Wallet, 
  Users, 
  UserPlus, 
  FileText,
  Settings,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react';

type MenuItem = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  id: string;
  badge?: number;
};

type MenuSection = {
  title?: string;
  items: MenuItem[];
};

interface SidebarProps {
  activeItem: string;
  onNavigate: (id: string) => void;
}

function MenuItemComponent({ 
  icon: Icon, 
  label, 
  isActive, 
  onClick,
  isCollapsed,
  badge
}: { 
  icon: React.ComponentType<{ className?: string }>; 
  label: string; 
  isActive: boolean;
  onClick: () => void;
  isCollapsed: boolean;
  badge?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300
        ${isActive 
          ? 'bg-[#2A96A8] text-white shadow-lg shadow-[#2A96A8]/30' 
          : 'text-white/60 hover:bg-white/10 hover:text-white'
        }
        ${isCollapsed ? 'justify-center' : ''}
      `}
      title={isCollapsed ? label : undefined}
    >
      <Icon className={`${isCollapsed ? 'w-5 h-5' : 'w-5 h-5'} shrink-0 transition-transform group-hover:scale-110`} />
      
      {!isCollapsed && (
        <>
          <span className="flex-1 text-left text-sm">{label}</span>
          {badge && (
            <span className={`px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-white/20' : 'bg-[#2A96A8]'} text-white`}>
              {badge}
            </span>
          )}
        </>
      )}
      
      {/* Tooltip for collapsed state */}
      {isCollapsed && (
        <div className="absolute left-full ml-2 px-3 py-1.5 bg-white text-[#092E3F] text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl">
          {label}
          {badge && (
            <span className="ml-2 px-1.5 py-0.5 rounded-full bg-[#2A96A8] text-white text-xs">
              {badge}
            </span>
          )}
        </div>
      )}
    </button>
  );
}

function SectionTitle({ title, isCollapsed }: { title?: string; isCollapsed: boolean }) {
  if (!title || isCollapsed) return null;
  
  return (
    <div className="px-3 mt-8 mb-3 first:mt-0">
      <span className="text-xs uppercase tracking-wider text-white/40">
        {title}
      </span>
    </div>
  );
}

export default function Sidebar({ activeItem, onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuSections: MenuSection[] = [
    {
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'incidents', label: 'Incidents', icon: AlertTriangle, badge: 3 },
        { id: 'notifications', label: 'Notifications', icon: Bell },
      ],
    },
    {
      title: 'Tuning',
      items: [
        { id: 'calibrate-overview', label: 'Calibrate Overview', icon: Gauge },
        { id: 'alert-rules', label: 'Alert Rules', icon: Volume2 },
        { id: 'noise-reduction', label: 'Noise Reduction', icon: Volume2 },
      ],
    },
    {
      title: 'Cost & Analytics',
      items: [
        { id: 'data-collection', label: 'Data Collection', icon: Database },
        { id: 'ingestion-anomalies', label: 'Ingestion Anomalies', icon: TrendingUp },
        { id: 'ingestion-budget', label: 'Ingestion Budget', icon: Wallet },
      ],
    },
    {
      title: 'Clients',
      items: [
        { id: 'client-registry', label: 'Client Registry', icon: Users },
        { id: 'onboard-client', label: 'Onboard Client', icon: UserPlus },
      ],
    },
    {
      title: 'Automation',
      items: [
        { id: 'automated-reporting', label: 'Automated Reporting', icon: FileText },
      ],
    },
  ];

  return (
    <div 
      className={`
        h-screen bg-[#092E3F] flex flex-col shadow-2xl relative transition-all duration-300
        ${isCollapsed ? 'w-20' : 'w-64'}
      `}
    >
      {/* Header with Logo */}
      <div className={`px-6 py-6 flex items-center ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!isCollapsed ? (
          <>
            <img 
              src={imgSeculyzeLogo} 
              alt="Seculyze" 
              className="h-8 w-auto"
            />
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </>
        ) : (
          <div className="relative group">
            <img 
              src={imgSeculyzeLogo} 
              alt="Seculyze" 
              className="h-8 w-auto cursor-pointer transition-opacity duration-200 group-hover:opacity-0"
            />
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="absolute inset-0 flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto px-3 py-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
        <nav className="space-y-2">
          {menuSections.map((section, index) => (
            <div key={index} className={section.title ? 'mb-6' : ''}>
              <SectionTitle title={section.title} isCollapsed={isCollapsed} />
              <div className="space-y-1">
                {section.items.map((item) => (
                  <MenuItemComponent
                    key={item.id}
                    icon={item.icon}
                    label={item.label}
                    isActive={activeItem === item.id}
                    onClick={() => onNavigate(item.id)}
                    isCollapsed={isCollapsed}
                    badge={item.badge}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* User Profile Section */}
      <div className="p-3 border-t border-white/10">
        {!isCollapsed ? (
          <div className="space-y-2">
            {/* User Profile Card */}
            <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#2A96A8]/50 shrink-0">
                  <img 
                    src={imgAvatarPlaceholder} 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm truncate">John Doe</p>
                  <p className="text-white/50 text-xs truncate">Admin</p>
                </div>
                <LogOut className="w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button 
                className="flex-1 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                title="Settings"
              >
                <Settings className="w-4 h-4" />
                <span className="text-xs">Settings</span>
              </button>
              <button 
                className="flex-1 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                title="Help"
              >
                <HelpCircle className="w-4 h-4" />
                <span className="text-xs">Help</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {/* Collapsed User Avatar */}
            <button className="relative group w-full flex justify-center">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#2A96A8]/50 hover:ring-[#2A96A8] transition-all duration-200">
                <img 
                  src={imgAvatarPlaceholder} 
                  alt="User" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-full ml-2 px-3 py-2 bg-[#092E3F] text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl border border-white/10">
                <p className="font-medium">John Doe</p>
                <p className="text-xs text-white/50">Admin</p>
              </div>
            </button>
            
            {/* Collapsed Action Buttons */}
            <button 
              className="relative group w-full p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 flex items-center justify-center"
              title="Settings"
            >
              <Settings className="w-4 h-4" />
              <div className="absolute left-full ml-2 px-3 py-1.5 bg-[#092E3F] text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl border border-white/10">
                Settings
              </div>
            </button>
            
            <button 
              className="relative group w-full p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-200 flex items-center justify-center"
              title="Help"
            >
              <HelpCircle className="w-4 h-4" />
              <div className="absolute left-full ml-2 px-3 py-1.5 bg-[#092E3F] text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 shadow-xl border border-white/10">
                Help Center
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}