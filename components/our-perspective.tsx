import Image from "next/image"

export function OurPerspective() {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] min-h-[520px] gap-10 md:gap-16">

        {/* Text side — title top, description bottom */}
        <div className="flex flex-col justify-between py-2">
          <h2 className="text-3xl font-light uppercase tracking-wide text-primary md:text-4xl">
            Our Perspective
          </h2>
          <p className="max-w-sm font-light leading-relaxed text-foreground">
            With strong commercial and regulatory fluency, Quantara brings clarity to complex negotiations and helps clients make informed decisions in dynamic environments. We focus on practical outcomes — not theory — and work closely with all stakeholders involved in the transaction process.
          </p>
        </div>

        {/* Image side — fills the full column height */}
        <div className="relative min-h-[320px] md:min-h-0">
          <Image
            src="/images/sky-look.png"
            alt="Perspective"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>

      </div>
    </div>
  )
}

