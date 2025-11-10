import { type NextRequest, NextResponse } from "next/server"

interface QuoteFormData {
  companyName: string
  contactName: string
  email: string
  phone: string
  businessType: string
  productCategory: string
  quantity: string
  specificProducts: string
  services: string[]
  additionalInfo: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: QuoteFormData = await request.json()

    // Validate required fields
    if (!formData.companyName || !formData.email || !formData.phone) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    const emailContent = `
      <h2>New Quote Request</h2>
      <h3>Company Information</h3>
      <p><strong>Company Name:</strong> ${formData.companyName}</p>
      <p><strong>Contact Name:</strong> ${formData.contactName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Business Type:</strong> ${formData.businessType}</p>

      <h3>Product Requirements</h3>
      <p><strong>Product Category:</strong> ${formData.productCategory}</p>
      <p><strong>Estimated Quantity:</strong> ${formData.quantity}</p>
      <p><strong>Specific Products/Models:</strong> ${formData.specificProducts || "Not specified"}</p>

      <h3>Additional Services</h3>
      <p>${formData.services.length > 0 ? formData.services.join("<br>") : "No additional services selected"}</p>

      <h3>Additional Information</h3>
      <p>${formData.additionalInfo ? formData.additionalInfo.replace(/\n/g, "<br>") : "None provided"}</p>
    `

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "ahmadibrahim.zidan@gmail.com",
        replyTo: formData.email,
        subject: `New Quote Request from ${formData.companyName}`,
        html: emailContent,
      }),
    })

    if (!response.ok) {
      console.error("Resend API error:", await response.text())
      return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Quote request sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Quote submission error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request" },
      { status: 500 },
    )
  }
}
