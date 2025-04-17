import { Button } from '@/shared/components/Button'
import { IconEye } from '@/shared/components/Icons'
import { useNavigate } from 'react-router-dom'
import '../../styles/components/Buttons/view-dragon-button.scss';

interface ViewDragonButtonProps {
  dragonId: string
}

export function ViewDragonButton({ dragonId }: ViewDragonButtonProps) {
  const navigate = useNavigate()

  return (
    <Button.Text
      onClick={() => navigate(`/dragons/${dragonId}`)}
      iconLeft={<IconEye />}
      className="view-dragon-button"
      title="Ver detalhes"
      colorType='secondary'
    />
  )
} 