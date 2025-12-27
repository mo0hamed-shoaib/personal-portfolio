import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactConfirmationEmailProps {
  name: string;
  subject: string;
}

// Theme colors from globals.css (converted to hex for email compatibility)
const theme = {
  background: "#f9f8f6", // warm cream
  foreground: "#3d3929", // dark brown
  primary: "#c2703a", // terracotta
  muted: "#767266", // muted text
  border: "#e5e3df", // border color
  card: "#ffffff", // card background
};

export default function ContactConfirmationEmail({
  name,
  subject,
}: ContactConfirmationEmailProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out, {name}!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
          <Section style={header}>
            <Img
              src={`${baseUrl}/logo.png`}
              width="48"
              height="48"
              alt="Mohamed Shoaib"
              style={logo}
            />
          </Section>

          {/* Content Card */}
          <Section style={card}>
            <Heading style={heading}>Message Received!</Heading>
            <Hr style={hr} />

            <Text style={paragraph}>Hi {name},</Text>

            <Text style={paragraph}>
              Thank you for reaching out! I&apos;ve received your message
              regarding &quot;{subject}&quot; and will get back to you as soon
              as possible.
            </Text>

            <Text style={paragraph}>
              I typically respond within 24-48 hours. If your matter is urgent,
              feel free to reach out via WhatsApp.
            </Text>

            <Text style={signature}>
              Best regards,
              <br />
              Mohamed Shoaib
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This is an automated confirmation for your contact form
              submission.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: theme.background,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "24px 16px",
  maxWidth: "600px",
};

const header = {
  textAlign: "center" as const,
  padding: "24px 0",
};

const logo = {
  margin: "0 auto",
  borderRadius: "8px",
};

const card = {
  backgroundColor: theme.card,
  border: `1px solid ${theme.border}`,
  borderRadius: "8px",
  padding: "32px 24px",
};

const heading = {
  color: theme.foreground,
  fontSize: "24px",
  fontWeight: "600",
  margin: "0 0 16px 0",
  textAlign: "center" as const,
};

const hr = {
  borderColor: theme.border,
  margin: "24px 0",
};

const paragraph = {
  color: theme.foreground,
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const signature = {
  color: theme.foreground,
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "24px 0 0 0",
};

const footer = {
  textAlign: "center" as const,
  padding: "24px 0",
};

const footerText = {
  color: theme.muted,
  fontSize: "12px",
  margin: "0",
};
