import { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgImage1770 from "../../assets/ServicesSection.png";
import imgPicture21 from "../../assets/arrow-blue.png";
import imgFrame from "../../assets/ServicesSection2.png";


export function BeforeAfterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#fafafa]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-14 md:py-20 flex flex-col gap-10 md:gap-[56px] items-center">

        {/* Header */}
        <div className="flex flex-col gap-6 w-full">
          <motion.p
            className="text-[#888] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500, lineHeight: "16.8px" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            THE TRANSFORMATION
          </motion.p>
          <motion.p
            className="text-[#111642]"
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 400,
              lineHeight: "1.1",
              letterSpacing: "-1.44px",
              maxWidth: "557px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            This is what we actually do to your store.
          </motion.p>
        </div>

        {/* Before / Arrow / After */}
        <div className="flex flex-col md:flex-row gap-6 md:items-center w-full">

          {/* ── Before column ── */}
          <motion.div
            className="flex flex-col flex-1 h-full min-w-0"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Image — fills available height */}
            <div className="relative overflow-hidden h-[240px] sm:h-[300px] md:h-[360px] lg:h-[390px] xl:h-[420px]">
              <img
                alt="Before — disorganized store"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgImage1770}
              />
            </div>

            {/* Caption */}
            <div className="flex flex-col gap-2 pt-4 shrink-0">
              {/* Badge */}
              <div
                className="flex items-center justify-center px-3 py-2 border border-[#d4d4d4] w-fit"
                style={{ background: "#e5e5e5" }}
              >
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "16.5px", color: "#000" }}>
                  Before
                </p>
              </div>
              {/* Title */}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "27px",
                  letterSpacing: "-0.18px",
                  color: "#0a0a0a",
                }}
              >
                Disorganized. Underfunded. Invisible.
              </p>
              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.1px",
                  color: "#555",
                  maxWidth: "469px",
                }}
              >
                Messy tobacco backbar, no promotional signage, missing out on chain-level contracts.
              </p>
            </div>
          </motion.div>

          {/* ── Arrow button ── */}
          <motion.div
            className="flex items-center overflow-hidden p-2 shrink-0 self-start md:self-center"
            style={{ background: "#0f143b" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative size-[32px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgPicture21} />
            </div>
          </motion.div>

          {/* ── After column ── */}
          <motion.div
            className="flex flex-col flex-1 h-full min-w-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            {/* Image — fills available height */}
            <div className="relative overflow-hidden h-[240px] sm:h-[300px] md:h-[360px] lg:h-[390px] xl:h-[420px]">
              <img
                alt="After — professional store"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgFrame}
              />
            </div>

            {/* Caption */}
            <div className="flex flex-col gap-2 pt-4 shrink-0">
              {/* Badge */}
              <div
                className="flex items-center justify-center px-3 py-2 border border-[#d4d4d4] w-fit"
                style={{ background: "#ea1528" }}
              >
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "16.5px", color: "#fff" }}>
                  After
                </p>
              </div>
              {/* Title */}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "27px",
                  letterSpacing: "-0.18px",
                  color: "#0a0a0a",
                }}
              >
                Professional. Funded. Competing like a chain.
              </p>
              {/* Description */}
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "22.1px",
                  color: "#555",
                  maxWidth: "469px",
                }}
              >
                National contracts activated and promotional signage installed — all at no cost.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
