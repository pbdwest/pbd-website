import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CustomCursor } from "./custom-cursor";
import pbdProgramImage from "figma:asset/2ce74b2262f5a4457d757bbb7b8b75ffc40bd95e.png";
import jumpstartImage from "figma:asset/e6bce128f8fc1c40a585ecff4dd70f9998e5c40f.png";

const services = [
  {
    image: jumpstartImage,
    title: "The PBD Program",
    tag: "Ongoing Consulting",
    description:
      "Category management, vendor connectivity, marketing support, and promotional funding — all five pillars of retail growth, managed for you.",
  },
  {
    image: pbdProgramImage,
    title: "The Jumpstart Program",
    tag: "For New Members",
    description:
      "A focused 90-day onboarding program that resets your store, activates your vendor programs, and gets you earning from day one.",
  },
];

const DEFAULT_ACTIVE = 1;

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);

  const activeIndex = hoveredIndex !== null ? hoveredIndex : DEFAULT_ACTIVE;

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setShowCursor(false);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFFFFF] py-16 md:py-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <CustomCursor x={cursorPos.x} y={cursorPos.y} isVisible={showCursor} />
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Label */}
        <p
          className="text-[#999] uppercase tracking-[0.15em] mb-6"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
        >
          Our Programs
        </p>

        {/* Top: Headline */}
        <motion.h2
          className="text-[#0a0a0a] max-w-[700px] mb-10 md:mb-14"
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
          Two programs. One goal: growing your store.
        </motion.h2>

        {/* Cards row */}
        <div
          className="flex flex-col md:flex-row gap-5 lg:gap-6 items-start"
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={service.title}
                className="cursor-pointer flex flex-col"
                onMouseEnter={() => handleMouseEnter(index)}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                style={{
                  flexGrow: isActive ? 7 : 2,
                  flexShrink: 0,
                  flexBasis: 0,
                  transition: "flex-grow 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                transition={{
                  opacity: { duration: 0.7, delay: 0.3 + index * 0.15 },
                  y: { duration: 0.7, delay: 0.3 + index * 0.15 },
                }}
              >
                {/* Image */}
                <div
                  className="overflow-hidden w-full rounded-none"
                  style={{
                    aspectRatio: isActive ? "16 / 9" : "1 / 1",
                    maxHeight: isActive ? undefined : "clamp(200px, 22vw, 300px)",
                  }}
                >
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                  />
                </div>

                {/* Text below image */}
                <div className="pt-4">
                  {/* Tag + Title */}
                  <motion.div
                    className="mb-2"
                    animate={{
                      height: "auto",
                    }}
                  >
                    {/* Tag - only visible when active */}
                    <motion.span
                      className="inline-block text-[#999] uppercase tracking-[0.1em] mb-2"
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 500,
                      }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        height: isActive ? "auto" : 0,
                        marginBottom: isActive ? "8px" : "0px",
                      }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {service.tag}
                    </motion.span>

                    <h3
                      className="text-[#0a0a0a]"
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {service.title}
                    </h3>
                  </motion.div>

                  {/* Description — animates in/out */}
                  <motion.div
                    className="overflow-hidden"
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 4 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <p
                      className="text-[#555]"
                      style={{
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA button - moved below images */}
        <motion.div
          className="mt-10 md:mt-12 flex justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <a
            href="#"
            className="hidden"
            style={{ fontSize: "0.875rem", fontWeight: 500, borderRadius: "0px" }}
          >
            View all services
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}