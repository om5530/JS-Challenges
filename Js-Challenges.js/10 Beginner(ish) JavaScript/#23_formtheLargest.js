// input >> output example
// maxNumber (213) ===> return (321)

function maxNumber(n) {
  return   +n.toString().split("").sort((first, second) => second - first).join("")
}

//clever
// function maxNumber(n){
//   return Number(String(n).split("").sort().reverse().join(""))
// }

console.log(maxNumber(123456789))