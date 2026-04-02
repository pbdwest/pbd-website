import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import svgPaths from "../../imports/svg-ygvqg84o9x";
import imgStoreCustomer from "figma:asset/2c3600727900c73e31f6e7e4baac590ba0a46e61.png";

const benefits = [
  "Vendor rebate programs",
  "Promotional funding",
  "Merchandising support",
  "Category management programs",
  "National promotional campaigns",
];

export function AboutNetworkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642] py-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">
        {/* Label */}
        <motion.p
          className="text-[#888] uppercase tracking-[0.15em] mb-10"
          style={{ fontSize: "11.2px", fontWeight: 500 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          OUR NETWORK
        </motion.p>

        {/* Header: Headline + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-8 lg:gap-[117px] mb-16 lg:mb-20">
          {/* Headline */}
          <motion.h2
            className="text-white"
            style={{
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            One network, hundreds of independent stores.
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-[#f5f5f5] max-w-[560px]"
            style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            PBD organizes independent retailers across multiple states into a
            coordinated network, giving vendors a reason to invest in your
            store.
          </motion.p>
        </div>

        {/* Grid: Content | Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Content */}
          <div className="flex flex-col justify-between">
            {/* Intro text */}
            <motion.p
              className="text-[#f5f5f5] mb-6"
              style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Through the PBD network, retailers gain access to:
            </motion.p>

            {/* Benefits List */}
            <div className="mb-10 flex-1">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 h-[62px] border-b border-[#414568]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <span className="w-[6px] h-[6px] shrink-0 bg-[#ea1528]" />
                  <span
                    className="text-white"
                    style={{ fontSize: "14.4px", fontWeight: 400, lineHeight: 1.5 }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              <a
                href="#programs"
                className="inline-flex items-center gap-[10px] border border-white text-white px-[23px] py-[13px] hover:bg-[#EA1528] hover:border-[#EA1528] transition-all"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                See Our Programs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M3.33333 8H12.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                  <path
                    d={svgPaths.p1d405500}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.33333"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="h-[430px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src={imgStoreCustomer}
              alt="Store owner"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}