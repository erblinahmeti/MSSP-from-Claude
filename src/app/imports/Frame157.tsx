import svgPaths from "./svg-xtz3er2l5p";
import clsx from "clsx";
import imgSeculyzePng from "figma:asset/f059048282c6434b0ecb2f73ac4a8d51c0755afb.png";
import imgSentinelPng from "figma:asset/a3774409e98c46ca03515e5bba6f515d1b11173c.png";
import imgOrig1 from "figma:asset/da8b49536731a0deeacc8c8a6cd1a32815de7120.png";
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={clsx("bg-white h-[48px] justify-self-stretch relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type SzTableCellsProps = {
  additionalClassNames?: string;
};

function SzTableCells({ children, additionalClassNames = "" }: React.PropsWithChildren<SzTableCellsProps>) {
  return (
    <div className={clsx("bg-white h-[48px] justify-self-stretch relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end pl-[8px] pr-[16px] py-[8px] relative size-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper3>
      <g id="v-icon">{children}</g>
    </Wrapper3>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative size-full">{children}</div>
    </Wrapper4>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper4>
      <div className="content-stretch flex items-center px-[16px] py-[8px] relative size-full">{children}</div>
    </Wrapper4>
  );
}
type SzTableCellsText3Props = {
  text: string;
  additionalClassNames?: string;
};

function SzTableCellsText3({ text, additionalClassNames = "" }: SzTableCellsText3Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b828c] text-[0px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden text-[12px]">
          <span className="font-['Lato:Bold',sans-serif] not-italic text-[#092e3f]">{text}</span>
          <span>{` Incidents`}</span>
        </p>
      </div>
    </Wrapper>
  );
}
type SzTableCellsText2Props = {
  text: string;
  additionalClassNames?: string;
};

function SzTableCellsText2({ text, additionalClassNames = "" }: SzTableCellsText2Props) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <VIconImage />
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </Wrapper1>
  );
}

function VIcon() {
  return (
    <Wrapper2>
      <path d={svgPaths.p1cbf28b0} fill="var(--fill-0, #6B828C)" id="more_horiz" />
    </Wrapper2>
  );
}

function VIconImage2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]">
      <div className="relative shrink-0 size-[24px]" data-name="orig 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOrig1} />
      </div>
    </div>
  );
}

function VIconImage1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]">
      <div className="h-[20px] relative shrink-0 w-[39px]" data-name="sentinel.png">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgSentinelPng} />
      </div>
    </div>
  );
}

