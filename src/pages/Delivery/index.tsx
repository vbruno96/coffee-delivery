import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { useLocation } from "react-router-dom";

export function Delivery() {
  const { state } = useLocation()

  return (
    <>
      <Header inCart />
      <main className="flex flex-col items-center lg:items-start gap-10 lg:bg-delivery bg-no-repeat bg-right-bottom py-3 sm:pt-20 sm:pb-0">
        <div className="flex flex-col gap-1">
          <h1 className="text-yellow-dark font-title text-2xl font-extrabold text-center lg:text-left">Uhu! Pedido confirmado</h1>
          <p className="text-brown-200 text-lg text-center lg:text-left">Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="w-full sm:w-3/4 max-w-[32.875rem] bg-gradient-to-r from-yellow from-[2.61%] to-purple to-[98.76%] p-px rounded-tl-md rounded-tr-4xl rounded-bl-4xl rounded-br-md">
          <ul className="flex flex-col gap-8 bg-gray-50 w-full h-full p-4 sm:p-10 rounded-tl-md rounded-tr-4xl rounded-bl-4xl rounded-br-md">
            <li className="flex items-start sm:items-center gap-3">
              <span className="bg-purple text-gray-50 p-2 rounded-full">
                <MapPin size={32} weight="fill" />
              </span>
              <p>
                Entrega em <b>{`${state.street}, ${state.number}`}</b>
                <br/>{`${state.neiborhood} - ${state.city}, ${state.state}`}
              </p>
            </li>
            <li className="flex items-start sm:items-center gap-3">
              <span className="bg-yellow text-gray-50 p-2 rounded-full">
                <Timer size={32} weight="fill" />
              </span>
              <p>
                Previsão de entrega
                <br/><b>20 min - 30 min</b>
              </p>
            </li>
            <li className="flex items-start sm:items-center gap-3">
              <span className="bg-yellow-dark text-gray-50 p-2 rounded-full">
                <CurrencyDollar size={32} weight="fill" />
              </span>
              <p>
                Pagamento na entrega
                <br/><b>{state.paymentMethod}</b>
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}





