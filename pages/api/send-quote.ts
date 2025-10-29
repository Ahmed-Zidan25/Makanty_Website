import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const formData = req.body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "navigateproduction@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Admin email
    await transporter.sendMail({
      from: "navigateproduction@gmail.com",
      to: "ahmed@gmail.com",
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
Services: ${formData.services?.join(", ")}
Additional Info: ${formData.additionalInfo}
      `,
    })

    // Confirmation email to the user
    await transporter.sendMail({
      from: "navigateproduction@gmail.com",
      to: formData.email,
      subject: "Quote Request Received — Navigate Production",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #007BFF;">Thank you for your quote request!</h2>
          <p>Dear ${formData.contactName},</p>
          <p>We've received your quote request and our team will review it within the next 24 hours.</p>
          <p><strong>Summary:</strong></p>
          <ul>
            <li><strong>Company:</strong> ${formData.companyName}</li>
            <li><strong>Product Category:</strong> ${formData.productCategory}</li>
            <li><strong>Quantity:</strong> ${formData.quantity}</li>
          </ul>
          <p>Thank you for choosing Navigate Production.</p>
          <p>Best regards,<br/>Navigate Production Team</p>
        </div>
      `,
    })

    res.status(200).json({ success: true })
  } catch (error) {
    console.error("Email send error:", error)
    res.status(500).json({ success: false, error: "Failed to send email" })
  }
}
