import { Resend } from "resend"
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT_EMAIL = process.env.QUOTE_RECIPIENT_EMAIL || "your-email@example.com"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      companyName,
      contactName,
      email,
      phone,
      businessType,
      productCategory,
      quantity,
      specificProducts,
      services,
      additionalInfo,
    } = body

    // Validate required fields
    if (!companyName || !contactName || !email || !phone || !businessType || !productCategory || !quantity) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Format the email content
    const emailContent = `
      <h2>New Quote Request</h2>
      
      <h3>Company Information</h3>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Contact Name:</strong> ${contactName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Business Type:</strong> ${businessType}</p>
      
      <h3>Product Requirements</h3>
      <p><strong>Product Category:</strong> ${productCategory}</p>
      <p><strong>Estimated Quantity:</strong> ${quantity}</p>
      ${specificProducts ? `<p><strong>Specific Products:</strong> ${specificProducts}</p>` : ""}
      
      ${
        services && services.length > 0
          ? `
        <h3>Additional Services</h3>
        <ul>
          ${services.map((service: string) => `<li>${service}</li>`).join("")}
        </ul>
      `
          : ""
      }
      
      ${
        additionalInfo
          ? `
        <h3>Additional Information</h3>
        <p>${additionalInfo}</p>
      `
          : ""
      }
      
      <hr />
      <p><small>This quote request was submitted from your website.</small></p>
    `

    // Send email using Resend
    const data = await resend.emails.send({
      from: "Quote Form <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `New Quote Request from ${companyName}`,
      html: emailContent,
    })

    if (data.error) {
      console.error("Resend error:", data.error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: "Quote request sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing quote request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
