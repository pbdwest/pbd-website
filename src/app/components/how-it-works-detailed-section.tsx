import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import step1Image from "figma:asset/d53d8c98d92bf4951a4fe6b032e083859b247ad5.png";
import step2Image from "figma:asset/f854561c8f7679840783f5d293116468ec50da59.png";
import step3Image from "figma:asset/0f505cce767ac3a8236f5ac06db5845284724c64.png";
import step4Image from "figma:asset/4fae2e2c85a6d15f382dbd189b9c54bb6a55d10f.png";

const steps = [
  {
    number: "01",
    title: "Join the PBD Network",
    subtitle: "Apply for Membership",
    description:
      "Independent retailers apply to join the PBD network and gain access to national vendor programs.",
    image: step1Image,
    details: [
      "Submit application online",
      "Quick approval process",
      "No membership fees required",
    ],
  },
  {
    number: "02",
    title: "Complete the Jumpstart Program",
    subtitle: "Store Setup & Optimization",
    description:
      "PBD performs a store review, activates vendor programs, and resets key categories to prepare your store for participation.",
    image: step2Image,
    details: [
      "Full store assessment",
      "Category optimization",
      "Vendor program activation",
    ],
  },
  {
    number: "03",
    title: "Activate Vendor Programs",
    subtitle: "Connect to National Vendors",
    description:
      "Your store is connected to national vendor programs, merchandising support, and promotional funding opportunities.",
    image: step3Image,
    details: [
      "Access to national vendors",
      "Exclusive pricing programs",
      "Marketing & merchandising support",
    ],
  },
  {
    number: "04",
    title: "Earn Rebates and Funding",
    subtitle: "Grow Sales & Receive Funding",
    description:
      "As your store participates in vendor programs and sells qualifying products, rebates and promotional funding are generated.",
    image: step4Image,
    details: [
      "Regular rebate payments",
      "Promotional funding access",
      "Ongoing support & optimization",
    ],
  },
];

const TRIGGER_RATIO = 0.38;
const IMAGE_HEIGHT = "clamp(380px, 45vw, 520px)";

export function HowItWorksDetailedSection() {
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

      const track = trackRef.current;
      if (track) {
        const trackRect = track.getBoundingClientRect();
        const trackTop = trackRect.top;
        const trackHeight = trackRect.height;
        const rawProgress = (triggerY - trackTop) / trackHeight;
        setTrackProgress(Math.max(0, Math.min(1, rawProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const anchorPercents = steps.map((_, i) => (i / (steps.length - 1)) * 100);
  const progressPercent = trackProgress * 100;

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFFFFF] py-20 md:py-28"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Label */}
        <p
          className="text-[#999] uppercase tracking-[0.15em] mb-6"
          style={{ fontSize: "0.7rem", fontWeight: 500 }}
        >
          How the Program Works
        </p>

        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.h2
            className="text-[#0a0a0a] max-w-[800px]"
            style={{
              fontSize: "clamp(36px, 4.5vw, 56px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >Four steps to unlock vendor programs and rebates</motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left column: progress bar + steps */}
          <div className="flex-1 flex" style={{ gap: "48px" }}>
            {/* Progress track */}
            <div
              ref={trackRef}
              className="relative flex-shrink-0"
              style={{ width: "3px" }}
            >
              <div className="absolute inset-0 bg-[#111642]/10" />

              {/* Anchor dots */}
              {anchorPercents.map((pct, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 rounded-full"
                  style={{
                    width: "6px",
                    height: "6px",
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
                className="absolute top-0 left-0 w-full bg-[#EA1528]"
                style={{ height: `${progressPercent}%` }}
              />

              {/* Square indicator */}
              <motion.div
                className="absolute"
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#EA1528",
                  top: `${progressPercent}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>

            {/* Steps */}
            <div
              className="flex-1 flex flex-col"
              style={{ gap: "clamp(40px, 7vh, 70px)" }}
            >
              {steps.map((step, index) => {
                const isPassed = activeStep >= index;

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
                      animate={{ opacity: isPassed ? 1 : 0.35 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      {/* Title with Number */}
                      <div className="mb-4">
                        <h3
                          className="text-[#0a0a0a]"
                          style={{
                            fontSize: "18px",
                            fontWeight: 500,
                            letterSpacing: "-0.02em",
                            lineHeight: 1.2,
                          }}
                        >
                          <span
                            className="text-[#EA1528]"
                            style={{
                              fontSize: "14px",
                              fontWeight: 600,
                            }}
                          >
                            {step.number}.
                          </span>{" "}
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p
                        className="text-[#555] max-w-[440px] mb-5"
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: 1.7,
                        }}
                      >
                        {step.description}
                      </p>

                      {/* Details list */}
                      
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
              top: "100px",
              alignSelf: "flex-start",
              height: IMAGE_HEIGHT,
            }}
          >
            <div className="relative w-full h-full overflow-hidden rounded-none border border-[#111642]/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
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