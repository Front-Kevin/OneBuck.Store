'use client'

import { useState } from 'react'

/**
 * 导航菜单项的类型定义
 */
interface NavigationItem {
  readonly label: string
  readonly href: string
  readonly isActive?: boolean
}

/**
 * 页面头部组件
 * @returns 头部导航的 JSX 元素
 */
export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // 导航菜单项配置
  const navigationItems: readonly NavigationItem[] = [
    { label: '首页', href: '/', isActive: true },
    { label: '关于', href: '/about' },
    { label: '服务', href: '/services' },
    { label: '联系', href: '/contact' },
  ] as const

  /**
   * 切换移动端菜单显示状态
   */
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo 区域 */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-900">
              NextJS App
            </h1>
          </div>

          {/* 桌面端导航菜单 */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      item.isActive
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 移动端菜单按钮 */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="打开主菜单"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    item.isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
