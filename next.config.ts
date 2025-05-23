import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  // enable cross origin security
  crossOrigin: "anonymous",

  //allow placeholder images
  images: {
    remotePatterns: [new URL("https://placehold.co/400")],
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;