import { TableProps } from '@/shared/types/components/Table'
import '@/shared/styles/components/Table.scss'

export function Table<T>({
  columns,
  data,
  emptyMessage = 'Nenhum dado encontrado',
  className = ''
}: TableProps<T>) {
  if (data.length === 0) {
    return (
      <div className={`table-empty ${className}`}>
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className={`table-container ${className}`}>
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  width: column.width,
                  textAlign: column.align
                }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  style={{
                    textAlign: column.align
                  }}
                >
                  {column.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 