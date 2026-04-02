import clsx from "clsx";
import svgPaths from "./svg-yvx9hedcky";
import imgContainer from "figma:asset/2a560efaf8266ade3923e055b689c6554d0710f8.png";
import imgImageWithFallback from "figma:asset/87892cdbb39b2f2cd274a236199fa7780ff97325.png";
import imgImage1724 from "figma:asset/61e1b13cd663b1c7edcf6718b942b3681b872267.png";
import imgImage from "figma:asset/98821f964f84d9b3aaa269b181e8e821ace81088.png";
import imgDropdown from "figma:asset/dacb96d8203e55c4ce3d4f252bdef33458de7736.png";
import imgImage1 from "figma:asset/5912cf2c878b4927aca022f33fc41291a02a09b4.png";
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div className={clsx("relative w-[483.5px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] relative size-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage2Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage2Props>) {
  return (
    <div className={clsx("h-[62px] relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#414568] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pb-px relative size-full">{children}</div>
    </div>
  );
}
type AboutSectionBackgroundImageProps = {
  additionalClassNames?: string;
};

function AboutSectionBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<AboutSectionBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0 w-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[64px] py-[80px] relative w-full">{children}</div>
    </div>
  );
}
type ContainerBackgroundImage1Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage1Props>) {
  return (
    <div className={clsx("flex-[1_0_0] h-[357.438px] min-h-px min-w-px relative", additionalClassNames)}>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative w-full">{children}</div>
    </div>
  );
}
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("size-[16px]", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
  additionalClassNames?: string;
};

