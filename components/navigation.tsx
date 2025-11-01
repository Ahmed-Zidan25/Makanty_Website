"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        @keyframes spin-360 {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .hover-spin:hover {
          animation: spin-360 0.6s ease-in-out;
        }
      `}</style>
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* 1. Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image src="/makanty-logo.png" alt="Makanty Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold text-foreground">MK360</span>
            </Link>

            {/* 2. Desktop Navigation Container (Hidden on Mobile) */}
            <div className="hidden items-center md:flex md:flex-1 md:justify-center md:gap-8">
              {/* Desktop Navigation Links */}
              <Link
                href="/"
                className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 group hover:scale-110 hover:drop-shadow-lg"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 group hover:scale-110 hover:drop-shadow-lg"
              >
                About Us
              </Link>
              <Link
                href="/pos"
                className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 group hover:scale-110 hover:drop-shadow-lg"
              >
                POS Devices
              </Link>

              <Link
                href="/ecr"
                className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 group hover:scale-110 hover:drop-shadow-lg"
              >
                ECR Devices
              </Link>
              <Link
                href="/consumables"
                className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 group hover:scale-110 hover:drop-shadow-lg"
              >
                Consumables
              </Link>
              <Link
                href="/services"
                className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 group hover:scale-110 hover:drop-shadow-lg"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 group hover:scale-110 hover:drop-shadow-lg"
              >
                Contact
              </Link>
            </div>

            {/* 3. Get Quote Button (Desktop only) */}
            <div className="hidden md:block flex-shrink-0">
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <Link href="/quote">Get Quote</Link>
              </Button>
            </div>

            {/* 4. Mobile Controls (Button and Menu Toggle) */}
            <div className="flex items-center gap-4 md:hidden">
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                <Link href="/quote">Quote</Link>
              </Button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="border-t border-border py-4 md:hidden">
              <div className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <div className="flex flex-col gap-2 pl-4">
                  <span className="text-sm font-bold text-muted-foreground">Products</span>
                  <Link
                    href="/products?category=pos"
                    className="hover-spin text-sm font-medium text-foreground transition-all duration-300 hover:text-blue-900 hover:translate-x-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    POS Devices
                  </Link>
                  <Link
                    href="/products?category=ecr"
                    className="hover-spin text-sm font-medium text-foreground transition-all duration-300 hover:text-blue-900 hover:translate-x-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ECR Systems
                  </Link>
                  <Link
                    href="/products?category=pos-parts"
                    className="hover-spin text-sm font-medium text-foreground transition-all duration-300 hover:text-blue-900 hover:translate-x-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    POS Spare Parts
                  </Link>
                  <Link
                    href="/products?category=ecr-parts"
                    className="hover-spin text-sm font-medium text-foreground transition-all duration-300 hover:text-blue-900 hover:translate-x-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ECR Spare Parts
                  </Link>
                </div>
                <Link
                  href="/services"
                  className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="hover-spin text-sm font-bold text-foreground transition-all duration-300 hover:text-blue-900 hover:translate-x-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Button asChild className="mt-2">
                  <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
