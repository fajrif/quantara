import Image from "next/image"

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-primary overflow-hidden">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[520px]">
          {/* Text side */}
          <div className="flex flex-col justify-between">
            <h2 className="text-3xl font-light uppercase tracking-wide text-white md:text-4xl">
              Who We Are
            </h2>
            <div className="mt-10 space-y-5 max-w-lg">
              <p className="mt-3 max-w-xl font-light leading-relaxed text-white">
                Quantara Strategic is an advisory platform focused on connecting capital with
                opportunity. Founded in 2025, we work with investors, business owners, and
                strategic counterparties to structure and execute transactions that are
                commercially sound, strategically aligned, and clearly defined.
              </p>
              <p className="mt-3 max-w-xl font-light leading-relaxed text-white">
                We operate at the intersection of capital, strategy, and execution — supporting
                deals that require clarity, coordination, and disciplined decision-making.
              </p>
            </div>
          </div>

          {/* Image side */}
          <div className="relative flex min-h-[320px] items-center justify-center md:min-h-0 md:justify-end mt-12 md:mt-0">
            <Image
              src="/images/library.png"
              alt="Library"
              width={460}
              height={553}
              className="h-auto max-w-full object-contain"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
