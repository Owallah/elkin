import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
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
  }
};
// 
export default nextConfig;
