import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { LogoCloudSection } from "../components/logo-cloud-section";

// ─── Figma image assets ───────────────────────────────────────────────────────
const imgHeroComposite  = "https://www.figma.com/api/mcp/asset/fc400f8b-172e-4b59-98e2-03be40ccecc1";
const imgChallengeStore = "https://www.figma.com/api/mcp/asset/a3456902-6ba2-4e13-987d-4d828d7a63fe";
const imgAvatarMJ       = "https://www.figma.com/api/mcp/asset/5dd972c5-826c-41cc-b457-a6f1ab3f0580";
const imgResultsStore   = "https://www.figma.com/api/mcp/asset/b9cb45a7-fc66-40bd-91df-864c6d35567b";
const imgCtaDotGrid     = "https://www.figma.com/api/mcp/asset/ad1ff54d-cda3-47a7-9f86-3522f22fbe84";

// ─── Hero Section ─────────────────────────────────────────────────────────────
function ImpactHeroSection() {
  return (
    <section
      className="relative bg-[#111642]"
      style={{ fontFamily: "'Inter', sans-serif" }}
      data-navbar-theme="dark"
    >
      {/* ─── DESKTOP (lg+) ───────────────────────────────────────
          Figma: 1440×646px grid below the 79px navbar.
          Image container: right:0, top:0, w:709px, h:646px
            — flush to right edge, exact section height.
          Image inside: scaled to 112.24%×136.78% of container
            — crops from top-left (object-cover object-left-top).
          Text: left:80px, top:calc(50%+21px), translateY(-50%)
      ──────────────────────────────────────────────────────── */}
      <div className="hidden lg:block" style={{ paddingTop: "79px" }}>
        <div className="relative overflow-hidden" style={{ height: "646px" }}>

          {/* Image — flush to right edge, exact section height, crops internally */}
          <div
            className="absolute top-0 right-0 overflow-hidden"
            style={{ width: "709px", height: "646px" }}
          >
            <img
              src={imgHeroComposite}
              alt="City Express Marketplace · Las Vegas, NV"
              className="absolute top-0 left-0 pointer-events-none select-none"
              style={{
                width: "112.24%",   /* scales wider than container → crops right */
                height: "136.78%",  /* scales taller than container → crops below */
                objectFit: "cover",
                objectPosition: "left top",
              }}
            />
          </div>

          {/* Text — left:80px matches standard lg:px-[80px], vertically centred */}
          <div
            className="absolute flex flex-col gap-[24px]"
            style={{
              left: "80px",
              top: "calc(50% + 21px)",
              transform: "translateY(-50%)",
              width: "567px",
            }}
          >
            <h1
              className="text-white"
              style={{
                fontSize: "60px",
                fontWeight: 400,
                lineHeight: "67.2px",
                letterSpacing: "-1.92px",
              }}
            >
              From outdated<br />
              to +18% revenue<br />
              in 90 days.
            </h1>
            <p
              className="text-[#e5e5e5]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" }}
            >
              A single-location independent C-store. An aging layout, no active
              vendor contracts, and low beverage category performance. Here's
              exactly what PBD did — and what it produced.
            </p>
          </div>

        </div>
      </div>

      {/* ─── MOBILE / TABLET (< lg) ──────────────────────────────
          Text stacked above, image below flush to right.
          px-6 / md:px-10 — consistent with all other sections.
      ──────────────────────────────────────────────────────── */}
      <div
        className="lg:hidden flex flex-col"
        style={{ paddingTop: "calc(79px + 48px)" }}
      >
        {/* Text */}
        <div className="flex flex-col gap-6 px-6 md:px-10 pb-10">
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(36px, 8vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            From outdated to +18% revenue in 90 days.
          </h1>
          <p
            className="text-[#e5e5e5]"
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: "25.6px" }}
          >
            A single-location independent C-store. An aging layout, no active
            vendor contracts, and low beverage category performance. Here's
            exactly what PBD did — and what it produced.
          </p>
        </div>

        {/* Image — flush right, crops internally like desktop */}
        <div className="flex justify-end">
          <div className="overflow-hidden" style={{ width: "85%", aspectRatio: "709/480" }}>
            <img
              src={imgHeroComposite}
              alt="City Express Marketplace · Las Vegas, NV"
              className="w-full h-full object-cover object-left-top pointer-events-none select-none"
            />
          </div>
        </div>
      </div>

    </section>
  );
}

