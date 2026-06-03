import { useState, useEffect } from "react";
import { X, Plus, BookMarked, Trash2, Check } from "lucide-react";

type Client = {
  id: string;
  name: string;
  level?: number;
  clientLogo?: string;
};

type Preset = {
  id: string;
  name: string;
  clientIds: string[];
};

type PresetModalProps = {
  isOpen: boolean;
  onClose: () => void;
  presets: Preset[];
  clients: Client[];
  onSavePreset: (preset: Preset) => void;
  onDeletePreset: (presetId: string) => void;
  preselectedClientIds?: string[];
};

export default function PresetModal({
  isOpen,
  onClose,
  presets,
  clients,
  onSavePreset,
  onDeletePreset,
  preselectedClientIds = [],
}: PresetModalProps) {
  const [isCreatingPreset, setIsCreatingPreset] = useState(false);
  const [editingPresetId, setEditingPresetId] = useState<string | null>(null);
  const [presetDraft, setPresetDraft] = useState<{ name: string; clientIds: string[] }>({
    name: "",
    clientIds: [],
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (isOpen && preselectedClientIds.length > 0) {
      openCreatePreset();
    }
  }, [isOpen]);

  const openCreatePreset = () => {
    setEditingPresetId(null);
    setIsCreatingPreset(true);
    setPresetDraft({
      name: "",
      clientIds: preselectedClientIds.length > 0 ? preselectedClientIds : [],
    });
  };

  const openEditPreset = (preset: Preset) => {
    setIsCreatingPreset(false);
    setEditingPresetId(preset.id);
    setPresetDraft({
      name: preset.name,
      clientIds: [...preset.clientIds],
    });
  };

  const savePreset = () => {
    if (!presetDraft.name.trim()) return;
    if (presetDraft.clientIds.length === 0) return;

    const preset: Preset = {
      id: editingPresetId || `preset-${Date.now()}`,
      name: presetDraft.name,
      clientIds: presetDraft.clientIds,
    };

    onSavePreset(preset);
    setIsCreatingPreset(false);
    setEditingPresetId(null);
    setPresetDraft({ name: "", clientIds: [] });
  };

  const deletePreset = (presetId: string) => {
    onDeletePreset(presetId);
    setEditingPresetId(null);
    setIsCreatingPreset(false);
    setPresetDraft({ name: "", clientIds: [] });
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isOpen) return null;

  const showEditor = isCreatingPreset || editingPresetId;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-[200] flex items-center justify-center p-4"
      onClick={() => {
        onClose();
        setIsCreatingPreset(false);
        setEditingPresetId(null);
      }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[88vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2A96A8]/10 flex items-center justify-center">
              <BookMarked className="w-5 h-5 text-[#2A96A8]" />
            </div>
            <div>
              <h2 className="text-xl text-[#092E3F]">
                {editingPresetId ? "Edit Preset" : isCreatingPreset ? "New Preset" : "Manage Presets"}
              </h2>
              <p className="text-sm text-[#092E3F]/60 mt-0.5">
                Organise clients into reusable groups
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              onClose();
              setIsCreatingPreset(false);
              setEditingPresetId(null);
            }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#092E3F]/60" />
          </button>
        </div>

        {/* Modal Body: left list + right editor */}
        <div className="flex flex-1 overflow-hidden">
          {/* LEFT — preset list */}
          <div className="w-72 shrink-0 border-r border-gray-100 flex flex-col">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#092E3F]/50">
                Presets ({presets.length})
              </span>
              <button
                onClick={() => openCreatePreset()}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs transition-colors ${
                  isCreatingPreset ? "bg-[#092E3F] text-white" : "bg-[#092E3F] text-white hover:bg-[#0a3d52]"
                }`}
              >
                <Plus className="w-3 h-3" /> New
              </button>
            </div>
            <div className="flex-1 overflow-auto p-2 space-y-1">
              {/* New Preset placeholder row while creating */}
              {isCreatingPreset && (
                <div className="px-3 py-2.5 rounded-xl bg-[#2A96A8]/10 border border-[#2A96A8]/30 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2A96A8]/20 border border-[#2A96A8] flex items-center justify-center shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2A96A8]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-[#2A96A8] truncate italic">
                      {presetDraft.name || "New Preset…"}
                    </div>
                    <div className="text-xs text-[#2A96A8]/60">
                      {presetDraft.clientIds.length} client
                      {presetDraft.clientIds.length !== 1 ? "s" : ""} selected
                    </div>
                  </div>
                </div>
              )}
              {presets.map((preset) => {
                const isEditing = editingPresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => openEditPreset(preset)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center gap-3 group ${
                      isEditing ? "bg-[#2A96A8]/10 border border-[#2A96A8]/30" : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#092E3F]/10 border border-[#092E3F]/20 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#092E3F]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm text-[#092E3F] truncate font-medium">{preset.name}</div>
                      <div className="text-xs text-[#092E3F]/50">
                        {preset.clientIds.length} client{preset.clientIds.length !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </button>
                );
              })}
              {presets.length === 0 && (
                <div className="px-4 py-6 text-center text-sm text-[#092E3F]/40">No presets yet</div>
              )}
            </div>
          </div>

          {/* RIGHT — editor */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {showEditor ? (
              <>
                {/* Editor Content */}
                <div className="flex-1 overflow-auto p-6">
                  <div className="mb-6">
                    <label className="block text-sm text-[#092E3F] mb-2">Preset Name</label>
                    <input
                      type="text"
                      value={presetDraft.name}
                      onChange={(e) => setPresetDraft((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter preset name"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#092E3F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#092E3F] mb-2">
                      Select Clients ({presetDraft.clientIds.length} selected)
                    </label>
                    <div className="mb-3">
                      <input
                        type="text"
                        placeholder="Search clients..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm text-[#092E3F] focus:outline-none focus:border-[#092E3F] transition-colors"
                      />
                    </div>
                    <div className="border border-gray-200 rounded-lg max-h-[400px] overflow-auto">
                      {filteredClients.map((client) => {
                        const isSelected = presetDraft.clientIds.includes(client.id);
                        return (
                          <button
                            key={client.id}
                            onClick={() => {
                              setPresetDraft((prev) => ({
                                ...prev,
                                clientIds: isSelected
                                  ? prev.clientIds.filter((id) => id !== client.id)
                                  : [...prev.clientIds, client.id],
                              }));
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                              isSelected
                                ? "bg-[#2A96A8]/10 border border-[#2A96A8]/20"
                                : "hover:bg-gray-50 border border-transparent"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
                                isSelected ? "bg-[#2A96A8] border-[#2A96A8]" : "border-gray-300"
                              }`}
                            >
                              {isSelected && <Check className="w-3 h-3 text-white" />}
                            </div>
                            {client.clientLogo && (
                              <img
                                src={client.clientLogo}
                                alt={client.name}
                                className="w-7 h-7 rounded-full object-cover border border-gray-200 shrink-0"
                              />
                            )}
                            <span className="text-sm text-[#092E3F] flex-1 text-left truncate">
                              {client.name}
                            </span>
                            {client.level && (
                              <span className="text-xs text-[#6b828c] bg-[#e5f2f4] px-2 py-0.5 rounded-full">
                                Level {client.level}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Editor Footer */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between shrink-0">
                  {editingPresetId ? (
                    <button
                      onClick={() => deletePreset(editingPresetId)}
                      className="flex items-center gap-2 px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-lg text-sm transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete preset
                    </button>
                  ) : (
                    <div />
                  )}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        if (isCreatingPreset) {
                          setIsCreatingPreset(false);
                          setEditingPresetId(null);
                          setPresetDraft({ name: "", clientIds: [] });
                        } else {
                          onClose();
                          setEditingPresetId(null);
                        }
                      }}
                      className="px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
                    >
                      {isCreatingPreset ? "Discard" : "Cancel"}
                    </button>
                    <button
                      onClick={savePreset}
                      disabled={!presetDraft.name.trim() || presetDraft.clientIds.length === 0}
                      className="px-5 py-2.5 bg-[#092E3F] text-white rounded-lg text-sm hover:bg-[#0a3d52] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {editingPresetId ? "Save changes" : "Create preset"}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Empty state — no preset selected / no draft */
              <div className="flex flex-col items-center justify-center h-full text-center px-8">
                <div className="w-16 h-16 bg-[#2A96A8]/10 rounded-2xl flex items-center justify-center mb-4">
                  <BookMarked className="w-8 h-8 text-[#2A96A8]" />
                </div>
                <h3 className="text-lg text-[#092E3F] mb-2">Select or create a preset</h3>
                <p className="text-sm text-[#092E3F]/50 mb-6">
                  Choose a preset from the left to edit it, or create a new one to group your clients.
                </p>
                <button
                  onClick={() => openCreatePreset()}
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#092E3F] text-white rounded-xl text-sm hover:bg-[#0a3d52] transition-colors"
                >
                  <Plus className="w-4 h-4" /> Create first preset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}