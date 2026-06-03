import { useState, useEffect } from "react";
import { X, Search, Check, Plus, Users, Zap, Trash2 } from "lucide-react";
import NoiseReductionOptionsModal from "@/app/components/NoiseReductionOptionsModal";
import MissingAlertRuleModal from "@/app/components/MissingAlertRuleModal";

type Client = {
  id: string;
  name: string;
  enabled: boolean;
  level: number;
  falsePositiveRate: number; // Percentage (e.g., 2.5)
  score: number; // Score out of 100
  hasAlertRule?: boolean; // Whether this client has the alert rule in their database
};

type Preset = {
  id: string;
  name: string;
  clientIds: string[];
};

type ClientOptions = {
  clientId: string;
  options: any;
};

type NoiseReductionConfigPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  alertId: number;
  alertType: string;
  clients: Client[];
  onSave: (clients: Client[], applyToAll: boolean, clientOptions: ClientOptions[]) => void;
};

export default function NoiseReductionConfigPanel({
  isOpen,
  onClose,
  alertId,
  alertType,
  clients: initialClients,
  onSave,
}: NoiseReductionConfigPanelProps) {
  const [clients, setClients] = useState<Client[]>(initialClients);
  const [applyToAll, setApplyToAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<Set<number>>(new Set([1, 2, 3, 4]));
  const [statusFilter, setStatusFilter] = useState<"all" | "enabled" | "disabled">("all");
  const [presets, setPresets] = useState<Preset[]>([
    {
      id: "preset-1",
      name: "John's Clients",
      clientIds: ["client-1", "client-5", "client-12", "client-18"],
    },
    {
      id: "preset-2",
      name: "Top Tier Clients",
      clientIds: ["client-2", "client-3", "client-7", "client-9", "client-14"],
    },
    {
      id: "preset-3",
      name: "New Onboardings",
      clientIds: ["client-55", "client-56", "client-57", "client-58", "client-59", "client-60"],
    },
  ]);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);
  const [showCreatePreset, setShowCreatePreset] = useState(false);
  const [newPresetName, setNewPresetName] = useState("");
  const [presetClientSelection, setPresetClientSelection] = useState<Set<string>>(new Set());
  const [presetSearchQuery, setPresetSearchQuery] = useState("");
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showMissingAlertRuleModal, setShowMissingAlertRuleModal] = useState(false);
  const [pendingApplyToAll, setPendingApplyToAll] = useState(false);

  const enabledCount = clients.filter((c) => c.enabled).length;
  const totalCount = clients.length;

  const filteredClients = clients.filter((client) => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLevel = selectedLevels.has(client.level);
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "enabled" && client.enabled) ||
      (statusFilter === "disabled" && !client.enabled);
    return matchesSearch && matchesLevel && matchesStatus;
  });

  const filteredEnabledCount = filteredClients.filter((c) => c.enabled).length;

  useEffect(() => {
    if (isOpen) {
      // Simulate some clients not having the alert rule in their database
      // For demo purposes, clients 5, 12, 18, 25, 31, 38, 42, 49, 54, 60 don't have the rule
      // In a real app, this would come from the backend
      const clientsWithoutRule = new Set(['client-5', 'client-12', 'client-18', 'client-25', 'client-31', 'client-38', 'client-42', 'client-49', 'client-54', 'client-60']);
      
      const clientsWithRuleStatus = initialClients.map((client) => ({
        ...client,
        hasAlertRule: !clientsWithoutRule.has(client.id),
      }));
      setClients(clientsWithRuleStatus);
      setSearchQuery("");
      setSelectedLevels(new Set([1, 2, 3, 4]));
      setStatusFilter("all");
      setSelectedPreset(null);
      const allEnabled = initialClients.every((c) => c.enabled);
      setApplyToAll(allEnabled);
      document.body.style.overflow = "hidden";
      
      // Reset preset creation state
      setShowCreatePreset(false);
      setNewPresetName("");
      setPresetClientSelection(new Set());
      setPresetSearchQuery("");
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialClients]);

  const handleApplyToAllToggle = () => {
    const newValue = !applyToAll;
    
    // If trying to enable for all clients, check if any clients are missing the alert rule
    if (newValue) {
      const missingClients = clients.filter((c) => !c.hasAlertRule);
      
      if (missingClients.length > 0) {
        // Show the missing alert rule modal
        setPendingApplyToAll(true);
        setShowMissingAlertRuleModal(true);
        return;
      }
    }
    
    // If no missing clients or disabling, proceed normally
    setApplyToAll(newValue);
    setClients(clients.map((c) => ({ ...c, enabled: newValue })));
  };

  const handleMissingAlertRuleConfirm = () => {
    // User confirmed to create alert rules for missing clients
    // Update all clients to have the alert rule
    const updatedClients = clients.map((c) => ({
      ...c,
      hasAlertRule: true,
      enabled: true,
    }));
    setClients(updatedClients);
    setApplyToAll(true);
    setShowMissingAlertRuleModal(false);
    setPendingApplyToAll(false);
    
    console.log("Creating alert rules for clients that don't have them and enabling noise reduction");
  };

  const handleMissingAlertRuleCancel = () => {
    // User canceled, don't apply to all
    setShowMissingAlertRuleModal(false);
    setPendingApplyToAll(false);
  };

  const handleClientToggle = (clientId: string) => {
    setClients(
      clients.map((c) =>
        c.id === clientId ? { ...c, enabled: !c.enabled } : c
      )
    );
    const updatedClients = clients.map((c) =>
      c.id === clientId ? { ...c, enabled: !c.enabled } : c
    );
    setApplyToAll(updatedClients.every((c) => c.enabled));
  };

  const handleLevelToggle = (level: number) => {
    const newLevels = new Set(selectedLevels);
    if (newLevels.has(level)) {
      newLevels.delete(level);
    } else {
      newLevels.add(level);
    }
    setSelectedLevels(newLevels);
  };

  const handleEnableAllFiltered = () => {
    setClients(
      clients.map((c) =>
        filteredClients.some((fc) => fc.id === c.id)
          ? { ...c, enabled: true }
          : c
      )
    );
  };

  const handleDisableAllFiltered = () => {
    setClients(
      clients.map((c) =>
        filteredClients.some((fc) => fc.id === c.id)
          ? { ...c, enabled: false }
          : c
      )
    );
  };

  const handleApplyPreset = (presetId: string) => {
    // If clicking on the already-selected preset, deselect it
    if (selectedPreset === presetId) {
      setSelectedPreset(null);
      return;
    }

    const preset = presets.find((p) => p.id === presetId);
    if (!preset) return;

    setSelectedPreset(presetId);
    
    // Enable clients in the preset
    const updatedClients = clients.map((c) => ({
      ...c,
      enabled: preset.clientIds.includes(c.id),
    }));
    setClients(updatedClients);
    
    // Automatically enable level filters for the levels included in this preset
    const presetClientLevels = new Set(
      updatedClients
        .filter((c) => preset.clientIds.includes(c.id))
        .map((c) => c.level)
    );
    setSelectedLevels(presetClientLevels);
  };

  const handleCreatePreset = () => {
    if (!newPresetName.trim()) return;
    if (presetClientSelection.size === 0) return;

    const newPreset: Preset = {
      id: `preset-${Date.now()}`,
      name: newPresetName,
      clientIds: Array.from(presetClientSelection),
    };

    setPresets([...presets, newPreset]);
    setNewPresetName("");
    setPresetClientSelection(new Set());
    setPresetSearchQuery("");
    setShowCreatePreset(false);
  };
  
  const handleTogglePresetClient = (clientId: string) => {
    const newSelection = new Set(presetClientSelection);
    if (newSelection.has(clientId)) {
      newSelection.delete(clientId);
    } else {
      newSelection.add(clientId);
    }
    setPresetClientSelection(newSelection);
  };
  
  const handleSelectAllPresetClients = () => {
    const allFilteredIds = filteredPresetClients.map(c => c.id);
    setPresetClientSelection(new Set(allFilteredIds));
  };
  
  const handleDeselectAllPresetClients = () => {
    setPresetClientSelection(new Set());
  };
  
  const filteredPresetClients = clients.filter((client) =>
    client.name.toLowerCase().includes(presetSearchQuery.toLowerCase())
  );

  const handleDeletePreset = (presetId: string) => {
    setPresets(presets.filter((p) => p.id !== presetId));
    if (selectedPreset === presetId) {
      setSelectedPreset(null);
    }
  };

  const handleSave = () => {
    // Check if any clients are enabled
    if (enabledCount === 0) {
      // No clients enabled, just close
      onClose();
      return;
    }
    // Open options modal instead of directly saving
    setShowOptionsModal(true);
  };

  const handleOptionsConfirm = (clientOptions: ClientOptions[]) => {
    onSave(clients, applyToAll, clientOptions);
    setShowOptionsModal(false);
    onClose();
  };

  const enabledClientsForOptions = clients
    .filter((c) => c.enabled)
    .map((c) => ({
      id: c.id,
      name: c.name,
      level: c.level,
    }));

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-[520px] bg-white shadow-[-2px_0px_8px_0px_rgba(0,0,0,0.15)] z-50 flex flex-col font-['Lato',sans-serif]">
        <div className="bg-[#092e3f] px-[24px] py-[20px] flex items-start justify-between shrink-0">
          <div className="flex-1 pr-[16px]">
            <h2 className="text-[18px] font-bold text-white mb-[8px]">
              Configure Noise Reduction
            </h2>
            <p className="text-[12px] text-[#e5f2f4] leading-[1.4]">
              {alertType}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#e5f2f4] transition-colors p-[4px]"
          >
            <X className="size-[24px]" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="bg-[#e5f2f4] px-[24px] py-[12px] border-b border-[#6b828c]/20">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#092e3f]">
                <span className="font-bold">{enabledCount}</span> of{" "}
                <span className="font-bold">{totalCount}</span> clients enabled
              </span>
              <div className="flex items-center gap-[8px]">
                {applyToAll && (
                  <div className="flex items-center gap-[4px] text-[12px] text-[#4CAF50]">
                    <Check className="size-[16px]" />
                    <span>All clients</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-[24px] py-[16px] border-b border-[#e5f2f4]">
            <div className="flex items-start justify-between gap-[16px]">
              <div className="flex-1">
                <h3 className="text-[14px] font-bold text-[#092e3f] mb-[4px]">
                  Apply to All Clients
                </h3>
                <p className="text-[11px] text-[#6b828c] leading-[1.4]">
                  Enable or disable across all {totalCount} clients
                </p>
              </div>
              <button
                onClick={handleApplyToAllToggle}
                className="shrink-0 mt-[4px]"
              >
                <div
                  className={`w-[48px] h-[24px] rounded-full relative transition-colors ${
                    applyToAll ? "bg-[#4CAF50]" : "bg-[#e5f2f4]"
                  }`}
                >
                  <div
                    className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full transition-all ${
                      applyToAll ? "right-[2px]" : "left-[2px]"
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>

          <div className="px-[24px] py-[16px] border-b border-[#e5f2f4]">
            <div className="flex items-center justify-between mb-[12px]">
              <div className="flex items-center gap-[8px]">
                <Users className="size-[16px] text-[#092e3f]" />
                <h3 className="text-[14px] font-bold text-[#092e3f]">
                  Quick Presets
                </h3>
              </div>
              <button
                onClick={() => setShowCreatePreset(!showCreatePreset)}
                className="flex items-center gap-[4px] text-[12px] text-[#092e3f] hover:text-[#0a3d52] transition-colors"
              >
                <Plus className="size-[14px]" />
                <span>Create</span>
              </button>
            </div>

            {showCreatePreset && (
              <div className="mb-[12px] p-[12px] bg-[#f6f6f6] rounded-[4px] space-y-[12px]">
                <input
                  type="text"
                  placeholder="Preset name (e.g., John's Clients)"
                  value={newPresetName}
                  onChange={(e) => setNewPresetName(e.target.value)}
                  className="w-full bg-white border border-[#e5f2f4] rounded-[4px] px-[12px] py-[8px] text-[12px] text-[#092e3f] placeholder:text-[#979394] focus:outline-none focus:border-[#092e3f]"
                />
                
                <div>
                  <div className="flex items-center justify-between mb-[8px]">
                    <span className="text-[11px] font-bold text-[#092e3f]">
                      Select Clients ({presetClientSelection.size} selected)
                    </span>
                    <div className="flex gap-[8px]">
                      <button
                        onClick={handleSelectAllPresetClients}
                        className="text-[10px] text-[#092e3f] hover:text-[#0a3d52] transition-colors underline"
                      >
                        Select All
                      </button>
                      <button
                        onClick={handleDeselectAllPresetClients}
                        className="text-[10px] text-[#6b828c] hover:text-[#092e3f] transition-colors underline"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative mb-[8px]">
                    <Search className="absolute left-[8px] top-[8px] size-[14px] text-[#6b828c]" />
                    <input
                      type="text"
                      placeholder="Search clients..."
                      value={presetSearchQuery}
                      onChange={(e) => setPresetSearchQuery(e.target.value)}
                      className="w-full bg-white border border-[#e5f2f4] rounded-[4px] pl-[28px] pr-[12px] py-[6px] text-[11px] text-[#092e3f] placeholder:text-[#979394] focus:outline-none focus:border-[#092e3f]"
                    />
                  </div>
                  
                  <div className="bg-white border border-[#e5f2f4] rounded-[4px] max-h-[200px] overflow-y-auto">
                    {filteredPresetClients.length === 0 ? (
                      <div className="px-[12px] py-[16px] text-center text-[11px] text-[#6b828c]">
                        No clients found
                      </div>
                    ) : (
                      filteredPresetClients.map((client) => (
                        <label
                          key={client.id}
                          className="flex items-center gap-[8px] px-[12px] py-[8px] hover:bg-[#f6f6f6] cursor-pointer border-b border-[#e5f2f4] last:border-b-0"
                        >
                          <input
                            type="checkbox"
                            checked={presetClientSelection.has(client.id)}
                            onChange={() => handleTogglePresetClient(client.id)}
                            className="size-[14px] cursor-pointer"
                          />
                          <div className="flex-1 flex items-center gap-[6px]">
                            <span className="text-[11px] text-[#092e3f]">
                              {client.name}
                            </span>
                            <span className="text-[9px] text-[#6b828c] bg-[#e5f2f4] px-[4px] py-[1px] rounded-full">
                              L{client.level}
                            </span>
                          </div>
                        </label>
                      ))
                    )}
                  </div>
                </div>
                
                <div className="flex gap-[8px]">
                  <button
                    onClick={handleCreatePreset}
                    disabled={!newPresetName.trim() || presetClientSelection.size === 0}
                    className="flex-1 px-[12px] py-[6px] text-[12px] bg-[#092e3f] text-white rounded-[4px] hover:bg-[#0a3d52] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Save Preset
                  </button>
                  <button
                    onClick={() => {
                      setShowCreatePreset(false);
                      setNewPresetName("");
                      setPresetClientSelection(new Set());
                      setPresetSearchQuery("");
                    }}
                    className="px-[12px] py-[6px] text-[12px] text-[#6b828c] hover:text-[#092e3f] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-[8px]">
              {presets.map((preset) => (
                <div
                  key={preset.id}
                  className="group relative"
                >
                  <button
                    onClick={() => handleApplyPreset(preset.id)}
                    className={`px-[12px] py-[6px] rounded-[4px] text-[12px] transition-colors flex items-center gap-[6px] ${
                      selectedPreset === preset.id
                        ? "bg-[#092e3f] text-white"
                        : "bg-[#e5f2f4] text-[#092e3f] hover:bg-[#d0e4e8]"
                    }`}
                  >
                    <span>{preset.name}</span>
                    <span className="text-[10px] opacity-70">
                      ({preset.clientIds.length})
                    </span>
                  </button>
                  <button
                    onClick={() => handleDeletePreset(preset.id)}
                    className="absolute -top-[6px] -right-[6px] bg-red-500 text-white rounded-full p-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="size-[10px]" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="px-[24px] py-[16px] border-b border-[#e5f2f4]">
            <div className="flex items-center justify-between mb-[12px]">
              <h3 className="text-[14px] font-bold text-[#092e3f]">
                Filter by Level
              </h3>
              <div className="flex items-center gap-[8px]">
                <button
                  onClick={handleEnableAllFiltered}
                  disabled={filteredClients.length === 0}
                  className="flex items-center gap-[4px] px-[10px] py-[4px] text-[11px] bg-[#4CAF50] text-white rounded-[4px] hover:bg-[#45a049] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Zap className="size-[12px]" />
                  <span>Enable Filtered</span>
                </button>
                <button
                  onClick={handleDisableAllFiltered}
                  disabled={filteredClients.length === 0}
                  className="flex items-center gap-[4px] px-[10px] py-[4px] text-[11px] bg-[#6b828c] text-white rounded-[4px] hover:bg-[#5a6f78] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>Disable Filtered</span>
                </button>
              </div>
            </div>

            <div className="flex gap-[8px]">
              {[1, 2, 3, 4].map((level) => {
                const levelClients = clients.filter((c) => c.level === level);
                const isSelected = selectedLevels.has(level);
                return (
                  <button
                    key={level}
                    onClick={() => handleLevelToggle(level)}
                    className={`flex-1 px-[12px] py-[8px] rounded-[4px] text-[12px] transition-colors ${
                      isSelected
                        ? "bg-[#092e3f] text-white"
                        : "bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e4e8]"
                    }`}
                  >
                    <div className="font-bold">Level {level}</div>
                    <div className="text-[10px] mt-[2px] opacity-70">
                      {levelClients.length} clients
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-[24px] py-[16px]">
            <div className="flex items-center justify-between mb-[12px]">
              <h3 className="text-[13px] font-bold text-[#092e3f]">
                Individual Clients
              </h3>
              <span className="text-[11px] text-[#6b828c]">
                Showing {filteredClients.length} • {filteredEnabledCount} enabled
              </span>
            </div>
            
            {/* Status Filter */}
            <div className="flex gap-[6px] mb-[12px]">
              <button
                onClick={() => setStatusFilter("all")}
                className={`flex-1 px-[12px] py-[6px] rounded-[4px] text-[11px] font-medium transition-colors ${
                  statusFilter === "all"
                    ? "bg-[#092e3f] text-white"
                    : "bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e4e8] hover:text-[#092e3f]"
                }`}
              >
                All ({clients.filter(c => {
                  const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
                  const matchesLevel = selectedLevels.has(c.level);
                  return matchesSearch && matchesLevel;
                }).length})
              </button>
              <button
                onClick={() => setStatusFilter("enabled")}
                className={`flex-1 px-[12px] py-[6px] rounded-[4px] text-[11px] font-medium transition-colors ${
                  statusFilter === "enabled"
                    ? "bg-[#4CAF50] text-white"
                    : "bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e4e8] hover:text-[#092e3f]"
                }`}
              >
                Enabled ({clients.filter(c => {
                  const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
                  const matchesLevel = selectedLevels.has(c.level);
                  return c.enabled && matchesSearch && matchesLevel;
                }).length})
              </button>
              <button
                onClick={() => setStatusFilter("disabled")}
                className={`flex-1 px-[12px] py-[6px] rounded-[4px] text-[11px] font-medium transition-colors ${
                  statusFilter === "disabled"
                    ? "bg-[#6b828c] text-white"
                    : "bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e4e8] hover:text-[#092e3f]"
                }`}
              >
                Disabled ({clients.filter(c => {
                  const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
                  const matchesLevel = selectedLevels.has(c.level);
                  return !c.enabled && matchesSearch && matchesLevel;
                }).length})
              </button>
            </div>
            
            <div className="relative mb-[12px]">
              <Search className="absolute left-[12px] top-[50%] translate-y-[-50%] size-[16px] text-[#6b828c]" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f6f6f6] border border-[#e5f2f4] rounded-[4px] pl-[36px] pr-[12px] py-[8px] text-[12px] text-[#092e3f] placeholder:text-[#979394] focus:outline-none focus:border-[#092e3f]"
              />
            </div>

            {filteredClients.length === 0 ? (
              <div className="text-center py-[32px] text-[14px] text-[#6b828c]">
                {selectedLevels.size === 0
                  ? "Select at least one level to view clients"
                  : statusFilter === "enabled"
                  ? "No enabled clients found"
                  : statusFilter === "disabled"
                  ? "No disabled clients found"
                  : "No clients found"}
              </div>
            ) : (
              <div className="space-y-[2px]">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    className="flex items-center justify-between py-[10px] px-[12px] rounded-[4px] hover:bg-[#f6f6f6] transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-[8px]">
                        <span className="text-[13px] text-[#092e3f] font-medium">
                          {client.name}
                        </span>
                        <span className="text-[10px] text-[#6b828c] bg-[#e5f2f4] px-[6px] py-[2px] rounded-full">
                          Level {client.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-[12px] mt-[4px]">
                        <div className="flex items-center gap-[4px]">
                          <span className="text-[10px] text-[#6b828c]">FP Rate:</span>
                          <span className={`text-[11px] font-medium ${
                            client.falsePositiveRate < 3 ? 'text-[#4CAF50]' : 
                            client.falsePositiveRate < 6 ? 'text-[#FFA726]' : 
                            'text-[#EF5350]'
                          }`}>
                            {client.falsePositiveRate}%
                          </span>
                        </div>
                        <div className="flex items-center gap-[4px]">
                          <span className="text-[10px] text-[#6b828c]">Score:</span>
                          <span className={`text-[11px] font-medium ${
                            client.score >= 90 ? 'text-[#4CAF50]' : 
                            client.score >= 80 ? 'text-[#FFA726]' : 
                            'text-[#EF5350]'
                          }`}>
                            {client.score}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#6b828c]">
                          {client.enabled ? "• Enabled" : "• Disabled"}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleClientToggle(client.id)}
                      className="shrink-0"
                    >
                      <div
                        className={`w-[40px] h-[20px] rounded-full relative transition-colors ${
                          client.enabled ? "bg-[#4CAF50]" : "bg-[#e5f2f4]"
                        }`}
                      >
                        <div
                          className={`absolute top-[2px] w-[16px] h-[16px] bg-white rounded-full transition-all ${
                            client.enabled ? "right-[2px]" : "left-[2px]"
                          }`}
                        ></div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="px-[24px] py-[16px] border-t border-[#e5f2f4] flex items-center justify-end gap-[12px] shrink-0">
          <button
            onClick={onClose}
            className="px-[20px] py-[10px] text-[14px] text-[#092e3f] hover:bg-[#f6f6f6] rounded-[4px] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-[20px] py-[10px] text-[14px] bg-[#092e3f] text-white hover:bg-[#0a3d52] rounded-[4px] transition-colors font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>

      {showOptionsModal && (
        <NoiseReductionOptionsModal
          isOpen={showOptionsModal}
          onClose={() => setShowOptionsModal(false)}
          alertType={alertType}
          enabledClients={enabledClientsForOptions}
          onConfirm={handleOptionsConfirm}
        />
      )}

      {showMissingAlertRuleModal && (
        <MissingAlertRuleModal
          isOpen={showMissingAlertRuleModal}
          onClose={handleMissingAlertRuleCancel}
          onConfirm={handleMissingAlertRuleConfirm}
          alertType={alertType}
          missingClients={clients.filter((c) => !c.hasAlertRule).map((c) => ({
            id: c.id,
            name: c.name,
            level: c.level,
          }))}
        />
      )}
    </>
  );
}