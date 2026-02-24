import Link from "next/link"
import Image from "next/image"

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
        <div className="py-10 md:py-12">
          <Image
            src="/images/logo-white.png"
            alt="PT Quantara Strategic"
            width={240}
            height={120}
            className="h-14 w-auto"
          />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-4 md:gap-8 text-center md:text-left">
          {/* Description column — spans 2 */}
          <div className="md:col-span-2">
            <p className="mb-4 text-xl font-semibold text-white">Connecting Capital with Strategy</p>
            <p className="text-sm leading-relaxed text-white/70">
              Quantara Strategic is an advisory platform bridging capital with opportunity through
              structured transactions, strategic partnerships, and disciplined execution.
            </p>
          </div>

          <div></div>
          <div className="flex gap-12">
            {/* Quantara links */}
            <div>
              <h3 className="mb-6 font-semibold text-white">Quantara</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-white/70 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-sm text-white/70 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-white/70 hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-white/70 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Follow Us */}
            <div>
              <h3 className="mb-6 font-semibold text-white">Follow Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex justify-between border-t border-white/20 py-6 text-xs md:text-sm text-white">
          <p className="text-center md:text-left">&copy; 2026 PT Quantara Strategic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
