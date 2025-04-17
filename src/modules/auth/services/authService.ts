import { User } from '../types/user'
import api from '@/shared/services/api'

const AUTH_API_URL = import.meta.env.VITE_AUTH_API_URL

export async function login(email: string, password: string) {
  const { data } = await api.get<User[]>(`${AUTH_API_URL}/users?email=${email}&password=${password}`)
  if (data.length > 0) {
    const token = 'fake-jwt-token'
    const user = data[0]
    
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    
    return {
      token,
      user
    }
  } else {
    throw new Error('Usuário ou senha inválidos')
  }
}

interface RegisterData {
  name: string
  email: string
  password: string
}

export async function register({ name, email, password }: RegisterData) {
  const { data: existingUsers } = await api.get<User[]>(`${AUTH_API_URL}/users?email=${email}`)
  
  if (existingUsers.length > 0) {
    throw new Error('Este email já está em uso')
  }

  const { data: newUser } = await api.post<User>(`${AUTH_API_URL}/users`, {
    name,
    email,
    password
  })
  const token = 'fake-jwt-token'
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`

  return {
    token,
    user: newUser
  }
}