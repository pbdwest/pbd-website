import { Navbar } from "../components/navbar";
import { FooterSection } from "../components/footer-section";
import { Link } from "react-router";

const sections = [
  {
    title: "Introduction",
    content:
      'PBD West ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.',
  },
  {
    title: "Information We Collect",
    content: "We collect information that you provide directly to us, including:",
    list: [
      "Name and contact information (email, phone number)",
      "Business information (store name, location, number of stores)",
      "Distributor and fuel brand information",
      "Communications you send to us",
      "Any other information you choose to provide through our forms",
    ],
  },
  {
    title: "How We Use Your Information",
    content: "We use the information we collect to:",
    list: [
      "Evaluate membership applications and onboard new members",
      "Provide, maintain, and improve our vendor rebate programs",
      "Respond to your inquiries and support requests",
      "Send you program updates, rebate statements, and operational notices",
      "Communicate with you about promotions, programs, and network events",
      "Comply with legal and regulatory requirements",
    ],
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, trade, or transfer your personal information to third parties without your consent, except in the following circumstances: (1) to trusted vendors and program partners strictly as required to operate our rebate programs; (2) to service providers who assist in our operations under confidentiality agreements; (3) as required by law or to protect the rights and safety of PBD West and its members.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but commit to promptly notify affected parties in the event of a data breach.",
  },
  {
    title: "Data Retention",
    content:
      "We retain your personal information for as long as necessary to fulfill the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements. Member records may be retained for up to 7 years after the end of a membership for tax and audit purposes.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. To exercise these rights, please contact us at the information below.",
  },
  {
    title: "Contact Us",
    content: "If you have questions about this Privacy Policy, please contact us:",
    contact: { company: "PBD West", email: "privacy@pbdwest.com" },
  },
];

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="size-full">
      <Navbar />
      <div style={{ paddingTop: "79px" }}>
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
              Privacy Policy
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
                      to="/terms"
                      className="text-[#555] hover:text-[#EA1528] transition-colors"
                      style={{ fontSize: "13px", fontWeight: 400 }}
                    >
                      → Terms of Service
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <div className="flex flex-col gap-10">
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
                      style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.75 }}
                    >
                      {sec.content}
                    </p>
                    {sec.list && (
                      <ul className="mt-4 flex flex-col gap-2">
                        {sec.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-[#555]"
                            style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.65 }}
                          >
                            <span className="mt-2 w-[5px] h-[5px] bg-[#EA1528] shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
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
