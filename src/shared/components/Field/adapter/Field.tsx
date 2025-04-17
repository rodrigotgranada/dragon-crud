import { FieldProps } from '@/shared/types/components/Field'
import { RemoveButton } from '@/shared/components/Button/group/RemoveButton'
import '@/shared/styles/components/Field.scss'

export const Field = ({ label, canRemove, onRemove, ...props }: FieldProps) => {
  return (
    <div className="field">
      {label && <label className="field__label">{label}</label>}
      <div className="field__input-wrapper">
        <input className="field__input" {...props} />
        {canRemove && (
          <RemoveButton
            onClick={onRemove}
            type="button"
            aria-label="Remover campo"
          />
        )}
      </div>
    </div>
  )
} 