import { Link } from "react-router";
import Container from "../../imports/Container";
import svgPaths from "../../imports/svg-17oktqildz";
import watermarkImage from "figma:asset/5912cf2c878b4927aca022f33fc41291a02a09b4.png";

export function FooterSection() {
  return (
    <footer
      className="bg-[#111642] relative w-full overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Watermark — absolute positioned behind content */}
      <div
        className="absolute pointer-events-none select-none"
        style={{ left: "373.15px", top: "392px", width: "1092.695px", height: "254.602px" }}
      >
        <img src={watermarkImage} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Main content wrapper */}
      <div
        className="relative flex flex-col w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]"
        style={{ paddingTop: "80px", gap: "48px" }}
      >
        {/* Top row: Logo + Nav columns */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Logo */}
          <Link to="/" className="relative shrink-0 block" style={{ width: "103px", height: "24px" }}>
            <div className="absolute inset-0">
              <Container />
            </div>
          </Link>

          {/* Nav columns side by side */}
          <div className="flex flex-wrap gap-10 lg:gap-x-[47px] lg:ml-auto">
            {/* COMPANY */}
            <div className="flex flex-col items-start" style={{ gap: "20px", width: "233px", paddingTop: "1px", paddingBottom: "1px" }}>
              <p
                className="font-semibold text-white uppercase whitespace-nowrap"
                style={{ fontSize: "11px", lineHeight: "16.5px", letterSpacing: "1.32px" }}
              >
                COMPANY
              </p>
              <div className="flex flex-col items-start" style={{ gap: "15px", paddingTop: "1px", paddingBottom: "1px", width: "100%" }}>
                {[
                  { label: "Programs", to: "/programs" },
                  { label: "How It Works", to: "/how-it-works" },
                  { label: "Vendor Network", to: "/vendor-network" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="font-normal text-white whitespace-nowrap hover:opacity-70 transition-opacity"
                    style={{ fontSize: "14px", lineHeight: "21px" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* SUPPORT */}
            <div className="flex flex-col items-start" style={{ gap: "20px", width: "233px", paddingTop: "1px", paddingBottom: "1px" }}>
              <p
                className="font-semibold text-white uppercase whitespace-nowrap"
                style={{ fontSize: "11px", lineHeight: "16.5px", letterSpacing: "1.32px" }}
              >
                SUPPORT
              </p>
              <div className="flex flex-col items-start" style={{ gap: "15px", paddingTop: "1px", paddingBottom: "1px", width: "100%" }}>
                {[
                  { label: "Contact Us", to: "/contact" },
                  { label: "Become a Member", to: "/join" },
                  { label: "Privacy Policy", to: "/privacy" },
                  { label: "Terms of Service", to: "/terms" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="font-normal text-white whitespace-nowrap hover:opacity-70 transition-opacity"
                    style={{ fontSize: "14px", lineHeight: "21px" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar: divider + social icons + copyright */}
        <div className="relative flex items-center justify-between border-t border-[rgba(255,255,255,0.12)] py-5 lg:h-[65px] lg:py-0">
          {/* Social icons — left side */}
          <div
            className="flex items-center"
            style={{ gap: "16px" }}
          >
            {/* LinkedIn */}
            <a
              href="#"
              className="rounded-full flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#EA1528] transition-all"
              style={{ width: "32px", height: "32px" }}
              aria-label="LinkedIn"
            >
              <div className="relative" style={{ width: "14px", height: "14px" }}>
                <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p17d70d00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={svgPaths.p73a5000} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={svgPaths.p34626280} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:info@pbdwest.com"
              className="rounded-full flex items-center justify-center border border-white text-white hover:bg-white hover:text-[#EA1528] transition-all"
              style={{ width: "32px", height: "32px" }}
              aria-label="Email"
            >
              <div className="relative" style={{ width: "14px", height: "14px" }}>
                <svg className="absolute block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d={svgPaths.p5c184f0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                  <path d={svgPaths.p2a640080} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
                </svg>
              </div>
            </a>
          </div>

          {/* Copyright — right side */}
          <p
            className="font-normal text-white whitespace-nowrap"
            style={{ fontSize: "12px", lineHeight: "18px" }}
          >
            © 2026 Power Buying Dealers. All rights reserved.
          </p>
        </div>

        {/* Spacer to show watermark below content */}
        <div style={{ height: "120px" }} />
      </div>
    </footer>
  );
}
