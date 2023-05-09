import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'
import Logo from '../../assets/img/logo.svg'

export function Navbar() {
  return (
    <nav className='flex justify-between items-center lg:py-8'>
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
          className='flex justify-center items-center bg-yellow-light p-2 rounded-md'
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