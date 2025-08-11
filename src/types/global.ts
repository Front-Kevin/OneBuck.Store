/**
 * 全局类型定义文件
 * 定义项目中通用的 TypeScript 类型
 */

/**
 * 基础响应接口
 */
export interface ApiResponse<T = unknown> {
  readonly success: boolean
  readonly data?: T
  readonly message?: string
  readonly error?: string
}

/**
 * 分页数据接口
 */
export interface PaginatedData<T> {
  readonly items: readonly T[]
  readonly total: number
  readonly page: number
  readonly limit: number
  readonly hasNext: boolean
  readonly hasPrev: boolean
}

/**
 * 用户信息接口
 */
export interface User {
  readonly id: string
  readonly name: string
  readonly email: string
  readonly avatar?: string
  readonly createdAt: string
  readonly updatedAt: string
}

/**
 * 主题配置接口
 */
export interface ThemeConfig {
  readonly primary: string
  readonly secondary: string
  readonly background: string
  readonly text: string
  readonly border: string
}

/**
 * 路由信息接口
 */
export interface RouteInfo {
  readonly path: string
  readonly title: string
  readonly description?: string
  readonly isActive?: boolean
  readonly isProtected?: boolean
}

/**
 * 表单验证错误接口
 */
export interface ValidationError {
  readonly field: string
  readonly message: string
  readonly code?: string
}

/**
 * 环境变量类型
 */
export interface EnvironmentVariables {
  readonly NODE_ENV: 'development' | 'production' | 'test'
  readonly NEXT_PUBLIC_APP_URL: string
  readonly NEXT_PUBLIC_API_URL?: string
}

/**
 * 组件基础属性接口
 */
export interface BaseComponentProps {
  readonly className?: string
  readonly children?: React.ReactNode
  readonly testId?: string
}

/**
 * 加载状态枚举
 */
export enum LoadingState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

/**
 * HTTP 方法枚举
 */
export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

/**
 * 设备类型枚举
 */
export enum DeviceType {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

/**
 * 语言代码类型
 */
export type LanguageCode = 'zh-CN' | 'en-US' | 'ja-JP' | 'ko-KR'

/**
 * 颜色主题类型
 */
export type ColorTheme = 'light' | 'dark' | 'auto'

/**
 * 排序方向类型
 */
export type SortDirection = 'asc' | 'desc'

/**
 * 文件类型
 */
export type FileType = 'image' | 'video' | 'audio' | 'document' | 'other'

/**
 * 事件处理器类型别名
 */
export type EventHandler<T = Event> = (event: T) => void
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>

/**
 * 可选的异步函数类型
 */
export type AsyncFunction<T = void, P extends readonly unknown[] = readonly []> = (...args: P) => Promise<T>

/**
 * 只读深度类型工具
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

/**
 * 非空类型工具
 */
export type NonNullable<T> = T extends null | undefined ? never : T

/**
 * 提取数组元素类型
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never
