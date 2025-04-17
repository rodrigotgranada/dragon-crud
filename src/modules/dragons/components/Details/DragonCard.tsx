import { DragonDetailsProps } from '../../types/Details'
import { DragonInfoField } from './DragonInfoField'
import { DragonHistories } from './DragonHistories'
import { EditDragonButton } from '../Buttons/EditDragonButton'
import { DeleteDragonButton } from '../Buttons/DeleteDragonButton'
import { BackButton } from '@/shared/components/Button/group/BackButton'
import '@/modules/dragons/styles/components/Details.scss'
import { formatDateTime } from '@/shared/utils/dateFormatter'

export function DragonCard({ dragon }: DragonDetailsProps) {
  return (
    <div className="dragon-card">
      <div className="dragon-card__header">
        <h2 className="dragon-card__title">{dragon.name}</h2>
        <div className="dragon-card__actions">
          <EditDragonButton dragonId={dragon.id} showLabel />
          <DeleteDragonButton dragon={dragon} showLabel />
        </div>
      </div>

      <div className="dragon-card__content">
        <DragonInfoField label="Tipo" value={dragon.type} />
        <DragonInfoField
          label="Data de Criação"
          value={formatDateTime(dragon.createdAt)}
        />
        <DragonHistories histories={dragon.histories || []} />
      </div>

      <div className="dragon-card__footer">
        <BackButton showLabel />
      </div>
    </div>
  )
} 