import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'solid' | 'outline' | 'text'
export type ButtonColorType = 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: ButtonVariant
  colorType?: ButtonColorType
  size?: ButtonSize
  isLoading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  className?: string
}

export interface SolidButtonProps extends Omit<ButtonBaseProps, 'variant'> {
  children?: ReactNode
}

export interface OutlineButtonProps extends Omit<ButtonBaseProps, 'variant'> {
  children?: ReactNode
}

export interface TextButtonProps extends Omit<ButtonBaseProps, 'variant'> {
  children?: ReactNode
} 