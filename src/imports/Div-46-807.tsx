import clsx from "clsx";
import svgPaths from "./svg-3fdk6xx5st";
import imgImageWithFallback from "figma:asset/2a560efaf8266ade3923e055b689c6554d0710f8.png";
import imgShape1 from "figma:asset/98821f964f84d9b3aaa269b181e8e821ace81088.png";
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

export default function Div() {
  return (
    <div className="bg-[#111642] content-stretch flex flex-col gap-[20px] items-start px-[64px] py-[60px] relative size-full" data-name="div">
      <div className="h-[674.094px] relative shrink-0 w-full" data-name="Container">
        <div className="absolute h-[674.094px] left-0 top-0 w-[686.414px]" data-name="Container">
          <div className="absolute h-[48px] left-0 top-0 w-[47px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 48">
              <path d={svgPaths.p2a444b80} fill="var(--fill-0, #FAFAFA)" id="Vector 542" />
            </svg>
          </div>
          <div className="absolute font-['Inter:Regular',sans-serif] font-normal h-[134.391px] leading-[67.2px] left-0 not-italic text-[64px] text-white top-[380.7px] tracking-[-1.92px] w-[686.414px] whitespace-nowrap" data-name="h1">
            <p className="absolute left-0 top-[-0.5px]">Your independant store</p>
            <p className="absolute left-0 top-[66.7px]">competing like a chain.</p>
          </div>
          <div className="absolute content-stretch flex h-[47px] items-center left-0 top-[563.09px] w-[686.414px]" data-name="Container">
            <div className="h-[47px] relative shrink-0 w-[238.719px]" data-name="a">
              <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center p-px relative size-full">
                <div className="flex-[1_0_0] h-[45px] min-h-px min-w-px relative" data-name="span">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[24px] not-italic text-[14px] text-white top-[12px] whitespace-nowrap">Become A Member</p>
                  </div>
                </div>
                <div className="h-[40px] relative shrink-0 w-[49px]" data-name="span">
                  <div aria-hidden="true" className="absolute border-l border-solid border-white inset-0 pointer-events-none" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[17px] pr-[16px] relative size-full">
                    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="ArrowRight">
                      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                        <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
                          <div className="absolute inset-[-0.67px_-7.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 1.33333">
                              <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
                          <div className="absolute inset-[-7.14%_-14.29%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10.6667">
                              <path d={svgPaths.p3f0cc030} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[24px] h-[426.234px] items-start left-[734.41px] top-0 w-[476.586px]" data-name="Container">
          <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-[476.586px]" data-name="ImageWithFallback">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImageWithFallback} />
          </div>
          <Wrapper additionalClassNames="h-[44.797px] w-[420px]">
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#d4d4d4] text-[14px] top-[0.5px] w-[415px]">Giving independent C-store owners the marketing support that national chains rely on, at no cost.</p>
          </Wrapper>
        </div>
      </div>
      <div className="absolute h-[831px] left-0 top-0 w-[1339px]" data-name="shape 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShape1} />
      </div>
      <div className="content-stretch flex h-[16.805px] items-center justify-between relative shrink-0 w-full" data-name="Container">
        <div className="shrink-0 size-0" data-name="Container" />
        <Wrapper additionalClassNames="h-[16.805px] w-[334.898px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.8px] left-0 not-italic text-[#888] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">Vendor Network • Promotions • Programs</p>
        </Wrapper>
      </div>
    </div>
  );
}