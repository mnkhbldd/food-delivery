import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },

      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        // Add pathname pattern if needed
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
