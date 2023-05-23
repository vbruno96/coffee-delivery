import { useContext } from 'react'
import { MapPin, ShoppingCartSimple } from '@phosphor-icons/react'

import Logo from '../../assets/img/logo.svg'


import { ShoppContext } from '../../contexts/ShoppContext'
import { Link } from 'react-router-dom'

export function Navbar() {
  const { totalItems } = useContext(ShoppContext)
  return (
    <nav className='flex justify-between items-center py-8'>
      <Link to='/'>
        <img src={Logo} alt="Coffee Delivery Logo" />
      </Link>
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
        <Link
          to='/checkout'
          className={`relative flex justify-center items-center bg-yellow-light p-2 rounded-md `}
        >
          {
            totalItems > 0 && <span className='absolute -top-2 -right-2 w-5 h-5 flex justify-center items-center bg-yellow-dark rounded-full text-white text-sm leading-none font-bold'>
              {totalItems > 9 ? '+9' : totalItems}
            </span>
          }
          <ShoppingCartSimple
            size={22}
            weight="fill"
            className='text-yellow-dark'
          />
        </Link>
      </div>
    </nav>
  )
}