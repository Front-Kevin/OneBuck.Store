/** @type {import('next').NextConfig} */
const nextConfig = {
  // 图片优化配置（Cloudflare Pages 不支持）
  images: {
    unoptimized: true,
  },
  // TypeScript 严格模式
  typescript: {
    ignoreBuildErrors: false,
  },
  // ESLint 配置
  eslint: {
    ignoreDuringBuilds: false,
  },
  // 静态文件处理
  trailingSlash: true,
  // 环境变量配置
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
