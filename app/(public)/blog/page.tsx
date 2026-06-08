import { PageBanner } from "@/components/ui/page-banner"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { OurCommitment } from "@/components/our-commitment"
import { Newspaper, FileText } from "lucide-react"

export default function MediaPage() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <PageBanner
        title="Articles & Publications"
        description="Our articles and publications reflect our commitment to thought leadership in the financial industry. Through in-depth analysis, market insights, and expert commentary, we provide valuable perspectives to help clients and partners stay informed in a rapidly evolving financial landscape."
      />

      {/* Empty State */}
      <section className="bg-primary pb-20 px-4 mb-10 md:mb-0">
        <AnimatedDiv id="articles-grid" className="container mx-auto">
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="relative mb-6">
              <Newspaper size={48} className="text-white/20" />
              <FileText size={20} className="text-white/10 absolute -top-1 -right-2" />
            </div>
            <h2 className="text-xl font-light text-white/60 mb-3">
              No publications yet
            </h2>
            <p className="text-white/40 font-light text-sm max-w-md leading-relaxed">
              We&apos;re crafting insightful articles and market analysis to share with you.
              Check back soon — fresh content is on the way.
            </p>
          </div>
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
