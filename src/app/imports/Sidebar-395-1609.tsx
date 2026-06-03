import svgPaths from "./svg-ggdxsin4lo";

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[27px] left-0 not-italic text-[18px] text-white top-0 whitespace-nowrap">Alert Rule</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[33.583px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.8px] left-0 not-italic text-[#e5f2f4] text-[12px] top-[-0.33px] w-[369px]">User login from different countries within 3 hours(Uses Authentication Normalization)</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[68.583px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pr-[16px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#092e3f] h-[108.583px] relative shrink-0 w-[520px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[20px] px-[24px] relative size-full">
        <Container1 />
        <Button />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[144.74px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Bold',sans-serif] leading-[0] left-0 not-italic text-[#092e3f] text-[0px] text-[14px] top-0 whitespace-nowrap">
          <span className="leading-[21px]">29</span>
          <span className="font-['Lato:Regular',sans-serif] leading-[21px]">{` of `}</span>
          <span className="leading-[21px]">60</span>
          <span className="font-['Lato:Regular',sans-serif] leading-[21px]">{` clients enabled`}</span>
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return <div className="shrink-0 size-0" data-name="Container" />;
}

function Container4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Text />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#e5f2f4] content-stretch flex flex-col h-[45px] items-start left-0 pb-[0.667px] pt-[12px] px-[24px] top-[0.42px] w-[520px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(107,130,140,0.2)] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Lato:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#092e3f] text-[14px] top-0 whitespace-nowrap">Apply to All Clients</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[15.396px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Lato:Regular',sans-serif] leading-[15.4px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.33px] whitespace-nowrap">Enable or disable across all 60 clients</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40.396px] items-start left-0 top-0 w-[392.667px]" data-name="Container">
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Container10() {
  return <div className="bg-white h-[20px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container9() {
  return (
    <div className="bg-[#e5f2f4] h-[24px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[26px] pt-[2px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[24px] items-start left-[408.67px] top-[4px] w-[48px]" data-name="Button">
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[40.396px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Button1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[73.063px] items-start left-0 pb-[0.667px] pt-[16px] px-[24px] top-[45.67px] w-[504.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #092E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #092E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #092E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #092E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#092e3f] text-[14px] top-0 whitespace-nowrap">Quick Presets</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[111.146px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon1 />
        <Heading2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M2.91667 7H11.0833" id="Vector" stroke="var(--stroke-0, #092E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 2.91667V11.0833" id="Vector_2" stroke="var(--stroke-0, #092E3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[18px] left-[18px] not-italic text-[#092e3f] text-[12px] text-center top-[-0.67px] whitespace-nowrap">Create</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[54.198px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon2 />
        <Text1 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Button2 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[72.208px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[18px] left-[36px] not-italic text-[#092e3f] text-[12px] text-center top-[-0.67px] whitespace-nowrap">{`John's Clients`}</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[15px] opacity-70 relative shrink-0 w-[11.802px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[15px] left-[6px] not-italic text-[#092e3f] text-[10px] text-center top-[0.33px] whitespace-nowrap">(4)</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#e5f2f4] content-stretch flex gap-[6px] h-[30px] items-center left-0 pl-[12px] rounded-[4px] top-0 w-[114.01px]" data-name="Button">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[82.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[18px] left-[41px] not-italic text-[#092e3f] text-[12px] text-center top-[-0.67px] whitespace-nowrap">Top Tier Clients</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] opacity-70 relative shrink-0 w-[11.802px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[15px] left-[6px] not-italic text-[#092e3f] text-[10px] text-center top-[0.33px] whitespace-nowrap">(5)</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#e5f2f4] content-stretch flex gap-[6px] h-[30px] items-center left-[122.01px] pl-[12px] rounded-[4px] top-0 w-[123.844px]" data-name="Button">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[95.208px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[18px] left-[48px] not-italic text-[#092e3f] text-[12px] text-center top-[-0.67px] whitespace-nowrap">New Onboardings</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15px] opacity-70 relative shrink-0 w-[11.802px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[15px] left-[6px] not-italic text-[#092e3f] text-[10px] text-center top-[0.33px] whitespace-nowrap">(6)</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#e5f2f4] content-stretch flex gap-[6px] h-[30px] items-center left-[253.85px] pl-[12px] rounded-[4px] top-0 w-[137.01px]" data-name="Button">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[95.667px] items-start left-0 pb-[0.667px] pt-[16px] px-[24px] top-[118.73px] w-[504.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container12 />
      <Container14 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[87.438px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Bold',sans-serif] leading-[21px] left-0 not-italic text-[#092e3f] text-[14px] top-0 whitespace-nowrap">Filter by Level</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_395_1619)" id="Icon">
          <path d={svgPaths.p216a6c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_395_1619">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-[37.5px] not-italic text-[11px] text-center text-white top-[-0.67px] whitespace-nowrap">Enable Filtered</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#4caf50] h-[24.5px] relative rounded-[4px] shrink-0 w-[109.01px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center px-[10px] relative size-full">
        <Icon3 />
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-[38px] not-italic text-[11px] text-center text-white top-[-0.67px] whitespace-nowrap">Disable Filtered</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#6b828c] h-[24.5px] relative rounded-[4px] shrink-0 w-[96.375px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-[213.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading3 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Lato:Bold',sans-serif] leading-[18px] left-[42.41px] not-italic text-[12px] text-center text-white top-[-0.67px] whitespace-nowrap">Level 1</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[15px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[15px] left-[42.48px] not-italic text-[10px] text-center text-white top-[0.33px] whitespace-nowrap">14 clients</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#092e3f] flex-[1_0_0] h-[51px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[12px] relative size-full">
        <Container19 />
        <Container20 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Lato:Bold',sans-serif] leading-[18px] left-[42.41px] not-italic text-[12px] text-center text-white top-[-0.67px] whitespace-nowrap">Level 2</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[15px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[15px] left-[42.48px] not-italic text-[10px] text-center text-white top-[0.33px] whitespace-nowrap">18 clients</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#092e3f] flex-[1_0_0] h-[51px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[12px] relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Lato:Bold',sans-serif] leading-[18px] left-[42.41px] not-italic text-[12px] text-center text-white top-[-0.67px] whitespace-nowrap">Level 3</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[15px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[15px] left-[42.48px] not-italic text-[10px] text-center text-white top-[0.33px] whitespace-nowrap">16 clients</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#092e3f] flex-[1_0_0] h-[51px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[12px] relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Lato:Bold',sans-serif] leading-[18px] left-[42.41px] not-italic text-[12px] text-center text-white top-[-0.67px] whitespace-nowrap">Level 4</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[15px] opacity-70 relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[15px] left-[42.48px] not-italic text-[10px] text-center text-white top-[0.33px] whitespace-nowrap">12 clients</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#092e3f] flex-[1_0_0] h-[51px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pt-[8px] px-[12px] relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[51px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-start relative size-full">
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[120.167px] items-start left-0 pb-[0.667px] pt-[16px] px-[24px] top-[214.4px] w-[504.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-b-[0.667px] border-solid inset-0 pointer-events-none" />
      <Container16 />
      <Container18 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[101.323px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Bold',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Individual Clients</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[119.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">Showing 60 • 29 enabled</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Heading4 />
          <Text10 />
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#092e3f] flex-[1_0_0] h-[28.5px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-[74.3px] not-italic text-[11px] text-center text-white top-[5.33px] whitespace-nowrap">All (60)</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#e5f2f4] flex-[1_0_0] h-[28.5px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-[74.39px] not-italic text-[#6b828c] text-[11px] text-center top-[5.33px] whitespace-nowrap">Enabled (29)</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#e5f2f4] flex-[1_0_0] h-[28.5px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-[74.2px] not-italic text-[#6b828c] text-[11px] text-center top-[5.33px] whitespace-nowrap">Disabled (31)</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex gap-[6px] items-start relative size-full">
        <Button12 />
        <Button13 />
        <Button14 />
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f6f6f6] h-[35.333px] left-0 rounded-[4px] top-0 w-[456.667px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[36px] pr-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Lato:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#979394] text-[12px] whitespace-nowrap">Search clients...</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[9.67px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #6B828C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #6B828C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[35.333px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon4 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 01 - TechStart</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7.2%</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text13 />
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">72</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text15 />
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
      <Text17 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container39() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container38() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container39 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container38 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container33 />
      <Button15 />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 02 - Global Industries</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">2.6%</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">86</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text22 />
        <Text23 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
      <Text24 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container47() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container46() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container46 />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container41 />
      <Button16 />
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 03 - SecureNet</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text25 />
      <Text26 />
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4.1%</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text27 />
        <Text28 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">84</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text29 />
        <Text30 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container52 />
      <Container53 />
      <Text31 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container55() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container54() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container54 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container49 />
      <Button17 />
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 04 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">2.1%</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text34 />
        <Text35 />
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">94</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text36 />
        <Text37 />
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
      <Text38 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container63() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container62() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container63 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container62 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container57 />
      <Button18 />
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 05 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text39 />
      <Text40 />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">2.3%</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text41 />
        <Text42 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">93</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text43 />
        <Text44 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
      <Text45 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container71() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container70() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container70 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container65 />
      <Button19 />
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 06 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text46 />
      <Text47 />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7.3%</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text48 />
        <Text49 />
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">79</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text50 />
        <Text51 />
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
      <Text52 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container79() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container78() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container79 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container78 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container73 />
      <Button20 />
    </div>
  );
}

function Text53() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 07 - TechStart</p>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text53 />
      <Text54 />
    </div>
  );
}

function Text55() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4.2%</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text55 />
        <Text56 />
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">82</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text57 />
        <Text58 />
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Container85 />
      <Text59 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Container87() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container86() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container87 />
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container86 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container81 />
      <Button21 />
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 08 - Global Industries</p>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text60 />
      <Text61 />
    </div>
  );
}

function Text62() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[15.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7%</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text62 />
        <Text63 />
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">71</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text64 />
        <Text65 />
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container92 />
      <Container93 />
      <Text66 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container95() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container94() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container95 />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container94 />
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container89 />
      <Button22 />
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 09 - SecureNet</p>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text67 />
      <Text68 />
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5.8%</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text69 />
        <Text70 />
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">75</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text71 />
        <Text72 />
      </div>
    </div>
  );
}

function Text73() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container100 />
      <Container101 />
      <Text73 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container98 />
      <Container99 />
    </div>
  );
}

function Container103() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container102() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container103 />
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container102 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container97 />
      <Button23 />
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 10 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text74 />
      <Text75 />
    </div>
  );
}

function Text76() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5.5%</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text76 />
        <Text77 />
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text79() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">79</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text78 />
        <Text79 />
      </div>
    </div>
  );
}

