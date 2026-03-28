import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Required for static export
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
        protocol: "https"
      },
      {
        hostname: "i.pinimg.com",
        protocol: "https"
      },
      {
        hostname: "www.doshigroup.com",
        protocol: "https"
      }
    ]
  },
  // Optional: Add trailing slashes for better static hosting
  trailingSlash: true,
};

export default nextConfig;