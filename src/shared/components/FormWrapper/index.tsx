import { FormWrapperProps } from '@/shared/types/components/FormWrapper'

import '@/shared/styles/components/FormWrapper.scss'
import { CancelButton } from '../Button/group/CancelButton'
import { SaveButton } from '../Button/group/SaveButton'

export function FormWrapper({
  children,
  onSubmit,
  onCancel,
  title,
  cancelText = 'Cancelar',
  saveText = 'Salvar',
  className = ''
}: FormWrapperProps) {
  const content = (
    <>
      {title && <h2 className="form-wrapper__title">{title}</h2>}
      
      <div className="form-wrapper__body">
        {children}
      </div>

      <div className="form-wrapper__actions">
        {onCancel && (
          <CancelButton onClick={onCancel}>
            {cancelText}
          </CancelButton>
        )}
        <SaveButton type="submit">
          {saveText}
        </SaveButton>
      </div>
    </>
  )


  return (
    <form onSubmit={onSubmit} className={`form-wrapper ${className}`}>
      {content}
    </form>
  )
} 