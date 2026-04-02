import clsx from "clsx";
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative w-[381px]", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">{children}</div>
    </div>
  );
}
type AboutRoiSection1Props = {
  additionalClassNames?: string;
};

function AboutRoiSection1({ children, additionalClassNames = "" }: React.PropsWithChildren<AboutRoiSection1Props>) {
  return (
    <div className={clsx("relative w-[333px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start relative size-full">{children}</div>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="h-[88px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[44px] left-0 not-italic text-[#0a0a0a] text-[32px] top-[-0.5px] tracking-[-1.44px] w-[323px]">{text}</p>
    </div>
  );
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[16.805px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#888] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function AboutRoiSection() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col gap-[24px] items-start px-[64px] py-[80px] relative size-full" data-name="AboutRoiSection">
      <div className="h-[16.805px] relative shrink-0 w-full" data-name="Paragraph">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#999] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">OUR MODEL</p>
      </div>
      <div className="gap-x-[117px] gap-y-[117px] grid grid-cols-[__520px_minmax(0,1fr)] grid-rows-[repeat(1,minmax(0,1fr))] h-[105.594px] relative shrink-0 w-full" data-name="Container">
        <div className="col-1 h-[105.594px] justify-self-stretch relative row-1 shrink-0" data-name="Heading 2">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] left-0 not-italic text-[#0a0a0a] text-[48px] top-[-1px] tracking-[-1.44px] w-[512px]">{`The numbers prove `}</p>
        </div>
        <div className="col-2 h-[105.594px] justify-self-stretch row-1 shrink-0" data-name="Paragraph" />
      </div>
      <div className="content-stretch flex gap-[20px] h-[445px] items-start relative shrink-0 w-full" data-name="Container">
        <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name=".div">
          <Container additionalClassNames="bg-[#d6eefc]">
            <AboutRoiSection1 additionalClassNames="h-[138.805px] shrink-0">
              <ParagraphText text="SOFTWARES" />
              <HeadingText text="Purpose-built technology" />
            </AboutRoiSection1>
            <div className="relative shrink-0 w-full" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[16px]">Tracks vendor programs, reconciles distributor data, manages promotions, and ensures rebate accuracy. Built for convenience retail.</p>
              </div>
            </div>
          </Container>
        </div>
        <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0" data-name=".DIV">
          <div className="bg-[#111642] flex-[1_0_0] min-h-px min-w-px relative w-[381px]" data-name="Container">
            <div className="content-stretch flex flex-col items-start justify-between pl-[24px] py-[24px] relative size-full">
              <AboutRoiSection1 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                <div className="h-[16.805px] relative shrink-0 w-full" data-name="Paragraph">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#888] text-[14px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">MONTLY REBATES</p>
                </div>
                <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px min-w-px relative w-full" data-name="Heading 3">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[44px] not-italic relative shrink-0 text-[62px] text-center text-white tracking-[-1.44px] w-[323px]">~$6789</p>
                </div>
              </AboutRoiSection1>
              <div className="relative shrink-0 w-[333px]" data-name="AboutRoiSection">
                <div aria-hidden="true" className="absolute border-[#414568] border-solid border-t inset-0 pointer-events-none" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end pt-[21px] relative w-full">
                  <div className="relative shrink-0 w-[333px]" data-name="Container">
                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
                      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px not-italic relative text-[14px] text-white tracking-[-1px] whitespace-pre-wrap">
                        <span className="leading-[21px]">{`Only `}</span>
                        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[21px]">10%</span>
                        <span className="leading-[21px]">{` of this amount goes to PBD-  we only earn when your store earns. If vendor programs don't generate results, we don't get paid. That's how it should work.`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] h-full items-start relative shrink-0" data-name=".DIVV">
          <Container additionalClassNames="bg-[#f4f4f4]">
            <AboutRoiSection1 additionalClassNames="h-[138.805px] shrink-0">
              <ParagraphText text="RETAILERS" />
              <HeadingText text="Built by store owners" />
            </AboutRoiSection1>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#0a0a0a] text-[16px] w-[min-content]">Created by a family operating gas stations and c-stores since the 1970s. We built what we wished we had.</p>
          </Container>
          <div className="bg-[#e3dcfb] content-stretch flex flex-col h-[95px] items-center justify-center p-[24px] relative shrink-0 w-[381px]" data-name="Container">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#0a0a0a] text-[21px] text-center tracking-[-1.05px] whitespace-nowrap">{`No membership fee • No Royalties `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}