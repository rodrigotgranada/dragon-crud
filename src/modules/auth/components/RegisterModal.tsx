import { Field } from '@/shared/components/Field'
import { FormWrapper } from '@/shared/components/FormWrapper'

import { ModalBase } from '@/shared/components/Modal/adapter/ModalBase'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (data: { name: string; email: string; password: string }) => Promise<void>
  isLoading?: boolean
}

export function RegisterModal({ isOpen, onClose, onConfirm, isLoading }: RegisterModalProps) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formElements = form.elements as HTMLFormControlsCollection & {
      name: HTMLInputElement
      email: HTMLInputElement
      password: HTMLInputElement
    }
    
    await onConfirm({
      name: formElements.name.value,
      email: formElements.email.value,
      password: formElements.password.value
    })
  }

  return (
    <ModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="Criar Conta"
    >
      <FormWrapper 
        onSubmit={handleSubmit}
        onCancel={onClose}
        saveText="Registrar"
        cancelText="Cancelar"
        className='register-modal'
      >
        <Field
          name="name"
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          required
          disabled={isLoading}
        />

        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="Digite seu email"
          required
          autoComplete="email"
          disabled={isLoading}
        />
        <Field.Password  
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
          required
          autoComplete="new-password"
          disabled={isLoading}
        />
      </FormWrapper>
    </ModalBase>
  )
} 