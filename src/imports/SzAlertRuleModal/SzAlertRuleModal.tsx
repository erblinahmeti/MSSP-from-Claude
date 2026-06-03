import svgPaths from "./svg-r9y0f5199q";
import imgSentinelPng from "./a3774409e98c46ca03515e5bba6f515d1b11173c.png";

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b828c] text-[14px] uppercase whitespace-nowrap">
            <p className="leading-[20px]">Edit Alert RUle</p>
          </div>
          <div className="flex flex-row items-center self-stretch">
            <div className="content-stretch flex h-full items-center justify-center relative shrink-0 w-[12px]" data-name="v-icon">
              <div className="relative shrink-0 size-[13.969px]" data-name="close">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9688 13.9688">
                  <path d={svgPaths.p2c7bb80} fill="var(--fill-0, #6B828C)" id="close" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NameAndDescribtionContainer() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="name_and_describtion_container">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] uppercase w-full">
        <p className="leading-[28px]">AV detections related to Hive Ransomware</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] text-justify w-full">
        <p className="leading-[normal]">{`Identifies whenever a user account has the setting "Password Never Expires" in the user account properties selected. This is indicated in Security event 4738 in the EventData item labeled UserAccountControl with an included value of %%2089. %%2089 resolves to "Don't Expire Password - Enabled".`}</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative">
      <NameAndDescribtionContainer />
      <Frame1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] h-[80px] items-end min-w-px relative">
      <div className="content-stretch flex flex-[1_0_0] items-start min-h-px relative w-full" data-name="sz-calibration-attention-chip">
        <div className="bg-[#f6f6f6] flex-[1_0_0] h-[32px] min-w-px relative rounded-[9999px]" data-name="v-chip">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
              <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-[1_0_0] flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic overflow-hidden relative text-[#6b828c] text-[12px] text-center text-ellipsis whitespace-nowrap">
                <p className="leading-[normal] overflow-hidden text-ellipsis">no attention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="sz-btn">
        <div className="content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0" data-name="v-btn">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
            <div className="h-[4.031px] relative shrink-0 w-[16.031px]" data-name="more_horiz">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0312 4.03125">
                <path d={svgPaths.pe879b00} fill="var(--fill-0, #6B828C)" id="more_horiz" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame10 />
      <div className="flex-[1_0_0] max-w-[200px] min-w-px relative self-stretch" data-name="sz-attention-action-container">
        <div className="flex flex-col items-end max-w-[inherit] overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col gap-[8px] items-end max-w-[inherit] pl-[16px] relative size-full">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b828c] text-[12px] w-full">
              <p className="leading-[normal]">{`Attention & Action`}</p>
            </div>
            <Frame2 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#6b828c] border-l-2 border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[7px]" data-name="v-icon">
        <div className="h-[10px] relative shrink-0 w-[19.5px]" data-name="sentinel.png">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSentinelPng} />
        </div>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[normal] overflow-hidden text-ellipsis">Sentinel</p>
      </div>
    </div>
  );
}

function AlertRuleDataTopContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="alert_rule_data_top_container">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[40px] items-center pl-[8px] relative size-full">
          <div className="[word-break:break-word] content-stretch flex flex-col font-['Lato:Regular',sans-serif] gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="data_for_modal">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0 text-[#6b828c]">
              <p className="leading-[normal]">State</p>
            </div>
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col justify-center relative shrink-0 text-[#092e3f]">
              <p className="leading-[normal]">Enabled</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start pl-[8px] relative shrink-0" data-name="data_for_modal">
            <div aria-hidden="true" className="absolute border-[#6b828c] border-l-2 border-solid inset-0 pointer-events-none" />
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b828c] text-[12px] whitespace-nowrap">
              <p className="leading-[normal]">Version</p>
            </div>
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] whitespace-nowrap">
              <p className="leading-[normal]">1.1.3</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start pl-[8px] relative shrink-0" data-name="data_for_modal">
            <div aria-hidden="true" className="absolute border-[#6b828c] border-l-2 border-solid inset-0 pointer-events-none" />
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b828c] text-[12px] whitespace-nowrap">
              <p className="leading-[normal]">Author</p>
            </div>
            <Frame />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#6b828c] border-l-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function SzTableCells() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="sz-table-cells">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[4px] relative size-full">
          <div className="bg-[#e5f2f4] content-stretch flex h-[32px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0" data-name="v-chip">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-center text-ellipsis whitespace-nowrap">
              <p className="leading-[normal] overflow-hidden text-ellipsis">DeviceInfo</p>
            </div>
          </div>
          <div className="bg-[#e5f2f4] content-stretch flex h-[32px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0" data-name="v-chip">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-center text-ellipsis whitespace-nowrap">
              <p className="leading-[normal] overflow-hidden text-ellipsis">SecurityAlert (MDATP)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="data_for_modal">
        <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b828c] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">Log Sources</p>
        </div>
      </div>
      <SzTableCells />
    </div>
  );
}

function SzTableCells1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="sz-table-cells">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4px] relative size-full">
          <div className="bg-[#e5f2f4] content-stretch flex h-[32px] items-center justify-center px-[16px] relative rounded-[9999px] shrink-0" data-name="v-chip">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#092e3f] text-[12px] text-center text-ellipsis whitespace-nowrap">
              <p className="leading-[normal] overflow-hidden text-ellipsis">Impact</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[8px] relative size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="data_for_modal">
            <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b828c] text-[12px] whitespace-nowrap">
              <p className="leading-[normal]">MITRE Tactics</p>
            </div>
          </div>
          <SzTableCells1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#6b828c] border-l-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AlertRuleDataBotContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="alert_rule_data_bot_container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-start pl-[8px] relative size-full">
          <Frame4 />
          <Frame3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#6b828c] border-l-2 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-[#f6f6f6] flex-[1_0_0] min-h-[80px] min-w-[240px] relative w-full" data-name="Textarea">
      <div className="min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#d6d6d6] text-[12px]">write the first comment here...</p>
          <div className="absolute bottom-[6.02px] right-[5.02px] size-[6.627px]" data-name="Drag">
            <div className="absolute inset-[-5.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33423 7.33422">
                <path d={svgPaths.p6595600} id="Drag" stroke="var(--stroke-0, #D6D6D6)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommenContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px overflow-clip relative w-full" data-name="commen_container">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-full items-start min-w-px relative" data-name="Textarea Field">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Lato:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#092e3f] text-[14px] uppercase w-full">Comment</p>
        <Textarea />
      </div>
    </div>
  );
}

function AlertRuleData() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-center min-w-px relative" data-name="alert_rule_data">
      <Frame11 />
      <AlertRuleDataTopContainer />
      <AlertRuleDataBotContainer />
      <CommenContainer />
    </div>
  );
}

function AlertRuleTableData() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px] self-stretch" data-name="alert_rule_table_data">
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <AlertRuleData />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap">
      <div className="flex flex-col font-['Lato:Black',sans-serif] justify-center relative shrink-0 text-[#092e3f] text-[0px] tracking-[1.25px] uppercase">
        <p className="text-[14px]">
          <span className="[word-break:break-word] font-['Lato:Light',sans-serif] leading-[20px] not-italic uppercase">Overall Value:</span>
          <span className="[word-break:break-word] font-['Lato:Light',sans-serif] leading-[20px] not-italic text-[#76ba3b] uppercase">{` `}</span>
          <span className="leading-[20px] text-[#76ba3b]">HIGH</span>
        </p>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Lato:Regular',sans-serif] justify-center relative shrink-0 text-[#6b828c] text-[12px]">
        <p className="leading-[normal]">Move the marker to adjust overall value</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame14 />
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
        <div className="relative shrink-0 size-[20px]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p11059a80} fill="var(--fill-0, #6B828C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function GainLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[29px]" data-name="Gain Label">
      <div className="content-stretch flex flex-col h-[25px] items-center justify-center relative shrink-0 w-full" data-name="v-icon">
        <div className="relative shrink-0 size-[20px]" data-name="chart-multiple">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pbb6a6c0} fill="var(--fill-0, #092E3F)" id="chart-multiple" />
          </svg>
        </div>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[14px] text-center w-full">
        <p className="leading-[normal]">Gain</p>
      </div>
    </div>
  );
}

