import { Button } from '@/shared/components/Button'

interface CancelButtonProps {
  children?: React.ReactNode
  onClick: () => void
}

export function CancelButton({ onClick, children = 'Cancelar' }: CancelButtonProps) {
  return (
    <Button.Outline onClick={onClick} colorType="secondary">
       {children}
    </Button.Outline>
  )
} 