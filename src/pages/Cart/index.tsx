import { Fragment } from "react";
import { Header } from "../../components/Header";
import { formatAmount } from "../../util/formatAmount";
import { CoffeeCart } from "../../components/CoffeeCart";
import { useShoppContext } from "../../hooks/useShoppContext";
import { CartForm } from "../../components/CartForm";

export function Cart() {
  const { cartItems, totalAmount } = useShoppContext()

  return (
    <>
      <Header inCart />
      <div className="flex flex-col xl:flex-row gap-8 py-10">
        <main className="xl:max-w-screen-sm flex flex-col gap-4">
          <h2 className="text-brown-200 font-title text-md font-bold">Complete seu pedido</h2>
          <CartForm />
        </main>
        <aside className="flex-1 flex flex-col gap-4">
          <h2 className="text-brown-200 font-title text-md font-bold">Cafés selecionados</h2>
          <div className="flex flex-col gap-6 bg-gray-100 p-6 sm:p-10 rounded-tl-md rounded-tr-5xl rounded-br-md rounded-bl-5xl">
            {cartItems.map(item => (
              <Fragment key={item.id}>
                <CoffeeCart
                  amount={item.amount}
                  id={item.id}
                  img={item.img} name={item.name}
                  quantity={item.quantity}
                />
                <div className="h-px border-b border-gray-300"></div>
              </Fragment>
            ))}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-brown-100">
                <span className="text-2sm">Total de itens</span>
                <span>{formatAmount(totalAmount)}</span>
              </div>
              <div className="flex justify-between items-center text-brown-100">
                <span className="text-2sm">Entrega</span>
                <span>{formatAmount(3.5)}</span>
              </div>
              <div className="flex justify-between items-center text-brown-200 text-lg font-bold">
                <span>Total</span>
                <span>{formatAmount(totalAmount + 3.5)}</span>
              </div>
            </div>
            <button
              form="addressForm" 
              className="w-full bg-yellow hover:bg-yellow-dark text-white px-2 py-3 rounded-md font-bold text-lb uppercase">
              Confirmar Pedido
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}