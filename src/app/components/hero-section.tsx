import { ArrowRight } from "lucide-react";
import divBgImage from "../../assets/div.png";

export function HeroSection() {
  return (
    <section
      className="relative bg-[#111642] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", minHeight: "clamp(720px, 100dvh, 980px)" }}
    >
      {/* Main compositional grid container - desktop only */}
      <div className="hidden lg:block relative w-full mx-auto" style={{ maxWidth: "1339px", height: "clamp(720px, 100dvh, 980px)" }}>
        
        {/* Grid background image */}
        <div
          className="absolute left-0 top-[46px] w-full h-[calc(100%-79px)] pointer-events-none bg-right bg-bottom bg-no-repeat bg-contain"
          style={{ backgroundImage: `url(${divBgImage})` }}
        />

        {/* Content Layer - positioned using grid percentages */}
        <div className="absolute left-0 top-[46px] w-full h-[calc(100%-79px)]">
          
          {/* Main headline and CTA - vertically centered left */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8 xl:px-4 2xl:px-0"
          >
            <div className="flex flex-col gap-8 max-w-[clamp(360px,46vw,606px)]">
            {/* Eyebrow text */}
            <p
              className="text-white/40"
              style={{
                fontSize: "clamp(28px,2.8vw,39px)",
                fontWeight: 400,
                letterSpacing: "-0.08em",
                lineHeight: "1.2",
              }}
            >
              Power Buying Dealers
            </p>

            {/* Headline + Subtitle group */}
            <div className="flex flex-col gap-[8px]">
              {/* Main Headline */}
              <h1
                className="text-white"
                style={{
                  fontSize: "clamp(38px,4.2vw,56px)",
                  fontWeight: 400,
                  lineHeight: "1.15",
                  letterSpacing: "-0.06em",
                }}
              >
                A national retail network for independent operators
              </h1>

            </div>

            {/* CTA Button */}
            <a
              href="/join"
              className="inline-flex items-center gap-[22px] bg-white text-[#0a0a0a] px-[24px] py-[12px] hover:bg-[#EA1528] hover:text-white transition-all w-fit"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              Join the Network
              <ArrowRight size={16} />
            </a>
            </div>
          </div>

        </div>

        {/* Navbar - positioned at top */}
        <div className="absolute left-0 top-0 w-full h-[79px] px-6 md:px-10 lg:px-16">
          {/* Navbar content stays as is - not modifying per user request */}
        </div>
      </div>

      {/* Mobile/tablet view */}
      <div className="lg:hidden relative min-h-[calc(100dvh-20px)] md:min-h-[calc(100dvh-79px)] ">
        {/* Background image layer */}
        <div
          className="absolute inset-0 pointer-events-none bg-right-bottom bg-no-repeat bg-contain opacity-95"
          style={{ backgroundImage: `url(${divBgImage})` }}
        />

        {/* Content layer */}
        <div className="relative z-10 px-6 md:px-10 pt-[calc(79px+40px)] pb-14">
          <div className="flex flex-col gap-7 max-w-[min(92vw,620px)]">
            <p
              className="text-white/40"
              style={{
                fontSize: "clamp(24px,4.8vw,34px)",
                fontWeight: 400,
                letterSpacing: "-0.06em",
                lineHeight: "1.2",
              }}
            >
              Power Buying Dealers
            </p>

            <h1
              className="text-white"
              style={{
                fontSize: "clamp(34px,7vw,52px)",
                fontWeight: 400,
                lineHeight: "1.12",
                letterSpacing: "-0.05em",
              }}
            >
              A national retail network for independent operators
            </h1>

            <a
              href="#"
              className="inline-flex items-center gap-[22px] bg-white text-[#0a0a0a] px-[24px] py-[12px] hover:bg-[#EA1528] hover:text-white transition-all w-fit"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              Join the Network
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}