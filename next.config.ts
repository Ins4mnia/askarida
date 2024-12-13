import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hcsalavat.ru",
      },
      {
        protocol: "https",
        hostname: "shop.hcsalavat.ru",
      },
    ],
  },
};
export default nextConfig;
