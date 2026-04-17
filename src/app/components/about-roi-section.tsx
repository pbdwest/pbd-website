import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const opportunityBullets = [
  "Access to a coordinated retail network",
  "Improved execution at the store level",
  "Increased volume and distribution",
  "Stronger program performance",
];

const howItWorksBullets = [
  "Consistent store-level execution",
  "Performance-tracked programs",
  "Merchandising & placement support",
  "Transparent reporting",
];

function BulletList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-3">
          <span className="w-[6px] h-[6px] shrink-0 bg-[#ea1528]" />
          <p
            className={dark ? "text-white" : "text-[#0a0a0a]"}
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.4 }}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

export function AboutRoiSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAFAFA]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-[#999] uppercase tracking-[0.15em]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
          >
            For Vendors
          </motion.p>
          <div className="flex flex-col lg:flex-row gap-[64px] items-start">
            <motion.h2
              className="flex-1 text-[#0a0a0a]"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.03em", maxWidth: "539px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              The most efficient path to independent c-stores.
            </motion.h2>
            <motion.p
              className="flex-1 text-[#555]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5, maxWidth: "539px" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Manufacturers and distributors looking to grow distribution, improve execution, and reach independent retailers at scale.
            </motion.p>
          </div>
        </div>

        {/* 3-column bento grid */}
        <div className="flex flex-col lg:flex-row gap-5">

          {/* Col 1 — The Opportunity (light blue) */}
          <motion.div
            className="flex-1 flex flex-col justify-between p-6 min-h-[480px]"
            style={{ backgroundColor: "#d6eefc" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-[10px]">
              <p className="text-[#888] uppercase tracking-[0.15em]" style={{ fontSize: "11.2px", fontWeight: 500 }}>
                The Opportunity
              </p>
              <h3 className="text-[#0a0a0a]" style={{ fontSize: "32px", fontWeight: 400, lineHeight: 1.375, letterSpacing: "-0.045em" }}>
                What vendors get through PBD
              </h3>
            </div>
            <BulletList items={opportunityBullets} />
          </motion.div>

          {/* Col 2 — Stats (navy top + red bottom) */}
          <motion.div
            className="flex flex-col gap-5 shrink-0"
            style={{ width: "424px", maxWidth: "100%" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {/* Navy stat */}
            <div className="flex-1 flex flex-col gap-6 justify-center p-6 bg-[#111642]" style={{ minHeight: "225px" }}>
              <div>
                <p className="text-white" style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>30+</p>
                <p className="text-white" style={{ fontSize: "16px", fontWeight: 400, marginTop: "8px" }}>Brands successfully launched</p>
              </div>
            </div>
            {/* Red stat */}
            <div className="flex-1 flex flex-col gap-6 justify-center p-6 bg-[#ea1528]" style={{ minHeight: "225px" }}>
              <div>
                <p className="text-white" style={{ fontSize: "72px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>10+</p>
                <p className="text-white" style={{ fontSize: "16px", fontWeight: 400, marginTop: "8px" }}>Active vendor partners</p>
              </div>
            </div>
          </motion.div>

          {/* Col 3 — How It Works (light grey) */}
          <motion.div
            className="flex-1 flex flex-col justify-between p-6 min-h-[480px]"
            style={{ backgroundColor: "#f5f5f5" }}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-[10px]">
              <p className="text-[#888] uppercase tracking-[0.15em]" style={{ fontSize: "11.2px", fontWeight: 500 }}>
                How It Works
              </p>
              <h3 className="text-[#0a0a0a]" style={{ fontSize: "32px", fontWeight: 400, lineHeight: 1.375, letterSpacing: "-0.045em" }}>
                Programs that get executed, not just listed.
              </h3>
            </div>
            <BulletList items={howItWorksBullets} />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/vendor-network"
            className="inline-flex items-center gap-3 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all group"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Partner with PBD
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
