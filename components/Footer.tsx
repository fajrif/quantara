import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
      {/* Background logo watermark — right side */}
      <Image
        src="/images/footer-logo.png"
        alt=""
        width={450}
        height={450}
        className="pointer-events-none absolute right-[100px] top-1/2 -translate-y-1/2 w-[454px] select-none opacity-30 grayscale"
        priority={false}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        {/* Logo row */}
        <div className="flex justify-center md:justify-start py-10 md:py-12">
          <Image
            src="/images/logo-white.png"
            alt="PT Quantara Strategic"
            width={240}
            height={120}
            className="h-14 w-auto"
          />
        </div>

        {/* Main grid */}
        <div className="flex flex-col gap-10 pb-6 md:pb-12 md:flex-row md:justify-between md:items-start md:gap-18 text-center md:text-left">
          {/* Description column */}
          <div className="max-w-[550px]">
            <p className="mb-4 text-xl font-semibold text-white">Connecting Capital with Strategy</p>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Quantara Strategic is an advisory platform bridging capital with opportunity through
              structured transactions, strategic partnerships, and disciplined execution.
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              <strong className="text-white">PT Quantara Sinergi Strategis</strong><br />
              Grand Wijaya Center B 8-9{"\u2028"}Wijaya II,<br />
              Kebayoran Baru,{"\u2028"}Jakarta Selatan<br />
              Indonesia 1216 0
            </p>
          </div>

          {/* Right columns */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-10">

            {/* Quantara links — hidden on mobile */}
            <div className="hidden md:block">
              <h3 className="mb-4 font-semibold text-white">Quantara</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us — DOM order 2nd; mobile: show 2nd (order-2) */}
            <div className="order-2 md:order-none">
              <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
              <ul className="flex justify-center gap-4 md:flex-col md:gap-0 md:space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us — DOM order 3rd; mobile: show 1st (order-1) */}
            <div className="order-1 md:order-none">
              <h3 className="mb-4 font-semibold text-white">Contact Us</h3>
              <ul className="flex flex-col items-center md:items-start space-y-2">
                <li>
                  <a href="mailto:connect@quantara.id" className="mb-2 flex items-center gap-2 text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))] transition-colors">
                    <Mail size={16} />
                    <span>connect@quantara.id</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-white/70 hover:text-[hsl(var(--ptr-primary))]">
                  <Phone size={16} />
                  <a href="tel:+6281111111111">+62 811 1111 1111</a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between border-t border-white/20 py-6 text-xs md:text-sm text-white">
          <p className="text-center md:text-left">&copy; 2026 PT Quantara Sinergi Strategis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
