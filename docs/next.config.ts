import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@veasnawt/vicons"],
  turbopack: {
    root: __dirname,
    resolveAlias: {
      "@veasnawt/vicons": "../src",
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@veasnawt/vicons": require("node:path").resolve(__dirname, "../src"),
    };
    return config;
  },
};

export default nextConfig;
