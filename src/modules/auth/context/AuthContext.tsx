import { createContext } from 'react'
import { AuthContextType } from '../types/authContext'


export const AuthContext = createContext<AuthContextType>({} as AuthContextType) 