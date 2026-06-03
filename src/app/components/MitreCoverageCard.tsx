import { useMemo } from 'react';

interface AlertRule {
  id: string;
  name: string;
  author: 'Microsoft' | 'Seculyze';
  version: string;
  mitre: string[];
  logSources: string[];
  value: 'High' | 'Medium' | 'Low';
  state: 'Enabled' | 'Disabled';
  clientsApplied: number;
  clientNames?: string[];
  attention: 'High Value Alert' | 'Low Value Alert' | 'Medium Value Alert';
  action: 'Enable' | 'Disable';
  isNewlyImported?: boolean;
  sourceTenantId?: string;
}

interface MitreCoverageCardProps {
  rules: AlertRule[];
  activeMitre?: string | null;
  onMitreClick: (mitre: string) => void;
}

const MitreLine = ({ count, label, onClick, isActive }: { count: number; label: string; onClick: () => void; isActive: boolean }) => (
  <button
    onClick={onClick}
    className={`content-stretch flex gap-[6px] items-center p-[3px] relative shrink-0 w-full hover:bg-[#2A96A8]/5 rounded transition-colors cursor-pointer ${
      isActive ? 'bg-[#2A96A8]/10' : ''
    }`}
    data-name="sz-MITRE-line-for-statboard"
  >
    <div className={`bg-[#e5f2f4] content-stretch flex flex-col items-center justify-center p-[6px] relative rounded-[12px] shrink-0 w-[22px] transition-colors ${
      isActive ? 'ring-2 ring-[#2A96A8]' : ''
    }`}>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[0px] text-center w-full">
        <p className="font-['Lato:Italic',sans-serif] italic leading-[normal] text-[12px]">{count}</p>
      </div>
    </div>
    <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[0px] text-left whitespace-nowrap">
      <p className="font-['Lato:Italic',sans-serif] italic leading-[normal] text-[12px]">{label}</p>
    </div>
  </button>
);

export default function MitreCoverageCard({ rules, activeMitre, onMitreClick }: MitreCoverageCardProps) {
  // Calculate MITRE tactic counts from rules
  const mitreCounts = useMemo(() => {
    const counts: Record<string, number> = {};

    rules.forEach(rule => {
      rule.mitre.forEach(tactic => {
        counts[tactic] = (counts[tactic] || 0) + 1;
      });
    });

    return counts;
  }, [rules]);

  const getMitreCount = (tactic: string) => mitreCounts[tactic] || 0;

  return (
    <div className="bg-white content-stretch border border-gray-200 flex flex-col gap-[8px] items-start px-[16px] py-[8px] relative rounded-[4px] size-full" data-name="sz-MITRE-coveraage-stat">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[14px] tracking-[1.25px] uppercase w-full">
        <p className="leading-[20px]">MITRE COVERAGE</p>
      </div>
      <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full">
        {/* Column 1 */}
        <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
          <MitreLine
            count={getMitreCount('Credential Access')}
            label="Credential Access"
            onClick={() => onMitreClick('Credential Access')}
            isActive={activeMitre === 'Credential Access'}
          />
          <MitreLine
            count={getMitreCount('Initial Access')}
            label="Initial Access"
            onClick={() => onMitreClick('Initial Access')}
            isActive={activeMitre === 'Initial Access'}
          />
          <MitreLine
            count={getMitreCount('Discovery')}
            label="Discovery"
            onClick={() => onMitreClick('Discovery')}
            isActive={activeMitre === 'Discovery'}
          />
          <MitreLine
            count={getMitreCount('Execution')}
            label="Execution"
            onClick={() => onMitreClick('Execution')}
            isActive={activeMitre === 'Execution'}
          />
        </div>

        {/* Column 2 */}
        <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
          <MitreLine
            count={getMitreCount('Exfiltration')}
            label="Exfiltration"
            onClick={() => onMitreClick('Exfiltration')}
            isActive={activeMitre === 'Exfiltration'}
          />
          <MitreLine
            count={getMitreCount('Persistence')}
            label="Persistence"
            onClick={() => onMitreClick('Persistence')}
            isActive={activeMitre === 'Persistence'}
          />
          <MitreLine
            count={getMitreCount('Defense Evasion')}
            label="Defense Evasion"
            onClick={() => onMitreClick('Defense Evasion')}
            isActive={activeMitre === 'Defense Evasion'}
          />
          <MitreLine
            count={getMitreCount('Command and Control')}
            label="Command & Control"
            onClick={() => onMitreClick('Command and Control')}
            isActive={activeMitre === 'Command and Control'}
          />
        </div>

        {/* Column 3 */}
        <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
          <MitreLine
            count={getMitreCount('Collection')}
            label="Collection"
            onClick={() => onMitreClick('Collection')}
            isActive={activeMitre === 'Collection'}
          />
          <MitreLine
            count={getMitreCount('Privilege Escalation')}
            label="Privilege Escalation"
            onClick={() => onMitreClick('Privilege Escalation')}
            isActive={activeMitre === 'Privilege Escalation'}
          />
          <MitreLine
            count={getMitreCount('Lateral Movement')}
            label="Lateral Movement"
            onClick={() => onMitreClick('Lateral Movement')}
            isActive={activeMitre === 'Lateral Movement'}
          />
        </div>
      </div>
    </div>
  );
}
