import clsx from "clsx";
import imgImage1728 from "figma:asset/b583670b653c969a86374ca6d6dd231a8e821663.png";
type Container1Props = {
  additionalClassNames?: string;
};

function Container1({ children, additionalClassNames = "" }: React.PropsWithChildren<Container1Props>) {
  return (
    <div className={clsx("flex-[1_0_0] h-[357.438px] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">{children}</div>
    </div>
  );
}

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip py-[7px] relative rounded-[inherit]">{children}</div>
    </div>
  );
}

export default function AboutHero() {
  return (
    <div className="bg-[#111642] content-stretch flex flex-col gap-[80px] items-center px-[64px] py-[80px] relative size-full" data-name="AboutHero">
      <div className="content-stretch flex gap-[20px] items-end relative shrink-0 w-full" data-name="Container">
        <div className="h-[134.391px] relative shrink-0 w-[686.414px]" data-name="Heading 1">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[67.2px] left-0 not-italic text-[64px] text-white top-0 tracking-[-1.92px] w-[593px]">Built for Independent Retail</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative" data-name="Paragraph">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] min-h-px min-w-px not-italic relative text-[#e5e5e5] text-[16px]">Power Buying Dealers (PBD) gives independent c-store owners the same vendor programs, promotional funding, and buying power that national chains rely on</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[31px] items-start relative shrink-0 w-[995px]" data-name=".div">
        <Container1 additionalClassNames="bg-[#d6eefc]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.6px] not-italic relative shrink-0 text-[#1e1e1e] text-[14.4px] w-full">PBD organizes independent stores into a network that gives vendors a reason to invest in your store with the same programs they run through national chains.</p>
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
              <Container>
                <Wrapper>
                  <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                </Wrapper>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18.6px] not-italic relative shrink-0 text-[14px] text-black w-[245px]">Access vendor rebates and promotional funding</p>
              </Container>
              <Container>
                <Wrapper>
                  <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                </Wrapper>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18.6px] not-italic relative shrink-0 text-[14px] text-black w-[214px]">Get merchandising and category support</p>
              </Container>
              <div className="relative shrink-0 w-full" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">
                  <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.6px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Pay zero fees — ever</p>
                </div>
              </div>
            </div>
          </div>
        </Container1>
        <div className="content-stretch flex flex-col h-[357.438px] items-center justify-center overflow-clip relative shrink-0 w-[311px]" data-name="Container">
          <div className="h-[373px] relative shrink-0 w-[397px]" data-name="image 1728">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1728} />
          </div>
        </div>
        <Container1 additionalClassNames="bg-white">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] not-italic relative shrink-0 text-[#525252] text-[14px] uppercase w-[256px]">years in business</p>
          <div className="relative shrink-0 w-full" data-name="ProvenPerformanceSection">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start justify-center not-italic relative w-full">
              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[#111642] text-[72px] tracking-[-2.16px] whitespace-nowrap">50+</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#525252] text-[14px] w-[256px]">Years experience operating convenience stores and gas stations</p>
            </div>
          </div>
        </Container1>
      </div>
    </div>
  );
}