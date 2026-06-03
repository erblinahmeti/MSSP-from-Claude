import svgPaths from "./svg-bvyv8g5cz7";
import imgSentinelPng from "figma:asset/a3774409e98c46ca03515e5bba6f515d1b11173c.png";
import imgOrig1 from "figma:asset/da8b49536731a0deeacc8c8a6cd1a32815de7120.png";

export default function SzTableCells() {
  return (
    <div className="bg-[#f6f6f6] relative size-full" data-name="sz-table-cells">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-end pl-[8px] pr-[16px] py-[8px] relative size-full">
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="v-btn">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-name="v-icon">
              <div className="h-[20px] relative shrink-0 w-[39px]" data-name="sentinel.png">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgSentinelPng} />
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="v-btn">
            <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[24px]" data-name="v-icon">
              <div className="relative shrink-0 size-[24px]" data-name="orig 1">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOrig1} />
              </div>
            </div>
          </div>
          <div className="bg-[#f6f6f6] content-stretch flex flex-col items-center justify-center p-[7px] relative rounded-[9999px] shrink-0" data-name="v-btn">
            <div className="relative shrink-0 size-[24px]" data-name="v-icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="v-icon">
                  <path d={svgPaths.p1cbf28b0} fill="var(--fill-0, #6B828C)" id="more_horiz" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e5f2f4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}