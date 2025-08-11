'use client'

import { useState } from 'react'

/**
 * 功能卡片的类型定义
 */
interface FeatureCard {
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly color: string
}

/**
 * 主要内容组件
 * @returns 主要内容区域的 JSX 元素
 */
export function MainContent(): JSX.Element {
  const [clickCount, setClickCount] = useState<number>(0)

  // 功能卡片配置
  const features: readonly FeatureCard[] = [
    {
      title: 'TypeScript',
      description: '严格的类型检查，提供更好的开发体验和代码质量',
      icon: '🔧',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'Next.js',
      description: '现代化的 React 框架，支持服务端渲染和静态生成',
      icon: '⚡',
      color: 'bg-green-50 border-green-200',
    },
    {
      title: 'Next.js',
      description: '全球 CDN 和边缘计算平台，快速部署和访问',
      icon: '☁️',
      color: 'bg-purple-50 border-purple-200',
    },
  ] as const

  /**
   * 处理按钮点击事件
   */
  const handleButtonClick = (): void => {
    setClickCount(prevCount => prevCount + 1)
  }

  return (
    <div className="flex-1 bg-gray-50">
      <div className="container py-12">
        {/* 英雄区域 */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            欢迎使用 Next.js 应用
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            这是一个基于 Next.js 和 TypeScript 构建的现代化 Web 应用，
            使用现代化的技术栈构建。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="btn-primary"
              onClick={handleButtonClick}
            >
              点击测试 ({clickCount})
            </button>
            <button type="button" className="btn-secondary">
              了解更多
            </button>
          </div>
        </section>

        {/* 功能特性区域 */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            项目特性
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`p-6 rounded-lg border-2 ${feature.color} transition-transform duration-200 hover:scale-105`}
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 统计信息区域 */}
        <section className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            项目统计
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">100%</div>
              <div className="text-gray-600">TypeScript 覆盖</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{clickCount}</div>
              <div className="text-gray-600">按钮点击次数</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">0</div>
              <div className="text-gray-600">运行时错误</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
