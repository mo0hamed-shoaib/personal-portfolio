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

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
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

export default function ContactEmail({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  const replyMailto = `mailto:${email}?subject=Re: ${encodeURIComponent(
    subject
  )}`;
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <Html>
      <Head />
      <Preview>
        New message from {name}: {subject}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header with Logo */}
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
            <Heading style={heading}>New Contact Message</Heading>
            <Hr style={hr} />

            {/* Sender Info Box */}
            <Section style={detailsBox}>
              <Text style={detailLabel}>From</Text>
              <Text style={detailValue}>{name}</Text>

              <Text style={detailLabel}>Email</Text>
              <Text style={detailValueLink}>{email}</Text>

              <Text style={detailLabel}>Subject</Text>
              <Text style={detailValue}>{subject}</Text>

              <Text style={detailLabel}>Received</Text>
              <Text style={detailValueLast}>{timestamp}</Text>
            </Section>

            <Hr style={hr} />

            {/* Message */}
            <Text style={label}>Message</Text>
            <Text style={messageText}>{message}</Text>

            {/* Reply Button */}
            <Section style={buttonContainer}>
              <Button style={button} href={replyMailto}>
                Reply to {name}
              </Button>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from the contact form on your portfolio
              website.
            </Text>
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

const detailsBox = {
  backgroundColor: theme.background,
  borderRadius: "8px",
  padding: "20px",
  margin: "0",
};

const detailLabel = {
  color: theme.muted,
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 4px 0",
};

const detailValue = {
  color: theme.foreground,
  fontSize: "16px",
  margin: "0 0 16px 0",
};

const detailValueLink = {
  color: theme.primary,
  fontSize: "16px",
  margin: "0 0 16px 0",
};

const detailValueLast = {
  color: theme.foreground,
  fontSize: "16px",
  margin: "0",
};

const label = {
  color: theme.muted,
  fontSize: "12px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "0 0 8px 0",
};

const messageText = {
  color: theme.foreground,
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0",
  whiteSpace: "pre-wrap" as const,
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0 0 0",
};

const button = {
  backgroundColor: theme.primary,
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const footer = {
  textAlign: "center" as const,
  padding: "24px 0",
};

const footerText = {
  color: theme.muted,
  fontSize: "12px",
  margin: "0 0 8px 0",
};

const copyright = {
  color: theme.muted,
  fontSize: "12px",
  margin: "0",
};
