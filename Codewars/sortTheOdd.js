// Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

function sortItOut(array) {
  let odd = []
  let even = []
    console.log(even)
  array.filter((item) => {
    if (item % 2 != 0) return  odd.push(item)
    else               return  even.push(item)
    })
    
  odd.sort((a, b) => a - b)
  even.sort((a, b) => b -a)
return [...odd,...even]
}

//clever
function sortItOut(array){
  return array.filter(a => Math.floor(a) % 2 !== 0).sort((a,b) => a - b)
  .concat(array.filter(a => Math.floor(a) % 2 === 0).sort((a,b) => b - a))
}
console.log(sortItOut([ 11, 33, 55, 55, 90.4, 4, 22, 44, 78 ]))
console.log(sortItOut([ 1.1, 2.2, 3.3, 4.4, 5.5, 6.6  ]))




function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}

console.log(findMissingLetter(['a','b','c','d','f']))