import type { NextConfig } from "next";
import createMDX from "@next/mdx"
import remarkGfm from 'remark-gfm';
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
extension: /\.mdx$/,
  options: {
    remarkPlugins: [
      [remarkGfm, { strict: true, throwOnError: true }],
    ],
    rehypePlugins: [],
  },
 })
export default   withMDX(nextConfig);
