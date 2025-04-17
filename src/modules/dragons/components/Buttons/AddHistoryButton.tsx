import { Button } from '@/shared/components/Button'
import { IconPlus } from '@/shared/components/Icons/index.tsx'

interface AddHistoryButtonProps {
  onClick: () => void
}

export function AddHistoryButton({ onClick }: AddHistoryButtonProps) {
  return (
    <Button.Outline onClick={onClick} iconLeft={<IconPlus />}>
      Adicionar História
    </Button.Outline>
  )
} 