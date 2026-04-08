import { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgImage1730 from "figma:asset/1e78698610b57280e6b2a7288bea2a004a66d633.png";

export function ProgramsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111642] overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", paddingTop: "79px" }}
      data-navbar-theme="dark"
    >
      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[80px] py-16 md:py-20">
        {/* Top Row: Headline + Description */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[20px] items-end">
          {/* Headline - left */}
          <motion.div
            className="flex-shrink-0 lg:w-[686px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1
              className="text-white"
              style={{
                fontSize: "64px",
                fontWeight: 400,
                lineHeight: "67.2px",
                letterSpacing: "-1.92px",
              }}
            >National vendor programs built for independent retailers</h1>
          </motion.div>

          {/* Description - right */}
          <motion.div
            className="flex-1 flex items-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p
              className="text-[#e5e5e5]"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "25.6px",
              }}
            >
              Access tobacco, beverage, general merchandise, coffee, and snack programs with pricing, funding, and support typically reserved for national chains. No fees. No royalties. Just programs that drive performance.</p>
          </motion.div>
        </div>

        {/* Bottom Row: Hero Image */}
        <motion.div 
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={imgImage1730}
            alt="PBD Programs"
            className="w-full h-[440px] object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}