function BackgroundImageAndText1({ text, additionalClassNames = "" }: BackgroundImageAndText1Props) {
  return (
    <div className={clsx("absolute h-[21px] left-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText2Props = {
  text: string;
  additionalClassNames?: string;
};

function ParagraphBackgroundImageAndText2({ text, additionalClassNames = "" }: ParagraphBackgroundImageAndText2Props) {
  return (
    <div className={clsx("absolute h-[16.5px] left-0 top-[0.5px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.5px] tracking-[1.32px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

function BackgroundImage() {
  return (
    <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none rounded-[12px]">
      <div className="absolute bg-clip-padding bg-white border-0 border-[transparent] border-solid inset-0 rounded-[12px]" />
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden rounded-[12px]">
        <img alt="" className="absolute h-[14.29%] left-0 max-w-none top-[42.86%] w-[4.31%]" src={imgDropdown} />
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[231.75px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#999] text-[14px] whitespace-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}
type LabelBackgroundImageAndTextProps = {
  text: string;
};

function LabelBackgroundImageAndText({ text }: LabelBackgroundImageAndTextProps) {
  return (
    <BackgroundImage2 additionalClassNames="h-[19.5px] w-[231.75px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[#0a0a0a] text-[13px] top-px tracking-[-0.13px] whitespace-nowrap">{text}</p>
    </BackgroundImage2>
  );
}
type TextBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextBackgroundImageAndText({ text, additionalClassNames = "" }: TextBackgroundImageAndTextProps) {
  return (
    <div className={clsx("absolute h-[21px] left-[28px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#555] text-[14px] top-0 whitespace-nowrap">{text}</p>
    </div>
  );
}

function IconBackgroundImage1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full">
      <div className="absolute inset-[8.32%_8.32%_8.35%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 14.3333">
            <path d={svgPaths.pb2beb40} id="Vector" stroke="var(--stroke-0, #111642)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_8.33%_41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-7.5%_-5.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66667 7.66667">
            <path d={svgPaths.p1aaa8080} id="Vector" stroke="var(--stroke-0, #111642)" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type IconBackgroundImageProps = {
  additionalClassNames?: string;
};

function IconBackgroundImage({ additionalClassNames = "" }: IconBackgroundImageProps) {
  return (
    <BackgroundImage1 additionalClassNames={additionalClassNames}>
      <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
      <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
    </BackgroundImage1>
  );
}
type AboutSectionBackgroundImageAndTextProps = {
  text: string;
  additionalClassNames?: string;
};

function AboutSectionBackgroundImageAndText({ text, additionalClassNames = "" }: AboutSectionBackgroundImageAndTextProps) {
  return (
    <div className={clsx("h-[21.594px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.6px] left-0 not-italic text-[14.4px] text-white top-0 whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}
type DivBackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function DivBackgroundImage({ text, text1, additionalClassNames = "" }: DivBackgroundImageProps) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] h-[300px] not-italic pt-[50px] relative shrink-0 w-full", additionalClassNames)}>
      <p className="leading-[52.8px] min-w-full relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.44px] w-[min-content]">{text}</p>
      <p className="leading-[23.8px] relative shrink-0 text-[#555] text-[16px] w-[450px]">{text1}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndText1Props = {
  text: string;
};

function ParagraphBackgroundImageAndText1({ text }: ParagraphBackgroundImageAndText1Props) {
  return (
    <div className="absolute h-[105.594px] left-[637.5px] top-0 w-[573.5px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] left-0 not-italic text-[#555] text-[14px] top-0 w-[560px]">{text}</p>
    </div>
  );
}
type ParagraphBackgroundImageAndTextProps = {
  text: string;
};

function ParagraphBackgroundImageAndText({ text }: ParagraphBackgroundImageAndTextProps) {
  return (
    <div className="h-[16.805px] relative shrink-0 w-[1211px]">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#999] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function DesignLandingPageHeroSection() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center relative size-full" data-name="Design landing page hero section">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[1339px]" data-name="AboutPage">
        <div className="content-stretch flex flex-col items-start pt-[79px] relative shrink-0 w-full" data-name="Container">
          <div className="bg-[#111642] relative shrink-0 w-full" data-name="AboutHero">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col gap-[50px] items-center px-[64px] py-[80px] relative w-full">
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
                  <div className="h-[134.391px] relative shrink-0 w-[686.414px]" data-name="Heading 1">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[67.2px] left-0 not-italic text-[64px] text-white top-0 tracking-[-1.92px] w-[593px]">Built for Independent Retail</p>
                  </div>
                  <div className="h-[102.375px] relative shrink-0 w-[600px]" data-name="Paragraph">
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-0 not-italic text-[#e5e5e5] text-[16px] top-[-1.39px] w-[661px]">Power Buying Dealers (PBD) is a retail network that connects independent convenience stores, gas stations, and truck stops with national vendor programs, promotional funding, and category management typically available only to large retail chains.</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[31px] items-start relative shrink-0 w-[995px]" data-name=".div">
                  <ContainerBackgroundImage1 additionalClassNames="bg-[#d6eefc]">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.6px] not-italic relative shrink-0 text-[#1e1e1e] text-[14.4px] w-full">Through the PBD network, independent retailers gain access to vendor partnerships and promotional programs used by national chains to drive sales and execute promotions at scale.</p>
                    <div className="relative shrink-0 w-full" data-name="Container">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
                        <ContainerBackgroundImage>
                          <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.6px] not-italic relative shrink-0 text-[14.4px] text-black whitespace-nowrap">Independent Retail Focus</p>
                        </ContainerBackgroundImage>
                        <ContainerBackgroundImage>
                          <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.6px] not-italic relative shrink-0 text-[14.4px] text-black whitespace-nowrap">National Vendor Partnerships</p>
                        </ContainerBackgroundImage>
                        <ContainerBackgroundImage>
                          <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21.6px] not-italic relative shrink-0 text-[14.4px] text-black whitespace-nowrap">Performance-Based Model</p>
                        </ContainerBackgroundImage>
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[357.438px] items-start min-h-px min-w-px relative" data-name="Container">
                    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
                      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
                      <div className="flex flex-row items-center justify-center size-full">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
                      </div>
                    </div>
                  </div>
                  <ContainerBackgroundImage1 additionalClassNames="bg-white">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] not-italic relative shrink-0 text-[#525252] text-[14px] uppercase w-[256px]">years in business</p>
                    <div className="relative shrink-0 w-full" data-name="ProvenPerformanceSection">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start justify-center not-italic relative w-full">
                        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[72px] text-black tracking-[-2.16px] whitespace-nowrap">50+</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] relative shrink-0 text-[#525252] text-[14px] w-[256px]">Experience operating convenience stores and gas stations</p>
                      </div>
                    </div>
                  </ContainerBackgroundImage1>
                </div>
              </div>
            </div>
          </div>
          <AboutSectionBackgroundImage additionalClassNames="bg-white">
            <ParagraphBackgroundImageAndText text="OUR STORY" />
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#262626] text-[0px] text-[40px] tracking-[-3.44px] w-full">
                <span className="leading-[57px]">{`Our family has been running gas stations and `}</span>
                <span className="leading-[57px] text-[rgba(38,38,38,0.5)]">{`convenience stores since the early 1970s. We saw firsthand how national chains had access to vendor programs, promotional funding, and support that independent operators simply couldn't reach. PBD was created to close that gap — built by retailers, not consultants."`}</span>
              </p>
            </div>
          </AboutSectionBackgroundImage>
          <AboutSectionBackgroundImage additionalClassNames="bg-[#fafafa]">
            <ParagraphBackgroundImageAndText text="OUR JOURNEY" />
            <div className="h-[105.594px] relative shrink-0 w-[1211px]" data-name="Container">
              <div className="absolute h-[105.594px] left-0 top-0 w-[520px]" data-name="Heading 2">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] left-0 not-italic text-[#0a0a0a] text-[48px] top-[-0.81px] tracking-[-1.44px] w-[585px]">Five decades of building for independents.</p>
              </div>
              <ParagraphBackgroundImageAndText1 text="From a single family-run store to a national network serving hundreds of independent retailers." />
            </div>
            <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-[1211px]" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[60px] items-start justify-center min-h-px min-w-px relative" data-name=".div">
                <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] h-[300px] items-end not-italic pt-[50px] relative shrink-0 text-right w-full" data-name=".div">
                  <p className="leading-[52.8px] min-w-full relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.44px] w-[min-content]">1970’s</p>
                  <p className="leading-[23.8px] relative shrink-0 text-[#555] text-[16px] w-[408px]">Family enters the convenience retail and gas station business, gaining firsthand operator experience.</p>
                </div>
                <div className="bg-[#e5e5e5] h-[300px] shrink-0 w-full" data-name="Container" />
                <DivBackgroundImage text="2000’s" text1="The concept for PBD takes shape, a network to give independents the same vendor programs chains rely on." additionalClassNames="items-end text-right" />
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
                <DivBackgroundImage text="1990’s" text1="Operations expand across multiple locations, revealing the vendor access gap between independents and chains." additionalClassNames="items-start" />
                <div className="bg-[#e5e5e5] h-[300px] shrink-0 w-full" data-name="Container" />
                <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[12px] h-[300px] items-start not-italic pt-[50px] relative shrink-0 w-full" data-name=".div">
                  <p className="leading-[52.8px] min-w-full relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.44px] w-[min-content]">Today</p>
                  <p className="leading-[23.8px] relative shrink-0 text-[#555] text-[16px] w-[494px]">PBD coordinates vendor programs across a growing multi-state network of independent convenience stores and gas stations.</p>
                </div>
              </div>
            </div>
          </AboutSectionBackgroundImage>
          <div className="bg-[#111642] h-[792.523px] relative shrink-0 w-full" data-name="WhyChooseSection">
            <div className="absolute h-[16.805px] left-[64px] top-[80px] w-[1211px]" data-name="Paragraph">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#888] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">OUR NETWORK</p>
            </div>
            <div className="absolute content-stretch flex gap-[117px] h-[105.594px] items-start left-[64px] pr-[691px] top-[120.8px] w-[1211px]" data-name="Container">
              <BackgroundImage2 additionalClassNames="h-[105.594px] w-[520px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] left-0 not-italic text-[48px] text-white top-[-1.21px] tracking-[-1.44px] w-[531px]">One network, hundreds of independent stores.</p>
              </BackgroundImage2>
              <BackgroundImage2 additionalClassNames="h-[105.594px] w-[573.5px]">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] left-0 not-italic text-[#f5f5f5] text-[14px] top-0 w-[560px]">PBD organizes independent retailers across multiple states into a coordinated network, giving vendors a reason to invest in your store.</p>
              </BackgroundImage2>
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
                    <ContainerBackgroundImage2 additionalClassNames="w-[573px]">
                      <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                      <AboutSectionBackgroundImageAndText text="Vendor rebate programs" additionalClassNames="w-[235.367px]" />
                    </ContainerBackgroundImage2>
                    <ContainerBackgroundImage2 additionalClassNames="w-[573px]">
                      <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                      <AboutSectionBackgroundImageAndText text="Promotional funding" additionalClassNames="w-[466.68px]" />
                    </ContainerBackgroundImage2>
                    <ContainerBackgroundImage2 additionalClassNames="w-[574px]">
                      <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                      <AboutSectionBackgroundImageAndText text="Merchandising support" additionalClassNames="w-[171.125px]" />
                    </ContainerBackgroundImage2>
                    <ContainerBackgroundImage2 additionalClassNames="w-[574px]">
                      <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                      <AboutSectionBackgroundImageAndText text="Category management programs" additionalClassNames="w-[171.125px]" />
                    </ContainerBackgroundImage2>
                    <ContainerBackgroundImage2 additionalClassNames="w-[574px]">
                      <div className="bg-[#ea1528] shrink-0 size-[6px]" data-name="AboutSection" />
                      <AboutSectionBackgroundImageAndText text="National promotional campaigns" additionalClassNames="w-[171.125px]" />
                    </ContainerBackgroundImage2>
                  </div>
                </div>
                <div className="relative shrink-0" data-name="Link">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center px-[23px] py-[13px] relative">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">See Our Programs</p>
                    <IconBackgroundImage additionalClassNames="relative shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AboutSectionBackgroundImage additionalClassNames="bg-[#fafafa]">
            <ParagraphBackgroundImageAndText text="OUR MODEL" />
            <div className="h-[105.594px] relative shrink-0 w-[1211px]" data-name="Container">
              <div className="absolute h-[105.594px] left-0 top-0 w-[520px]" data-name="Heading 2">
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] left-0 not-italic text-[#0a0a0a] text-[48px] top-[-0.73px] tracking-[-1.44px] w-[520px]">Good for retailers. Good for vendors.</p>
              </div>
              <ParagraphBackgroundImageAndText1 text="A performance-based model with zero fees — we only earn when vendor programs generate results for your store." />
            </div>
            <div className="content-stretch flex gap-[20px] h-[480px] items-start relative shrink-0 w-[1211px]" data-name="Container">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start justify-center min-h-px min-w-px relative" data-name=".div">
                <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px w-full" />
                <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px w-full" />
              </div>
              <div className="bg-[#f5f5f5] flex-[1_0_0] h-full min-h-px min-w-px" />
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] h-full items-start justify-center min-h-px min-w-px relative" data-name=".div">
                <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px w-full" />
                <div className="bg-[#f5f5f5] flex-[1_0_0] min-h-px min-w-px w-full" />
              </div>
            </div>
          </AboutSectionBackgroundImage>
          <div className="bg-gradient-to-b from-[#111642] h-[384.547px] overflow-clip relative shrink-0 to-[#2b38a8] w-full" data-name="CTASection">
            <div className="absolute h-[384.547px] left-0 top-0 w-[1339px]" data-name="Container">
              <div className="absolute h-[384.547px] left-0 top-0 w-[1339px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1339 384.55\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -23.073 -107.12 0 267.8 192.27)\\'><stop stop-color=\\'rgba(234,21,40,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
              <div className="absolute h-[384.547px] left-0 top-0 w-[1339px]" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
              </div>
            </div>
            <div className="absolute h-[192.547px] left-[64px] top-[96px] w-[1211px]" data-name="Container">
              <div className="absolute h-[192.547px] left-0 top-0 w-[679.75px]" data-name="Container">
                <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[120.953px] leading-[60.48px] left-0 not-italic text-[56px] text-white top-0 tracking-[-1.68px] w-[640px] whitespace-nowrap" data-name="Heading 2">
                  <p className="absolute left-0 top-[-1px]">Ready to compete</p>
                  <p className="absolute left-0 top-[59.48px]">like a national chain?</p>
                </div>
                <div className="absolute h-[47.594px] left-0 top-[144.95px] w-[460px]" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.8px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.55)] top-0 w-[455px]">No fees. No royalties. Just vendor programs, rebates, and consulting that grow your store from day one.</p>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[24px] items-end left-[743.75px] top-[102.35px] w-[467.25px]" data-name="Container">
                <div className="h-[47px] relative shrink-0 w-[201.719px]" data-name="Link">
                  <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[25px] not-italic text-[14px] text-white top-[13px] whitespace-nowrap">Become A Member</p>
                    <IconBackgroundImage additionalClassNames="absolute left-[160.72px] top-[15.5px]" />
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Paragraph">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end relative w-full">
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[19.2px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">500+ independent stores already growing with PBD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#d6eefc] h-[706.805px] relative shrink-0 w-full" data-name="ContactFormSection">
            <div className="content-stretch flex flex-col gap-[24px] items-start pt-[80px] px-[64px] relative size-full">
              <div className="h-[16.805px] relative shrink-0 w-full" data-name="Paragraph">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#888] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">Get In Touch</p>
              </div>
              <div className="gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[506px] relative shrink-0 w-full" data-name="Container">
                <div className="col-1 content-stretch flex flex-col items-start justify-between justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                  <BackgroundImage2 additionalClassNames="h-[240.594px] w-[565.5px]">
                    <div className="absolute h-[105.594px] left-0 top-0 w-[480px]" data-name="Heading 2">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[52.8px] left-0 not-italic text-[#0a0a0a] text-[48px] top-[-1px] tracking-[-1.44px] w-[416px]">Ready to grow your store?</p>
                    </div>
                    <div className="absolute content-stretch flex flex-col gap-[16px] h-[95px] items-start left-0 top-[145.59px] w-[565.5px]" data-name="Container">
                      <BackgroundImage2 additionalClassNames="h-[21px] w-[565.5px]">
                        <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[2px]" data-name="Container">
                          <IconBackgroundImage1 />
                        </div>
                        <TextBackgroundImageAndText text="No membership fees or royalties" additionalClassNames="w-[215.109px]" />
                      </BackgroundImage2>
                      <BackgroundImage2 additionalClassNames="h-[21px] w-[565.5px]">
                        <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[2px]" data-name="Container">
                          <IconBackgroundImage1 />
                        </div>
                        <TextBackgroundImageAndText text="Full vendor program access from day one" additionalClassNames="w-[275.336px]" />
                      </BackgroundImage2>
                      <div className="flex-[1_0_0] min-h-px min-w-px relative w-[565.5px]" data-name="ContactFormSection">
                        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                          <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[2px]" data-name="Container">
                            <IconBackgroundImage1 />
                          </div>
                          <div className="absolute h-[21px] left-[28px] top-0 w-[273.789px]" data-name="Text">
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#555] text-[14px] top-0 whitespace-nowrap">{`Dedicated support & merchandising team`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BackgroundImage2>
                  <BackgroundImage2 additionalClassNames="h-[52.805px] w-[565.5px]">
                    <div className="absolute h-[16.805px] left-0 top-0 w-[565.5px]" data-name="ContactFormSection">
                      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] left-0 not-italic text-[#888] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">Or reach us directly</p>
                    </div>
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#111642] text-[14px] top-[29.8px] whitespace-nowrap">info@pbdwest.com</p>
                  </BackgroundImage2>
                </div>
                <div className="bg-white col-2 justify-self-stretch relative rounded-[12px] row-1 self-stretch shrink-0" data-name="Form">
                  <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="content-stretch flex flex-col gap-[24px] items-start pl-[41px] pr-px py-[41px] relative size-full">
                    <ContainerBackgroundImage3 additionalClassNames="h-[70.5px] shrink-0">
                      <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                        <LabelBackgroundImageAndText text="Name" />
                        <BackgroundImageAndText text="Full name" />
                      </div>
                      <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                        <LabelBackgroundImageAndText text="Email" />
                        <BackgroundImageAndText text="you@example.com" />
                      </div>
                    </ContainerBackgroundImage3>
                    <ContainerBackgroundImage3 additionalClassNames="h-[70.5px] shrink-0">
                      <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                        <LabelBackgroundImageAndText text="Contact" />
                        <BackgroundImageAndText text="(000) 000-0000" />
                      </div>
                      <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                        <LabelBackgroundImageAndText text="Store Location" />
                        <BackgroundImageAndText text="City, State" />
                      </div>
                    </ContainerBackgroundImage3>
                    <ContainerBackgroundImage3 additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
                      <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                        <LabelBackgroundImageAndText text="No. of Stores" />
                        <div className="h-[42px] relative rounded-[12px] shrink-0 w-[231.75px]" data-name="Dropdown">
                          <BackgroundImage />
                          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-750.5px] pr-[982.25px] pt-[-8239.352px] relative size-full">
                            <div className="h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                          </div>
                        </div>
                      </div>
                      <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                        <LabelBackgroundImageAndText text="Primary Distributor" />
                        <BackgroundImageAndText text="e.g. Core-Mark, McLane" />
                      </div>
                    </ContainerBackgroundImage3>
                    <ContainerBackgroundImage3 additionalClassNames="h-[69.5px] shrink-0">
                      <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                        <LabelBackgroundImageAndText text="Store Sales Area" />
                        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[231.75px]" data-name="Dropdown">
                          <BackgroundImage />
                          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-750.5px] pr-[982.25px] pt-[-8333.852px] relative size-full">
                            <div className="h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                          </div>
                        </div>
                      </div>
                      <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
                        <LabelBackgroundImageAndText text="Fuel Brand / Unbranded" />
                        <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[231.75px]" data-name="Dropdown">
                          <BackgroundImage />
                          <div aria-hidden="true" className="absolute border border-[#e0e0e0] border-solid inset-0 pointer-events-none rounded-[12px]" />
                          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1002.25px] pr-[1234px] pt-[-8333.852px] relative size-full">
                            <div className="h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                            <div className="bg-white h-0 shrink-0 w-full" data-name="Option" />
                          </div>
                        </div>
                      </div>
                    </ContainerBackgroundImage3>
                    <div className="h-[47px] relative shrink-0 w-[200.195px]" data-name="Button">
                      <div aria-hidden="true" className="absolute border border-[#ea1528] border-solid inset-0 pointer-events-none" />
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[88.5px] not-italic text-[#ea1528] text-[14px] text-center top-[13px] whitespace-nowrap">Submit Application</p>
                        <BackgroundImage1 additionalClassNames="absolute left-[159.2px] top-[15.5px]">
                          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #EA1528)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #EA1528)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                        </BackgroundImage1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#111642] h-[600px] relative shrink-0 w-full" data-name="FooterSection">
          <div className="absolute h-[254.602px] left-[323.15px] top-[345.4px] w-[1092.695px]" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
          </div>
          <div className="absolute content-stretch flex flex-col h-[427.391px] items-start left-0 pt-[80px] px-[64px] top-0 w-[1339px]" data-name="Container">
            <div className="h-[202.391px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute h-[24px] left-0 top-0 w-[103px]" data-name="Container">
                <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 overflow-clip top-0 w-[103px]" data-name="Container">
                  <div className="content-stretch flex flex-col h-0 items-start relative shrink-0 w-full" data-name="Container">
                    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
                      <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[103px]" data-name="Container">
                        <div className="absolute content-stretch flex flex-col h-[18.813px] items-start left-[7.26px] top-[3.11px] w-[12.422px]" data-name="Container">
                          <div className="h-[18.813px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4219 18.8125">
                              <path d={svgPaths.p3214fc00} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.813px] items-start left-0 top-[2.24px] w-[12.367px]" data-name="Container">
                          <div className="h-[18.813px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3672 18.8124">
                              <path d={svgPaths.p1d881080} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[11.688px] items-start left-[2.91px] top-[12.31px] w-[11.313px]" data-name="Container">
                          <div className="h-[11.688px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3125 11.6875">
                              <path d={svgPaths.p1a861300} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[11.617px] items-start left-[5.42px] top-0 w-[11.32px]" data-name="Container">
                          <div className="h-[11.617px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3204 11.6172">
                              <path d={svgPaths.pf6c4300} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.813px] items-start left-[23.2px] top-[2.58px] w-[25.773px]" data-name="Container">
                          <div className="h-[18.813px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7735 18.8125">
                              <path d={svgPaths.p48ffc00} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.781px] items-start left-[49.98px] top-[2.64px] w-[25.953px]" data-name="Container">
                          <div className="h-[18.781px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9532 18.7812">
                              <path d={svgPaths.p10fec600} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute content-stretch flex flex-col h-[18.781px] items-start left-[76.93px] top-[2.64px] w-[26.07px]" data-name="Container">
                          <div className="h-[18.781px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0703 18.7812">
                              <path d={svgPaths.p2142f100} fill="var(--fill-0, white)" id="Vector" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[202.391px] left-[414.33px] top-0 w-[796.672px]" data-name="Container">
                <div className="absolute h-[202.391px] left-0 top-0 w-[233.555px]" data-name="Container">
                  <ParagraphBackgroundImageAndText2 text="COMPANY" additionalClassNames="w-[66.367px]" />
                  <div className="absolute h-[132px] left-0 top-[36.5px] w-[233.555px]" data-name="Container">
                    <BackgroundImageAndText1 text="About Us" additionalClassNames="top-px w-[61.234px]" />
                    <BackgroundImageAndText1 text="PBD Program" additionalClassNames="top-[37px] w-[88.5px]" />
                    <BackgroundImageAndText1 text="Jumpstart Program" additionalClassNames="top-[73px] w-[127.367px]" />
                    <BackgroundImageAndText1 text="How It Works" additionalClassNames="top-[109px] w-[88.469px]" />
                    <BackgroundImageAndText1 text="Vendor Network" additionalClassNames="top-[145px] w-[107.828px]" />
                    <BackgroundImageAndText1 text="Technology" additionalClassNames="top-[181px] w-[77.289px]" />
                  </div>
                </div>
                <div className="absolute h-[202.391px] left-[280.55px] top-0 w-[233.563px]" data-name="Container">
                  <ParagraphBackgroundImageAndText2 text="SUPPORT" additionalClassNames="w-[61.578px]" />
                  <div className="absolute h-[96px] left-0 top-[36.5px] w-[233.563px]" data-name="Container">
                    <BackgroundImageAndText1 text="Contact Us" additionalClassNames="top-px w-[73.727px]" />
                    <BackgroundImageAndText1 text="Privacy Policy" additionalClassNames="top-[37px] w-[92.57px]" />
                    <BackgroundImageAndText1 text="Terms of Service" additionalClassNames="top-[73px] w-[112.758px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[65px] relative shrink-0 w-full" data-name="Container">
              <div className="absolute border-[rgba(255,255,255,0.12)] border-solid border-t h-[65px] left-0 top-0 w-[1211px]" data-name="Container" />
              <div className="absolute h-[32px] left-0 top-[17px] w-[80px]" data-name="Container">
                <div className="absolute border border-solid border-white left-0 rounded-[16777200px] size-[32px] top-0" data-name="Link">
                  <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[14px] top-[8px]" data-name="Container">
                    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[33.33%_8.33%_12.5%_41.67%]" data-name="Vector">
                        <div className="absolute inset-[-7.69%_-8.33%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16664 8.75">
                            <path d={svgPaths.p2aaa4900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-[12.5%] left-[8.33%] right-3/4 top-[37.5%]" data-name="Vector">
                        <div className="absolute inset-[-8.33%_-25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 8.16667">
                            <path d={svgPaths.p2e967600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-3/4 left-[8.33%] right-3/4 top-[8.33%]" data-name="Vector">
                        <div className="absolute inset-[-25%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 3.5">
                            <path d={svgPaths.p2a1ce100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute border border-solid border-white left-[48px] rounded-[16777200px] size-[32px] top-0" data-name="Link">
                  <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[14px] top-[8px]" data-name="Container">
                    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
                      <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                        <div className="absolute inset-[-6.25%_-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 10.5">
                            <path d={svgPaths.p2642ad80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute inset-[29.17%_8.33%_45.85%_8.33%]" data-name="Vector">
                        <div className="absolute inset-[-16.68%_-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8334 4.66442">
                            <path d={svgPaths.p3fe0ad00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute h-[18px] left-[868.77px] top-[24px] w-[342.227px]" data-name="Container">
                <div className="absolute h-[18px] left-0 top-0 w-[216.875px]" data-name="Paragraph">
                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">© 2026 PBD West. All rights reserved.</p>
                </div>
                <div className="absolute content-stretch flex gap-[24px] h-[18px] items-center left-[240.88px] top-0 w-[101.352px]" data-name="Container">
                  <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Link">
                    <BackgroundImageAndText3 text="Privacy" />
                  </div>
                  <div className="h-[18px] relative shrink-0 w-[35.352px]" data-name="Link">
                    <BackgroundImageAndText3 text="Terms" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#111642] h-[79px] left-0 top-0 w-[1339px]" data-name="Navbar">
        <div className="absolute border-[#292d55] border-b border-solid h-[79px] left-0 top-0 w-[1339px]" data-name="Container" />
        <div className="absolute h-[24px] left-[64px] top-[27.5px] w-[103px]" data-name="Link">
          <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 top-0 w-[103px]" data-name="PBDLogo">
            <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
              <div className="absolute contents inset-[0_80.89%_0_0]" data-name="Group">
                <div className="absolute inset-[13%_80.89%_8.65%_7.06%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4115 18.8032">
                    <path d={svgPaths.p66d4b00} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[9.33%_88%_12.32%_0]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3623 18.8027">
                    <path d={svgPaths.p206b5100} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[51.33%_86.18%_0_2.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.316 11.6806">
                    <path d={svgPaths.p39f64e00} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0_83.75%_51.6%_5.27%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3045 11.6154">
                    <path d={svgPaths.p250d5800} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="absolute contents inset-[10.67%_-0.06%_10.77%_22.54%]" data-name="Group">
                <div className="absolute inset-[10.67%_52.43%_10.98%_22.54%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7738 18.8036">
                    <path d={svgPaths.pd6de280} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[11%_26.25%_10.77%_48.56%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9465 18.776">
                    <path d={svgPaths.p23f1f180} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[11%_-0.05%_10.77%_74.75%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0654 18.776">
                    <path d={svgPaths.p3d46780} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[32px] h-[21px] items-center left-[413.09px] top-[29px] w-[444.109px]" data-name="Container">
          <div className="h-[21px] relative shrink-0 w-[87.891px]" data-name="Link">
            <BackgroundImageAndText2 text="How it Works" />
          </div>
          <div className="h-[21px] relative shrink-0 w-[61.234px]" data-name="Link">
            <BackgroundImageAndText2 text="About Us" />
          </div>
          <div className="h-[21px] relative shrink-0 w-[73.727px]" data-name="Link">
            <BackgroundImageAndText2 text="Contact Us" />
          </div>
          <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Link">
            <BackgroundImageAndText2 text="Product Incubation" />
          </div>
        </div>
        <div className="absolute content-stretch flex h-[41px] items-center left-[1103.28px] top-[19px] w-[171.719px]" data-name="Container">
          <div className="flex-[1_0_0] h-[41px] min-h-px min-w-px relative" data-name="Link">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[22px] not-italic text-[14px] text-white top-[10px] whitespace-nowrap">Become A Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}