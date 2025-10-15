import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Wrench,
  Settings,
  Headphones,
  Package,
  Shield,
  Clock,
  Award,
  Truck,
  RefreshCw,
  CreditCard,
  Palette,
  Rocket,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Package,
      title: "POS Devices Marketplace",
      description: "Wide portfolio of POS devices from world-leading brands for every business need.",
      features: [
        "Android Smart POS terminals",
        "Traditional & Desktop POS",
        "Mini & Mobile POS devices",
        "Refurbished terminals available",
      ],
    },
    {
      icon: Wrench,
      title: "Accessories & Spare Parts",
      description: "Everything you need for POS continuity and maintenance.",
      features: [
        "Chargers, cables, and docks",
        "Screens, keypads, and batteries",
        "Boards, cases, and components",
        "Certified parts for all major brands",
      ],
    },
    {
      icon: Package,
      title: "Consumables",
      description: "Ready-to-use merchant supplies for daily operations.",
      features: [
        "Thermal paper rolls",
        "SIM cards & data packs",
        "Security seals & stickers",
        "Packaging & branding kits",
      ],
    },
    {
      icon: Truck,
      title: "Field Service & Deployment",
      description: "Nationwide field network for deployment, support, and terminal management.",
      features: [
        "POS deployment & cancellation",
        "Merchant installation services",
        "On-site repair & maintenance",
        "FSM dashboard with real-time tracking",
      ],
    },
    {
      icon: Settings,
      title: "POS Maintenance & Support",
      description: "Minimize downtime and maximize performance with expert maintenance.",
      features: [
        "Preventive & corrective maintenance",
        "Firmware updates & upgrades",
        "Spare parts replacement",
        "Remote diagnostic tools & SLA tracking",
      ],
    },
    {
      icon: RefreshCw,
      title: "POS Trading & Refurbishment",
      description: "Certified refurbishment and trade-in programs to extend device life.",
      features: [
        "Buyback & trade-in programs",
        "Professional cleaning & testing",
        "Certified second-life devices",
        "Eco-friendly disposal services",
      ],
    },
    {
      icon: CreditCard,
      title: "Payment & Fintech Solutions",
      description: "Secure and certified payment software to connect merchants to every scheme.",
      features: [
        "Bill payments & top-ups",
        "E-wallet & QR acceptance",
        "Payment gateway integration",
        "White-label payment apps",
      ],
    },
    {
      icon: Palette,
      title: "Branding & Merchant Materials",
      description: "Enhance brand visibility across merchant locations with custom materials.",
      features: [
        "POS stickers & terminal skins",
        "Merchant display cards",
        "Co-branded packaging",
        "Roll-ups, posters, and labels",
      ],
    },
    {
      icon: Rocket,
      title: "Fintech Incubation & Enablement",
      description: "Empowering fintechs and banks to grow with comprehensive support.",
      features: [
        "POS hardware & infrastructure",
        "Field service & technical support",
        "Payment SDKs & white-label apps",
        "Branding & operational consultancy",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Our Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Complete ecosystem to build, run, and scale your fintech operations — from hardware to software, field
              service to merchant branding
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <Card key={idx} className="border-border transition-all hover:shadow-lg hover:bg-primary group">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20">
                      <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary-foreground">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIdx) => (
                        <li
                          key={featureIdx}
                          className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground/90"
                        >
                          <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary group-hover:bg-primary-foreground" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="border-t border-border bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why Choose Makanty Services?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              We combine technical expertise with customer-focused service to deliver exceptional results
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Fast Response</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Quick turnaround times to minimize your business downtime
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Certified Technicians</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trained and certified professionals with years of experience
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All services backed by our satisfaction guarantee
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">24/7 Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Always available when you need us most</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Need Service Support?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground leading-relaxed">
                Contact our service team to schedule maintenance, request repairs, or discuss your support needs
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Contact Service Team</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/quote">Request Service Quote</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
