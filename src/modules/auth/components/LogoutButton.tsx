import { Button } from '@/shared/components/Button'
import { useAuth } from '../hooks/useAuth'
import { IconDoor } from '@/shared/components/Icons'

export function LogoutButton() {
  const { logout } = useAuth()

  return (
    <Button.Solid size="sm" onClick={logout} iconLeft={<IconDoor />}>
      Sair
    </Button.Solid>
  )
} 