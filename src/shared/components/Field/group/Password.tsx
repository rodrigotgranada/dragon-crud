import { useState } from 'react'
import { Field } from '../adapter/Field'
import { IconEye, IconEyeOff } from '@/shared/components/Icons'
import '@/shared/styles/components/Field/Password.scss'

type PasswordFieldProps = Omit<React.ComponentProps<typeof Field>, 'type'>

export const Password = ({ ...props }: PasswordFieldProps) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="field__password">
      <Field
        type={isVisible ? 'text' : 'password'}
        {...props}
      />
      <button
        type="button"
        onClick={() => setIsVisible(!isVisible)}
        aria-label={isVisible ? 'Ocultar senha' : 'Mostrar senha'}
      >
        {isVisible ? <IconEyeOff /> : <IconEye />}
      </button>
    </div>
  )
} 