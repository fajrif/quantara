import { ImageHeroContent } from "@/components/ui/image-hero-content"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { WhyQuantara } from "@/components/why-quantara"
import { OurCommitment } from "@/components/our-commitment"
import { WhoWeAre } from "@/components/who-we-are"
import { OurRole } from "@/components/our-role"
import { WhatWeSupport } from "@/components/what-we-support"
import { OurPerspective } from "@/components/our-perspective"

export default function AboutPage() {

  return (
    <div className="min-h-screen">
      <section id="banner-section" className="bg-primary">
        {/* Hero Section with Image Background */}
        <ImageHeroContent
          image="/images/banner2.png"
          text="About Quantara Strategic"
        />
        {/* Who We Are Section */}
        <AnimatedDiv id="who-we-are-section-div" delay={0.1}>
          <WhoWeAre />
        </AnimatedDiv>
      </section>

      {/* Our Role Section */}
      <OurRole />

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

