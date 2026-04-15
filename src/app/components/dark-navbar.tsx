import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-b99e162ar8";

const navLinks = [
  {
    label: "Programs",
    href: "#",
    dropdown: [
      { label: "PBD Program", href: "/pbd-program" },
      { label: "Jumpstart Program", href: "/jumpstart-program" },
    ],
  },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Vendor Network", href: "/vendor-network" },
  { label: "Technology", href: "/technology" },
];

function PBDLogo() {
  const fill = "white";
  return (
    <Link to="/" className="relative z-10 flex items-center shrink-0" aria-label="Go to homepage">
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
    </Link>
  );
}

interface DarkNavbarProps {
  activePage?: string; // e.g., "/about", "/how-it-works", etc.
}

export function DarkNavbar({ activePage }: DarkNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgClass = scrolled
    ? "bg-[#111642]/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  const isLinkActive = (href: string) => {
    return activePage === href;
  };

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
        <div className="absolute inset-0 border-b border-[#292d55] pointer-events-none transition-colors duration-300" />

        {/* Logo */}
        <PBDLogo />

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-[32px] relative z-10">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.href);
            
            return (
              <div key={link.label}>
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredDropdown(link.label)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    <button
                      className={`${
                        isActive ? "text-white" : "text-white/70"
                      } hover:text-white transition-colors duration-300 whitespace-nowrap flex items-center gap-1 bg-transparent border-none cursor-pointer`}
                      style={{ fontSize: "14px", fontWeight: 400, lineHeight: "21px" }}
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    {hoveredDropdown === link.label && (
                      <div
                        className="absolute left-0 pt-2 min-w-[180px]"
                        style={{ top: "100%" }}
                      >
                        <div className="bg-white border border-[#e5e5e5] rounded-sm shadow-lg overflow-hidden">
                          {link.dropdown.map((dropdownLink) => {
                            const isDropdownActive = isLinkActive(dropdownLink.href);
                            return (
                              <Link
                                key={dropdownLink.label}
                                to={dropdownLink.href}
                                className={`block px-4 py-3 transition-colors whitespace-nowrap ${
                                  isDropdownActive
                                    ? "bg-[#EA1528] text-white"
                                    : "text-[#111642] hover:bg-[#f5f5f5]"
                                }`}
                                style={{ fontSize: "14px", fontWeight: 400 }}
                              >
                                {dropdownLink.label}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={`${
                      isActive ? "text-white" : "text-white/70"
                    } hover:text-white transition-colors duration-300 whitespace-nowrap`}
                    style={{ fontSize: "14px", fontWeight: 400, lineHeight: "21px" }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center shrink-0 relative z-10">
          <Link
            to="/contact"
            className="border border-white text-white hover:bg-[#EA1528] hover:text-white hover:border-[#EA1528] transition-all duration-300 whitespace-nowrap"
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
          className="lg:hidden text-white p-1 relative z-10 transition-colors duration-300"
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
            className="lg:hidden bg-[#111642]/95 backdrop-blur-md overflow-hidden border-t border-[#292d55]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href);
                
                return (
                  <div key={link.label}>
                    {link.dropdown ? (
                      <div className="flex flex-col">
                        <button
                          onClick={() =>
                            setMobileDropdownOpen(
                              mobileDropdownOpen === link.label ? null : link.label
                            )
                          }
                          className={`${
                            isActive ? "text-white" : "text-white/70"
                          } hover:text-white py-3 border-b border-[#292d55] flex items-center justify-between transition-colors bg-transparent w-full text-left`}
                          style={{ fontSize: "14px", fontWeight: 400 }}
                        >
                          {link.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              mobileDropdownOpen === link.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {mobileDropdownOpen === link.label && (
                          <div className="flex flex-col pl-4 py-2">
                            {link.dropdown.map((dropdownLink) => {
                              const isDropdownActive = isLinkActive(dropdownLink.href);
                              return (
                                <Link
                                  key={dropdownLink.label}
                                  to={dropdownLink.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`${
                                    isDropdownActive ? "text-white" : "text-white/70"
                                  } hover:text-white py-2 transition-colors`}
                                  style={{ fontSize: "14px", fontWeight: 400 }}
                                >
                                  {dropdownLink.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${
                          isActive ? "text-white" : "text-white/70"
                        } hover:text-white py-3 border-b border-[#292d55] transition-colors`}
                        style={{ fontSize: "14px", fontWeight: 400 }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                );
              })}
              <div className="mt-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center border border-white text-white hover:bg-[#EA1528] hover:text-white hover:border-[#EA1528] transition-all"
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
