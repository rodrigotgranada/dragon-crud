
import { Dragon } from '../types/dragon';
import { formatDateTime } from '@/shared/utils/dateFormatter';
import '../styles/components/DragonListCard.scss';
import { ViewDragonButton } from './Buttons/ViewDragonButton';
import { EditDragonButton } from './Buttons/EditDragonButton';
import { DeleteDragonButton } from './Buttons/DeleteDragonButton';

interface DragonListCardProps {
  dragon: Dragon;

}

export function DragonListCard({ dragon }: DragonListCardProps) {
  return (
    <div className="dragon-list-card">
      <div className="dragon-list-card__header">
        <div className="dragon-list-card__info">
          <h3 className="dragon-list-card__name">{dragon.name}</h3>
          <p className="dragon-list-card__type">{dragon.type}</p>
          <p className="dragon-list-card__date">
            Criado em {formatDateTime(dragon.createdAt)}
          </p>
        </div>
        <div className="dragon-list-card__actions">
        <ViewDragonButton dragonId={dragon.id} />
          <EditDragonButton dragonId={dragon.id}  />
          <DeleteDragonButton dragon={dragon}
          />
          
        </div>
      </div>
    </div>
  );
} 