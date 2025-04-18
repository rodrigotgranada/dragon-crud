import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDragons } from '../hooks/useDragons'
import { Dragon } from '../types/dragon'
import { DragonCard } from '../components/Details/DragonCard'
import '@/modules/dragons/styles/pages/DetailsPage.scss'

export default function DetailsPage() {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const { getDragon } = useDragons()
  const [dragon, setDragon] = useState<Dragon | null>(null)

  useEffect(() => {
    async function fetchDragon() {
      if (id) {
        const dragonData = await getDragon(id)
        if (dragonData) {
          setDragon(dragonData)
        } else {
          navigate('/dragons')
        }
      }
    }
    fetchDragon()
  }, [id, getDragon, navigate])

  if (!dragon) {
    return <div className="dragons-details">Carregando...</div>
  }

  return (

      <DragonCard dragon={dragon} />

  )
} 