"use client"

import { MagicText } from "@/components/ui/magic-text"
import Image from "next/image"
import { motion } from "motion/react"

const images = [
  { src: "/images/roles/img-1.png", alt: "Role image 1", offset: "md:translate-y-12", width: 327, height: 376 },
  { src: "/images/roles/img-2.png", alt: "Role image 2", offset: "", width: 330, height: 550 },
  { src: "/images/roles/img-3.png", alt: "Role image 3", offset: "md:translate-y-24", width: 330, height: 550 },
  { src: "/images/roles/img-4.png", alt: "Role image 4", offset: "md:-translate-y-24", width: 327, height: 376 },
]

export function OurRole() {
  return (
    <section id="our-role" className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4">
        {/* Label */}
        <p className="mb-6 text-sm text-primary/60">Our Role</p>

        {/* MagicText paragraph */}
        <MagicText
          text="Quantara acts as both deal-maker and strategic partner. We help clients move from initial interest to transaction by navigating complex commercial discussions, aligning stakeholder expectations, and structuring deals that unlock long-term value. Our work spans investments, financings, joint ventures, and other tailored transactions across industries and markets."
          className="text-2xl font-light leading-snug text-primary sm:text-3xl"
        />

        {/* Staggered image grid */}
        <div className="mt-16 flex gap-6 md:gap-10 items-end">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              className={`flex-1 ${img.offset}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="w-full h-auto"
                priority={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
