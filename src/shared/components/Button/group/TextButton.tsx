import { ButtonBase } from '../adapter/ButtonBase';
import { TextButtonProps } from '@/shared/types/components/Button';

export function TextButton(props: TextButtonProps) {
  return <ButtonBase {...props} variant="text" />;
} 