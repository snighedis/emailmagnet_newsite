import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/emailmagnet/chrome-extension",
        destination: "/emailmagnet/chrome-email-extractor",
        permanent: true,
      },
      {
        source: "/emailmagnet-free-email-extractor",
        destination: "/emailmagnet/free-email-extractor",
        permanent: true,
      },
      {
        source: "/emailmagnet-email-extractor-vs-scraper",
        destination: "/emailmagnet/email-extractor-vs-scraper",
        permanent: true,
      },
      {
        source: "/clicklist-ai-writing-assistant-chrome-extension",
        destination: "/clickpilot-ai/ai-writing-assistant-chrome-extension",
        permanent: true,
      },
      {
        source: "/countdown391",
        destination: "/countdown321",
        permanent: true,
      },
      {
        source: "/countdown391/shopify-countdown-timer-app",
        destination: "/countdown321/shopify-countdown-timer-app",
        permanent: true,
      },
      {
        source: "/countdown391/shopify-urgency-app",
        destination: "/countdown321/shopify-urgency-app",
        permanent: true,
      },
      {
        source: "/compare-manual-email-copying",
        destination: "/compare/manual-email-copying",
        permanent: true,
      },
      {
        source: "/blog/three-reasons-to-upgrade-emailmagnet",
        destination: "/blog/free-vs-pro-when-to-upgrade-emailmagnet",
        permanent: true,
      },
      {
        source: "/docs/supported-websites",
        destination: "/docs/responsible-use",
        permanent: true,
      },
      {
        source: "/volume%20control%20pro/chrome%20volume%20booster%20600",
        destination: "/volume-control-pro/chrome-volume-booster-600",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
