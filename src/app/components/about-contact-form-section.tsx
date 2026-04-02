import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";

export function AboutContactFormSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    storeName: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#FFFFFF] py-16 md:py-24"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Left: Headline */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2
              className="text-[#0a0a0a] mb-6"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to grow your store?
            </h2>
            <p
              className="text-[#555] max-w-[450px]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
            >
              Join PBD and start accessing vendor programs, merchandising
              support, and promotional funding that drives real growth.
            </p>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#333] mb-2"
                    style={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#ddd] focus:border-[#111642] focus:outline-none transition-colors"
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#333] mb-2"
                    style={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#ddd] focus:border-[#111642] focus:outline-none transition-colors"
                    style={{ fontSize: "15px" }}
                  />
                </div>
              </div>

              {/* Phone & Store Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#333] mb-2"
                    style={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#ddd] focus:border-[#111642] focus:outline-none transition-colors"
                    style={{ fontSize: "15px" }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="storeName"
                    className="block text-[#333] mb-2"
                    style={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    Store Name *
                  </label>
                  <input
                    type="text"
                    id="storeName"
                    name="storeName"
                    value={formData.storeName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-[#ddd] focus:border-[#111642] focus:outline-none transition-colors"
                    style={{ fontSize: "15px" }}
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-[#333] mb-2"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  Location (City, State) *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#ddd] focus:border-[#111642] focus:outline-none transition-colors"
                  style={{ fontSize: "15px" }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#333] mb-2"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-[#ddd] focus:border-[#111642] focus:outline-none transition-colors resize-none"
                  style={{ fontSize: "15px" }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#EA1528] text-white px-8 py-4 hover:bg-[#c91122] transition-colors"
                style={{ fontSize: "0.9375rem", fontWeight: 500 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
