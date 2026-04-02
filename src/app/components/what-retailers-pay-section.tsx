import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhatRetailersPaySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const benefits = [
    {
      text: "No membership fees",
      image: "https://images.unsplash.com/photo-1771033834141-023d630b3965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MzMwOTc0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      text: "No royalties",
      image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm1hcmtldCUyMGlzbGV8ZW58MXx8fHwxNzQxODI3MzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      text: "No signage costs",
      image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NDE4MjczMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642] py-16 md:py-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="text-[#999] uppercase tracking-[0.15em] mb-6"
              style={{ fontSize: "0.7rem", fontWeight: 500 }}
            >
              WHAT RETAILERS PAY
            </p>

            <h2
              className="text-white mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              No fees. No surprises.
            </h2>
            <p
              className="text-[#B8B9C5] mb-10"
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Retailers do not pay membership fees or royalties.
            </p>

            <ul className="space-y-4 mb-[100px]">
              {benefits.map((benefit, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.li
                    key={benefit.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-start gap-3 cursor-pointer group"
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div
                      className="flex-shrink-0 mt-1.5 transition-colors"
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: isActive ? "#EA1528" : "#666",
                        borderRadius: "0",
                      }}
                    />
                    <span
                      className={`transition-colors ${
                        isActive ? "text-white" : "text-[#B8B9C5]"
                      } group-hover:text-white`}
                      style={{
                        fontSize: "1rem",
                        fontWeight: 400,
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="bg-[#1A1F4D] p-6 md:p-8 border-l-4 border-[#EA1528]"
            >
              <p
                className="text-[#B8B9C5]"
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 400,
                  lineHeight: 1.7,
                }}
              >
                PBD deducts a{" "}
                <span
                  className="text-white"
                  style={{ fontWeight: 600 }}
                >
                  10% accounting & operations fee
                </span>{" "}
                on rebate payments per rebate check paid to the retailer.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-[400px] lg:h-full min-h-[400px]"
          >
            <div className="absolute inset-0 rounded-lg overflow-hidden border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={benefits[activeIndex].image}
                    alt={benefits[activeIndex].text}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
