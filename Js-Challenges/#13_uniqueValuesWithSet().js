//unique values using set() data structure


// function unique(str) {
//   let tempStr = new Set();
//   for(let letter of str){
//   if(tempStr.has(letter)){
//     return false
//   }
//   tempStr.add(letter)
//   }
//   return true
// }

function unique(str){
  return new Set(str).size === str.length
}

console.log(unique("abcd"))
//return true
console.log(unique("abcdade"))
//return false ad = duplicate