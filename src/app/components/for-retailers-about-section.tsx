import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

// Retailer image from Figma node 5842-641
const retailerImg = "https://www.figma.com/api/mcp/asset/653bdd2f-dadb-4ba5-99f0-35c5b0fdb6c5";

const items = [
  {
    title: "Access to Vendor Programs and Funding",
    description: "Participate in national programs, rebates, and promotional funding not available at the individual store level.",
    tags: ["Vendor Rebates", "Promotional Funding", "National Programs"],
  },
  {
    title: "In-Store Execution and Support",
    description: "Category resets, merchandising, and support to ensure programs are properly implemented.",
    tags: ["Category Resets", "Merchandising", "In-Store Support"],
  },
  {
    title: "Improved Visibility and Performance",
    description: "Better pricing, product mix, and program tracking to improve sales and margins.",
    tags: ["Better Pricing", "Product Mix", "Program Tracking"],
  },
  {
    title: "Ongoing Program Management",
    description: "PBD manages vendor coordination, compliance, and rebate tracking across the network.",
    tags: ["Vendor Coordination", "Compliance", "Rebate Tracking"],
  },
];

export function ForRetailersAboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header: Label + Headline */}
        <div className="flex flex-col gap-6">
          <p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            For Retailers
          </p>
          <motion.h2
            className="text-[#0a0a0a] max-w-[580px]"
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
            What retailers get through PBD
          </motion.h2>
        </div>

        {/* Bottom Row: Accordion left + Image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Accordion List */}
          <div className="flex flex-col">
            {items.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={item.title}
                  className="border-t border-[#e0e0e0] last:border-b"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08, ease: "easeOut" }}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? -1 : index)}
                    className="w-full flex items-center gap-3 py-5 text-left cursor-pointer group"
                  >
                    <span
                      className={`w-[6px] h-[6px] shrink-0 transition-colors ${
                        isActive ? "bg-[#ea1528]" : "bg-[#ccc]"
                      }`}
                    />
                    <span
                      className={`transition-colors ${
                        isActive ? "text-[#0a0a0a]" : "text-[#888]"
                      } group-hover:text-[#0a0a0a]`}
                      style={{
                        fontSize: "clamp(0.875rem, 1.2vw, 1rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pl-[18px]">
                          <p
                            className="text-[#555] mb-4 max-w-[440px]"
                            style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.7 }}
                          >
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="border border-[#ddd] text-[#555] px-3 py-1"
                                style={{ fontSize: "11.2px", fontWeight: 400, lineHeight: 1.5 }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}

            {/* CTA below accordion */}
            <motion.div
              className="pt-[40px]"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
            >
              <Link
                to="/programs"
                className="inline-flex items-center gap-3 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all group"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                Explore the Program
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <img
              src={retailerImg}
              alt="Store employee stocking shelves"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
