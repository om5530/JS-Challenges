//check sum of array is equal to largest number in array

function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b
  })
  let largest = tempArr.pop()
  console.log(tempArr)
  let number = 0
  tempArr.forEach((item) => {
    number = number + item
  })
  return largest === number;
}

console.log(ArraySum([1, 2, 4, 13, 6]))
//return true 1+2+4+6 = 13

console.log(ArraySum([1, 2, 4, 34, 22]))
//return false 1+2+4+22  29!=34
