"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, CheckCircle } from "lucide-react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    productCategory: "",
    quantity: "",
    specificProducts: "",
    services: [] as string[],
    additionalInfo: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Quote form submitted:", formData)

    try {
      const res = await fetch("/api/send-quote", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
})


      if (res.ok) {
        alert("Thank you for your quote request! Our team will contact you within 24 hours.")
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          businessType: "",
          productCategory: "",
          quantity: "",
          specificProducts: "",
          services: [],
          additionalInfo: "",
        })
      } else {
        alert("Something went wrong while sending your request. Please try again later.")
      }
    } catch (error) {
      console.error("Error submitting quote:", error)
      alert("Network error. Please check your connection and try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const services = [
    "Installation & Setup",
    "Training",
    "Maintenance Contract",
    "Extended Warranty",
    "24/7 Support",
    "Software Customization",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Request a Quote</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your requirements and we'll provide a customized quote tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Benefits Sidebar */}
              <div className="space-y-6">
                <Card className="border-border bg-primary/5">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold text-foreground">What You'll Get</h3>
                    <ul className="space-y-3 text-left">
                      {[
                        "Detailed pricing breakdown",
                        "Product recommendations",
                        "Service options",
                        "Delivery timeline",
                        "Warranty information",
                        "Payment terms",
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-lg font-semibold text-foreground">Need Help?</h3>
                    <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                      Not sure what you need? Our team can help you choose the right solution.
                    </p>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="/contact">Contact Us</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Quote Form */}
              <div className="lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="p-6 md:p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Company Information */}
                      <div>
                        <h2 className="mb-4 text-xl font-bold text-foreground">Company Information</h2>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="companyName">Company Name *</Label>
                            <Input
                              id="companyName"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleChange}
                              placeholder="Your Company Ltd."
                              required
                            />
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="contactName">Contact Name *</Label>
                              <Input
                                id="contactName"
                                name="contactName"
                                value={formData.contactName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="businessType">Business Type *</Label>
                              <Select
                                value={formData.businessType}
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, businessType: value }))}
                                required
                              >
                                <SelectTrigger id="businessType">
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="retail">Retail Store</SelectItem>
                                  <SelectItem value="restaurant">Restaurant</SelectItem>
                                  <SelectItem value="hospitality">Hospitality</SelectItem>
                                  <SelectItem value="service">Service Provider</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="email">Email Address *</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@company.com"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Product Requirements */}
                      <div className="border-t border-border pt-6">
                        <h2 className="mb-4 text-xl font-bold text-foreground">Product Requirements</h2>
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="productCategory">Product Category *</Label>
                              <Select
                                value={formData.productCategory}
                                onValueChange={(value) => setFormData((prev) => ({ ...prev, productCategory: value }))}
                                required
                              >
                                <SelectTrigger id="productCategory">
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pos">POS Devices</SelectItem>
                                  <SelectItem value="ecr">ECR Systems</SelectItem>
                                  <SelectItem value="pos-parts">POS Spare Parts</SelectItem>
                                  <SelectItem value="ecr-parts">ECR Spare Parts</SelectItem>
                                  <SelectItem value="multiple">Multiple Categories</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="quantity">Estimated Quantity *</Label>
                              <Input
                                id="quantity"
                                name="quantity"
                                type="number"
                                min="1"
                                value={formData.quantity}
                                onChange={handleChange}
                                placeholder="e.g., 5"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="specificProducts">Specific Products or Models</Label>
                            <Textarea
                              id="specificProducts"
                              name="specificProducts"
                              value={formData.specificProducts}
                              onChange={handleChange}
                              placeholder="List any specific products, brands, or models you're interested in..."
                              rows={3}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Additional Services */}
                      <div className="border-t border-border pt-6">
                        <h2 className="mb-4 text-xl font-bold text-foreground">Additional Services</h2>
                        <div className="space-y-3">
                          {services.map((service) => (
                            <div key={service} className="flex items-center gap-2">
                              <Checkbox
                                id={service}
                                checked={formData.services.includes(service)}
                                onCheckedChange={() => handleServiceToggle(service)}
                              />
                              <Label htmlFor={service} className="cursor-pointer font-normal">
                                {service}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div className="border-t border-border pt-6">
                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo">Additional Information</Label>
                          <Textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={formData.additionalInfo}
                            onChange={handleChange}
                            placeholder="Any other details, special requirements, or questions..."
                            rows={4}
                          />
                        </div>
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Submit Quote Request
                      </Button>

                      <p className="text-center text-sm text-muted-foreground">
                        We'll review your request and get back to you within 24 hours
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
