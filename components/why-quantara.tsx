
export function WhyQuantara() {
    return (
        <div className="container mx-auto">
          {/* Section header */}
          <h2 className="text-3xl font-light uppercase tracking-wide text-primary md:text-4xl">
            Why Quantara
          </h2>
          <p className="mt-3 max-w-xl font-light leading-relaxed">
            We simplify negotiations and transactions through structured thinking and grounded strategic insights.
          </p>

          {/* 4-column card grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="relative overflow-hidden lg:h-[400px]"
              style={{ backgroundImage: "url('/images/abstract-blue-textured-background.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
              {/* Primary color overlay */}
              <div className="absolute inset-0 bg-primary/65" />
              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                  Clarity in Complexity
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/90">
                  We simplify negotiations and transactions through structured thinking and grounded strategic insights.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative overflow-hidden lg:h-[400px]"
              style={{ backgroundImage: "url('/images/abstract-blue-textured-background.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="absolute inset-0 bg-primary/65" />
              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                  Curated Counterparties
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/90">
                  We introduce partners who are commercially aligned, credible, and strategically relevant.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative overflow-hidden lg:h-[400px]"
              style={{ backgroundImage: "url('/images/abstract-blue-textured-background.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="absolute inset-0 bg-primary/65" />
              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                  Hands-On Partnership
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/90">
                  We work closely with clients — not just as advisors, but as collaborators throughout the deal process.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="relative overflow-hidden lg:h-[400px]"
              style={{ backgroundImage: "url('/images/abstract-blue-textured-background.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
              <div className="absolute inset-0 bg-primary/65" />
              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                  Strategic Execution, Not Theory
                </h3>
                <p className="text-sm font-light leading-relaxed text-white/90">
                  Our approach focuses on actionable strategies and real transaction outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}
