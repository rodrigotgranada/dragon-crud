import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDragons } from '../hooks/useDragons'
import { Field } from '@/shared/components/Field/index'
import { FormWrapper } from '@/shared/components/FormWrapper'
import { HistoryField } from '../components/HistoryField'
import '../styles/pages/CreatePage.scss'

export default function CreatePage() {
  const navigate = useNavigate()
  const { createDragon } = useDragons()
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [histories, setHistories] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createDragon({ name, type, histories })
      navigate('/dragons')
    } catch (error) {
      console.error('Erro ao criar dragão:', error)
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
    <div className="create-form">
      <FormWrapper
        onSubmit={handleSubmit}
        onCancel={() => navigate('/dragons')}
        title="Criar Dragão"
      >
        <div className="create-form__fields">
          <Field
            label="Nome"
            type="text"
            placeholder='Digite o nome do dragão'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Field
            label="Tipo"
            type="text"
            placeholder='Digite o tipo do dragão'
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