// ─── Challenge Section ────────────────────────────────────────────────────────
function ChallengeSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-white px-6 md:px-10 lg:px-[80px] py-12 md:py-16 lg:py-[80px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[56px]">
        {/* Label + Heading */}
        <motion.div
          className="flex flex-col gap-[24px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-[#999] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            The Challenge
          </p>
          <h2
            className="text-[#111642]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: "1.1",
              letterSpacing: "-1.44px",
              maxWidth: "565px",
            }}
          >
            A store with real potential, held back by access.
          </h2>
        </motion.div>

        {/* 2-col grid: image left, text right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
          {/* Left: Store image */}
          <motion.div
            className="overflow-hidden"
            style={{ minHeight: "300px", maxHeight: "430px" }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={imgChallengeStore}
              alt="City Express store interior"
              className="w-full h-full object-cover"
              style={{ minHeight: "300px", maxHeight: "430px" }}
            />
          </motion.div>

          {/* Right: Body text + quote */}
          <motion.div
            className="flex flex-col justify-between gap-8 lg:gap-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {/* Body text */}
            <div className="flex flex-col gap-[24px] pt-[8px]">
              <p
                className="text-[#525252]"
                style={{ fontSize: "16px", fontWeight: 400, lineHeight: "21.6px" }}
              >
                City Express had strong foot traffic and loyal customers but was missing
                out on thousands in vendor rebates each month with no clear way to unlock them.
              </p>
              <p
                className="text-[#525252]"
                style={{ fontSize: "16px", fontWeight: 400, lineHeight: "21.6px" }}
              >
                An outdated store layout, underperforming beverage category, lack of national
                vendor contracts, and limited promotional visibility further weakened its ability
                to compete with a nearby national chain.
              </p>
            </div>

            {/* Quote block */}
            <div className="bg-[#fafafa] p-[16px] flex flex-col gap-[20px]">
              <p
                className="text-[#222]"
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "23px",
                  letterSpacing: "-0.8px",
                }}
              >
                "We knew the store could do more. We just didn't have the relationships or
                the buying power to make it happen on our own. We didn't know what we were
                missing until PBD showed us."
              </p>
              <div className="flex items-center gap-[12px]">
                <img
                  src={imgAvatarMJ}
                  alt="M.J Cole"
                  className="rounded-full object-cover shrink-0"
                  style={{ width: "36px", height: "36px" }}
                />
                <div className="flex flex-col">
                  <span
                    className="text-[#0a0a0a]"
                    style={{ fontSize: "14px", fontWeight: 500, lineHeight: "21px" }}
                  >
                    M.J Cole
                  </span>
                  <span
                    className="text-[#888]"
                    style={{ fontSize: "12px", fontWeight: 400, lineHeight: "19.5px" }}
                  >
                    Fuel &amp; Go Operator · Houston, TX
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Solution Section ─────────────────────────────────────────────────────────
const phases = [
  {
    label: "Days 1–30",
    title: "Migrate & Activate",
    description:
      "Pricing migrated to national programs. Volume baselines established. Rebate accrual begins.",
  },
  {
    label: "Days 31–60",
    title: "Assess & Order",
    description:
      "Onsite assessment. Competitive pricing analysis. Equipment ordered and scheduled.",
  },
  {
    label: "Days 61–90",
    title: "Reset & Install",
    description:
      "Full beverage cooler reset. Tobacco program activated. Promotional signage installed. Core-Mark product refresh.",
  },
  {
    label: "Ongoing",
    title: "Promote & Grow",
    description:
      "Aggressive vendor promotions live. Monthly rebates deposited. Foot traffic retrained.",
  },
];

function SolutionSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#fafafa] px-6 md:px-10 lg:px-[80px] py-12 md:py-16 lg:py-[80px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[56px]">
        {/* Label + Heading */}
        <motion.div
          className="flex flex-col gap-[24px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-[#999] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            The Solution
          </p>
          <h2
            className="text-[#111642]"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: "1.1",
              letterSpacing: "-1.44px",
              maxWidth: "565px",
            }}
          >
            90 days. Four phases. Zero cost to the store.
          </h2>
        </motion.div>

        {/* Phase timeline */}
        <motion.div
          className="flex flex-col gap-[30px]"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Phase labels row — desktop only */}
          <div className="hidden lg:flex items-center gap-0 relative">
            {/* Horizontal connector line */}
            <div
              className="absolute top-[50%] pointer-events-none"
              style={{
                left: "calc(25% + 60px)",
                right: "calc(25% + 60px)",
                height: "1px",
                background: "#E5E5E5",
                transform: "translateY(-50%)",
              }}
            />
            {phases.map((phase) => (
              <div key={phase.label} className="flex-1 flex justify-start">
                <span
                  className="relative z-10 bg-white border border-[#E5E5E5] text-[#EA1528] uppercase tracking-[1.68px] px-[10px] py-[10px]"
                  style={{ fontSize: "12px", fontWeight: 400, lineHeight: "16.8px" }}
                >
                  {phase.label}
                </span>
              </div>
            ))}
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                className="bg-white border border-[#f5f5f5] flex flex-col justify-between overflow-hidden"
                style={{ minHeight: "200px", padding: "16px" }}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08, ease: "easeOut" }}
              >
                {/* Mobile: show phase label inside card */}
                <div className="flex flex-col gap-2 lg:hidden mb-3">
                  <span
                    className="border border-[#E5E5E5] text-[#EA1528] uppercase tracking-[1.68px] px-[10px] py-[6px] w-fit"
                    style={{ fontSize: "11px", fontWeight: 400 }}
                  >
                    {phase.label}
                  </span>
                </div>
                <p
                  className="text-black"
                  style={{ fontSize: "16px", fontWeight: 500, lineHeight: "normal" }}
                >
                  {phase.title}
                </p>
                <p
                  className="text-[#737373]"
                  style={{ fontSize: "14px", fontWeight: 400, lineHeight: "20px" }}
                >
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Results Section ──────────────────────────────────────────────────────────
const resultBullets = [
  "Increased foot traffic & engagement",
  "Stronger vendor pricing & compliance",
  "Monthly rebate check",
];

