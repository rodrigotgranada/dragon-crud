import { format } from 'date-fns-tz'

export function getCurrentDateTimeISO() {
  return format(new Date(), "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
}

export function formatDateTime(dateString: string): string {
  const date = new Date(dateString)
  
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Sao_Paulo'
  })
}