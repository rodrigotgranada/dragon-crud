import { ButtonBase } from '../adapter/ButtonBase'
import { SolidButtonProps } from '@/shared/types/components/Button'

export function SolidButton(props: SolidButtonProps) {
  return <ButtonBase {...props} variant="solid" />
} 