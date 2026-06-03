import svgPaths from "./svg-mqbixmi911";
import clsx from "clsx";
import imgSentinelPng from "figma:asset/a3774409e98c46ca03515e5bba6f515d1b11173c.png";
import imgOrig1 from "figma:asset/da8b49536731a0deeacc8c8a6cd1a32815de7120.png";

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-white h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f6f6f6] h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SzTableCells3({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <div className="content-stretch flex items-center justify-end px-[16px] py-[8px] relative size-full">{children}</div>
    </Wrapper3>
  );
}
type SzTableCells2Props = {
  text: string;
};

function SzTableCells2({ children, text }: React.PropsWithChildren<SzTableCells2Props>) {
  return (
    <Wrapper4>
      <div className="content-stretch flex items-center pl-[8px] pr-[16px] py-[8px] relative size-full">
        <div className="bg-[#e5f2f4] content-stretch flex h-[32px] items-center justify-center min-w-[72px] px-[16px] py-0 relative rounded-[9999px] shrink-0">
          <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] text-center text-nowrap">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
      </div>
    </Wrapper4>
  );
}

function SzTableCells1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">{children}</div>
    </Wrapper4>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">{children}</div>
    </Wrapper4>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[32px] min-h-px min-w-px relative rounded-[9999px] shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-0 relative size-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper5>
      <g id="v-icon">{children}</g>
    </Wrapper5>
  );
}

function VIcon() {
  return (
    <Wrapper>
      <path d={svgPaths.p1cbf28b0} fill="var(--fill-0, #6B828C)" id="more_horiz" />
    </Wrapper>
  );
}

function VIconImage1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]">
      <div className="relative shrink-0 size-[24px]" data-name="orig 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOrig1} />
      </div>
    </div>
  );
}

function VIconImage() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]">
      <div className="h-[20px] relative shrink-0 w-[39px]" data-name="sentinel.png">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgSentinelPng} />
      </div>
    </div>
  );
}
type VChipTextProps = {
  text: string;
  additionalClassNames?: string;
};

function VChipText({ text, additionalClassNames = "" }: VChipTextProps) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </Wrapper1>
  );
}
type SzTableCellsText3Props = {
  text: string;
};

function SzTableCellsText3({ text }: SzTableCellsText3Props) {
  return (
    <Wrapper2>
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b828c] text-[12px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </Wrapper2>
  );
}
type SzTableCellsText2Props = {
  text: string;
};

function SzTableCellsText2({ text }: SzTableCellsText2Props) {
  return (
    <Wrapper2>
      <div className="-webkit-box basis-0 flex-col font-['Lato:Regular',sans-serif] grow h-full justify-center leading-[0] max-h-[56px] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px]">
        <p className="leading-[normal]">{text}</p>
      </div>
    </Wrapper2>
  );
}
type SzTableCellsText1Props = {
  text: string;
};

