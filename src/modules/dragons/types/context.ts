import { Dragon } from './dragon'

export interface DragonsContextType {
  dragons: Dragon[]
  isLoading: boolean
  error: string | null
  fetchDragons: () => Promise<void>
  createDragon: (dragon: Omit<Dragon, 'id' | 'createdAt'>) => Promise<void>
  updateDragon: (id: string, dragon: Partial<Dragon>) => Promise<void>
  deleteDragon: (id: string) => Promise<void>
  getDragon: (id: string) => Promise<Dragon | undefined>
} 