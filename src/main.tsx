import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Providers from './components/Providers/index.tsx'
import './i18n/config.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Suspense fallback={<></>}>
        <App />
      </Suspense>
    </Providers>
  </StrictMode>,
)
