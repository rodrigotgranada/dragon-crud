import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDragons } from '../hooks/useDragons'
import { Field } from '@/shared/components/Field/index'
import { FormWrapper } from '@/shared/components/FormWrapper'
import { HistoryField } from '../components/HistoryField'
import { Dragon } from '../types/dragon'
import '../styles/pages/EditPage.scss'

export default function EditPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { dragons, updateDragon } = useDragons()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [histories, setHistories] = useState<string[]>([])

  useEffect(() => {
    const dragon = dragons.find((d: Dragon) => d.id === id)
    if (dragon) {
      setName(dragon.name)
      setType(dragon.type)
      setHistories(dragon.histories)
    }
  }, [id, dragons])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await updateDragon(id!, { name, type, histories })
      navigate('/dragons')
    } catch (error) {
      console.error('Erro ao atualizar dragão:', error)
    }
  }

  const addHistory = () => {
    setHistories([...histories, ''])
  }

  const removeHistory = (index: number) => {
    setHistories(histories.filter((_, i) => i !== index))
  }

  const updateHistory = (index: number, value: string) => {
    const newHistories = [...histories]
    newHistories[index] = value
    setHistories(newHistories)
  }

  return (
    <div className="edit-form">
      <FormWrapper
        onSubmit={handleSubmit}
        onCancel={() => navigate('/dragons')}
        title="Editar Dragão"
      >
        <div className="edit-form__fields">
          <Field
            label="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Field
            label="Tipo"
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>

        <HistoryField
          histories={histories}
          onAdd={addHistory}
          onRemove={removeHistory}
          onChange={updateHistory}
        />
      </FormWrapper>
    </div>
  )
} 