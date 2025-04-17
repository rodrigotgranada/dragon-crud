import { useState } from 'react'
import { Button } from '@/shared/components/Button'
import { RegisterModal } from '../RegisterModal'
import { useAuth } from '../../hooks/useAuth'
import { Modal } from '@/shared/components/Modal'

interface RegisterButtonProps {
  isLoading?: boolean
}

export function RegisterButton({ isLoading }: RegisterButtonProps) {
  const { register } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [alertModal, setAlertModal] = useState({
    isOpen: false,
    message: ''
  })

  const handleRegister = async (data: { name: string; email: string; password: string }) => {
    try {
      await register(data.name, data.email, data.password)
      setIsModalOpen(false)
    } catch (error) {
      if (error instanceof Error) {
        setAlertModal({
          isOpen: true,
          message: error.message
        })
      } else {
        setAlertModal({
          isOpen: true,
          message: 'Erro ao criar conta'
        })
      }
    }
  }

  return (
    <>
      <Button.Text
        type="button"
        onClick={() => setIsModalOpen(true)}
        disabled={isLoading}
      >
        Criar uma conta
      </Button.Text>

      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleRegister}
        isLoading={isLoading}
      />

      <Modal.Alert
        isOpen={alertModal.isOpen}
        title="Erro no Registro"
        message={alertModal.message}
        onClose={() => setAlertModal({ isOpen: false, message: '' })}
      />
    </>
  )
} 