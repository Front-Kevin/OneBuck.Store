# Next.js App

基于 Next.js 14 和 TypeScript 构建的现代化 Web 应用。

## ✨ 特性

- 🚀 **Next.js 14**: 最新版本的 React 框架
- 📝 **TypeScript**: 严格类型检查，提高代码质量
- 🎨 **Tailwind CSS**: 实用优先的 CSS 框架
- 🔧 **严格配置**: ESLint + TypeScript 严格模式
- 📱 **响应式设计**: 移动端友好的界面设计
- ⚡ **高性能**: 优化的构建配置和性能

## 🛠 技术栈

- **前端框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **代码规范**: ESLint + Prettier
- **包管理**: pnpm

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd nextjs-app
```

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

应用将在 `http://localhost:3000` 启动。

### 4. 构建生产版本

```bash
pnpm build
pnpm start
```

## 📝 可用脚本

- `pnpm dev` - 启动开发服务器
- `pnpm build` - 构建生产版本
- `pnpm start` - 启动生产服务器
- `pnpm lint` - 运行 ESLint 检查
- `pnpm type-check` - 运行 TypeScript 类型检查

## 📁 项目结构

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 根布局组件
│   │   ├── page.tsx           # 首页组件
│   │   └── globals.css        # 全局样式
│   ├── components/
│   │   ├── Header.tsx         # 头部组件
│   │   ├── Footer.tsx         # 底部组件
│   │   └── MainContent.tsx    # 主要内容组件
│   └── types/
│       └── global.ts          # 全局类型定义
├── next.config.js             # Next.js 配置
├── tailwind.config.js         # Tailwind 配置
├── tsconfig.json             # TypeScript 配置
└── package.json              # 项目依赖
```

## ⚙️ 配置文件

### Next.js 配置

配置文件包含：

- TypeScript 严格模式
- ESLint 配置
- 环境变量处理

### TypeScript 配置

- 严格模式启用
- 路径别名支持
- 现代 ES 特性支持

### Tailwind CSS

- 完整的实用类系统
- 响应式设计支持
- 自定义主题配置

## 🌍 环境变量

复制 `env.template` 为 `.env.local` 并根据需要修改：

```bash
cp env.template .env.local
```

## 📦 部署

该项目可以部署到任何支持 Next.js 的平台：

- Vercel (推荐)
- Netlify
- 任何支持 Node.js 的服务器

### Vercel 部署

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

## 🧪 开发指南

### 代码规范

- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 组件使用函数式写法
- 严格的类型定义

### 组件开发

- 所有组件使用 TypeScript
- 使用 `interface` 定义 props 类型
- 导出时使用 `export default`

### 样式指南

- 使用 Tailwind CSS 实用类
- 响应式设计优先
- 语义化的 CSS 类名

## 🤝 贡献

欢迎提交 Issue 和 Pull Request。

## 📄 许可证

MIT License