import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

export function AboutCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#111642] py-20 md:py-28"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Headline */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2
              className="text-white"
              style={{
                fontSize: "clamp(36px, 4.5vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to compete like a national chain?
            </h2>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="lg:col-span-5 flex lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 hover:bg-[#EA1528] hover:border-[#EA1528] transition-all"
              style={{ fontSize: "1rem", fontWeight: 500 }}
            >
              Join the network
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
