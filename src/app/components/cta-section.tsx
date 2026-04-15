import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

// Full gas-station image with red grid overlay baked in — 1440×697px from Figma
const ctaBgImg = "https://www.figma.com/api/mcp/asset/7f88779b-84b9-4e60-b0db-beef4e1ba318";

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
      data-navbar-theme="dark"
    >
      {/* Background image — natural height drives section height */}
      <img
        src={ctaBgImg}
        alt=""
        className="w-full block"
        style={{ display: "block", height: "auto" }}
      />

      {/* Content overlay — absolutely positioned over the image */}
      <div className="absolute inset-0 flex flex-col justify-start px-6 md:px-10 lg:px-[80px]" style={{ paddingTop: "20%" }}>
        {/* Heading + subtext */}
        <motion.div
          className="flex flex-col gap-[29px] max-w-[680px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(36px, 4.5vw, 65px)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.026em",
            }}
          >
            Ready to compete
            <br />
            Like a national chain
          </h2>
          <p
            className="text-white"
            style={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.5, maxWidth: "517px" }}
          >
            No fees. No royalties. Just vendor programs, rebates, and consulting that grow your store from day one.
          </p>
        </motion.div>

        {/* CTA Button — white fill, dark text */}
        <motion.div
          className="mt-[56px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <Link
            to="/join"
            className="inline-flex items-center gap-3 bg-white text-[#0a0a0a] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all group"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Become A Member
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}