import { Banner } from './components/Banner'
import { CoffeeItem } from './components/CoffeeItem'
import { Navbar } from './components/Navbar'
import './global.css'

export function App() {

  const coffee = {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    amount: 9.9,
    tags: ['tradicional'],
    image: '../../assets/img/coffees/default-express.png'
  }

  return (
    <div className='bg-gray-50 antialiased'>
      <div className='max-w-8xl mx-auto lg:px-40'>
        <header>
          <Navbar />
          <Banner />
        </header>
        <main>
          <CoffeeItem  coffee={coffee}/>
        </main>
      </div>
    </div>
  )
}
