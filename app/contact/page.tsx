"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Mail, Phone, MapPin, Clock, Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import SocialMedia from "@/components/social-media"

const countryCodes = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Argentina", code: "+54" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Belgium", code: "+32" },
  { name: "Brazil", code: "+55" },
  { name: "Canada", code: "+1" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Egypt", code: "+20" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Germany", code: "+49" },
  { name: "Greece", code: "+30" },
  { name: "Hong Kong", code: "+852" },
  { name: "Hungary", code: "+36" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kenya", code: "+254" },
  { name: "Kuwait", code: "+965" },
  { name: "Lebanon", code: "+961" },
  { name: "Libya", code: "+218" },
  { name: "Malaysia", code: "+60" },
  { name: "Mexico", code: "+52" },
  { name: "Morocco", code: "+212" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nigeria", code: "+234" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Palestine", code: "+970" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Singapore", code: "+65" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "Spain", code: "+34" },
  { name: "Sudan", code: "+249" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Thailand", code: "+66" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+20",
    phone: "",
    subject: "",
    message: "",
  })
  const [open, setOpen] = useState(false)

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

  const selectedCountry = countryCodes.find((country) => country.code === formData.countryCode)

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
                        <p className="text-sm text-muted-foreground">info@mk360.co</p>
                        <p className="text-sm text-muted-foreground">support@mk360.co</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                        <Phone className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                        <p className="text-sm text-muted-foreground">+2 010665557575</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Address</h3>
                        <p className="text-sm text-muted-foreground">6 Al Mokhtar Street, New Maadi</p>
                        <p className="text-sm text-muted-foreground">Cairo</p>
                        <p className="text-sm text-muted-foreground">Egypt</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
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
                          <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className="w-[180px] justify-between bg-transparent"
                              >
                                {selectedCountry
                                  ? `${selectedCountry.name} ${selectedCountry.code}`
                                  : "Select country..."}
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[300px] p-0">
                              <Command>
                                <CommandInput placeholder="Search country..." />
                                <CommandList>
                                  <CommandEmpty>No country found.</CommandEmpty>
                                  <CommandGroup>
                                    {countryCodes.map((country) => (
                                      <CommandItem
                                        key={country.code}
                                        value={`${country.name} ${country.code}`}
                                        onSelect={() => {
                                          handleCountryCodeChange(country.code)
                                          setOpen(false)
                                        }}
                                      >
                                        <Check
                                          className={cn(
                                            "mr-2 h-4 w-4",
                                            formData.countryCode === country.code ? "opacity-100" : "opacity-0",
                                          )}
                                        />
                                        {country.name} ({country.code})
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
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
                        rows={12}
                        required
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <p></p>
              <div>
                 {/* Social Media Section */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Follow Us</CardTitle>
                <CardDescription>Stay connected through our social media channels</CardDescription>
              </CardHeader>
              <CardContent>
                <SocialMedia showLabels />
              </CardContent>
            </Card>
            </div>
           </div>
          </div>
        </div>
        
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-muted/30 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span>Find Us</span>
                </CardTitle>
                <CardDescription>Our head office location in Cairo, Egypt</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[21/9] rounded-xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://maps.google.com/maps?q=29.9750180,31.2753333&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Makanty Office Location"
                  ></iframe>
                </div>

                <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center sm:justify-start">
                  <MapPin className="h-4 w-4 text-secondary mr-2" />
                  6 Al Mokhtar Street, New Maadi, Cairo, Egypt
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
