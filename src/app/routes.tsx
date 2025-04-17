import { Routes, Route } from 'react-router-dom'
import LoginPage from '@/modules/auth/pages/LoginPage'
import { DragonsRoutes } from '@/modules/dragons/routes/DragonsRoutes'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dragons/*" element={<DragonsRoutes />} />
      <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
    </Routes>
  )
}
