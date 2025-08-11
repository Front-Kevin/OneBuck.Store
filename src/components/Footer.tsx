/**
 * 社交链接的类型定义
 */
interface SocialLink {
  readonly name: string
  readonly href: string
  readonly icon: string
}

/**
 * 页面底部组件
 * @returns 页面底部的 JSX 元素
 */
export function Footer(): JSX.Element {
  // 当前年份
  const currentYear: number = new Date().getFullYear()

  // 社交媒体链接配置
  const socialLinks: readonly SocialLink[] = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: '📱',
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: '🐦',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: '💼',
    },
  ] as const

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Next.js Cloudflare App</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              基于现代化技术栈构建的高性能 Web 应用，
              支持全球快速部署和访问。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`访问我们的 ${link.name}`}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  关于我们
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  服务项目
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* 技术栈 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">技术栈</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Next.js 14</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Cloudflare Pages</li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Next.js Cloudflare App. 保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  )
}
