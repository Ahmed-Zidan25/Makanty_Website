import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Award, Users, TrendingUp, Shield, Zap, Building2, Package } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">About Makanty</h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              A comprehensive fintech enabler and POS infrastructure provider — bridging hardware, software, and
              services to power every payment
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Who We Are</h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-stretch mb-12">
              <div className="space-y-6 flex flex-col">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Building2 className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-foreground">Comprehensive Fintech Enabler</h3>
                        <p className="text-muted-foreground leading-relaxed text-justify text-sm">
                          Makanty is a comprehensive fintech enabler and POS infrastructure provider — bridging
                          hardware, software, and services to power every payment. We supply, support, and sustain the
                          full fintech journey — from POS terminals to field operations, from maintenance to merchant
                          branding.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                        <Package className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-foreground">Complete Ecosystem</h3>
                        <p className="text-muted-foreground leading-relaxed text-justify text-sm">
                          We offer a complete ecosystem to build, run, and scale fintech operations including POS
                          devices, field service, spare parts & consumables, payment applications, acceptance & bill
                          payments, branding materials, and fintech incubation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 flex flex-col">
                <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-transparent h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <Shield className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-foreground">Authorized Partner</h3>
                        <p className="text-muted-foreground leading-relaxed text-justify text-sm">
                          As an authorized partner of industry-leading brands like PAX, Verifone, SUNMI, NEXGO, NewPOS,
                          IMIN, and Feitian, we deliver cutting-edge technology backed by expert support.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <TrendingUp className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2 text-lg font-semibold text-foreground">Fintech Partners</h3>
                        <p className="text-muted-foreground leading-relaxed text-justify text-sm">
                          We work with fintech partners including Visa, Mastercard, Meeza, and UnionPay to provide
                          certified payment solutions that connect merchants to every payment scheme.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="relative grid gap-8 md:grid-cols-2">
              {/* Decorative background element */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

              {/* Mission Card */}
              <Card className="group relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background transition-all hover:border-primary hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-primary/10 blur-2xl transition-all group-hover:scale-150" />
                <CardContent className="relative p-8 md:p-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg transition-transform group-hover:scale-110">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div className="h-1 flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-base text-muted-foreground leading-relaxed text-justify">
                    To simplify and scale fintech operations for banks, fintechs, and merchants through technology,
                    reliability, and innovation.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    <span>Driving Innovation</span>
                    <div className="h-px flex-1 bg-primary/30" />
                  </div>
                </CardContent>
              </Card>

              {/* Vision Card */}
              <Card className="group relative overflow-hidden border-2 border-secondary/20 bg-gradient-to-br from-secondary/10 via-background to-background transition-all hover:border-secondary hover:shadow-2xl">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-secondary/10 blur-2xl transition-all group-hover:scale-150" />
                <CardContent className="relative p-8 md:p-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 shadow-lg transition-transform group-hover:scale-110">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <div className="h-1 flex-1 bg-gradient-to-r from-secondary/50 to-transparent" />
                  </div>
                  <h3 className="mb-4 text-3xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-base text-muted-foreground leading-relaxed text-justify">
                    To empower every transaction by providing seamless fintech infrastructure and integrated payment
                    solutions.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-secondary">
                    <span>Empowering Transactions</span>
                    <div className="h-px flex-1 bg-secondary/30" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Core Values */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-border transition-all hover:bg-primary hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-white/20">
                    <Award className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-white">
                    Quality Excellence
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify group-hover:text-white/90">
                    We never compromise on quality, offering only the best products and services to our customers
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-all hover:bg-primary hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 group-hover:bg-white/20">
                    <Users className="h-8 w-8 text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-white">Customer First</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify group-hover:text-white/90">
                    Our customers' success is our success. We go above and beyond to meet their needs
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-all hover:bg-primary hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-white/20">
                    <TrendingUp className="h-8 w-8 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-white">Innovation</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify group-hover:text-white/90">
                    We continuously evolve and adopt new technologies to provide cutting-edge solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-all hover:bg-primary hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-white/20">
                    <Shield className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-white">Integrity</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify group-hover:text-white/90">
                    We conduct business with honesty, transparency, and ethical practices in all interactions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-all hover:bg-primary hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 group-hover:bg-white/20">
                    <Target className="h-8 w-8 text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-white">Reliability</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify group-hover:text-white/90">
                    We deliver on our promises with consistent, dependable service and support
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-all hover:bg-primary hover:shadow-xl group">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 group-hover:bg-white/20">
                    <Zap className="h-8 w-8 text-accent group-hover:text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-white">Partnership</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed text-justify group-hover:text-white/90">
                    We build long-term relationships based on trust, collaboration, and mutual success
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Partners & Clients</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              Trusted by industry leaders and serving diverse sectors worldwide
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <Card className="border-border/50 bg-background/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 md:p-12">
                {/* POS Brands */}
                <div className="mb-10">
                  <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                      <Shield className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">POS Device Brands</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
                    {["PAX", "Verifone", "SUNMI", "NEXGO", "NewPOS", "IMIN", "Feitian"].map((brand) => (
                      <div
                        key={brand}
                        className="group relative overflow-hidden rounded-xl border-2 border-border bg-gradient-to-br from-background to-muted/30 p-4 text-center transition-all hover:border-primary hover:shadow-lg"
                      >
                        <div className="absolute inset-0 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
                        <span className="relative z-10 block text-sm font-bold text-foreground transition-colors group-hover:text-white">
                          {brand}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fintech Partners */}
                <div className="mb-10">
                  <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-white">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Fintech Partners</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {["Visa", "Mastercard", "Meeza", "UnionPay"].map((partner) => (
                      <div
                        key={partner}
                        className="group relative overflow-hidden rounded-xl border-2 border-border bg-gradient-to-br from-background to-muted/30 p-6 text-center transition-all hover:border-secondary hover:shadow-lg"
                      >
                        <div className="absolute inset-0 bg-secondary opacity-0 transition-opacity group-hover:opacity-100" />
                        <span className="relative z-10 block text-base font-bold text-foreground transition-colors group-hover:text-white">
                          {partner}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-white">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Sectors We Serve</h3>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {[
                      { name: "Banks", image: "/sector-banks.jpg" },
                      { name: "Fintechs", image: "/sector-fintechs.jpg" },
                      { name: "Retail", image: "/sector-retail.jpg" },
                      { name: "Telecom", image: "/sector-telecom.jpg" },
                      { name: "Utilities", image: "/sector-utilities.jpg" },
                    ].map((sector) => (
                      <div
                        key={sector.name}
                        className="group relative overflow-hidden rounded-xl border-2 border-border bg-gradient-to-br from-background to-muted/30 transition-all hover:border-accent hover:shadow-xl"
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={sector.image || "/placeholder.svg"}
                            alt={sector.name}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                          <span className="relative z-10 block text-lg font-bold text-foreground transition-colors group-hover:text-white">
                            {sector.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-border bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">500+</div>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-secondary md:text-5xl">1000+</div>
              <p className="text-sm text-muted-foreground">Devices Installed</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-accent md:text-5xl">24/7</div>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">10+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Ready to Work Together?</h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground leading-relaxed">
                Join hundreds of satisfied businesses that trust Makanty for their POS solutions. Let's discuss how we
                can help your business grow
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
