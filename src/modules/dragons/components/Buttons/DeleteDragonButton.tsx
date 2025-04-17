import { useState } from 'react'
import { Button } from '@/shared/components/Button'
import { IconTrash } from '@/shared/components/Icons'
import { Modal } from '@/shared/components/Modal'
import '../../styles/components/Buttons/delete-dragon-button.scss';
import { Dragon } from '../../types';
import { useDragons } from '../../hooks/useDragons';
interface DeleteDragonButtonProps {
  dragon: Dragon
  showLabel?: boolean
}

export function DeleteDragonButton({ dragon, showLabel = false }: DeleteDragonButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { deleteDragon } = useDragons()
  return (
    <>
      {showLabel ? (
        <Button.Outline
          onClick={() => setIsModalOpen(true)}
          iconLeft={<IconTrash />}
          colorType="danger"
        >
          Excluir
        </Button.Outline>
      ) : (
        <Button.Text
          onClick={() => setIsModalOpen(true)}
          iconLeft={<IconTrash />}
          colorType="danger"
        />
      )}

      <Modal.Confirmation
        isOpen={isModalOpen}
        title="Excluir Dragão"
        message={`Tem certeza que deseja excluir o dragão "${dragon?.name}"?`}
        onConfirm={() => {
          deleteDragon(dragon.id)
         
          setIsModalOpen(false)
        }}
        onCancel={() => setIsModalOpen(false)}
        confirmText="Excluir"
      />
    </>
  )
} 