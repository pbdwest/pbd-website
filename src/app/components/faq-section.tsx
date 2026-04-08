import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does PBD make money?",
    paragraphs: [
      "PBD brings independent retailers together to unlock vendor funding, rebates, and promotional programs not available at the individual store level.",
      "We manage these programs end-to-end, and a small percentage is applied to rebate payments to cover operations and ensure accurate tracking and payment.",
    ],
  },
  {
    question: "What does it cost to join PBD?",
    paragraphs: [
      "There is no cost to join the PBD network and no membership fees or royalties.",
      "PBD earns through the vendor-funded programs and rebates generated within the network, so there is no upfront cost to participate.",
    ],
  },
  {
    question: "Is there any long-term commitment?",
    paragraphs: [
      "No long-term contracts. You can join or leave the network at any time.",
      "If you choose to leave, we coordinate with vendors to transition your store out of active programs. Any remaining rebate payments are processed and paid according to the standard rebate schedule.",
    ],
  },
  {
    question: "How do retailers receive rebates?",
    paragraphs: [
      "Rebates are paid monthly based on qualifying product sales and program participation, with a detailed breakdown of each program.",
      "Some programs require participation in vendor promotions and pricing strategies, while others provide rebates or on-invoice discounts as part of everyday purchasing.",
      "PBD tracks performance, reconciles vendor data, and ensures accurate calculation and payment.",
      "Payment timing may vary slightly based on vendor reporting cycles, but all rebates are processed and paid on a consistent schedule.",
    ],
  },
  {
    question: "What does the retailer need to do?",
    paragraphs: [
      "Actively participate in applicable vendor programs and promotions.",
      "PBD handles program setup, vendor coordination, tracking, and payment management, while working with you to ensure programs are executed properly in-store.",
    ],
  },
  {
    question: "How long does it take to see results?",
    paragraphs: [
      "Most stores begin seeing measurable results within the first 90–120 days as programs are fully set up, activated, and tracked across vendor systems.",
      "Initial improvements in pricing, merchandising, and execution begin earlier, with rebate payments following once vendor reporting and program participation are fully established.",
    ],
  },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
  isInView,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isInView: boolean;
}) {
  return (
    <motion.div
      className="border-b border-[#E0E0E0]"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
        ease: "easeOut",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <span
          className="text-[#0a0a0a] pr-8"
          style={{
            fontSize: "clamp(0.9375rem, 1.4vw, 1.125rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            lineHeight: 1.4,
          }}
        >
          {faq.question}
        </span>
        <span className="shrink-0 w-8 h-8 flex items-center justify-center border border-[#E0E0E0] text-[#111642] group-hover:border-[#111642] transition-colors">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 flex flex-col gap-3">
              {faq.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-[#555]"
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: 1.7,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFFFFF]"
      style={{ fontFamily: "'Inter', sans-serif", padding: "80px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[80px]">
        {/* Section Label */}
        <p
          className="text-[#999] uppercase tracking-[0.15em] mb-[56px]"
          style={{ fontSize: "11.2px", fontWeight: 500 }}
        >
          FAQ
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Headline + subtext */}
          <div className="flex flex-col gap-6">
            <motion.h2
              className="text-[#0a0a0a] max-w-[420px]"
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
              Frequently asked questions.
            </motion.h2>

            <motion.p
              className="text-[#555] max-w-[360px]"
              style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              Everything you need to know about joining the PBD network and how the program works.
            </motion.p>
          </div>

          {/* Right: Accordion */}
          <div className="border-t border-[#E0E0E0]">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
