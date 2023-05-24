import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { formatAmount } from "../../util/formatAmount"
import { useShoppContext } from "../../hooks/useShoppContext"

interface CoffeeCartProps {
  id: number
  quantity: number
  amount: number
  name: string
  img: string
}

export function CoffeeCart({ id, quantity, amount, name, img }: CoffeeCartProps) {
  const { decrementItemCart, incrementItemCart, removeItemCart } = useShoppContext()

  function increment() {
    incrementItemCart(id)
  }
  
  return (
    <div className="flex justify-between px-1 py-2">
        <div className="flex flex-col sm:flex-row gap-5">
          <img src={img} alt="" className="w-16 h-16" />
          <div className="flex flex-col gap-2">
            <span className="text-brown-200">{name}</span>
            <div className="flex gap-2">
              <div className="bg-gray-300 text-brown-600 flex items-center gap-1 p-2 rounded-md">
                <button
                  onClick={() => decrementItemCart(id)}
                  className="text-purple hover:text-purple-dark"
                >
                  <Minus size={14} weight="light" />
                </button>
                <span className="w-[1.125rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={increment}
                  className="text-purple hover:text-purple-dark"
                >
                  <Plus size={14}  />
                </button>
              </div>
              <button
                className="flex items-center gap-1 bg-gray-300 hover:bg-gray-400 text-brown-100 p-2 rounded-md text-sb uppercase"
                onClick={() => removeItemCart(id)}
              >
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
          {formatAmount(amount * quantity)}
        </span>
      </div>
  )
}