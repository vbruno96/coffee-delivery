export function formatAmount(amount: number) {
  const formatedAmount = new Intl.NumberFormat(
    'pt-BR',
    {
      style: 'currency',
      currency: 'BRL'
    }
  ).format(amount).split('\xa0') // get currency of string
  return {
    currency: formatedAmount[0],
    amount: formatedAmount[1]
  }
}