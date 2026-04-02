import clsx from "clsx";
import svgPaths from "./svg-djdcarrx28";
import imgImage1726 from "figma:asset/fa3550823c18cc453e5844d4b909ebcb300a9c27.png";
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[22.398px] relative shrink-0 w-[119.406px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-1px] tracking-[-0.16px] whitespace-nowrap">{children}</p>
      </div>
    </div>
  );
}
type TextTextProps = {
  text: string;
};

function TextText({ text }: TextTextProps) {
  return <Wrapper>{text}</Wrapper>;
}

export default function AboutSection() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[24px] items-start px-[64px] py-[80px] relative size-full" data-name="AboutSection">
      <div className="h-[16.805px] relative shrink-0 w-[1211px]" data-name="Paragraph">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#999] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">OUR MODEL</p>
      </div>
      <div className="h-[105.594px] relative shrink-0 w-[1211px]" data-name="Container">
        <div className="absolute h-[105.594px] left-0 top-0 w-[520px]" data-name="Heading 2">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] left-0 not-italic text-[#0a0a0a] text-[48px] top-[-0.73px] tracking-[-1.44px] w-[520px]">Good for retailers. Good for vendors.</p>
        </div>
        <div className="absolute h-[105.594px] left-[637.5px] top-0 w-[573.5px]" data-name="Paragraph">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] left-0 not-italic text-[#555] text-[14px] top-0 w-[560px]">A performance-based model with zero fees, we only earn when vendor programs generate results for your store.</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[20px] h-[480px] items-start relative shrink-0 w-[1211px]" data-name="Container">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name=".div">
          <div className="bg-[#d6eefc] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name=".div">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
                <div className="content-stretch flex flex-col gap-[10px] items-start not-italic relative shrink-0" data-name=".div">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[#888] text-[11.2px] tracking-[1.68px] uppercase whitespace-nowrap">For retailers</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[-1.44px] w-[350px]">Compete like a chain stay independent</p>
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name=".div">
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="WhyChooseSection">
                    <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="Text" />
                    <TextText text="National vendor rebate programs" />
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="WhyChooseSection">
                    <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="Text" />
                    <TextText text="Promotional campaign funding" />
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="WhyChooseSection">
                    <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="Text" />
                    <TextText text="Category management programs" />
                  </div>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="WhyChooseSection">
                    <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="Text" />
                    <Wrapper>{`Full ownership & independence`}</Wrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start justify-center min-h-px min-w-px relative" data-name=".div">
          <div className="bg-[#ff8400] h-[354px] overflow-clip relative shrink-0 w-[390px]" data-name="div">
            <div className="absolute left-[50px] overflow-clip size-[354px] top-0" data-name="div">
              <div className="absolute h-[354px] left-[-91px] top-0 w-[485px]" data-name="image 1726">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1726} />
              </div>
            </div>
            <div className="absolute bg-[#f7a247] content-stretch flex items-center justify-center left-[33.66px] overflow-clip p-[7.385px] top-[54.6px]" data-name=".div">
              <div className="overflow-clip relative shrink-0 size-[17.231px]" data-name="streamline-plump:store-2">
                <div className="absolute inset-[6.26%_6.28%_6.25%_6.22%]" data-name="Group">
                  <div className="absolute inset-[-4.08%_-4.1%_-4.08%_-4.07%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3077 16.307">
                      <g id="Group">
                        <path d={svgPaths.p24aa4400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23077" />
                        <path d={svgPaths.p3e1fb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.23077" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#f7a247] content-stretch flex items-center justify-center left-[33.66px] overflow-clip p-[7.385px] top-[14.6px]" data-name=".div">
              <div className="overflow-clip relative shrink-0 size-[17.231px]" data-name="streamline-sharp:decent-work-and-economic-growth">
                <div className="absolute inset-[18.75%_8.35%_4.17%_8.27%]" data-name="Group">
                  <div className="absolute inset-[-6.55%_-4.27%_-4.63%_-4.27%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.594 14.7669">
                      <g id="Group">
                        <path d={svgPaths.pc367300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.23077" />
                        <path d={svgPaths.p184d9e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.23077" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex h-[31px] items-center justify-center left-[35px] top-[302.6px] w-[116px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
              <div className="flex-none rotate-90">
                <div className="bg-[#f7a247] content-stretch flex items-center justify-center overflow-clip px-[6px] py-[8px] relative" data-name=".div">
                  <Wrapper1 additionalClassNames="h-[100px] w-[19px]">
                    <div className="-rotate-90 flex-none">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative text-[16px] text-white whitespace-nowrap">Management</p>
                    </div>
                  </Wrapper1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ea1528] relative shrink-0 w-full">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
                <div className="content-stretch flex h-[90px] items-center relative shrink-0 w-full" data-name="Container">
                  <div className="flex-[1_0_0] h-[90px] min-h-px min-w-px relative" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
                      <div className="h-[90px] relative shrink-0" data-name="StatItem">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center not-italic relative text-white">
                          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[50px] whitespace-nowrap">$0</p>
                          <div className="flex flex-col font-['Inter:Light',sans-serif] font-light h-[51px] justify-end leading-[0] relative shrink-0 text-[19px] w-[33px]">
                            <p className="leading-[28px]">Fee</p>
                          </div>
                        </div>
                      </div>
                      <Wrapper1 additionalClassNames="h-[43px] w-0">
                        <div className="flex-none rotate-90">
                          <div className="h-0 relative w-[43px]">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 1">
                                <line id="Line 1837" stroke="var(--stroke-0, #EE4453)" x2="43" y1="0.5" y2="0.5" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </Wrapper1>
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16.6px] min-h-px min-w-px not-italic relative text-[#e5e5e5] text-[14px] tracking-[-1px]">No membership fees. No royalties. We earn a small share of vendor rebates, only when programs deliver.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] flex-[1_0_0] h-full min-h-px min-w-px overflow-clip relative">
          <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[23.66px] not-italic top-[24px]" data-name=".div">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] relative shrink-0 text-[#888] text-[11.2px] tracking-[1.68px] uppercase whitespace-nowrap">For VENDORS</p>
            <div className="font-['Inter:Regular',sans-serif] font-normal leading-[44px] relative shrink-0 text-[#0a0a0a] text-[32px] tracking-[-1.44px] w-[350px] whitespace-pre-wrap">
              <p className="mb-0">{`Structured access to `}</p>
              <p>c-stores.</p>
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[23.66px] top-[318.41px] w-[342.333px]" data-name=".div">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="WhyChooseSection">
              <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="Text" />
              <TextText text="Multi-state retail network" />
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="WhyChooseSection">
              <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="Text" />
              <TextText text="Consistent execution at store level" />
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="WhyChooseSection">
              <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="Text" />
              <TextText text="Fragmented market, organized" />
            </div>
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="WhyChooseSection">
              <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="Text" />
              <TextText text="Performance-tracked programs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}