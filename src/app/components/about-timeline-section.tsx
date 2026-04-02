import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

// Images from Figma node 5842-572
const img1970s  = "https://www.figma.com/api/mcp/asset/53d70d3f-d842-4802-ac22-943640a53a99"; // Charles Khalil at Mobil
const img1990s  = "https://www.figma.com/api/mcp/asset/d1094450-7ef8-4779-b89a-baee494bc3ff"; // Mobil station exterior
const img2000s  = "https://www.figma.com/api/mcp/asset/a8352944-49a9-4d0b-ae4f-36a6cf9083b7"; // Fuel Up station
const imgToday  = "https://www.figma.com/api/mcp/asset/5278e4f1-361e-41b1-b32f-a3a96098a92f"; // Modern station
const imgCharles = "https://www.figma.com/api/mcp/asset/db6d3b62-2a33-4529-8d0d-c4113f5d803b"; // Charles close-up

export function AboutTimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAFAFA]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">

        {/* Section header */}
        <div className="flex flex-col gap-6 mb-[56px]">
          <motion.p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            OUR JOURNEY
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-[64px] items-start">
            <motion.h2
              className="flex-1 text-[#0a0a0a]"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Five decades of building for independents.
            </motion.h2>
            <motion.p
              className="flex-1 text-[#555]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              From a single family-run store to a national network serving hundreds of independent retailers.
            </motion.p>
          </div>
        </div>

        {/* Timeline: left col | center line | right col */}
        <div
          ref={timelineRef}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2px_1fr] gap-[60px]"
        >
          {/* ── Left column ── */}
          <div className="flex flex-col gap-[60px]">

            {/* 1970s — text left */}
            <motion.div
              className="flex flex-col gap-3 pt-[50px] h-[300px] w-full items-end text-right"
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.15], [0, 1]),
                x: useTransform(scrollYProgress, [0, 0.15], [-30, 0]),
              }}
            >
              <p className="text-[#0a0a0a] w-full text-right" style={{ fontSize: "48px", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em" }}>1970's</p>
              <p className="text-[#555] max-w-[383px] text-right" style={{ fontSize: "16px", lineHeight: 1.5 }}>
                <span className="font-bold text-[#ec2c3e]">Charles Khalil</span>
                {" enters the convenience retail and gas station business, gaining firsthand insight into the challenges of small business ownership in a competitive marketplace"}
              </p>
            </motion.div>

            {/* Charles close-up image */}
            <motion.div
              className="h-[300px] w-full overflow-hidden"
              style={{
                opacity: useTransform(scrollYProgress, [0.2, 0.35], [0, 1]),
                x: useTransform(scrollYProgress, [0.2, 0.35], [-30, 0]),
              }}
            >
              <img src={imgCharles} alt="Charles Khalil" className="w-full h-full object-cover" />
            </motion.div>

            {/* 2000s — text left */}
            <motion.div
              className="flex flex-col gap-3 pt-[50px] h-[300px] w-full items-end text-right"
              style={{
                opacity: useTransform(scrollYProgress, [0.5, 0.65], [0, 1]),
                x: useTransform(scrollYProgress, [0.5, 0.65], [-30, 0]),
              }}
            >
              <p className="text-[#0a0a0a] w-full text-right" style={{ fontSize: "48px", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em" }}>2000's</p>
              <p className="text-[#555] max-w-[383px] text-right" style={{ fontSize: "16px", lineHeight: 1.5 }}>
                The concept for PBD takes shape, a network to give independents the same vendor programs chains rely on.
              </p>
            </motion.div>

            {/* Today station image */}
            <motion.div
              className="h-[300px] w-full overflow-hidden"
              style={{
                opacity: useTransform(scrollYProgress, [0.8, 0.95], [0, 1]),
                x: useTransform(scrollYProgress, [0.8, 0.95], [-30, 0]),
              }}
            >
              <img src={imgToday} alt="Modern gas station" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* ── Center timeline line ── */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 w-[2px] bg-[rgba(17,22,66,0.1)]" />
            <div className="absolute top-0 left-0 w-[2px] h-[34px] bg-[#EA1528]" />
            <div className="absolute top-[29px] left-[-4px] w-[10px] h-[10px] bg-[#EA1528]" />
            <motion.div
              className="absolute top-0 left-0 w-[2px] origin-top bg-[#ea1528]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-[60px]">

            {/* 1970s image */}
            <motion.div
              className="h-[300px] w-full overflow-hidden"
              style={{
                opacity: useTransform(scrollYProgress, [0.05, 0.2], [0, 1]),
                x: useTransform(scrollYProgress, [0.05, 0.2], [30, 0]),
              }}
            >
              <img src={img1970s} alt="Mobil station 1970s" className="w-full h-full object-cover" />
            </motion.div>

            {/* 1990s — text right */}
            <motion.div
              className="flex flex-col gap-3 pt-[50px] h-[300px] items-start text-left"
              style={{
                opacity: useTransform(scrollYProgress, [0.3, 0.45], [0, 1]),
                x: useTransform(scrollYProgress, [0.3, 0.45], [30, 0]),
              }}
            >
              <p className="text-[#0a0a0a]" style={{ fontSize: "48px", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em" }}>1990's</p>
              <p className="text-[#555] max-w-[450px]" style={{ fontSize: "16px", lineHeight: 1.5 }}>
                {"In 1994, we expanded our impact by introducing product incubation to our capabilities—leading to the successful launch of "}
                <span className="font-bold text-[#ec2c3e]">Convenience Valet</span>
                {" and cementing our role as a forward-thinking force in the industry."}
              </p>
            </motion.div>

            {/* 2000s station image */}
            <motion.div
              className="h-[300px] w-full overflow-hidden"
              style={{
                opacity: useTransform(scrollYProgress, [0.55, 0.7], [0, 1]),
                x: useTransform(scrollYProgress, [0.55, 0.7], [30, 0]),
              }}
            >
              <img src={img2000s} alt="Fuel Up station 2000s" className="w-full h-full object-cover" />
            </motion.div>

            {/* Today — text right */}
            <motion.div
              className="flex flex-col gap-3 pt-[50px] h-[300px] items-start text-left"
              style={{
                opacity: useTransform(scrollYProgress, [0.75, 0.9], [0, 1]),
                x: useTransform(scrollYProgress, [0.75, 0.9], [30, 0]),
              }}
            >
              <p className="text-[#0a0a0a]" style={{ fontSize: "48px", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em" }}>Today</p>
              <p className="text-[#555] max-w-[494px]" style={{ fontSize: "16px", lineHeight: 1.5 }}>
                {"Today, "}
                <span className="font-bold text-[#ec2c3e]">Jacque Khalil</span>
                {"—Charles' son—leads as Managing Partner, continuing his father's legacy of supporting independent and family-owned gas retailers, now with the added advantage of a tech-driven vision to help members thrive in a rapidly evolving industry."}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
