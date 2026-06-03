import imgSentinelPng from "figma:asset/a3774409e98c46ca03515e5bba6f515d1b11173c.png";

export default function VIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="v-icon">
      <div className="h-[20px] relative shrink-0 w-[39px]" data-name="sentinel.png">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgSentinelPng} />
      </div>
    </div>
  );
}