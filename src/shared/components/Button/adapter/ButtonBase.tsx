import '@/shared/styles/components/Button.scss'
import { ButtonBaseProps } from '@/shared/types/components/Button'

export function ButtonBase({
  children,
  variant = 'solid',
  colorType = 'primary',
  size = 'md',
  isLoading = false,
  className = '',
  disabled,
  iconLeft,
  iconRight,
  type = 'button',
  ...props
}: ButtonBaseProps) {
  const buttonClasses = [
    'button',
    variant,
    colorType,
    size,
    className
  ].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        'Carregando...'
      ) : (
        <>
          {iconLeft && <span className="button__icon button__icon--left">{iconLeft}</span>}
          {children}
          {iconRight && <span className="button__icon button__icon--right">{iconRight}</span>}
        </>
      )}
    </button>
  )
} 