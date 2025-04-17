import { useEffect } from 'react'
import { useDragons } from '../hooks/useDragons'
import { Table } from '@/shared/components/Table'
import { Dragon } from '../types/dragon'
import { DeleteDragonButton } from '../components/Buttons/DeleteDragonButton'
import '../styles/pages/ListPage.scss'
import { EditDragonButton } from '../components/Buttons/EditDragonButton'
import { ViewDragonButton } from '../components/Buttons/ViewDragonButton'
import { NewDragonButton } from '../components/Buttons/NewDragonButton'


import { DragonListCard } from '../components/DragonListCard'

export default function ListPage() {
  const { dragons, fetchDragons } = useDragons()


  useEffect(() => {
    fetchDragons()
  }, [fetchDragons])

   const columns = [
    {
      key: 'name',
      title: 'Nome',
      render: (dragon: Dragon) => dragon.name
    },
    {
      key: 'type',
      title: 'Tipo',
      render: (dragon: Dragon) => dragon.type
    },
    {
      key: 'createdAt',
      title: 'Data de Criação',
      render: (dragon: Dragon) => new Date(dragon.createdAt).toLocaleDateString()
    },
    {
      key: 'actions',
      title: 'Ações',
      align: 'right' as const,
      width: '180px',
      render: (dragon: Dragon) => (
        <div className="table-actions">
          <ViewDragonButton dragonId={dragon.id}  />
          <EditDragonButton dragonId={dragon.id} />
          <DeleteDragonButton dragon={dragon}
           
          />
        </div>
      )
    }
  ]



  return (
    <div className="dragons-list">
      <div className="dragons-list__header">
        <div className="dragons-list__title">
          <h1>Dragões</h1>
          <p>Gerencie seus dragões e suas histórias</p>
        </div>
        <NewDragonButton />
      </div>

      <div className="dragons-list__table">
        <Table<Dragon>
          columns={columns}
          data={dragons}
          emptyMessage="Nenhum dragão encontrado"
        />
      </div>

      <div className="dragons-list__cards">
        {dragons.map(dragon => (
          <DragonListCard
            key={dragon.id}
            dragon={dragon}
           
          />
        ))}
        {dragons.length === 0 && (
          <p className="dragons-list__empty">Nenhum dragão encontrado</p>
        )}
      </div>
    </div>
  )
} 