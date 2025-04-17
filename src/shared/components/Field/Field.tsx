import { InputHTMLAttributes } from 'react'
import { FieldProps } from '@/shared/types/components/Field'
import styles from '@/shared/styles/components/Field.scss'

export const Field = ({ label, ...props }: FieldProps) => {
  return (
    <div className={styles.field}>
      {label && <label className={styles.field__label}>{label}</label>}
      <div className={styles.field__inputWrapper}>
        <input className={styles.field__input} {...props} />
      </div>
    </div>
  )
} 