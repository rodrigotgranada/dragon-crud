import { Button } from '@/shared/components/Button'
import { IconMinus } from '@/shared/components/Icons'

export function RemoveButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button.Outline
      {...props}
      colorType="danger"
      className="remove-button"
    >
      <IconMinus />
    </Button.Outline>
  )
} 