import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { AppRoutes } from './router'

// Provide a safe fallback for __BASE_PATH__ so the app can be opened
// with simple static servers (like Live Server) that don't inject Vite defines.
declare const __BASE_PATH__: string | undefined;

function App() {
  const base = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/'

  return (
    <BrowserRouter basename={base}>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><p className="text-gray-600 text-lg">Chargement...</p></div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  )
}

export default App