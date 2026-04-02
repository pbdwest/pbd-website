import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    quote:
      "The difference in my business is night and day since joining PBD West. I wish I had joined sooner.",
    name: "Shawn D.",
    role: "C-Store Owner",
    location: "Las Vegas, NV",
    avatar: "https://images.unsplash.com/photo-1590496552566-41aca09db352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwYnVzaW5lc3MlMjBvd25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzIxOTQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    quote:
      "PBD gave us access to vendor programs we never knew existed. Our rebate income went from almost nothing to a real revenue stream.",
    name: "Maria G.",
    role: "Fuel & Go Operator",
    location: "Houston, TX",
    avatar: "https://images.unsplash.com/photo-1762341124956-d2650d5d1f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHN0b3JlJTIwb3duZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMyMTk0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    quote:
      "Their team walked our store, reorganized key sections, and within a quarter we saw a noticeable lift in basket size.",
    name: "James P.",
    role: "Quick Stop Owner",
    location: "Bakersfield, CA",
    avatar: "https://images.unsplash.com/photo-1622169804256-0eb6873ff441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwc3RvcmUlMjBtYW5hZ2VyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczMjE5NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    quote:
      "No fees, no royalties — the vendor relationships they bring are something an independent store simply can't get on their own.",
    name: "Priya K.",
    role: "Convenience Store Owner",
    location: "Sacramento, CA",
    avatar: "https://images.unsplash.com/photo-1705164454513-d8274719fdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMjE5NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    quote:
      "The on-site consulting alone is worth it. PBD helped us unlock programs we didn't even know we qualified for.",
    name: "David R.",
    role: "Parkway Fuel & Mart",
    location: "Phoenix, AZ",
    avatar: "https://images.unsplash.com/photo-1758599543154-76ec1c4257df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYWxlJTIwZW50cmVwcmVuZXVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczMjE5NDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setActive((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  // Auto-rotate every 6s
  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go, active]);

  const t = testimonials[active];

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">
        {/* Section Label */}
        <p
          className="text-[#999] uppercase tracking-[0.15em] mb-[56px] text-center"
          style={{ fontSize: "11.2px", fontWeight: 500 }}
        >
          Testimonials
        </p>

        <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
          {/* Quote icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Quote size={36} className="text-[#111642] opacity-20 mb-8" />
          </motion.div>

          {/* Quote text — crossfade on change */}
          <div className="relative w-full flex items-center justify-center" style={{ minHeight: "180px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.p
                key={active}
                custom={direction}
                className="text-[#0a0a0a]"
                style={{
                  fontSize: "clamp(22px, 3vw, 36px)",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  letterSpacing: "-0.02em",
                }}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              >
                &ldquo;{t.quote}&rdquo;
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Author — crossfade */}
          <div className="mt-10 relative" style={{ minHeight: "100px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                className="flex flex-col items-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* Avatar Image */}
                <ImageWithFallback
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <p
                  className="text-[#0a0a0a]"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[#888]"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: 1.5,
                  }}
                >
                  {t.role} &middot; {t.location}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation: arrows + dots */}
          <motion.div
            className="mt-10 flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => go(-1)}
              className="w-10 h-10 rounded-full border border-[#E0E0E0] flex items-center justify-center text-[#111642] hover:bg-[#EA1528] hover:text-white hover:border-[#EA1528] transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className="cursor-pointer p-0 border-0 bg-transparent"
                  aria-label={`Go to testimonial ${i + 1}`}
                >
                  <motion.div
                    className="rounded-full"
                    animate={{
                      width: i === active ? 24 : 8,
                      height: 8,
                      backgroundColor: i === active ? "#111642" : "#D1D5DB",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="w-10 h-10 rounded-full border border-[#E0E0E0] flex items-center justify-center text-[#111642] hover:bg-[#EA1528] hover:text-white hover:border-[#EA1528] transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
