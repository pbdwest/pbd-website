import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pdbStoreImage from "figma:asset/87892cdbb39b2f2cd274a236199fa7780ff97325.png";

const bulletPoints = [
  "Unfair advantage over competition",
  "Professional category management in tobacco, beverage, and snack",
  "On-site 1-on-1 consulting",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFFFFF]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Section Label + Headline + Description */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            About Us
          </p>
          {/* Top Row: Headline + Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Headline */}
            <motion.h2
              className="text-[#0a0a0a] max-w-[520px]"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Retail growth network built for c-stores.
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-[#555] max-w-[800px] lg:ml-auto"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              PBD connects independent gas stations, convenience stores, and truck stops with national vendor programs, merchandising support, and promotional funding typically reserved for large chains.
            </motion.p>
          </div>
        </div>

        {/* Bottom Row: Image + Bullets & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <motion.div
            className="relative overflow-hidden rounded-none"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <ImageWithFallback
              src={pdbStoreImage}
              alt="PBD team member in store"
              className="w-full aspect-[4/3] object-cover"
              style={{ objectPosition: "50% 30%" }}
            />
          </motion.div>

          {/* Bullets + CTA */}
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-0">
              {bulletPoints.map((point, index) => (
                <motion.div
                  key={point}
                  className="flex items-center gap-3 py-5 border-b border-[#E0E0E0]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  <span className="w-[6px] h-[6px] shrink-0 bg-[#ea1528] rounded-[0px]" />
                  <span
                    className="text-[#333]"
                    style={{ fontSize: "14.4px", fontWeight: 400 }}
                  >
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            >
              <a
                href="#"
                className="group inline-flex items-center gap-3 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                More about us
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
