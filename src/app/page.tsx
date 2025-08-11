import { Header } from '@/components/Header'
import { MainContent } from '@/components/MainContent'
import { Footer } from '@/components/Footer'

/**
 * 应用主页组件
 * @returns 主页的 JSX 元素
 */
export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <MainContent />
      <Footer />
    </main>
  )
}
