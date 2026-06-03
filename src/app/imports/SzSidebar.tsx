import svgPaths from "./svg-9ybrj6e4v6";
import imgSeculyzeLogo from "figma:asset/f059048282c6434b0ecb2f73ac4a8d51c0755afb.png";
import imgAvatarPlaceholder from "figma:asset/4d26c05510cc56873f23d8c51c85578f89b6402d.png";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function VIcon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper2>
      <g id="v-icon">{children}</g>
    </Wrapper2>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[8px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function VIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="v-icon">{children}</g>
      </svg>
    </div>
  );
}
type SidebarMenuSectionProps = {
  text: string;
};

function SidebarMenuSection({ children, text }: React.PropsWithChildren<SidebarMenuSectionProps>) {
  return (
    <div className="bg-[#e5f2f4] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#6b828c] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[18px] items-center px-[8px] py-[4px] relative w-full">
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="flex flex-col font-['Lato:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[14px] text-nowrap tracking-[1.25px] uppercase">
              <p className="leading-[20px]">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SzSidebar() {
  return (
    <div className="bg-[#e5f2f4] content-stretch flex flex-col items-start justify-between relative shadow-[2px_0px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="sz-sidebar">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="topside">
        <div className="bg-[#e5f2f4] relative shrink-0 w-full" data-name="sidebar_menu_section">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between px-[8px] py-[16px] relative w-full">
              <div className="content-stretch flex items-center relative shrink-0 size-[38px]" data-name="Seculyze Logo">
                <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Seculyze Logo">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSeculyzeLogo} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="bg-[#e5f2f4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="sidebar-feature-section">
            <SidebarMenuSection text="Operate" />
            <Wrapper>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <VIcon>
                  <path d={svgPaths.p36ddc380} fill="var(--fill-0, #092E3F)" id="Vector" />
                </VIcon>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Dashboard</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <VIcon>
                  <path d={svgPaths.p2c98df00} fill="var(--fill-0, #092E3F)" id="menu" />
                </VIcon>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Incidents</p>
                </div>
              </div>
            </Wrapper>
          </div>
          <div className="bg-[#e5f2f4] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="sidebar-feature-section">
            <SidebarMenuSection text="Calibrate" />
            <Wrapper1>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <VIcon>
                  <path d={svgPaths.p22bc5e00} fill="var(--fill-0, #092E3F)" id="healing" />
                </VIcon>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Calibrate Overview</p>
                </div>
              </div>
            </Wrapper1>
          </div>
          <div className="bg-[#e5f2f4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="sidebar-feature-section">
            <SidebarMenuSection text="Tune" />
            <Wrapper1>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <VIcon>
                  <path d={svgPaths.p24cd580} fill="var(--fill-0, #092E3F)" id="lightbulb" />
                </VIcon>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Noise Reduction</p>
                </div>
              </div>
            </Wrapper1>
          </div>
          <div className="bg-[#e5f2f4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="sidebar-feature-section">
            <SidebarMenuSection text="Cost" />
            <Wrapper>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <VIcon>
                  <path d={svgPaths.pd97b600} fill="var(--fill-0, #092E3F)" id="Vector" />
                </VIcon>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Data Collection</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <VIcon>
                  <path d={svgPaths.p1a6fc400} fill="var(--fill-0, #092E3F)" id="Vector" />
                </VIcon>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Ingestion Anomalies</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <VIcon>
                  <path d={svgPaths.p3b804e00} fill="var(--fill-0, #092E3F)" id="Vector" />
                </VIcon>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Ingestion Budget</p>
                </div>
              </div>
            </Wrapper>
          </div>
          <div className="bg-[#e5f2f4] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="sidebar-feature-section">
            <SidebarMenuSection text="Clients" />
            <Wrapper1>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <VIcon>
                  <path d={svgPaths.p2c463b00} fill="var(--fill-0, #092E3F)" id="Vector" />
                </VIcon>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Client Registry</p>
                </div>
              </div>
            </Wrapper1>
            <Wrapper1>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="v-icon">
                  <div className="h-[10.72px] relative shrink-0 w-[13.4px]" data-name="Group">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4 10.7201">
                      <g id="Group">
                        <path d={svgPaths.p2b45a500} fill="var(--fill-0, #092E3F)" id="Vector" />
                        <path d={svgPaths.p2acf4c00} fill="var(--fill-0, #092E3F)" id="Vector_2" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Onboard Client</p>
                </div>
              </div>
            </Wrapper1>
          </div>
          <div className="bg-[#e5f2f4] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="sidebar-feature-section">
            <SidebarMenuSection text="Automate" />
            <Wrapper1>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="App Pages">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="v-icon">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[12.06px]" data-name="Group">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.06 12.06">
                        <g id="Group">
                          <path d={svgPaths.p11d5b100} fill="var(--fill-0, #092E3F)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Lato:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#092e3f] text-[16px] text-nowrap">
                  <p className="leading-[normal]">Automated Reporting</p>
                </div>
              </div>
            </Wrapper1>
          </div>
        </div>
      </div>
      <div className="bg-[#e5f2f4] relative shrink-0 w-full" data-name="sidebar_menu_section">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative w-full">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="minibar">
              <div className="content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="avatar-placeholder">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatarPlaceholder} />
              </div>
              <div className="bg-[#e5f2f4] content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 w-[38px]" data-name="setting-btn">
                <VIcon1>
                  <path d={svgPaths.p24b414f0} fill="var(--fill-0, #092E3F)" id="settings" />
                </VIcon1>
              </div>
              <div className="bg-[#e5f2f4] content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0 w-[38px]" data-name="help-btn">
                <VIcon1>
                  <path d={svgPaths.p2e3b7c80} fill="var(--fill-0, #092E3F)" id="Vector" />
                </VIcon1>
              </div>
            </div>
            <Wrapper2>
              <g id="collapse-btn">
                <path d={svgPaths.p39effe00} fill="var(--fill-0, #6B828C)" id="Vector" />
              </g>
            </Wrapper2>
          </div>
        </div>
      </div>
    </div>
  );
}