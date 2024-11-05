import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Providers from './components/Providers/index.tsx'
import './i18n/config.ts'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
    </Providers>
  </StrictMode>,
)
