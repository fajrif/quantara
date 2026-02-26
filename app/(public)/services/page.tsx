import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { OurCommitment } from "@/components/our-commitment"
import { WhatWeDo } from "@/components/what-we-do"
import { WhyQuantara } from "@/components/why-quantara"
import { WhatWeSupport } from "@/components/what-we-support"

const teamMembers = [
  {
    title: "Josef Bridge",
    description: "Managing Director — Leads strategic advisory and deal origination across Southeast Asian markets with over 15 years of experience in investment banking and corporate finance.",
    image: "/images/portrait/pic-6.png",
  },
  {
    title: "Nadia Britanny",
    description: "Director of Operations — Oversees transaction execution and due diligence coordination, ensuring disciplined processes and timely deal closures across all engagements.",
    image: "/images/portrait/pic-5.png",
  },
  {
    title: "Kaira Hiskia",
    description: "Head of Strategy — Drives business and transaction strategy analysis, specializing in cross-border deal navigation and investor introductions across Asia-Pacific.",
    image: "/images/portrait/pic-7.png",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary">
        {/* Banner Section */}
        <PageBanner
          title="Our Services"
          description="We provide a comprehensive range of financial services designed to support sustainable growth and long-term stability. From strategic financial planning to risk management and investment advisory, our solutions are tailored to meet the unique needs of each client."
          className="pb-0"
        />

        <WhatWeDo title="" description="" />
      </div>

      {/* Why Quantara Section */}
      <section id="why-quantara" className="bg-white py-20">
        <AnimatedDiv id="why-quantara-section-div" delay={0.1}>
          <WhyQuantara
            title="Our Approach"
            desc="We believe effective transactions are built on three fundamentals"
          />
        </AnimatedDiv>
      </section>

      {/* What We Support Section */}
      <WhatWeSupport />

      {/* Our Commitment Section */}
      <OurCommitment
        title="Our Commitment"
        desc="Quantara is committed to being a trusted advisory partner delivering structured insight, disciplined execution, and access to the right opportunities at the right time."
      />

    </div>
  )
}
