import imgCultivation from "figma:asset/026fc243e1a84a8dd5c71003ef6d7b392958b874.png";
import imgProductRollout from "figma:asset/ac0c5f14e26d4cc0c33430c8cdbdfee25855aac1.png";
import imgMarketingGrowth from "figma:asset/eae4d1eb72cd7aa21ed0e88ddf27eeac3db5c06b.png";
import imgGuidedManagement from "figma:asset/cd3ec8eda69ea64b53b4fff93f13cfa329ea7b8b.png";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const results = [
  {
    title: "Increased Vendor Rebates",
    description:
      "Access to national programs generates consistent monthly rebate income",
    image: imgCultivation,
  },
  {
    title: "Stronger Category Performance",
    description:
      "Optimized product mix and execution drive higher sales across key categories",
    image: imgProductRollout,
  },
  {
    title: "Improved In-Store Execution",
    description:
      "Resets, signage, and merchandising elevate store presentation and performance",
    image: imgMarketingGrowth,
  },
  {
    title: "Simplified Program Management",
    description:
      "PBD manages vendor programs, compliance, and rebate tracking end-to-end",
    image: imgGuidedManagement,
  },
];

export function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header: Label + Headline + Description */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Measured Results. Not Promises.
          </p>
          <motion.h2
            className="text-[#0a0a0a] max-w-[700px]"
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
            Real Results at the Store Level
          </motion.h2>
          <motion.p
            className="text-[#555] max-w-[700px]"
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            Independent retailers in the PBD network see measurable improvements across rebates, category performance, and in-store execution.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {results.map((result, index) => (
            <motion.div
              key={result.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.12,
                ease: "easeOut",
              }}
            >
              {/* Image */}
              <div className="overflow-hidden mb-4 rounded-none">
                <ImageWithFallback
                  src={result.image}
                  alt={result.title}
                  className="w-full h-[258px] object-cover"
                />
              </div>

              {/* Title */}
              <h3
                className="text-[#0a0a0a] mb-3"
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {result.title}
              </h3>

              {/* Description */}
              <p
                className="text-[#555]"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.65,
                }}
              >
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA button */}
        <motion.div
          style={{ display: "none" }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            to="/impact"
            className="group inline-flex items-center gap-3 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            See How PBD Drives Results
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
