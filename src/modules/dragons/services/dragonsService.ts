import { Dragon } from '../types'
import api from '@/shared/services/api'
import { getCurrentDateTimeISO } from '@/shared/utils/dateFormatter'

export async function fetchDragons() {
  const { data } = await api.get<Dragon[]>('/dragon')
  return data
}

export async function createDragon(dragon: Omit<Dragon, 'id' | 'createdAt'>) {
  const newDragon = {
    ...dragon,
    createdAt: getCurrentDateTimeISO()
  }
  const { data } = await api.post<Dragon>('/dragon', newDragon)
  return data
}

export async function updateDragon(id: string, dragon: Partial<Dragon>) {
  const { data } = await api.put<Dragon>(`/dragon/${id}`, dragon)
  return data
}

export async function deleteDragon(id: string) {
  await api.delete(`/dragon/${id}`)
} 