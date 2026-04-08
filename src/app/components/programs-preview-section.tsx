import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Group270 from "../../imports/Group270";
import Group271 from "../../imports/Group271";
import Group272 from "../../imports/Group272";
import Group275 from "../../imports/Group275";
import Group276 from "../../imports/Group276";

const programsImg = "https://www.figma.com/api/mcp/asset/d0283022-0c9f-4a2b-97f0-3bdb7a1a0337";

const programElements = [
  {
    title: "National tobacco program",
    description: "National account access with centralized category management & verified payments",
    icon: Group270,
  },
  {
    title: "Coffee program",
    description: "Preferred pricing, equipment support, & consistent in-store execution",
    icon: Group275,
  },
  {
    title: "Salty snacks program",
    description: "Chain-level pricing, rebates, and promotional support",
    icon: Group276,
  },
  {
    title: "Beverage program",
    description: "On-invoice discounts, rebates, and coordinated promotional execution",
    icon: Group272,
  },
  {
    title: "Core-Mark general merchandise",
    description: "1% rebate plus access to funded national programs and merchandising opportunities",
    icon: Group271,
  },
];

export function ProgramsPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">
        {/* Header */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase"
            style={{ fontSize: "14px", fontWeight: 500, letterSpacing: "1.68px" }}
          >
            What You Get
          </p>
          <motion.h2
            className="text-[#111642]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "578px",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Comprehensive vendor programs designed for you
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col gap-[38px]">
          <div className="flex flex-col lg:flex-row gap-[56px] items-stretch">
            {/* Left: Program list */}
            <motion.div
              className="flex-1 flex flex-col gap-[38px]"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              {programElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                  <motion.div
                    key={element.title}
                    className="flex gap-5 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    {/* Icon */}
                    <div className="w-[68px] h-[68px] shrink-0">
                      <IconComponent />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col gap-[6px]" style={{ letterSpacing: "-0.18px" }}>
                      <h3
                        className="text-[#111642]"
                        style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}
                      >
                        {element.title}
                      </h3>
                      <p
                        className="text-[#737373]"
                        style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.5 }}
                      >
                        {element.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Right: Image — matches height of program list */}
            <motion.div
              className="flex-1 w-full min-h-[400px] lg:min-h-0 overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <img
                src={programsImg}
                alt="Customers shopping in store"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* CTA Button — below both columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              to="/programs"
              className="group inline-flex items-center gap-4 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              Explore the Program
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}