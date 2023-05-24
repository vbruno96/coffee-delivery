import { useShoppContext } from "../../hooks/useShoppContext"
import { Navigate } from "react-router-dom"

interface EnsureNotEmptyCartProps {
  children: JSX.Element
}

export function EnsureNotEmptyCart({ children }: EnsureNotEmptyCartProps) {
  const { cartItems } = useShoppContext()

  if (cartItems.length === 0) {
    return <Navigate to="/" />
  }
  
  return children
}