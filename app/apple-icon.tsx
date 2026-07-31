import { ImageResponse } from "next/og";

// Required by `output: "export"`: render this metadata route at build time.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "linear-gradient(135deg, #a5f3fc, #0891b2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0a0a0c",
            fontSize: 58,
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: -2,
          }}
        >
          DSM
        </div>
      </div>
    ),
    { ...size }
  );
}
