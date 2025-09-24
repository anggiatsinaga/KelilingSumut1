import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "drive.google.com",
      "i.ibb.co", // tambahin domain lain kalau perlu
    ],
  },
};

export default nextConfig;
