import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import Logo from '../../assets/img/logo.svg'

export function Navbar() {
  return (
    <nav className='flex justify-between items-center py-8'>
      <img src={Logo} alt="Coffee Delivery Logo" />
      <div className="flex items-center gap-3">
        <button
          className='flex items-center gap-1 bg-purple-light text-purple-dark p-2 rounded-md text-2sm'
        >
          <MapPin
            size={22}
            weight="fill"
            className='text-purple'
          />
          Belo Horizonte
        </button>
        <button
          className="relative flex justify-center items-center bg-yellow-light p-2 rounded-md after:absolute after:-top-2 after:-right-2 after:flex after:justify-center after:items-center after:content-['13'] after:w-5 after:h-5 after:bg-yellow-dark after:rounded-full after:text-white after:text-sm after:leading-none after:font-bold"
        >
          <ShoppingCartSimple
            size={22}
            weight="fill"
            className='text-yellow-dark'
          />
        </button>
      </div>
    </nav>
  )
}