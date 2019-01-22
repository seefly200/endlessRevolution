function format(amount) {
  let power = Math.floor(Math.log10(amount))
  //the power is the number to the nearest integer 
  let mantissa = amount / Math.pow(10, power)
  if (power < 3) return amount.toFixed(2)
  return mantissa.toFixed(2) + "e" + power
}
