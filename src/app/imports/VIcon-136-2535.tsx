import imgSeculyzePng from "figma:asset/f059048282c6434b0ecb2f73ac4a8d51c0755afb.png";

export default function VIcon() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="v-icon">
      <div className="h-[18px] relative shrink-0 w-[34.5px]" data-name="seculyze.png">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgSeculyzePng} />
      </div>
    </div>
  );
}