function Text80() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Container109 />
      <Text80 />
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Container111() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container110() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container111 />
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container110 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container105 />
      <Button24 />
    </div>
  );
}

function Text81() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 11 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text81 />
      <Text82 />
    </div>
  );
}

function Text83() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">1.3%</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text83 />
        <Text84 />
      </div>
    </div>
  );
}

function Text85() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">99</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text85 />
        <Text86 />
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container117 />
      <Text87 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container114 />
      <Container115 />
    </div>
  );
}

function Container119() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container118() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container119 />
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container118 />
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container113 />
      <Button25 />
    </div>
  );
}

function Text88() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 12 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text89() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text88 />
      <Text89 />
    </div>
  );
}

function Text90() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text91() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7.8%</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text90 />
        <Text91 />
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text93() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">74</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text92 />
        <Text93 />
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container124 />
      <Container125 />
      <Text94 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container127() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container126() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container127 />
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container126 />
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container121 />
      <Button26 />
    </div>
  );
}

function Text95() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 13 - TechStart</p>
      </div>
    </div>
  );
}

function Text96() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text95 />
      <Text96 />
    </div>
  );
}

function Text97() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text98() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">6.2%</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text97 />
        <Text98 />
      </div>
    </div>
  );
}

function Text99() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text100() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">77</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text99 />
        <Text100 />
      </div>
    </div>
  );
}

function Text101() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container132 />
      <Container133 />
      <Text101 />
    </div>
  );
}

function Container129() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container130 />
      <Container131 />
    </div>
  );
}

function Container135() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container134() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container135 />
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container134 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container129 />
      <Button27 />
    </div>
  );
}

function Text102() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 14 - Global Industries</p>
      </div>
    </div>
  );
}

function Text103() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text102 />
      <Text103 />
    </div>
  );
}

function Text104() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text105() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4.8%</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text104 />
        <Text105 />
      </div>
    </div>
  );
}

function Text106() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text107() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">80</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text106 />
        <Text107 />
      </div>
    </div>
  );
}

function Text108() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container140 />
      <Container141 />
      <Text108 />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container138 />
      <Container139 />
    </div>
  );
}

function Container143() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container142() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container143 />
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container142 />
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container137 />
      <Button28 />
    </div>
  );
}

function Text109() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 15 - SecureNet</p>
      </div>
    </div>
  );
}

function Text110() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text109 />
      <Text110 />
    </div>
  );
}

function Text111() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text112() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">3.5%</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text111 />
        <Text112 />
      </div>
    </div>
  );
}

function Text113() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text114() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">88</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text113 />
        <Text114 />
      </div>
    </div>
  );
}

function Text115() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container148 />
      <Container149 />
      <Text115 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container146 />
      <Container147 />
    </div>
  );
}

