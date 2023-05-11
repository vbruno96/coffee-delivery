import { Banner } from "../../components/Banner";
import { CoffeeItem } from "../../components/CoffeeItem";
import { Navbar } from "../../components/Navbar";

import coffees from '../../data/coffees.json'

export function Shopp() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>
      <main className='flex flex-col gap-13 pt-8 pb-20 lg:pb-40'>
        <h2 className="text-brown-200 font-title text-2xl font-extrabold text-center md:text-left">
          Nossos cafés
        </h2>
        <div className="grid place-items-center gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {coffees.map(coffee => (
            <CoffeeItem key={coffee.id} coffee={coffee}/>
          ))}
        </div>
      </main>      
    </>
  )
}