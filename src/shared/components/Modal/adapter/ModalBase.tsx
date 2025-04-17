import { ReactNode } from 'react'
import { Button } from '../../Button'
import { CancelButton } from '../../Button/group/CancelButton'
import '@/shared/styles/components/Modal/Modal.scss'

interface ModalBaseProps {
  isOpen: boolean
  children: ReactNode
  className?: string
  title?: string
  onClose: () => void
  onConfirm?: () => void
  onCancel?: () => void
  confirmText?: string
  cancelText?: string
}

export function ModalBase({ 
  isOpen, 
  children, 
  className = '',
  title,
  onClose,
  onConfirm,
  onCancel,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar'
}: ModalBaseProps) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className={`modal-content ${className}`}>
      
        <div className="modal-content__header">
          {title && <h2 className="modal-content__title">{title}</h2>}
          <button 
            type="button" 
            className="modal-content__close" 
            onClick={onClose}
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        
        <div className="modal-content__body">
          {children}
        </div>

      
        {(onCancel || onConfirm) && (
          <div className="modal-content__footer">
            {onCancel && (
              <CancelButton onClick={onCancel}>
                {cancelText}
              </CancelButton>
            )}
            {onConfirm && (
              <Button.Solid onClick={onConfirm}>
                {confirmText}
              </Button.Solid>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 