function Container151() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container150() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container151 />
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container150 />
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container145 />
      <Button29 />
    </div>
  );
}

function Text116() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 16 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text117() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text116 />
      <Text117 />
    </div>
  );
}

function Text118() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text119() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8.1%</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text118 />
        <Text119 />
      </div>
    </div>
  );
}

function Text120() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text121() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">70</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text120 />
        <Text121 />
      </div>
    </div>
  );
}

function Text122() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container156 />
      <Container157 />
      <Text122 />
    </div>
  );
}

function Container153() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container154 />
      <Container155 />
    </div>
  );
}

function Container159() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container158() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container159 />
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container158 />
    </div>
  );
}

function Container152() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container153 />
      <Button30 />
    </div>
  );
}

function Text123() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 17 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text124() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text123 />
      <Text124 />
    </div>
  );
}

function Text125() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text126() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4.9%</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text125 />
        <Text126 />
      </div>
    </div>
  );
}

function Text127() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text128() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">87</p>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text127 />
        <Text128 />
      </div>
    </div>
  );
}

function Text129() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container164 />
      <Container165 />
      <Text129 />
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container162 />
      <Container163 />
    </div>
  );
}

function Container167() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container166() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container167 />
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container166 />
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container161 />
      <Button31 />
    </div>
  );
}

function Text130() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 18 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text131() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text130 />
      <Text131 />
    </div>
  );
}

function Text132() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text133() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8.9%</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text132 />
        <Text133 />
      </div>
    </div>
  );
}

function Text134() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text135() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">70</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text134 />
        <Text135 />
      </div>
    </div>
  );
}

function Text136() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container172 />
      <Container173 />
      <Text136 />
    </div>
  );
}

function Container169() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container170 />
      <Container171 />
    </div>
  );
}

function Container175() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container174() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container175 />
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container174 />
    </div>
  );
}

function Container168() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container169 />
      <Button32 />
    </div>
  );
}

function Text137() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 19 - TechStart</p>
      </div>
    </div>
  );
}

function Text138() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text137 />
      <Text138 />
    </div>
  );
}

function Text139() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text140() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">2.4%</p>
      </div>
    </div>
  );
}

function Container180() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text139 />
        <Text140 />
      </div>
    </div>
  );
}

function Text141() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text142() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">91</p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text141 />
        <Text142 />
      </div>
    </div>
  );
}

function Text143() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container180 />
      <Container181 />
      <Text143 />
    </div>
  );
}

function Container177() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container178 />
      <Container179 />
    </div>
  );
}

function Container183() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container182() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container183 />
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container182 />
    </div>
  );
}

function Container176() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container177 />
      <Button33 />
    </div>
  );
}

function Text144() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 20 - Global Industries</p>
      </div>
    </div>
  );
}

function Text145() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text144 />
      <Text145 />
    </div>
  );
}

function Text146() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text147() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8.4%</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text146 />
        <Text147 />
      </div>
    </div>
  );
}

function Text148() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text149() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">75</p>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text148 />
        <Text149 />
      </div>
    </div>
  );
}

function Text150() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container188 />
      <Container189 />
      <Text150 />
    </div>
  );
}

function Container185() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container186 />
      <Container187 />
    </div>
  );
}

function Container191() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container190() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container191 />
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container190 />
    </div>
  );
}

function Container184() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container185 />
      <Button34 />
    </div>
  );
}

function Text151() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 21 - SecureNet</p>
      </div>
    </div>
  );
}

function Text152() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text151 />
      <Text152 />
    </div>
  );
}

function Text153() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text154() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7.7%</p>
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text153 />
        <Text154 />
      </div>
    </div>
  );
}

function Text155() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text156() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">78</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text155 />
        <Text156 />
      </div>
    </div>
  );
}

function Text157() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container196 />
      <Container197 />
      <Text157 />
    </div>
  );
}

function Container193() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container194 />
      <Container195 />
    </div>
  );
}

function Container199() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container198() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container199 />
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container198 />
    </div>
  );
}

function Container192() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container193 />
      <Button35 />
    </div>
  );
}

function Text158() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 22 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text159() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text158 />
      <Text159 />
    </div>
  );
}

function Text160() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text161() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">2.8%</p>
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text160 />
        <Text161 />
      </div>
    </div>
  );
}

function Text162() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text163() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">86</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text162 />
        <Text163 />
      </div>
    </div>
  );
}

function Text164() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container203() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container204 />
      <Container205 />
      <Text164 />
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container202 />
      <Container203 />
    </div>
  );
}

function Container207() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container206() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container207 />
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container206 />
    </div>
  );
}

function Container200() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container201 />
      <Button36 />
    </div>
  );
}

function Text165() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 23 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text166() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text165 />
      <Text166 />
    </div>
  );
}

function Text167() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text168() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7.3%</p>
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text167 />
        <Text168 />
      </div>
    </div>
  );
}

function Text169() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text170() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">71</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text169 />
        <Text170 />
      </div>
    </div>
  );
}

function Text171() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container212 />
      <Container213 />
      <Text171 />
    </div>
  );
}

function Container209() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container210 />
      <Container211 />
    </div>
  );
}

function Container215() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container214() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container215 />
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container214 />
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container209 />
      <Button37 />
    </div>
  );
}

function Text172() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 24 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text173() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text172 />
      <Text173 />
    </div>
  );
}

function Text174() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text175() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">2.1%</p>
      </div>
    </div>
  );
}

function Container220() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text174 />
        <Text175 />
      </div>
    </div>
  );
}

function Text176() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text177() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">92</p>
      </div>
    </div>
  );
}

function Container221() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text176 />
        <Text177 />
      </div>
    </div>
  );
}

function Text178() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container219() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container220 />
      <Container221 />
      <Text178 />
    </div>
  );
}

function Container217() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container218 />
      <Container219 />
    </div>
  );
}

function Container223() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container222() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container223 />
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container222 />
    </div>
  );
}

function Container216() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container217 />
      <Button38 />
    </div>
  );
}

function Text179() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 25 - TechStart</p>
      </div>
    </div>
  );
}

function Text180() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container226() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text179 />
      <Text180 />
    </div>
  );
}

function Text181() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text182() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4.2%</p>
      </div>
    </div>
  );
}

function Container228() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text181 />
        <Text182 />
      </div>
    </div>
  );
}

function Text183() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text184() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">85</p>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text183 />
        <Text184 />
      </div>
    </div>
  );
}

function Text185() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container227() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container228 />
      <Container229 />
      <Text185 />
    </div>
  );
}

function Container225() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container226 />
      <Container227 />
    </div>
  );
}

function Container231() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container230() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container231 />
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container230 />
    </div>
  );
}

function Container224() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container225 />
      <Button39 />
    </div>
  );
}

