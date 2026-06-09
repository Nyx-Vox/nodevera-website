import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export const alt = "NodeVera Cyber IT & Services";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#06142b",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background: "rgba(34, 211, 238, 0.22)",
            right: "-140px",
            top: "-120px",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background: "rgba(255, 255, 255, 0.10)",
            left: "-160px",
            bottom: "-160px",
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px",
            width: "760px",
          }}
        >
          {/* Brand row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "42px",
            }}
          >
            <div
              style={{
                width: "82px",
                height: "82px",
                borderRadius: "24px",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(103, 232, 249, 0.35)",
              }}
            >
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "16px",
                  background: "#06142b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#67e8f9",
                  fontSize: "34px",
                  fontWeight: 900,
                }}
              >
                N
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "50px",
                  fontWeight: 900,
                  letterSpacing: "-2px",
                  lineHeight: 1,
                }}
              >
                <span>Node</span>
                <span style={{ color: "#22d3ee" }}>Vera</span>
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "8px",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "5px",
                  color: "#cbd5e1",
                  textTransform: "uppercase",
                }}
              >
                Cyber IT & Services
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "66px",
              fontWeight: 900,
              letterSpacing: "-3px",
              lineHeight: 1.02,
              maxWidth: "760px",
            }}
          >
            Cybersecurity & IT protection for growing businesses.
          </div>

          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "28px",
              lineHeight: 1.35,
              color: "#cbd5e1",
              maxWidth: "700px",
            }}
          >
            Secure systems. Protect data. Train staff. Build digital trust.
          </div>

          <div
            style={{
              marginTop: "42px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            {["Cybersecurity", "IT Consulting", "Data Protection"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    padding: "14px 22px",
                    borderRadius: "999px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(103, 232, 249, 0.2)",
                    color: "#e2e8f0",
                    fontSize: "20px",
                    fontWeight: 800,
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right panel */}
        <div
          style={{
            position: "absolute",
            right: "72px",
            top: "115px",
            width: "340px",
            height: "400px",
            borderRadius: "44px",
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            display: "flex",
            flexDirection: "column",
            padding: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              fontWeight: 900,
              color: "#67e8f9",
              marginBottom: "22px",
            }}
          >
            Business Security Snapshot
          </div>

          {[
            ["Email Security", "78%"],
            ["Access Control", "64%"],
            ["Staff Awareness", "58%"],
            ["Data Protection", "72%"],
          ].map(([label, width]) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "22px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#e2e8f0",
                  marginBottom: "10px",
                }}
              >
                <span>{label}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "10px",
                  borderRadius: "999px",
                  background: "rgba(255, 255, 255, 0.12)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width,
                    height: "10px",
                    borderRadius: "999px",
                    background: "#22d3ee",
                  }}
                />
              </div>
            </div>
          ))}

          <div
            style={{
              display: "flex",
              marginTop: "auto",
              padding: "18px",
              borderRadius: "24px",
              background: "#ffffff",
              color: "#06142b",
              fontSize: "20px",
              fontWeight: 900,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}