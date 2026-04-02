import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import imgConsulting from "figma:asset/e8f73d7d653cc44c84744f44670683aadbe542fb.png";
import img1 from "figma:asset/f00d5f6a05558cfb901d29c168c2d081ec0ec74e.png";
import img2 from "figma:asset/4c132584feb98c774d410c0d060e4a6726a40834.png";
import img3 from "figma:asset/8b03b253c3e6772fb6e91cf651581cf741bbdc80.png";

const reasons = [
  {
    title: "Consulting from real operators",
    description:
      "One-on-one consulting from people who've run stores. Our team understands your day-to-day because they've lived it — practical advice, not theory.",
    tags: ["1-on-1 consulting", "Operator-led", "In-store visits"],
    image: imgConsulting,
  },
  {
    title: "Unmatched vendor relationships",
    description:
      "30+ years of vendor relationships — chains can't match. Access national rebate programs and promotional funding typically reserved for large retailers.",
    tags: ["30+ years", "National programs", "Vendor access"],
    image: img1,
  },
  {
    title: "Results you can measure",
    description:
      "Every program tied to a measurable result. From rebate tracking to category performance, you'll see exactly how PBD impacts your bottom line.",
    tags: ["Measurable ROI", "Performance tracking", "Data-driven"],
    image: img2,
  },
  {
    title: "Built-in vendor support",
    description:
      "Built-in vendor support through PBD's relationships. We handle merchandising, program compliance, and promotional execution so you can focus on your store.",
    tags: ["Merchandising", "Compliance", "Vendor management"],
    image: img3,
  },
];

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReason = reasons[activeIndex >= 0 ? activeIndex : 0];

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header: Label + Headline */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#888] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Why PBD
          </p>
          <motion.h2
            className="text-white max-w-[520px]"
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
            Built by store owners,{" "}
            for store owners.
          </motion.h2>
        </div>

        {/* Bottom Row: Accordion left + Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Accordion List */}
          <div>
            {reasons.map((reason, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={reason.title}
                  className="border-t border-[#333] last:border-b"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                    className="w-full flex items-center gap-3 py-5 text-left cursor-pointer group"
                  >
                    <span
                      className={`w-[6px] h-[6px] shrink-0 transition-colors rounded-[0px] ${
                        isActive ? "bg-[#ea1528]" : "bg-[#666]"
                      }`}
                    />
                    <span
                      className={`transition-colors ${
                        isActive ? "text-white" : "text-[#aaa]"
                      } group-hover:text-white`}
                      style={{
                        fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.4,
                      }}
                    >
                      {reason.title}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pl-[18px]">
                          <p
                            className="text-[#d4d4d4] mb-4 max-w-[440px]"
                            style={{
                              fontSize: "16px",
                              fontWeight: 400,
                              lineHeight: 1.7,
                            }}
                          >
                            {reason.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {reason.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-[#444] text-[#d4d4d4] px-3 py-1"
                                style={{
                                  fontSize: "11.2px",
                                  fontWeight: 400,
                                  lineHeight: 1.5,
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Image */}
          <motion.div
            className="relative overflow-hidden rounded-none"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <ImageWithFallback
                  src={activeReason.image}
                  alt={activeReason.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
