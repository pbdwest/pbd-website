import clsx from "clsx";
import svgPaths from "./svg-xuiwml39zm";
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerProps>) {
  return (
    <div className={clsx("h-[18px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">{children}</div>
    </div>
  );
}

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <Wrapper additionalClassNames={clsx("h-[18px] relative", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[12px] text-white top-[0.5px] whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-white top-px whitespace-nowrap">{text}</p>
    </Wrapper>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return <Text1 text={text} additionalClassNames={clsx("flex-[1_0_0] min-h-px min-w-px relative", additionalClassNames)} />;
}
type ListItemTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ListItemText({ text, additionalClassNames = "" }: ListItemTextProps) {
  return <Text1 text={text} additionalClassNames={clsx("h-[24px] relative shrink-0", additionalClassNames)} />;
}
type ParagraphTextProps = {
  text: string;
};

function ParagraphText({ text }: ParagraphTextProps) {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[11px] text-white top-[0.5px] tracking-[1.32px] uppercase whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function FooterSection() {
  return (
    <div className="bg-[#ec2c3e] relative size-full" data-name="FooterSection">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[347.391px] items-start left-1/2 px-[64px] top-[66.41px] w-[1339px]" data-name="Container">
        <div className="absolute content-stretch flex flex-col h-[254.609px] items-start left-[331px] opacity-5 top-[278px] w-[1092.699px]" data-name="Frame">
          <div className="h-[254.609px] overflow-clip relative shrink-0 w-full" data-name="Icon">
            <div className="absolute contents inset-0">
              <div className="absolute contents inset-[0_80.9%_0_0]" data-name="Vector">
                <div className="absolute inset-[12.97%_80.9%_8.68%_7.05%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.671 199.478">
                    <path d={svgPaths.p98ed100} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[9.35%_88%_12.3%_0]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.148 199.473">
                    <path d={svgPaths.p4dd4c00} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[51.33%_86.19%_0_2.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.048 123.916">
                    <path d={svgPaths.p4df3680} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0_83.75%_51.6%_5.27%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 119.927 123.225">
                    <path d={svgPaths.p39852ec0} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
              </div>
              <div className="absolute contents inset-[10.75%_0_10.76%_22.53%]" data-name="Vector_2">
                <div className="absolute inset-[10.75%_52.45%_10.9%_22.53%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 273.426 199.482">
                    <path d={svgPaths.p2a142380} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[11.01%_26.28%_10.76%_48.53%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 275.258 199.189">
                    <path d={svgPaths.p180b4600} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[11.01%_0_10.76%_74.7%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 276.52 199.189">
                    <path d={svgPaths.p2dd8fc00} fill="var(--fill-0, white)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[202.391px] relative shrink-0 w-full" data-name="Container">
          <div className="absolute h-[202.391px] left-0 top-0 w-[382.328px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col h-[24px] items-start left-0 top-0 w-[103px]" data-name="Frame">
              <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
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
          <div className="absolute h-[202.391px] left-[414.33px] top-0 w-[796.672px]" data-name="Container">
            <div className="absolute content-stretch flex flex-col gap-[20px] h-[202.391px] items-start left-0 top-0 w-[233.555px]" data-name="Container">
              <ParagraphText text="Company" />
              <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="List">
                <ListItemText text="About Us" additionalClassNames="w-[233.555px]" />
                <ListItemText text="How It Works" additionalClassNames="w-[233.555px]" />
                <ListItemText text="Product Incubation" additionalClassNames="w-[233.555px]" />
                <Text text="Technologies" additionalClassNames="w-[233.555px]" />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[20px] h-[202.391px] items-start left-[280.55px] top-0 w-[233.563px]" data-name="Container">
              <ParagraphText text="Support" />
              <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
                <ListItemText text="Contact Us" additionalClassNames="w-[233.563px]" />
                <ListItemText text="Privacy Policy" additionalClassNames="w-[233.563px]" />
                <Text text="Terms of Service" additionalClassNames="w-[233.563px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[65px] items-center justify-between pt-px relative shrink-0 w-full" data-name="Container">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.12)] border-solid border-t inset-0 pointer-events-none" />
          <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Container">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
              <div className="relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Link">
                <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16777200px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                  <Icon>
                    <path d={svgPaths.p17d70d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.p73a5000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.p34626280} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </Icon>
                </div>
              </div>
              <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Link">
                <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[16777200px]" />
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
                  <Icon>
                    <path d={svgPaths.p5c184f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                    <path d={svgPaths.p2a640080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  </Icon>
                </div>
              </div>
            </div>
          </div>
          <Container additionalClassNames="w-[342.227px]">
            <Text2 text="© 2026 PBD West. All rights reserved." additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
            <Container additionalClassNames="w-[101.359px]">
              <Text2 text="Privacy" additionalClassNames="flex-[1_0_0] min-h-px min-w-px" />
              <Text2 text="Terms" additionalClassNames="shrink-0 w-[35.359px]" />
            </Container>
          </Container>
        </div>
      </div>
    </div>
  );
}