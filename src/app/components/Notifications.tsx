import { useState } from 'react';
import { 
  Bell, 
  Mail, 
  Phone, 
  Webhook,
  AlertTriangle,
  TrendingUp,
  Wallet,
  Plus,
  X,
  Settings as SettingsIcon,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  ShieldX,
  Shield
} from 'lucide-react';

type NotificationChannel = {
  id: string;
  type: 'email' | 'phone' | 'itsm';
  value: string;
  itsmType?: 'ServiceNow' | 'Jira' | 'PagerDuty' | 'Slack';
};

type IncidentNotificationSettings = {
  truePositive: boolean;
  highThreat: boolean;
  mediumThreat: boolean;
  lowThreat: boolean;
  falsePositive: boolean;
  channels: NotificationChannel[];
};

type ThresholdNotification = {
  id: string;
  condition: string;
  value: string;
  channels: NotificationChannel[];
  action?: string;
};

type IngestionAnomalySettings = {
  thresholds: ThresholdNotification[];
};

type IngestionBudgetSettings = {
  thresholds: ThresholdNotification[];
};

export default function Notifications() {
  const [incidentSettings, setIncidentSettings] = useState<IncidentNotificationSettings>({
    truePositive: true,
    highThreat: true,
    mediumThreat: false,
    lowThreat: false,
    falsePositive: false,
    channels: [
      { id: '1', type: 'email', value: 'noor@seculyze.com' },
      { id: '2', type: 'email', value: 'berlin@seculyze.com' },
    ]
  });

  const [anomalySettings, setAnomalySettings] = useState<IngestionAnomalySettings>({
    thresholds: [
      { 
        id: '1', 
        condition: 'Projected to breach', 
        value: '',
        channels: [{ id: 'a1', type: 'email', value: 'noor@seculyze.com' }]
      },
      { 
        id: '2', 
        condition: 'Breached its limit', 
        value: '',
        channels: [{ id: 'a2', type: 'email', value: 'berlin@seculyze.com' }]
      },
      { 
        id: '3', 
        condition: 'Ingestion exceeds % of baseline/hour', 
        value: '450',
        channels: []
      },
      { 
        id: '4', 
        condition: 'Ingestion exceeds % of baseline/hour', 
        value: '650',
        channels: [{ id: 'a4', type: 'email', value: 'berlin@seculyze.com' }],
        action: 'Stop Ingestion'
      },
      { 
        id: '5', 
        condition: 'No ingestion for hours', 
        value: '24',
        channels: [{ id: 'a5', type: 'email', value: 'berlin@seculyze.com' }]
      },
    ]
  });

  const [budgetSettings, setBudgetSettings] = useState<IngestionBudgetSettings>({
    thresholds: [
      { 
        id: '1', 
        condition: 'Projected to breach', 
        value: '',
        channels: [{ id: 'b1', type: 'email', value: 'noor@seculyze.com' }]
      },
      { 
        id: '2', 
        condition: 'Breached its limit', 
        value: '',
        channels: [{ id: 'b2', type: 'email', value: 'berlin@seculyze.com' }]
      },
      { 
        id: '3', 
        condition: 'Ingestion exceeds % of baseline/hour', 
        value: '450',
        channels: []
      },
      { 
        id: '4', 
        condition: 'Ingestion exceeds % of baseline/hour', 
        value: '650',
        channels: [{ id: 'b4', type: 'email', value: 'berlin@seculyze.com' }],
        action: 'Stop Ingestion'
      },
      { 
        id: '5', 
        condition: 'No ingestion for hours', 
        value: '24',
        channels: [{ id: 'b5', type: 'email', value: 'berlin@seculyze.com' }]
      },
    ]
  });

  const [showAddChannel, setShowAddChannel] = useState<string | null>(null);
  const [newChannelType, setNewChannelType] = useState<'email' | 'phone' | 'itsm'>('email');
  const [newChannelValue, setNewChannelValue] = useState('');
  const [newChannelItsm, setNewChannelItsm] = useState<'ServiceNow' | 'Jira' | 'PagerDuty' | 'Slack'>('ServiceNow');

  const addChannelToIncident = () => {
    if (!newChannelValue) return;
    
    const newChannel: NotificationChannel = {
      id: Date.now().toString(),
      type: newChannelType,
      value: newChannelValue,
      ...(newChannelType === 'itsm' && { itsmType: newChannelItsm })
    };

    setIncidentSettings({
      ...incidentSettings,
      channels: [...incidentSettings.channels, newChannel]
    });

    setNewChannelValue('');
    setShowAddChannel(null);
  };

  const removeChannelFromIncident = (channelId: string) => {
    setIncidentSettings({
      ...incidentSettings,
      channels: incidentSettings.channels.filter(c => c.id !== channelId)
    });
  };

  const addChannelToThreshold = (thresholdId: string, type: 'anomaly' | 'budget') => {
    if (!newChannelValue) return;

    const newChannel: NotificationChannel = {
      id: Date.now().toString(),
      type: newChannelType,
      value: newChannelValue,
      ...(newChannelType === 'itsm' && { itsmType: newChannelItsm })
    };

    if (type === 'anomaly') {
      setAnomalySettings({
        thresholds: anomalySettings.thresholds.map(t => 
          t.id === thresholdId 
            ? { ...t, channels: [...t.channels, newChannel] }
            : t
        )
      });
    } else {
      setBudgetSettings({
        thresholds: budgetSettings.thresholds.map(t => 
          t.id === thresholdId 
            ? { ...t, channels: [...t.channels, newChannel] }
            : t
        )
      });
    }

    setNewChannelValue('');
    setShowAddChannel(null);
  };

  const removeChannelFromThreshold = (thresholdId: string, channelId: string, type: 'anomaly' | 'budget') => {
    if (type === 'anomaly') {
      setAnomalySettings({
        thresholds: anomalySettings.thresholds.map(t => 
          t.id === thresholdId 
            ? { ...t, channels: t.channels.filter(c => c.id !== channelId) }
            : t
        )
      });
    } else {
      setBudgetSettings({
        thresholds: budgetSettings.thresholds.map(t => 
          t.id === thresholdId 
            ? { ...t, channels: t.channels.filter(c => c.id !== channelId) }
            : t
        )
      });
    }
  };

  const getChannelIcon = (type: string) => {
    switch (type) {
      case 'email': return Mail;
      case 'phone': return Phone;
      case 'itsm': return Webhook;
      default: return Mail;
    }
  };

  const getThreatIcon = (threatLevel: string) => {
    switch (threatLevel) {
      case 'truePositive': return ShieldAlert;
      case 'highThreat': return ShieldAlert;
      case 'mediumThreat': return Shield;
      case 'lowThreat': return ShieldCheck;
      case 'falsePositive': return ShieldX;
      default: return Shield;
    }
  };

  const getThreatColor = (threatLevel: string) => {
    switch (threatLevel) {
      case 'truePositive': return 'text-red-600';
      case 'highThreat': return 'text-red-600';
      case 'mediumThreat': return 'text-orange-600';
      case 'lowThreat': return 'text-yellow-600';
      case 'falsePositive': return 'text-gray-600';
      default: return 'text-gray-600';
    }
  };

  const getThreatLabel = (key: string) => {
    switch (key) {
      case 'truePositive': return 'True Positive';
      case 'highThreat': return 'High Threat';
      case 'mediumThreat': return 'Medium Threat';
      case 'lowThreat': return 'Low Threat';
      case 'falsePositive': return 'False Positive';
      default: return key;
    }
  };

  return (
    <div className="flex-1 p-8 overflow-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl text-[#092E3F] mb-2">Notification Settings</h1>
          <p className="text-[#092E3F]/60">
            Configure how and when you want to be notified about incidents, ingestion anomalies, and budget alerts
          </p>
        </div>

        {/* Incident Notifications */}
        <div className="mb-8 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-[#092E3F] px-6 py-4 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-white" />
            <h2 className="text-xl text-white">Incident Notifications</h2>
          </div>

          <div className="p-6 space-y-6">
            {/* Event Types */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#092E3F]/60 mb-4">Notify me when</h3>
              <div className="space-y-3">
                {Object.entries(incidentSettings).filter(([key]) => key !== 'channels').map(([key, value]) => {
                  const Icon = getThreatIcon(key);
                  return (
                    <label 
                      key={key}
                      className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#2A96A8]/30 transition-all cursor-pointer bg-white"
                    >
                      <input
                        type="checkbox"
                        checked={value as boolean}
                        onChange={(e) => setIncidentSettings({ ...incidentSettings, [key]: e.target.checked })}
                        className="w-5 h-5 text-[#2A96A8] rounded border-gray-300 focus:ring-[#2A96A8]"
                      />
                      <Icon className={`w-5 h-5 ${getThreatColor(key)}`} />
                      <span className="text-[#092E3F]">{getThreatLabel(key)}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Notification Channels */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm uppercase tracking-wider text-[#092E3F]/60">Notification Channels</h3>
                <button
                  onClick={() => setShowAddChannel('incident')}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#2A96A8] text-white rounded-lg hover:bg-[#237d8d] transition-all text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Channel
                </button>
              </div>

              <div className="space-y-2">
                {incidentSettings.channels.map(channel => {
                  const Icon = getChannelIcon(channel.type);
                  return (
                    <div key={channel.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
                      <Icon className="w-4 h-4 text-[#2A96A8]" />
                      <span className="text-sm text-[#092E3F] flex-1">
                        {channel.type === 'itsm' ? `${channel.itsmType}: ${channel.value}` : channel.value}
                      </span>
                      <button
                        onClick={() => removeChannelFromIncident(channel.id)}
                        className="p-1 hover:bg-red-100 rounded transition-colors"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  );
                })}

                {showAddChannel === 'incident' && (
                  <div className="p-4 bg-[#2A96A8]/5 rounded-xl border border-[#2A96A8]/20 space-y-3">
                    <div className="flex gap-2">
                      <select
                        value={newChannelType}
                        onChange={(e) => setNewChannelType(e.target.value as any)}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="itsm">ITSM</option>
                      </select>

                      {newChannelType === 'itsm' && (
                        <select
                          value={newChannelItsm}
                          onChange={(e) => setNewChannelItsm(e.target.value as any)}
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                        >
                          <option value="ServiceNow">ServiceNow</option>
                          <option value="Jira">Jira</option>
                          <option value="PagerDuty">PagerDuty</option>
                          <option value="Slack">Slack</option>
                        </select>
                      )}

                      <input
                        type={newChannelType === 'email' ? 'email' : newChannelType === 'phone' ? 'tel' : 'text'}
                        value={newChannelValue}
                        onChange={(e) => setNewChannelValue(e.target.value)}
                        placeholder={
                          newChannelType === 'email' ? 'email@example.com' : 
                          newChannelType === 'phone' ? '+1234567890' : 
                          'Connection ID'
                        }
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                      />

                      <button
                        onClick={addChannelToIncident}
                        className="px-4 py-2 bg-[#2A96A8] text-white rounded-lg hover:bg-[#237d8d] transition-all text-sm"
                      >
                        Add
                      </button>
                      <button
                        onClick={() => {
                          setShowAddChannel(null);
                          setNewChannelValue('');
                        }}
                        className="px-4 py-2 bg-gray-200 text-[#092E3F] rounded-lg hover:bg-gray-300 transition-all text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* ITSM Settings Link */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Navigate to settings - this would be handled by the parent component
                  alert('Navigate to Settings > Integrations > ITSM');
                }}
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white border border-[#2A96A8] text-[#2A96A8] rounded-lg hover:bg-[#2A96A8]/5 transition-all text-sm"
              >
                <SettingsIcon className="w-4 h-4" />
                Configure ITSM Connections
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Ingestion Anomaly Notifications */}
        <div className="mb-8 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-[#092E3F] px-6 py-4 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-white" />
            <h2 className="text-xl text-white">Ingestion Anomaly Notifications</h2>
          </div>

          <div className="p-6">
            <h3 className="text-sm uppercase tracking-wider text-[#092E3F]/60 mb-4">Thresholds</h3>
            <div className="space-y-4">
              {anomalySettings.thresholds.map((threshold) => (
                <div key={threshold.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-1">
                      <div className="text-sm text-[#092E3F] mb-1">
                        If any budget is <span className="font-medium">{threshold.condition}</span>
                        {threshold.value && <span className="font-medium"> {threshold.value}{threshold.condition.includes('%') ? '%' : ''}</span>}
                      </div>
                      {threshold.action && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs mt-1">
                          ⚠️ {threshold.action}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setShowAddChannel(`anomaly-${threshold.id}`)}
                      className="flex items-center gap-1 px-2 py-1 bg-[#2A96A8] text-white rounded hover:bg-[#237d8d] transition-all text-xs"
                    >
                      <Plus className="w-3 h-3" />
                      Add
                    </button>
                  </div>

                  {threshold.channels.length > 0 && (
                    <div className="space-y-2">
                      {threshold.channels.map(channel => {
                        const Icon = getChannelIcon(channel.type);
                        return (
                          <div key={channel.id} className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200">
                            <Icon className="w-3 h-3 text-[#2A96A8]" />
                            <span className="text-xs text-[#092E3F] flex-1">
                              {channel.type === 'itsm' ? `${channel.itsmType}: ${channel.value}` : channel.value}
                            </span>
                            <button
                              onClick={() => removeChannelFromThreshold(threshold.id, channel.id, 'anomaly')}
                              className="p-0.5 hover:bg-red-100 rounded transition-colors"
                            >
                              <X className="w-3 h-3 text-red-600" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {showAddChannel === `anomaly-${threshold.id}` && (
                    <div className="mt-3 p-3 bg-[#2A96A8]/5 rounded-lg border border-[#2A96A8]/20 space-y-2">
                      <div className="flex gap-2">
                        <select
                          value={newChannelType}
                          onChange={(e) => setNewChannelType(e.target.value as any)}
                          className="px-2 py-1 border border-gray-300 rounded text-xs text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="itsm">ITSM</option>
                        </select>

                        {newChannelType === 'itsm' && (
                          <select
                            value={newChannelItsm}
                            onChange={(e) => setNewChannelItsm(e.target.value as any)}
                            className="px-2 py-1 border border-gray-300 rounded text-xs text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                          >
                            <option value="ServiceNow">ServiceNow</option>
                            <option value="Jira">Jira</option>
                            <option value="PagerDuty">PagerDuty</option>
                            <option value="Slack">Slack</option>
                          </select>
                        )}

                        <input
                          type={newChannelType === 'email' ? 'email' : newChannelType === 'phone' ? 'tel' : 'text'}
                          value={newChannelValue}
                          onChange={(e) => setNewChannelValue(e.target.value)}
                          placeholder={
                            newChannelType === 'email' ? 'email@example.com' : 
                            newChannelType === 'phone' ? '+1234567890' : 
                            'Connection ID'
                          }
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                        />

                        <button
                          onClick={() => addChannelToThreshold(threshold.id, 'anomaly')}
                          className="px-3 py-1 bg-[#2A96A8] text-white rounded hover:bg-[#237d8d] transition-all text-xs"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => {
                            setShowAddChannel(null);
                            setNewChannelValue('');
                          }}
                          className="px-3 py-1 bg-gray-200 text-[#092E3F] rounded hover:bg-gray-300 transition-all text-xs"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ingestion Budget Notifications */}
        <div className="mb-8 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="bg-[#092E3F] px-6 py-4 flex items-center gap-3">
            <Wallet className="w-6 h-6 text-white" />
            <h2 className="text-xl text-white">Ingestion Budget Notifications</h2>
          </div>

          <div className="p-6">
            <h3 className="text-sm uppercase tracking-wider text-[#092E3F]/60 mb-4">Thresholds</h3>
            <div className="space-y-4">
              {budgetSettings.thresholds.map((threshold) => (
                <div key={threshold.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-1">
                      <div className="text-sm text-[#092E3F] mb-1">
                        If any budget is <span className="font-medium">{threshold.condition}</span>
                        {threshold.value && <span className="font-medium"> {threshold.value}{threshold.condition.includes('%') ? '%' : ''}</span>}
                      </div>
                      {threshold.action && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs mt-1">
                          ⚠️ {threshold.action}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setShowAddChannel(`budget-${threshold.id}`)}
                      className="flex items-center gap-1 px-2 py-1 bg-[#2A96A8] text-white rounded hover:bg-[#237d8d] transition-all text-xs"
                    >
                      <Plus className="w-3 h-3" />
                      Add
                    </button>
                  </div>

                  {threshold.channels.length > 0 && (
                    <div className="space-y-2">
                      {threshold.channels.map(channel => {
                        const Icon = getChannelIcon(channel.type);
                        return (
                          <div key={channel.id} className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200">
                            <Icon className="w-3 h-3 text-[#2A96A8]" />
                            <span className="text-xs text-[#092E3F] flex-1">
                              {channel.type === 'itsm' ? `${channel.itsmType}: ${channel.value}` : channel.value}
                            </span>
                            <button
                              onClick={() => removeChannelFromThreshold(threshold.id, channel.id, 'budget')}
                              className="p-0.5 hover:bg-red-100 rounded transition-colors"
                            >
                              <X className="w-3 h-3 text-red-600" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {showAddChannel === `budget-${threshold.id}` && (
                    <div className="mt-3 p-3 bg-[#2A96A8]/5 rounded-lg border border-[#2A96A8]/20 space-y-2">
                      <div className="flex gap-2">
                        <select
                          value={newChannelType}
                          onChange={(e) => setNewChannelType(e.target.value as any)}
                          className="px-2 py-1 border border-gray-300 rounded text-xs text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="itsm">ITSM</option>
                        </select>

                        {newChannelType === 'itsm' && (
                          <select
                            value={newChannelItsm}
                            onChange={(e) => setNewChannelItsm(e.target.value as any)}
                            className="px-2 py-1 border border-gray-300 rounded text-xs text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                          >
                            <option value="ServiceNow">ServiceNow</option>
                            <option value="Jira">Jira</option>
                            <option value="PagerDuty">PagerDuty</option>
                            <option value="Slack">Slack</option>
                          </select>
                        )}

                        <input
                          type={newChannelType === 'email' ? 'email' : newChannelType === 'phone' ? 'tel' : 'text'}
                          value={newChannelValue}
                          onChange={(e) => setNewChannelValue(e.target.value)}
                          placeholder={
                            newChannelType === 'email' ? 'email@example.com' : 
                            newChannelType === 'phone' ? '+1234567890' : 
                            'Connection ID'
                          }
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs text-[#092E3F] focus:outline-none focus:ring-2 focus:ring-[#2A96A8]"
                        />

                        <button
                          onClick={() => addChannelToThreshold(threshold.id, 'budget')}
                          className="px-3 py-1 bg-[#2A96A8] text-white rounded hover:bg-[#237d8d] transition-all text-xs"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => {
                            setShowAddChannel(null);
                            setNewChannelValue('');
                          }}
                          className="px-3 py-1 bg-gray-200 text-[#092E3F] rounded hover:bg-gray-300 transition-all text-xs"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
