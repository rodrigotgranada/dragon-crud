import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/modules/auth/hooks/useAuth'
import { Button } from '@/shared/components/Button'
import { IconUser } from '@/shared/components/Icons'
import '../../styles/components/Header/user-menu.scss';

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div ref={dropdownRef} className="user-menu">
      <Button.Solid
        onClick={() => setIsOpen(!isOpen)}
        className="user-menu__trigger"
      >
       
        <IconUser />
      </Button.Solid>

      {isOpen && (
        <div className="user-menu__dropdown">
          <div className="user-menu__info">
            <p>{user?.name}</p>
            <p>{user?.email}</p>
          </div>
          <Button.Outline
            onClick={handleLogout}
            className="user-menu__logout"
          >
            Sair
          </Button.Outline>
        </div>
      )}
    </div>
  )
} 