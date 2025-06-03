import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdsassets.apple.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.samsung.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d1ncau8tqf99kp.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "www.istudio.store",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.education.studio7thailand.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
