import type { Metadata, Viewport } from 'next'
import './globals.css'

// 定义严格的元数据类型
export const metadata: Metadata = {
  title: 'Next.js App',
  description: '基于 Next.js 和 TypeScript 构建的现代化 Web 应用',
  keywords: ['Next.js', 'TypeScript', 'React'],
  authors: [{ name: 'Developer' }],
}

// 定义视口配置
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

// 根布局组件的属性类型定义
interface RootLayoutProps {
  readonly children: React.ReactNode
}

/**
 * 应用根布局组件
 * @param props - 包含子组件的属性对象
 * @returns JSX 元素
 */
export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
