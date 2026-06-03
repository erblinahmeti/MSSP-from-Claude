import svgPaths from "./svg-1sm2ctmcq1";
import clsx from "clsx";
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div className={clsx("h-[20px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(9,46,63,0.5)] top-[0.5px] tracking-[-0.1504px] w-[26px]">{text}</p>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return (
    <Wrapper>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#092e3f] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[31px]">{text}</p>
    </Wrapper>
  );
}

export default function Container() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-px pt-[17px] px-[17px] relative size-full">
          <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
            <Container1 additionalClassNames="h-[40px] w-[134.234px]">
              <div className="bg-gradient-to-b from-[#2a96a8] relative rounded-[14px] shrink-0 size-[40px] to-[#1d7080]" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
                  <div className="relative shrink-0 size-[20px]" data-name="Icon">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_129_99)" id="Icon">
                        <path d={svgPaths.p33f5180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p10c58000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_129_99">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <Wrapper>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#092e3f] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Classification</p>
              </Wrapper>
            </Container1>
            <Container1 additionalClassNames="h-[30px] w-[174.492px]">
              <div className="basis-0 bg-white grow h-[30px] min-h-px min-w-px relative rounded-[14px] shrink-0" data-name="Button">
                <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
                    <div className="basis-0 grow h-[16px] min-h-px min-w-px relative shrink-0" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[28.5px] not-italic text-[#092e3f] text-[12px] text-center text-nowrap top-px translate-x-[-50%]">All Clients</p>
                      </div>
                    </div>
                    <div className="relative shrink-0 size-[12px]" data-name="Icon">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <g id="Icon">
                          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #092E3F)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[16px] relative shrink-0 w-[63.984px]" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(9,46,63,0.4)] text-nowrap top-px">Last 7 days</p>
                </div>
              </div>
            </Container1>
          </div>
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
            <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="PieChart">
              <div className="overflow-clip relative shrink-0 size-[164px]" data-name="Surface">
                <div className="absolute contents inset-0" data-name="Group">
                  <div className="absolute bottom-1/2 left-[3.51%] right-0 top-0" data-name="Group">
                    <div className="absolute inset-[-0.61%_-0.32%_-0.61%_-0.41%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159.391 83.0001">
                        <g id="Group">
                          <path d={svgPaths.p27594600} fill="var(--fill-0, #10B981)" id="Vector" stroke="var(--stroke-0, white)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[33.23%_60.74%_3.51%_0]" data-name="Group">
                    <div className="absolute inset-[-0.62%_-1.01%_-0.63%_-0.78%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.5404 105.036">
                        <g id="Group">
                          <path d={svgPaths.p141cb200} fill="var(--fill-0, #F59E0B)" id="Vector" stroke="var(--stroke-0, white)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[68.43%_11.25%_0_33.23%]" data-name="Group">
                    <div className="absolute inset-[-1.36%_-0.77%_-0.97%_-0.7%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.3947 52.9714">
                        <g id="Group">
                          <path d={svgPaths.p3755a80} fill="var(--fill-0, #94A3B8)" id="Vector" stroke="var(--stroke-0, white)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-[51.02%_0.03%_19.77%_73.23%]" data-name="Group">
                    <div className="absolute inset-[-1.08%_-1.18%_-1.46%_-1.6%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45.0671 49.1255">
                        <g id="Group">
                          <path d={svgPaths.p1da86100} fill="var(--fill-0, #EF4444)" id="Vector" stroke="var(--stroke-0, white)" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col h-[150px] items-start justify-between left-[236.34px] top-[8px] w-[282px]" data-name="Container">
              <div className="content-stretch flex gap-[16px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1 additionalClassNames="h-[20px] w-[130px]">
                  <Wrapper>
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[91px] not-italic text-[#092e3f] text-[14px] text-nowrap text-right top-[0.5px] tracking-[-0.1504px] translate-x-[-100%]">True Positives</p>
                  </Wrapper>
                  <div className="bg-[#10b981] rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Container" />
                </Container1>
                <Container1 additionalClassNames="h-[20px] w-[80.875px]">
                  <div className="h-[20px] shrink-0 w-[6.453px]" data-name="Text" />
                  <Wrapper>
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#092e3f] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[32px]">45%</p>
                  </Wrapper>
                  <div className="h-[20px] relative shrink-0 w-[27.32px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(9,46,63,0.5)] top-[0.5px] tracking-[-0.1504px] w-[28px]">(32)</p>
                    </div>
                  </div>
                </Container1>
              </div>
              <div className="content-stretch flex gap-[16px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1 additionalClassNames="h-[20px] w-[130px]">
                  <Wrapper>
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[74px] not-italic text-[#092e3f] text-[14px] text-nowrap text-right top-[0.5px] tracking-[-0.1504px] translate-x-[-100%]">Threat Intel</p>
                  </Wrapper>
                  <div className="bg-[#f59e0b] rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Container" />
                </Container1>
                <Container1 additionalClassNames="h-[20px] w-[78.508px]">
                  <div className="h-[20px] shrink-0 w-[6.453px]" data-name="Text" />
                  <TextText text="25%" />
                  <TextText1 text="(18)" additionalClassNames="w-[25.531px]" />
                </Container1>
              </div>
              <div className="content-stretch flex gap-[16px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                <Container1 additionalClassNames="h-[20px] w-[130px]">
                  <Wrapper>
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[109px] not-italic text-[#092e3f] text-[14px] text-nowrap text-right top-[0.5px] tracking-[-0.1504px] translate-x-[-100%]">No Classification</p>
                  </Wrapper>
                  <div className="bg-[#94a3b8] rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Container" />
                </Container1>
                <Container1 additionalClassNames="h-[20px] w-[78.773px]">
                  <div className="h-[20px] shrink-0 w-[6.453px]" data-name="Text" />
                  <TextText text="20%" />
                  <TextText1 text="(14)" additionalClassNames="w-[25.594px]" />
                </Container1>
              </div>
              <div className="content-stretch flex gap-[16px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
                <div className="h-[20px] relative shrink-0 w-[130px]" data-name="Container">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                    <div className="h-[20px] relative shrink-0 w-[120px]" data-name="Text">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[95px] not-italic text-[#092e3f] text-[14px] text-nowrap text-right top-[0.5px] tracking-[-0.1504px] translate-x-[-100%]">False Positives</p>
                      </div>
                    </div>
                    <div className="bg-[#ef4444] rounded-[1.67772e+07px] shrink-0 size-[12px]" data-name="Container" />
                  </div>
                </div>
                <Container1 additionalClassNames="h-[20px] w-[69.477px]">
                  <div className="h-[20px] shrink-0 w-[6.453px]" data-name="Text" />
                  <Wrapper>
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#092e3f] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[29px]">10%</p>
                  </Wrapper>
                  <div className="h-[20px] relative shrink-0 w-[18.211px]" data-name="Text">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(9,46,63,0.5)] top-[0.5px] tracking-[-0.1504px] w-[19px]">(7)</p>
                    </div>
                  </div>
                </Container1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}