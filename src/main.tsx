import { createRoot } from 'react-dom/client'
import './shared/styles/global.scss'

import { AppProvider } from './app/AppProvider'
import { App } from './app/App'

createRoot(document.getElementById('root')!).render(

    <AppProvider>
      <App />
    </AppProvider>

)
