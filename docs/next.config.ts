import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@veasnawt/vicons"],
  output: "export",

  basePath: "/vicons",
  assetPrefix: "/vicons/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
