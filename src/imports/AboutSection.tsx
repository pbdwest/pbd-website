export default function AboutSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start px-[64px] py-[80px] relative size-full" data-name="AboutSection">
      <div className="h-[16.805px] relative shrink-0 w-[1211px]" data-name="Paragraph">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] left-0 not-italic text-[#999] text-[11.2px] top-[0.5px] tracking-[1.68px] uppercase whitespace-nowrap">OUR STORY</p>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#262626] text-[0px] text-[40px] tracking-[-3.44px] w-full">
          <span className="leading-[57px]">{`Our family has been running gas stations and `}</span>
          <span className="leading-[57px] text-[rgba(38,38,38,0.5)]">{`convenience stores since the early 1970s. We saw firsthand how national chains had access to vendor programs, promotional funding, and support that independent operators simply couldn't reach. PBD was created to close that gap — built by retailers, not consultants."`}</span>
        </p>
      </div>
    </div>
  );
}