import { ReactNode } from 'react'

export interface Column<T> {
  key: string
  title: string
  render: (item: T) => ReactNode
  width?: string
  align?: 'left' | 'center' | 'right'
}

export interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
  emptyMessage?: string
  className?: string
} 