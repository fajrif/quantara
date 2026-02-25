"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    // Check initial scroll position
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-primary/80 backdrop-blur-lg shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          isScrolled ? "h-16" : "h-20"
        )}>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-white.png"
              alt="PT Quantara Strategic"
              width={180}
              height={50}
              className={cn(
                "w-auto transition-all duration-300",
                isScrolled ? "h-8 md:h-10" : "h-10 md:h-12"
              )}
              unoptimized
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      "uppercase transition-all text-sm px-3 py-2 rounded-md",
                      isScrolled
                        ? "text-white hover:text-white/80 focus:text-white/80"
                        : "text-white hover:text-white/80 focus:text-white/80"
                    )}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/team"
                    className={cn(
                      "uppercase transition-all text-sm px-3 py-2 rounded-md",
                      isScrolled
                        ? "text-white hover:text-white/80 focus:text-white/80"
                        : "text-white hover:text-white/80 focus:text-white/80"
                    )}
                  >
                    Team
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/services"
                    className={cn(
                      "uppercase transition-all text-sm px-3 py-2 rounded-md",
                      isScrolled
                        ? "text-white hover:text-white/80 focus:text-white/80"
                        : "text-white hover:text-white/80 focus:text-white/80"
                    )}
                  >
                    Our Services
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blog"
                    className={cn(
                      "uppercase transition-all text-sm px-3 py-2 rounded-md",
                      isScrolled
                        ? "text-white hover:text-white/80 focus:text-white/80"
                        : "text-white hover:text-white/80 focus:text-white/80"
                    )}
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className={cn(
                      "uppercase transition-all text-sm px-3 py-2 rounded-md",
                      isScrolled
                        ? "text-white hover:text-white/80 focus:text-white/80"
                        : "text-white hover:text-white/80 focus:text-white/80"
                    )}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            <div className="md:hidden pb-4 space-y-3 bg-black text-white shadow-lg rounded-b-lg p-4 mb-4">
              <Link
                href="/about"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/team"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>

              <Link
                href="/services"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Our Services
              </Link>

              <Link
                href="/blog"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block uppercase transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
