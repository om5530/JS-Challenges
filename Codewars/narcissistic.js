// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.


//for loop
// function narcissistic(value) {
//   let temp = value.toString().split('')
//   let sum = 0
//   console.log(temp)
//   for( let i = 0 ; i < temp.length ; i++){
//     // console.log(temp[i]) 
//     // console.log(temp.length)
//     console.log(Math.pow(temp[i], temp.length))
//     sum = sum + Math.pow(temp[i], temp.length)
//     console.log(sum)
//   }
//   return sum === value
// }

//map 
function narcissistic(value) {
  let tempArr = [...value.toString()]
  let sum = null
  tempArr.map((item)=> sum = sum + Math.pow(item, tempArr.length)  )
  return sum === value
}


console.log(narcissistic(153))