function Text186() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 26 - Global Industries</p>
      </div>
    </div>
  );
}

function Text187() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container234() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text186 />
      <Text187 />
    </div>
  );
}

function Text188() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text189() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">6.9%</p>
      </div>
    </div>
  );
}

function Container236() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text188 />
        <Text189 />
      </div>
    </div>
  );
}

function Text190() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text191() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">75</p>
      </div>
    </div>
  );
}

function Container237() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text190 />
        <Text191 />
      </div>
    </div>
  );
}

function Text192() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container235() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container236 />
      <Container237 />
      <Text192 />
    </div>
  );
}

function Container233() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container234 />
      <Container235 />
    </div>
  );
}

function Container239() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container238() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container239 />
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container238 />
    </div>
  );
}

function Container232() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container233 />
      <Button40 />
    </div>
  );
}

function Text193() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 27 - SecureNet</p>
      </div>
    </div>
  );
}

function Text194() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container242() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text193 />
      <Text194 />
    </div>
  );
}

function Text195() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text196() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[15.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5%</p>
      </div>
    </div>
  );
}

function Container244() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text195 />
        <Text196 />
      </div>
    </div>
  );
}

function Text197() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text198() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">82</p>
      </div>
    </div>
  );
}

function Container245() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text197 />
        <Text198 />
      </div>
    </div>
  );
}

function Text199() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container243() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container244 />
      <Container245 />
      <Text199 />
    </div>
  );
}

function Container241() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container242 />
      <Container243 />
    </div>
  );
}

function Container247() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container246() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container247 />
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container246 />
    </div>
  );
}

function Container240() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container241 />
      <Button41 />
    </div>
  );
}

function Text200() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 28 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text201() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text200 />
      <Text201 />
    </div>
  );
}

function Text202() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text203() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">3.3%</p>
      </div>
    </div>
  );
}

function Container252() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text202 />
        <Text203 />
      </div>
    </div>
  );
}

function Text204() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text205() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">85</p>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text204 />
        <Text205 />
      </div>
    </div>
  );
}

function Text206() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container251() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container252 />
      <Container253 />
      <Text206 />
    </div>
  );
}

function Container249() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container250 />
      <Container251 />
    </div>
  );
}

function Container255() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container254() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container255 />
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container254 />
    </div>
  );
}

function Container248() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container249 />
      <Button42 />
    </div>
  );
}

function Text207() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 29 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text208() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container258() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text207 />
      <Text208 />
    </div>
  );
}

function Text209() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text210() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5.3%</p>
      </div>
    </div>
  );
}

function Container260() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text209 />
        <Text210 />
      </div>
    </div>
  );
}

function Text211() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text212() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">81</p>
      </div>
    </div>
  );
}

function Container261() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text211 />
        <Text212 />
      </div>
    </div>
  );
}

function Text213() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container260 />
      <Container261 />
      <Text213 />
    </div>
  );
}

function Container257() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container258 />
      <Container259 />
    </div>
  );
}

function Container263() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container262() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container263 />
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container262 />
    </div>
  );
}

function Container256() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container257 />
      <Button43 />
    </div>
  );
}

function Text214() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 30 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text215() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text214 />
      <Text215 />
    </div>
  );
}

function Text216() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text217() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[15.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4%</p>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text216 />
        <Text217 />
      </div>
    </div>
  );
}

function Text218() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text219() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">87</p>
      </div>
    </div>
  );
}

function Container269() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text218 />
        <Text219 />
      </div>
    </div>
  );
}

function Text220() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container268 />
      <Container269 />
      <Text220 />
    </div>
  );
}

function Container265() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container266 />
      <Container267 />
    </div>
  );
}

function Container271() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container270() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container271 />
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container270 />
    </div>
  );
}

function Container264() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container265 />
      <Button44 />
    </div>
  );
}

function Text221() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 31 - TechStart</p>
      </div>
    </div>
  );
}

function Text222() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text221 />
      <Text222 />
    </div>
  );
}

function Text223() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text224() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">1.2%</p>
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text223 />
        <Text224 />
      </div>
    </div>
  );
}

function Text225() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text226() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">96</p>
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text225 />
        <Text226 />
      </div>
    </div>
  );
}

function Text227() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container275() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container276 />
      <Container277 />
      <Text227 />
    </div>
  );
}

function Container273() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container274 />
      <Container275 />
    </div>
  );
}

function Container279() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container278() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container279 />
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container278 />
    </div>
  );
}

function Container272() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container273 />
      <Button45 />
    </div>
  );
}

function Text228() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 32 - Global Industries</p>
      </div>
    </div>
  );
}

function Text229() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container282() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text228 />
      <Text229 />
    </div>
  );
}

function Text230() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text231() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8.3%</p>
      </div>
    </div>
  );
}

function Container284() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text230 />
        <Text231 />
      </div>
    </div>
  );
}

function Text232() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text233() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">72</p>
      </div>
    </div>
  );
}

function Container285() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text232 />
        <Text233 />
      </div>
    </div>
  );
}

function Text234() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container283() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container284 />
      <Container285 />
      <Text234 />
    </div>
  );
}

function Container281() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container282 />
      <Container283 />
    </div>
  );
}

function Container287() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container286() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container287 />
      </div>
    </div>
  );
}

function Button46() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container286 />
    </div>
  );
}

function Container280() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container281 />
      <Button46 />
    </div>
  );
}

function Text235() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 33 - SecureNet</p>
      </div>
    </div>
  );
}

function Text236() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container290() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text235 />
      <Text236 />
    </div>
  );
}

function Text237() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text238() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7.4%</p>
      </div>
    </div>
  );
}

function Container292() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text237 />
        <Text238 />
      </div>
    </div>
  );
}

function Text239() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text240() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">70</p>
      </div>
    </div>
  );
}

function Container293() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text239 />
        <Text240 />
      </div>
    </div>
  );
}

function Text241() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container291() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container292 />
      <Container293 />
      <Text241 />
    </div>
  );
}

function Container289() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container290 />
      <Container291 />
    </div>
  );
}

function Container295() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container294() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container295 />
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container294 />
    </div>
  );
}

function Container288() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container289 />
      <Button47 />
    </div>
  );
}

function Text242() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 34 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text243() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text242 />
      <Text243 />
    </div>
  );
}

function Text244() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text245() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">6.1%</p>
      </div>
    </div>
  );
}

function Container300() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text244 />
        <Text245 />
      </div>
    </div>
  );
}

function Text246() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text247() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">79</p>
      </div>
    </div>
  );
}

function Container301() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text246 />
        <Text247 />
      </div>
    </div>
  );
}

function Text248() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container299() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container300 />
      <Container301 />
      <Text248 />
    </div>
  );
}

function Container297() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container298 />
      <Container299 />
    </div>
  );
}