function GainScale() {
  return (
    <div className="content-stretch flex gap-[16px] h-full items-center px-[8px] relative shrink-0" data-name="Gain Scale">
      <GainLabel />
      <div className="bg-gradient-to-b from-[#76ba3b] h-full relative rounded-[2px] shrink-0 to-[#092e3f] w-[8px]" />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative w-full" data-name="Top row">
      <div className="bg-[#76ba3b] flex-[1_0_0] h-full min-w-px relative" />
      <div className="bg-[#76ba3b] flex-[1_0_0] h-full min-w-px relative" />
      <div className="bg-[#cfffa6] flex-[1_0_0] h-full min-w-px relative" />
    </div>
  );
}

function MidRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative w-full" data-name="Mid row">
      <div className="bg-[#76ba3b] flex-[1_0_0] h-full min-w-px relative" />
      <div className="bg-[#cfffa6] flex-[1_0_0] h-full min-w-px relative" />
      <div className="bg-[#d6d6d6] flex-[1_0_0] h-full min-w-px relative" />
    </div>
  );
}

function BotRow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative w-full" data-name="Bot row">
      <div className="bg-[#cfffa6] flex-[1_0_0] h-full min-w-px relative" />
      <div className="bg-[#d6d6d6] flex-[1_0_0] h-full min-w-px relative" />
      <div className="bg-[#d6d6d6] flex-[1_0_0] h-full min-w-px relative" />
    </div>
  );
}

function Matrix() {
  return (
    <div className="bg-[#cfffa6] content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-center min-w-px overflow-clip relative rounded-[2px]" data-name="Matrix">
      <TopRow />
      <MidRow />
      <BotRow />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex h-[187px] items-center relative shrink-0 w-[305px]" data-name="top">
      <GainScale />
      <Matrix />
    </div>
  );
}

function Spacer() {
  return <div className="h-[56px] relative shrink-0 w-[61px]" data-name="spacer" />;
}

function CostLabel() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Cost Label">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[25px]" data-name="v-icon">
        <div className="h-[16px] relative shrink-0 w-[22px]" data-name="cash-multiple">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
            <path d={svgPaths.p1ad2f300} fill="var(--fill-0, #092E3F)" id="cash-multiple" />
          </svg>
        </div>
      </div>
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Cost</p>
      </div>
    </div>
  );
}

function CostScale() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Cost scale">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center py-[8px] relative size-full">
          <div className="flex h-[8px] items-center justify-center relative shrink-0 w-full" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqw] rotate-90">
              <div className="bg-gradient-to-b from-[#b73520] h-full relative rounded-[2px] to-[#092e3f] w-[8px]" />
            </div>
          </div>
          <CostLabel />
        </div>
      </div>
    </div>
  );
}

function Bot() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[305px]" data-name="bot">
      <Spacer />
      <CostScale />
    </div>
  );
}

function Textarea1() {
  return (
    <div className="bg-[#f6f6f6] min-h-[80px] min-w-[240px] relative shrink-0 w-full" data-name="Textarea">
      <div className="min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#6b828c] text-[12px]">This query looks for Microsoft Defender EDR detections related to the Hive Ransomware. It looks for signatures originating from this specific ransomware. This should not trigger at all. If this alert is triggered, you should initiate an incident response procedure immediately.</p>
          <div className="absolute bottom-[6.02px] right-[5.02px] size-[6.627px]" data-name="Drag">
            <div className="absolute inset-[-5.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33423 7.33422">
                <path d={svgPaths.p6595600} id="Drag" stroke="var(--stroke-0, #D6D6D6)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#6b828c] border-l-2 border-solid inset-[0_0_0_-1px] pointer-events-none" />
    </div>
  );
}

