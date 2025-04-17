import { DragonsProvider } from '../provider/DragonsProvider'
import { Routes, Route } from 'react-router-dom'
import { PrivateRoute } from '@/app/PrivateRoute'
import ListPage from '../pages/ListPage'
import CreatePage from '../pages/CreatePage'
import DetailsPage from '../pages/DetailsPage'
import EditPage from '../pages/EditPage'
import { DragonsLayout } from '../components/DragonsLayout'

export function DragonsRoutes() {
  return (
    <DragonsProvider>
      <PrivateRoute>
        <DragonsLayout>
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/:id" element={<DetailsPage />} />
            <Route path="/:id/edit" element={<EditPage />} />
          </Routes>
        </DragonsLayout>
      </PrivateRoute>
    </DragonsProvider>
  )
}