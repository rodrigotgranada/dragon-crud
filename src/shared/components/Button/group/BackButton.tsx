import { Button } from '@/shared/components/Button'
import { useNavigate } from 'react-router-dom'
import { IconArrowLeft } from '../../Icons'

interface BackButtonProps {
  showLabel?: boolean
  to?: string
}

export function BackButton({ showLabel = false, to }: BackButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (to) {
      navigate(to)
    } else {
      navigate(-1)
    }
  }

  return (
    <>
      {showLabel ? (
        <Button.Outline
          onClick={handleClick}
          iconLeft={<IconArrowLeft />}
          colorType="secondary"
        >
          Voltar
        </Button.Outline>
      ) : (
        <Button.Text
          onClick={handleClick}
          iconLeft={<IconArrowLeft />}
          colorType="secondary"
        />
      )}
    </>
  )
} 