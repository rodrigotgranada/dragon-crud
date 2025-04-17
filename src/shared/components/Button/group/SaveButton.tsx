import { Button } from '@/shared/components/Button'

interface SaveButtonProps {
  onClick?: () => void
  isLoading?: boolean
  type?: 'button' | 'submit'
  children?: React.ReactNode
}

export function SaveButton({ onClick, isLoading = false, type = 'submit', children = 'Salvar' }: SaveButtonProps) {
  return (
    <Button.Solid onClick={onClick} isLoading={isLoading} type={type}>
      {children}
    </Button.Solid>
  )
} 