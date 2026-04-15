import { useRef } from "react";
import { motion, useInView } from "motion/react";

export function OurModelSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA] py-16 md:py-20 hidden"
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
          Our Model
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-[#0a0a0a] mb-10 md:mb-12"
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
          The numbers prove it
        </motion.h2>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: Purpose-built technology */}
          <motion.div
            className="bg-[#d6eefc] p-6 flex flex-col justify-between min-h-[445px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div>
              <p
                className="text-[#888] uppercase tracking-[0.15em] mb-3"
                style={{ fontSize: "0.7rem", fontWeight: 500 }}
              >
                Softwares
              </p>
              <h3
                className="text-[#0a0a0a] mb-6"
                style={{
                  fontSize: "clamp(24px, 2.5vw, 32px)",
                  fontWeight: 400,
                  lineHeight: 1.375,
                  letterSpacing: "-0.045em",
                }}
              >
                Purpose-built technology
              </h3>
            </div>
            <p
              className="text-[#0a0a0a]"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              Tracks vendor programs, reconciles distributor data, manages
              promotions, and ensures rebate accuracy. Built for convenience
              retail.
            </p>
          </motion.div>

          {/* Card 2: Monthly Rebates - Tall card */}
          <motion.div
            className="bg-[#111642] p-6 flex flex-col justify-between min-h-[445px]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex-1 flex flex-col">
              <p
                className="text-[#888] uppercase tracking-[0.15em] mb-8"
                style={{ fontSize: "0.875rem", fontWeight: 500 }}
              >
                Monthly Rebates
              </p>
              <div className="flex-1 flex items-center justify-center">
                <p
                  className="text-white text-center"
                  style={{
                    fontSize: "clamp(48px, 6vw, 62px)",
                    fontWeight: 600,
                    lineHeight: 1,
                    letterSpacing: "-0.023em",
                  }}
                >
                  ~$6789
                </p>
              </div>
            </div>
            <div className="border-t border-[#414568] pt-5 mt-6">
              <p
                className="text-white"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                Only <span style={{ fontWeight: 700 }}>10%</span> of this
                amount goes to PBD— we only earn when your store earns. If
                vendor programs don't generate results, we don't get paid.
                That's how it should work.
              </p>
            </div>
          </motion.div>

          {/* Card 3 & 4: Right column with stacked cards */}
          <div className="flex flex-col gap-5">
            {/* Top card: Built by store owners */}
            <motion.div
              className="bg-[#f4f4f4] p-6 flex flex-col justify-between flex-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <div>
                <p
                  className="text-[#888] uppercase tracking-[0.15em] mb-3"
                  style={{ fontSize: "0.7rem", fontWeight: 500 }}
                >
                  Retailers
                </p>
                <h3
                  className="text-[#0a0a0a] mb-6"
                  style={{
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    fontWeight: 400,
                    lineHeight: 1.375,
                    letterSpacing: "-0.045em",
                  }}
                >
                  Built by store owners
                </h3>
              </div>
              <p
                className="text-[#0a0a0a]"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                }}
              >
                Created by a family operating gas stations and c-stores since
                the 1970s. We built what we wished we had.
              </p>
            </motion.div>

            {/* Bottom card: No membership fee */}
            <motion.div
              className="bg-[#e3dcfb] p-6 flex items-center justify-center"
              style={{ minHeight: "95px" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            >
              <p
                className="text-[#0a0a0a] text-center"
                style={{
                  fontSize: "clamp(18px, 2vw, 21px)",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  letterSpacing: "-0.05em",
                }}
              >
                No membership fee • No Royalties
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
