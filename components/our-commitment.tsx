import { MagicText } from "@/components/ui/magic-text"
import Image from "next/image"

export function OurCommitment({ title = "", desc = "" }: { title?: string, desc?: string }) {
  return (
    <section id="our-commitment" className="bg-white">
      <div className="container mx-auto px-4 pt-0 md:pt-20 pb-0">
        <p className="mb-6 text-sm text-primary/60">{title}</p>
        <MagicText
          text={desc}
          className="text-2xl font-light leading-snug text-primary sm:text-3xl"
        />
      </div>
      <div className="mt-16 w-full">
        <Image
          src="/images/buildings.png"
          alt="Buildings"
          width={1920}
          height={800}
          className="w-full object-cover"
          priority={false}
        />
      </div>
    </section>
  )
}
