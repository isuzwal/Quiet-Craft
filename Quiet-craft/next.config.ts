import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  /* config options here */
 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "i.pinimg.com",
    },
  ],
}

};
  const withMDX=createMDX({

 })
export default   withMDX(nextConfig);
