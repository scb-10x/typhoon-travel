import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['favicon.ico', 'images.unsplash.com'],
  },
};

export default nextConfig;
