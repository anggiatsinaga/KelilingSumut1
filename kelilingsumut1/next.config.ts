import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "drive.google.com",
            "i.ibb.co" // juga tambahkan domain lain yang kamu pakai
        ],
    },
};

module.exports = nextConfig;