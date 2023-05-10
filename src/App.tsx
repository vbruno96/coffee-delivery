import { Banner } from './components/Banner'
import { Navbar } from './components/Navbar'
import './global.css'

export function App() {

  return (
    <div className='bg-gray-50 antialiased'>
      <div className='max-w-8xl mx-auto lg:px-40'>
        <header>
          <Navbar />
          <Banner />
        </header>
      </div>
    </div>
  )
}
