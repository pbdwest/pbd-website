import clsx from "clsx";
import svgPaths from "./svg-b69dhnc7wk";
import imgDropdown from "figma:asset/d1f1383aabe54bcab1f8c678f3831dbd9cf0d711.png";
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("relative w-[483.5px]", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[20px] gap-y-[20px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] relative size-full">{children}</div>
    </div>
  );
}

function Image() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
      <div className="absolute bg-[rgba(255,255,255,0.13)] inset-0 rounded-[12px]" />
      <div className="absolute inset-0 overflow-hidden rounded-[12px]">
        <img alt="" className="absolute h-[12.4%] left-0 max-w-none top-[43.8%] w-[4.31%]" src={imgDropdown} />
      </div>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.13)] h-[48.398px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">{text}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(224,224,224,0.17)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}
type LabelTextProps = {
  text: string;
};

function LabelText({ text }: LabelTextProps) {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.5px] left-0 not-italic text-[13px] text-white top-px tracking-[-0.13px] whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function Form() {
  return (
    <div className="bg-[rgba(255,255,255,0.11)] content-stretch flex flex-col gap-[24px] items-start pl-[41px] pr-px py-[41px] relative rounded-[12px] size-full" data-name="Form">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container additionalClassNames="h-[75.898px] shrink-0">
        <div className="col-1 content-stretch flex flex-col gap-[8px] h-[75.898px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <LabelText text="Name" />
          <Text text="Full name" />
        </div>
        <div className="col-2 content-stretch flex flex-col gap-[8px] h-[75.898px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <LabelText text="Email" />
          <Text text="you@example.com" />
        </div>
      </Container>
      <Container additionalClassNames="h-[75.898px] shrink-0">
        <div className="col-1 content-stretch flex flex-col gap-[8px] h-[75.898px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <LabelText text="Contact" />
          <Text text="(000) 000-0000" />
        </div>
        <div className="col-2 content-stretch flex flex-col gap-[8px] h-[75.898px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <LabelText text="Store Location" />
          <Text text="City, State" />
        </div>
      </Container>
      <Container additionalClassNames="h-[75.898px] shrink-0">
        <div className="col-1 content-stretch flex flex-col gap-[8px] h-[75.898px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <LabelText text="No. of Stores" />
          <div className="h-[48.398px] relative rounded-[12px] shrink-0 w-full" data-name="Dropdown">
            <Image />
            <div aria-hidden="true" className="absolute border border-[rgba(224,224,224,0.17)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="absolute left-[-750.5px] size-0 top-[-7852.53px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7852.53px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7852.53px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7852.53px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7852.53px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7852.53px]" data-name="Option" />
          </div>
        </div>
        <div className="col-2 content-stretch flex flex-col gap-[8px] h-[75.898px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <LabelText text="Primary Distributor" />
          <Text text="e.g. Core-Mark, McLane" />
        </div>
      </Container>
      <Container additionalClassNames="flex-[1_0_0] min-h-px min-w-px">
        <div className="col-1 content-stretch flex flex-col gap-[8px] h-[75.898px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <LabelText text="Store Sales Area" />
          <div className="h-[48.398px] relative rounded-[12px] shrink-0 w-full" data-name="Dropdown">
            <Image />
            <div aria-hidden="true" className="absolute border border-[rgba(224,224,224,0.17)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="absolute left-[-750.5px] size-0 top-[-7952.43px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7952.43px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7952.43px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7952.43px]" data-name="Option" />
            <div className="absolute left-[-750.5px] size-0 top-[-7952.43px]" data-name="Option" />
          </div>
        </div>
        <div className="col-2 content-stretch flex flex-col gap-[8px] h-[75.898px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
          <LabelText text="Fuel Brand / Unbranded" />
          <div className="h-[48.398px] relative rounded-[12px] shrink-0 w-full" data-name="Dropdown">
            <Image />
            <div aria-hidden="true" className="absolute border border-[rgba(224,224,224,0.17)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            <div className="absolute left-[-1002.25px] size-0 top-[-7952.43px]" data-name="Option" />
            <div className="absolute left-[-1002.25px] size-0 top-[-7952.43px]" data-name="Option" />
            <div className="absolute left-[-1002.25px] size-0 top-[-7952.43px]" data-name="Option" />
            <div className="absolute left-[-1002.25px] size-0 top-[-7952.43px]" data-name="Option" />
          </div>
        </div>
      </Container>
      <div className="h-[47px] relative shrink-0 w-[225.195px]" data-name="Button">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center p-px relative size-full">
          <div className="flex-[1_0_0] h-[45px] min-h-px min-w-px relative" data-name="Text">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
              <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[87.5px] not-italic text-[14px] text-center text-white top-[12px] whitespace-nowrap">Submit Application</p>
            </div>
          </div>
          <div className="h-[40px] relative shrink-0 w-[49px]" data-name="Text">
            <div aria-hidden="true" className="absolute border-l border-solid border-white inset-0 pointer-events-none" />
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[17px] pr-[16px] relative size-full">
              <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Icon">
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
  );
}