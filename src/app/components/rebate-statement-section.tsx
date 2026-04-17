import { useRef } from "react";
import { motion, useInView } from "motion/react";

// ─── Table row ────────────────────────────────────────────────────────────────
function TableRow({
  vendor,
  sales,
  rate,
  amount,
  bg = "#414568",
}: {
  vendor: string;
  sales: string;
  rate: string;
  amount: string;
  bg?: string;
}) {
  const cell = "flex-[1_0_0] min-h-px min-w-px relative";
  const txt: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "23.8px",
    color: "#fff",
    padding: "15px 0 15px 24px",
    whiteSpace: "nowrap",
  };
  return (
    <div className="flex shrink-0 w-full" style={{ background: bg, height: "55.797px" }}>
      <div className={cell}><p style={txt}>{vendor}</p></div>
      <div className={cell}><p style={txt}>{sales}</p></div>
      <div className={cell}><p style={txt}>{rate}</p></div>
      <div className={cell}><p style={txt}>{amount}</p></div>
    </div>
  );
}

// ─── Bullet row ───────────────────────────────────────────────────────────────
function BulletRow({ text }: { text: string }) {
  return (
    <div
      className="flex items-center gap-3"
      style={{
        height: "62.594px",
        borderBottom: "1px solid #292d55",
      }}
    >
      <div className="shrink-0" style={{ width: "6px", height: "6px", background: "#ea1528" }} />
      <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "21.6px", color: "#fff", whiteSpace: "nowrap" }}>
        {text}
      </p>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export function RebateStatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111642] overflow-hidden hidden"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] flex flex-col gap-[40px] items-center">

        {/* ── Header ── */}
        <motion.div
          className="flex flex-col gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-[#888] uppercase tracking-[1.68px]"
            style={{ fontSize: "11.2px", fontWeight: 500, lineHeight: "16.8px" }}
          >
            Transparency
          </p>
          <p
            className="text-white"
            style={{
              fontSize: "clamp(32px, 3.5vw, 48px)",
              fontWeight: 400,
              lineHeight: "52.8px",
              letterSpacing: "-1.44px",
              maxWidth: "588px",
            }}
          >
            City express marketplace, real store, real numbers.
          </p>
        </motion.div>

        {/* ── Two-column grid: left=content, right=table ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] w-full items-start">

          {/* ── LEFT: description + bullets + callout ── */}
          <motion.div
            className="flex flex-col items-start justify-between h-full gap-[26px]"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          >
            {/* Top: description + bullet rows */}
            <div className="flex flex-col gap-[26px] w-full">
              {/* Description */}
              <p
                className="text-[#d4d4d4]"
                style={{ fontSize: "14px", fontWeight: 400, lineHeight: "23.8px" }}
              >
                Every month you receive a detailed statement showing exactly how your rebates were calculated. You keep running your store. PBD handles the vendor programs, tracks performance, and sends you a check every single month. What we did:
              </p>

              {/* Bullet rows */}
              <div className="flex flex-col w-full">
                <BulletRow text="Full beverage cooler reset" />
                <BulletRow text="New promotional signage installed" />
                <BulletRow text="Tobacco program setup & activation" />
                <BulletRow text="Intro product refresh with Core-Mark" />
              </div>
            </div>

            {/* Bottom: $5,000+ callout */}
            <div
              className="w-full flex flex-col gap-4 shrink-0 mt-4"
              style={{
                background: "#ea1528",
                borderTop: "1px solid #292d55",
                padding: "12px",
                height: "135px",
                justifyContent: "center",
              }}
            >
              <p
                className="text-white"
                style={{
                  fontSize: "0px",
                  lineHeight: 0,
                  fontWeight: 700,
                  letterSpacing: "-2.16px",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "60px", lineHeight: "72px" }}>$5,000+ </span>
                <span style={{ fontSize: "31px", lineHeight: "72px" }}>/ month</span>
              </p>
              <p
                className="text-white"
                style={{ fontSize: "14px", fontWeight: 400, lineHeight: "22.4px" }}
              >
                100% funded through vendor volume. No margin loss.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: rebate statement table ── */}
          <motion.div
            className="flex flex-col overflow-hidden w-full"
            style={{ background: "rgba(255,255,255,0.09)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {/* Table title bar */}
            <div
              className="flex items-center justify-between shrink-0 w-full px-6"
              style={{ background: "#414568", height: "55.797px" }}
            >
              <p style={{ fontSize: "18px", fontWeight: 600, lineHeight: "23.8px", color: "#fff" }}>
                PBD Rebate Statement
              </p>
              <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "23.8px", color: "#fff" }}>
                March 1–31, 2026
              </p>
            </div>

            {/* Column headers */}
            <div
              className="flex shrink-0 w-full"
              style={{ background: "#292d55", height: "55.797px" }}
            >
              {["Vendor Program", "Qualified Sales", "Rebate Rate", "Rebate Amount"].map((h) => (
                <div key={h} className="flex-[1_0_0] min-h-px min-w-px">
                  <p style={{
                    fontSize: "14px", fontWeight: 400, lineHeight: "23.8px",
                    color: "#fff", padding: "15px 0 15px 24px", whiteSpace: "nowrap",
                  }}>
                    {h}
                  </p>
                </div>
              ))}
            </div>

            {/* Data rows — all #414568 per Figma */}
            <TableRow vendor="Coca-Cola Promo"  sales="$8,240" rate="3.2%"       amount="$263.68" />
            <TableRow vendor="Frito-Lay Display" sales="$4,180" rate="$0.15/unit" amount="$186.50" />
            <TableRow vendor="Red Bull Cooler"  sales="$3,620" rate="4.0%"       amount="$144.80" />
            <TableRow vendor="Mondelez Snacks"  sales="$2,950" rate="2.8%"       amount="$82.60"  />
            <TableRow vendor="Mars Wrigley"     sales="$1,890" rate="3.5%"       amount="$66.15"  />

            {/* Gross rebate — #292d55, right-aligned amount */}
            <div className="flex shrink-0 w-full" style={{ background: "#292d55", height: "55.797px" }}>
              <div style={{ width: "327px", flexShrink: 0 }}>
                <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "23.8px", color: "#fff", padding: "15px 0 15px 24px", whiteSpace: "nowrap" }}>
                  Gross Rebate
                </p>
              </div>
              <div className="flex-1 flex items-center justify-end pr-6">
                <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "23.8px", color: "#fff" }}>
                  $743.73
                </p>
              </div>
            </div>

            {/* PBD fee — #292d55, red amount */}
            <div className="flex shrink-0 w-full" style={{ background: "#292d55", height: "55.797px" }}>
              <div style={{ width: "327px", flexShrink: 0 }}>
                <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "23.8px", color: "#fff", padding: "15px 0 15px 24px", whiteSpace: "nowrap" }}>
                  PBD Operations Fee (10%)
                </p>
              </div>
              <div className="flex-1 flex items-center justify-end pr-6">
                <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "23.8px", color: "#f9200d" }}>
                  -$74.37
                </p>
              </div>
            </div>

            {/* Net payment — #414568, green bold amount */}
            <div className="flex shrink-0 w-full" style={{ background: "#414568", height: "55.797px" }}>
              <div style={{ width: "327px", flexShrink: 0 }}>
                <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "23.8px", color: "#fff", padding: "15px 0 15px 24px", whiteSpace: "nowrap" }}>
                  Net Payment to Your Store
                </p>
              </div>
              <div className="flex-1 flex items-center justify-end pr-6">
                <p style={{ fontSize: "23px", fontWeight: 700, lineHeight: "23.8px", color: "#7ff90d" }}>
                  $669.36
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
