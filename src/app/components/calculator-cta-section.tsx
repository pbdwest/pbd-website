import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import calcBgImg from "../../assets/CTASection.png";
import { useIsMobile } from "./ui/use-mobile";


export function CalculatorCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const isMobile = useIsMobile();
  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "linear-gradient(180deg, #111642 0%, #2B38A8 100%)",
      }}
      data-navbar-theme="dark"
    >
      {/* Dot-grid / texture overlay */}
      <img
        src={calcBgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
      />
      {/* Radial red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 20% 50%, rgba(234,21,40,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-[40px] md:py-[80px] flex flex-col lg:flex-row items-end justify-between gap-[56px]">
        {/* Left: heading + subtext */}
        <div className="flex flex-col gap-[29px] max-w-[680px]">
          <motion.h2
            className="text-white"
            style={{
              fontSize: isMobile ?  "clamp(26px, 3vw, 32px)" : "clamp(36px, 5vw, 65px)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.026em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            See the financial impact
          </motion.h2>
          <motion.p
            className="text-white"
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5, maxWidth: "616px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Estimate how PBD programs can impact your store-level rebates and profitability based on your size, programs, and distributor relationships.
          </motion.p>
        </div>

        {/* Right: CTA button */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <Link
            to="/rebate-calculator"
            className="inline-flex items-center gap-2 bg-[#EA1528] border border-[#EA1528] text-white px-[25px] py-[13px] hover:bg-white hover:text-[#EA1528] transition-all group"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Estimate your rebate opportunity
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
