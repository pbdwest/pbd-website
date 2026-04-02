type DivTextProps = {
  text: string;
};

function DivText({ text }: DivTextProps) {
  return (
    <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0">
      <div className="content-stretch flex items-end relative shrink-0 text-black">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[75px] justify-center leading-[0] relative shrink-0 text-[90px] w-[121px]">
          <p className="leading-[normal]">{"XX"}</p>
        </div>
        <p className="font-['Inter:Light',sans-serif] font-light h-[30px] leading-[normal] relative shrink-0 text-[28px] w-[19px]">{"+"}</p>
      </div>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#404040] text-[14px] w-[91px]">{text}</p>
    </div>
  );
}

function Helper() {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className="flex h-[121px] items-center justify-center relative shrink-0 w-0">
      <div className="flex-none rotate-90">
        <div className="h-0 relative w-[121px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121 1">
              <line id="Line 1630" stroke="var(--stroke-0, #E5E5E5)" x2="121" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Div() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center justify-between px-[50px] py-[60px] relative size-full" data-name=".div">
      <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name=".div">
        <Helper />
        <div className="content-stretch flex gap-[12px] items-start not-italic relative shrink-0" data-name=".div">
          <div className="content-stretch flex items-end relative shrink-0 text-black" data-name=".div">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[75px] justify-center leading-[0] relative shrink-0 text-[90px] w-[117px]">
              <p className="leading-[normal]">30</p>
            </div>
            <p className="font-['Inter:Light',sans-serif] font-light h-[31px] leading-[normal] relative shrink-0 text-[28px] w-[19px]">+</p>
          </div>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#404040] text-[14px] w-[91px]">Years serving independent</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name=".div">
        <Helper />
        <DivText text="Members across USS" />
      </div>
      <div className="content-stretch flex gap-[36px] items-center relative shrink-0" data-name=".div">
        <Helper />
        <DivText text="States" />
      </div>
    </div>
  );
}