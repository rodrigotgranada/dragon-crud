import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { FormWrapper } from '@/shared/components/FormWrapper'
import { Field } from '@/shared/components/Field'
import { RegisterButton } from '../components/Buttons/RegisterButton'
import '@/modules/auth/styles/pages/LoginPage.scss'

import { Modal } from '@/shared/components/Modal'

export default function LoginPage() {
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [alertModal, setAlertModal] = useState({
    isOpen: false,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const email = form.email.value
    const password = form.password.value

    try {
      setIsLoading(true)
      await login(email, password)
    } catch {
      setAlertModal({
        isOpen: true,
        message: 'Usuário ou senha inválidos'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-page__content">
        <FormWrapper 
          title="Login" 
          onSubmit={handleSubmit}
          saveText="Entrar"
        >
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
            autoComplete="current-password"
            disabled={isLoading}/>
        </FormWrapper>

        <div className="login-page__register">
          <RegisterButton isLoading={isLoading} />
        </div>
      </div>

      <Modal.Alert
        isOpen={alertModal.isOpen}
        title="Erro no Login"
        message={alertModal.message}
        onClose={() => setAlertModal({ isOpen: false, message: '' })}
      />
    </div>
  )
}
