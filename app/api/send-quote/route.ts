export const runtime = "nodejs"

import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const formData = await req.json()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "navigateproduction@gmail.com", // your Gmail
        pass: process.env.GMAIL_APP_PASSWORD, // use an App Password (not your real password)
      },
    })

    const mailOptions = {
      from: formData.email,
      to: "navigateproduction@gmail.com",
      subject: `New Quote Request from ${formData.companyName}`,
      text: `
Company: ${formData.companyName}
Contact: ${formData.contactName}
Email: ${formData.email}
Phone: ${formData.phone}
Business Type: ${formData.businessType}
Product Category: ${formData.productCategory}
Quantity: ${formData.quantity}
Specific Products: ${formData.specificProducts}
Services: ${formData.services.join(", ")}
Additional Info: ${formData.additionalInfo}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
