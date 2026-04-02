import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

// Split story into lines — each line highlights as a unit on scroll
const storyLines = [
  "Our family has been running gas stations",
  "and convenience stores since the early 1970s.",
  "We saw firsthand how national chains had access",
  "to vendor programs, promotional funding, and support",
  "that independent operators simply couldn't reach.",
  "PBD was created to close that gap —",
  "built by retailers, not consultants.",
];

export function AboutStorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="bg-white relative"
      style={{
        fontFamily: "'Inter', sans-serif",
        height: "250vh",
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] w-full">
          {/* Label */}
          <p
            className="text-[#999] uppercase tracking-[0.15em] mb-[32px]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Our Story
          </p>

          {/* Paragraph with scroll-driven line reveal */}
          <p
            className="max-w-full"
            style={{
              fontSize: "clamp(24px, 3vw, 40px)",
              fontWeight: 400,
              lineHeight: 1.425,
              letterSpacing: "-0.02em",
            }}
          >
            {storyLines.map((line, index) => {
              // Each line activates across an equal slice of scroll progress
              const start = index / storyLines.length;
              const end = (index + 1) / storyLines.length;
              return (
                <motion.span
                  key={index}
                  className="block"
                  style={{
                    color: useTransform(
                      scrollYProgress,
                      [start, end],
                      ["rgba(38, 38, 38, 0.25)", "#111642"]
                    ),
                  }}
                >
                  {line}
                </motion.span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}