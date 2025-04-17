import { Link } from 'react-router-dom'
import { Button } from '@/shared/components/Button'
import { IconPlus } from '@/shared/components/Icons'

export function NewDragonButton() {
  return (
    <Link to="/dragons/create">
      <Button.Solid
        iconLeft={<IconPlus />}
        className="new-dragon-button"
      >
        Novo Dragão
      </Button.Solid>
    </Link>
  )
} 