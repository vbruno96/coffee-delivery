import './global.css'
import { Cart } from './pages/Cart'
import { Shopp } from './pages/Shopp'

export function App() {

  return (
    <div className='min-h-screen bg-gray-50 antialiased'>
      <div className='w-full max-w-screen-2xl px-3 xl:mx-auto xl:px-40'>
        <Cart />
      </div>
    </div>
  )
}
