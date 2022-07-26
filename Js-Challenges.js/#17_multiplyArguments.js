//multiply1 arguments, unlimited arguments, if 0 add


//method 1
// function multiply() {
//   const args = [...arguments]
//   const result = args.reduce((total, item) => {
//     console.log(item * total)
//     console.log(item + total)
//     return item > 0 ? item * total : item + total

//   }, 1)
//   return result
// }

//method 2
const multiply1 = (...args) => {
  const result = args.reduce((total, item) => {
    return item > 0 ? item * total : item + total
  }, 1)
  return result
}

console.log(multiply1(4, 5))
//4 * 5 = 20 
console.log(multiply1(1, 2, 3, 5))
//1*2*3*5 = 30
console.log(multiply1(2,0,4,2))


function add(){
  args = [...arguments]
  sum = 0
  const result = args.map((item)=>{
    sum += item
  })
  return result
}

console.log(add((1)(2)(3)(4)))