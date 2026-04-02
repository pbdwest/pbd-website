import { Link } from "react-router";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { ArrowRight } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="size-full">
      <Navbar />
      <div style={{ paddingTop: "79px" }}>
        <section
          className="bg-[#111642] min-h-[calc(100vh-79px)] flex items-center justify-center relative overflow-hidden"
          data-navbar-theme="dark"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {/* Grid lines */}
          <div className="absolute inset-0 pointer-events-none">
            {[0, 25, 50, 75, 100].map((pct) => (
              <div
                key={pct}
                className="absolute top-0 bottom-0 w-[0.5px] bg-[#292d55]"
                style={{ left: `${pct}%` }}
              />
            ))}
          </div>
          {/* Decorative red accent */}
          <div className="absolute bg-[#ea1528]" style={{ right: 0, top: 0, width: "12%", height: "80px" }} />
          {/* Content */}
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-start w-full">
            <p className="text-[#888] uppercase tracking-[0.15em] mb-6" style={{ fontSize: "0.7rem", fontWeight: 500 }}>
              Error 404
            </p>
            <h1
              className="text-white mb-6"
              style={{ fontSize: "clamp(80px, 15vw, 160px)", fontWeight: 500, lineHeight: 1, letterSpacing: "-0.04em" }}
            >
              404
            </h1>
            <h2
              className="text-white mb-4"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-0.02em" }}
            >
              Page not found.
            </h2>
            <p className="text-[#888] mb-10 max-w-[420px]" style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}>
              The page you're looking for doesn't exist or has been moved. Try heading back to the homepage.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white text-[#111642] px-6 py-3 hover:bg-[#EA1528] hover:text-white transition-all"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                Return to Home
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[#292d55] text-[#888] px-6 py-3 hover:border-white hover:text-white transition-all"
                style={{ fontSize: "14px", fontWeight: 400 }}
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div data-navbar-theme="dark">
        <FooterSection />
      </div>
    </div>
  );
}
