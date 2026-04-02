import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import capitalInvestmentImage from "figma:asset/4cce4569ea9311d16b02dfe55f2c542b0e13491e.png";
import storeEvaluationImage from "figma:asset/9dcbfcc12bee5a793d63cf2c12980d9f1f126ed7.png";
import categoryResetsImage from "figma:asset/ad929877d38f4114073a4f67ae3f2241d0cdcdc8.png";
import vendorActivationImage from "figma:asset/25d641be9f086163453e7c5a1e96818100a60816.png";
import consultancyImage from "figma:asset/17e7a379335502592f4c15274741b1e4222700a2.png";

const steps = [
  {
    title: "Capital investment",
    description:
      "PBD funds the store reset and program activation at no cost to you.",
    image: capitalInvestmentImage,
  },
  {
    title: "Store evaluation",
    description:
      "We identify gaps in your product mix, layout, and vendor coverage.",
    image: storeEvaluationImage,
  },
  {
    title: "Category resets",
    description:
      "Optimizing shelf space, product placement, and overall store flow.",
    image: categoryResetsImage,
  },
  {
    title: "Vendor activation",
    description:
      "Connecting your store to qualifying national vendor programs.",
    image: vendorActivationImage,
  },
  {
    title: "Hands-on consultancy",
    description:
      "The PBD team works in your store during the transition.",
    image: consultancyImage,
  },
];

const TRIGGER_RATIO = 0.38; // 38% from top of viewport
const IMAGE_HEIGHT = "clamp(380px, 45vw, 540px)"; // Increased height for 5 steps

export function JumpstartProgramSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);

  const setStepRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      stepRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * TRIGGER_RATIO;

      // Determine active step: whichever heading is closest above the trigger line
      let newActive = 0;
      for (let i = 0; i < stepRefs.current.length; i++) {
        const el = stepRefs.current[i];
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) {
          newActive = i;
        }
      }
      setActiveStep(newActive);

      // Calculate progress along the track based on scroll through the steps area
      const track = trackRef.current;
      if (track) {
        const trackRect = track.getBoundingClientRect();
        const trackTop = trackRect.top;
        const trackHeight = trackRect.height;
        // Progress: how far down the trigger line is within the track
        const rawProgress = (triggerY - trackTop) / trackHeight;
        setTrackProgress(Math.max(0, Math.min(1, rawProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Anchor dots at evenly spaced positions
  const anchorPercents = steps.map((_, i) => (i / (steps.length - 1)) * 100);
  const progressPercent = trackProgress * 100;

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA] py-16 md:py-20"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Label */}
        <p
          className="text-[#999] uppercase tracking-[0.15em] mb-6"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
        >
          The Jumpstart Program
        </p>

        {/* Header: Headline */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12 md:mb-16">
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
            We invest in your store before you earn a single rebate.
          </motion.h2>
        </div>

        {/* Two-column layout: left scrolls naturally, right is sticky */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Left column: progress bar + steps */}
          <div className="flex-1 flex" style={{ gap: "42px" }}>
            {/* Progress track — positioned at x=42px via the gap */}
            <div
              ref={trackRef}
              className="relative flex-shrink-0"
              style={{ width: "2px" }}
            >
              {/* Track background */}
              <div className="absolute inset-0 bg-[#111642]/10" />

              {/* Anchor dots for each step */}
              {anchorPercents.map((pct, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 rounded-full"
                  style={{
                    width: "5px",
                    height: "5px",
                    top: `${pct}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundColor:
                      activeStep >= i ? "#111642" : "rgba(17, 22, 66, 0.2)",
                    transition: "background-color 0.3s ease",
                    opacity: 0,
                  }}
                />
              ))}

              {/* Filled progress */}
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#ea1528]"
                style={{ height: `${progressPercent}%` }}
              />

              {/* Square control indicator */}
              <motion.div
                className="absolute"
                style={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#EA1528",
                  top: `${progressPercent}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>

            {/* Steps — spaced to match image height, scrolls with page */}
            <div
              className="flex-1 flex flex-col"
              style={{ gap: "clamp(35px, 6vh, 60px)" }}
            >
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                const isPassed = activeStep >= index; // Step has been passed by scroll

                return (
                  <motion.div
                    key={step.title}
                    ref={setStepRef(index)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            y: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <motion.div
                      animate={{ opacity: isPassed ? 1 : 0.3 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <div className="mb-1.5">
                        <span
                          className="text-[#111642]"
                          style={{
                            fontSize: "clamp(0.75rem, 1vw, 0.875rem)",
                            fontWeight: 500,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {index + 1}.
                        </span>
                        <h3
                          className="text-[#0a0a0a] inline ml-2"
                          style={{
                            fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
                            fontWeight: 500,
                            letterSpacing: "-0.01em",
                            lineHeight: 1.3,
                          }}
                        >
                          {step.title}
                        </h3>
                      </div>
                      <p
                        className="text-[#555] max-w-[380px]"
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: 1.65,
                        }}
                      >
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right column: sticky image panel */}
          <div
            className="flex-1"
            style={{
              position: "sticky",
              top: "80px",
              alignSelf: "flex-start",
              height: IMAGE_HEIGHT,
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <ImageWithFallback
                    src={steps[activeStep].image}
                    alt={steps[activeStep].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}