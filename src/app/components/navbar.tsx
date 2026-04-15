import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/svg-b99e162ar8";
import Identity from "../../imports/Identity";

const navLinks = [
  { label: "Programs", href: "/programs" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Vendor Network", href: "/vendor-network" },
];

function PBDLogo({ dark }: { dark: boolean }) {
  const fill = dark ? "#111642" : "white";
  return (
    <div className="relative w-[103px] h-[24px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 103 24"
      >
        {/* Icon mark (lightning bolt circles) */}
        <g>
          <path d={svgPaths.p1a7f9d70} fill={fill} transform="translate(7.27, 3.12) scale(1)" />
          <path d={svgPaths.p206b5100} fill={fill} transform="translate(0, 2.24) scale(1)" />
          <path d={svgPaths.p31a7dc40} fill={fill} transform="translate(2.92, 12.32) scale(1)" />
          <path d={svgPaths.p36279c00} fill={fill} transform="translate(5.43, 0) scale(1)" />
        </g>
        {/* Wordmark: PBD */}
        <g>
          <path d={svgPaths.p1e1ad500} fill={fill} transform="translate(23.22, 2.56) scale(1)" />
          <path d={svgPaths.p23f1f180} fill={fill} transform="translate(50.02, 2.64) scale(1)" />
          <path d={svgPaths.p3d46780} fill={fill} transform="translate(76.99, 2.64) scale(1)" />
        </g>
      </svg>
    </div>
  );
}

export function Navbar({ forceDark = false }: { forceDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const { pathname } = useLocation();

  const detectTheme = useCallback(() => {
    if (forceDark) {
      setScrolled(window.scrollY > 50);
      setIsLightTheme(false);
      if (!isInitialized) setIsInitialized(true);
      return;
    }

    const currentScrollY = window.scrollY;
    setScrolled(currentScrollY > 50);

    // At the very top of the page (scroll = 0), force dark theme
    if (currentScrollY === 0) {
      setIsLightTheme(false);
      if (!isInitialized) {
        setIsInitialized(true);
      }
      return;
    }

    // Check what's behind the navbar at its midpoint
    const navHeight = 79;
    const checkY = navHeight / 2;
    const checkX = window.innerWidth / 2;

    // Temporarily hide navbar to check what's behind it
    const navEl = document.querySelector("nav");
    if (navEl) {
      const prevPointerEvents = navEl.style.pointerEvents;
      navEl.style.pointerEvents = "none";
      const el = document.elementFromPoint(checkX, checkY);
      navEl.style.pointerEvents = prevPointerEvents;

      if (el) {
        // Walk up the DOM to find a data-navbar-theme attribute
        const themed = el.closest("[data-navbar-theme]");
        setIsLightTheme(!themed || themed.getAttribute("data-navbar-theme") !== "dark");
      }
    }
    
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [isInitialized, forceDark]);

  useEffect(() => {
    window.addEventListener("scroll", detectTheme, { passive: true });
    window.addEventListener("resize", detectTheme, { passive: true });
    detectTheme();
    return () => {
      window.removeEventListener("scroll", detectTheme);
      window.removeEventListener("resize", detectTheme);
    };
  }, [detectTheme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Theme-dependent styles
  const textColor = isLightTheme && scrolled ? "text-[#111642]" : "text-white";
  const textHover = isLightTheme && scrolled ? "hover:text-[#111642]/60" : "hover:text-white/70";
  const borderColor = isLightTheme && scrolled ? "border-[#EA1528]" : "border-white";
  const ctaTextColor = isLightTheme && scrolled ? "text-[#EA1528]" : "text-white";
  const ctaHoverBg = "hover:bg-[#EA1528] hover:text-white hover:border-[#EA1528]";
  const navBorderBottom = isLightTheme && scrolled ? "border-[#e5e5e5]" : "border-[#292d55]";

  const bgClass = forceDark
    ? scrolled
      ? "bg-[#111642]/95 backdrop-blur-md shadow-lg"
      : "bg-[#111642]"
    : scrolled
      ? isLightTheme
        ? "bg-white/95 backdrop-blur-md shadow-lg"
        : "bg-[#111642]/95 backdrop-blur-md shadow-lg"
      : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Desktop Nav */}
      <div
        className="relative flex items-center justify-between max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[64px]"
        style={{ height: "79px" }}
      >
        {/* Bottom border */}
        <div className={`absolute inset-0 border-b ${navBorderBottom} pointer-events-none transition-colors duration-300`} />

        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center shrink-0">
          {isLightTheme && scrolled ? (
            <div className="relative w-[103px] h-[24px]">
              <Identity />
            </div>
          ) : (
            <PBDLogo dark={false} />
          )}
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-[32px] relative z-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`relative transition-colors duration-300 whitespace-nowrap ${
                  isActive
                    ? isLightTheme && scrolled ? "text-[#111642]" : "text-white"
                    : `${textColor} ${textHover}`
                }`}
                style={{ fontSize: "14px", fontWeight: isActive ? 500 : 400, lineHeight: "21px" }}
              >
                {link.label}
                {/* Active underline */}
                {isActive && (
                  <span
                    className="absolute left-0 right-0 bottom-[-4px] h-[2px]"
                    style={{ background: "#EA1528" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center shrink-0 relative z-10">
          <Link
            to="/join"
            className={`border ${borderColor} ${ctaTextColor} ${ctaHoverBg} transition-all duration-300 whitespace-nowrap`}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "21px",
              padding: "9px 21px",
            }}
          >
            Become A Member
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden ${textColor} p-1 relative z-10 transition-colors duration-300`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`lg:hidden backdrop-blur-md overflow-hidden border-t ${
              isLightTheme && scrolled
                ? "bg-white/95 border-[#e5e5e5]"
                : "bg-[#111642]/95 border-[#292d55]"
            }`}
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 border-b ${
                      isLightTheme && scrolled ? "border-[#e5e5e5]" : "border-[#292d55]"
                    } transition-colors ${
                      isActive
                        ? isLightTheme && scrolled ? "text-[#111642]" : "text-white"
                        : `${textColor} ${textHover}`
                    }`}
                    style={{ fontSize: "14px", fontWeight: isActive ? 500 : 400 }}
                  >
                    {link.label}
                    {/* Active dot indicator */}
                    {isActive && (
                      <span
                        className="shrink-0 rounded-full"
                        style={{ width: "6px", height: "6px", background: "#EA1528" }}
                      />
                    )}
                  </Link>
                );
              })}
              <div className="mt-4">
                <Link
                  to="/join"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-center border ${borderColor} ${ctaTextColor} ${ctaHoverBg} transition-all`}
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "12px 21px",
                  }}
                >
                  Become A Member
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}