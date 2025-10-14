import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Award, Users, TrendingUp, Shield, Zap } from "lucide-react"
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
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                <p>
                  Makanty is a comprehensive fintech enabler and POS infrastructure provider — bridging hardware,
                  software, and services to power every payment. We supply, support, and sustain the full fintech
                  journey — from POS terminals to field operations, from maintenance to merchant branding.
                </p>
                <p>
                  We offer a complete ecosystem to build, run, and scale fintech operations including POS devices, field
                  service, spare parts & consumables, payment applications, acceptance & bill payments, branding
                  materials, and fintech incubation.
                </p>
                <p>
                  As an authorized partner of industry-leading brands like PAX, Verifone, SUNMI, NEXGO, NewPOS, IMIN,
                  and Feitian, we deliver cutting-edge technology backed by expert support. We work with fintech
                  partners including Visa, Mastercard, Meeza, and UnionPay to provide certified payment solutions.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-border transition-all hover:bg-primary hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-white/20">
                    <Target className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-white">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify group-hover:text-white/90">
                    To simplify and scale fintech operations for banks, fintechs, and merchants through technology,
                    reliability, and innovation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border transition-all hover:bg-primary hover:shadow-xl group">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 group-hover:bg-white/20">
                    <Eye className="h-6 w-6 text-secondary group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-white">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify group-hover:text-white/90">
                    To empower every transaction by providing seamless fintech infrastructure and integrated payment
                    solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-border bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed text-justify">
              The principles that guide everything we do and shape our relationships with customers and partners
            </p>
          </div>

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
                  <Target className="h-6 w-6 text-secondary group-hover:text-white" />
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
      </section>

      {/* Partners Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Partners & Clients</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
              Trusted by industry leaders and serving diverse sectors worldwide
            </p>
          </div>

          <div className="mx-auto max-w-6xl space-y-8">
            {/* POS Brands */}
            <Card className="border-border bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">POS Device Brands</h3>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                  {["PAX", "Verifone", "SUNMI", "NEXGO", "NewPOS", "IMIN", "Feitian"].map((brand) => (
                    <div
                      key={brand}
                      className="rounded-lg border border-border bg-background px-6 py-3 text-center font-semibold text-foreground shadow-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
                    >
                      {brand}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fintech Partners */}
            <Card className="border-border bg-gradient-to-br from-secondary/5 to-transparent">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">Fintech Partners</h3>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                  {["Visa", "Mastercard", "Meeza", "UnionPay"].map((partner) => (
                    <div
                      key={partner}
                      className="rounded-lg border border-border bg-background px-6 py-3 text-center font-semibold text-foreground shadow-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
                    >
                      {partner}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sectors Served */}
            <Card className="border-border bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="p-6 md:p-8">
                <div className="mb-6 flex items-center justify-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground md:text-2xl">Sectors We Serve</h3>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                  {["Banks", "Fintechs", "Retail", "Telecom", "Utilities"].map((sector) => (
                    <div
                      key={sector}
                      className="rounded-lg border border-border bg-background px-6 py-3 text-center font-semibold text-foreground shadow-sm transition-all hover:scale-105 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
                    >
                      {sector}
                    </div>
                  ))}
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
