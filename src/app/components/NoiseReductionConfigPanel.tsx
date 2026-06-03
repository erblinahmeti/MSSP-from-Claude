import { useState, useEffect } from "react";
import { X, Search, Check, Plus, Users, Zap, Trash2 } from "lucide-react";
import { toast } from "sonner@2.0.3";
import NoiseReductionOptionsModal from "../imports/pasted_text/noise-reduction-modal";
import PresetModal from "./PresetModal";

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

type NoiseReductionConfigPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  alertType: string;
  clients: Client[];
  onSave: (clients: Client[], applyToAll: boolean) => void;
};

export default function NoiseReductionConfigPanel({
  isOpen,
  onClose,
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
  const [showPresetModal, setShowPresetModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);

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
      setClients(initialClients);
      setSearchQuery("");
      setSelectedLevels(new Set([1, 2, 3, 4]));
      setStatusFilter("all");
      setSelectedPreset(null);
      const allEnabled = initialClients.every((c) => c.enabled);
      setApplyToAll(allEnabled);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, initialClients]);

  const handleApplyToAllToggle = () => {
    const newValue = !applyToAll;
    setApplyToAll(newValue);
    setClients(clients.map((c) => ({ ...c, enabled: newValue })));
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

  const handleSavePreset = (preset: Preset) => {
    const existingIndex = presets.findIndex(p => p.id === preset.id);
    if (existingIndex >= 0) {
      // Update existing preset
      const newPresets = [...presets];
      newPresets[existingIndex] = preset;
      setPresets(newPresets);
      toast.success('Preset updated successfully');
    } else {
      // Add new preset
      setPresets([...presets, preset]);
      toast.success('Preset created successfully');
    }
    setShowPresetModal(false);
  };
  
  const handleDeletePreset = (presetId: string) => {
    setPresets(presets.filter((p) => p.id !== presetId));
    if (selectedPreset === presetId) {
      setSelectedPreset(null);
    }
    toast.success('Preset deleted');
  };

  const handleSave = () => {
    // Check if any clients are enabled before opening the modal
    const enabledClients = clients.filter(c => c.enabled);
    
    if (enabledClients.length === 0) {
      toast.error('Please enable at least one client before configuring');
      return;
    }
    
    // Open the options modal
    setShowOptionsModal(true);
  };
  
  const handleOptionsConfirm = (clientOptions: any[]) => {
    // Here you would save the client options along with the client configurations
    // For now, we'll just call the original onSave
    onSave(clients, applyToAll);
    setShowOptionsModal(false);
    onClose();
    toast.success('Noise reduction configured successfully');
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-[520px] bg-white shadow-[-2px_0px_8px_0px_rgba(0,0,0,0.15)] z-50 flex flex-col animate-in slide-in-from-right duration-300">
        <div className="bg-[#092e3f] px-6 py-5 flex items-start justify-between shrink-0">
          <div className="flex-1 pr-4">
            <h2 className="text-lg font-bold text-white mb-2">
              Configure Noise Reduction
            </h2>
            <p className="text-xs text-[#e5f2f4] leading-relaxed">
              {alertType}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-[#e5f2f4] transition-colors p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="bg-[#e5f2f4] px-6 py-3 border-b border-[#6b828c]/20">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#092e3f]">
                <span className="font-bold">{enabledCount}</span> of{" "}
                <span className="font-bold">{totalCount}</span> clients enabled
              </span>
              <div className="flex items-center gap-2">
                {applyToAll && (
                  <div className="flex items-center gap-1 text-xs text-[#4CAF50]">
                    <Check className="w-4 h-4" />
                    <span>All clients</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 py-4 border-b border-[#e5f2f4]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-sm font-bold text-[#092e3f] mb-1">
                  Apply to All Clients
                </h3>
                <p className="text-xs text-[#6b828c] leading-relaxed">
                  Enable or disable across all {totalCount} clients
                </p>
              </div>
              <button
                onClick={handleApplyToAllToggle}
                className="shrink-0 mt-1"
              >
                <div
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    applyToAll ? "bg-[#4CAF50]" : "bg-[#e5f2f4]"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all ${
                      applyToAll ? "right-0.5" : "left-0.5"
                    }`}
                  ></div>
                </div>
              </button>
            </div>
          </div>

          <div className="px-6 py-4 border-b border-[#e5f2f4]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#092e3f]" />
                <h3 className="text-sm font-bold text-[#092e3f]">
                  Quick Presets
                </h3>
              </div>
              <button
                onClick={() => setShowPresetModal(true)}
                className="flex items-center gap-1 px-2.5 py-1 text-xs text-[#092E3F] hover:text-[#2A96A8] rounded transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Create Preset</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {presets.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => handleApplyPreset(preset.id)}
                  className={`px-3 py-1.5 rounded text-xs transition-colors flex items-center gap-1.5 ${
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
              ))}
            </div>
          </div>

          <div className="px-6 py-4 border-b border-[#e5f2f4]">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#092e3f]">
                Filter by Level
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleEnableAllFiltered}
                  disabled={filteredClients.length === 0}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs bg-[#4CAF50] text-white rounded hover:bg-[#45a049] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Zap className="w-3 h-3" />
                  <span>Enable Filtered</span>
                </button>
                <button
                  onClick={handleDisableAllFiltered}
                  disabled={filteredClients.length === 0}
                  className="flex items-center gap-1 px-2.5 py-1 text-xs bg-[#6b828c] text-white rounded hover:bg-[#5a6f78] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <span>Disable Filtered</span>
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              {[1, 2, 3, 4].map((level) => {
                const levelClients = clients.filter((c) => c.level === level);
                const isSelected = selectedLevels.has(level);
                return (
                  <button
                    key={level}
                    onClick={() => handleLevelToggle(level)}
                    className={`flex-1 px-3 py-2 rounded text-xs transition-colors ${
                      isSelected
                        ? "bg-[#092e3f] text-white"
                        : "bg-[#e5f2f4] text-[#6b828c] hover:bg-[#d0e4e8]"
                    }`}
                  >
                    <div className="font-bold">Level {level}</div>
                    <div className="text-[10px] mt-0.5 opacity-70">
                      {levelClients.length} clients
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-[#092e3f]">
                Individual Clients
              </h3>
              <span className="text-xs text-[#6b828c]">
                Showing {filteredClients.length} • {filteredEnabledCount} enabled
              </span>
            </div>
            
            {/* Status Filter */}
            <div className="flex gap-1.5 mb-3">
              <button
                onClick={() => setStatusFilter("all")}
                className={`flex-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
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
                className={`flex-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
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
                className={`flex-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
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
            
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b828c]" />
              <input
                type="text"
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#f6f6f6] border border-[#e5f2f4] rounded pl-9 pr-3 py-2 text-xs text-[#092e3f] placeholder:text-[#979394] focus:outline-none focus:border-[#092e3f]"
              />
            </div>

            {filteredClients.length === 0 ? (
              <div className="text-center py-8 text-sm text-[#6b828c]">
                {selectedLevels.size === 0
                  ? "Select at least one level to view clients"
                  : statusFilter === "enabled"
                  ? "No enabled clients found"
                  : statusFilter === "disabled"
                  ? "No disabled clients found"
                  : "No clients found"}
              </div>
            ) : (
              <div className="space-y-0.5">
                {filteredClients.map((client) => (
                  <div
                    key={client.id}
                    className="flex items-center justify-between py-2.5 px-3 rounded hover:bg-[#f6f6f6] transition-colors group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-[#092e3f] font-medium">
                          {client.name}
                        </span>
                        <span className="text-[10px] text-[#6b828c] bg-[#e5f2f4] px-1.5 py-0.5 rounded-full">
                          Level {client.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] text-[#6b828c]">FP Rate:</span>
                          <span className={`text-xs font-medium ${
                            client.falsePositiveRate < 3 ? 'text-[#4CAF50]' : 
                            client.falsePositiveRate < 6 ? 'text-[#FFA726]' : 
                            'text-[#EF5350]'
                          }`}>
                            {client.falsePositiveRate}%
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] text-[#6b828c]">Score:</span>
                          <span className={`text-xs font-medium ${
                            client.score >= 90 ? 'text-[#4CAF50]' : 
                            client.score >= 80 ? 'text-[#FFA726]' : 
                            'text-[#EF5350]'
                          }`}>
                            {client.score}
                          </span>
                        </div>
                        <span className="text-xs text-[#6b828c]">
                          {client.enabled ? "• Enabled" : "• Disabled"}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleClientToggle(client.id)}
                      className="shrink-0"
                    >
                      <div
                        className={`w-10 h-5 rounded-full relative transition-colors ${
                          client.enabled ? "bg-[#4CAF50]" : "bg-[#e5f2f4]"
                        }`}
                      >
                        <div
                          className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${
                            client.enabled ? "right-0.5" : "left-0.5"
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

        <div className="px-6 py-4 border-t border-[#e5f2f4] flex items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-sm text-[#092e3f] hover:bg-[#f6f6f6] rounded transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2.5 text-sm bg-[#092e3f] text-white hover:bg-[#0a3d52] rounded transition-colors font-medium"
          >
            Configure
          </button>
        </div>
      </div>
      
      {/* Noise Reduction Options Modal */}
      <NoiseReductionOptionsModal
        isOpen={showOptionsModal}
        onClose={() => setShowOptionsModal(false)}
        alertType={alertType}
        enabledClients={clients.filter(c => c.enabled)}
        onConfirm={handleOptionsConfirm}
      />
      
      {/* Preset Modal */}
      <PresetModal
        isOpen={showPresetModal}
        onClose={() => setShowPresetModal(false)}
        presets={presets}
        clients={clients}
        onSavePreset={handleSavePreset}
        onDeletePreset={handleDeletePreset}
      />
    </>
  );
}