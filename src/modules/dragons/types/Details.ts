import { Dragon } from './dragon'

export interface DragonDetailsProps {
  dragon: Dragon
}

export interface DragonInfoFieldProps {
  label: string
  value: string
}

export interface DragonHistoriesProps {
  histories: string[]
} 