import { Button } from '@/shared/components/Button'
import { IconEdit } from '@/shared/components/Icons'
import { useNavigate } from 'react-router-dom'
import '../../styles/components/Buttons/edit-dragon-button.scss';

interface EditDragonButtonProps {
  dragonId: string
  showLabel?: boolean
}

export function EditDragonButton({ dragonId, showLabel = false }: EditDragonButtonProps) {
  const navigate = useNavigate()

  return (
    <>
      {showLabel ? (
        <Button.Outline
          onClick={() => navigate(`/dragons/${dragonId}/edit`)}
          iconLeft={<IconEdit />}
          colorType='warning'
          className='TESTE'
        >
          Editar
        </Button.Outline>
      ) : (
        <Button.Text
          onClick={() => navigate(`/dragons/${dragonId}/edit`)}
          iconLeft={<IconEdit />}
          colorType='warning'
        />
      )}
    </>
  )
} 