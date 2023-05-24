import { useSnackbar } from 'notistack'
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'

type Props = { children: ReactNode }

interface CartItem {
  id: number
  quantity: number
  amount: number
  name: string
  img: string
}

type ShoppContextData = {
  cartItems: CartItem[]
  removeItemCart: (coffeeId: number) => void
  addItemCart: (cartItem: CartItem) => void
  totalItems: number
  totalAmount: number
  decrementItemCart: (id: number) => void
  incrementItemCart: (id: number) => void
}

export const ShoppContext = createContext({} as ShoppContextData)

export function ShoppContextProvider({ children }: Props) {
  const [totalItems, setTotalItems] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const { enqueueSnackbar } = useSnackbar()

  const addItemCart = useCallback(
    (cartItem: CartItem) => {
      setCartItems((prevState) => [
        ...prevState.filter((item) => item.id !== cartItem.id),
        cartItem,
      ])
      enqueueSnackbar(`${cartItem.name} adicionado ao carrinho!`, {
        variant: 'success',
      })
    },
    [enqueueSnackbar],
  )

  const removeItemCart = useCallback(
    (coffeeId: number) => {
      const cartItemsWithoutSelectedItem = cartItems.filter(
        (item) => item.id !== coffeeId,
      )
      setCartItems(cartItemsWithoutSelectedItem)
    },
    [cartItems],
  )

  const decrementItemCart = useCallback((id: number) => {
    setCartItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id && item.quantity > 1) {
          item.quantity -= 1
        }

        return item
      }),
    )
  }, [])

  const incrementItemCart = useCallback((id: number) => {
    setCartItems((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          item.quantity += 1
        }

        return item
      }),
    )
  }, [])

  useEffect(() => {
    const cart = cartItems.reduce(
      (acc, cartItem) => {
        acc.quantityItems += cartItem.quantity
        acc.totalAmount += cartItem.quantity * cartItem.amount
        return acc
      },
      {
        quantityItems: 0,
        totalAmount: 0,
      },
    )
    setTotalItems(cart.quantityItems)
    setTotalAmount(cart.totalAmount)
  }, [cartItems, setTotalItems, setTotalAmount])

  return (
    <ShoppContext.Provider
      value={{
        totalAmount,
        totalItems,
        removeItemCart,
        addItemCart,
        cartItems,
        decrementItemCart,
        incrementItemCart,
      }}
    >
      {children}
    </ShoppContext.Provider>
  )
}
