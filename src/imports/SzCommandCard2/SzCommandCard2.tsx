function Header() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0" data-name="header">
      <div className="[word-break:break-word] flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[14px] text-center tracking-[1.25px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Alert Rules Score</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full">
      <Header />
    </div>
  );
}

function Frame1({ enabled, total }: { enabled: number; total: number }) {
  const percentage = Math.round((enabled / total) * 100);

  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[0px] text-center whitespace-nowrap">
        <p className="text-[16px]">
          <span className="font-['Lato:Bold',sans-serif] leading-[normal]">{` ${enabled} `}</span>
          <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-[#6b828c]">/ {total}</span>
        </p>
      </div>
      <div className="relative shrink-0 size-[16px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #FFEF0A)" id="Ellipse 19" r="8" />
        </svg>
      </div>
    </div>
  );
}

function InfoActions({
  updateCount,
  enableCount,
  disableCount,
  onUpdateClick,
  onEnableClick,
  onDisableClick,
  activeFilter
}: {
  updateCount: number;
  enableCount: number;
  disableCount: number;
  onUpdateClick?: () => void;
  onEnableClick?: () => void;
  onDisableClick?: () => void;
  activeFilter?: 'update' | 'enable' | 'disable' | null;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0 w-[216px]" data-name="info_actions">
      <button
        onClick={onUpdateClick}
        className={`bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] h-[32px] relative rounded-[4px] shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer ${
          activeFilter === 'update' ? 'ring-2 ring-[#2A96A8]' : ''
        }`}
        data-name="v-btn"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[0px] text-center whitespace-nowrap">
              <p className="text-[12px]">
                <span className="font-['Lato:Bold',sans-serif] leading-[20px] text-[#092e3f] uppercase">{`Update `}</span>
                <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-[#092e3f]">{updateCount}</span>
                <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-white">{` `}</span>
                <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-[#76ba3b]">(+10%)</span>
              </p>
            </div>
          </div>
        </div>
      </button>
      <button
        onClick={onEnableClick}
        className={`bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] h-[32px] relative rounded-[4px] shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer ${
          activeFilter === 'enable' ? 'ring-2 ring-[#2A96A8]' : ''
        }`}
        data-name="v-btn"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[0px] text-center whitespace-nowrap">
              <p className="text-[12px]">
                <span className="font-['Lato:Bold',sans-serif] leading-[20px] text-[#092e3f] uppercase">{`Enable `}</span>
                <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-[#092e3f]">{enableCount}</span>
                <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-white">{` `}</span>
                <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-[#76ba3b]">(+4%)</span>
              </p>
            </div>
          </div>
        </div>
      </button>
      <button
        onClick={onDisableClick}
        className={`bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.25)] h-[32px] relative rounded-[4px] shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer ${
          activeFilter === 'disable' ? 'ring-2 ring-[#2A96A8]' : ''
        }`}
        data-name="v-btn"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[0px] text-center whitespace-nowrap">
              <p className="text-[12px]">
                <span className="font-['Lato:Bold',sans-serif] leading-[20px] text-[#092e3f] uppercase">{`Disable `}</span>
                <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-[#092e3f]">{disableCount} </span>
                <span className="font-['Lato:Regular',sans-serif] leading-[normal] text-[#76ba3b]">(+7%)</span>
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Frame2({
  updateCount,
  enableCount,
  disableCount,
  onUpdateClick,
  onEnableClick,
  onDisableClick,
  activeFilter
}: {
  updateCount: number;
  enableCount: number;
  disableCount: number;
  onUpdateClick?: () => void;
  onEnableClick?: () => void;
  onDisableClick?: () => void;
  activeFilter?: 'update' | 'enable' | 'disable' | null;
}) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <InfoActions
        updateCount={updateCount}
        enableCount={enableCount}
        disableCount={disableCount}
        onUpdateClick={onUpdateClick}
        onEnableClick={onEnableClick}
        onDisableClick={onDisableClick}
        activeFilter={activeFilter}
      />
    </div>
  );
}

interface SzCommandCardProps {
  enabled: number;
  total: number;
  updateCount: number;
  enableCount: number;
  disableCount: number;
  onUpdateClick?: () => void;
  onEnableClick?: () => void;
  onDisableClick?: () => void;
  activeFilter?: 'update' | 'enable' | 'disable' | null;
}

export default function SzCommandCard({
  enabled,
  total,
  updateCount,
  enableCount,
  disableCount,
  onUpdateClick,
  onEnableClick,
  onDisableClick,
  activeFilter
}: SzCommandCardProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[4px] border border-gray-200 size-full" data-name="sz-command-card-2">
      <Frame />
      <Frame1 enabled={enabled} total={total} />
      <Frame2
        updateCount={updateCount}
        enableCount={enableCount}
        disableCount={disableCount}
        onUpdateClick={onUpdateClick}
        onEnableClick={onEnableClick}
        onDisableClick={onDisableClick}
        activeFilter={activeFilter}
      />
    </div>
  );
}