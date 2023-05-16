import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { formatAmount } from "../../util/formatAmount";

import coffeesData from '../../data/coffees.json'
import { CoffeeItem } from "../../components/CoffeeItem";

export function Cart() {
  const coffees = coffeesData.filter((coffee, index) => index <= 1 ?? (coffee))

  return (
    <>
      <Header inCart />
      <div className="flex flex-col xl:flex-row gap-8 py-10">
        <main className="xl:max-w-screen-sm flex flex-col gap-4">
          <h2 className="text-brown-200 font-title text-md font-bold">Complete seu pedido</h2>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col gap-8 bg-gray-100 p-6 sm:p-10 rounded-md">
              <div className="relative pl-[1.875rem]">
              <label className="flex items-center gap-2 text-brown-200">
                <MapPinLine
                  size={22}
                  className="absolute left-0 text-yellow-dark"
                />
                Endereço de Entrega
              </label>
              <span className="text-brown-100 text-2sm">Informe o endereço onde deseja receber seu pedido</span>
              </div>
              <div className="grid grid-cols-6 gap-x-3 gap-y-4">
                <input
                  type="text"
                  className="col-span-2 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-purple focus:outline-none"
                  placeholder="CEP"
                />
                <input
                  type="text"
                  className="col-span-6 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-purple focus:outline-none"
                  placeholder="Rua"
                />
                <input
                  type="text"
                  className="col-span-2 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-purple focus:outline-none"
                  placeholder="Número"
                />
                <input
                  type="text"
                  className="col-span-4 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-purple focus:outline-none"
                  placeholder="Complemento"
                />
                <input
                  type="text"
                  className="col-span-2 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-purple focus:outline-none"
                  placeholder="Bairro"
                />
                <input
                  type="text"
                  className="col-span-3 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-purple focus:outline-none"
                  placeholder="Cidade"
                />
                <input
                  type="text"
                  className="col-span-1 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-purple focus:outline-none"
                  placeholder="UF"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 bg-gray-100 p-6 sm:p-10 rounded-md">
              <div className="relative pl-[1.875rem]">
                <label className="flex items-center gap-2 text-brown-200">
                  <CurrencyDollar
                    size={22}
                    className="absolute left-0 text-purple"
                  />
                  Pagamento
                </label>
                <span className="text-brown-100 text-2sm">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <button
                  className="md:flex-1 flex justify-center md:justify-start items-center gap-3 bg-gray-300 hover:bg-purple-light text-brown-100 p-4 rounded-md text-sb uppercase hover:ring-1 hover:ring-purple focus:ring-1 focus:ring-purple focus:outline-none hover:transition hover:ease-in hover:duration-300"
                >
                  <CreditCard
                    size={16}
                    className="text-purple"
                  />
                  Cartão de Crédito
                </button>
                <button
                  className="md:flex-1 flex justify-center md:justify-start items-center gap-3 bg-gray-300 hover:bg-purple-light text-brown-100 p-4 rounded-md text-sb uppercase hover:ring-1 hover:ring-purple focus:ring-1 focus:ring-purple focus:outline-none hover:transition hover:ease-in hover:duration-300"
                >
                  <Bank
                    size={16}
                    className="text-purple"
                  />
                  Cartão de Débito
                </button>
                <button
                  className="md:flex-1 flex justify-center md:justify-start items-center gap-3 bg-gray-300 hover:bg-purple-light text-brown-100 p-4 rounded-md text-sb uppercase hover:ring-1 hover:ring-purple focus:ring-1 focus:ring-purple focus:outline-none hover:transition hover:ease-in hover:duration-300"
                >
                  <Money
                    size={16}
                    className="text-purple"
                  />
                  Dinheiro
                </button>
              </div>
            </div>
          </form>
        </main>
        <aside className="flex-1 flex flex-col gap-4">
          <h2 className="text-brown-200 font-title text-md font-bold">Cafés selecionados</h2>
          <div className="flex flex-col gap-6 bg-gray-100 p-6 sm:p-10 rounded-tl-md rounded-tr-5xl rounded-br-md rounded-bl-5xl">
            {coffees.map(coffee => (
              <>
                <CoffeeItem key={coffee.id} coffee={coffee} inCart />
                <div className="h-px border-b border-gray-300"></div>
              </>
            ))}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-brown-100">
                <span className="text-2sm">Total de itens</span>
                <span>{formatAmount(29.7)}</span>
              </div>
              <div className="flex justify-between items-center text-brown-100">
                <span className="text-2sm">Entrega</span>
                <span>{formatAmount(3.5)}</span>
              </div>
              <div className="flex justify-between items-center text-brown-200 text-lg font-bold">
                <span>Total</span>
                <span>{formatAmount(33.2)}</span>
              </div>
            </div>
            <button className="w-full bg-yellow hover:bg-yellow-dark text-white px-2 py-3 rounded-md font-bold text-lb uppercase">
                Confirmar Pedido
              </button>
          </div>
        </aside>
      </div>
    </>
  )
}