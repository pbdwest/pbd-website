import { useRef } from "react";
import { motion, useInView } from "motion/react";
import dollarIcon from "../../assets/dollar.png";
import phoneIcon from "../../assets/phone.png";
import shopIcon from "../../assets/shop.png";
import imgFrame from "../../assets/tick.png";

// Assets

function ChallengeIcon({ iconSrc }: { iconSrc: string }) {
  return (
    <img alt="" className="shrink-0 size-[32px] object-contain" src={iconSrc} />
  );
}

// ─── Single card ─────────────────────────────────────────────────────────────
function ChallengeCard({
  iconSrc,
  title,
  bodyRegular,
  bodyItalic,
  solution,
  delay,
  isInView,
}: {
  iconSrc: string;
  title: string;
  bodyRegular: string;
  bodyItalic?: string;
  solution: string;
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="flex flex-1 gap-8 items-start px-3 py-4 min-w-0"
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {/* Icon */}
      <ChallengeIcon iconSrc={iconSrc} />

      {/* Content */}
      <div className="flex flex-col gap-3 flex-1 min-w-0">
        {/* Title */}
        <p
          className="text-[#000]"
          style={{ fontSize: "18px", fontWeight: 500, lineHeight: "normal", letterSpacing: "-0.18px" }}
        >
          {title}
        </p>

        {/* Body */}
        <p
          className="text-[#737373]"
          style={{ fontSize: "16px", fontWeight: 400, lineHeight: "23px", letterSpacing: "-0.18px" }}
        >
          {bodyRegular}
          {bodyItalic && <em className="text-[#737373]">{bodyItalic}</em>}
        </p>

        {/* Solution row */}
        <div className="flex gap-2 items-start py-1">
          <div className="relative shrink-0 size-[18px]">
            <img alt="" className="absolute block max-w-none size-full" src={imgFrame} />
          </div>
          <p
            className="text-[#0e1235]"
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: "23px", letterSpacing: "-0.18px" }}
          >
            {solution}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Divider line (matches imgDiv — 1px border) ──────────────────────────────
function Divider() {
  return <div className="w-full h-px bg-[#E5E5E5] shrink-0" />;
}

// ─── Main section ────────────────────────────────────────────────────────────
export function ChallengesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="bg-white"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[56px]">

        {/* Header */}
        <div className="flex flex-col gap-6">
          <motion.p
            className="text-[#888] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500, lineHeight: "16.8px" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            CHALLENGES
          </motion.p>
          <motion.p
            className="text-[#111642]"
            style={{
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: "52.8px",
              letterSpacing: "-1.44px",
              maxWidth: "856px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            These are the exact problems independent C-store face every day.
          </motion.p>
        </div>

        {/* Card grid */}
        <div className="flex flex-col gap-6">
          {/* Divider above row 1 */}
          <Divider />

          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-[56px] items-start">
            <ChallengeCard
              iconSrc={dollarIcon}
              title="Pricing and rebate disadvantage"
              bodyRegular="Independent stores don't have access to national pricing, rebates, or promotional programs"
              solution="PBD connects your store to national programs typically reserved for chains"
              delay={0.1}
              isInView={isInView}
            />
            <ChallengeCard
              iconSrc={phoneIcon}
              title="No structured execution"
              bodyRegular="There's no consistent plan for resets, promotions, or category management. Changes happen, but not in a coordinated way that drives performance."
              solution="PBD brings structure to execution for program rollout across your store"
              delay={0.18}
              isInView={isInView}
            />
          </div>

          {/* Divider between rows */}
          <Divider />

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-0 sm:gap-[56px] items-start">
            <ChallengeCard
              iconSrc={shopIcon}
              title="Store falls behind competition"
              bodyRegular="Chains constantly update signage, promotions, and category presentation. Independent stores fall behind, and customers notice."
              solution="PBD aligns your store with current programs, that drives customer engagement and sales"
              delay={0.26}
              isInView={isInView}
            />
            <ChallengeCard
              iconSrc={phoneIcon}
              title="No access to vendor-driven volume"
              bodyRegular="Independent stores are not connected to vendor-funded programs that drive volume, promotions, and product movement at the store level."
              solution="PBD connects your store to vendor-funded programs"
              delay={0.34}
              isInView={isInView}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
