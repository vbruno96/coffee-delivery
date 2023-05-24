import { Outlet } from 'react-router-dom'
import './global.css'
import { ShoppContextProvider } from './contexts/ShoppContext'
import { SnackbarProvider } from 'notistack'

export function App() {
  return (
    <SnackbarProvider>
      <ShoppContextProvider>
        <div className="min-h-screen bg-gray-50 bg-blur bg-no-repeat antialiased">
          <div className="w-full max-w-screen-2xl px-3 xl:mx-auto xl:px-20 2xl:px-40">
            <Outlet />
          </div>
        </div>
      </ShoppContextProvider>
    </SnackbarProvider>
  )
}
