function format(amount) {
  let power = Math.floor(Math.log10(amount))
  //examples: 1000 = 3, 3000 = 3, 10000 = 4.
  let mantissa = amount / Math.pow(10, power)
  if (power < 5) return amount.toFixed(2)
  return mantissa.toFixed(2) + "e" + power
}

function formatAmount(amount) {
  let power = Math.floor(Math.log10(amount))
  //examples: 1000 = 3, 3000 = 3, 10000 = 4.
  let mantissa = amount / Math.pow(10, power)
  if (power < 5) return amount.toFixed(0)
  return mantissa.toFixed(2) + "e" + power
}
