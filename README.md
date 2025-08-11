# Next.js Cloudflare App

基于 Next.js 14 和 TypeScript 构建的现代化 Web 应用，专为 Cloudflare Pages 部署优化。

## ✨ 特性

- 🔧 **严格的 TypeScript**: 100% 类型覆盖，禁用 `any` 类型
- ⚡ **Next.js 14**: 最新的 React 框架特性
- ☁️ **Cloudflare Pages**: 全球 CDN 和边缘计算
- 🎨 **Tailwind CSS**: 现代化的 CSS 框架
- 📱 **响应式设计**: 适配所有设备尺寸
- 🚀 **性能优化**: 针对速度和 SEO 优化

## 🛠️ 技术栈

- **前端框架**: Next.js 14
- **编程语言**: TypeScript (严格模式)
- **样式框架**: Tailwind CSS
- **部署平台**: Cloudflare Pages
- **包管理器**: npm
- **代码质量**: ESLint + 严格的 TypeScript 配置

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 3. 构建项目

```bash
npm run build
```

### 4. 部署到 Cloudflare Pages

#### 方法一：使用 Wrangler CLI

```bash
# 安装 Wrangler（如果还没安装）
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建并部署
npm run deploy
```

#### 方法二：连接 Git 仓库

1. 将代码推送到 GitHub 仓库
2. 在 Cloudflare Dashboard 中创建 Pages 项目
3. 连接 GitHub 仓库
4. 设置构建命令：`npm run pages:build`
5. 设置输出目录：`.vercel/output/static`

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Header.tsx         # 头部导航
│   ├── MainContent.tsx    # 主要内容
│   └── Footer.tsx         # 页面底部
└── types/                 # TypeScript 类型定义
```

## ⚙️ 配置说明

### TypeScript 配置

项目使用严格的 TypeScript 配置：

- `noImplicitAny: true` - 禁止隐式 any 类型
- `noUnusedLocals: true` - 禁止未使用的局部变量
- `noUnusedParameters: true` - 禁止未使用的参数
- `exactOptionalPropertyTypes: true` - 严格的可选属性类型
- `noUncheckedIndexedAccess: true` - 检查索引访问

### Next.js 配置

为 Cloudflare Pages 优化的配置：

- `output: 'export'` - 静态导出
- `images.unoptimized: true` - 禁用图片优化
- 边缘运行时支持

## 🔧 开发命令

- `npm run dev` - 启动开发服务器
- `npm run build` - 构建生产版本
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查
- `npm run type-check` - 运行 TypeScript 类型检查
- `npm run pages:build` - 构建 Cloudflare Pages 版本
- `npm run preview` - 本地预览 Cloudflare Pages 版本
- `npm run deploy` - 部署到 Cloudflare Pages

## 📝 代码规范

### TypeScript 规范

1. 所有函数必须明确返回类型
2. 禁止使用 `any` 类型
3. 所有变量必须被使用
4. 使用 `interface` 定义对象类型
5. 使用 `readonly` 修饰符保护数据

### React 组件规范

1. 函数组件使用箭头函数或函数声明
2. Props 使用 `interface` 定义类型
3. 组件必须有 JSDoc 注释
4. 使用 `const assertions` 保护配置数据

### 样式规范

1. 优先使用 Tailwind CSS 类名
2. 自定义样式放在 `globals.css`
3. 使用 CSS 变量定义主题色彩
4. 响应式设计优先

## 🚀 部署注意事项

### Cloudflare Pages 限制

- 最大文件大小：25MB
- 最大函数大小：1MB
- 最大请求时间：30秒
- 支持的 Node.js 版本：18.x+

### 环境变量

在 Cloudflare Pages 设置中配置环境变量：

- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL=https://your-app.pages.dev`

## 🤝 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
