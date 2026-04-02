import { useRef } from "react";
import { motion, useInView } from "motion/react";

// US map image from Figma node 5842-609
const usMapImg = "https://www.figma.com/api/mcp/asset/f4e82986-6991-4b48-b94d-a5285358f6e3";

const stats = [
  { value: "300+", label: "Owner operator trust PBD" },
  { value: "250+", label: "Zipcodes covered across USA" },
  { value: "20+",  label: "Active vendor partnerships" },
  { value: "$4k",  label: "Paid in rebates for each store" },
];

export function WhoWeServeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
      data-navbar-theme="dark"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header */}
        <div className="flex flex-col gap-[36px]">
          <motion.p
            className="text-[#888] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            Who we serve
          </motion.p>
          <motion.h2
            className="text-white"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", maxWidth: "717px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            Serving independent truck stops &amp; c-store operators across US
          </motion.h2>
        </div>

        {/* Two-col: map left, description + stats right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-start">

          {/* Left: US map image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <img
              src={usMapImg}
              alt="PBD West coverage map"
              className="w-full object-cover"
              style={{ height: "394px" }}
            />
          </motion.div>

          {/* Right: description + 2×2 stats */}
          <motion.div
            className="flex flex-col gap-[48px]"
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-[#d4d4d4]" style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5, maxWidth: "560px" }}>
              PBD West bridges that gap, connecting you with vendor rebates, category programs, and promotional funding designed to grow your store.
            </p>

            {/* 2×2 stats grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col gap-4 border-t border-[#292d55] pt-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease: "easeOut" }}
                >
                  <p
                    className="text-white"
                    style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#d4d4d4]" style={{ fontSize: "16px", fontWeight: 400 }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
