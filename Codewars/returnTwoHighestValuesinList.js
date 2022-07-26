// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []


function twoHighest(arr) {
  if(arr.length === 0){ return []}
   let sorted = [...new Set(arr)].sort((a,b)=> a-b)
  console.log(sorted)
  if(arr.length === 1){
  return   [arr[arr.length-1]]
  }
  return [sorted[sorted.length - 1], sorted[sorted.length - 2]]
}



//clever
function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}


console.log(twoHighest([]), [])
console.log(twoHighest([15]), [15])
console.log(twoHighest([15, 20, 20, 17]), [20, 17])
console.log(twoHighest([13916,86833,47299,56662,73207,19773,51861,17642,36153,31904,3517,12596,36301,33615,27743,46070,50865,32768]),[ 86833, 73207 ])