import { useContext } from 'react'
import { DragonsContext } from '../context/DragonsContext'


export const useDragons = () => {
  const context = useContext(DragonsContext)
  if (!context) {
    throw new Error('useDragons must be used within a DragonsProvider')
  }
  return context
} 