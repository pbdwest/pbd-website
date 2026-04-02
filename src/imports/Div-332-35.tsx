export default function Div() {
  return (
    <div className="bg-[#ea1528] overflow-clip relative rounded-[77px] size-full" data-name=".div">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[22.1px] left-[12px] not-italic text-[16px] text-white top-[64px] whitespace-nowrap">See more</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+26px)] size-[32px] top-[calc(50%-25px)]" data-name="Frame">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g clipPath="url(#clip0_332_41)" id="Frame">
            <g id="Vector" />
            <path d="M8 24L24 8" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M11 8H24V21" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <clipPath id="clip0_332_41">
              <rect fill="white" height="32" width="32" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}