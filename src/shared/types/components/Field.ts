import { InputHTMLAttributes } from 'react'

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  canRemove?: boolean
  onRemove?: () => void
} 