import { ReactNode } from 'react'

import { Header } from './Header/Header'
import '../styles/components/dragons-layout.scss';
interface DragonsLayoutProps {
  children: ReactNode
  title?: string
}

export function DragonsLayout({ children, title }: DragonsLayoutProps) {
  return (
    <div className="dragons-layout">
      <Header />
      <main className="dragons-layout__content">
        {title && <h2 className="dragons-layout__title">{title}</h2>}
        {children}
      </main>
    </div>
  )
} 