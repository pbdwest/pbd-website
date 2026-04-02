import clsx from "clsx";
import svgPaths from "./svg-3nnxji4s90";
import imgImageWithFallback from "figma:asset/2a560efaf8266ade3923e055b689c6554d0710f8.png";
type LinkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkText({ text, additionalClassNames = "" }: LinkTextProps) {
  return (
    <div className={clsx("h-[21px] relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="bg-[#111642] relative size-full" data-name="HeroSection">
      <div className="absolute h-[780px] left-0 top-[79px] w-[1339px]" data-name="Container">
        <div className="absolute contents left-0 top-0">
          <div className="absolute border border-[#292d55] border-solid h-[89px] left-[630px] top-0 w-[531px]" />
          <div className="absolute border-[#292d55] border-b border-r border-solid border-t h-[179px] left-[631px] top-[266px] w-[178px]" />
          <div className="absolute border border-[#292d55] border-solid h-[780px] left-0 top-0 w-[631px]" />
          <div className="absolute flex h-[142px] items-center justify-center left-[808px] top-[580px] w-[178px]">
            <div className="-scale-y-100 flex-none">
              <div className="border border-[#292d55] border-solid h-[142px] w-[178px]" />
            </div>
          </div>
          <div className="absolute border-[#292d55] border-b border-l border-r border-solid h-[282px] left-[985px] top-[440px] w-[354px]" />
          <div className="absolute border-[#292d55] border-b border-l border-r border-solid h-[177px] left-[808px] top-[89px] w-[353px]" />
          <div className="absolute border border-[#292d55] border-solid left-[630px] size-[179px] top-[721px]" />
        </div>
        <div className="absolute border-[#292d55] border-[0.5px] border-solid h-[89.371px] left-[1160.26px] top-0 w-[178.741px]" />
        <div className="absolute h-[178.407px] left-[1159.95px] top-[263.51px] w-[179.038px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 179.038 178.407">
            <path d={svgPaths.p3cc53580} id="Rectangle 396" stroke="var(--stroke-0, #292D55)" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="absolute bg-[#ea1528] border-[#292d55] border-[0.5px] border-solid h-[89.371px] left-[427.41px] top-0 w-[204.559px]" />
        <div className="absolute bg-[#ea1528] border-[#292d55] border-[0.5px] border-solid left-[1160.26px] size-[178.741px] top-[87.39px]" />
        <div className="absolute bg-[rgba(234,21,40,0.09)] left-[631px] size-[177px] top-[89px]" />
        <div className="absolute border-[#292d55] border-[0.5px] border-solid left-[806.93px] size-[179.038px] top-[263.51px]" />
        <div className="absolute h-[314px] left-[809px] top-[266px] w-[353px]" data-name="ImageWithFallback">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
        </div>
        <div className="absolute flex h-[77.171px] items-center justify-center left-[1209.91px] top-[138.31px] w-[79.44px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 -scale-y-100 flex-none">
            <div className="h-[79.44px] relative w-[77.171px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.1707 79.4405">
                <path d={svgPaths.p335d0e00} fill="var(--fill-0, white)" id="Vector 541" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[133px] content-stretch flex flex-col gap-[45px] items-start left-[64px] w-[516px]" data-name="Container">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fafafa] text-[17.357px] tracking-[-0.8679px] w-[501px]">Power Buying Dealers</p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[516px]" data-name="Heading 1">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[67.2px] not-italic relative shrink-0 text-[64px] text-white tracking-[-1.92px] w-full">Your independent store competing like a chain.</p>
          </div>
          <div className="bg-white h-[45px] relative shrink-0 w-[199.719px]" data-name="Link">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[24px] not-italic text-[#0a0a0a] text-[14px] top-[12px] whitespace-nowrap">Become A Member</p>
            <div className="absolute left-[159.72px] size-[16px] top-[14.5px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Icon">
                  <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex items-center justify-center left-[665px] top-[34px]" data-name="Paragraph">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#fafafa] text-[17.357px] tracking-[-0.8679px] whitespace-nowrap">Vendor Network • Promotions • Programs</p>
        </div>
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-[807px] not-italic text-[#d4d4d4] text-[14px] top-[602px] w-[355px]">Giving independent C-store owners the marketing support that national chains rely on, at no cost.</p>
      </div>
      <div className="absolute h-[79px] left-0 top-0 w-[1339px]" data-name="Navbar">
        <div className="absolute h-[79px] left-0 top-0 w-[1339px]" data-name="Container" />
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
          <LinkText text="How it Works" additionalClassNames="shrink-0 w-[87.891px]" />
          <LinkText text="About Us" additionalClassNames="shrink-0 w-[61.234px]" />
          <LinkText text="Contact Us" additionalClassNames="shrink-0 w-[73.727px]" />
          <LinkText text="Product Incubation" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
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