import { Coffee, Package, ShoppingCartSimple, Timer } from "@phosphor-icons/react";

export function Banner() {
  return (
    <div className="bg-coffee bg-cover bg-left md:bg-no-repeat md:bg-contain lg:py-22">
      <section className="w-full lg:max-w-xl flex flex-col gap-[4.125rem]">
        <div className="flex flex-col text-center md:text-left gap-4">
          <h1 className="text-brown-600 text-2xl md:text-3xl font-title">Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="max-w-sm lg:max-w-full text-brown-200 text-md md:text-lg">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <ul className="grid lg:grid-cols-2 lg:grid-rows-2  gap-x-10 gap-y-5 justify-center md:justify-start text-brown-100">
          <li className="flex items-center gap-3">
            <span className="flex justify-center items-center bg-yellow-dark text-gray-100 p-2 rounded-full">
              <ShoppingCartSimple size={16} weight="fill" />
            </span>
            Compra simples e segura
          </li>
          <li className="flex items-center gap-3">
            <span className="flex justify-center items-center bg-brown-100 text-gray-100 p-2 rounded-full">
              <Package size={16} weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </li>
          <li className="flex items-center gap-3">
            <span className="flex justify-center items-center bg-yellow text-gray-100 p-2 rounded-full">
              <Timer size={16} weight="fill" />
            </span>
            Entrega rápida e rastreada
          </li>
          <li className="flex items-center gap-3">
            <span className="flex justify-center items-center bg-purple text-gray-100 p-2 rounded-full">
              <Coffee size={16} weight="fill" />
            </span>
            O café chega fresquinho até você
          </li>
        </ul>
      </section>
    </div>
  )
}