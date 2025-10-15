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
                        <p className="text-sm text-muted-foreground">Al Bahr Al-Raisi Street</p>
                        <p className="text-sm text-muted-foreground">Sheraton El Nozha, Cairo</p>
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
                              <SelectContent>
    <SelectItem value="+93">🇦🇫 أفغانستان +93</SelectItem>
    <SelectItem value="+355">🇦🇱 ألبانيا +355</SelectItem>
    <SelectItem value="+213">🇩🇿 الجزائر +213</SelectItem>
    <SelectItem value="+1684">🇦🇸 ساموا الأمريكية +1684</SelectItem>
    <SelectItem value="+376">🇦🇩 أندورا +376</SelectItem>
    <SelectItem value="+244">🇦🇴 أنغولا +244</SelectItem>
    <SelectItem value="+1264">🇦🇮 أنغويلا +1264</SelectItem>
    <SelectItem value="+1268">🇦🇬 أنتيغوا وباربودا +1268</SelectItem>
    <SelectItem value="+54">🇦🇷 الأرجنتين +54</SelectItem>
    <SelectItem value="+374">🇦🇲 أرمينيا +374</SelectItem>
    <SelectItem value="+297">🇦🇼 أروبا +297</SelectItem>
    <SelectItem value="+61">🇦🇺 أستراليا +61</SelectItem>
    <SelectItem value="+43">🇦🇹 النمسا +43</SelectItem>
    <SelectItem value="+994">🇦🇿 أذربيجان +994</SelectItem>
    <SelectItem value="+1242">🇧🇸 جزر البهاما +1242</SelectItem>
    <SelectItem value="+973">🇧🇭 البحرين +973</SelectItem>
    <SelectItem value="+880">🇧🇩 بنغلاديش +880</SelectItem>
    <SelectItem value="+1246">🇧🇧 بربادوس +1246</SelectItem>
    <SelectItem value="+375">🇧🇾 روسيا البيضاء (بيلاروس) +375</SelectItem>
    <SelectItem value="+32">🇧🇪 بلجيكا +32</SelectItem>
    <SelectItem value="+501">🇧🇿 بليز +501</SelectItem>
    <SelectItem value="+229">🇧🇯 بنين +229</SelectItem>
    <SelectItem value="+1441">🇧🇲 برمودا +1441</SelectItem>
    <SelectItem value="+975">🇧🇹 بوتان +975</SelectItem>
    <SelectItem value="+591">🇧🇴 بوليفيا +591</SelectItem>
    <SelectItem value="+387">🇧🇦 البوسنة والهرسك +387</SelectItem>
    <SelectItem value="+267">🇧🇼 بوتسوانا +267</SelectItem>
    <SelectItem value="+55">🇧🇷 البرازيل +55</SelectItem>
    <SelectItem value="+246">🇮🇴 إقليم المحيط الهندي البريطاني +246</SelectItem>
    <SelectItem value="+1284">🇻🇬 جزر فيرجن البريطانية +1284</SelectItem>
    <SelectItem value="+673">🇧🇳 بروناي +673</SelectItem>
    <SelectItem value="+359">🇧🇬 بلغاريا +359</SelectItem>
    <SelectItem value="+226">🇧🇫 بوركينا فاسو +226</SelectItem>
    <SelectItem value="+257">🇧🇮 بوروندي +257</SelectItem>
    <SelectItem value="+855">🇰🇭 كمبوديا +855</SelectItem>
    <SelectItem value="+237">🇨🇲 الكاميرون +237</SelectItem>
    <SelectItem value="+1">🇨🇦 كندا +1</SelectItem>
    <SelectItem value="+238">🇨🇻 الرأس الأخضر +238</SelectItem>
    <SelectItem value="+1345">🇰🇾 جزر كايمان +1345</SelectItem>
    <SelectItem value="+236">🇨🇫 جمهورية أفريقيا الوسطى +236</SelectItem>
    <SelectItem value="+235">🇹🇩 تشاد +235</SelectItem>
    <SelectItem value="+56">🇨🇱 تشيلي +56</SelectItem>
    <SelectItem value="+86">🇨🇳 الصين +86</SelectItem>
    <SelectItem value="+61">🇨🇽 جزيرة الكريسماس +61</SelectItem>
    <SelectItem value="+61">🇨🇨 جزر كوكس (كيلينغ) +61</SelectItem>
    <SelectItem value="+57">🇨🇴 كولومبيا +57</SelectItem>
    <SelectItem value="+269">🇰🇲 جزر القمر +269</SelectItem>
    <SelectItem value="+242">🇨🇬 جمهورية الكونغو +242</SelectItem>
    <SelectItem value="+243">🇨🇩 جمهورية الكونغو الديمقراطية +243</SelectItem>
    <SelectItem value="+682">🇨🇰 جزر كوك +682</SelectItem>
    <SelectItem value="+506">🇨🇷 كوستاريكا +506</SelectItem>
    <SelectItem value="+225">🇨🇮 ساحل العاج (كوت ديفوار) +225</SelectItem>
    <SelectItem value="+385">🇭🇷 كرواتيا +385</SelectItem>
    <SelectItem value="+53">🇨🇺 كوبا +53</SelectItem>
    <SelectItem value="+599">🇨🇼 كوراساو +599</SelectItem>
    <SelectItem value="+357">🇨🇾 قبرص +357</SelectItem>
    <SelectItem value="+420">🇨🇿 جمهورية التشيك +420</SelectItem>
    <SelectItem value="+45">🇩🇰 الدنمارك +45</SelectItem>
    <SelectItem value="+253">🇩🇯 جيبوتي +253</SelectItem>
    <SelectItem value="+1767">🇩🇲 دومينيكا +1767</SelectItem>
    <SelectItem value="+1809">🇩🇴 جمهورية الدومينيكان +1809</SelectItem>
    <SelectItem value="+593">🇪🇨 الإكوادور +593</SelectItem>
    <SelectItem value="+20">🇪🇬 مصر +20</SelectItem>
    <SelectItem value="+503">🇸🇻 السلفادور +503</SelectItem>
    <SelectItem value="+240">🇬🇶 غينيا الاستوائية +240</SelectItem>
    <SelectItem value="+291">🇪🇷 إريتريا +291</SelectItem>
    <SelectItem value="+372">🇪🇪 إستونيا +372</SelectItem>
    <SelectItem value="+268">🇸🇿 إيسواتيني +268</SelectItem>
    <SelectItem value="+251">🇪🇹 إثيوبيا +251</SelectItem>
    <SelectItem value="+500">🇫🇰 جزر فوكلاند +500</SelectItem>
    <SelectItem value="+298">🇫🇴 جزر فارو +298</SelectItem>
    <SelectItem value="+679">🇫🇯 فيجي +679</SelectItem>
    <SelectItem value="+358">🇫🇮 فنلندا +358</SelectItem>
    <SelectItem value="+33">🇫🇷 فرنسا +33</SelectItem>
    <SelectItem value="+594">🇬🇫 غويانا الفرنسية +594</SelectItem>
    <SelectItem value="+689">🇵🇫 بولينيزيا الفرنسية +689</SelectItem>
    <SelectItem value="+241">🇬🇦 الغابون +241</SelectItem>
    <SelectItem value="+220">🇬🇲 غامبيا +220</SelectItem>
    <SelectItem value="+995">🇬🇪 جورجيا +995</SelectItem>
    <SelectItem value="+49">🇩🇪 ألمانيا +49</SelectItem>
    <SelectItem value="+233">🇬🇭 غانا +233</SelectItem>
    <SelectItem value="+350">🇬🇮 جبل طارق +350</SelectItem>
    <SelectItem value="+30">🇬🇷 اليونان +30</SelectItem>
    <SelectItem value="+299">🇬🇱 غرينلاند +299</SelectItem>
    <SelectItem value="+1473">🇬🇩 غرينادا +1473</SelectItem>
    <SelectItem value="+590">🇬🇵 غوادلوب +590</SelectItem>
    <SelectItem value="+1671">🇬🇺 غوام +1671</SelectItem>
    <SelectItem value="+502">🇬🇹 غواتيمالا +502</SelectItem>
    <SelectItem value="+44">🇬🇬 غيرنزي +44</SelectItem>
    <SelectItem value="+224">🇬🇳 غينيا +224</SelectItem>
    <SelectItem value="+245">🇬🇼 غينيا بيساو +245</SelectItem>
    <SelectItem value="+592">🇬🇾 غويانا +592</SelectItem>
    <SelectItem value="+509">🇭🇹 هايتي +509</SelectItem>
    <SelectItem value="+504">🇭🇳 هندوراس +504</SelectItem>
    <SelectItem value="+852">🇭🇰 هونغ كونغ +852</SelectItem>
    <SelectItem value="+36">🇭🇺 المجر +36</SelectItem>
    <SelectItem value="+354">🇮🇸 أيسلندا +354</SelectItem>
    <SelectItem value="+91">🇮🇳 الهند +91</SelectItem>
    <SelectItem value="+62">🇮🇩 إندونيسيا +62</SelectItem>
    <SelectItem value="+98">🇮🇷 إيران +98</SelectItem>
    <SelectItem value="+964">🇮🇶 العراق +964</SelectItem>
    <SelectItem value="+353">🇮🇪 أيرلندا +353</SelectItem>
    <SelectItem value="+44">🇮🇲 جزيرة مان +44</SelectItem>
    <SelectItem value="+972">🇮🇱 إسرائيل +972</SelectItem>
    <SelectItem value="+39">🇮🇹 إيطاليا +39</SelectItem>
    <SelectItem value="+1876">🇯🇲 جامايكا +1876</SelectItem>
    <SelectItem value="+81">🇯🇵 اليابان +81</SelectItem>
    <SelectItem value="+44">🇯🇪 جيرزي +44</SelectItem>
    <SelectItem value="+962">🇯🇴 الأردن +962</SelectItem>
    <SelectItem value="+7">🇰🇿 كازاخستان +7</SelectItem>
    <SelectItem value="+254">🇰🇪 كينيا +254</SelectItem>
    <SelectItem value="+686">🇰🇮 كيريباتي +686
                              {/* <SelectItem value="+20">🇪🇬 +20</SelectItem>
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
                              <SelectItem value="+33">🇫🇷 +33</SelectItem> */}
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
      title="Al Bahr Al-Raisi Street, Sheraton, El Nozha, Cairo, Egypt Location"
    />
</div>
          </div>
        </div>
      </section>
    </div>
  )
}
