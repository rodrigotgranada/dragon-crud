import { Field } from '@/shared/components/Field'
import { AddHistoryButton } from '../Buttons/AddHistoryButton'
import '@/modules/dragons/styles/components/HistoryField.scss'

interface HistoryFieldProps {
  histories: string[]
  onAdd: () => void
  onRemove: (index: number) => void
  onChange: (index: number, value: string) => void
}

export function HistoryField({
  histories,
  onAdd,
  onRemove,
  onChange
}: HistoryFieldProps) {
  return (
    <div className="history-field">
      <div className="history-field__header">
        <h3>Histórias</h3>
        <AddHistoryButton onClick={onAdd} />
      </div>

      <div className="history-field__list">
        {histories.map((history, index) => (
          <Field
            key={index}
            type="text"
            placeholder='Digite a história'
            value={history}
            onChange={(e) => onChange(index, e.target.value)}
            canRemove
            onRemove={() => onRemove(index)}
            required
          />
        ))}
      </div>
    </div>
  )
} 