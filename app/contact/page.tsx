"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+20",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("Thank you for contacting us! We'll get back to you soon.")
    setFormData({ name: "", email: "", countryCode: "+20", phone: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCountryCodeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: value,
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-br from-primary/5 to-secondary/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Contact Us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get in touch with our team. We're here to help with any questions or support you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Have questions about our products or services? Our team is ready to assist you.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                        <p className="text-sm text-muted-foreground">info@makanty.com</p>
                        <p className="text-sm text-muted-foreground">support@makanty.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Address</h3>
                        <p className="text-sm text-muted-foreground">123 Business Street</p>
                        <p className="text-sm text-muted-foreground">City, State 12345</p>
                        <p className="text-sm text-muted-foreground">Country</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                        <p className="mt-2 text-sm font-medium text-primary">24/7 Emergency Support Available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border">
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="flex gap-2">
                          <Select value={formData.countryCode} onValueChange={handleCountryCodeChange}>
                            <SelectTrigger className="w-[120px]">
                              <SelectValue placeholder="Code" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="+20">🇪🇬 +20</SelectItem>
                              <SelectItem value="+966">🇸🇦 +966</SelectItem>
                              <SelectItem value="+971">🇦🇪 +971</SelectItem>
                              <SelectItem value="+965">🇰🇼 +965</SelectItem>
                              <SelectItem value="+974">🇶🇦 +974</SelectItem>
                              <SelectItem value="+968">🇴🇲 +968</SelectItem>
                              <SelectItem value="+973">🇧🇭 +973</SelectItem>
                              <SelectItem value="+962">🇯🇴 +962</SelectItem>
                              <SelectItem value="+961">🇱🇧 +961</SelectItem>
                              <SelectItem value="+1">🇺🇸 +1</SelectItem>
                              <SelectItem value="+44">🇬🇧 +44</SelectItem>
                              <SelectItem value="+49">🇩🇪 +49</SelectItem>
                              <SelectItem value="+33">🇫🇷 +33</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="123 456 7890"
                            className="flex-1"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="aspect-video w-full bg-muted/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841!2d-73.9875!3d40.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTUuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Makanty Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
