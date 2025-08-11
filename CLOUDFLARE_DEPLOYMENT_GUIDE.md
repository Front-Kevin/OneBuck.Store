# Cloudflare Pages 部署指南

## 问题原因

原始错误 `Missing entry-point to Worker script` 是因为：

1. `wrangler.toml` 配置不正确 - 混合了 Cloudflare Workers 和 Pages 的配置
2. 使用了错误的部署命令 - 应该使用 `wrangler pages deploy` 而不是 `wrangler deploy`

## 解决方案

### 1. 修复 wrangler.toml 配置

更新了配置文件以适配 Cloudflare Pages：

```toml
name = "nextjs-cloudflare-app"
compatibility_date = "2024-01-01"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"
```

### 2. 更新部署脚本

在 `package.json` 中使用正确的命令：

```json
{
  "scripts": {
    "pages:build": "npx @cloudflare/next-on-pages",
    "preview": "npm run pages:build && npx wrangler pages dev .vercel/output/static",
    "deploy": "npm run pages:build && npx wrangler pages deploy .vercel/output/static --project-name=nextjs-cloudflare-app"
  }
}
```

## 部署步骤

1. **构建项目**：
   ```bash
   npm run pages:build
   ```

2. **本地预览**：
   ```bash
   npm run preview
   ```

3. **部署到 Cloudflare Pages**：
   ```bash
   npm run deploy
   ```

## 部署 URL

项目已成功部署到：https://c2ffefdc.nextjs-cloudflare-app-4o0.pages.dev

## 注意事项

- 确保已安装 `@cloudflare/next-on-pages` 依赖
- Next.js 图片优化已在 `next.config.js` 中禁用以兼容 Cloudflare Pages
- 添加了 `nodejs_compat` 兼容性标志以支持 Node.js 内置模块
