import { Resend } from "resend";
import { NextResponse } from "next/server";
import { portfolioData } from "@/lib/portfolio-data";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, subject, message } = body;

    if (!fullName || !subject || !message) {
      return NextResponse.json(
        {
          message: "All fields are required",
          errors: {
            fullName: !fullName ? "Full name is required" : undefined,
            subject: !subject ? "Subject is required" : undefined,
            message: !message ? "Message is required" : undefined,
          },
        },
        { status: 400 }
      );
    }

    if (!resend || !process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { message: "Email service is not configured" },
        { status: 500 }
      );
    }

    const emailTo = process.env.CONTACT_EMAIL || "your-email@example.com";

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: emailTo,
      subject: `Portfolio Contact: ${subject}`,
      replyTo: fullName,
      text: `Name: ${fullName}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

