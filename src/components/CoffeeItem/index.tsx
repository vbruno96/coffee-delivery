import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react"
import { useState } from "react"
import { formatAmount } from "../../util/formatAmount"

interface Coffee {
  id: number
  name: string
  description: string
  amount: number
  image: string
  tags: string[]
}

interface CoffeeItemProps {
  coffee: Coffee
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {

  const imgUrl = new URL(coffee.image, import.meta.url).href
  const {currency, amount} = formatAmount(coffee.amount)

  const [quantity, setQuantity] = useState(1)

  function incrementQuantity() {
    setQuantity(prevState => prevState + 1)
  }

  function decrementQuantity() {
    setQuantity(prevState => {
      if (prevState === 1) return prevState
      return prevState - 1 
    })
  }
  
  return (
    <div className="w-[256px] h-[310px] flex flex-col items-center bg-gray-100 px-5 pb-5 rounded-tl-md rounded-tr-4xl rounded-br-md rounded-bl-4xl">
      <img className="-mt-5 mb-3" src={imgUrl} alt="" />
      <div className="flex gap-1">
        {
          coffee.tags.map(tag => (
            <span
              key={tag}
              className="bg-yellow-light text-yellow-dark px-2 py-1 rounded-full text-xs font-bold uppercase"
            >
              {tag}
            </span>
          ))
        }
      </div>
      <h1 className="mt-4 mb-2 text-brown-200 font-title text-lg font-bold">
        {coffee.name}
      </h1>
      <p className="text-brown-50 text-center text-2sm">
        {coffee.description}
      </p>
      <div className="w-full mt-[2.0625rem] flex justify-between items-center">
        <span className="text-brown-100 font-title text-xl font-bold">
          <i className="font-sans text-2sm font-normal not-italic">
            {currency}
          </i>
          {
            ' ' +
            amount
          }
        </span>
        <div className="flex gap-2">
          <div className="bg-gray-300 text-brown-600 flex items-center gap-1 p-2 rounded-md">
            <button
              onClick={decrementQuantity}
              className="text-purple"
            >
              <Minus size={14} weight="light" />
            </button>
            <span className="w-[1.125rem] text-center">
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className="text-purple"
            >
              <Plus size={14}  />
            </button>
          </div>
          <button className="bg-purple-dark text-gray-100 p-2 rounded-md">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}