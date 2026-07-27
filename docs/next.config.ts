import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  transpilePackages: ["@veasnawt/vicons"],

  output: "export",

  basePath: isProduction ? "/vicons" : "",
  assetPrefix: isProduction ? "/vicons/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;