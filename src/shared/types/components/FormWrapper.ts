import { ReactNode } from 'react'

export interface FormWrapperProps {
  children: ReactNode
  onSubmit: (e: React.FormEvent) => void
  onCancel?: () => void
  title?: string
  cancelText?: string
  saveText?: string
  className?: string
} 