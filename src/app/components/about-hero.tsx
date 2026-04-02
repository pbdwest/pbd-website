import { useRef } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "../../imports/svg-3fdk6xx5st";

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[64px] flex flex-col py-16 md:py-20">
        {/* Top Row: Arrow + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Arrow Icon - top left */}
          <div className="lg:col-span-7">
            <svg
              width="47"
              height="48"
              viewBox="0 0 47 48"
              fill="none"
              className="w-[40px] h-[40px] md:w-[47px] md:h-[48px]"
            >
              <path d={svgPaths.p2a444b80} fill="#111642" />
            </svg>
          </div>

          {/* Image + Description - top right */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative">
              {/* Placeholder for image */}
              <div className="w-full aspect-[4/3] bg-gray-200 rounded-[0px] flex items-center justify-center">
                <span className="text-gray-400">[Image placeholder]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Headline + CTA left, Trust bar right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mx-[0px] mt-[-120px] mb-[18px]">
          {/* Headline + CTA */}
          <div className="lg:col-span-7">
            <h1
              className="text-[#111642] tracking-[-0.03em] max-w-[1000px] font-[Inter]"
              style={{
                fontSize: "64px",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Empowering independent retailers
            </h1>

            <p
              className="text-[#666] mt-6 max-w-[600px]"
              style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 }}
            >
              Power Buying Dealers (PBD) is a retail network that connects independent convenience stores, gas stations, and truck stops with national vendor programs, promotional funding, and category management typically available only to large retail chains.
            </p>

            <div className="mt-10 lg:mt-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-[#EA1528] text-[#EA1528] px-6 py-3 hover:bg-[#EA1528] hover:text-white transition-all"
                style={{ fontSize: "0.875rem", fontWeight: 500, borderRadius: "0px" }}
              >
                Join Our Network
              </a>
            </div>
          </div>

          {/* Trust Bar - bottom right */}
          <div className="lg:col-span-5 flex justify-end items-end">
            <p
              className="text-[#888] tracking-[0.15em] uppercase"
              style={{ fontSize: "0.7rem", fontWeight: 400 }}
            >
              Trusted by retailers nationwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
