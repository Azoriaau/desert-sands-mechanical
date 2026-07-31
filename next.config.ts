import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site ships as a static export served by nginx (see Dockerfile).
  // `next build` writes plain HTML/CSS/JS to ./out.
  output: "export",
  poweredByHeader: false,
  // Static export cannot run the default image optimizer.
  images: { unoptimized: true },
  // NOTE: `headers()` is a no-op under `output: "export"` — the security
  // headers now live in nginx/default.conf.
};

export default nextConfig;
