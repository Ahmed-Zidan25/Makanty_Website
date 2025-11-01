import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/makanty-logo.png" alt="Makanty Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold text-foreground">Mk360</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for POS devices, ECR systems, and comprehensive maintenance solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link href="/products" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Services
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pos"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  POS Devices
                </Link>
              </li>
              <li>
                <Link
                  href="/ecr"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  ECR Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/consumables"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Consumables
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@makanty.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  info@mk360.co
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                 +2 01066555757
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">6 Al Mokhtar Street, New Maadi, Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MK360. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
