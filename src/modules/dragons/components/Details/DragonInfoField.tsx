import { DragonInfoFieldProps } from '../../types/Details'
import '@/modules/dragons/styles/components/Details.scss'

export function DragonInfoField({ label, value }: DragonInfoFieldProps) {
  return (
    <div className="dragon-info-field">
      <h3 className="dragon-info-field__label">{label}</h3>
      <p className="dragon-info-field__value">{value}</p>
    </div>
  )
} 