import { useState, useEffect } from "react";
import { X, ChevronDown, Info } from "lucide-react";

type Client = {
  id: string;
  name: string;
  level: number;
};

type NoiseReductionOptions = {
  autoCloseTag: string;
  changeSeverity: boolean;
  newSeverity: string;
  runIndefinitely: boolean;
  numberOfDays: number;
  applyToFutureOnly: boolean;
};

type ClientOptions = {
  clientId: string;
  options: NoiseReductionOptions;
};

type NoiseReductionOptionsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  alertType: string;
  enabledClients: Client[];
  onConfirm: (clientOptions: ClientOptions[]) => void;
};

const DEFAULT_OPTIONS: NoiseReductionOptions = {
  autoCloseTag: "Autoclosed by Seculyze",
  changeSeverity: false,
  newSeverity: "Low",
  runIndefinitely: true,
  numberOfDays: 30,
  applyToFutureOnly: false,
};

export default function NoiseReductionOptionsModal({
  isOpen,
  onClose,
  alertType,
  enabledClients,
  onConfirm,
}: NoiseReductionOptionsModalProps) {
  const [configMode, setConfigMode] = useState<"global" | "individual">("global");
  const [globalOptions, setGlobalOptions] = useState<NoiseReductionOptions>(DEFAULT_OPTIONS);
  const [individualOptions, setIndividualOptions] = useState<Map<string, NoiseReductionOptions>>(new Map());
  const [expandedClients, setExpandedClients] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen) {
      // Initialize individual options for all enabled clients
      const initialOptions = new Map<string, NoiseReductionOptions>();
      enabledClients.forEach((client) => {
        initialOptions.set(client.id, { ...DEFAULT_OPTIONS });
      });
      setIndividualOptions(initialOptions);
      setExpandedClients(new Set());
      setConfigMode("global");
      setGlobalOptions(DEFAULT_OPTIONS);
    }
  }, [isOpen, enabledClients]);

  const handleGlobalOptionChange = (key: keyof NoiseReductionOptions, value: any) => {
    setGlobalOptions({ ...globalOptions, [key]: value });
  };

  const handleIndividualOptionChange = (clientId: string, key: keyof NoiseReductionOptions, value: any) => {
    const newOptions = new Map(individualOptions);
    const clientOpts = newOptions.get(clientId) || { ...DEFAULT_OPTIONS };
    newOptions.set(clientId, { ...clientOpts, [key]: value });
    setIndividualOptions(newOptions);
  };

  const toggleClientExpanded = (clientId: string) => {
    const newExpanded = new Set(expandedClients);
    if (newExpanded.has(clientId)) {
      newExpanded.delete(clientId);
    } else {
      newExpanded.add(clientId);
    }
    setExpandedClients(newExpanded);
  };

  const handleConfirm = () => {
    if (configMode === "global") {
      // Apply global options to all clients
      const clientOptions: ClientOptions[] = enabledClients.map((client) => ({
        clientId: client.id,
        options: { ...globalOptions },
      }));
      onConfirm(clientOptions);
    } else {
      // Use individual options
      const clientOptions: ClientOptions[] = enabledClients.map((client) => ({
        clientId: client.id,
        options: individualOptions.get(client.id) || { ...DEFAULT_OPTIONS },
      }));
      onConfirm(clientOptions);
    }
  };

  const renderOptionsForm = (options: NoiseReductionOptions, onChange: (key: keyof NoiseReductionOptions, value: any) => void, compact = false) => (
    <div className={`space-y-[${compact ? '8px' : '12px'}]`}>
      {/* Autoclose Tag */}
      <div className="flex items-center justify-between gap-[12px]">
        <div className={`flex-1 px-[16px] py-[${compact ? '8px' : '12px'}] bg-[#e5f2f4] rounded-[4px] border border-[#092e3f]/10`}>
          <div className={`text-[${compact ? '11px' : '12px'}] text-[#092e3f] font-medium`}>
            Autoclose Incidents with "Autoclosed by Seculyze" Tag
          </div>
        </div>
        <input
          type="text"
          value={options.autoCloseTag}
          onChange={(e) => onChange("autoCloseTag", e.target.value)}
          placeholder="Add custom tag"
          className={`w-[180px] bg-white border border-[#e5f2f4] rounded-[4px] px-[12px] py-[${compact ? '6px' : '8px'}] text-[${compact ? '10px' : '11px'}] text-[#092e3f] placeholder:text-[#979394] focus:outline-none focus:border-[#092e3f]`}
        />
      </div>

      {/* Change Severity */}
      <div className="flex items-center justify-between gap-[12px]">
        <div className={`flex-1 px-[16px] py-[${compact ? '8px' : '12px'}] bg-[${options.changeSeverity ? '#e5f2f4' : '#f6f6f6'}] rounded-[4px] border border-[${options.changeSeverity ? '#092e3f' : '#e5f2f4'}]/10 cursor-pointer transition-colors`} onClick={() => onChange("changeSeverity", !options.changeSeverity)}>
          <div className={`text-[${compact ? '11px' : '12px'}] text-[#092e3f] font-medium`}>
            Maintain Incident Severity
          </div>
        </div>
        {options.changeSeverity && (
          <select
            value={options.newSeverity}
            onChange={(e) => onChange("newSeverity", e.target.value)}
            className={`w-[180px] bg-white border border-[#e5f2f4] rounded-[4px] px-[12px] py-[${compact ? '6px' : '8px'}] text-[${compact ? '10px' : '11px'}] text-[#092e3f] focus:outline-none focus:border-[#092e3f]`}
          >
            <option value="Low">Change severity to Low</option>
            <option value="Medium">Change severity to Medium</option>
            <option value="High">Change severity to High</option>
            <option value="Critical">Change severity to Critical</option>
          </select>
        )}
        {!options.changeSeverity && (
          <div className={`w-[180px] text-[${compact ? '10px' : '11px'}] text-[#6b828c] text-right`}>
            Keep original severity
          </div>
        )}
      </div>

      {/* Run Duration */}
      <div className="flex items-center justify-between gap-[12px]">
        <div className={`flex-1 px-[16px] py-[${compact ? '8px' : '12px'}] bg-[${options.runIndefinitely ? '#e5f2f4' : '#f6f6f6'}] rounded-[4px] border border-[${options.runIndefinitely ? '#092e3f' : '#e5f2f4'}]/10 cursor-pointer transition-colors`} onClick={() => onChange("runIndefinitely", !options.runIndefinitely)}>
          <div className={`text-[${compact ? '11px' : '12px'}] text-[#092e3f] font-medium`}>
            Run Indefinitely
          </div>
        </div>
        {!options.runIndefinitely && (
          <input
            type="number"
            value={options.numberOfDays}
            onChange={(e) => onChange("numberOfDays", parseInt(e.target.value) || 0)}
            placeholder="Number of days"
            min="1"
            className={`w-[180px] bg-white border border-[#e5f2f4] rounded-[4px] px-[12px] py-[${compact ? '6px' : '8px'}] text-[${compact ? '10px' : '11px'}] text-[#092e3f] placeholder:text-[#979394] focus:outline-none focus:border-[#092e3f]`}
          />
        )}
        {options.runIndefinitely && (
          <div className={`w-[180px] text-[${compact ? '10px' : '11px'}] text-[#6b828c] text-right`}>
            No time limit
          </div>
        )}
      </div>

      {/* Apply Scope */}
      <div className="flex items-center justify-between gap-[12px]">
        <div className={`flex-1 px-[16px] py-[${compact ? '8px' : '12px'}] bg-[#e5f2f4] rounded-[4px] border border-[#092e3f]/10`}>
          <div className={`text-[${compact ? '11px' : '12px'}] text-[#092e3f] font-medium`}>
            Apply to future incidents and any currently open ones
          </div>
        </div>
        <select
          value={options.applyToFutureOnly ? "future" : "both"}
          onChange={(e) => onChange("applyToFutureOnly", e.target.value === "future")}
          className={`w-[180px] bg-white border border-[#e5f2f4] rounded-[4px] px-[12px] py-[${compact ? '6px' : '8px'}] text-[${compact ? '10px' : '11px'}] text-[#092e3f] focus:outline-none focus:border-[#092e3f]`}
        >
          <option value="both">Apply to both</option>
          <option value="future">Apply only to future incidents</option>
        </select>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[680px] max-h-[90vh] bg-white rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] z-50 flex flex-col font-['Lato',sans-serif]">
        {/* Header */}
        <div className="px-[24px] py-[20px] border-b border-[#e5f2f4] flex items-start justify-between shrink-0">
          <div className="flex-1 pr-[16px]">
            <div className="flex items-center gap-[8px] mb-[4px]">
              <h2 className="text-[16px] font-bold text-[#092e3f]">OPTIONS</h2>
              <Info className="size-[16px] text-[#6b828c]" />
            </div>
            <p className="text-[11px] text-[#6b828c] leading-[1.5] mb-[12px]">
              For all False Positive
            </p>
            <p className="text-[13px] text-[#092e3f] font-medium leading-[1.4]">
              {alertType}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#6b828c] hover:text-[#092e3f] transition-colors p-[4px]"
          >
            <X className="size-[20px]" />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="px-[24px] py-[16px] border-b border-[#e5f2f4] bg-[#f6f6f6] shrink-0">
          <div className="flex items-center gap-[12px]">
            <span className="text-[12px] text-[#092e3f] font-medium">Configuration Mode:</span>
            <div className="flex gap-[8px]">
              <button
                onClick={() => setConfigMode("global")}
                className={`px-[16px] py-[6px] rounded-[4px] text-[12px] transition-colors ${
                  configMode === "global"
                    ? "bg-[#092e3f] text-white"
                    : "bg-white text-[#092e3f] hover:bg-[#e5f2f4]"
                }`}
              >
                Same for All ({enabledClients.length})
              </button>
              <button
                onClick={() => setConfigMode("individual")}
                className={`px-[16px] py-[6px] rounded-[4px] text-[12px] transition-colors ${
                  configMode === "individual"
                    ? "bg-[#092e3f] text-white"
                    : "bg-white text-[#092e3f] hover:bg-[#e5f2f4]"
                }`}
              >
                Configure Per Client
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[20px]">
          {configMode === "global" ? (
            <div>
              <div className="text-[13px] text-[#6b828c] mb-[16px]">
                These settings will apply to all {enabledClients.length} enabled clients
              </div>
              {renderOptionsForm(globalOptions, handleGlobalOptionChange)}
            </div>
          ) : (
            <div className="space-y-[8px]">
              <div className="text-[13px] text-[#6b828c] mb-[12px]">
                Configure settings individually for each client. Click to expand/collapse.
              </div>
              {enabledClients.map((client) => {
                const isExpanded = expandedClients.has(client.id);
                const clientOpts = individualOptions.get(client.id) || { ...DEFAULT_OPTIONS };
                
                return (
                  <div
                    key={client.id}
                    className="border border-[#e5f2f4] rounded-[4px] overflow-hidden"
                  >
                    <button
                      onClick={() => toggleClientExpanded(client.id)}
                      className="w-full px-[16px] py-[12px] bg-[#f6f6f6] hover:bg-[#e5f2f4] transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-[8px]">
                        <ChevronDown
                          className={`size-[16px] text-[#092e3f] transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                        <span className="text-[12px] text-[#092e3f] font-medium">
                          {client.name}
                        </span>
                        <span className="text-[10px] text-[#6b828c] bg-white px-[6px] py-[2px] rounded-full">
                          Level {client.level}
                        </span>
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-[16px] py-[12px] bg-white">
                        {renderOptionsForm(
                          clientOpts,
                          (key, value) => handleIndividualOptionChange(client.id, key, value),
                          true
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-[24px] py-[16px] border-t border-[#e5f2f4] flex items-center justify-end gap-[12px] shrink-0">
          <button
            onClick={onClose}
            className="px-[20px] py-[10px] text-[13px] text-[#092e3f] hover:bg-[#f6f6f6] rounded-[4px] transition-colors"
          >
            CANCEL
          </button>
          <button
            onClick={handleConfirm}
            className="px-[20px] py-[10px] text-[13px] bg-[#092e3f] text-white hover:bg-[#0a3d52] rounded-[4px] transition-colors font-medium"
          >
            CONFIRM NOISE REDUCTION
          </button>
        </div>
      </div>
    </>
  );
}