function VIconImage() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]">
      <div className="h-[18px] relative shrink-0 w-[34.5px]" data-name="seculyze.png">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgSeculyzePng} />
      </div>
    </div>
  );
}
type SzTableCellsText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SzTableCellsText1({ text, additionalClassNames = "" }: SzTableCellsText1Props) {
  return (
    <Wrapper1 additionalClassNames={additionalClassNames}>
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
      <div className="relative shrink-0 size-[16px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="v-icon">
            <path d={svgPaths.p3aaae300} fill="var(--fill-0, #6B828C)" id="Edit" />
          </g>
        </svg>
      </div>
    </Wrapper1>
  );
}
type SzTableCellsTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SzTableCellsText({ text, additionalClassNames = "" }: SzTableCellsTextProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b828c] text-[12px] text-nowrap text-right">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("content-stretch flex items-center px-[16px] py-[8px] relative size-full", additionalClassNames)}>
      <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#6b828c] text-[12px] text-nowrap">
        <p className="leading-[normal] overflow-ellipsis overflow-hidden">{text}</p>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start justify-center relative size-full">
      <div className="bg-white relative shrink-0 w-full" data-name="sz2-table-controls">
        <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end justify-center p-[8px] relative w-full">
            <div className="content-stretch flex h-[42px] items-center justify-between overflow-clip relative shrink-0 w-full" data-name="top-right">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center pl-[4px] pr-[8px] py-0 relative rounded-[9999px] shrink-0" data-name="v-chip">
                  <Wrapper2>
                    <path d={svgPaths.pab78080} fill="var(--fill-0, #092E3F)" id="Vector" />
                  </Wrapper2>
                  <div className="flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[16px] text-center text-nowrap uppercase">
                    <p className="leading-[28px] overflow-ellipsis overflow-hidden">Clients</p>
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
                <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="v-btn filter">
                  <Wrapper2>
                    <path d={svgPaths.p385b5700} fill="var(--fill-0, #092E3F)" id="filter_list" />
                  </Wrapper2>
                  <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
                    <p className="leading-[normal]">Filters</p>
                  </div>
                </div>
                <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="v-btn columns">
                  <Wrapper2>
                    <path d={svgPaths.p2dd21680} fill="var(--fill-0, #092E3F)" id="view_column" />
                  </Wrapper2>
                  <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
                    <p className="leading-[normal]">Columns</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shadow-[1px_1px_3px_0px_rgba(0,0,0,0.2)] shrink-0" data-name="v-btn columns">
                  <Wrapper2>
                    <path d={svgPaths.p21cef280} fill="var(--fill-0, #092E3F)" id="plus" />
                  </Wrapper2>
                  <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
                    <p className="leading-[normal]">Onboard Client</p>
                  </div>
                </div>
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0" data-name="v-btn columns">
                  <Wrapper2>
                    <path d={svgPaths.p30f51ef2} fill="var(--fill-0, #092E3F)" id="arrow-u-left-top" />
                  </Wrapper2>
                </div>
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0" data-name="v-btn columns">
                  <Wrapper2>
                    <path d={svgPaths.p37562980} fill="var(--fill-0, #092E3F)" id="database-refresh" />
                  </Wrapper2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(5,_minmax(0px,_1fr))] grid-rows-[repeat(13,_minmax(0px,_1fr))] h-[624px] relative shrink-0 w-full">
        <Wrapper4 additionalClassNames="[grid-area:1_/_1]">
          <Text text="Client" additionalClassNames="gap-[8px]" />
        </Wrapper4>
        <Wrapper4 additionalClassNames="[grid-area:1_/_3]">
          <Text text="Contact" />
        </Wrapper4>
        <SzTableCellsText text="Onboarded to Seculyze" additionalClassNames="[grid-area:1_/_4]" />
        <SzTableCellsText text="January 1, 2023" additionalClassNames="[grid-area:2_/_4]" />
        <SzTableCellsText1 text="js@abcompany.com" additionalClassNames="[grid-area:3_/_3]" />
        <SzTableCellsText text="February 14, 2023" additionalClassNames="[grid-area:3_/_4]" />
        <SzTableCellsText1 text="tm@teammoney.com" additionalClassNames="[grid-area:4_/_3]" />
        <SzTableCellsText text="March 15, 2023" additionalClassNames="[grid-area:4_/_4]" />
        <SzTableCellsText1 text="mf@dasfirma.com" additionalClassNames="[grid-area:5_/_3]" />
        <SzTableCellsText text="April 22, 2023" additionalClassNames="[grid-area:5_/_4]" />
        <SzTableCellsText text="Go To" additionalClassNames="[grid-area:1_/_5]" />
        <Wrapper1 additionalClassNames="[grid-area:3_/_1]">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
            <Wrapper3>
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
            </Wrapper3>
          </div>
          <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">A-B-Company</p>
          </div>
        </Wrapper1>
        <Wrapper1 additionalClassNames="[grid-area:2_/_1]">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
            <Wrapper3>
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
            </Wrapper3>
          </div>
          <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Football Unlimited</p>
          </div>
        </Wrapper1>
        <Wrapper1 additionalClassNames="[grid-area:4_/_1]">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
            <Wrapper3>
              <g id="money-svgrepo-com 1">
                <path d={svgPaths.p37195800} fill="var(--fill-0, #464BD8)" id="Vector" />
                <path d={svgPaths.p2b442e00} fill="var(--fill-0, #514DDF)" id="Vector_2" />
                <path d={svgPaths.pfbfe600} fill="var(--fill-0, #151B28)" id="Vector_3" />
                <path d={svgPaths.p26757bf0} fill="var(--fill-0, white)" id="Vector_4" />
                <path d={svgPaths.p11d82600} fill="var(--fill-0, #151B28)" id="Vector_5" />
                <path d={svgPaths.p184c5880} fill="var(--fill-0, white)" id="Vector_6" />
                <path d={svgPaths.p10c18500} fill="var(--fill-0, #151B28)" id="Vector_7" />
                <path d={svgPaths.p15464840} fill="var(--fill-0, white)" id="Vector_8" />
                <path d={svgPaths.p32eff700} fill="var(--fill-0, #151B28)" id="Vector_9" />
                <path d={svgPaths.pe02800} fill="var(--fill-0, white)" id="Vector_10" />
                <path d={svgPaths.p107958f0} fill="var(--fill-0, #151B28)" id="Vector_11" />
                <path d={svgPaths.p3be84800} fill="var(--fill-0, white)" id="Vector_12" />
                <path d={svgPaths.p118c8980} fill="var(--fill-0, #151B28)" id="Vector_13" />
                <path d={svgPaths.p313fa9f0} fill="var(--fill-0, white)" id="Vector_14" />
                <path d={svgPaths.p33b9f700} fill="var(--fill-0, #151B28)" id="Vector_15" />
                <path d={svgPaths.p37064a00} fill="var(--fill-0, #2AEFC8)" id="Vector_16" />
                <path d={svgPaths.p201ac00} fill="var(--fill-0, black)" id="Vector_17" />
              </g>
            </Wrapper3>
          </div>
          <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Team Money</p>
          </div>
        </Wrapper1>
        <Wrapper1 additionalClassNames="[grid-area:5_/_1]">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
            <Wrapper3>
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
            </Wrapper3>
          </div>
          <div className="basis-0 flex flex-col font-['Lato:Regular',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-nowrap">
            <p className="leading-[normal] overflow-ellipsis overflow-hidden">Das Firma</p>
          </div>
        </Wrapper1>
        <SzTableCells additionalClassNames="[grid-area:2_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCellsText2 text="Seculyze Internal" additionalClassNames="[grid-area:6_/_1]" />
        <SzTableCellsText1 text="kb@seculyze.com" additionalClassNames="[grid-area:6_/_3]" />
        <SzTableCellsText text="May 30, 2023" additionalClassNames="[grid-area:6_/_4]" />
        <SzTableCellsText1 text="ks@fotbal.com" additionalClassNames="[grid-area:2_/_3]" />
        <Wrapper4 additionalClassNames="[grid-area:1_/_2]">
          <Text text="Incidents last 30 days" />
        </Wrapper4>
        <SzTableCellsText3 text="43" additionalClassNames="[grid-area:2_/_2]" />
        <SzTableCellsText3 text="113" additionalClassNames="[grid-area:3_/_2]" />
        <SzTableCellsText3 text="87" additionalClassNames="[grid-area:4_/_2]" />
        <SzTableCellsText3 text="39" additionalClassNames="[grid-area:5_/_2]" />
        <SzTableCellsText3 text="51" additionalClassNames="[grid-area:6_/_2]" />
        <SzTableCellsText2 text="Global Network, Inc." additionalClassNames="[grid-area:7_/_1]" />
        <SzTableCellsText3 text="16" additionalClassNames="[grid-area:7_/_2]" />
        <SzTableCellsText1 text="rr@globalnetwork.com" additionalClassNames="[grid-area:7_/_3]" />
        <SzTableCellsText text="June 1, 2023" additionalClassNames="[grid-area:7_/_4]" />
        <SzTableCellsText2 text="Stellar Cyberdyne" additionalClassNames="[grid-area:8_/_1]" />
        <SzTableCellsText3 text="2" additionalClassNames="[grid-area:8_/_2]" />
        <SzTableCellsText1 text="info@stellarcyber.com" additionalClassNames="[grid-area:8_/_3]" />
        <SzTableCellsText text="June 2, 2023" additionalClassNames="[grid-area:8_/_4]" />
        <SzTableCellsText2 text="Zenith Data Systems" additionalClassNames="[grid-area:9_/_1]" />
        <SzTableCellsText3 text="28" additionalClassNames="[grid-area:9_/_2]" />
        <SzTableCellsText1 text="support@zenithdata.com" additionalClassNames="[grid-area:9_/_3]" />
        <SzTableCellsText text="June 3, 2023" additionalClassNames="[grid-area:9_/_4]" />
        <SzTableCellsText2 text="NovaTech Solutions" additionalClassNames="[grid-area:10_/_1]" />
        <SzTableCellsText3 text="7" additionalClassNames="[grid-area:10_/_2]" />
        <SzTableCellsText1 text="sales@novatechsolutions.com" additionalClassNames="[grid-area:10_/_3]" />
        <SzTableCellsText text="June 4, 2023" additionalClassNames="[grid-area:10_/_4]" />
        <SzTableCellsText2 text="Apex Digital Group" additionalClassNames="[grid-area:11_/_1]" />
        <SzTableCellsText3 text="12" additionalClassNames="[grid-area:11_/_2]" />
        <SzTableCellsText1 text="contact@apexdigital.com" additionalClassNames="[grid-area:11_/_3]" />
        <SzTableCellsText text="June 5, 2023" additionalClassNames="[grid-area:11_/_4]" />
        <SzTableCellsText2 text="Quantum Leap Systems" additionalClassNames="[grid-area:12_/_1]" />
        <SzTableCellsText3 text="33" additionalClassNames="[grid-area:12_/_2]" />
        <SzTableCellsText1 text="info@quantumleap.com" additionalClassNames="[grid-area:12_/_3]" />
        <SzTableCellsText text="June 6, 2023" additionalClassNames="[grid-area:12_/_4]" />
        <SzTableCellsText2 text="Binary Matrix Corp" additionalClassNames="[grid-area:13_/_1]" />
        <SzTableCellsText3 text="9" additionalClassNames="[grid-area:13_/_2]" />
        <SzTableCellsText1 text="help@binarymatrix.com" additionalClassNames="[grid-area:13_/_3]" />
        <SzTableCellsText text="June 7, 2023" additionalClassNames="[grid-area:13_/_4]" />
        <SzTableCells additionalClassNames="[grid-area:3_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:4_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:6_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:7_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:8_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:9_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:10_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:11_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:12_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:13_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
        <SzTableCells additionalClassNames="[grid-area:5_/_5]">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage1 />
          </div>
          <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIconImage2 />
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
            <VIcon />
          </div>
        </SzTableCells>
      </div>
    </div>
  );
}