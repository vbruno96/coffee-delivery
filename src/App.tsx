import { Outlet } from 'react-router-dom'
import './global.css'


export function App() {

  return (
    <div className='min-h-screen bg-gray-50 antialiased'>
      <div className='w-full max-w-screen-2xl px-3 xl:mx-auto xl:px-40'>
        <Outlet />
      </div>
    </div>
  )
}
