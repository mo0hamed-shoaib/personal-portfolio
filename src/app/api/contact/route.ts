import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "@/emails/contact-email";
import ContactConfirmationEmail from "@/emails/contact-confirmation-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send notification email to site owner
    const { error: notificationError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      react: ContactEmail({ name, email, subject, message }),
    });

    if (notificationError) {
      console.error("Resend notification error:", notificationError);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send confirmation email to the sender
    const { error: confirmationError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: `Thanks for reaching out!`,
      react: ContactConfirmationEmail({ name, subject }),
    });

    if (confirmationError) {
      // Log but don't fail - the main email was sent successfully
      console.error("Resend confirmation error:", confirmationError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
