import { AuthProvider } from '@/modules/auth/provider/AuthProvider'
import { BrowserRouter } from 'react-router-dom'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <BrowserRouter>
      <AuthProvider>
        {children}
      </AuthProvider>
    </BrowserRouter>
  )
}
