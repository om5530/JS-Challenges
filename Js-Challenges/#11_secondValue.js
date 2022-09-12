
function secondValue(arr) {
  let values = [...new Set(arr)].sort((a, b) => { a - b })

  if (values.length < 2) {
    return `${values[0]}`
  }
  if (values.length === 3) {
    return `${values[1]}`
  }
  if (values.length === 2) {
    return `${values[0]} ${values[1]}`
  }
  else {
    return `${values[1]} ${values[values.length - 2]}`
  }
}

console.log(secondValue([1]))
//1
console.log(secondValue([1, 2, 3, 4, 5]))
//2 4
console.log(secondValue([11, 22, 44]))
//11, 22, 44 === 22
console.log(secondValue([-11,2,3,7,67,88]))
//-11,2,3,7,67,88 === 2,67