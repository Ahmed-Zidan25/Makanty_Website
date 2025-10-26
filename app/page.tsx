import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Wrench, Package, Headphones, Shield, Zap, Globe } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
      <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/background-video-2CIF5UEjEF4Aw23181pScE6AJ8x3qq.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="container relative mx-auto px-4 py-10 md:py-16 z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl text-white">
            Makanty – Empowering Every Transaction
          </h1>
          <p className="mb-8 text-lg text-white/90 leading-relaxed md:text-xl">
            A comprehensive fintech enabler and POS infrastructure provider — bridging hardware, software, and services
            to power every payment. We supply, support, and sustain the full fintech journey.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/products">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/10 text-white hover:bg-white/20 text-base"
            >
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

      
    
      

      {/* Partners/Brands Section */}
      <section className="py-12 md:py-16">
         <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-3 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Authorized Partner of Leading Brands</h2>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <p className="text-sm text-muted-foreground">Trusted by the world's top POS manufacturers</p>
          </div>
          {/* تم استبدال النص بالشعارات */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/pax.PNG" 
                alt="PAX Technology Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/ncr.svg" 
                alt="NCR Corporation Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/ingenico.svg" 
                alt="Ingenico Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/verifone.PNG" 
                alt="verifone Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/sunmi.PNG" 
                alt="sunmi" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/IMIN.svg" 
                alt="IMIN" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/Feitian.png" 
                alt="Feitian" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/NewPOS.png" 
                alt="NewPOS" 
                className="h-full w-full object-contain" 
              />
            </div>
            <div className="h-10 w-32 md:h-12 md:w-40 opacity-70 hover:opacity-100 transition-opacity">
              <img 
                src="/logos/NEXGO.svg" 
                alt="NEXGO" 
                className="h-full w-full object-contain" 
              />
          </div>
        </div>
      </section>


      {/* Ecosystem Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">The Makanty Ecosystem</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              All you need to build, run, and scale your fintech operations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border">
            
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20">
                  <Package className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  POS Devices
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed text-sm">
                  Android Smart POS, Traditional POS, Desktop & Countertop, Mini & Mobile terminals
                </p>
              </CardContent>
            </Card>
             <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
            
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-primary-foreground/20">
                  <Wrench className="h-6 w-6 text-secondary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Field Service
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed text-sm">
                  Deployment, installation, on-site repair, maintenance, and asset tracking
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-primary-foreground/20">
                  <Shield className="h-6 w-6 text-accent group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Payment Solutions
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed text-sm">
                  Bill payments, e-wallet, QR acceptance, payment gateway, and white-label apps
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20">
                  <Zap className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Spare Parts & Consumables
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed text-sm">
                  Chargers, screens, batteries, paper rolls, SIM cards, and branding materials
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-primary-foreground/20">
                  <Headphones className="h-6 w-6 text-secondary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  POS Maintenance
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed text-sm">
                  Preventive & corrective maintenance, firmware updates, and remote diagnostics
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-primary-foreground/20">
                  <CheckCircle className="h-6 w-6 text-accent group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Trading & Refurbishment
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed text-sm">
                  Buyback, trade-in, certified second-life devices, and eco-friendly disposal
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20">
                  <Package className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Branding Materials
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed text-sm">
                  POS stickers, terminal skins, merchant display cards, and co-branded packaging
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-primary-foreground/20">
                  <Globe className="h-6 w-6 text-secondary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Fintech Incubation
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed text-sm">
                  Infrastructure, technical support, payment SDKs, and operational consultancy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Why Choose Makanty?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              We don't just power payments — we empower the ecosystem
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20">
                  <Package className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  One-Stop Fintech Ecosystem
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                  Complete infrastructure from hardware to software, field service to merchant branding
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-primary-foreground/20">
                  <Shield className="h-6 w-6 text-secondary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Certified Integrations
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                  Certified POS and software integrations with Visa, Mastercard, Meeza, and UnionPay
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-primary-foreground/20">
                  <Globe className="h-6 w-6 text-accent group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Nationwide Support
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                  Field service and maintenance support across the country with real-time tracking
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary-foreground/20">
                  <Wrench className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Complete Supply Chain
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                  Hardware, software, consumables, and spare parts all from one trusted source
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-primary-foreground/20">
                  <CheckCircle className="h-6 w-6 text-secondary group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Merchant Branding Expertise
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                  Custom branding materials to enhance visibility at every merchant touchpoint
                </p>
              </CardContent>
            </Card>

            <Card className="border-border transition-all hover:shadow-lg hover:bg-[#f1f5f9] hover:text-foreground group">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-primary-foreground/20">
                  <Zap className="h-6 w-6 text-accent group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary-foreground">
                  Fintech Incubation
                </h3>
                <p className="text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                  Empowering fintechs and banks to grow with operational and technical support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Product Categories</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              Discover our comprehensive range of products designed to meet all your point-of-sale needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link href="/products?category=pos" className="group">
              <Card className="h-full border-border transition-all hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-primary/5">
                    <img
                      src="/modern-pos-terminal.jpg"
                      alt="POS Devices"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">POS Devices</h3>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                      Android Smart POS, Traditional POS, Desktop & Countertop, Mini & Mobile terminals from leading
                      brands
                    </p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      View Products
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products?category=ecr" className="group">
              <Card className="h-full border-border transition-all hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-secondary/20 to-secondary/5">
                    <img
                      src="/electronic-cash-register.jpg"
                      alt="ECR Systems"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">ECR Systems</h3>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                      Reliable electronic cash registers for efficient transaction management and reporting
                    </p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      View Products
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products?category=pos-parts" className="group">
              <Card className="h-full border-border transition-all hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-accent/20 to-accent/5">
                    <img
                      src="/pos-spare-parts-components.jpg"
                      alt="POS Spare Parts"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Accessories & Spare Parts</h3>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                      Chargers, cables, screens, keypads, batteries, boards, and certified spare parts for all major
                      brands
                    </p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      View Products
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/products?category=ecr-parts" className="group">
              <Card className="h-full border-border transition-all hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-primary/5">
                    <img
                      src="/cash-register-parts.jpg"
                      alt="Consumables"
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">Consumables</h3>
                    <p className="mb-4 text-muted-foreground leading-relaxed">
                      Paper rolls, SIM cards, security seals, packaging materials, and branding kits
                    </p>
                    <span className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                      View Products
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Sectors We Serve</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              Trusted by leading organizations across multiple industries
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { name: "Banks", image: "/sector-banks.jpg" },
              { name: "Fintechs", image: "/sector-fintechs.jpg" },
              { name: "Retail", image: "/sector-retail.jpg" },
              { name: "Telecom", image: "/sector-telecom.jpg" },
              { name: "Utilities", image: "/sector-utilities.jpg" },
            ].map((sector) => (
              <Card
                key={sector.name}
                className="group overflow-hidden border-border transition-all hover:shadow-xl hover:border-primary/50"
              >
                <CardContent className="p-0">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={sector.image || "/placeholder.svg"}
                      alt={sector.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-xl font-bold text-white text-center px-4">{sector.name}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Let's Build the Future of Payments Together
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground leading-relaxed">
                Get in touch with our team to discuss your requirements and receive a customized quote for your business
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/quote">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