function Container303() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container302() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container303 />
      </div>
    </div>
  );
}

function Button48() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container302 />
    </div>
  );
}

function Container296() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container297 />
      <Button48 />
    </div>
  );
}

function Text249() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 35 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text250() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container306() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text249 />
      <Text250 />
    </div>
  );
}

function Text251() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text252() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5.6%</p>
      </div>
    </div>
  );
}

function Container308() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text251 />
        <Text252 />
      </div>
    </div>
  );
}

function Text253() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text254() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">81</p>
      </div>
    </div>
  );
}

function Container309() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text253 />
        <Text254 />
      </div>
    </div>
  );
}

function Text255() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container308 />
      <Container309 />
      <Text255 />
    </div>
  );
}

function Container305() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container306 />
      <Container307 />
    </div>
  );
}

function Container311() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container310() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container311 />
      </div>
    </div>
  );
}

function Button49() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container310 />
    </div>
  );
}

function Container304() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container305 />
      <Button49 />
    </div>
  );
}

function Text256() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 36 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text257() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container314() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text256 />
      <Text257 />
    </div>
  );
}

function Text258() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text259() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4.2%</p>
      </div>
    </div>
  );
}

function Container316() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text258 />
        <Text259 />
      </div>
    </div>
  );
}

function Text260() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text261() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">85</p>
      </div>
    </div>
  );
}

function Container317() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text260 />
        <Text261 />
      </div>
    </div>
  );
}

function Text262() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container315() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container316 />
      <Container317 />
      <Text262 />
    </div>
  );
}

function Container313() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container314 />
      <Container315 />
    </div>
  );
}

function Container319() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container318() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container319 />
      </div>
    </div>
  );
}

function Button50() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container318 />
    </div>
  );
}

function Container312() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container313 />
      <Button50 />
    </div>
  );
}

function Text263() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 37 - TechStart</p>
      </div>
    </div>
  );
}

function Text264() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container322() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text263 />
      <Text264 />
    </div>
  );
}

function Text265() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text266() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">1.5%</p>
      </div>
    </div>
  );
}

function Container324() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text265 />
        <Text266 />
      </div>
    </div>
  );
}

function Text267() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text268() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">97</p>
      </div>
    </div>
  );
}

function Container325() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text267 />
        <Text268 />
      </div>
    </div>
  );
}

function Text269() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container323() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container324 />
      <Container325 />
      <Text269 />
    </div>
  );
}

function Container321() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container322 />
      <Container323 />
    </div>
  );
}

function Container327() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container326() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container327 />
      </div>
    </div>
  );
}

function Button51() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container326 />
    </div>
  );
}

function Container320() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container321 />
      <Button51 />
    </div>
  );
}

function Text270() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 38 - Global Industries</p>
      </div>
    </div>
  );
}

function Text271() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container330() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text270 />
      <Text271 />
    </div>
  );
}

function Text272() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text273() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">2.7%</p>
      </div>
    </div>
  );
}

function Container332() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text272 />
        <Text273 />
      </div>
    </div>
  );
}

function Text274() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text275() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">90</p>
      </div>
    </div>
  );
}

function Container333() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text274 />
        <Text275 />
      </div>
    </div>
  );
}

function Text276() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container331() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container332 />
      <Container333 />
      <Text276 />
    </div>
  );
}

function Container329() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container330 />
      <Container331 />
    </div>
  );
}

function Container335() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container334() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container335 />
      </div>
    </div>
  );
}

function Button52() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container334 />
    </div>
  );
}

function Container328() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container329 />
      <Button52 />
    </div>
  );
}

function Text277() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 39 - SecureNet</p>
      </div>
    </div>
  );
}

function Text278() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container338() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text277 />
      <Text278 />
    </div>
  );
}

function Text279() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text280() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[15.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">6%</p>
      </div>
    </div>
  );
}

function Container340() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text279 />
        <Text280 />
      </div>
    </div>
  );
}

function Text281() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text282() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">76</p>
      </div>
    </div>
  );
}

function Container341() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text281 />
        <Text282 />
      </div>
    </div>
  );
}

function Text283() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container339() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container340 />
      <Container341 />
      <Text283 />
    </div>
  );
}

function Container337() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container338 />
      <Container339 />
    </div>
  );
}

function Container343() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container342() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container343 />
      </div>
    </div>
  );
}

function Button53() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container342 />
    </div>
  );
}

function Container336() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container337 />
      <Button53 />
    </div>
  );
}

function Text284() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 40 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text285() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container346() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text284 />
      <Text285 />
    </div>
  );
}

function Text286() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text287() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[15.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7%</p>
      </div>
    </div>
  );
}

function Container348() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text286 />
        <Text287 />
      </div>
    </div>
  );
}

function Text288() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text289() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">75</p>
      </div>
    </div>
  );
}

function Container349() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text288 />
        <Text289 />
      </div>
    </div>
  );
}

function Text290() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container347() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container348 />
      <Container349 />
      <Text290 />
    </div>
  );
}

function Container345() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container346 />
      <Container347 />
    </div>
  );
}

function Container351() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container350() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container351 />
      </div>
    </div>
  );
}

function Button54() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container350 />
    </div>
  );
}

function Container344() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container345 />
      <Button54 />
    </div>
  );
}

function Text291() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 41 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text292() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container354() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text291 />
      <Text292 />
    </div>
  );
}

function Text293() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text294() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8.7%</p>
      </div>
    </div>
  );
}

function Container356() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text293 />
        <Text294 />
      </div>
    </div>
  );
}

function Text295() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text296() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">70</p>
      </div>
    </div>
  );
}

function Container357() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text295 />
        <Text296 />
      </div>
    </div>
  );
}

function Text297() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container355() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container356 />
      <Container357 />
      <Text297 />
    </div>
  );
}

function Container353() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container354 />
      <Container355 />
    </div>
  );
}

function Container359() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container358() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container359 />
      </div>
    </div>
  );
}

function Button55() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container358 />
    </div>
  );
}

function Container352() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container353 />
      <Button55 />
    </div>
  );
}

function Text298() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 42 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text299() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container362() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text298 />
      <Text299 />
    </div>
  );
}

function Text300() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text301() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">6.1%</p>
      </div>
    </div>
  );
}

function Container364() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text300 />
        <Text301 />
      </div>
    </div>
  );
}

function Text302() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text303() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">82</p>
      </div>
    </div>
  );
}

function Container365() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text302 />
        <Text303 />
      </div>
    </div>
  );
}

function Text304() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container363() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container364 />
      <Container365 />
      <Text304 />
    </div>
  );
}

function Container361() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container362 />
      <Container363 />
    </div>
  );
}

function Container367() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container366() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container367 />
      </div>
    </div>
  );
}

function Button56() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container366 />
    </div>
  );
}

