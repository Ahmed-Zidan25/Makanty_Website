"use client"

import { Suspense, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products, categories } from "@/lib/pos-data"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category") || "all"
  const [selectedCategory, setSelectedCategory] = useState(categoryParam)

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">POS Devices</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our comprehensive range of POS devices from leading manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className="text-sm"
              >
                {cat.name}
                <Badge variant="secondary" className="ml-2">
                  {cat.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="flex flex-col border-border transition-all hover:shadow-lg hover:bg-primary group"
              >
                <CardContent className="flex flex-col p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                    <Badge className="absolute right-2 top-2 bg-primary">{product.brand}</Badge>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary-foreground">
                      {product.name}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground group-hover:text-primary-foreground/90 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="mb-4 space-y-1 flex-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground/90"
                        >
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary group-hover:text-primary-foreground" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between border-t border-border group-hover:border-primary-foreground/20 pt-4">
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary-foreground">
                        {product.price}
                      </span>
                      <Button asChild size="sm" variant="secondary">
                        <Link href="/quote">Request Quote</Link>
                      </Button>
                    </div>
                  </ div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">Can't Find What You're Looking For?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground leading-relaxed">
            Contact our team for custom solutions or to inquire about specific products not listed here.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/quote">Get Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ProductsContent />
    </Suspense>
  )
}
