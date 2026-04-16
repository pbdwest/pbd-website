import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { Link } from "react-router";
import { useIsMobile } from "../components/ui/use-mobile";

const sections = [
  {
    title: "Agreement to Terms",
    content:
      "By accessing or using PBD West's website or services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any part of these terms, you may not access our services.",
  },
  {
    title: "Use of Services",
    content:
      "Our services are provided to help independent convenience store operators, gas stations, and truck stops participate in national vendor rebate programs. You agree to use our services only for lawful business purposes and in accordance with these Terms. You may not use our services to engage in fraudulent activity, misrepresent your store's sales data, or circumvent program requirements.",
  },
  {
    title: "Membership & Program Participation",
    content:
      "Membership in the PBD network is subject to qualification and approval at PBD's sole discretion. Once enrolled, members agree to maintain accurate distributor reporting, comply with vendor program requirements, and allow PBD to reconcile sales data on their behalf. PBD retains 10% of gross rebate amounts as an operations fee; the remaining 90% is distributed to the member monthly.",
  },
  {
    title: "Data & Reporting",
    content:
      "By participating in PBD programs, you authorize PBD to receive sales data from your distributors for the purposes of rebate calculation and program compliance. You represent that the information you provide is accurate and complete. Misrepresentation of sales data may result in immediate termination of membership.",
  },
  {
    title: "Intellectual Property",
    content:
      "The PBD West website, brand, and all associated content — including but not limited to text, graphics, logos, and software — are owned by PBD West and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.",
  },
  {
    title: "Limitation of Liability",
    content:
      "In no event shall PBD West, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, goodwill, or business interruption. PBD's total liability to any member shall not exceed the total rebates distributed to that member in the prior three months.",
  },
  {
    title: "Termination",
    content:
      "PBD West reserves the right to terminate or suspend membership immediately, without prior notice, for breach of these Terms, fraudulent activity, or any conduct deemed harmful to the network or its vendor relationships. Upon termination, all outstanding rebates owed will be calculated and distributed within 30 days, minus any applicable deductions.",
  },
  {
    title: "Changes to Terms",
    content:
      "PBD West reserves the right to modify these Terms at any time. Material changes will be communicated via email to active members at least 14 days before taking effect. Continued participation in PBD programs following notification constitutes acceptance of the revised Terms.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in California.",
  },
  {
    title: "Contact Us",
    content: "If you have questions about these Terms, please contact us:",
    contact: { company: "PBD West", email: "legal@pbdwest.com" },
  },
];

export default function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const isMobile = useIsMobile();
  return (
    <div className="size-full">
      <Navbar />
      <div className="bg-[#111642]" style={{ paddingTop: "79px" }}>
        {/* Hero header */}
        <section
          className="bg-[#111642] py-16 md:py-20"
          data-navbar-theme="dark"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <p
              className="text-[#888] uppercase tracking-[0.15em] mb-5"
              style={{ fontSize: "0.7rem", fontWeight: 500 }}
            >
              Legal
            </p>
            <h1
              className="text-white mb-4"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Terms of Service
            </h1>
            <p className="text-[#888]" style={{ fontSize: "14px", fontWeight: 400 }}>
              Last updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 md:py-20" style={{ fontFamily: "'Inter', sans-serif" }}>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
              {/* Sidebar nav */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p
                    className="text-[#999] uppercase tracking-[0.15em] mb-5"
                    style={{ fontSize: "0.65rem", fontWeight: 500 }}
                  >
                    Sections
                  </p>
                  <ul className="flex flex-col gap-2">
                    {sections.map((sec) => (
                      <li key={sec.title}>
                        <a
                          href={`#${sec.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="text-[#555] hover:text-[#111642] transition-colors"
                          style={{ fontSize: "13px", fontWeight: 400, lineHeight: 1.8 }}
                        >
                          {sec.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 border-t border-[#e5e5e5] pt-6">
                    <Link
                      to="/privacy"
                      className="text-[#555] hover:text-[#EA1528] transition-colors"
                      style={{ fontSize: "13px", fontWeight: 400 }}
                    >
                      → Privacy Policy
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex flex-col md:gap-10 gap-8">
                {sections.map((sec) => (
                  <div
                    key={sec.title}
                    id={sec.title.toLowerCase().replace(/\s+/g, "-")}
                    className="border-t border-[#e5e5e5] pt-8"
                  >
                    <h2
                      className="text-[#0a0a0a] mb-4"
                      style={{
                        fontSize: "clamp(18px, 2vw, 22px)",
                        fontWeight: 400,
                        lineHeight: 1.3,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {sec.title}
                    </h2>
                    <p
                      className="text-[#555]"
                      style={{ fontSize: isMobile ? "14px" : "16px", fontWeight: 400, lineHeight: 1.75 }}
                    >
                      {sec.content}
                    </p>
                    {sec.contact && (
                      <div className="mt-5 bg-[#FAFAFA] p-5 border border-[#e5e5e5]">
                        <p className="text-[#0a0a0a] font-medium" style={{ fontSize: "14px" }}>
                          {sec.contact.company}
                        </p>
                        <a
                          href={`mailto:${sec.contact.email}`}
                          className="text-[#111642] hover:text-[#EA1528] transition-colors"
                          style={{ fontSize: "14px", fontWeight: 400 }}
                        >
                          {sec.contact.email}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
