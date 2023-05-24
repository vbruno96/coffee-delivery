import { useNavigate } from "react-router-dom";
import z from "zod"
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react";
import * as RadioGroup from "@radix-ui/react-radio-group"
import { useSnackbar } from "notistack"
import { Header } from "../../components/Header";
import { formatAmount } from "../../util/formatAmount";
import { CoffeeCart } from "../../components/CoffeeCart";
import { useShoppContext } from "../../hooks/useShoppContext";

const AddressFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  district: z.string(),
  neiborhood: z.string(),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.enum(['Cartão de Crédito', 'Cartão de Débito', 'Dinheiro'])
})

type AddreddFormData = z.infer<typeof AddressFormSchema>

export function Cart() {
  const { cartItems, totalAmount } = useShoppContext()
  const { register, handleSubmit, control, formState: { errors } } = useForm<AddreddFormData>({
    resolver: zodResolver(AddressFormSchema)
  })
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()

  function handleFinishOrder(data: AddreddFormData) {
    console.log(data)
    navigate('/finish', {state: {
      street: data.street,
      number: data.number,
      neiborhood: data.neiborhood,
      city: data.city,
      state: data.state,
      paymentMethod: data.paymentMethod
    }})
  }

  if (errors.paymentMethod) {
    enqueueSnackbar('Escolha uma forma de pagamento', {
      variant: 'error',
      preventDuplicate: true
    })
  }


  return (
    <>
      <Header inCart />
      <div className="flex flex-col xl:flex-row gap-8 py-10">
        <main className="xl:max-w-screen-sm flex flex-col gap-4">
          <h2 className="text-brown-200 font-title text-md font-bold">Complete seu pedido</h2>
          <form id="addressForm" onSubmit={handleSubmit(handleFinishOrder)} className="flex flex-col gap-3">
            <div className="flex flex-col gap-8 bg-gray-100 p-3 sm:p-10 rounded-md">
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
                  className="col-span-2 bg-gray-200 text-brown-100 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-yellow-dark focus:outline-none"
                  placeholder="CEP"
                  required
                  {...register('cep')}
                />
                <input
                  type="text"
                  className="col-span-6 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-yellow-dark focus:outline-none"
                  placeholder="Rua"
                  required
                  {...register('street')}
                />
                <input
                  type="text"
                  className="col-span-2 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-yellow-dark focus:outline-none"
                  placeholder="Número"
                  required
                  {...register('number')}
                />
                <div className="relative col-span-4 after:absolute after:top-3.5 after:right-3 after:content-['Opcional'] after:text-brown-50 after:text-sm after:italic">
                  <input
                    type="text"
                    className="w-full bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-yellow-dark focus:outline-none"
                    placeholder="Complemento"
                    {...register('district')}
                  />
                </div>
                
                <input
                  type="text"
                  className="col-span-2 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-yellow-dark focus:outline-none"
                  placeholder="Bairro"
                  required
                  {...register('neiborhood')}
                />
                <input
                  type="text"
                  className="col-span-3 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-yellow-dark focus:outline-none"
                  placeholder="Cidade"
                  required
                  {...register('city')}
                />
                <input
                  type="text"
                  className="col-span-1 bg-gray-200 text-brown-50 placeholder:text-brown-50 p-3 rounded text-2sm uppercase ring-1 ring-gray-300 focus:ring-yellow-dark focus:outline-none"
                  placeholder="UF"
                  required
                  {...register('state')}
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 bg-gray-100 p-3 sm:p-10 rounded-md">
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
              <Controller
                control={control}
                name="paymentMethod"
                render={({ field }) => (
                  <RadioGroup.Root 
                    onValueChange={field.onChange}
                    value={field.value}
                    required
                    className="flex flex-col md:flex-row gap-3"
                  >
                    <RadioGroup.Item value="Cartão de Crédito"
                      type="button"
                      className="md:flex-1 flex justify-center md:justify-start items-center gap-3 bg-gray-300 hover:bg-gray-400 text-brown-100 p-4 rounded-md text-sb uppercase data-[state=checked]:bg-purple-light data-[state=checked]:ring-1 data-[state=checked]:ring-purple data-[state=checked]:outline-none hover:transition hover:ease-in hover:duration-300"
                    >
                      <CreditCard
                        size={16}
                        className="text-purple"
                      />
                      Cartão de Crédito
                    </RadioGroup.Item>
                    <RadioGroup.Item value="Cartão de Débito"
                      type="button"
                      className="md:flex-1 flex justify-center md:justify-start items-center gap-3 bg-gray-300 hover:bg-gray-400 text-brown-100 p-4 rounded-md text-sb uppercase data-[state=checked]:bg-purple-light data-[state=checked]:ring-1 data-[state=checked]:ring-purple data-[state=checked]:outline-none hover:transition hover:ease-in hover:duration-300"
                    >
                      <Bank
                        size={16}
                        className="text-purple"
                      />
                      Cartão de Débito
                    </RadioGroup.Item>
                    <RadioGroup.Item value="Dinheiro"
                      className="md:flex-1 flex justify-center md:justify-start items-center gap-3 bg-gray-300 hover:bg-gray-400 text-brown-100 p-4 rounded-md text-sb uppercase data-[state=checked]:bg-purple-light data-[state=checked]:ring-1 data-[state=checked]:ring-purple data-[state=checked]:outline-none hover:transition hover:ease-in hover:duration-300"
                    >
                      <Money
                        size={16}
                        className="text-purple"
                      />
                      Dinheiro
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                )}
            />
            </div>
          </form>
        </main>
        <aside className="flex-1 flex flex-col gap-4">
          <h2 className="text-brown-200 font-title text-md font-bold">Cafés selecionados</h2>
          <div className="flex flex-col gap-6 bg-gray-100 p-6 sm:p-10 rounded-tl-md rounded-tr-5xl rounded-br-md rounded-bl-5xl">
            {cartItems.map(item => (
              <>
                <CoffeeCart
                  key={item.id}
                  amount={item.amount}
                  id={item.id}
                  img={item.img} name={item.name}
                  quantity={item.quantity}
                />
                <div className="h-px border-b border-gray-300"></div>
              </>
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