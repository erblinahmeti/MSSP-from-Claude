import { useState } from 'react';
import { X, Shield, GitBranch, Check, AlertCircle } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

interface AlertRule {
  id: string;
  name: string;
  author: 'Microsoft' | 'Seculyze' | 'Custom';
  version: string;
}

interface VersionInfo {
  version: string;
  releaseDate: string;
  clientsUsing: number;
  clientNames: string[];
  isNewest: boolean;
  changes: string[];
}

interface VersionAlignmentModalProps {
  rule: AlertRule;
  onClose: () => void;
  onAlign?: (selectedVersion: string) => void;
}

export default function VersionAlignmentModal({
  rule,
  onClose,
  onAlign
}: VersionAlignmentModalProps) {
  const versions: VersionInfo[] = [
    {
      version: '2.0.1',
      releaseDate: '2026-05-15',
      clientsUsing: 8,
      clientNames: ['Nike', 'Adidas', 'Apple', 'Microsoft', 'Google', 'Amazon', 'Tesla', 'Meta'],
      isNewest: true,
      changes: [
        'Improved detection accuracy by 15%',
        'Reduced false positive rate',
        'Added support for new log source types'
      ]
    },
    {
      version: '2.0.0',
      releaseDate: '2026-04-10',
      clientsUsing: 3,
      clientNames: ['Netflix', 'Spotify', 'Adobe'],
      isNewest: false,
      changes: [
        'Major performance improvements',
        'Updated MITRE ATT&CK mappings',
        'Enhanced query optimization'
      ]
    },
    {
      version: '1.9.5',
      releaseDate: '2026-03-01',
      clientsUsing: 1,
      clientNames: ['Oracle'],
      isNewest: false,
      changes: [
        'Security patch for CVE-2026-1234',
        'Minor bug fixes'
      ]
    }
  ];

  const [selectedVersion, setSelectedVersion] = useState<string>(
    versions.find(v => v.isNewest)?.version || versions[0].version
  );

  const handleAlign = () => {
    onAlign?.(selectedVersion);
    const selectedVersionInfo = versions.find(v => v.version === selectedVersion);
    toast.success(`Aligning all clients to version ${selectedVersion} (${selectedVersionInfo?.clientsUsing} clients affected)`);
    onClose();
  };

  const totalClients = versions.reduce((sum, v) => sum + v.clientsUsing, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="bg-[#092E3F] px-6 py-5 rounded-t-2xl">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h2 className="text-white text-lg font-bold mb-2">Align Alert Rule Version</h2>
              <p className="text-[#e5f2f4] text-xs leading-relaxed">{rule.name}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors shrink-0"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[#092E3F] font-medium mb-1">
                  Version Misalignment Detected
                </p>
                <p className="text-xs text-[#092E3F]/70">
                  {totalClients} clients are running different versions of this alert rule. Select a version to distribute across all clients. The newest version is pre-selected, but you can choose any version including rollback to older versions.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-bold text-[#092E3F] mb-3">Available Versions</h3>
            <div className="space-y-3">
              {versions.map((versionInfo) => (
                <button
                  key={versionInfo.version}
                  onClick={() => setSelectedVersion(versionInfo.version)}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    selectedVersion === versionInfo.version
                      ? 'border-[#2A96A8] bg-[#e5f2f4]'
                      : 'border-gray-200 bg-white hover:border-[#2A96A8]/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                      selectedVersion === versionInfo.version
                        ? 'border-[#2A96A8] bg-[#2A96A8]'
                        : 'border-gray-300 bg-white'
                    }`}>
                      {selectedVersion === versionInfo.version && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <GitBranch className="w-4 h-4 text-[#2A96A8]" />
                        <span className="text-sm font-bold text-[#092E3F]">
                          Version {versionInfo.version}
                        </span>
                        {versionInfo.isNewest && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] rounded-full font-medium">
                            Newest
                          </span>
                        )}
                        <span className="text-xs text-[#092E3F]/60">
                          Released {new Date(versionInfo.releaseDate).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-[#092E3F]/60 mb-1">
                          Currently used by {versionInfo.clientsUsing} of {totalClients} clients
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {versionInfo.clientNames.map((client) => (
                            <span
                              key={client}
                              className="px-2 py-0.5 bg-gray-100 text-[#092E3F] text-[10px] rounded-full"
                            >
                              {client}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-3 border border-gray-100">
                        <p className="text-xs font-medium text-[#092E3F] mb-2">Changes in this version:</p>
                        <ul className="space-y-1">
                          {versionInfo.changes.map((change, idx) => (
                            <li key={idx} className="text-xs text-[#092E3F]/70 flex items-start gap-2">
                              <span className="text-[#2A96A8] mt-0.5">•</span>
                              <span>{change}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[#092E3F] font-medium mb-1">
                  Alignment Impact
                </p>
                <p className="text-xs text-[#092E3F]/70">
                  Selecting version {selectedVersion} will update{' '}
                  {versions
                    .filter(v => v.version !== selectedVersion)
                    .reduce((sum, v) => sum + v.clientsUsing, 0)}{' '}
                  client{versions.filter(v => v.version !== selectedVersion).reduce((sum, v) => sum + v.clientsUsing, 0) !== 1 ? 's' : ''} to use this version.
                  All clients will then be aligned on the same version.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-[#092E3F] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAlign}
              className="px-6 py-2 bg-[#2A96A8] hover:bg-[#237f8e] text-white rounded-lg text-sm transition-colors"
            >
              Align to Version {selectedVersion}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
