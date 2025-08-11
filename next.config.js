/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript 严格模式
  typescript: {
    ignoreBuildErrors: false,
  },
  // ESLint 配置
  eslint: {
    ignoreDuringBuilds: false,
  },
  // 环境变量配置
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}

module.exports = nextConfig
