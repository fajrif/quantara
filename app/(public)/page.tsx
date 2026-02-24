import { ImageHeroContent } from "@/components/ui/image-hero-content"
import { MagicText } from "@/components/ui/magic-text"
import { FeatureShaderCard } from "@/components/ui/feature-shader-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ClientsCloud } from "@/components/clients-cloud"
import { ClientPrimary } from "@/components/client-primary"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import TelcoInfraServices from "@/components/services/telco-infra"
import DigitalSolutionServices from "@/components/services/digital-solution"
import HumanResourceServices from "@/components/services/human-resources"
import ManagedServices from "@/components/services/managed-services"

export default function Home() {
  const cards = [
    {
      title: "Telekomunikasi & IT Infrastruktur",
      description: "Penyediaan perangkat telekomunikasi dan infrastruktur jaringan yang andal untuk mendukung konektivitas dan operasional bisnis secara optimal.",
      Component: TelcoInfraServices,
    },
    {
      title: "Solusi Digital & Inovasi",
      description: "Pengembangan aplikasi dan solusi digital yang inovatif untuk meningkatkan efisiensi, produktivitas, dan daya saing bisnis.",
      Component: DigitalSolutionServices,
    },
    {
      title: "Human Resource Management",
      description: "Penyediaan dan pengelolaan SDM profesional yang kompeten dan siap mendukung kebutuhan bisnis Anda.",
      Component: HumanResourceServices,
    },
    {
      title: "Managed Services",
      description: "Layanan pengelolaan infrastruktur IT profesional dengan monitoring 24/7, maintenance rutin, dan dukungan teknis berkelanjutan untuk menjaga sistem Anda tetap optimal.",
      Component: ManagedServices,
    },
  ]

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
            <div className="mt-6 flex items-center gap-3 text-white/70 transition-all duration-300 hover:gap-4 hover:text-[hsl(var(--ptr-primary))]">
              <span className="text-xs font-light uppercase tracking-widest">Learn More</span>
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="bg-primary py-16">
        <div className="container mx-auto">
          {/* Section header */}
          <h2 className="text-3xl font-light uppercase tracking-wide text-white md:text-4xl">
            What We Do
          </h2>
          <p className="mt-3 max-w-xl font-light leading-relaxed text-white">
            Our advisory platform connects opportunities with the right stakeholders while supporting every stage of the deal lifecycle.
          </p>

          {/* Bento grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
            {/* Row 1 — 2 cols */}
            <FeatureShaderCard
              number={1}
              title="Deal Origination (Buy-Side & Sell-Side)"
              description="We identify and connect qualified investors, acquirers, operators, and strategic partners using curated networks and proprietary sourcing channels."
              style="style1"
              className="h-64 lg:col-span-3"
            />
            <FeatureShaderCard
              number={2}
              title="Transaction Advisory & Deal Structuring"
              description="From early discussions to term sheet alignment, we support commercial structuring, negotiation strategy, and the refinement of deal expectations."
              style="style2"
              className="h-64 lg:col-span-3"
            />

            {/* Row 2 — 3 cols */}
            <FeatureShaderCard
              number={3}
              title="Financing Solutions & Strategies"
              description="We arrange connections between lenders and borrowers, including private lending, startup fundraising, and group funding structures supported by a tailored, hands-on approach."
              style="style3"
              className="h-64 lg:col-span-2"
            />
            <FeatureShaderCard
              number={4}
              title="Business & Transaction Strategy"
              description="We analyze business models, strategic positioning, synergy potential, and post-deal impact to guide well-grounded decision-making."
              style="style4"
              className="h-64 lg:col-span-2"
            />
            <FeatureShaderCard
              number={5}
              title="Investor & Partner Introductions"
              description="We give clients access to financial sponsors, corporations, strategic operators, and institutional investors relevant to their objectives."
              style="style5"
              className="h-64 lg:col-span-2"
            />

            {/* Row 3 — 2 cols */}
            <FeatureShaderCard
              number={6}
              title="Due Diligence Support Coordination"
              description="We coordinate financial, legal, and commercial due diligence by engaging subject-matter advisors and organizing key data requests."
              style="style6"
              className="h-64 lg:col-span-3"
            />
            <FeatureShaderCard
              number={7}
              title="Cross-Border Deal Navigation"
              description="We identify international counterparties and support clients in managing cultural, regulatory, and commercial considerations across markets."
              style="style7"
              className="h-64 lg:col-span-3"
            />
          </div>
        </div>
      </section>

      {/* Clients Logo Cloud Section */}
      <section id="clients-section" className="bg-black text-white py-10 px-4">
        <AnimatedDiv id="clients-section-div" className="container mx-auto max-w-6xl" delay={0.1}>
          <ClientsCloud />
        </AnimatedDiv>
        <AnimatedDiv id="primary-clients-section-div" className="container mx-auto py-15" delay={0.2}>
          <ClientPrimary />
        </AnimatedDiv>
      </section>

      <section id="features-section" className="bg-sk-sea-shade">
        <AnimatedDiv id="features-section-div" className="relative z-10 max-w-[1320px] mx-auto" delay={0.3}>
          <ServicesSection cards={cards} />
        </AnimatedDiv>
      </section>

      {/* Stats Section */}
      <StatsSection />

    </div>
  )
}
