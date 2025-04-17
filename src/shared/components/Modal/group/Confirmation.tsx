import { ModalBase } from '../adapter/ModalBase'
import '@/shared/styles/components/Modal/Alert.scss'

export interface ConfirmationModalProps {
  isOpen: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
  confirmText?: string
  cancelText?: string
}

export function Confirmation({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar'
}: ConfirmationModalProps) {
  return (
    <ModalBase 
      isOpen={isOpen} 
      className="modal-alert"
      title={title}
      onClose={onCancel}
      onConfirm={onConfirm}
      onCancel={onCancel}
      confirmText={confirmText}
      cancelText={cancelText}
    >
      <p className="modal-alert__message">{message}</p>
    </ModalBase>
  )
} 