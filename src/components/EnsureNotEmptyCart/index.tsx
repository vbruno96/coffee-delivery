import { Navigate } from 'react-router-dom'
import { useShoppContext } from '../../hooks/useShoppContext'

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
