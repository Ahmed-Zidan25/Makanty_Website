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
                        <p className="text-sm text-muted-foreground">+2 01069443438</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-foreground">Address</h3>
                        <p className="text-sm text-muted-foreground">12b Abd El-Aziz El-Sayed</p>
                        <p className="text-sm text-muted-foreground">Huckstep, El Nozha</p>
                        <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
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
                              {/* Countries in English */}
                              <SelectItem value="+93">🇦🇫 Afghanistan +93</SelectItem>
                              <SelectItem value="+355">🇦🇱 Albania +355</SelectItem>
                              <SelectItem value="+213">🇩🇿 Algeria +213</SelectItem>
                              <SelectItem value="+1684">🇦🇸 American Samoa +1684</SelectItem>
                              <SelectItem value="+376">🇦🇩 Andorra +376</SelectItem>
                              <SelectItem value="+244">🇦🇴 Angola +244</SelectItem>
                              <SelectItem value="+1264">🇦🇮 Anguilla +1264</SelectItem>
                              <SelectItem value="+1268">🇦🇬 Antigua and Barbuda +1268</SelectItem>
                              <SelectItem value="+54">🇦🇷 Argentina +54</SelectItem>
                              <SelectItem value="+374">🇦🇲 Armenia +374</SelectItem>
                              <SelectItem value="+297">🇦🇼 Aruba +297</SelectItem>
                              <SelectItem value="+61">🇦🇺 Australia +61</SelectItem>
                              <SelectItem value="+43">🇦🇹 Austria +43</SelectItem>
                              <SelectItem value="+994">🇦🇿 Azerbaijan +994</SelectItem>
                              <SelectItem value="+1242">🇧🇸 Bahamas +1242</SelectItem>
                              <SelectItem value="+973">🇧🇭 Bahrain +973</SelectItem>
                              <SelectItem value="+880">🇧🇩 Bangladesh +880</SelectItem>
                              <SelectItem value="+1246">🇧🇧 Barbados +1246</SelectItem>
                              <SelectItem value="+375">🇧🇾 Belarus +375</SelectItem>
                              <SelectItem value="+32">🇧🇪 Belgium +32</SelectItem>
                              <SelectItem value="+501">🇧🇿 Belize +501</SelectItem>
                              <SelectItem value="+229">🇧🇯 Benin +229</SelectItem>
                              <SelectItem value="+1441">🇧🇲 Bermuda +1441</SelectItem>
                              <SelectItem value="+975">🇧🇹 Bhutan +975</SelectItem>
                              <SelectItem value="+591">🇧🇴 Bolivia +591</SelectItem>
                              <SelectItem value="+387">🇧🇦 Bosnia and Herzegovina +387</SelectItem>
                              <SelectItem value="+267">🇧🇼 Botswana +267</SelectItem>
                              <SelectItem value="+55">🇧🇷 Brazil +55</SelectItem>
                              <SelectItem value="+246">🇮🇴 British Indian Ocean Territory +246</SelectItem>
                              <SelectItem value="+1284">🇻🇬 British Virgin Islands +1284</SelectItem>
                              <SelectItem value="+673">🇧🇳 Brunei +673</SelectItem>
                              <SelectItem value="+359">🇧🇬 Bulgaria +359</SelectItem>
                              <SelectItem value="+226">🇧🇫 Burkina Faso +226</SelectItem>
                              <SelectItem value="+257">🇧🇮 Burundi +257</SelectItem>
                              <SelectItem value="+855">🇰🇭 Cambodia +855</SelectItem>
                              <SelectItem value="+237">🇨🇲 Cameroon +237</SelectItem>
                              <SelectItem value="+1">🇨🇦 Canada +1</SelectItem>
                              <SelectItem value="+238">🇨🇻 Cape Verde +238</SelectItem>
                              <SelectItem value="+1345">🇰🇾 Cayman Islands +1345</SelectItem>
                              <SelectItem value="+236">🇨🇫 Central African Republic +236</SelectItem>
                              <SelectItem value="+235">🇹🇩 Chad +235</SelectItem>
                              <SelectItem value="+56">🇨🇱 Chile +56</SelectItem>
                              <SelectItem value="+86">🇨🇳 China +86</SelectItem>
                              <SelectItem value="+61">🇨🇽 Christmas Island +61</SelectItem>
                              <SelectItem value="+61">🇨🇨 Cocos (Keeling) Islands +61</SelectItem>
                              <SelectItem value="+57">🇨🇴 Colombia +57</SelectItem>
                              <SelectItem value="+269">🇰🇲 Comoros +269</SelectItem>
                              <SelectItem value="+242">🇨🇬 Republic of the Congo +242</SelectItem>
                              <SelectItem value="+243">🇨🇩 Democratic Republic of the Congo +243</SelectItem>
                              <SelectItem value="+682">🇨🇰 Cook Islands +682</SelectItem>
                              <SelectItem value="+506">🇨🇷 Costa Rica +506</SelectItem>
                              <SelectItem value="+225">🇨🇮 Ivory Coast (Côte d'Ivoire) +225</SelectItem>
                              <SelectItem value="+385">🇭🇷 Croatia +385</SelectItem>
                              <SelectItem value="+53">🇨🇺 Cuba +53</SelectItem>
                              <SelectItem value="+599">🇨🇼 Curacao +599</SelectItem>
                              <SelectItem value="+357">🇨🇾 Cyprus +357</SelectItem>
                              <SelectItem value="+420">🇨🇿 Czech Republic +420</SelectItem>
                              <SelectItem value="+45">🇩🇰 Denmark +45</SelectItem>
                              <SelectItem value="+253">🇩🇯 Djibouti +253</SelectItem>
                              <SelectItem value="+1767">🇩🇲 Dominica +1767</SelectItem>
                              <SelectItem value="+1809">🇩🇴 Dominican Republic +1809</SelectItem>
                              <SelectItem value="+593">🇪🇨 Ecuador +593</SelectItem>
                              <SelectItem value="+20">🇪🇬 Egypt +20</SelectItem>
                              <SelectItem value="+503">🇸🇻 El Salvador +503</SelectItem>
                              <SelectItem value="+240">🇬🇶 Equatorial Guinea +240</SelectItem>
                              <SelectItem value="+291">🇪🇷 Eritrea +291</SelectItem>
                              <SelectItem value="+372">🇪🇪 Estonia +372</SelectItem>
                              <SelectItem value="+268">🇸🇿 Eswatini +268</SelectItem>
                              <SelectItem value="+251">🇪🇹 Ethiopia +251</SelectItem>
                              <SelectItem value="+500">🇫🇰 Falkland Islands +500</SelectItem>
                              <SelectItem value="+298">🇫🇴 Faroe Islands +298</SelectItem>
                              <SelectItem value="+679">🇫🇯 Fiji +679</SelectItem>
                              <SelectItem value="+358">🇫🇮 Finland +358</SelectItem>
                              <SelectItem value="+33">🇫🇷 France +33</SelectItem>
                              <SelectItem value="+594">🇬🇫 French Guiana +594</SelectItem>
                              <SelectItem value="+689">🇵🇫 French Polynesia +689</SelectItem>
                              <SelectItem value="+241">🇬🇦 Gabon +241</SelectItem>
                              <SelectItem value="+220">🇬🇲 Gambia +220</SelectItem>
                              <SelectItem value="+995">🇬🇪 Georgia +995</SelectItem>
                              <SelectItem value="+49">🇩🇪 Germany +49</SelectItem>
                              <SelectItem value="+233">🇬🇭 Ghana +233</SelectItem>
                              <SelectItem value="+350">🇬🇮 Gibraltar +350</SelectItem>
                              <SelectItem value="+30">🇬🇷 Greece +30</SelectItem>
                              <SelectItem value="+299">🇬🇱 Greenland +299</SelectItem>
                              <SelectItem value="+1473">🇬🇩 Grenada +1473</SelectItem>
                              <SelectItem value="+590">🇬🇵 Guadeloupe +590</SelectItem>
                              <SelectItem value="+1671">🇬🇺 Guam +1671</SelectItem>
                              <SelectItem value="+502">🇬🇹 Guatemala +502</SelectItem>
                              <SelectItem value="+44">🇬🇬 Guernsey +44</SelectItem>
                              <SelectItem value="+224">🇬🇳 Guinea +224</SelectItem>
                              <SelectItem value="+245">🇬🇼 Guinea-Bissau +245</SelectItem>
                              <SelectItem value="+592">🇬🇾 Guyana +592</SelectItem>
                              <SelectItem value="+509">🇭🇹 Haiti +509</SelectItem>
                              <SelectItem value="+504">🇭🇳 Honduras +504</SelectItem>
                              <SelectItem value="+852">🇭🇰 Hong Kong +852</SelectItem>
                              <SelectItem value="+36">🇭🇺 Hungary +36</SelectItem>
                              <SelectItem value="+354">🇮🇸 Iceland +354</SelectItem>
                              <SelectItem value="+91">🇮🇳 India +91</SelectItem>
                              <SelectItem value="+62">🇮🇩 Indonesia +62</SelectItem>
                              <SelectItem value="+98">🇮🇷 Iran +98</SelectItem>
                              <SelectItem value="+964">🇮🇶 Iraq +964</SelectItem>
                              <SelectItem value="+353">🇮🇪 Ireland +353</SelectItem>
                              <SelectItem value="+44">🇮🇲 Isle of Man +44</SelectItem>
                              <SelectItem value="+972">🇮🇱 Israel +972</SelectItem>
                              <SelectItem value="+39">🇮🇹 Italy +39</SelectItem>
                              <SelectItem value="+1876">🇯🇲 Jamaica +1876</SelectItem>
                              <SelectItem value="+81">🇯🇵 Japan +81</SelectItem>
                              <SelectItem value="+44">🇯🇪 Jersey +44</SelectItem>
                              <SelectItem value="+962">🇯🇴 Jordan +962</SelectItem>
                              <SelectItem value="+7">🇰🇿 Kazakhstan +7</SelectItem>
                              <SelectItem value="+254">🇰🇪 Kenya +254</SelectItem>
                              <SelectItem value="+686">🇰🇮 Kiribati +686</SelectItem>
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
      src="https://maps.google.com/?cid=7481853068258947086&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="12b Abd El-Aziz El-Sayed, Huckstep, El Nozha Location"
    />
</div>
          </div>
        </div>
      </section>
    </div>
  )
}