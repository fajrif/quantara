import { ImageHeroContent } from "@/components/ui/image-hero-content"
import { MagicText } from "@/components/ui/magic-text"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { WhyQuantara } from "@/components/why-quantara"
import { WhatWeDo } from "@/components/what-we-do"
import { OurCommitment } from "@/components/our-commitment"

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <section id="banner-section" className="bg-primary">
        {/* Hero Section with Image Background */}
        <ImageHeroContent
          image="/images/banner1.png"
          text="Connecting Capital With Strategy"
        />

        {/* Intro paragraph */}
        <div className="container mx-auto py-16">
          <MagicText
            text="Founded in 2025, Quantara Strategic operates as both deal-maker and strategic partner enabling clients to unlock value through informed decision-making, curated counterparties, and clear strategic alignment. We bring commercial fluency, regulatory awareness, and a hands-on advisory approach to help clients navigate negotiations, evaluate opportunities, and execute transactions with confidence."
            className="text-2xl font-light leading-snug text-white sm:text-3xl"
          />
          <Link href="/about">
            <div className="mt-6 flex items-center gap-3 text-white transition-all duration-300 hover:gap-4 hover:text-[hsl(var(--ptr-primary))]">
              <span className="text-base font-light uppercase tracking-widest">Learn More</span>
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Why Quantara Section */}
      <section id="why-quantara" className="bg-white py-20">
        <AnimatedDiv id="why-quantara-section-div" delay={0.1}>
          <WhyQuantara />
        </AnimatedDiv>
      </section>


      {/* Our Commitment Section */}
      <OurCommitment
        title="Our Commitment"
        desc="We aim to create a trusted platform where businesses, investors, and operators can engage opportunities with confidence, supported by strategic insight, disciplined execution, and curated introductions."
      />

    </div>
  )
}
