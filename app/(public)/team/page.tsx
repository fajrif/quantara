import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { OurCommitment } from "@/components/our-commitment"
import { BentoCard } from "@/components/ui/bento-card"
import TeamCard from "@/components/cards/team-card"
import { OurPerspective } from "@/components/our-perspective"

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

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary">
        {/* Banner Section */}
        <PageBanner
          title="Our Team"
          description="Driven by expertise and guided by integrity, our team brings years of experience in financial services, risk management, and strategic planning. We are committed to providing reliable solutions tailored to your goals."
          className="pb-0"
        />

        {/* Team Cards */}
        <AnimatedDiv id="who-we-are-section-div" delay={0.1}>
          <div className="container mx-auto py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamMembers.map((member) => (
                <BentoCard
                  key={member.title}
                  title={member.title}
                  description={member.description}
                  Component={() => <TeamCard image={member.image} />}
                />
              ))}
            </div>
          </div>
        </AnimatedDiv>
      </div>

      {/* Our Perspective Section */}
      <section id="our-perspective" className="bg-white">
        <AnimatedDiv id="our-perspective-section-div" delay={0.1}>
          <OurPerspective />
        </AnimatedDiv>
      </section>

      {/* Our Commitment Section */}
      <OurCommitment
        title="Our Commitment"
        desc="Quantara is committed to being a trusted advisory partner delivering structured insight, disciplined execution, and access to the right opportunities at the right time."
      />

    </div>
  )
}

