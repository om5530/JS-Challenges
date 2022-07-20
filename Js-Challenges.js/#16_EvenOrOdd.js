//Odd or even 

//sum(56) - Odd
//5+6 = 11
//11 % 2 = 1

//sum(745) - Even
//7+4+5 = 16
// 16 % 2 = 0

//Number To String
//.toString()
//+ ''

//String To Number
//ParseInt - for integer
//parseFloat - for decimals
//Number - return NaN if not a number


//method1
let sum = (number) => {
  const items = [...(number + '')]
  const result = items.reduce((total, item) => {
    return total + Number(item)
  }, 0)
  console.log(result)
  return result % 2 === 0 ? 'EVEN' : 'ODD'
}

//method2
let sum1 = (number) => {
 return [...(number.toString())].reduce((total, item) =>  total + Number(item), 0) % 2 === 0 ? 'EVEN' : 'ODD'
}

console.log(sum(56))
console.log(sum1(745))


const xx = (number) => [...(number)]
console.log(xx(23456));
//why we need to convert into string coz 'numer is not iterablen'