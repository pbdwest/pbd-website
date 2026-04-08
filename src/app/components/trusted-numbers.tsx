import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export interface StatDef {
  prefix?: string;
  number: number;
  suffix?: string;
  label: string;
}

// Home page stats
const homeStats: StatDef[] = [
  { number: 32, suffix: "+", label: "Years Supporting Independent Retailers" },
  { number: 400, suffix: "+", label: "Stores in the PBD Network" },
  { number: 24, suffix: "+", label: "States and Growing" },
];

// About page stats
export const aboutStats: StatDef[] = [
  { prefix: "$", number: 100, suffix: "M+", label: "In Vendor Rebates Generated" },
  { number: 400, suffix: "+", label: "Stores in PBD Network" },
  { number: 24, suffix: "+", label: "States With Active Locations" },
];

function useCountUp(target: number, isInView: boolean, duration = 1.5) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return count;
}

function VerticalDivider() {
  return (
    <div className="hidden md:flex items-center h-[121px]">
      <div className="w-px h-full bg-white/20" />
    </div>
  );
}

function StatItem({
  stat,
  index,
  isInView,
}: {
  stat: StatDef;
  index: number;
  isInView: boolean;
}) {
  const count = useCountUp(stat.number, isInView);

  return (
    <motion.div
      className="flex gap-3 items-start"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
    >
      <div className="flex items-end text-[#FFFFFF]">
        {stat.prefix && (
          <span
            className="font-[Inter] leading-none"
            style={{ fontSize: "90px", fontWeight: 500 }}
          >
            {stat.prefix}
          </span>
        )}
        <span
          className="font-[Inter] leading-none tabular-nums"
          style={{ fontSize: "90px", fontWeight: 500 }}
        >
          {count}
        </span>
        {stat.suffix && (
          <span
            className="font-[Inter] leading-none pb-1"
            style={{ fontSize: "28px", fontWeight: 300 }}
          >
            {stat.suffix}
          </span>
        )}
      </div>
      <p
        className="text-[#E5E5E5] font-[Inter] max-w-[91px] pt-1"
        style={{ fontSize: "14px", fontWeight: 500, lineHeight: "1.4" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export function TrustedNumbers({ stats = homeStats }: { stats?: StatDef[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#EA1528] py-10 md:py-[60px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-6 md:gap-9">
              {index > 0 && <VerticalDivider />}
              {index > 0 && <div className="hidden md:block" />}
              <StatItem
                stat={stat}
                index={index}
                isInView={isInView}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