function Container360() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container361 />
      <Button56 />
    </div>
  );
}

function Text305() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 43 - TechStart</p>
      </div>
    </div>
  );
}

function Text306() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container370() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text305 />
      <Text306 />
    </div>
  );
}

function Text307() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text308() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">6.1%</p>
      </div>
    </div>
  );
}

function Container372() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text307 />
        <Text308 />
      </div>
    </div>
  );
}

function Text309() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text310() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">74</p>
      </div>
    </div>
  );
}

function Container373() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text309 />
        <Text310 />
      </div>
    </div>
  );
}

function Text311() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container371() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container372 />
      <Container373 />
      <Text311 />
    </div>
  );
}

function Container369() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container370 />
      <Container371 />
    </div>
  );
}

function Container375() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container374() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container375 />
      </div>
    </div>
  );
}

function Button57() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container374 />
    </div>
  );
}

function Container368() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container369 />
      <Button57 />
    </div>
  );
}

function Text312() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 44 - Global Industries</p>
      </div>
    </div>
  );
}

function Text313() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container378() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text312 />
      <Text313 />
    </div>
  );
}

function Text314() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text315() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4.3%</p>
      </div>
    </div>
  );
}

function Container380() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text314 />
        <Text315 />
      </div>
    </div>
  );
}

function Text316() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text317() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">89</p>
      </div>
    </div>
  );
}

function Container381() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text316 />
        <Text317 />
      </div>
    </div>
  );
}

function Text318() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container379() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container380 />
      <Container381 />
      <Text318 />
    </div>
  );
}

function Container377() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container378 />
      <Container379 />
    </div>
  );
}

function Container383() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container382() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container383 />
      </div>
    </div>
  );
}

function Button58() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container382 />
    </div>
  );
}

function Container376() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container377 />
      <Button58 />
    </div>
  );
}

function Text319() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 45 - SecureNet</p>
      </div>
    </div>
  );
}

function Text320() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container386() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text319 />
      <Text320 />
    </div>
  );
}

function Text321() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text322() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">1.4%</p>
      </div>
    </div>
  );
}

function Container388() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text321 />
        <Text322 />
      </div>
    </div>
  );
}

function Text323() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text324() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">99</p>
      </div>
    </div>
  );
}

function Container389() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text323 />
        <Text324 />
      </div>
    </div>
  );
}

function Text325() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container387() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container388 />
      <Container389 />
      <Text325 />
    </div>
  );
}

function Container385() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container386 />
      <Container387 />
    </div>
  );
}

function Container391() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container390() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container391 />
      </div>
    </div>
  );
}

function Button59() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container390 />
    </div>
  );
}

function Container384() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container385 />
      <Button59 />
    </div>
  );
}

function Text326() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 46 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text327() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container394() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text326 />
      <Text327 />
    </div>
  );
}

function Text328() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text329() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">3.6%</p>
      </div>
    </div>
  );
}

function Container396() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text328 />
        <Text329 />
      </div>
    </div>
  );
}

function Text330() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text331() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">84</p>
      </div>
    </div>
  );
}

function Container397() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text330 />
        <Text331 />
      </div>
    </div>
  );
}

function Text332() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container395() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container396 />
      <Container397 />
      <Text332 />
    </div>
  );
}

function Container393() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container394 />
      <Container395 />
    </div>
  );
}

function Container399() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container398() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container399 />
      </div>
    </div>
  );
}

function Button60() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container398 />
    </div>
  );
}

function Container392() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container393 />
      <Button60 />
    </div>
  );
}

function Text333() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 47 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text334() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container402() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text333 />
      <Text334 />
    </div>
  );
}

function Text335() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text336() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">3.5%</p>
      </div>
    </div>
  );
}

function Container404() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text335 />
        <Text336 />
      </div>
    </div>
  );
}

function Text337() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text338() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">90</p>
      </div>
    </div>
  );
}

function Container405() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text337 />
        <Text338 />
      </div>
    </div>
  );
}

function Text339() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container403() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container404 />
      <Container405 />
      <Text339 />
    </div>
  );
}

function Container401() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container402 />
      <Container403 />
    </div>
  );
}

function Container407() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container406() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container407 />
      </div>
    </div>
  );
}

function Button61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container406 />
    </div>
  );
}

function Container400() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container401 />
      <Button61 />
    </div>
  );
}

function Text340() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 48 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text341() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container410() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text340 />
      <Text341 />
    </div>
  );
}

function Text342() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text343() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[15.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8%</p>
      </div>
    </div>
  );
}

function Container412() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text342 />
        <Text343 />
      </div>
    </div>
  );
}

function Text344() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text345() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">70</p>
      </div>
    </div>
  );
}

function Container413() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text344 />
        <Text345 />
      </div>
    </div>
  );
}

function Text346() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container411() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container412 />
      <Container413 />
      <Text346 />
    </div>
  );
}

function Container409() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container410 />
      <Container411 />
    </div>
  );
}

function Container415() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container414() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container415 />
      </div>
    </div>
  );
}

function Button62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container414 />
    </div>
  );
}

function Container408() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container409 />
      <Button62 />
    </div>
  );
}

function Text347() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 49 - TechStart</p>
      </div>
    </div>
  );
}

function Text348() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container418() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text347 />
      <Text348 />
    </div>
  );
}

function Text349() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text350() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">3.6%</p>
      </div>
    </div>
  );
}

function Container420() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text349 />
        <Text350 />
      </div>
    </div>
  );
}

function Text351() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text352() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">88</p>
      </div>
    </div>
  );
}

function Container421() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text351 />
        <Text352 />
      </div>
    </div>
  );
}

function Text353() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container419() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container420 />
      <Container421 />
      <Text353 />
    </div>
  );
}

function Container417() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container418 />
      <Container419 />
    </div>
  );
}

function Container423() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container422() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container423 />
      </div>
    </div>
  );
}

function Button63() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container422 />
    </div>
  );
}

function Container416() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container417 />
      <Button63 />
    </div>
  );
}

function Text354() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 50 - Global Industries</p>
      </div>
    </div>
  );
}

function Text355() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container426() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text354 />
      <Text355 />
    </div>
  );
}

function Text356() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text357() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">3.5%</p>
      </div>
    </div>
  );
}

function Container428() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text356 />
        <Text357 />
      </div>
    </div>
  );
}

function Text358() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text359() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#4caf50] text-[11px] top-[-0.67px] whitespace-nowrap">90</p>
      </div>
    </div>
  );
}

function Container429() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text358 />
        <Text359 />
      </div>
    </div>
  );
}

function Text360() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container427() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container428 />
      <Container429 />
      <Text360 />
    </div>
  );
}

function Container425() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container426 />
      <Container427 />
    </div>
  );
}

function Container431() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container430() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container431 />
      </div>
    </div>
  );
}

