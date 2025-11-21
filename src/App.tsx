import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'

// Provide a safe fallback for __BASE_PATH__ so the app can be opened
// with simple static servers (like Live Server) that don't inject Vite defines.
declare const __BASE_PATH__: string | undefined;

function App() {
  const base = typeof __BASE_PATH__ !== 'undefined' ? __BASE_PATH__ : '/'

  return (
    <BrowserRouter basename={base}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App