import { FeatureShaderCard } from "@/components/ui/feature-shader-card"

export function WhatWeDo({
  title = "What We Do",
  description = "Our advisory platform connects opportunities with the right stakeholders while supporting every stage of the deal lifecycle.",
}: {
  title?: string
  description?: string
} = {}) {
  return (
    <section id="what-we-do" className="bg-primary py-6 md:py-16">
      <div className="container mx-auto">
        {/* Section header — only shown when title or description are non-empty */}
        {(title || description) && (
          <div>
            {title && (
              <h2 className="text-3xl font-light uppercase tracking-wide text-white md:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 max-w-xl font-light leading-relaxed text-white">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
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
  )
}
