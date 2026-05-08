import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/solutions",       destination: "/programs",       permanent: true },
      { source: "/solutions/:slug", destination: "/programs/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
