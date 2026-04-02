import clsx from "clsx";
import imgImageWithFallback from "figma:asset/87892cdbb39b2f2cd274a236199fa7780ff97325.png";
import imgImage1724 from "figma:asset/61e1b13cd663b1c7edcf6718b942b3681b872267.png";
type DivProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function Div({ text, text1, additionalClassNames = "" }: DivProps) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] h-[300px] not-italic pt-[50px] relative shrink-0 w-full", additionalClassNames)}>
      <p className="leading-[52.8px] min-w-full relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.44px] w-[min-content]">{text}</p>
      <p className="leading-[23.8px] relative shrink-0 text-[#555] text-[16px] w-[450px]">{text1}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[24px] items-start px-[64px] py-[80px] relative size-full" data-name="AboutSection">
      <div className="h-[16.805px] relative shrink-0 w-[1211px]" data-name="Paragraph">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#999] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">OUR JOURNEY</p>
      </div>
      <div className="h-[105.594px] relative shrink-0 w-[1211px]" data-name="Container">
        <div className="absolute h-[105.594px] left-0 top-0 w-[520px]" data-name="Heading 2">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] left-0 not-italic text-[#0a0a0a] text-[48px] top-[-0.81px] tracking-[-1.44px] w-[585px]">Five decades of building for independents.</p>
        </div>
        <div className="absolute h-[105.594px] left-[637.5px] top-0 w-[573.5px]" data-name="Paragraph">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] left-0 not-italic text-[#555] text-[14px] top-0 w-[560px]">From a single family-run store to a national network serving hundreds of independent retailers.</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-[1211px]" data-name="Container">
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[60px] items-start justify-center min-h-px min-w-px relative" data-name=".div">
          <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] h-[300px] items-end not-italic pt-[50px] relative shrink-0 text-right w-full" data-name=".div">
            <p className="leading-[52.8px] min-w-full relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.44px] w-[min-content]">1970’s</p>
            <p className="leading-[23.8px] relative shrink-0 text-[#555] text-[16px] w-[408px]">Family enters the convenience retail and gas station business, gaining firsthand operator experience.</p>
          </div>
          <div className="bg-[#e5e5e5] h-[300px] shrink-0 w-full" data-name="Container" />
          <Div text="2000’s" text1="The concept for PBD takes shape, a network to give independents the same vendor programs chains rely on." additionalClassNames="items-end text-right" />
          <div className="bg-[#e5e5e5] h-[300px] shrink-0 w-full" data-name="Container" />
        </div>
        <div className="bg-[#e5e5e5] relative self-stretch shrink-0 w-[2px]" data-name="Container">
          <div className="absolute bg-[rgba(17,22,66,0.1)] h-[1036px] left-[0.5px] top-[-0.41px] w-[2px]" data-name="Container" />
          <div className="absolute bg-[#ea1528] h-[34px] left-0 top-[-0.41px] w-[2px]" data-name="Container" />
          <div className="absolute bg-[#ea1528] left-[-4px] size-[10px] top-[29px]" data-name="Container" />
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[60px] items-start justify-center min-h-px min-w-px relative">
          <div className="content-stretch flex flex-col h-[300px] items-start overflow-clip relative shrink-0 w-[544px]" data-name="Container">
            <div className="h-[430.125px] overflow-clip relative shrink-0 w-full" data-name="ImageWithFallback">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
              <div className="absolute h-[489px] left-[0.5px] top-[-50px] w-[888px]" data-name="image 1724">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1724} />
              </div>
            </div>
          </div>
          <Div text="1990’s" text1="Operations expand across multiple locations, revealing the vendor access gap between independents and chains." additionalClassNames="items-start" />
          <div className="bg-[#e5e5e5] h-[300px] shrink-0 w-full" data-name="Container" />
          <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] h-[300px] items-start not-italic pt-[50px] relative shrink-0 w-full" data-name=".div">
            <p className="leading-[52.8px] min-w-full relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.44px] w-[min-content]">Today</p>
            <p className="leading-[23.8px] relative shrink-0 text-[#555] text-[16px] w-[494px]">PBD coordinates vendor programs across a growing multi-state network of independent convenience stores and gas stations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}