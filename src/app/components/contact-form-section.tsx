import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import svgPaths from "../../imports/svg-b69dhnc7wk";

const storeCountOptions = ["1", "2–5", "6–10", "11–25", "25+"];
const salesAreaOptions = [
  "Under 1,500 sq ft",
  "1,500–3,000 sq ft",
  "3,000–5,000 sq ft",
  "Over 5,000 sq ft",
];
const fuelOptions = ["Branded", "Unbranded", "No Fuel"];

export function ContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    storeLocation: "",
    noOfStores: "",
    primaryDistributor: "",
    storeSalesArea: "",
    fuelBrand: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.6,
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[#D6EEFC]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0", position: "relative" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">
        {/* Section Label */}
        <p
          className="text-[#888] uppercase tracking-[0.15em] mb-[56px]"
          style={{ fontSize: "11.2px", fontWeight: 500 }}
        >
          Get In Touch
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Headline & Description */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.h2
                className="text-[#0a0a0a] max-w-[480px]"
                style={{
                  fontSize: "clamp(32px, 4vw, 48px)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                Ready to grow your store?
              </motion.h2>

              

              {/* Trust points */}
              <motion.div
                className="mt-10 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              >
                {[
                  "No membership fees or royalties",
                  "Full vendor program access from day one",
                  "Dedicated support & merchandising team",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <CheckCircle
                        size={16}
                        className="text-[#111642]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span
                      className="text-[#555]"
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 400,
                        lineHeight: 1.5,
                      }}
                    >
                      {point}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Contact info at bottom */}
            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <p
                className="text-[#888] uppercase tracking-[0.15em] mb-3"
                style={{ fontSize: "0.7rem", fontWeight: 400 }}
              >
                Or reach us directly
              </p>
              <a
                href="mailto:info@pbdwest.com"
                className="text-[#111642] hover:underline"
                style={{ fontSize: "0.875rem", fontWeight: 500 }}
              >
                info@pbdwest.com
              </a>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center h-full min-h-[400px] border border-[#E0E0E0] rounded-[12px] bg-white px-8 py-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-12 h-12 rounded-full border border-[#111642] flex items-center justify-center mb-6">
                  <CheckCircle size={24} className="text-[#111642]" />
                </div>
                <h3
                  className="text-[#0a0a0a] mb-3"
                  style={{
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Application received
                </h3>
                <p
                  className="text-[#555] max-w-[320px]"
                  style={{ fontSize: "0.875rem", lineHeight: 1.7 }}
                >
                  Thank you for your interest. A member of our team will be in
                  touch within 1–2 business days.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-[#E0E0E0] rounded-[12px] p-8 md:p-10 lg:p-10 flex flex-col gap-6 relative z-10"
              >
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="block text-[#0a0a0a]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.13px",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                      autoComplete="name"
                      className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] placeholder-[#999] outline-none focus:border-[#111642] transition-colors rounded-[12px]"
                      style={{ fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="block text-[#0a0a0a]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.13px",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      autoComplete="email"
                      className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] placeholder-[#999] outline-none focus:border-[#111642] transition-colors rounded-[12px]"
                      style={{ fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}
                    />
                  </div>
                </div>

                {/* Row 2: Contact + Store Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact"
                      className="block text-[#0a0a0a]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.13px",
                      }}
                    >
                      Contact
                    </label>
                    <input
                      type="tel"
                      id="contact"
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="(000) 000-0000"
                      required
                      autoComplete="tel"
                      className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] placeholder-[#999] outline-none focus:border-[#111642] transition-colors rounded-[12px]"
                      style={{ fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="storeLocation"
                      className="block text-[#0a0a0a]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.13px",
                      }}
                    >
                      Store Location
                    </label>
                    <input
                      type="text"
                      id="storeLocation"
                      name="storeLocation"
                      value={form.storeLocation}
                      onChange={handleChange}
                      placeholder="City, State"
                      required
                      autoComplete="address-level2"
                      className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] placeholder-[#999] outline-none focus:border-[#111642] transition-colors rounded-[12px]"
                      style={{ fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}
                    />
                  </div>
                </div>

                {/* Row 3: No. of Stores + Primary Distributor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="noOfStores"
                      className="block text-[#0a0a0a]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.13px",
                      }}
                    >
                      No. of Stores
                    </label>
                    <select
                      id="noOfStores"
                      name="noOfStores"
                      value={form.noOfStores}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] outline-none focus:border-[#111642] transition-colors appearance-none cursor-pointer rounded-[12px]"
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "normal",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {storeCountOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#0a0a0a]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="primaryDistributor"
                      className="block text-[#0a0a0a]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.13px",
                      }}
                    >
                      Primary Distributor
                    </label>
                    <input
                      type="text"
                      id="primaryDistributor"
                      name="primaryDistributor"
                      value={form.primaryDistributor}
                      onChange={handleChange}
                      placeholder="e.g. Core-Mark, McLane"
                      required
                      autoComplete="off"
                      className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] placeholder-[#999] outline-none focus:border-[#111642] transition-colors rounded-[12px]"
                      style={{ fontSize: "14px", fontWeight: 400, lineHeight: "normal" }}
                    />
                  </div>
                </div>

                {/* Row 4: Store Sales Area + Fuel Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="storeSalesArea"
                      className="block text-[#0a0a0a]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.13px",
                      }}
                    >
                      Store Sales Area
                    </label>
                    <select
                      id="storeSalesArea"
                      name="storeSalesArea"
                      value={form.storeSalesArea}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] outline-none focus:border-[#111642] transition-colors appearance-none cursor-pointer rounded-[12px]"
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "normal",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {salesAreaOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#0a0a0a]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="fuelBrand"
                      className="block text-[#0a0a0a]"
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        letterSpacing: "-0.13px",
                      }}
                    >
                      Fuel Brand / Unbranded
                    </label>
                    <select
                      id="fuelBrand"
                      name="fuelBrand"
                      value={form.fuelBrand}
                      onChange={handleChange}
                      required
                      className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] outline-none focus:border-[#111642] transition-colors appearance-none cursor-pointer rounded-[12px]"
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "normal",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="" disabled>
                        Select
                      </option>
                      {fuelOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#0a0a0a]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Button - red border with arrow icon */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 border border-[#EA1528] text-[#EA1528] px-6 py-3 hover:bg-[#EA1528] hover:text-white transition-all cursor-pointer w-fit"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  Submit Application
                  <ArrowRight size={16} />
                </button>

                
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}