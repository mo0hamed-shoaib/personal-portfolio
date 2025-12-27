import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
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
  green: "#16a34a", // WhatsApp green
};

export default function ContactConfirmationEmail({
  name,
  subject,
}: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thanks for reaching out, {name}!</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={header}>
            <Img
              src="https://www.mohamedgshoaib.me/logo.png"
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

            {/* Response Time */}
            <Text style={detailLabel}>Expected Response Time</Text>
            <Text style={detailValue}>Within 24-48 hours</Text>

            <Text style={paragraphSpaced}>
              If your matter is urgent, feel free to{" "}
              <Link href="https://wa.me/201140493328" style={whatsappLink}>
                chat on WhatsApp
              </Link>{" "}
              for a quicker response.
            </Text>

            {/* Visit Portfolio Button */}
            <Section style={buttonContainer}>
              <Button
                style={buttonPrimary}
                href="https://www.mohamedgshoaib.me"
              >
                Visit Portfolio
              </Button>
            </Section>

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

            {/* Social Links */}
            <Section style={socialLinks}>
              <Link
                href="https://github.com/mohamed-g-shoaib"
                style={socialLink}
              >
                GitHub
              </Link>
              <Text style={socialDivider}>•</Text>
              <Link
                href="https://linkedin.com/in/mohamed-g-shoaib"
                style={socialLink}
              >
                LinkedIn
              </Link>
              <Text style={socialDivider}>•</Text>
              <Link href="https://www.mohamedgshoaib.me" style={socialLink}>
                Website
              </Link>
            </Section>

            <Text style={copyright}>
              © {new Date().getFullYear()} Mohamed Shoaib. All rights reserved.
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
};

const card = {
  backgroundColor: theme.card,
  border: `1px solid ${theme.border}`,
  padding: "32px 24px",
};

const heading = {
  color: theme.foreground,
  fontSize: "24px",
  fontWeight: "700",
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

const paragraphSpaced = {
  color: theme.foreground,
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "24px 0 0 0",
};

const detailLabel = {
  color: theme.muted,
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "24px 0 4px 0",
};

const detailValue = {
  color: theme.primary,
  fontSize: "18px",
  fontWeight: "700",
  margin: "0",
};

const whatsappLink = {
  color: theme.green,
  fontWeight: "600",
  textDecoration: "underline",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0 24px 0",
};

const buttonPrimary = {
  backgroundColor: theme.primary,
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const signature = {
  color: theme.foreground,
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
};

const footer = {
  textAlign: "center" as const,
  padding: "24px 0",
};

const footerText = {
  color: theme.muted,
  fontSize: "12px",
  margin: "0 0 16px 0",
};

const socialLinks = {
  margin: "0 0 16px 0",
};

const socialLink = {
  color: theme.primary,
  fontSize: "12px",
  textDecoration: "none",
};

const socialDivider = {
  color: theme.muted,
  fontSize: "12px",
  margin: "0 8px",
  display: "inline",
};

const copyright = {
  color: theme.muted,
  fontSize: "12px",
  margin: "0",
};
