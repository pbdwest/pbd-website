import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";

// ─── Shared input style ───────────────────────────────────────────────────────
const inputCls =
  "w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] placeholder-[#999] outline-none focus:border-[#111642] transition-colors rounded-[12px]";
const inputSty: React.CSSProperties = { fontSize: "14px", fontWeight: 400 };

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="block text-[#0a0a0a]"
        style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "-0.13px" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(formRef, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="size-full" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar forceDark />

      {/* ── Full-height split layout — mirrors become-a-member spacing ── */}
      <div
        className="relative grid grid-cols-1 lg:grid-cols-2"
        style={{ paddingTop: "79px", minHeight: "928px" }}
        data-navbar-theme="dark"
      >
        {/* ── LEFT: Navy context panel ── */}
        <div
          className="relative flex flex-col justify-between px-6 py-12 md:px-12 md:py-16 lg:px-[80px] lg:py-[143px] overflow-hidden"
          style={{ background: "#111642", minHeight: "849px" }}
        >
          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* Top: Label + Heading + Body + Contact details */}
            <div className="flex flex-col gap-[40px]">
              {/* Label + heading + body */}
              <div className="flex flex-col gap-4">
                <motion.p
                  className="text-[#888] uppercase tracking-[1.68px]"
                  style={{ fontSize: "11.2px", fontWeight: 500 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Contact Us
                </motion.p>
                <motion.h1
                  className="text-white"
                  style={{
                    fontSize: "52px",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-1.56px",
                    maxWidth: "440px",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  Let's talk about your stores.
                </motion.h1>
                <motion.p
                  className="text-[#aaa]"
                  style={{ fontSize: "16px", fontWeight: 400, lineHeight: "20.15px", maxWidth: "400px" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  Whether you're exploring membership, have questions about vendor
                  programs, or want to understand how PBD works — we'll get back
                  to you within one business day.
                </motion.p>
              </div>

              {/* Contact details */}
              <motion.div
                className="flex flex-col gap-0"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                {[
                  {
                    label: "Email",
                    content: (
                      <a
                        href="mailto:info@pbdwest.com"
                        className="text-white hover:text-[#EA1528] transition-colors"
                        style={{ fontSize: "14px", fontWeight: 400, lineHeight: "19.5px" }}
                      >
                        info@pbdwest.com
                      </a>
                    ),
                  },
                  {
                    label: "Membership",
                    content: (
                      <Link
                        to="/become-a-member"
                        className="inline-flex items-center gap-2 text-[#EA1528] hover:underline"
                        style={{ fontSize: "14px", fontWeight: 400, lineHeight: "19.5px" }}
                      >
                        Apply to become a member
                        <ArrowRight size={13} />
                      </Link>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 py-4 border-b border-[#292d55]"
                    style={{ borderTop: i === 0 ? "1px solid #292d55" : undefined }}
                  >
                    <span
                      className="text-[#555] uppercase tracking-[1.2px]"
                      style={{ fontSize: "12px", fontWeight: 500 }}
                    >
                      {item.label}
                    </span>
                    {item.content}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom note */}
            <motion.p
              className="relative z-10 text-[#444]"
              style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.6 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              PBD West — serving independent convenience retail across the
              western United States.
            </motion.p>
          </div>
        </div>

        {/* ── RIGHT: White form panel ── */}
        <div
          ref={formRef}
          className="bg-white flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-[64px] lg:pr-[80px] lg:py-[143px]"
          style={{ minHeight: "849px" }}
        >
          {submitted ? (
            <motion.div
              className="flex flex-col gap-6 max-w-[520px]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-10 h-10 rounded-full border border-[#111642] flex items-center justify-center">
                <CheckCircle size={18} className="text-[#111642]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-3">
                <h2
                  className="text-[#0a0a0a]"
                  style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em" }}
                >
                  Message received.
                </h2>
                <p className="text-[#555]" style={{ fontSize: "15px", fontWeight: 400, lineHeight: 1.7 }}>
                  We'll be in touch within one business day. Looking to join the
                  network?{" "}
                  <Link
                    to="/become-a-member"
                    className="text-[#EA1528] underline underline-offset-2 hover:no-underline transition-all"
                  >
                    Apply for membership here.
                  </Link>
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              style={{ paddingTop: "36px" }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Name">
                    <input
                      type="text" id="name" name="name"
                      value={form.name} onChange={handleChange}
                      placeholder="Full name" required autoComplete="name"
                      className={inputCls} style={inputSty}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email" id="email" name="email"
                      value={form.email} onChange={handleChange}
                      placeholder="you@example.com" required autoComplete="email"
                      className={inputCls} style={inputSty}
                    />
                  </Field>
                </div>

                {/* Phone */}
                <Field label="Phone (optional)">
                  <input
                    type="tel" id="contact" name="contact"
                    value={form.contact} onChange={handleChange}
                    placeholder="(000) 000-0000" autoComplete="tel"
                    className={inputCls} style={inputSty}
                  />
                </Field>

                {/* Message */}
                <Field label="Message">
                  <textarea
                    id="message" name="message"
                    value={form.message} onChange={handleChange}
                    placeholder="How can we help?"
                    required rows={5}
                    className="w-full bg-white border border-[#E0E0E0] px-4 py-3 text-[#0a0a0a] placeholder-[#999] outline-none focus:border-[#111642] transition-colors rounded-[12px] resize-none"
                    style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.6 }}
                  />
                </Field>

                {/* Submit */}
                <div className="flex flex-col gap-[12px]">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 border border-[#EA1528] text-[#EA1528] px-[25px] py-[13px] hover:bg-[#EA1528] hover:text-white transition-all cursor-pointer w-fit group"
                    style={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    Send Message
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[#999]" style={{ fontSize: "12px", fontWeight: 400, lineHeight: "19.2px" }}>
                    Looking to join?{" "}
                    <Link
                      to="/become-a-member"
                      className="text-[#111642] underline underline-offset-2 hover:text-[#EA1528] transition-colors"
                    >
                      Apply for membership
                    </Link>
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </div>
      </div>

      <div data-navbar-theme="dark" className="relative">
        <FooterSection />
      </div>
    </div>
  );
}