function Button64() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container430 />
    </div>
  );
}

function Container424() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container425 />
      <Button64 />
    </div>
  );
}

function Text361() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 51 - SecureNet</p>
      </div>
    </div>
  );
}

function Text362() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container434() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text361 />
      <Text362 />
    </div>
  );
}

function Text363() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text364() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[15.042px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">6%</p>
      </div>
    </div>
  );
}

function Container436() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text363 />
        <Text364 />
      </div>
    </div>
  );
}

function Text365() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text366() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">80</p>
      </div>
    </div>
  );
}

function Container437() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text365 />
        <Text366 />
      </div>
    </div>
  );
}

function Text367() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container435() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container436 />
      <Container437 />
      <Text367 />
    </div>
  );
}

function Container433() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container434 />
      <Container435 />
    </div>
  );
}

function Container439() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container438() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container439 />
      </div>
    </div>
  );
}

function Button65() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container438 />
    </div>
  );
}

function Container432() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container433 />
      <Button65 />
    </div>
  );
}

function Text368() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 52 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text369() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 3</p>
      </div>
    </div>
  );
}

function Container442() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text368 />
      <Text369 />
    </div>
  );
}

function Text370() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text371() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5.2%</p>
      </div>
    </div>
  );
}

function Container444() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text370 />
        <Text371 />
      </div>
    </div>
  );
}

function Text372() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text373() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">78</p>
      </div>
    </div>
  );
}

function Container445() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text372 />
        <Text373 />
      </div>
    </div>
  );
}

function Text374() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container443() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container444 />
      <Container445 />
      <Text374 />
    </div>
  );
}

function Container441() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container442 />
      <Container443 />
    </div>
  );
}

function Container447() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container446() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container447 />
      </div>
    </div>
  );
}

function Button66() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container446 />
    </div>
  );
}

function Container440() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container441 />
      <Button66 />
    </div>
  );
}

function Text375() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 53 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text376() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container450() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text375 />
      <Text376 />
    </div>
  );
}

function Text377() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text378() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">4.2%</p>
      </div>
    </div>
  );
}

function Container452() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text377 />
        <Text378 />
      </div>
    </div>
  );
}

function Text379() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text380() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">85</p>
      </div>
    </div>
  );
}

function Container453() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text379 />
        <Text380 />
      </div>
    </div>
  );
}

function Text381() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container451() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container452 />
      <Container453 />
      <Text381 />
    </div>
  );
}

function Container449() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container450 />
      <Container451 />
    </div>
  );
}

function Container455() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container454() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container455 />
      </div>
    </div>
  );
}

function Button67() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container454 />
    </div>
  );
}

function Container448() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container449 />
      <Button67 />
    </div>
  );
}

function Text382() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 54 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text383() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container458() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text382 />
      <Text383 />
    </div>
  );
}

function Text384() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text385() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8.3%</p>
      </div>
    </div>
  );
}

function Container460() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text384 />
        <Text385 />
      </div>
    </div>
  );
}

function Text386() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text387() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">73</p>
      </div>
    </div>
  );
}

function Container461() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text386 />
        <Text387 />
      </div>
    </div>
  );
}

function Text388() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container459() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container460 />
      <Container461 />
      <Text388 />
    </div>
  );
}

function Container457() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container458 />
      <Container459 />
    </div>
  );
}

function Container463() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container462() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container463 />
      </div>
    </div>
  );
}

function Button68() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container462 />
    </div>
  );
}

function Container456() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container457 />
      <Button68 />
    </div>
  );
}

function Text389() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[116.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 55 - TechStart</p>
      </div>
    </div>
  );
}

function Text390() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 4</p>
      </div>
    </div>
  );
}

function Container466() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text389 />
      <Text390 />
    </div>
  );
}

function Text391() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text392() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8.5%</p>
      </div>
    </div>
  );
}

function Container468() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text391 />
        <Text392 />
      </div>
    </div>
  );
}

function Text393() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text394() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">75</p>
      </div>
    </div>
  );
}

function Container469() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text393 />
        <Text394 />
      </div>
    </div>
  );
}

function Text395() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container467() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container468 />
      <Container469 />
      <Text395 />
    </div>
  );
}

function Container465() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container466 />
      <Container467 />
    </div>
  );
}

function Container471() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container470() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container471 />
      </div>
    </div>
  );
}

function Button69() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container470 />
    </div>
  );
}

function Container464() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container465 />
      <Button69 />
    </div>
  );
}

function Text396() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[158.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 56 - Global Industries</p>
      </div>
    </div>
  );
}

function Text397() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container474() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text396 />
      <Text397 />
    </div>
  );
}

function Text398() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text399() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5.2%</p>
      </div>
    </div>
  );
}

function Container476() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text398 />
        <Text399 />
      </div>
    </div>
  );
}

function Text400() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text401() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">86</p>
      </div>
    </div>
  );
}

function Container477() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text400 />
        <Text401 />
      </div>
    </div>
  );
}

function Text402() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container475() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container476 />
      <Container477 />
      <Text402 />
    </div>
  );
}

function Container473() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container474 />
      <Container475 />
    </div>
  );
}

function Container479() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container478() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container479 />
      </div>
    </div>
  );
}

function Button70() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container478 />
    </div>
  );
}

function Container472() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container473 />
      <Button70 />
    </div>
  );
}

function Text403() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[122.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 57 - SecureNet</p>
      </div>
    </div>
  );
}

function Text404() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container482() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text403 />
      <Text404 />
    </div>
  );
}

function Text405() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text406() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5.4%</p>
      </div>
    </div>
  );
}

function Container484() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text405 />
        <Text406 />
      </div>
    </div>
  );
}

function Text407() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text408() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">83</p>
      </div>
    </div>
  );
}

function Container485() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text407 />
        <Text408 />
      </div>
    </div>
  );
}

function Text409() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[50.833px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Disabled</p>
      </div>
    </div>
  );
}

function Container483() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container484 />
      <Container485 />
      <Text409 />
    </div>
  );
}

function Container481() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container482 />
      <Container483 />
    </div>
  );
}

function Container487() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container486() {
  return (
    <div className="bg-[#e5f2f4] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[2px] pr-[22px] pt-[2px] relative size-full">
        <Container487 />
      </div>
    </div>
  );
}

function Button71() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container486 />
    </div>
  );
}

function Container480() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container481 />
      <Button71 />
    </div>
  );
}

function Text410() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[137.063px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 58 - DataFlow Inc</p>
      </div>
    </div>
  );
}

function Text411() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 1</p>
      </div>
    </div>
  );
}

function Container490() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text410 />
      <Text411 />
    </div>
  );
}

function Text412() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text413() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">5.8%</p>
      </div>
    </div>
  );
}

function Container492() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text412 />
        <Text413 />
      </div>
    </div>
  );
}