function CommenContainer1() {
  return (
    <div className="h-[115px] relative shrink-0 w-full" data-name="commen_container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[8px] py-[4px] relative size-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative self-stretch" data-name="Textarea Field">
            <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Lato:Light',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#092e3f] text-[14px] uppercase w-full">Value Explaination</p>
            <Textarea1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0 w-full">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d6d6d6] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[normal]">{`Reset value and explanaiton to default `}</p>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[17.5px] relative w-[16px]" data-name="arrow-u-left-top">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.5">
                <path d={svgPaths.pf90df00} fill="var(--fill-0, #D6D6D6)" id="arrow-u-left-top" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftSection() {
  return (
    <div className="flex-[1_0_0] max-w-[380px] min-w-px relative" data-name="left_section">
      <div className="content-stretch flex flex-col gap-[4px] items-start max-w-[inherit] p-[8px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Value seciton">
          <div className="flex flex-col justify-center size-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] relative size-full">
              <Frame15 />
              <div className="content-stretch flex flex-col items-start justify-center pt-[8px] relative shrink-0" data-name="Matrix">
                <Top />
                <Bot />
              </div>
              <div className="absolute left-[104px] size-[23px] top-[127px]">
                <div className="absolute inset-[-8.7%_-21.74%_-43.48%_-30.43%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
                    <g filter="url(#filter0_d_645_1566)" id="Ellipse 1">
                      <circle cx="18.5" cy="13.5" fill="var(--fill-0, #F6F6F6)" r="11.5" />
                      <circle cx="18.5" cy="13.5" r="11.5" stroke="var(--stroke-0, #092E3F)" strokeWidth="4" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter0_d_645_1566" width="35" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dx="-1" dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_645_1566" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_645_1566" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommenContainer1 />
        <Frame13 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full">
      <AlertRuleTableData />
      <LeftSection />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-center flex flex-wrap gap-y-[10px] items-center justify-center relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[14px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Query</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame5 />
      <div className="content-stretch flex items-start relative shrink-0" data-name="sz-btn">
        <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
            <div className="h-[20px] relative shrink-0 w-[17px]" data-name="copy">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
                <path d={svgPaths.p1c126400} fill="var(--fill-0, #092E3F)" id="copy" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="sz-btn">
        <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="v-btn">
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
            <div className="h-[7.406px] relative shrink-0 w-[12px]" data-name="keyboard_arrow_up">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.40625">
                <path d={svgPaths.p6227100} fill="var(--fill-0, #6B828C)" id="keyboard_arrow_up" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Textarea2() {
  return (
    <div className="bg-[#f6f6f6] h-[203px] min-h-[80px] min-w-[240px] relative shrink-0 w-full" data-name="Textarea">
      <div className="min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start min-h-[inherit] min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex-[1_0_0] font-['Lato:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#6b828c] text-[12px] whitespace-pre-wrap">{`let queryfrequency = 1h;let queryperiod = 1d; AuditLogs | where TimeGenerated > ago(queryfrequency)| where OperationName =~ "Delete user"//extend UserPrincipalName = tostring(TargetResources[0].userPrincipalName)| mv-apply TargetResource = TargetResources on  ( where TargetResource.type == "User" | extend UserPrincipalName = extract(@'([a-f0-9]{32})?(.*)', 2, tostring(TargetResource.userPrincipalName)) )| extend DeletedByUser = tostring(InitiatedBy.user.userPrincipalName), DeletedByIPAddress = tostring(InitiatedBy.user.ipAddress)| extend DeletedByApp = tostring(InitiatedBy.app.displayName)| project Deletion_TimeGenerated = TimeGenerated, UserPrincipalName, DeletedByUser, DeletedByIPAddress, DeletedByApp, Deletion_AdditionalDetails = AdditionalDetails, Deletion_InitiatedBy = InitiatedBy, Deletion_TargetResources = TargetResources | join kind=inner ( AuditLogs | where TimeGenerated > ago(queryperiod) | where OperationName =~ "Add user"       | mv-apply TargetResource = TargetResources on  ( where TargetResource.type == "User" | extend UserPrincipalName = trim(@'"',tostring(TargetResource.userPrincipalName)) ) | project-rename Creation_TimeGenerated = TimeGenerated ) on UserPrincipalName | extend TimeDelta = Deletion_TimeGenerated - Creation_TimeGenerated | where  TimeDelta between (time(0s) .. queryperiod)| extend CreatedByUser = tostring(InitiatedBy.user.userPrincipalName), CreatedByIPAddress = tostring(InitiatedBy.user.ipAddress)| extend CreatedByApp = tostring(InitiatedBy.app.displayName)| project Creation_TimeGenerated, Deletion_TimeGenerated, TimeDelta, UserPrincipalName, DeletedByUser, DeletedByIPAddress, DeletedByApp, CreatedByUser, CreatedByIPAddress, CreatedByApp, Creation_AdditionalDetails = AdditionalDetails, Creation_InitiatedBy = InitiatedBy, Creation_TargetResources = TargetResources, Deletion_AdditionalDetails, Deletion_InitiatedBy, Deletion_TargetResources | extend timestamp = Deletion_TimeGenerated, Name = tostring(split(UserPrincipalName,'@',0)[0]), UPNSuffix = tostring(split(UserPrincipalName,'@',1)[0])`}</p>
          <div className="absolute bottom-[6.02px] right-[5.02px] size-[6.627px]" data-name="Drag">
            <div className="absolute inset-[-5.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.33423 7.33422">
                <path d={svgPaths.p6595600} id="Drag" stroke="var(--stroke-0, #D6D6D6)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#6b828c] border-l-2 border-solid inset-[0_0_0_-1px] pointer-events-none" />
    </div>
  );
}

function QueryContainer() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="query_container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] relative size-full">
          <Frame6 />
          <Textarea2 />
        </div>
      </div>
    </div>
  );
}

function AlertRuleModal() {
  return (
    <div className="bg-white h-[546px] relative shrink-0 w-full" data-name="alert_rule_modal">
      <div className="overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
          <Frame7 />
          <QueryContainer />
        </div>
      </div>
    </div>
  );
}

function OpenInNew24Dp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="open_in_new_24dp 1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_645_1568)" id="open_in_new_24dp 1">
          <g id="Vector" />
          <path d={svgPaths.p13453dc0} fill="var(--fill-0, #092E3F)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_645_1568">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[8px] relative size-full">
          <div className="content-stretch flex items-start relative shrink-0" data-name="sz-btn">
            <div className="bg-white content-stretch flex h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="v-btn">
              <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b828c] text-[12px] whitespace-nowrap">
                <p className="leading-[normal]">Cancel</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="sz-btn">
            <div className="bg-white content-stretch flex gap-[4px] h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="v-btn">
              <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[12px] whitespace-nowrap">
                <p className="leading-[normal]">View in Sentinel</p>
              </div>
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
                <OpenInNew24Dp />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0" data-name="sz-btn">
            <div className="bg-[#092e3f] content-stretch flex h-[32px] items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="v-btn">
              <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
                <p className="leading-[normal]">Save</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SzAlertRuleModal() {
  return (
    <div className="content-stretch flex flex-col items-end overflow-clip relative rounded-[4px] size-full" data-name="sz-alert-rule-modal">
      <Frame9 />
      <AlertRuleModal />
      <Frame8 />
    </div>
  );
}