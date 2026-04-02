import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router";
import Identity from "../../imports/Identity";

const navLinks = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Product Incubation", href: "/product-incubation" },
];

export function HowItWorksNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
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
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.label}
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