function Text414() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text415() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ffa726] text-[11px] top-[-0.67px] whitespace-nowrap">82</p>
      </div>
    </div>
  );
}

function Container493() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text414 />
        <Text415 />
      </div>
    </div>
  );
}

function Text416() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container491() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container492 />
      <Container493 />
      <Text416 />
    </div>
  );
}

function Container489() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container490 />
      <Container491 />
    </div>
  );
}

function Container495() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container494() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container495 />
      </div>
    </div>
  );
}

function Button72() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container494 />
    </div>
  );
}

function Container488() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container489 />
      <Button72 />
    </div>
  );
}

function Text417() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[121.948px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 59 - CloudFirst</p>
      </div>
    </div>
  );
}

function Text418() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container498() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text417 />
      <Text418 />
    </div>
  );
}

function Text419() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text420() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">8.5%</p>
      </div>
    </div>
  );
}

function Container500() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text419 />
        <Text420 />
      </div>
    </div>
  );
}

function Text421() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text422() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">70</p>
      </div>
    </div>
  );
}

function Container501() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text421 />
        <Text422 />
      </div>
    </div>
  );
}

function Text423() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container499() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container500 />
      <Container501 />
      <Text423 />
    </div>
  );
}

function Container497() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container498 />
      <Container499 />
    </div>
  );
}

function Container503() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container502() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container503 />
      </div>
    </div>
  );
}

function Button73() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container502 />
    </div>
  );
}

function Container496() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container497 />
      <Button73 />
    </div>
  );
}

function Text424() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[125.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[19.5px] left-0 not-italic text-[#092e3f] text-[13px] top-0 whitespace-nowrap">Client 60 - Acme Corp</p>
      </div>
    </div>
  );
}

function Text425() {
  return (
    <div className="bg-[#e5f2f4] h-[19px] relative rounded-[22369600px] shrink-0 w-[42.594px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-[6px] not-italic text-[#6b828c] text-[10px] top-[2.33px] whitespace-nowrap">Level 2</p>
      </div>
    </div>
  );
}

function Container506() {
  return (
    <div className="content-stretch flex gap-[8px] h-[19.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Text424 />
      <Text425 />
    </div>
  );
}

function Text426() {
  return (
    <div className="h-[15px] relative shrink-0 w-[36.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">FP Rate:</p>
      </div>
    </div>
  );
}

function Text427() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[23.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">7.6%</p>
      </div>
    </div>
  );
}

function Container508() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.458px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text426 />
        <Text427 />
      </div>
    </div>
  );
}

function Text428() {
  return (
    <div className="h-[15px] relative shrink-0 w-[27.323px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[15px] left-0 not-italic text-[#6b828c] text-[10px] top-[0.33px] whitespace-nowrap">Score:</p>
      </div>
    </div>
  );
}

function Text429() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[12.76px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Medium',sans-serif] leading-[16.5px] left-0 not-italic text-[#ef5350] text-[11px] top-[-0.67px] whitespace-nowrap">74</p>
      </div>
    </div>
  );
}

function Container509() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[44.083px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Text428 />
        <Text429 />
      </div>
    </div>
  );
}

function Text430() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Lato:Regular',sans-serif] leading-[16.5px] left-0 not-italic text-[#6b828c] text-[11px] top-[-0.67px] whitespace-nowrap">• Enabled</p>
      </div>
    </div>
  );
}

function Container507() {
  return (
    <div className="content-stretch flex gap-[12px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container508 />
      <Container509 />
      <Text430 />
    </div>
  );
}

function Container505() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[40px] items-start left-[12px] top-[10px] w-[392.667px]" data-name="Container">
      <Container506 />
      <Container507 />
    </div>
  );
}

function Container511() {
  return <div className="bg-white h-[16px] rounded-[22369600px] shrink-0 w-full" data-name="Container" />;
}

function Container510() {
  return (
    <div className="bg-[#4caf50] h-[20px] relative rounded-[22369600px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pl-[22px] pr-[2px] pt-[2px] relative size-full">
        <Container511 />
      </div>
    </div>
  );
}

function Button74() {
  return (
    <div className="absolute content-stretch flex flex-col h-[20px] items-start left-[404.67px] top-[20px] w-[40px]" data-name="Button">
      <Container510 />
    </div>
  );
}

function Container504() {
  return (
    <div className="h-[60px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <Container505 />
      <Button74 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[3718px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container40 />
      <Container48 />
      <Container56 />
      <Container64 />
      <Container72 />
      <Container80 />
      <Container88 />
      <Container96 />
      <Container104 />
      <Container112 />
      <Container120 />
      <Container128 />
      <Container136 />
      <Container144 />
      <Container152 />
      <Container160 />
      <Container168 />
      <Container176 />
      <Container184 />
      <Container192 />
      <Container200 />
      <Container208 />
      <Container216 />
      <Container224 />
      <Container232 />
      <Container240 />
      <Container248 />
      <Container256 />
      <Container264 />
      <Container272 />
      <Container280 />
      <Container288 />
      <Container296 />
      <Container304 />
      <Container312 />
      <Container320 />
      <Container328 />
      <Container336 />
      <Container344 />
      <Container352 />
      <Container360 />
      <Container368 />
      <Container376 />
      <Container384 />
      <Container392 />
      <Container400 />
      <Container408 />
      <Container416 />
      <Container424 />
      <Container432 />
      <Container440 />
      <Container448 />
      <Container456 />
      <Container464 />
      <Container472 />
      <Container480 />
      <Container488 />
      <Container496 />
      <Container504 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[3869.333px] items-start left-0 pt-[16px] px-[24px] top-[334.56px] w-[504.667px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[520px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container3 />
        <Container6 />
        <Container11 />
        <Container15 />
        <Container27 />
      </div>
    </div>
  );
}

function Button75() {
  return (
    <div className="h-[41px] relative rounded-[4px] shrink-0 w-[81.938px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[21px] left-[41px] not-italic text-[#092e3f] text-[14px] text-center top-[10px] whitespace-nowrap">Cancel</p>
      </div>
    </div>
  );
}

function Button76() {
  return (
    <div className="bg-[#092e3f] h-[41px] relative rounded-[4px] shrink-0 w-[124.146px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[21px] left-[62px] not-italic text-[14px] text-center text-white top-[10px] whitespace-nowrap">Save Changes</p>
      </div>
    </div>
  );
}

function Container512() {
  return (
    <div className="h-[73.667px] relative shrink-0 w-[520px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end pr-[24px] pt-[0.667px] relative size-full">
        <Button75 />
        <Button76 />
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shadow-[-2px_0px_8px_0px_rgba(0,0,0,0.15)] size-full" data-name="sidebar">
      <Container />
      <Container2 />
      <Container512 />
    </div>
  );
}