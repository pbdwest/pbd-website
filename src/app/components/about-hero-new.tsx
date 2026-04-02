import { useRef } from "react";
import { motion, useInView } from "motion/react";
import svgPaths from "../../imports/svg-3fdk6xx5st.ts";
import imgBusinesswoman from "figma:asset/a5b6ac1dfc15e1ce1a05e026f05c84e1e5cfc2bc.png";
import imgImage1728 from "figma:asset/b583670b653c969a86374ca6d6dd231a8e821663.png";

export function AboutHeroNew() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111642] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", paddingTop: "79px" }}
      data-navbar-theme="dark"
    >
      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[80px] py-16 md:py-20">
        {/* Top Row: Headline + Description */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[20px] items-end">
          {/* Headline - left */}
          <motion.div
            className="flex-shrink-0 lg:w-[686px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1
              className="text-white"
              style={{
                fontSize: "64px",
                fontWeight: 400,
                lineHeight: "67.2px",
                letterSpacing: "-1.92px",
              }}
            >
              Built for<br />Independent Retailers
            </h1>
          </motion.div>

          {/* Description - right */}
          <motion.div
            className="flex-1 flex items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p
              className="text-[#e5e5e5]"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25.6px",
              }}
            >
              Power Buying Dealers (PBD) gives independent c-store owners the same vendor programs, promotional funding, and buying power that national chains rely on
            </p>
          </motion.div>
        </div>

        {/* Bottom Row: 3 Cards */}
        <div className="flex flex-col lg:flex-row gap-[31px] items-start px-[90px] py-[0px] relative">
          {/* Card 1: Light Blue Info Card - slides from center to left */}
          <motion.div
            className="flex-1 h-[357px] bg-[#d6eefc] p-[24px] flex flex-col justify-between"
            initial={{ opacity: 0, x: "calc(100% + 31px)" }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[#1e1e1e]"
              style={{
                fontSize: "14.4px",
                fontWeight: 400,
                lineHeight: "21.6px",
              }}
            >
              PBD organizes independent stores into a network that gives vendors a reason to invest in your store with the same programs they run through national chains.
            </p>

            <div className="flex flex-col gap-[12px]">
              {/* Bullet 1 */}
              <div className="flex gap-[12px] items-start">
                <div className="shrink-0 w-[6px] h-[6px] bg-[#ea1528] mt-[7px]" />
                <p
                  className="text-black"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18.6px",
                  }}
                >
                  Access vendor rebates and promotional funding
                </p>
              </div>

              {/* Bullet 2 */}
              <div className="flex gap-[12px] items-start">
                <div className="shrink-0 w-[6px] h-[6px] bg-[#ea1528] mt-[7px]" />
                <p
                  className="text-black"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18.6px",
                  }}
                >
                  Get merchandising and category support
                </p>
              </div>

              {/* Bullet 3 */}
              <div className="flex gap-[12px] items-center">
                <div className="shrink-0 w-[6px] h-[6px] bg-[#ea1528]" />
                <p
                  className="text-black whitespace-nowrap"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "21.6px",
                  }}
                >
                  Pay zero fees — ever
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Center Image - visible from start */}
          <motion.div
            className="w-full lg:w-[311px] h-[357px] overflow-hidden flex items-center justify-center relative z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src={imgImage1728}
              alt="Store employee with customer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Card 3: White Stats Card - slides from center to right */}
          <motion.div
            className="flex-1 h-[357px] bg-white p-[24px] flex flex-col justify-between"
            initial={{ opacity: 0, x: "calc(-100% - 31px)" }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-[#525252] uppercase"
              style={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22.4px",
              }}
            >
              years in business
            </p>

            <div className="flex flex-col gap-[10px]">
              <p
                className="text-[#111642] whitespace-nowrap"
                style={{
                  fontSize: "72px",
                  fontWeight: 700,
                  lineHeight: "72px",
                  letterSpacing: "-2.16px",
                }}
              >
                50+
              </p>
              <p
                className="text-[#525252]"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "22.4px",
                }}
              >
                Years experience operating convenience stores and gas stations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}