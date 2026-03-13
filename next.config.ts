import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const nextConfig: NextConfig = {
  // Your existing Next.js config options can go here
};

// Check if we are in local development
const isDev = process.env.NODE_ENV === "development";

// Initialize Serwist WITHOUT the deprecated disable option
const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
});

// Conditionally export the configuration
export default isDev ? nextConfig : withSerwist(nextConfig);