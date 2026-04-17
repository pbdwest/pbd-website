import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import bgImg from "../../assets/Form Section.png";
import { useIsMobile } from "./ui/use-mobile";

// Dark gas station background — same asset as CTA section

export function ContactFormSection() {
  const recipientEmail = "join@powerbuyingdealers.com";
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectBg = `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`;
  const selectClass = "w-full bg-white border border-[#E0E0E0] rounded-[8px] px-4 py-3 text-[#0a0a0a] outline-none focus:border-[#111642] transition-colors appearance-none cursor-pointer";
  const selectStyle: React.CSSProperties = { fontSize: "14px", fontWeight: 400, backgroundImage: selectBg, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);

    try {
      const payload = {
        ...form,
        _subject: "New PBD contact form submission",
      };

      const res = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
    } catch {
      setSubmitError("Unable to submit right now. Please try again in a moment.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white border border-[#E0E0E0] rounded-[8px] px-4 py-3 text-[#0a0a0a] placeholder-[#bbb] outline-none focus:border-[#111642] transition-colors";
  const inputStyle: React.CSSProperties = { fontSize: "14px", fontWeight: 400 };
  const labelStyle: React.CSSProperties = { fontSize: "13px", fontWeight: 500, letterSpacing: "-0.13px" };
  const isMobile = useIsMobile();
  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
      data-navbar-theme="dark"
    >
      {/* Background image */}
      <img
        src={bgImg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        aria-hidden
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px] py-[40px] md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Heading + description */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2
              className="text-white"
              style={{
                fontSize: isMobile ?  "clamp(26px, 3vw, 32px)" : "clamp(36px, 4.5vw, 65px)",
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: "-0.026em",
              }}
            >
              Ready to compete
              <br />
              Like a national chain
            </h2>
            <p
              className="text-white/80"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.6, maxWidth: "460px" }}
            >
              No fees. No royalties. Just vendor programs, rebates, and consulting that grow your store from day one.
            </p>
          </motion.div>

          {/* Right: White form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            {submitted ? (
              <motion.div
                className="bg-white rounded-[16px] flex flex-col items-center justify-center min-h-[400px] px-8 py-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="w-12 h-12 rounded-full border border-[#111642] flex items-center justify-center mb-6">
                  <CheckCircle size={24} className="text-[#111642]" />
                </div>
                <h3
                  className="text-[#0a0a0a] mb-3"
                  style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 400, letterSpacing: "-0.02em" }}
                >
                  Application received
                </h3>
                <p
                  className="text-[#555] max-w-[320px]"
                  style={{ fontSize: "14px", lineHeight: 1.7 }}
                >
                  Thank you for your interest. A member of our team will be in touch within 1–2 business days.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-[16px] px-4 py-10 md:p-10 flex flex-col gap-5"
              >
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[#0a0a0a]" style={labelStyle}>Name</label>
                    <input
                      type="text" id="name" name="name" value={form.name}
                      onChange={handleChange} placeholder="Full name" required autoComplete="name"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[#0a0a0a]" style={labelStyle}>Email</label>
                    <input
                      type="email" id="email" name="email" value={form.email}
                      onChange={handleChange} placeholder="you@example.com" required autoComplete="email"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2: Contact + Store Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact" className="text-[#0a0a0a]" style={labelStyle}>Contact</label>
                    <input
                      type="tel" id="contact" name="contact" value={form.contact}
                      onChange={(e) => { const v = e.target.value.replace(/\D/g, ""); if (v.length <= 10) setForm({ ...form, contact: v }); }}
                      placeholder="(000) 000-0000" required autoComplete="tel" maxLength={10} pattern="\d{10}"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="storeLocation" className="text-[#0a0a0a]" style={labelStyle}>Store Location</label>
                    <input
                      type="text" id="storeLocation" name="storeLocation" value={form.storeLocation}
                      onChange={handleChange} placeholder="City, State" required autoComplete="address-level2"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 3: No. of Stores + Primary Distributor */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="noOfStores" className="text-[#0a0a0a]" style={labelStyle}>No. of Stores</label>
                    <select id="noOfStores" name="noOfStores" value={form.noOfStores} onChange={handleChange} required className={selectClass} style={selectStyle}>
                      <option value="" disabled>Select</option>
                      {["1", "2–5", "6–10", "11–25", "25+"].map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="primaryDistributor" className="text-[#0a0a0a]" style={labelStyle}>Primary Distributor</label>
                    <input
                      type="text" id="primaryDistributor" name="primaryDistributor" value={form.primaryDistributor}
                      onChange={handleChange} placeholder="e.g. Core-Mark, McLane" autoComplete="off"
                      className={inputClass} style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 4: Store Sales Area + Fuel Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="storeSalesArea" className="text-[#0a0a0a]" style={labelStyle}>Store Sales Area</label>
                    <select id="storeSalesArea" name="storeSalesArea" value={form.storeSalesArea} onChange={handleChange} required className={selectClass} style={selectStyle}>
                      <option value="" disabled>Select</option>
                      {["Under 1,500 sq ft", "1,500–3,000 sq ft", "3,000–5,000 sq ft", "Over 5,000 sq ft"].map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fuelBrand" className="text-[#0a0a0a]" style={labelStyle}>Fuel Brand / Unbranded</label>
                    <select id="fuelBrand" name="fuelBrand" value={form.fuelBrand} onChange={handleChange} required className={selectClass} style={selectStyle}>
                      <option value="" disabled>Select</option>
                      {["Branded", "Unbranded", "No Fuel"].map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-3 border border-[#EA1528] text-[#EA1528] px-6 py-3 hover:bg-[#EA1528] hover:text-white transition-all cursor-pointer group"
                    style={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  {submitError && (
                    <p className="mt-3 text-[#EA1528]" style={{ fontSize: "13px", fontWeight: 500 }}>
                      {submitError}
                    </p>
                  )}
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
