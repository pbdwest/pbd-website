import clsx from "clsx";
import svgPaths from "./svg-ygvqg84o9x";
import imgImageWithFallback from "figma:asset/87892cdbb39b2f2cd274a236199fa7780ff97325.png";
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("h-[62px] relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#414568] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-px relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return <Wrapper1 additionalClassNames={clsx("h-[105.594px] relative shrink-0", additionalClassNames)}>{children}</Wrapper1>;
}
type AboutSectionTextProps = {
  text: string;
  additionalClassNames?: string;
};

function AboutSectionText({ text, additionalClassNames = "" }: AboutSectionTextProps) {
  return (
    <Wrapper1 additionalClassNames={clsx("h-[21.594px] relative shrink-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.6px] left-0 not-italic text-[14.4px] text-white top-0 whitespace-nowrap">{text}</p>
    </Wrapper1>
  );
}

export default function WhyChooseSection() {
  return (
    <div className="bg-[#111642] relative size-full" data-name="WhyChooseSection">
      <div className="absolute h-[16.805px] left-[64px] top-[80px] w-[1211px]" data-name="Paragraph">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#888] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">OUR NETWORK</p>
      </div>
      <div className="absolute content-stretch flex gap-[117px] h-[105.594px] items-start left-[64px] pr-[691px] top-[120.8px] w-[1211px]" data-name="Container">
        <Wrapper additionalClassNames="w-[520px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] left-0 not-italic text-[48px] text-white top-[-1.21px] tracking-[-1.44px] w-[531px]">One network, hundreds of independent stores.</p>
        </Wrapper>
        <Wrapper additionalClassNames="w-[573.5px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] left-0 not-italic text-[#f5f5f5] text-[14px] top-0 w-[560px]">PBD organizes independent retailers across multiple states into a coordinated network, giving vendors a reason to invest in your store.</p>
        </Wrapper>
      </div>
      <div className="absolute gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[430.125px] left-[64px] top-[282.4px] w-[1211px]" data-name="Container">
        <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-stretch shrink-0" data-name="Container">
          <div className="h-[430.125px] relative shrink-0 w-full" data-name="ImageWithFallback">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
          </div>
        </div>
        <div className="col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] w-[560px]">Through the PBD network, retailers gain access to:</p>
          <div className="flex-[1_0_0] min-h-px min-w-px relative w-[573.5px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
              <Container additionalClassNames="w-[573px]">
                <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                <AboutSectionText text="Vendor rebate programs" additionalClassNames="w-[235.367px]" />
              </Container>
              <Container additionalClassNames="w-[573px]">
                <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                <AboutSectionText text="Promotional funding" additionalClassNames="w-[466.68px]" />
              </Container>
              <Container additionalClassNames="w-[574px]">
                <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                <AboutSectionText text="Merchandising support" additionalClassNames="w-[171.125px]" />
              </Container>
              <Container additionalClassNames="w-[574px]">
                <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                <AboutSectionText text="Category management programs" additionalClassNames="w-[171.125px]" />
              </Container>
              <Container additionalClassNames="w-[574px]">
                <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                <AboutSectionText text="National promotional campaigns" additionalClassNames="w-[171.125px]" />
              </Container>
            </div>
          </div>
          <div className="relative shrink-0" data-name="Link">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[23px] py-[13px] relative">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">See Our Programs</p>
              <div className="relative shrink-0 size-[16px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Icon">
                    <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}