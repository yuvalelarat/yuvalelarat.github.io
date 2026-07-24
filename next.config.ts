import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: "export",
  images: {
    // Required for `output: "export"` — disables the on-demand Image
    // Optimization API (there is no server on GitHub Pages to run it).
    unoptimized: true,
  },
};

export default nextConfig;