function SzTableCellsText1({ text }: SzTableCellsText1Props) {
  return (
    <Wrapper2>
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </Wrapper2>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[16px] py-[8px] relative size-full", additionalClassNames)}>
      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[16px] text-center text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}
type SzTableCellsTextProps = {
  text: string;
};

function SzTableCellsText({ text }: SzTableCellsTextProps) {
  return (
    <Wrapper4>
      <Text text={text} />
    </Wrapper4>
  );
}

function SzTableCells() {
  return (
    <SzTableCells1>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
        <Wrapper5>
          <g clipPath="url(#clip0_1_5156)" id="football-svgrepo-com 1">
            <path d={svgPaths.p1e120980} fill="var(--fill-0, #3DB39E)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p25782900} fill="var(--fill-0, #E4E7E7)" id="Vector_2" />
            </g>
            <path d={svgPaths.p24ab0f00} fill="var(--fill-0, #349886)" id="Vector_3" />
            <path d={svgPaths.p37c31b00} fill="var(--fill-0, #E77944)" id="Vector_4" />
            <path d={svgPaths.p3415f700} fill="var(--fill-0, #CDCFCF)" id="Vector_5" />
            <path d={svgPaths.p316c1c00} fill="var(--fill-0, #EFF1F1)" id="Vector_6" />
            <path d={svgPaths.p6e2a1c0} fill="var(--fill-0, #C5673A)" id="Vector_7" />
            <path d={svgPaths.p32281a20} fill="var(--fill-0, #EFF1F1)" id="Vector_8" />
            <path d={svgPaths.p20678100} fill="var(--fill-0, #CCCDCD)" id="Vector_9" />
          </g>
          <defs>
            <clipPath id="clip0_1_5156">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </Wrapper5>
      </div>
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b828c] text-[12px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">Football FC</p>
      </div>
    </SzTableCells1>
  );
}

function SzTableCells4() {
  return (
    <Wrapper4>
      <div className="content-stretch flex items-center p-[8px] relative size-full">
        <VChipText text="Chip Here" additionalClassNames="bg-[#e5f2f4]" />
      </div>
    </Wrapper4>
  );
}

function SzTableCells5() {
  return (
    <Wrapper4>
      <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
        <VChipText text="Chip Here" additionalClassNames="bg-[#e5f2f4]" />
        <div className="bg-[#e5f2f4] content-stretch flex h-[32px] items-center justify-center px-[16px] py-0 relative rounded-[9999px] shrink-0" data-name="v-chip">
          <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-center text-nowrap">
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">+X</p>
          </div>
        </div>
      </div>
    </Wrapper4>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="bg-white relative shrink-0 w-full" data-name="sz2-table-controls">
        <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end justify-center p-[8px] relative w-full">
            <div className="content-stretch flex h-[42px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="top-right">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[4px] pr-[8px] py-0 relative rounded-[9999px] shrink-0" data-name="v-chip">
                  <Wrapper>
                    <path d={svgPaths.p3d40f200} fill="var(--fill-0, #092E3F)" id="menu" />
                  </Wrapper>
                  <div className="flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[16px] text-center text-nowrap uppercase">
                    <p className="leading-[28px] overflow-ellipsis overflow-hidden">Incidents</p>
                  </div>
                </div>
                <div className="content-stretch flex items-center justify-center min-w-[240px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0" data-name="v-text-field">
                  <div className="flex flex-row items-center self-stretch">
                    <div className="bg-[#f6f6f6] content-stretch flex h-full items-center px-[8px] py-[16px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-[240px]" data-name="v-field">
                      <div aria-hidden="true" className="absolute border-[#092e3f] border-[0px_0px_1px] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
                      <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#979394] text-[12px] text-nowrap">
                        <p className="leading-[normal]">Search</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shadow-[1px_1px_3px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="v-btn date">
                  <Wrapper>
                    <path d={svgPaths.p1302d880} fill="var(--fill-0, #092E3F)" id="date_range" />
                  </Wrapper>
                  <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
                    <p className="leading-[normal]">Last 7 days</p>
                  </div>
                </div>
                <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="v-btn filter">
                  <Wrapper>
                    <path d={svgPaths.p385b5700} fill="var(--fill-0, #092E3F)" id="filter_list" />
                  </Wrapper>
                  <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
                    <p className="leading-[normal]">Filters</p>
                  </div>
                </div>
                <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="v-btn columns">
                  <Wrapper>
                    <path d={svgPaths.p2dd21680} fill="var(--fill-0, #092E3F)" id="view_column" />
                  </Wrapper>
                  <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
                    <p className="leading-[normal]">Columns</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0" data-name="v-btn columns">
                  <Wrapper>
                    <path d={svgPaths.p30f51ef2} fill="var(--fill-0, #092E3F)" id="arrow-u-left-top" />
                  </Wrapper>
                </div>
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0" data-name="v-btn columns">
                  <Wrapper>
                    <path d={svgPaths.p37562980} fill="var(--fill-0, #092E3F)" id="database-refresh" />
                  </Wrapper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Incident table">
        <div className="content-stretch flex flex-col items-start min-w-[160px] relative shrink-0" data-name="Type">
          <SzTableCellsText text="Client" />
          <SzTableCells1>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
              <Wrapper5>
                <g clipPath="url(#clip0_1_5168)" id="hat-german-svgrepo-com 1">
                  <path d={svgPaths.p24ffca00} fill="var(--fill-0, #C36F47)" id="Vector" />
                  <path d={svgPaths.p1c387480} fill="var(--fill-0, #E27F52)" id="Vector_2" />
                  <path d={svgPaths.pc805100} fill="var(--fill-0, #8496B7)" id="Vector_3" />
                  <path d={svgPaths.p2e1f4500} fill="var(--fill-0, #B7A982)" id="Vector_4" />
                  <path d={svgPaths.p25d24ec0} fill="var(--fill-0, #3D3F4D)" id="Vector_5" />
                  <path d={svgPaths.p26afb980} fill="var(--fill-0, #4B4D5E)" id="Vector_6" />
                  <path d={svgPaths.p68e3a00} fill="var(--fill-0, #C36F47)" id="Vector_7" />
                  <path d={svgPaths.p34048a00} fill="var(--fill-0, #E27F52)" id="Vector_8" />
                </g>
                <defs>
                  <clipPath id="clip0_1_5168">
                    <rect fill="white" height="24" width="24" />
                  </clipPath>
                </defs>
              </Wrapper5>
            </div>
            <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b828c] text-[12px] text-nowrap">
              <p className="leading-[normal] overflow-ellipsis overflow-hidden">Das Firma</p>
            </div>
          </SzTableCells1>
          <SzTableCells />
          {[...Array(3).keys()].map((_, i) => (
            <SzTableCells1>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
                <Wrapper5>
                  <g clipPath="url(#clip0_1_5190)" id="alphabet-letter-svgrepo-com 1">
                    <path d={svgPaths.p1c665200} fill="var(--fill-0, #334D5C)" id="Vector" />
                    <path d={svgPaths.p31479400} fill="var(--fill-0, black)" id="Vector_2" opacity="0.1" />
                    <path d={svgPaths.p1867ac80} fill="var(--fill-0, #F6C358)" id="Vector_3" />
                    <path d={svgPaths.p20563e80} fill="var(--fill-0, #FCD462)" id="Vector_4" />
                    <path d={svgPaths.p2b922a00} fill="var(--fill-0, #3EA69B)" id="Vector_5" />
                    <path d={svgPaths.p258d9200} fill="var(--fill-0, #44C4A1)" id="Vector_6" />
                    <path d={svgPaths.p26648100} fill="var(--fill-0, #D15241)" id="Vector_7" />
                    <path d={svgPaths.p28b20400} fill="var(--fill-0, #E56353)" id="Vector_8" />
                    <path d={svgPaths.p2f2c51f0} fill="var(--fill-0, #DC8744)" id="Vector_9" />
                    <g id="Group">
                      <path d={svgPaths.p29394680} fill="var(--fill-0, white)" id="Vector_10" />
                      <path d={svgPaths.p1318d880} fill="var(--fill-0, white)" id="Vector_11" />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1_5190">
                      <rect fill="white" height="24" width="24" />
                    </clipPath>
                  </defs>
                </Wrapper5>
              </div>
              <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b828c] text-[12px] text-nowrap">
                <p className="leading-[normal] overflow-ellipsis overflow-hidden">A-B-Company</p>
              </div>
            </SzTableCells1>
          ))}
          <SzTableCells />
          <SzTableCells />
          <SzTableCells />
          <SzTableCells />
          <SzTableCells />
          <SzTableCells />
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[88px] relative shrink-0 w-[88px]" data-name="Incident">
          <SzTableCellsText text="Incident" />
          <SzTableCells2 text="4152" />
          <SzTableCells2 text="11875" />
          <SzTableCells2 text="2344" />
          <SzTableCells2 text="2345" />
          <SzTableCells2 text="1252" />
          {[...Array(6).keys()].map((_, i) => (
            <SzTableCells2 text="11856" />
          ))}
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[80px] relative shrink-0" data-name="Incident Status">
          <SzTableCellsText text="Status" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="Active" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="New" />
          <SzTableCellsText1 text="New" />
        </div>
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Type">
          <SzTableCellsText text="Type" />
          <Wrapper2>
            <div className="-webkit-box basis-0 flex-col font-['Lato:Regular',sans-serif] grow h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px]">
              <p className="leading-[normal]">Guest Users Invited to Tenant by New Inviters</p>
            </div>
          </Wrapper2>
          <SzTableCellsText2 text="Distributed Password cracking attempts in AzureAD" />
          {[...Array(9).keys()].map((_, i) => (
            <SzTableCellsText2 text="New access credential added to Application or Service Principal" />
          ))}
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[120px] relative shrink-0" data-name="Created at">
          <SzTableCellsText text="Created" />
          <SzTableCellsText3 text="1h 13m ago" />
          <SzTableCellsText3 text="46m ago" />
          {[...Array(3).keys()].map((_, i) => (
            <SzTableCellsText3 text="1h ago" />
          ))}
          {[...Array(6).keys()].map((_, i) => (
            <SzTableCellsText3 text="52m ago" />
          ))}
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[180px] relative shrink-0" data-name="Entites">
          <SzTableCellsText text="Entites" />
          <SzTableCells4 />
          <SzTableCells5 />
          <SzTableCells4 />
          <SzTableCells5 />
          <SzTableCells4 />
          <SzTableCells4 />
          <SzTableCells4 />
          <SzTableCells4 />
          <SzTableCells4 />
          <SzTableCells4 />
          <SzTableCells4 />
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[88px] relative shrink-0 w-[88px]" data-name="Logs">
          <SzTableCellsText text="Logs" />
          <SzTableCellsText3 text="12" />
          <SzTableCellsText3 text="5" />
          <SzTableCellsText3 text="15" />
          <SzTableCellsText3 text="8" />
          <SzTableCellsText3 text="15" />
          <SzTableCellsText3 text="15" />
          <SzTableCellsText3 text="15" />
          <SzTableCellsText3 text="15" />
          <SzTableCellsText3 text="15" />
          <SzTableCellsText3 text="15" />
          <SzTableCellsText3 text="15" />
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[120px] relative shrink-0" data-name="Sentinel Severity">
          <SzTableCellsText text="Sentinel Severity" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Low" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Medium" />
          <SzTableCells2 text="Medium" />
        </div>
        <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Attention">
          <Wrapper3>
            <Text text="Attention" additionalClassNames="justify-end" />
          </Wrapper3>
          {[...Array(2).keys()].map((_, i) => (
            <SzTableCells3>
              <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="sz-calibration-attention-chip">
                <Wrapper1 additionalClassNames="bg-[#b73520]">
                  <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-center text-nowrap text-white">
                    <p className="leading-[normal] overflow-ellipsis overflow-hidden">True Positive Detected</p>
                  </div>
                </Wrapper1>
              </div>
            </SzTableCells3>
          ))}
          {[...Array(2).keys()].map((_, i) => (
            <SzTableCells3>
              <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="sz-calibration-attention-chip">
                <VChipText text="Threat Intel: Medium" additionalClassNames="bg-[#ffdbb4]" />
              </div>
            </SzTableCells3>
          ))}
          <SzTableCells3>
            <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="sz-calibration-attention-chip">
              <VChipText text="Threat Intel: Low" additionalClassNames="bg-[#fff9a8]" />
            </div>
          </SzTableCells3>
          {[...Array(6).keys()].map((_, i) => (
            <SzTableCells3>
              <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="sz-calibration-attention-chip">
                <Wrapper1>
                  <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b828c] text-[12px] text-center text-nowrap">
                    <p className="leading-[normal] overflow-ellipsis overflow-hidden">no attention</p>
                  </div>
                </Wrapper1>
              </div>
            </SzTableCells3>
          ))}
        </div>
        <div className="content-stretch flex flex-col items-start min-w-[120px] relative shrink-0" data-name="Action">
          <Wrapper3>
            <Text text="Action" additionalClassNames="justify-end" />
          </Wrapper3>
          {[...Array(6).keys()].map((_, i) => (
            <div className="bg-[#f6f6f6] h-[48px] relative shrink-0" data-name="sz-table-cells">
              <div className="content-stretch flex gap-[8px] h-full items-center justify-end overflow-clip pl-[8px] pr-[16px] py-[8px] relative rounded-[inherit]">
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="v-btn">
                  <VIconImage />
                </div>
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="v-btn">
                  <VIconImage1 />
                </div>
                <div className="bg-[#f6f6f6] content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0" data-name="v-btn">
                  <VIcon />
                </div>
              </div>
              <div aria-hidden="true" className="absolute border-[#e5f2f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
            </div>
          ))}
          {[...Array(5).keys()].map((_, i) => (
            <Wrapper3>
              <div className="content-stretch flex gap-[8px] items-center justify-end pl-[8px] pr-[16px] py-[8px] relative size-full">
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="v-btn">
                  <VIconImage />
                </div>
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="v-btn">
                  <VIconImage1 />
                </div>
                <div className="bg-[#f6f6f6] content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0" data-name="v-btn">
                  <VIcon />
                </div>
              </div>
            </Wrapper3>
          ))}
        </div>
      </div>
      <div className="h-[288px] shrink-0 w-full" />
    </div>
  );
}