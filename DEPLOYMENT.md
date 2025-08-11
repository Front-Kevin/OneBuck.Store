# Cloudflare Pages 部署指南

本指南将帮助您将 Next.js 应用部署到 Cloudflare Pages。

## 🚀 部署方法

### 方法一：使用 Wrangler CLI（推荐）

#### 1. 安装 Wrangler

```bash
npm install -g wrangler
```

#### 2. 登录 Cloudflare

```bash
wrangler login
```

#### 3. 获取 Account ID

访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)，在右侧边栏找到您的 Account ID。

#### 4. 配置 wrangler.toml

编辑 `wrangler.toml` 文件，填入您的 Account ID：

```toml
name = "nextjs-cloudflare-app"
account_id = "YOUR_ACCOUNT_ID_HERE"  # 替换为您的实际 Account ID
```

#### 5. 构建并部署

```bash
# 安装依赖
npm install

# 构建项目
npm run pages:build

# 部署到 Cloudflare Pages
npm run deploy
```

### 方法二：GitHub 集成部署

#### 1. 推送代码到 GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### 2. 连接 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 Pages 部分
3. 点击 "Create a project"
4. 选择 "Connect to Git"
5. 授权并选择您的 GitHub 仓库

#### 3. 配置构建设置

在 Cloudflare Pages 设置中配置：

- **Framework preset**: Next.js
- **Build command**: `npm run pages:build`
- **Build output directory**: `.vercel/output/static`
- **Root directory**: `/` (如果项目在根目录)
- **Node.js version**: `18.17.0` 或更新版本

#### 4. 设置环境变量

在 Cloudflare Pages 项目设置中添加环境变量：

- `NODE_ENV`: `production`
- `NEXT_PUBLIC_APP_URL`: `https://your-project.pages.dev`
- 其他必要的环境变量

## ⚙️ 构建配置说明

### package.json 脚本

- `pages:build`: 使用 `@cloudflare/next-on-pages` 构建适用于 Cloudflare 的版本
- `preview`: 本地预览 Cloudflare Pages 版本
- `deploy`: 构建并部署到 Cloudflare Pages

### next.config.js 关键配置

```javascript
const nextConfig = {
  // 启用静态导出
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // 禁用图片优化（Cloudflare Pages 不支持）
  images: {
    unoptimized: true,
  },
  
  // 实验性边缘运行时
  experimental: {
    runtime: 'experimental-edge',
  },
}
```

## 🔧 常见问题解决

### 1. 构建失败

**问题**: 构建过程中出现 TypeScript 错误

**解决**: 
```bash
# 检查类型错误
npm run type-check

# 修复后重新构建
npm run pages:build
```

### 2. 图片无法显示

**问题**: 部署后图片无法正常显示

**解决**: 确保 `next.config.js` 中设置了 `images.unoptimized: true`

### 3. 路由问题

**问题**: 客户端路由在部署后不工作

**解决**: 
1. 确保设置了 `trailingSlash: true`
2. 检查 Cloudflare Pages 的重定向规则

### 4. 环境变量不生效

**问题**: 环境变量在生产环境中未生效

**解决**: 
1. 确保变量名以 `NEXT_PUBLIC_` 开头（客户端变量）
2. 在 Cloudflare Pages 设置中正确配置环境变量

### 5. 函数超时

**问题**: API 路由或服务器组件执行超时

**解决**: 
1. Cloudflare Pages Functions 有 30 秒执行时间限制
2. 优化代码以减少执行时间
3. 考虑使用 Cloudflare Workers 处理复杂逻辑

## 📊 性能优化建议

### 1. 代码分割

```javascript
// 使用动态导入
const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### 2. 静态资源优化

- 使用 WebP 格式图片
- 启用 Cloudflare 的自动优化功能
- 配置适当的缓存策略

### 3. 预加载关键资源

```html
<link rel="preload" href="/fonts/important-font.woff2" as="font" type="font/woff2" crossorigin />
```

## 🔍 监控和调试

### 1. Cloudflare Analytics

在 Cloudflare Dashboard 中查看：
- 页面加载性能
- 访问者分析
- 错误统计

### 2. Real User Monitoring (RUM)

```javascript
// 在 _app.tsx 中添加性能监控
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals'

function sendToAnalytics(metric) {
  // 发送性能数据到分析服务
}

getCLS(sendToAnalytics)
getFID(sendToAnalytics)
getFCP(sendToAnalytics)
getLCP(sendToAnalytics)
getTTFB(sendToAnalytics)
```

### 3. 错误监控

使用 Cloudflare 的日志记录功能或集成第三方错误监控服务。

## 🚀 自动化部署

### GitHub Actions 示例

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run pages:build
        
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: nextjs-cloudflare-app
          directory: .vercel/output/static
```

## 📞 获取帮助

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/)
- [Cloudflare Community](https://community.cloudflare.com/)

---

部署成功后，您的应用将可以通过 `https://your-project.pages.dev` 访问。
