import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/emailmagnet/chrome-extension",
        destination: "/emailmagnet/chrome-email-extractor",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
