import { useState, ReactNode, useCallback } from 'react'
import { DragonsContext } from '../context/DragonsContext'
import * as dragonsService from '../services/dragonsService'
import { Dragon } from '../types/dragon'

export const DragonsProvider = ({ children }: { children: ReactNode }) => {
  const [dragons, setDragons] = useState<Dragon[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchDragons = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await dragonsService.fetchDragons()
      const sortedDragons = data.sort((a, b) => a.name.localeCompare(b.name))
      setDragons(sortedDragons)
    } catch {
      setError('Erro ao carregar dragões')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const createDragon = async (dragon: Omit<Dragon, 'id' | 'createdAt'>) => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await dragonsService.createDragon(dragon)
      setDragons(prev => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)))
    } catch {
      setError('Erro ao criar dragão')
    } finally {
      setIsLoading(false)
    }
  }

  const updateDragon = async (id: string, dragon: Partial<Dragon>) => {
    try {
      setIsLoading(true)
      setError(null)
      const data = await dragonsService.updateDragon(id, dragon)
      setDragons(prev => prev.map(d => d.id === id ? data : d).sort((a, b) => a.name.localeCompare(b.name)))
    } catch {
      setError('Erro ao atualizar dragão')
    } finally {
      setIsLoading(false)
    }
  }

  const deleteDragon = async (id: string) => {
    try {
      setIsLoading(true)
      setError(null)
      await dragonsService.deleteDragon(id)
      setDragons(prev => prev.filter(d => d.id !== id).sort((a, b) => a.name.localeCompare(b.name)))
    } catch {
      setError('Erro ao deletar dragão')
    } finally {
      setIsLoading(false)
    }
  }

  const getDragon = useCallback((id: string) => {
    return dragons.find(dragon => dragon.id === id)
  }, [dragons])

  const value = {
    dragons,
    isLoading,
    error,
    fetchDragons,
    createDragon,
    updateDragon,
    deleteDragon,
    getDragon
  }

  return (
    <DragonsContext.Provider
      value={value}
    >
      {children}
    </DragonsContext.Provider>
  )
} 