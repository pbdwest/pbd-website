import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import Identity from "../../imports/Identity";

const navLinks = [
  { label: "About Us", href: "/about" },
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

export function LightNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div
        className="relative flex items-center justify-between max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[64px]"
        style={{ height: "79px" }}
      >
        <div className="absolute inset-0 border-b border-[#e5e5e5] pointer-events-none" />

        <Link to="/" className="relative z-10 flex items-center shrink-0">
          <div className="relative w-[103px] h-[24px]">
            <Identity />
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-[32px] relative z-10">
          {navLinks.map((link) => {
            const isActive = link.dropdown
              ? link.dropdown.some((dropdownLink) => location.pathname === dropdownLink.href)
              : location.pathname === link.href;

            return (
              <div key={link.label}>
                {link.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setHoveredDropdown(link.label)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    <button
                      className={`transition-colors duration-300 whitespace-nowrap flex items-center gap-1 bg-transparent border-none cursor-pointer ${
                        isActive
                          ? "text-[#EA1528]"
                          : "text-[#111642] hover:text-[#111642]/60"
                      }`}
                      style={{
                        fontSize: "14px",
                        fontWeight: isActive ? 500 : 400,
                        lineHeight: "21px",
                      }}
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
                            const isDropdownActive = location.pathname === dropdownLink.href;
                            return (
                              <Link
                                key={dropdownLink.label}
                                to={dropdownLink.href}
                                className={`block px-4 py-3 transition-colors whitespace-nowrap ${
                                  isDropdownActive
                                    ? "text-[#EA1528] bg-[#f5f5f5]"
                                    : "text-[#111642] hover:bg-[#f5f5f5]"
                                }`}
                                style={{
                                  fontSize: "14px",
                                  fontWeight: isDropdownActive ? 500 : 400,
                                }}
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
                    className={`transition-colors duration-300 whitespace-nowrap ${
                      isActive
                        ? "text-[#EA1528]"
                        : "text-[#111642] hover:text-[#111642]/60"
                    }`}
                    style={{
                      fontSize: "14px",
                      fontWeight: isActive ? 500 : 400,
                      lineHeight: "21px",
                    }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center shrink-0 relative z-10">
          <Link
            to="/contact"
            className="border border-[#EA1528] text-[#EA1528] hover:bg-[#EA1528] hover:text-white hover:border-[#EA1528] transition-all duration-300 whitespace-nowrap"
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

        <button
          className="lg:hidden text-[#111642] p-1 relative z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white backdrop-blur-md overflow-hidden border-t border-[#e5e5e5]"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = link.dropdown
                  ? link.dropdown.some((dropdownLink) => location.pathname === dropdownLink.href)
                  : location.pathname === link.href;

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
                          className={`py-3 border-b border-[#e5e5e5] flex items-center justify-between transition-colors bg-transparent w-full text-left ${
                            isActive
                              ? "text-[#EA1528]"
                              : "text-[#111642] hover:text-[#111642]/60"
                          }`}
                          style={{
                            fontSize: "14px",
                            fontWeight: isActive ? 500 : 400,
                          }}
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
                              const isDropdownActive = location.pathname === dropdownLink.href;
                              return (
                                <Link
                                  key={dropdownLink.label}
                                  to={dropdownLink.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`py-2 transition-colors ${
                                    isDropdownActive
                                      ? "text-[#EA1528]"
                                      : "text-[#111642] hover:text-[#111642]/60"
                                  }`}
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: isDropdownActive ? 500 : 400,
                                  }}
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
                        className={`py-3 border-b border-[#e5e5e5] transition-colors ${
                          isActive
                            ? "text-[#EA1528]"
                            : "text-[#111642] hover:text-[#111642]/60"
                        }`}
                        style={{
                          fontSize: "14px",
                          fontWeight: isActive ? 500 : 400,
                        }}
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
                  className="block text-center border border-[#EA1528] text-[#EA1528] hover:bg-[#EA1528] hover:text-white hover:border-[#EA1528] transition-all"
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
