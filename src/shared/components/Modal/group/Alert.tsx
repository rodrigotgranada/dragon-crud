import { ModalBase } from '../adapter/ModalBase'
import '@/shared/styles/components/Modal/Alert.scss'

export interface AlertModalProps {
  isOpen: boolean
  title: string
  message: string
  onClose: () => void
}

export function Alert({ isOpen, title, message, onClose }: AlertModalProps) {
  return (
    <ModalBase 
      isOpen={isOpen} 
      className="modal-alert"
      title={title}
      onClose={onClose}
      onConfirm={onClose}
      confirmText="OK"
    >
      <p className="modal-alert__message">{message}</p>
    </ModalBase>
  )
} 