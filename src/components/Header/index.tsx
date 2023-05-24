import { Banner } from '../Banner'
import { Navbar } from '../Navbar'

interface HeaderProps {
  inCart?: boolean
}

export function Header({ inCart }: HeaderProps) {
  return (
    <header>
      <Navbar />
      {!inCart ? <Banner /> : ''}
    </header>
  )
}
