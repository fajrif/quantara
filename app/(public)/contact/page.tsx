"use client"

import type React from "react"
import Image from "next/image"
import { ImageHeroContent } from "@/components/ui/image-hero-content"
import { AnimatedDiv } from "@/components/ui/animated-div"
import { OurCommitment } from "@/components/our-commitment"
import { FullScreenSignup } from "@/components/ui/full-screen-signup"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen">
      <section id="banner-section" className="bg-primary">
        {/* Hero Section with Image Background */}
        <ImageHeroContent
          image="/images/banner3.png"
          text="Lets Get in Touch"
        />
      </section>

      {/* Get In Touch Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-light uppercase tracking-wide text-white md:text-4xl lg:text-4xl">
            Get In Touch
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left — company + address */}
            <div className="space-y-3">
              <p className="text-base font-semibold text-white">Quantara Strategic</p>
              <p className="text-sm font-light leading-relaxed text-white/80">
                PT Quantara Sinergi Strategis, Grand Wijaya Center B 8-9<br />
                Wijaya II, Kebayoran Baru, Jakarta – Indonesia 12160
              </p>
            </div>

            {/* Right — email + website */}
            <div className="space-y-2">
              <p className="text-sm font-light text-white">
                Email:{" "}
                <a
                  href="mailto:connect@quantara.id"
                  className="text-white hover:text-[hsl(var(--ptr-primary))] transition-colors"
                >
                  connect@quantara.id
                </a>
              </p>
              <p className="text-sm font-light text-white">
                Website:{" "}
                <a
                  href="https://www.quantara.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[hsl(var(--ptr-primary))] transition-colors underline"
                >
                  www.quantara.id
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-white">
        <AnimatedDiv id="contact-section" className="container mx-auto max-w-6xl relative z-20">
          <div className="w-full relative overflow-hidden flex flex-col md:flex-row shadow-xl">

            <div className="w-full h-full z-2 absolute bg-linear-to-t from-transparent to-black"></div>
            <div className="flex absolute z-2 overflow-hidden backdrop-blur-2xl">
              <div className="h-[40rem] z-2 w-[4rem] bg-linear-90 from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
              <div className="h-[40rem] z-2 w-[4rem] bg-linear-90 from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
              <div className="h-[40rem] z-2 w-[4rem] bg-linear-90 from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
              <div className="h-[40rem] z-2 w-[4rem] bg-linear-90 from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
              <div className="h-[40rem] z-2 w-[4rem] bg-linear-90 from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
              <div className="h-[40rem] z-2 w-[4rem] bg-linear-90 from-[#ffffff00] via-[#000000] via-[69%] to-[#ffffff30] opacity-30 overflow-hidden"></div>
            </div>
            <div className="w-[15rem] h-[15rem] bg-yellow-500 absolute z-1 rounded-full bottom-0"></div>
            <div className="w-[8rem] h-[5rem] bg-white absolute z-1 rounded-full bottom-0"></div>
            <div className="w-[8rem] h-[5rem] bg-white absolute z-1 rounded-full bottom-0"></div>

            {/* Left Panel — tagline */}
            <div className="bg-black text-white p-8 md:p-12 md:w-1/2 relative rounded-bl-3xl overflow-hidden">
              <h1 className="text-2xl md:text-3xl font-medium leading-tight z-10 tracking-tight relative">
                Where Strategy Meets Financial Excellence
              </h1>
            </div>

            {/* Right Panel — form */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col bg-primary z-[10]">
              <div className="flex flex-col mb-8">
                <div className="mb-4">
                  <Image
                    src="/images/logo.png"
                    alt="Quantara"
                    width={130}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h2 className="text-2xl font-medium text-white mb-1 tracking-tight uppercase">
                  Send Us A Message
                </h2>
                <p className="text-white/60 text-sm font-light">
                  Let&apos;s talk about how we can help you grow.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-primary placeholder:text-primary/40 font-light focus:outline-none focus:border-primary/50 hover:border-primary/40 transition-colors text-sm"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-primary placeholder:text-primary/40 font-light focus:outline-none focus:border-primary/50 hover:border-primary/40 transition-colors text-sm"
                />

                <input
                  id="company"
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-primary placeholder:text-primary/40 font-light focus:outline-none focus:border-primary/50 hover:border-primary/40 transition-colors text-sm"
                />

                <textarea
                  id="message"
                  placeholder="Tell us or discuss your needs"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white text-primary placeholder:text-primary/40 font-light focus:outline-none focus:border-primary/50 hover:border-primary/40 transition-colors resize-none text-sm"
                />

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm cursor-pointer"
                >
                  Submit
                </button>
              </form>
            </div>

          </div>
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
