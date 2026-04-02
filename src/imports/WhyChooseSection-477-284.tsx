import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-end px-[24px] py-[16px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="bg-[#414568] flex-[1_0_0] min-h-px min-w-px relative">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[24px] py-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] min-h-px min-w-px not-italic relative text-[16px] text-white">{text}</p>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex items-start px-[24px] py-[16px] relative w-full", additionalClassNames)}>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">{text}</p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div className={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <Text1 text={text} />
      </div>
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <div className="bg-[#111642] content-stretch flex flex-col gap-[40px] items-center px-[64px] py-[80px] relative size-full" data-name="WhyChooseSection">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="h-[16.805px] relative shrink-0 w-full" data-name="Paragraph">
          <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#888] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">Transparency</p>
        </div>
        <div className="content-stretch flex h-[105.594px] items-start justify-between relative shrink-0 w-full" data-name="Container">
          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] not-italic relative shrink-0 text-[48px] text-white tracking-[-1.44px] w-[520px]">What your rebate statement looks like.</p>
            </div>
          </div>
          <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Paragraph">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
              <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] min-h-px min-w-px not-italic relative text-[#d4d4d4] text-[14px] whitespace-pre-wrap">
                <p className="mb-0">{`Every month you receive a detailed statement showing exactly how `}</p>
                <p>your rebates were calculated.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.09)] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[989px]">
        <div className="bg-[#414568] relative shrink-0 w-full">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-start justify-between leading-[23.8px] not-italic px-[24px] py-[16px] relative text-white w-full whitespace-nowrap">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[18px]">PBD Rebate Statement</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[14px]">March 1–31, 2026</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".DIV">
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="Vendor Program" additionalClassNames="bg-[#292d55]" />
            <Text text="Qualified Sales" additionalClassNames="bg-[#292d55]" />
            <Text text="Rebate Rate" additionalClassNames="bg-[#292d55]" />
            <Text text="Rebate Amount" additionalClassNames="bg-[#292d55]" />
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="Coca-Cola Promo" additionalClassNames="bg-[#414568]" />
            <Text text="$8,240" additionalClassNames="bg-[#414568]" />
            <Text text="3.2%" additionalClassNames="bg-[#414568]" />
            <Text2 text="$263.68" />
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="Frito-Lay Display" additionalClassNames="bg-[#414568]" />
            <Text text="$4,180" additionalClassNames="bg-[#414568]" />
            <Text text="$0.15/unit" additionalClassNames="bg-[#414568]" />
            <Text2 text="$186.50" />
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="Red Bull Cooler" additionalClassNames="bg-[#414568]" />
            <Text text="$3,620" additionalClassNames="bg-[#414568]" />
            <Text text="4.0%" additionalClassNames="bg-[#414568]" />
            <Text2 text="$144.80" />
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="Mondelez Snacks" additionalClassNames="bg-[#414568]" />
            <Text text="$2,950" additionalClassNames="bg-[#414568]" />
            <Text text="2.8%" additionalClassNames="bg-[#414568]" />
            <Text2 text="$82.60" />
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="Mars Wrigley" additionalClassNames="bg-[#414568]" />
            <Text text="$1,890" additionalClassNames="bg-[#414568]" />
            <Text text="3.5%" additionalClassNames="bg-[#414568]" />
            <Text2 text="$66.15" />
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="Gross Rebate" additionalClassNames="bg-[#292d55]" />
            <div className="bg-[#292d55] flex-[1_0_0] min-h-px min-w-px relative">
              <div className="flex flex-row justify-end overflow-clip rounded-[inherit] size-full">
                <Text1 text="$743.73" additionalClassNames="justify-end" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="PBD Operations Fee (10%)" additionalClassNames="bg-[#292d55]" />
            <Wrapper additionalClassNames="bg-[#292d55]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic relative shrink-0 text-[#f9200d] text-[16px] whitespace-nowrap">-$74.37</p>
            </Wrapper>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 w-full" data-name=".DIV">
            <Text text="Net Payment to Your Store" additionalClassNames="bg-[#414568]" />
            <Wrapper additionalClassNames="bg-[#414568]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic relative shrink-0 text-[#7ff90d] text-[23px] whitespace-nowrap">-$74.37</p>
            </Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}