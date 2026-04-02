import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

// Retailer image from Figma node 5842-641
const retailerImg = "https://www.figma.com/api/mcp/asset/653bdd2f-dadb-4ba5-99f0-35c5b0fdb6c5";

const bullets = [
  "Vendor rebate programs that put money back in your pocket",
  "Promotional funding to drive more customers through your door",
  "Merchandising support to make your shelves work harder",
  "Category management programs tailored to your store",
  "National promotional campaigns at no cost to you",
];

export function ForRetailersAboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#fafafa]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-[#888] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            For Retailers
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-[64px] items-start">
            <motion.h2
              className="flex-1 text-[#0a0a0a]"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", maxWidth: "554px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              Here's what you get when you join PBD West.
            </motion.h2>
            <motion.p
              className="flex-1 text-[#555]"
              style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.6, maxWidth: "560px" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Independent stores that join PBD West get immediate access to programs, funding, and support that were previously only available to large national chains,{" "}
              <strong className="text-black font-semibold">with zero fees and zero royalties</strong>.
            </motion.p>
          </div>
        </div>

        {/* Two-col: bullets + CTA left, image right */}
        <div className="flex flex-col lg:flex-row gap-[64px] items-start">

          {/* Left: bullets + CTA */}
          <motion.div
            className="flex-1 flex flex-col gap-[80px]"
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex flex-col">
              {bullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 h-[62px] border-b border-[#e0e0e0]"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.07, ease: "easeOut" }}
                >
                  <span className="w-[6px] h-[6px] shrink-0 bg-[#ea1528]" />
                  <p className="text-[#333]" style={{ fontSize: "14.4px", fontWeight: 400, lineHeight: 1.5 }}>
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
              <Link
                to="/programs"
                className="inline-flex items-center gap-3 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all group"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                See Our Program
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: image */}
          <motion.div
            className="shrink-0"
            style={{ width: "608px", maxWidth: "100%" }}
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <img
              src={retailerImg}
              alt="Store employee stocking shelves"
              className="w-full object-cover"
              style={{ height: "437px" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
