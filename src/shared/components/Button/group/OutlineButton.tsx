import { ButtonBase } from '../adapter/ButtonBase'
import { OutlineButtonProps } from '@/shared/types/components/Button'

export function OutlineButton(props: OutlineButtonProps) { 
  return <ButtonBase {...props} variant="outline" />
} 