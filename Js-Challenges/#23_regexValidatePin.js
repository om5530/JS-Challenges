function validatePIN(pin) {
  const fourDigitsRegex = /^[0-9]{4}$/
  const sixDigitsRegex = /^[0-9]{6}$/

  const result1 = pin.match(fourDigitsRegex);
  const result2 = pin.match(sixDigitsRegex);

  return !(!result1 && !result2)
}


// solution 2
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6}$/.test(pin)
// }
console.log(validatePIN('123411'))
console.log(validatePIN('1234'))