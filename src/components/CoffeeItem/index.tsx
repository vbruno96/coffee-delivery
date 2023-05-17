import { Minus, Plus, ShoppingCartSimple, Trash } from "@phosphor-icons/react"
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
  inCart?: boolean
}

export function CoffeeItem({ coffee, inCart }: CoffeeItemProps) {

  const imgUrl = new URL(coffee.image, import.meta.url).href
  const [currency, amount] = formatAmount(coffee.amount).split('\xa0') // get currency of string

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

  if (inCart) {
    return (
      <div className="flex justify-between px-1 py-2">
        <div className="flex flex-col sm:flex-row gap-5">
          <img src={imgUrl} alt="" className="w-16 h-16" />
          <div className="flex flex-col gap-2">
            <span className="text-brown-200">{coffee.name}</span>
            <div className="flex gap-2">
              <div className="bg-gray-300 text-brown-600 flex items-center gap-1 p-2 rounded-md">
                <button
                  onClick={decrementQuantity}
                  className="text-purple hover:text-purple-dark"
                >
                  <Minus size={14} weight="light" />
                </button>
                <span className="w-[1.125rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="text-purple hover:text-purple-dark"
                >
                  <Plus size={14}  />
                </button>
              </div>
              <button className="flex items-center gap-1 bg-gray-300 hover:bg-gray-400 text-brown-100 p-2 rounded-md text-sb uppercase">
                <Trash
                  size={16}
                  className="text-purple"
                />
                Remover
              </button>
            </div>
          </div>
        </div>
        <span className="text-brown-100 font-bold">
          {formatAmount(coffee.amount * quantity)}
        </span>
      </div>
      )
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
                  className="text-purple hover:text-purple-dark"
                >
                  <Minus size={14} weight="light" />
                </button>
                <span className="w-[1.125rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="text-purple hover:text-purple-dark"
                >
                  <Plus size={14}  />
                </button>
          </div>
          <button className="bg-purple-dark hover:bg-purple text-gray-100 p-2 rounded-md">
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}