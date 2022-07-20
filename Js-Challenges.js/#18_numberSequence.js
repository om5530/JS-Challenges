//count sequence, three numbers, first equal to third
//and middle one different, all three numbers equal does not count [4,4,4]

const first = [8, 6, 8, 6, 7, 4, 7]
//

const second = [4, 5, 5, 7, 5, 5, 9]
const third = [3, 3, 2, 8, 7, 6, 5]

//method 1
const count = (data) => {
  return data.reduce((total, item, index) => {
    console.log(item)
    console.log(index)
    console.log(item === data[index + 2]);
    console.log(item !== data[index + 1])
    const match = item === data[index + 2] && item !== data[index + 1]
    if (match) return total + 1
    return total
  }, 0)
}

console.log(1 + (true))
console.log(1 + (false))


//method 2
const count1 = (data) => 
  data.reduce((total, item, index) => 
    total + (item === data[index + 2] && item !== data[index + 1]),0
  ) 
console.log(count(first))