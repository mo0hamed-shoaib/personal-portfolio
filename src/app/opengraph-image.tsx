import { ImageResponse } from "next/og";
import { portfolioData } from "@/lib/portfolio-data";

// Image metadata
export const alt = `${portfolioData.personal.name} - ${portfolioData.personal.jobTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const { personal } = portfolioData;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #000 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            marginBottom: "24px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          {personal.name}
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#a0a0a0",
            marginBottom: "32px",
            textAlign: "center",
          }}
        >
          {personal.jobTitle}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#d0d0d0",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: "1.5",
          }}
        >
          {personal.bio}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
