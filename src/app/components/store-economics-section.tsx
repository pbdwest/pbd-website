import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function StoreEconomicsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFFFFF] py-16 md:py-24"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Label */}
        <motion.p
          className="text-[#999] uppercase tracking-[0.15em] mb-6"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          EXAMPLE STORE ECONOMICS
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-[#0a0a0a] mb-12 max-w-[700px]"
          style={{
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          Example quarterly vendor rebates
        </motion.h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Visual Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* Total Rebates Generated */}
            <div className="mb-10">
              <p
                className="text-[#666] mb-3"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Vendor Rebates Generated
              </p>
              <div
                className="text-[#111642]"
                style={{
                  fontSize: "clamp(48px, 6vw, 72px)",
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                $40,000
              </div>
            </div>

            {/* Visual Bar Breakdown */}
            <div className="space-y-6">
              {/* Retailer Receives Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[#0a0a0a]"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Retailer Receives
                  </span>
                  <span
                    className="text-[#111642]"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    $36,000
                  </span>
                </div>
                <div className="h-3 bg-[#f0f0f0] overflow-hidden">
                  <motion.div
                    className="h-full bg-[#111642]"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "90%" } : {}}
                    transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  />
                </div>
                <p
                  className="text-[#999] mt-1"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                >
                  90% of rebates
                </p>
              </motion.div>

              {/* PBD Program Fee Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[#0a0a0a]"
                    style={{
                      fontSize: "1rem",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    PBD Program Fee
                  </span>
                  <span
                    className="text-[#EA1528]"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    $4,000
                  </span>
                </div>
                <div className="h-3 bg-[#f0f0f0] overflow-hidden">
                  <motion.div
                    className="h-full bg-[#EA1528]"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "10%" } : {}}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                  />
                </div>
                <p
                  className="text-[#999] mt-1"
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 400,
                  }}
                >
                  10% performance-based fee
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Key Message */}
          <motion.div
            className="bg-[#111642] p-8 md:p-12"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <div className="space-y-6">
              {/* Icon */}
              <div className="w-12 h-12 bg-[#EA1528] flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    fill="white"
                  />
                </svg>
              </div>

              {/* Headline */}
              <h3
                className="text-white"
                style={{
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                PBD is growth driven, we grow with you
              </h3>

              {/* Description */}
              <p
                className="text-[#d4d4d4]"
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
              >
                PBD earns when your store performs, as our incentives are
                aligned with helping your store grow.
              </p>

              {/* Key Points */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#EA1528] mt-2 shrink-0" />
                  <p
                    className="text-[#d4d4d4]"
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    No upfront fees or membership costs
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#EA1528] mt-2 shrink-0" />
                  <p
                    className="text-[#d4d4d4]"
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    Fee based only on rebates you generate
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#EA1528] mt-2 shrink-0" />
                  <p
                    className="text-[#d4d4d4]"
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    Your success is our success
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}