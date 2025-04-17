import { DragonHistoriesProps } from '../../types/Details'
import '@/modules/dragons/styles/components/Details.scss'

export function DragonHistories({ histories }: DragonHistoriesProps) {
  return (
    <div className="dragon-histories">
      <h3 className="dragon-histories__title">Histórias</h3>
      {histories.length > 0 ? (
        <ul className="dragon-histories__list">
          {histories.map((history, index) => (
            <li key={index} className="dragon-histories__item">
              {history}
            </li>
          ))}
        </ul>
      ) : (
        <p className="dragon-histories__empty">
          Este dragão não possui histórias registradas.
        </p>
      )}
    </div>
  )
} 