import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhyVendorsParticipateSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const benefits = [
    {
      title: "Professional execution",
      description: "Chain-level merchandising standards",
    },
    {
      title: "Network reach",
      description: "Direct access to independent retailers",
    },
    {
      title: "Brand consistency",
      description: "Unified promotions across locations",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA] py-16 md:py-24"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Section Label */}
            <p
              className="text-[#999] uppercase tracking-[0.15em] mb-6"
              style={{ fontSize: "0.7rem", fontWeight: 500 }}
            >
              WHY VENDORS PARTICIPATE
            </p>

            <h2
              className="text-[#0a0a0a] mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Chain-level execution for independent retailers
            </h2>

            <p
              className="text-[#555] mb-10"
              style={{
                fontSize: "1.0625rem",
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              National vendors support independent stores with the same programs
              and standards typically available to large chains—helping
              independents compete while maintaining their identity.
            </p>

            {/* Benefits List */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="w-8 h-8 bg-[#111642] flex items-center justify-center shrink-0 mt-1"
                    style={{ borderRadius: "0" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 4L6 11L3 8"
                        stroke="#EA1528"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="text-[#0a0a0a] mb-1"
                      style={{
                        fontSize: "1.0625rem",
                        fontWeight: 500,
                        lineHeight: 1.4,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-[#666]"
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 400,
                        lineHeight: 1.6,
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1591453214154-c95db71dbd83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHZlbmRvciUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MzMxNTM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vendor partnership"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent opacity-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
