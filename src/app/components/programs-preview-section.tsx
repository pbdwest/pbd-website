import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Group270 from "../../imports/Group270";
import Group271 from "../../imports/Group271";
import Group272 from "../../imports/Group272";
import Group275 from "../../imports/Group275";
import Group276 from "../../imports/Group276";

const programsImg = "https://www.figma.com/api/mcp/asset/b1cfe980-437b-4df9-90fd-03ca2fe852d6";

const programElements = [
  {
    title: "National tobacco program",
    subtitle: "Altria - RJR",
    icon: Group270,
  },
  {
    title: "Core-Mark general merchandise program",
    subtitle: "Coremark",
    icon: Group271,
  },
  {
    title: "Salty snacks program",
    subtitle: "Frito-Lay",
    icon: Group276,
  },
  {
    title: "Coffee program",
    subtitle: "Coremark - FarmersBrother",
    icon: Group275,
  },
  {
    title: "Beverage program",
    subtitle: "Pepsi - CocaCola",
    icon: Group272,
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
            className="text-[#999] uppercase tracking-[0.12em]"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Our Program
          </p>
          <motion.h2
            className="text-[#111642] max-w-[700px]"
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
            Comprehensive vendor programs designed for you
          </motion.h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Program grid + CTA */}
          <div className="flex-1 flex flex-col gap-[52px]">
            <motion.div
              className="grid grid-cols-2 gap-x-8 gap-y-[52px]"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              {programElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                  <motion.div
                    key={element.title}
                    className="flex gap-3 items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.08,
                      ease: "easeOut",
                    }}
                  >
                    {/* Icon */}
                    <div className="w-[50px] h-[50px] shrink-0">
                      <IconComponent />
                    </div>
                    {/* Text */}
                    <div className="flex flex-col gap-[6px]" style={{ letterSpacing: "-0.01em" }}>
                      <h3
                        className="text-[#111642]"
                        style={{ fontSize: "18px", fontWeight: 500, lineHeight: 1.3 }}
                      >
                        {element.title}
                      </h3>
                      <p
                        className="text-[#737373]"
                        style={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {element.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              <Link
                to="/programs"
                className="group inline-flex items-center gap-3 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                See Our Program
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src={programsImg}
              alt="Convenience store interior"
              className="w-full object-cover"
              style={{ height: "320px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}