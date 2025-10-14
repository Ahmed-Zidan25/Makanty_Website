"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/makanty-logo.png" alt="Makanty Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">Makanty</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              About Us
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary">
                Products
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/products?category=pos">POS Devices</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=ecr">ECR Systems</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=pos-parts">POS Spare Parts</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=ecr-parts">ECR Spare Parts</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/services" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground transition-colors hover:text-primary">
              Contact
            </Link>
            <Button asChild size="sm" className="ml-2">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="flex flex-col gap-2 pl-4">
                <span className="text-sm font-medium text-muted-foreground">Products</span>
                <Link
                  href="/products?category=pos"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  POS Devices
                </Link>
                <Link
                  href="/products?category=ecr"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ECR Systems
                </Link>
                <Link
                  href="/products?category=pos-parts"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  POS Spare Parts
                </Link>
                <Link
                  href="/products?category=ecr-parts"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ECR Spare Parts
                </Link>
              </div>
              <Link
                href="/services"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
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
  )
}
