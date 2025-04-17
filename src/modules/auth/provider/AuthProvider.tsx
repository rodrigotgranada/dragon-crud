import { useEffect, useState, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { login as loginService, register as registerService } from '../services/authService'
import Cookies from 'js-cookie'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { User } from '../types/user'

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = Cookies.get('token')
    const userCookie = Cookies.get('user')

    if (token && userCookie) {
      const userData = JSON.parse(userCookie)
      setUser(userData)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    const { token, user } = await loginService(email, password)

    Cookies.set('token', token, { expires: 7 })
    Cookies.set('user', JSON.stringify(user), { expires: 7 })

    setUser(user)
    navigate('/dragons')
  }

  const register = async (name: string, email: string, password: string) => {
    const { token, user } = await registerService({ name, email, password })

    Cookies.set('token', token, { expires: 7 })
    Cookies.set('user', JSON.stringify(user), { expires: 7 })

    setUser(user)
    navigate('/dragons')
  }

  const logout = () => {
    Cookies.remove('token', { path: '/' })
    Cookies.remove('user', { path: '/' })
    
    delete axios.defaults.headers.common['Authorization']
    
    setUser(null)
    
    navigate('/')
  }

  if (isLoading) {
    return <div>Carregando...</div>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
} 