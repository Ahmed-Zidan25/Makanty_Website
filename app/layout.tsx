import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Makanty - Empowering Every Transaction",
  description:
    "Comprehensive fintech enabler and POS infrastructure provider. POS Devices, Field Service, Payment Solutions, and Fintech Incubation.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
