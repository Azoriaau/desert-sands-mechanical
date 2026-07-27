import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1000px 500px at 50% -10%, #08313a 0%, #0a0a0c 55%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "linear-gradient(135deg, #a5f3fc, #0891b2)",
              display: "flex",
            }}
          />
          <div
            style={{
              color: "#22d3ee",
              fontSize: 26,
              letterSpacing: 8,
              fontWeight: 700,
            }}
          >
            {site.tagline.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ececee",
              fontSize: 104,
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            Desert Sands
          </div>
          <div
            style={{
              color: "#22d3ee",
              fontSize: 104,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: 4,
            }}
          >
            MECHANICAL
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "#9a9aa4",
            fontSize: 30,
          }}
        >
          <div style={{ display: "flex" }}>Geraldton & the Midwest, WA</div>
          <div style={{ display: "flex", color: "#ececee", fontWeight: 700 }}>
            {site.phone}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
