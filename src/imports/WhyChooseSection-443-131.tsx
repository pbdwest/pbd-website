import imgImageWithFallback from "figma:asset/e8f73d7d653cc44c84744f44670683aadbe542fb.png";
type ProvenPerformanceSectionText1Props = {
  text: string;
};

function ProvenPerformanceSectionText1({ text }: ProvenPerformanceSectionText1Props) {
  return (
    <div className="h-[22.398px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#d4d4d4] text-[14px] top-[0.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type ProvenPerformanceSectionTextProps = {
  text: string;
};

function ProvenPerformanceSectionText({ text }: ProvenPerformanceSectionTextProps) {
  return (
    <div className="h-[72px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[72px] left-0 not-italic text-[72px] text-white top-0 tracking-[-2.16px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <div className="bg-[#111642] relative size-full" data-name="WhyChooseSection">
      <div className="absolute h-[16.805px] left-[64px] top-[80px] w-[1211px]" data-name="Paragraph">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#888] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">Results</p>
      </div>
      <div className="absolute content-stretch flex h-[105.594px] items-start justify-between left-[64px] top-[120.8px] w-[1211px]" data-name="Container">
        <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] not-italic relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-[520px]">A line value pbd will be adding tp the stores</p>
          </div>
        </div>
      </div>
      <div className="absolute gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[430.125px] left-[64px] top-[282.4px] w-[1211px]" data-name="Container">
        <div className="col-2 content-stretch flex flex-col h-[383.375px] items-start justify-between justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Paragraph">
            <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] min-h-px min-w-px not-italic relative text-[#d4d4d4] text-[14px]">PBD connects independent gas stations, convenience stores, and truck stops with national vendor programs, merchandising support, and promotional funding typically reserved for large chains.</p>
          </div>
          <div className="content-stretch flex gap-[42px] items-start relative shrink-0 w-full" data-name=".div">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[135.398px] items-start min-h-px min-w-px pt-[25px] relative" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#292d55] border-solid border-t inset-0 pointer-events-none" />
              <ProvenPerformanceSectionText text="30%" />
              <ProvenPerformanceSectionText1 text="Increase in sales during Jumpstart" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[135.398px] items-start min-h-px min-w-px pt-[25px] relative" data-name="Container">
              <div aria-hidden="true" className="absolute border-[#292d55] border-solid border-t inset-0 pointer-events-none" />
              <ProvenPerformanceSectionText text="2X" />
              <ProvenPerformanceSectionText1 text="Your annual sales" />
            </div>
          </div>
        </div>
        <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="Container">
          <div className="h-[430.125px] relative shrink-0 w-full" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
          </div>
        </div>
      </div>
    </div>
  );
}