const resultStats = [
  { value: "+18%", label: "Beverage sales increase" },
  { value: "$5K+", label: "Monthly vendor rebates" },
];

function ResultsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-[#111642] px-6 md:px-10 lg:px-[80px] py-12 md:py-16 lg:py-[80px]"
      style={{ fontFamily: "'Inter', sans-serif" }}
      data-navbar-theme="dark"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[56px]">
        {/* Label + Heading */}
        <motion.div
          className="flex flex-col gap-[36px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-[#888] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500 }}
          >
            Result
          </p>
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: "1.1",
              letterSpacing: "-1.44px",
              maxWidth: "717px",
            }}
          >
            Real, regular, and repeatable results in 90 days
          </h2>
        </motion.div>

        {/* 2-col: image left, results right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px]">
          {/* Left: Store image */}
          <motion.div
            className="overflow-hidden"
            style={{ height: "394px" }}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={imgResultsStore}
              alt="Store results after PBD program"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Bullets + Stats */}
          <motion.div
            className="flex flex-col justify-between gap-8 lg:gap-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            {/* Bullet list */}
            <div className="flex flex-col">
              {resultBullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-center gap-[12px] border-b border-[#414568] py-[20px]"
                >
                  <div className="bg-[#EA1528] shrink-0" style={{ width: "6px", height: "6px" }} />
                  <p
                    className="text-white"
                    style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", letterSpacing: "-0.16px" }}
                  >
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-[32px]">
              {resultStats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col gap-[16px] border-t border-[#292d55] pt-[12px]"
                  style={{ minWidth: "140px" }}
                >
                  <p
                    className="text-white"
                    style={{
                      fontSize: "72px",
                      fontWeight: 700,
                      lineHeight: "72px",
                      letterSpacing: "-2.16px",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[#d4d4d4]"
                    style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function ImpactCTASection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 md:px-10 lg:px-[80px]"
      style={{
        background: "linear-gradient(to bottom, #111642, #2b38a8)",
        fontFamily: "'Inter', sans-serif",
      }}
      data-navbar-theme="dark"
    >
      {/* Dot-grid background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={imgCtaDotGrid}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 1 }}
        />
      </div>

      {/* Radial red glow */}
      <div
        className="absolute pointer-events-none inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 60% at 20% 50%, rgba(234,21,40,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 py-[96px]">
        {/* Left: Heading + body */}
        <motion.div
          className="flex flex-col gap-[29px] max-w-[680px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(36px, 4.5vw, 65px)",
              fontWeight: 400,
              lineHeight: "64px",
              letterSpacing: "-1.68px",
            }}
          >
            This could be your store in 90 days.
          </h2>
          <p
            className="text-white"
            style={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "24.8px",
              maxWidth: "468px",
            }}
          >
            No fees. No risk. Just a stronger, more profitable store backed by
            30+ years of vendor relationships.
          </p>
        </motion.div>

        {/* Right: CTA button */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <Link
            to="/become-a-member"
            className="inline-flex items-center gap-2 bg-[#EA1528] border border-[#EA1528] text-white px-[25px] py-[13px] hover:bg-[#c8101f] hover:border-[#c8101f] transition-all duration-300 group whitespace-nowrap"
            style={{ fontSize: "14px", fontWeight: 500 }}
          >
            Become a Member
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ImpactPage() {
  return (
    <div className="size-full" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar forceDark />
      <ImpactHeroSection />
      <ChallengeSection />
      <SolutionSection />
      <ResultsSection />
      <LogoCloudSection />
      <ImpactCTASection />
      <div data-navbar-theme="dark" className="relative">
        <FooterSection />
      </div>
    </div>
  );
}
