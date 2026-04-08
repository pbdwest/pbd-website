import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 30, prefix: "", suffix: "%", label: "Average sales increase driven by program execution, category resets, and vendor alignment" },
  { value: 2, prefix: "", suffix: "X+", label: "Growth potential for top-performing stores through full program participation" },
  { value: 400, prefix: "", suffix: "+", label: "Active store locations participating in national vendor programs across the network" },
  { value: 100, prefix: "$", suffix: "M+", label: "In cumulative vendor rebates and funding delivered across the PBD network" },
];

function CountUp({
  target,
  prefix,
  suffix,
  isInView,
}: {
  target: number;
  prefix: string;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span className="font-bold text-[#292d55]">
      {prefix}{count}{suffix}
    </span>
  );
}

export function ProvenPerformanceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FFFFFF]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header: Label + Headline */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Performance
          </p>
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
            Proven performance, measurable results.
          </motion.h2>
        </div>

        {/* Stats Row: 4 columns with top border */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="pt-6 border-t border-[#E5E5E5]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.25 + index * 0.12,
                ease: "easeOut",
              }}
            >
              <span
                className="text-[#0a0a0a] block mb-4"
                style={{
                  fontSize: "clamp(48px, 6vw, 72px)",
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                <CountUp
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </span>
              <p
                className="text-[#555]"
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
