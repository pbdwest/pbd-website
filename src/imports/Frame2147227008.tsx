import svgPaths from "./svg-2d4b064mhs";
import imgImageWithFallback from "figma:asset/798cb2364842a7d1e829eb2435cf442612fb123f.png";

export default function Frame() {
  return (
    <div className="bg-[#27a4f1] relative size-full">
      <div className="absolute content-stretch flex flex-col items-start left-[49.75px] overflow-clip top-0 w-[220.5px]" data-name="div">
        <div className="h-[147px] relative shrink-0 w-full" data-name="ImageWithFallback">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
        </div>
      </div>
      <div className="absolute bg-[#3c92f5] content-stretch flex items-center justify-center left-[35px] overflow-clip p-[6px] top-[38px]">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="streamline-plump:store-2">
          <div className="absolute inset-[6.25%]" data-name="Group">
            <div className="absolute inset-[-4.08%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.25 13.25">
                <g id="Group">
                  <path d={svgPaths.p3f8fcd80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.pb06b300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#3c92f5] content-stretch flex items-center justify-center left-[35px] overflow-clip p-[6px] top-[8px]">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="streamline-sharp:decent-work-and-economic-growth">
          <div className="absolute inset-[18.75%_8.33%_4.16%_8.33%]" data-name="Group">
            <div className="absolute inset-[-6.55%_-4.29%_-4.63%_-4.29%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 11.9983">
                <g id="Group">
                  <path d={svgPaths.p346ff800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" />
                  <path d={svgPaths.p11ad4780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[31px] items-center justify-center left-[157px] top-[133px] w-[97px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="bg-[#3c92f5] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[8px] relative">
            <div className="flex h-[81px] items-center justify-center relative shrink-0 w-[19px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[16px] text-white whitespace-nowrap">Cultivation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}