import clsx from "clsx";
import svgPaths from "./svg-b99e162ar8";
type ATextProps = {
  text: string;
  additionalClassNames?: string;
};

function AText({ text, additionalClassNames = "" }: ATextProps) {
  return (
    <div className={clsx("h-[21px] relative", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-white top-0 whitespace-nowrap">{text}</p>
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <div className="bg-[#111642] content-stretch flex items-center justify-between pb-px px-[64px] relative size-full" data-name="nav">
      <div aria-hidden="true" className="absolute border-[#292d55] border-b border-solid inset-0 pointer-events-none" />
      <div className="h-[24px] relative shrink-0 w-[103px]" data-name="div">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 top-0 w-[103px]" data-name="Container">
            <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="svg">
              <div className="absolute contents inset-0">
                <div className="absolute contents inset-[0_80.9%_0_0]" data-name="Vector">
                  <div className="absolute inset-[12.98%_80.9%_8.68%_7.05%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.4115 18.8032">
                      <path d={svgPaths.p1a7f9d70} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[9.35%_88%_12.3%_0]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3623 18.8028">
                      <path d={svgPaths.p206b5100} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[51.33%_86.19%_0_2.83%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.316 11.6806">
                      <path d={svgPaths.p31a7dc40} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[0_83.75%_51.6%_5.27%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3045 11.6154">
                      <path d={svgPaths.p36279c00} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
                <div className="absolute contents inset-[10.75%_0_10.75%_22.53%]" data-name="Vector_2">
                  <div className="absolute inset-[10.75%_52.45%_10.9%_22.53%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.7737 18.8036">
                      <path d={svgPaths.p1e1ad500} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[11.01%_26.28%_10.75%_48.53%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9464 18.776">
                      <path d={svgPaths.p23f1f180} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                  <div className="absolute inset-[11.01%_0_10.75%_74.69%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.0654 18.776">
                      <path d={svgPaths.p3d46780} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[21px] relative shrink-0 w-[500.422px]" data-name="div">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
          <AText text="Services" additionalClassNames="shrink-0 w-[57.445px]" />
          <AText text="Approach" additionalClassNames="shrink-0 w-[64.516px]" />
          <AText text="Events" additionalClassNames="shrink-0 w-[44.281px]" />
          <AText text="Membership" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
          <AText text="About" additionalClassNames="shrink-0 w-[39.484px]" />
          <AText text="Contact" additionalClassNames="shrink-0 w-[51.984px]" />
        </div>
      </div>
      <div className="h-[39px] relative shrink-0 w-[169.719px]" data-name="div">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
          <div className="flex-[1_0_0] h-[39px] min-h-px min-w-px relative" data-name="a">
            <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[21px] not-italic text-[14px] text-white top-[9px] whitespace-nowrap">Become A Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}