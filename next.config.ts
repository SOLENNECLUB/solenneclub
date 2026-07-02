import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/services/login_with_shop/:path*",
        destination:
          "https://solenneclub.myshopify.com/services/login_with_shop/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;